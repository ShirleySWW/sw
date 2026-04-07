Attribute VB_Name = "ProcurementImport"
Option Explicit

' Configuration - adjust these constants to match your template
Const TEMPLATE_TARGET_SHEET As String = "TORPS_Schedule" ' change to your template sheet name
Const TEMPLATE_KEY_COLUMN As String = "A" ' column letter in template that contains Package ID
Const TEMPLATE_FIRST_DATA_ROW As Long = 2 ' first data row in template

Sub UpdateFromProcurementFile()
    Dim fName As Variant
    fName = Application.GetOpenFilename("Excel Files (*.xls*), *.xls*", , "Select Procurement Register file")
    If fName = False Then Exit Sub

    Application.ScreenUpdating = False
    Dim wbSrc As Workbook
    Set wbSrc = Workbooks.Open(fName, ReadOnly:=True)
    Dim wsSrc As Worksheet
    On Error Resume Next
    Set wsSrc = wbSrc.Worksheets("Procurement Schedule (Delivery)")
    If wsSrc Is Nothing Then
        MsgBox "Sheet 'Procurement Schedule (Delivery)' not found in the selected file.", vbExclamation
        wbSrc.Close SaveChanges:=False
        Application.ScreenUpdating = True
        Exit Sub
    End If
    On Error GoTo 0

    ' Copy used range to a temporary sheet in this workbook
    wsSrc.UsedRange.Copy
    Dim wsTemp As Worksheet
    On Error Resume Next
    Set wsTemp = ThisWorkbook.Worksheets("ImportedProcurement")
    If wsTemp Is Nothing Then
        Set wsTemp = ThisWorkbook.Worksheets.Add(After:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count))
        wsTemp.Name = "ImportedProcurement"
    Else
        wsTemp.Cells.Clear
    End If
    On Error GoTo 0

    wsTemp.Range("A1").PasteSpecial xlPasteValues
    Application.CutCopyMode = False

    wbSrc.Close SaveChanges:=False

    ' Convert to table if not already
    Dim lo As ListObject
    If wsTemp.ListObjects.Count = 0 Then
        Set lo = wsTemp.ListObjects.Add(xlSrcRange, wsTemp.UsedRange, , xlYes)
        lo.Name = "tblImportedProcurement"
    Else
        Set lo = wsTemp.ListObjects(1)
    End If

    MsgBox "Procurement data imported to sheet 'ImportedProcurement'. Run 'MapImportedToTemplate' to update template.", vbInformation
    Application.ScreenUpdating = True
End Sub

Sub MapImportedToTemplate()
    ' This routine maps rows from ImportedProcurement to your template by Package ID.
    ' It is intentionally conservative: it only updates cells that match by Package ID.

    Dim wsImported As Worksheet, wsTarget As Worksheet
    On Error Resume Next
    Set wsImported = ThisWorkbook.Worksheets("ImportedProcurement")
    Set wsTarget = ThisWorkbook.Worksheets(TEMPLATE_TARGET_SHEET)
    On Error GoTo 0

    If wsImported Is Nothing Or wsTarget Is Nothing Then
        MsgBox "Required sheets not found. Ensure 'ImportedProcurement' and target sheet exist.", vbExclamation
        Exit Sub
    End If

    Dim lo As ListObject
    Set lo = wsImported.ListObjects(1)

    ' Identify header columns in imported table
    Dim hdrs As Range, i As Long, pkgCol As Long
    Set hdrs = lo.HeaderRowRange
    pkgCol = 0
    For i = 1 To hdrs.Columns.Count
        If LCase(Trim(hdrs.Cells(1, i).Value)) Like "*package*" Then
            pkgCol = i
            Exit For
        End If
    Next i
    If pkgCol = 0 Then
        MsgBox "Package ID column not found in imported data.", vbExclamation
        Exit Sub
    End If

    ' Build a map of target package IDs to row numbers
    Dim dict As Object
    Set dict = CreateObject("Scripting.Dictionary")
    Dim r As Long, key As String
    r = TEMPLATE_FIRST_DATA_ROW
    Do While wsTarget.Range(TEMPLATE_KEY_COLUMN & r).Value <> ""
        key = CStr(wsTarget.Range(TEMPLATE_KEY_COLUMN & r).Value)
        If Not dict.Exists(key) Then dict.Add key, r
        r = r + 1
    Loop

    ' For each imported row, if package ID found in target, update matching columns by header name
    Dim impRow As Range, col As Long, tgtCol As Long
    For Each impRow In lo.DataBodyRange.Rows
        key = CStr(impRow.Cells(1, pkgCol).Value)
        If dict.Exists(key) Then
            Dim tgtRowNum As Long: tgtRowNum = dict(key)
            ' Loop through imported headers and copy date-like columns to template by header name
            For col = 1 To hdrs.Columns.Count
                Dim hName As String: hName = Trim(hdrs.Cells(1, col).Value)
                If LCase(hName) <> "" Then
                    ' find column in target with same header text in row 1
                    On Error Resume Next
                    tgtCol = 0
                    tgtCol = Application.Match(hName, wsTarget.Rows(1), 0)
                    On Error GoTo 0
                    If Not IsError(tgtCol) And tgtCol > 0 Then
                        wsTarget.Cells(tgtRowNum, tgtCol).Value = impRow.Cells(1, col).Value
                    End If
                End If
            Next col
        End If
    Next impRow

    MsgBox "Mapping complete. Template updated where Package IDs matched.", vbInformation
End Sub

Sub RefreshAllQueriesAndImport()
    ' Optional: refresh Power Queries then call UpdateFromProcurementFile
    On Error Resume Next
    ThisWorkbook.RefreshAll
    On Error GoTo 0
    Call UpdateFromProcurementFile
End Sub
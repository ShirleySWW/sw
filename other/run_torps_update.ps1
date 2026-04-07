param(
    [Parameter(Mandatory=$true)]
    [string]$TemplatePath,
    [Parameter(Mandatory=$true)]
    [string]$ProcurementPath
)

$ErrorActionPreference = 'Stop'

$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false

try {
    # Open template (macro-enabled workbook)
    $wb = $excel.Workbooks.Open($TemplatePath)

    # Remove existing ImportedProcurement sheet if present
    try {
        $existing = $wb.Worksheets.Item('ImportedProcurement')
        if ($existing -ne $null) { $existing.Delete() }
    } catch {}

    # Open procurement source as read-only
    $wbSrc = $excel.Workbooks.Open($ProcurementPath, $null, $true)
    try {
        $wsSrc = $wbSrc.Worksheets.Item('Procurement Schedule (Delivery)')
    } catch {
        throw "Sheet 'Procurement Schedule (Delivery)' not found in source workbook."
    }

    # Copy used range values to new sheet in template
    $dest = $wb.Worksheets.Add()
    $dest.Name = 'ImportedProcurement'
    $used = $wsSrc.UsedRange
    $used.Copy()
    # xlPasteValues = -4163
    $dest.Range('A1').PasteSpecial(-4163)
    $excel.CutCopyMode = $false

    # Close source workbook
    $wbSrc.Close($false)

    # Optional: convert to table handled by VBA MapImportedToTemplate

    # Run mapping macro (expects MapImportedToTemplate to exist in template)
    $excel.Run('MapImportedToTemplate')

    # Save and close
    $wb.Save()
    $wb.Close()

    Write-Output "Update completed successfully."
}
catch {
    Write-Error "Error: $_"
    if ($wb -and $wb.Saved -eq $false) { $wb.Close($false) }
}
finally {
    if ($excel) { $excel.Quit(); [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null }
}

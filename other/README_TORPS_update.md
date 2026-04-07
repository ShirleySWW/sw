Goal
- Provide a hybrid Power Query + VBA workflow to quickly update the `LOR TORPS Template v2.0 J70.xlsm` using the client's Procurement Register.

Files added
- `powerquery_procurement_m.txt` — Power Query M code for importing and normalizing the Procurement Schedule (Delivery) sheet.
- `vba_update_procurement.bas` — VBA module to import the sheet into `ImportedProcurement`, convert it to a table and map values into the template.

Quick steps (recommended hybrid flow)
1. Open `LOR TORPS Template v2.0 J70.xlsm` in Excel and enable macros.
2. Add the Power Query (optional):
   - Data > Get Data > From File > From Workbook, choose the procurement file (`Procurement Register - SPW.xlsx`).
   - In Power Query Editor, open Advanced Editor and replace with contents of `powerquery_procurement_m.txt` (update `FilePath` if you prefer hard-coded path).
   - Close & Load to a table named (or loaded to) a new sheet.

3. Import the VBA module:
   - Press `Alt+F11` to open VBA Editor.
   - File > Import File... and choose `vba_update_procurement.bas`.
   - Adjust the configuration constants at the top of the module:
     - `TEMPLATE_TARGET_SHEET` = name of the sheet in the template that contains the schedule (e.g., "TORPS_Schedule").
     - `TEMPLATE_KEY_COLUMN` = column letter where Package IDs are listed in the template (e.g., "A").
     - `TEMPLATE_FIRST_DATA_ROW` = first row number where package data starts.

4. Run the macro:
   - From Excel run macro `UpdateFromProcurementFile` (it will prompt you to select the procurement file). This copies the `Procurement Schedule (Delivery)` sheet into `ImportedProcurement` and converts it to a table.
   - Then run `MapImportedToTemplate` to map by Package ID and update date columns in your template (it matches headers in row 1).

Notes & future-proofing
- The Power Query M selects columns containing keywords (planned, actual, forecast, date) so if forecast columns are later added they will be picked up and normalized.
- The VBA mapping is header-driven: it finds columns in your template by matching header text in row 1. Keep header texts consistent across import and template for automatic mapping.
- If you prefer fully automatic updates without manual file selection, we can add a small scheduler script and a PowerShell wrapper to open Excel and run the macro. This requires the machine to have Excel and to allow macros to run.

Next recommended steps I can perform now (pick one or I'll proceed automatically):
- Customize the constants in the VBA module for your template and test mapping against your template file (I will not modify the `.xlsm` workbook directly; I'll provide instructions to import the module).
- Create a PowerShell script to run the macro automatically and a Task Scheduler instruction to run weekly.
- Test the flow end-to-end if you allow me to run PowerShell here (note: this environment can't run Excel GUI; I'll provide scripts you can run locally).

Automatic runner and scheduling

- `run_torps_update.ps1` — PowerShell script that copies the `Procurement Schedule (Delivery)` sheet from the procurement workbook into the template as `ImportedProcurement`, then runs the VBA `MapImportedToTemplate` macro and saves the template.

Usage (one-off):

Run in an elevated PowerShell prompt (or regular if your ExecutionPolicy allows):

```powershell
.\run_torps_update.ps1 -TemplatePath "C:\Users\Yingxue.Wang\OneDrive - Laing ORourke\Fun\VS\sw\other\LOR TORPS Template v2.0 J70.xlsm" -ProcurementPath "C:\Users\Yingxue.Wang\OneDrive - Laing ORourke\Fun\VS\sw\other\Procurement Register - SPW.xlsx"
```

Scheduling via Task Scheduler:

1. Open Task Scheduler > Create Task.
2. Give it a name (e.g., `TORPS Weekly Update`).
3. Trigger: Weekly, choose day/time.
4. Action: Start a program: `powershell.exe`
    - Add arguments:
       `-NoProfile -ExecutionPolicy Bypass -File "C:\Users\Yingxue.Wang\OneDrive - Laing ORourke\Fun\VS\sw\other\run_torps_update.ps1" -TemplatePath "C:\Users\Yingxue.Wang\OneDrive - Laing ORourke\Fun\VS\sw\other\LOR TORPS Template v2.0 J70.xlsm" -ProcurementPath "C:\Users\Yingxue.Wang\OneDrive - Laing ORourke\Fun\VS\sw\other\Procurement Register - SPW.xlsx"`
5. Configure to run whether user is logged on or not and store password if needed. Ensure the account has access to the OneDrive path and Excel is available on that machine.

Limitations and notes:

- The script uses Excel COM and requires Excel installed on the machine that runs the task.
- The script runs Excel invisibly; if a modal dialog appears in Excel (e.g., Protected View), the script may hang—ensure the files are trusted or adjust Excel Trust Center settings appropriately.
- I cannot run or test Excel automation from this environment; please run the one-off command above on your machine and tell me any errors and I'll adjust the script.

Importable Task Scheduler XML

An importable Task Scheduler XML is included: `task_TORPS_weekly.xml`.

To import the task:

1. Open Task Scheduler.
2. Action > Import Task...
3. Select `task_TORPS_weekly.xml` from this folder.
4. Edit the following fields in the imported task before saving:
   - Security options: set the user account to run the task (or keep default and provide password).
   - Start boundary / schedule if you want a different day/time.
   - Ensure the action's `Arguments` line points to the correct paths for `run_torps_update.ps1`, the template and procurement files.

Notes:

- Replace `USERID_HERE` in the XML if you edit the file directly; when importing via Task Scheduler you can set the account from the UI.
- If your environment requires running under an account with network/OneDrive access, configure that in the task's Security Options.

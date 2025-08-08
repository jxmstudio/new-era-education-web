# PowerShell script to update domain references from neweralearning.com.au to neweraeducation.com.au

Write-Host "Updating domain references from neweralearning.com.au to neweraeducation.com.au..." -ForegroundColor Green

# Get all HTML files
$htmlFiles = Get-ChildItem -Path "." -Filter "*.html" -Recurse

foreach ($file in $htmlFiles) {
    Write-Host "Processing: $($file.Name)" -ForegroundColor Yellow
    
    # Read file content
    $content = Get-Content $file.FullName -Raw
    
    # Replace domain references
    $content = $content -replace "neweralearning\.com\.au", "neweraeducation.com.au"
    
    # Write back to file
    Set-Content -Path $file.FullName -Value $content -NoNewline
    
    Write-Host "Updated: $($file.Name)" -ForegroundColor Green
}

Write-Host "Domain update complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Files updated:" -ForegroundColor Cyan
$htmlFiles | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor White } 
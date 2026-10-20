# Compila y publica el sitio en el VPS.
# Uso (desde la carpeta desarrollo):  powershell -ExecutionPolicy Bypass -File .\deploy\deploy.ps1
param(
  [string]$Server = "root@169.58.110.225",
  [string]$SiteUrl = "https://clinica.169.58.110.225.sslip.io",
  [string]$RemoteDir = "/var/www/clinica-pacifico"
)
$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

$env:SITE_URL = $SiteUrl
npm run build
if ($LASTEXITCODE -ne 0) { throw "Falló la compilación" }

# Empaqueta out/ para subir un solo archivo y reemplazar la versión anterior por completo.
$tarball = Join-Path $env:TEMP "clinica-pacifico-out.tgz"
tar -czf $tarball -C out .
scp $tarball "${Server}:/tmp/clinica-pacifico-out.tgz"
if ($LASTEXITCODE -ne 0) { throw "Falló la subida" }

# nginx (www-data) necesita poder leer: carpetas 755, archivos 644.
ssh $Server "set -e; mkdir -p $RemoteDir; find $RemoteDir -mindepth 1 -delete; tar -xzf /tmp/clinica-pacifico-out.tgz -C $RemoteDir; rm /tmp/clinica-pacifico-out.tgz; chown -R root:root $RemoteDir; find $RemoteDir -type d -exec chmod 755 {} +; find $RemoteDir -type f -exec chmod 644 {} +; echo PUBLICADO"
Remove-Item $tarball
Write-Host "Listo: $SiteUrl"

@echo off
setlocal

cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 goto :error
)

echo Starting portfolio website...
call npm run dev
if errorlevel 1 goto :error

goto :eof

:error
echo.
echo Failed to run the project.
pause
exit /b 1

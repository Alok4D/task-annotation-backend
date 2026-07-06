@echo off
echo ===================================================
echo Starting TaskFusion Backend (Django)
echo ===================================================

echo [1/2] Activating Virtual Environment...
call venv\Scripts\activate

echo [2/2] Running Development Server...
python manage.py runserver

pause

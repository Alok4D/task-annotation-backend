#!/bin/bash
echo "==================================================="
echo "Starting TaskFusion Backend (Django)"
echo "==================================================="

echo "[1/2] Activating Virtual Environment..."
source venv/Scripts/activate

echo "[2/2] Running Development Server..."
python manage.py runserver

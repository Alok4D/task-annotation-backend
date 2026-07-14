# TaskCanvas API (Backend)

This is the core backend engine for the **TaskCanvas App** — providing a robust RESTful API built with Python, Django, Django REST Framework, and PostgreSQL to power the Kanban board and Image Annotation tool.

## 🔗 Live Links
- **Frontend**: https://taskcanvas-app.vercel.app
- **Backend**: https://task-annotation-backend-3vyn.onrender.com
- **Frontend Repo**: https://github.com/Alok4D/task-annotation-frontend
- **Backend Repo**: https://github.com/Alok4D/task-annotation-backend

## 🔑 Demo Login Credentials

| 👑 Demo User Credentials |
| :--- |
| **Email:** `admin@gmail.com`<br>**Pass:** `admin123456` |

## ✨ Features Implemented

### 1. Authentication & Security
- **JWT-Based Auth**: Secure login mechanism generating short-lived Access Tokens and long-lived Refresh Tokens using `djangorestframework-simplejwt`.
- **Password Hashing**: Uses Django's built-in password hashers to securely store user passwords.

### 2. Task Management (Kanban)
- **Full CRUD API**: Create, Read, Update, and Delete operations for tasks.
- **Filtering**: Powerful backend querying allowing filtering tasks by date.
- **Status Tracking**: Organize tasks into different statuses (TODO, IN_PROGRESS, DONE).

### 3. Image Annotation
- **Image Upload Integration**: Built-in support for uploading images using Cloudinary and Django Cloudinary Storage.
- **Polygon Annotations**: Save and manage complex polygon annotations on uploaded images.
- **Full CRUD API**: Retrieve and delete annotations tied to specific images.

### 4. Architecture & Best Practices
- **Django REST Framework**: Leveraging DRF for rapid and scalable API development.
- **PostgreSQL Database**: Relational database for robust data integrity and complex relationships.
- **CORS Configuration**: Correctly configured `django-cors-headers` to allow seamless frontend integration.

## 🛠️ Tech Stack
- **Python 3.12+** (Language)
- **Django 5.x & Django REST Framework (DRF)** (Web Framework & API Engine)
- **PostgreSQL / psycopg2-binary** (Database & Adapter)
- **djangorestframework-simplejwt / PyJWT** (Authentication)
- **Cloudinary / django-cloudinary-storage** (Cloud Image Storage)
- **Pillow** (Image Handling)
- **django-cors-headers** (CORS Configuration)
- **django-filter** (Advanced API Filtering)
- **python-decouple** (Environment Variable Management)
- **gunicorn & whitenoise** (Production Server & Static File Handling)
- **dj-database-url** (Database URL Parsing)

---

## 🚀 Project Setup & Installation Guide

### Prerequisites
- Python (v3.12 or higher)
- PostgreSQL (or SQLite for local development)

### 1. Clone the repository
```bash
git clone https://github.com/Alok4D/task-annotation-backend.git
cd task-annotation-backend
```

### 2. Create and activate a virtual environment
```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory and add your credentials:
```env
SECRET_KEY=your_django_secret_key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database configuration (Optional: defaults to SQLite if not provided)
DATABASE_URL=postgres://user:password@localhost:5432/taskfusion

# Cloudinary Configuration
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

### 5. Apply database migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Run the application
```bash
python manage.py runserver
```
The server will start on `http://127.0.0.1:8000`.

---

## 📚 API Documentation

### 1. Interactive Swagger UI (OpenAPI)
The backend features an auto-generated, interactive Swagger UI for testing API endpoints directly from your browser.
- Run the server locally and visit: **`http://127.0.0.1:8000/docs/`**
- Or view the raw OpenAPI schema at: `http://127.0.0.1:8000/api/schema/`

### 2. Postman Collection
A complete **Postman Collection** is also included in the root directory at `postman/taskfusion.postman_collection.json`. You can import this file directly into Postman to explore and test all available endpoints offline.

### Key Endpoints Overview:

**Auth Endpoints:**
- `POST /api/accounts/register/` (Register User)
- `POST /api/accounts/login/` (Login)
- `GET /api/accounts/me/` (Get Profile)
- `POST /api/accounts/token/refresh/` (Refresh Session)

**Tasks (Kanban) Endpoints:**
- `GET /api/tasks/` (Accepts `?selected_date=`)
- `POST /api/tasks/` (Requires auth)
- `PATCH /api/tasks/:id/` (Requires auth)
- `DELETE /api/tasks/:id/` (Requires auth)

**Annotations Endpoints:**
- `GET /api/annotations/images/` (List Images)
- `POST /api/annotations/images/` (Upload Image)
- `DELETE /api/annotations/images/:id/`
- `GET /api/annotations/annotations/` (Accepts `?image=`)
- `POST /api/annotations/annotations/` (Save Annotation Polygon)
- `DELETE /api/annotations/annotations/:id/`
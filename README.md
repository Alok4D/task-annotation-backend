# TaskFusion Backend

Backend API for the **TaskFusion** application, built with **Django**, **Django REST Framework**, and **PostgreSQL**.

TaskFusion is a productivity application that combines a **Kanban Task Management System** with an **Image Annotation Tool**.

---

# Tech Stack

- Python 3.12+
- Django 5.x
- Django REST Framework (DRF)
- PostgreSQL
- Django ORM
- JWT Authentication
- Pillow
- django-filter
- django-cors-headers
- python-decouple

---

# Project Structure

```
taskfusion-backend
│
├── apps/
│   ├── users/
│   ├── tasks/
│   └── annotations/
│
├── config/
├── core/
├── media/
├── static/
├── requirements/
└── manage.py
```

---

# Features

## Authentication

- User Login
- JWT Authentication

---

## Task Management

- Create Task
- Update Task
- Delete Task
- Date Based Filtering
- Task Status Management
- Priority
- Tags
- Drag & Drop Support

---

## Image Annotation

- Image Upload
- Polygon Annotation
- Delete Annotation
- Multiple Images
- Annotation Persistence

---

# Backend Architecture

The backend follows a feature-based architecture.

Each feature is separated into its own Django application.

```
users/

tasks/

annotations/
```

Business logic is separated from API views by using service layers.

---

# Database

PostgreSQL

Models

- User
- Task
- Image
- Annotation

---

# API Modules

Authentication

```
POST /api/auth/login
```

Tasks

```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

Images

```
POST /api/images
GET  /api/images
```

Annotations

```
POST /api/annotations
DELETE /api/annotations/:id
```

---

# Development Setup

## Clone Repository

```bash
git clone <repository-url>
```

---

## Create Virtual Environment

```bash
python -m venv venv
```

Windows

```bash
venv\Scripts\activate
```

Linux / Mac

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements/development.txt
```

---

## Configure Environment

Create a `.env` file.

Example

```env
SECRET_KEY=

DEBUG=True

DB_NAME=

DB_USER=

DB_PASSWORD=

DB_HOST=

DB_PORT=
```

---

## Apply Migrations

```bash
python manage.py makemigrations

python manage.py migrate
```

---

## Run Server

```bash
python manage.py runserver
```

---

# Development Workflow

1. Design Database Models
2. Create Migrations
3. Build REST APIs
4. Test APIs with Postman
5. Integrate Frontend
6. Write Tests
7. Deploy

---

# Deployment

Backend Hosting

- Render

Database

- PostgreSQL

---

# Future Improvements

- User Registration
- Refresh Token Rotation
- Role Based Access Control
- Activity Logs
- Soft Delete
- API Rate Limiting
- Unit Tests
- Docker Support

---

# Author

Alok Roy

Full Stack Developer
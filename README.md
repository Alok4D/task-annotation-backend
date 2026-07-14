# TaskFusion - Backend (The Core Engine)

Welcome to the backend of TaskFusion! This engine powers our 2-in-1 application (Kanban board + Image Annotation) using Django and Django REST Framework. 

## 🐉 The Villains Faced (And How They Were Defeated!)
1. **The CORS Demon:** Integrating a Next.js frontend running on a different port with a Django backend often summons the CORS Demon. By configuring `django-cors-headers` perfectly and trusting my AI companion for the correct middleware order, the demon was vanquished.
2. **The Multi-Part Monster (Image Uploads):** Handling image file uploads alongside JSON payload data can get messy. I defeated this monster by configuring DRF's `MultiPartParser` and properly defining the `ImageField` in the models, ensuring files are saved and served securely.
3. **The Relational Maze (Database Models):** Designing models that linked tasks to specific dates, and annotations to specific images while keeping user data isolated required careful planning. The Django ORM proved to be a loyal ally, allowing me to build robust relationships seamlessly using SQLite.

## 🚀 Tech Stack
- **Framework:** Django 5.x & Django REST Framework (DRF)
- **Language:** Python 3.12+
- **Database:** SQLite (Using Django ORM)
- **Authentication:** JWT (JSON Web Tokens)
- **Image Handling:** Pillow

## ⚙️ Requirements
- **Node.js:** v18.x or v20.x (For Frontend)
- **Python:** 3.12+ 

## 🏃‍♂️ How to Run Locally (The Training Arc)
1. **Clone the repository:**
   ```bash
   git clone <backend-repo-url>
   cd task-annotation-backend
   ```
2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On Mac/Linux:
   source venv/bin/activate
   ```
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   # (Or pip install django djangorestframework djangorestframework-simplejwt django-cors-headers pillow django-filter python-decouple)
   ```
4. **Apply database migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
5. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

## 🔗 Links & Credentials
- **Frontend Repo:** [Insert Github Link]
- **Backend Repo:** [Insert Github Link]
- **Live Hosted App:** [Insert Hosted Link]
- **Demo User Email:** demo@taskfusion.com
- **Demo User Password:** DemoPass123!

"Believe in the code that believes in you!" 🕶️🔥
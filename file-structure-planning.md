taskfusion-backend/
│
├── apps/
│   │
│   ├── accounts/
│   │   ├── migrations/
│   │   ├── api/
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   └── urls.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── permissions.py
│   │   ├── services.py
│   │   ├── validators.py
│   │   ├── signals.py
│   │   ├── tests.py
│   │   └── __init__.py
│   │
│   ├── tasks/
│   │   ├── migrations/
│   │   ├── api/
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   └── urls.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── services.py
│   │   ├── filters.py
│   │   ├── permissions.py
│   │   ├── validators.py
│   │   ├── tests.py
│   │   └── __init__.py
│   │
│   └── annotations/
│       ├── migrations/
│       ├── api/
│       │   ├── serializers.py
│       │   ├── views.py
│       │   └── urls.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── services.py
│       ├── permissions.py
│       ├── validators.py
│       ├── tests.py
│       └── __init__.py
│
├── config/
│   ├── settings/
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── development.py
│   │   └── production.py
│   │
│   ├── urls.py
│   ├── asgi.py
│   ├── wsgi.py
│   └── __init__.py
│
├── core/
│   ├── constants.py
│   ├── exceptions.py
│   ├── pagination.py
│   ├── permissions.py
│   ├── responses.py
│   ├── utils.py
│   ├── validators.py
│   └── __init__.py
│
├── media/
│   ├── images/
│   └── annotations/
│
├── static/
│
├── requirements/
│   ├── base.txt
│   ├── development.txt
│   └── production.txt
│
├── docs/
│   ├── api.md
│   ├── architecture.md
│   └── database.md
│
├── .env
├── .env.example
├── .gitignore
├── manage.py
├── README.md
└── docker-compose.yml (Optional)
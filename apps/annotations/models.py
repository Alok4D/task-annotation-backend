from django.db import models
from django.conf import settings

class Image(models.Model):
    image = models.ImageField(upload_to='annotations/images/')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='uploaded_images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image {self.id} by {self.user.email}"

class Annotation(models.Model):
    image = models.ForeignKey(Image, on_delete=models.CASCADE, related_name='annotations')
    polygon_points = models.JSONField(help_text="Stores an array of x, y coordinates")
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='annotations')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Annotation {self.id} on Image {self.image.id}"

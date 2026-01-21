from django.db import models

class Genre(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField(blank=True)
    
    def __str__(self):
        return str(self.name)
    
class Book(models.Model):
    title=models.CharField(max_length=100)
    author=models.CharField(max_length=150)
    description=models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.title} - {self.author}"
    
class MeetingType(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField(blank=True)
    price=models.PositiveIntegerField
    
    def __str__(self):
        return f"{self.name} - {self.price} рублей"

class Meeting(models.Model):
    genre = models.ForeignKey(
        Genre,
        on_delete=models.PROTECT,
        related_name="meetings"
    )
    book = models.ForeignKey(
        Book,
        on_delete=models.PROTECT,
        related_name="meetings"
    )
    meeting_type = models.ForeignKey(
        MeetingType,
        on_delete=models.PROTECT,
        related_name="meetings"
    )
    date_time = models.DateTimeField()
    duration_minutes = models.PositiveIntegerField(default=120)
    
    max_participants = models.PositiveIntegerField(default=10)

class Registration(models.Model):
    meeting = models.ForeignKey(
        Meeting,
        on_delete=models.CASCADE,
        related_name="registrations"
    )
    
    phone_number = models.CharField(max_length=20, blank=False)
    telegram_username = models.CharField(max_length=20, blank=False)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["meeting", "phone_number"],
                name="unique_phone_per_meeting"
            )
        ]
    
    
    
# Create your models here.

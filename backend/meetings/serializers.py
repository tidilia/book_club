from rest_framework import serializers
from .models import Genre, Book, Meeting, Registration

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'name', 'description']
        
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'description']
        
class MeetingSerializer(serializers.ModelSerializer):
    genre = GenreSerializer()
    book = BookSerializer()
    
    class Meta:
        model = Meeting
        fields = ['id', 'direction', 'book', 'date_time', 'duration_minutes', 'max_participants']
        
class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['id', 'meeting', 'phone_number', 'telegram_username']
        
            
        
        
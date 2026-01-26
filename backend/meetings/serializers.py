from rest_framework import serializers
from .models import Genre, Book, Meeting, Registration, MeetingType

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'name', 'description']

class MeetingTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeetingType
        fields = ['id', 'name', 'price']
        
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'description', 'genre']
        
class MeetingSerializer(serializers.ModelSerializer):
    genre = GenreSerializer()
    book = BookSerializer()
    
    class Meta:
        model = Meeting
        fields = ['id', 'book', 'date_time', 'duration_minutes', 'max_participants']
        
class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['id', 'meeting', 'phone_number', 'telegram_username']
        
            
        
        
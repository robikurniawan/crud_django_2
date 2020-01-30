from django.db import models

# Create your models here.
class Song(models.Model):
    genre_choices = (
        ('Pop', 'Pop'),
        ('Reggae','Reggae'),
        ('Rock','Rock'),
    )
    
    title = models.CharField(max_length=50)
    genre = models.CharField(max_length=25, choices=genre_choices, default='Pop')
    singer = models.CharField(max_length=50)
    rating = models.PositiveIntegerField(default=1)
    
    def __unicode__(self):
        return self.title
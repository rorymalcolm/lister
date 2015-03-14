from django.db import models

# Create your models here.
class Track(models.Model):
    playlist = models.ForeignKey(Playlist)
    youtubeurl = models.URLField(max_length=255)
    name = models.TextField(max_length=255)
    karma = models.IntegerField(default = 0, max_length=255)
    def __str__(self):
        return (self.name + " - " + self.youtubeurl)
    def getUrl(self):
        return self.youtubeurl
    def getName(self):
        return self.name
    def upvote(self):
        self.karma = self.karma + 1
        return self.karma
    def downvote(self):
        self.karma = self.karma - 1
        return self.karma
class Playlist(models.Model):
    password = models.TextField(max_length=255)
    def __str__(self):
        return (self.password)


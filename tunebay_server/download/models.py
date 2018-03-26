from tunebay_server.models_base import Base
from .schema import DownloadSchema
from marshmallow.exceptions import ValidationError

SOURCES = {
    'youtube': 'http://youtube.com/watch?v=%s',
    'dailymotion': 'http://www.dailymotion.com/video/%s'
}


class Download(Base):
    schema = DownloadSchema()

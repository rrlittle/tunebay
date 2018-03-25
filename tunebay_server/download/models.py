from tunebay_server.models_base import Base
from .schema import DownloadSchema


class Download(Base):
    schema = DownloadSchema()

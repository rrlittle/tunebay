from tunebay_server.models_base import Base
from .schema import SearchSchema


class Search(Base):
    schema = SearchSchema()

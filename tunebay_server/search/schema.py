from marshmallow import fields
from tunebay_server.schema_base import BaseSchema


class SearchSchema(BaseSchema):
    query = fields.String(required=True)

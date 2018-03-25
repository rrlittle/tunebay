from marshmallow import fields
from tunebay_server.schema_base import BaseSchema
from datetime import datetime


class DownloadSchema(BaseSchema):
    title = fields.String(required=True)
    query = fields.String(required=True)
    playFrom = fields.Int(required=True)
    playTo = fields.Int(required=True)
    videoId = fields.String(required=True)
    thumbnail = fields.String(required=True)

    src = fields.String(default='youtube')
    dst = fields.String()
    status = fields.String(default='pending')
    progress = fields.Int()
    # duration
    added = fields.DateTime(format='%Y%m%d%H%M%S', default=datetime.now())
    begun = fields.DateTime()
    finished = fields.DateTime()

from marshmallow import fields, Schema
from marshmallow.exceptions import ValidationError
from tunebay_server.schema_base import BaseSchema
from datetime import datetime

FORMAT = '%Y/%m/%d[%H:%M:%S]'


class LinkSchema(Schema):
    name = fields.String(required=True, allow_none=True, missing='youtube')
    to = fields.String(required=True, allow_none=True,
                       missing=lambda **x: print('sdfasdf', x) or 'youtube')


class DownloadSchema(BaseSchema):
    title = fields.String(required=True)
    query = fields.String(required=True)
    playFrom = fields.Int(required=True)
    playTo = fields.Int(required=True)
    videoId = fields.String(required=True)
    thumbnail = fields.String(required=True)

    added = fields.DateTime(required=True,
                            allow_none=True,
                            format=FORMAT,
                            missing=lambda: datetime.now().strftime(FORMAT)
                            )
    src = fields.Nested(LinkSchema(), required=True, allow_none=False)

    # requires pre-load processing to fill up this thing computed from request
    dst = fields.Nested(LinkSchema, required=True,
                        allow_none=False, missing={})

    # status = fields.String(default='pending')
    # progress = fields.Int(missing=0)
    # # duration
    # begun = fields.DateTime(allow_none=True)
    # finished = fields.DateTime(allow_none=True)


x = {
    "id": 5,
    "playFrom": 0,
    "playTo": 192,
    "query": "the wolf",
    "thumbnail": "https://i.ytimg.com/vi/lX44CAz-JhU/default.jpg",
    "title": "SIAMES - The Wolf [Official Video]",
    "videoId": "lX44CAz-JhU",
    'src': {'name': 'youtube', 'to': 'asdfsd'}
}


D = DownloadSchema()
print('#######################\n\n\n\n')
d1 = D.load(x)
print('\n\n\n\n')
print('LOADED-----', d1)
print('\n\n\n\n')
d = D.dump(d1.data)
print('\n\n\n\n')
print('DUMPED----', d)
print('\n\n\n\n')

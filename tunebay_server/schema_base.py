from marshmallow import Schema, fields


class BaseSchema(Schema):
    id = fields.Integer(required=True)

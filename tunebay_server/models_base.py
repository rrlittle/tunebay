from flask import current_app
from os.path import isdir, join, exists
from os import makedirs, listdir, remove
from json import dumps, loads
from .schema_base import BaseSchema
from marshmallow.exceptions import ValidationError


class Base:
    schema = BaseSchema()

    def __init__(self, fields):
        self.fields = {}
        field_names = list(self.schema._declared_fields.keys())
        for name in field_names:
            self.fields[name] = fields.get(name, None)

        if not self.id:
            self.fields['id'] = self.new_id()

        self.validate()

    @classmethod
    def new_id(cls):
        '''generate a new id based on all the existing records'''
        _all = cls.get_all()
        highest_id = 0
        for obj in _all:
            try:
                i = int(obj.id)
                if i > highest_id:
                    highest_id = i
            except Exception as e:
                pass
        return str(highest_id + 1)

    @classmethod
    def get_all(cls, dump=False):
        ''' get all the files and parse them into objects'''
        results = []
        try:
            records = listdir(cls.folder())
        except Exception as e:
            return results  # if folder doesn't exist return empty

        for _id in records:
            try:
                results.append(cls.load(_id))
            except Exception as e:
                print('error in (%s.get_all)' % cls.__name__, e)
        if dump:
            dumped = []
            for r in results:
                try:
                    dumped.append(r.dump())
                except ValidationError as e:
                    pass
            return dumped
        return results

    @classmethod
    def folder(cls):
        '''the folder is shared with all instances of this class'''
        return current_app.config[('%s_DIR' % cls.__name__).upper()]

    @classmethod
    def get_path(cls, _id):
        '''build the path for all of this class'''
        return join(cls.folder(), str(_id))

    @classmethod
    def load(cls, _id):
        ''' get a singular file. parse it to an object'''
        file = open(cls.get_path(_id), 'r')
        data = loads(file.read())
        return cls(data)

    @property
    def path(self):
        ''' helper to call cls.get_path'''
        return self.get_path(self.id)

    @property
    def id(self):
        '''helper to access id'''
        return self.get('id')

    @property
    def field_names(self):
        return list(set(self.base_field_names + self.specific_field_names))

    def get(self, key, default=None):
        return self.fields.get(key, default)

    def validate(self):
        marshal = self.schema.load(self.fields)
        if marshal.errors:
            raise ValidationError({'error': marshal.errors})

    def save(self):
        '''save this object to a file '''
        self. validate()
        if(not isdir(self.folder())):
            makedirs(self.folder())
        data = dumps(self.fields)
        file = open(self.path, 'w')
        file.write(data)
        return self.path, data

    def delete(self):
        ''' delete the file persisting this'''
        if (exists(self.path)):
            remove(self.path)
        return self

    def dump(self):
        '''return json serializable version of this'''
        marshal = self.schema.dump(self.fields)
        if marshal.errors:
            raise ValidationError({"error": marshal.errors})
        return marshal.data

    def __repr__(self):
        name = self.__class__.__name__
        return '<%s(%s)>' % (
            name,
            ', '.join(['%s=%s' % (k, v) for k, v in self.fields.items() if v]))

    def __eq__(self, other):
        try:
            return self.id == other.id
        except Exception:
            return False

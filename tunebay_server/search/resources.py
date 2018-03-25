from flask_restful_swagger_2 import Resource, abort
from flask import request
from .models import Search as SearchModel
from marshmallow.exceptions import ValidationError


class Search(Resource):
    def options(self, search_id):
        return

    def delete(self, search_id):
        print('DELETE', search_id)
        # return {'deleted': search_id}
        try:
            deleted = SearchModel.load(search_id).delete()
            print('DELETED', deleted.dump())
            return {'deleted': deleted.dump() if deleted else None}
        except ValidationError as e:
            print('validation err', e)
            return {'error': str(e)}, 500
        except FileNotFoundError as e:
            print('no file', e)
            return {'file not found': str(e)}, 204

    def get(self, search_id):
        try:
            dl = SearchModel.load(search_id)
            return dl.dump()
        except Exception as e:
            return {'error': str(e)}, 404

    def post(self, search_id):
        ''' 404 if resource not found.
            500 if fail.
            200 + updated body on success'''
        data = request.get_json()
        data['id'] = search_id
        dl = SearchModel(data)  # validates here. may very well fail
        dl.save()  # may fail if filesystem not availble
        # at this point update has succeeded
        return dl.dump()


class SearchList(Resource):
    def options(self):
        return

    def get(self):
        return SearchModel.get_all(True)
        # return jsonify({'x': [1, 2, 3]})

    def post(self):
        data = request.get_json()

        if not data:
            abort(400)

        try:
            dl = SearchModel(data)
        except ValidationError as e:
            print('here')
            return {'error': str(e)}, 400
        dl.save()
        return dl.dump()

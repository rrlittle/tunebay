from flask_restful_swagger_2 import Resource
from flask import request
from .models import Download as DownloadModel
from marshmallow.exceptions import ValidationError


def int_or_none(x):
    try:
        return int(x)
    except Exception:
        return None


class Download(Resource):
    def options(self, search_id):
        return

    def get(self, search_id):
        try:
            dl = DownloadModel.load(search_id)
            return dl.dump()
        except Exception as e:
            return {'error': str(e)}, 404

    def post(self, search_id):
        ''' 404 if resource not found.
            500 if fail.
            200 + updated body on success'''
        data = request.get_json()
        data['id'] = search_id
        dl = DownloadModel(data)  # validates here. may very well fail
        dl.save()  # may fail if filesystem not availble
        # at this point update has succeeded
        return dl.dump()


class DownloadList(Resource):
    def options(self, search_id):
        return

    def get(self):
        start = int_or_none(request.args.get('_start'))
        end = int_or_none(request.args.get('_end'))
        downloads = DownloadModel.get_all(True)
        return {'count': len(downloads), "results": downloads[start:end]}
        # return {'count': len(downloads), "results": []}

    def post(self):
        data = request.get_json()
        try:
            dl = DownloadModel(data)
            dl.save()
        except ValidationError as e:
            return {'error': str(e)}, 400
        return dl.dump()

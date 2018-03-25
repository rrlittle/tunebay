# get searches
# post new search
# get all queue
# update queue item
# refresh individual queue item

from flask_restful_swagger_2 import Api
from flask import Blueprint
from flask_restful.utils import cors
from os.path import dirname, abspath, split

from search.resources import Search, SearchList
from download.resources import Download, DownloadList

# from resources.downloadList import DownloadList

raw_name = split(dirname(abspath(__file__)))[-1]
name = raw_name.replace('_', ' ')
api_bp = Blueprint(name, __name__)
api = Api(api_bp, api_spec_url='/spec/%s' % name)

api.decorators = [cors.crossdomain(origin='*',
                                   headers=['accept', 'Content-Type'],
                                   methods=['HEAD',
                                            'OPTIONS',
                                            'GET',
                                            'POST',
                                            'DELETE']
                                   )]


api.add_resource(Search, '/search/<int:search_id>')
api.add_resource(SearchList, '/search')
api.add_resource(Download, '/queue/<int:search_id>')
api.add_resource(DownloadList, '/queue')

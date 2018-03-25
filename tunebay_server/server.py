from flask import Flask
from routes import api
from flask_cors import CORS
# from flask_restful_swagger_2 import get_swagger_blueprint

app = Flask(__name__)
CORS(app)

app.config['DOWNLOAD_DIR'] = ('/home/silverfish/Desktop/flask'
                              '/db/resources/Download')
app.config['SEARCH_DIR'] = '/home/silverfish/Desktop/flask/db/resources/Search'
# swagger_blueprint = get_swagger_blueprint([api.get_swagger_doc()],
#                                           title='Tunebay Server')

app.register_blueprint(api.blueprint)
# app.register_blueprint(swagger_blueprint)

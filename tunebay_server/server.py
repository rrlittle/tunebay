from flask import Flask
from tunebay_server.routes import api
from flask_cors import CORS
# from tasks import make_celery
from celery import Celery
app = Flask(__name__)
CORS(app)

app.config['DOWNLOAD_DIR'] = ('/home/silverfish/Desktop/flask'
                              '/db/resources/Download')
app.config['SEARCH_DIR'] = '/home/silverfish/Desktop/flask/db/resources/Search'
# swagger_blueprint = get_swagger_blueprint([api.get_swagger_doc()],
#                                           title='Tunebay Server')
app.register_blueprint(api.blueprint)


# celery configuration
app.config['CELERY_BROKER_URL'] = 'redis://localhost:6379'
app.config['CELERY_RESULT_BACKEND'] = 'redis://localhost:6379'

celery = Celery(app.name, broker=app.config['CELERY_BROKER_URL'])
celery.conf.update(app.config)


@celery.task
def add_together(a, b):
    return a + b


task = add_together.delay(10, 20)
task.wait()

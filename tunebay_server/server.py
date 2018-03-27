from flask import Flask
from tunebay_server.routes import api
from flask_cors import CORS
from . import celeryconfig
# from tasks import make_celery
from celery import Celery
app = Flask(__name__)
app.config.from_object('tunebay_server.config')
CORS(app)


# WEB STUFF
app.register_blueprint(api.blueprint)


# TASK STUFF
def make_celery(app):
    celery = Celery(app.import_name, broker=app.config['CELERY_BROKER_URL'])
    celery.conf.update(app.config)
    TaskBase = celery.Task

    class ContextTask(TaskBase):
        abstract = True

        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)
    celery.Task = ContextTask
    return celery


celery = make_celery(app)
celery.config_from_object(celeryconfig)

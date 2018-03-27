from celery.schedules import crontab


CELERY_IMPORTS = ('tunebay_server.tasks')
CELERY_TASK_RESULT_EXPIRES = 30
CELERY_TIMEZONE = 'UTC'

CELERY_ACCEPT_CONTENT = ['json', 'msgpack', 'yaml']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'

CELERYBEAT_SCHEDULE = {
    'test-celery': {
        'task': 'tunebay_server.tasks.add_together',
        # Every minute
        'schedule': crontab(minute="*"),
        'args': (1, 5)
    }
}

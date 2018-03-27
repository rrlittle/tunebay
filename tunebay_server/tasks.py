from celery.utils.log import get_task_logger
from .server import celery

logger = get_task_logger(__name__)


@celery.task
def add_together(a, b):
    logger.warn('adding together %s, %s' % (a, b))
    return a + b

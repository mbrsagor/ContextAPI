from celery import shared_task
from celery import Celery

@shared_task
def send_order_event(product_id, quantity):
    app = Celery(broker='amqp://guest:guest@rabbitmq:5672//')
    app.send_task('products.tasks.reduce_stock', args=[product_id, quantity])

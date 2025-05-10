from celery import shared_task
from .models import Product


@shared_task
def reduce_stock(product_id, quantity):
    product = Product.objects.get(id=product_id)
    product.stock -= quantity
    product.save()

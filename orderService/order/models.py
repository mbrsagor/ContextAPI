from django.db import models


class Order(models.Model):
    product_id = models.IntegerField()
    quantity = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id}: Product {self.product_id}, Quantity {self.quantity}"

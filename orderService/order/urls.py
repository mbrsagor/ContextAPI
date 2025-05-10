from django.urls import path
from .views import CreateOrderView

urlpatterns = [
    path('orders/', CreateOrderView.as_view()),
]

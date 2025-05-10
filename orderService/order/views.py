from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Order
from .serializers import OrderSerializer
from .tasks import send_order_event


class CreateOrderView(APIView):
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            order = serializer.save()
            send_order_event.delay(order.product_id, order.quantity)
            return Response({'status': 'order created'})
        return Response(serializer.errors, status=400)

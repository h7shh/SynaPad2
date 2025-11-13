import React from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Package, Truck, Mail } from "lucide-react";

export default function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Card className="p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Order Confirmation</p>
                  <p className="text-sm text-gray-600">
                    You'll receive an email confirmation shortly with your order details.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Order Processing</p>
                  <p className="text-sm text-gray-600">
                    We'll prepare your SynaPad for shipment within 24 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Free Delivery</p>
                  <p className="text-sm text-gray-600">
                    Your order will arrive in 3-5 business days with free shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg"
              className="w-full bg-gray-900 hover:bg-gray-800"
              onClick={() => navigate(createPageUrl('Home'))}
            >
              Continue Shopping
            </Button>
            <p className="text-sm text-gray-500">
              Need help? Contact us at support@synapad.com
            </p>
          </div>
        </Card>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-lg p-4">
            <p className="text-2xl font-bold text-gray-900">2 Years</p>
            <p className="text-sm text-gray-600">Warranty</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-2xl font-bold text-gray-900">30 Days</p>
            <p className="text-sm text-gray-600">Returns</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-2xl font-bold text-green-600">FREE</p>
            <p className="text-sm text-gray-600">Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
}

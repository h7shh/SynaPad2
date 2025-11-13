import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft,
  ShoppingCart,
  Check,
  Truck,
  Shield,
  Package,
  Smartphone,
  Battery,
  HardDrive,
  Pen
} from "lucide-react";

const productData = {
  Core: {
    name: "SynaPad Core",
    price: 849,
    color: "#612525",
    audience: "School Students",
    screen: "6.8\" Matte Screen",
    build: "Durable Plastic",
    storage: "16GB",
    stylus: "Basic Stylus",
    battery: "6-7 Days",
    features: [
      "Cloud Sync for seamless access",
      "Basic note-taking tools",
      "Lightweight and portable design",
      "Affordable for students",
      "Eco-friendly paperless solution"
    ],
    specs: {
      "Display": "6.8\" E-Ink Matte Display, 1440x1080 resolution",
      "Processor": "Quad-core 1.8GHz",
      "RAM": "2GB",
      "Storage": "16GB Internal",
      "Battery": "3000mAh, 6-7 days typical use",
      "Connectivity": "Wi-Fi 802.11ac, Bluetooth 5.0",
      "Dimensions": "178 x 140 x 7mm",
      "Weight": "250g",
      "Build": "Durable plastic body",
      "Colors": "Maroon"
    },
    description: "Perfect for school students who need a reliable, affordable digital writing companion. The SynaPad Core offers all the essentials for effective note-taking without breaking the bank."
  },
  Plus: {
    name: "SynaPad Plus",
    price: 1199,
    color: "#047857",
    audience: "College Students",
    screen: "10\" Anti-Glare Screen",
    build: "Vegan Leather",
    storage: "32GB",
    stylus: "Pro Stylus",
    battery: "8-10 Days",
    features: [
      "AI Handwriting Recognition",
      "Advanced cloud sync with auto-backup",
      "Premium vegan leather finish",
      "Pro-grade stylus with palm rejection",
      "Extended battery life"
    ],
    specs: {
      "Display": "10\" E-Ink Anti-Glare Display, 1872x1404 resolution",
      "Processor": "Octa-core 2.2GHz",
      "RAM": "4GB",
      "Storage": "32GB Internal",
      "Battery": "4500mAh, 8-10 days typical use",
      "Connectivity": "Wi-Fi 802.11ac, Bluetooth 5.0, USB-C",
      "Dimensions": "230 x 190 x 6.5mm",
      "Weight": "390g",
      "Build": "Premium vegan leather body",
      "Colors": "Emerald Green"
    },
    description: "Designed for college students who demand more power and sophisticated features. The Plus model combines AI technology with premium materials for an elevated note-taking experience."
  },
  Pro: {
    name: "SynaPad Pro",
    price: 2399,
    color: "#1e3a8a",
    audience: "Professionals",
    screen: "10.3\" Matte HD Screen",
    build: "Aluminum Unibody",
    storage: "64GB",
    stylus: "Advanced Pressure-Sensitive Stylus",
    battery: "10-12 Days",
    features: [
      "AI Voice Dictation with real-time transcription",
      "Advanced note organization with tags and folders",
      "Premium aluminum unibody construction",
      "4096 levels of pressure sensitivity",
      "Professional-grade security features"
    ],
    specs: {
      "Display": "10.3\" E-Ink Matte HD Display, 1872x1404 resolution, Frontlight",
      "Processor": "Octa-core 2.5GHz",
      "RAM": "6GB",
      "Storage": "64GB Internal, expandable",
      "Battery": "5000mAh, 10-12 days typical use",
      "Connectivity": "Wi-Fi 802.11ax, Bluetooth 5.2, USB-C 3.0",
      "Dimensions": "245 x 193 x 5.8mm",
      "Weight": "420g",
      "Build": "Premium aluminum unibody",
      "Colors": "Navy Blue"
    },
    description: "The ultimate tool for professionals who need the best in digital note-taking. With advanced AI features and premium build quality, the Pro model sets a new standard for digital writing tablets."
  }
};

export default function ProductDetail() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const model = urlParams.get('model') || 'Core';
  const product = productData[model];
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('synapad_cart') || '[]');
    const existingItem = cartItems.find(item => item.model === model);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({
        model,
        name: product.name,
        price: product.price,
        quantity,
        color: product.color
      });
    }
    
    localStorage.setItem('synapad_cart', JSON.stringify(cartItems));
    navigate(createPageUrl('Cart'));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(createPageUrl('Home'))}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>
      </div>

      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image - Stylized tablet */}
          <div className="sticky top-24">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] bg-gray-800 rounded-3xl shadow-2xl border-8 border-gray-700 transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center">
                  <div 
                    className="w-32 h-32 rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-lg"
                    style={{ backgroundColor: product.color }}
                  >
                    {model[0]}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span 
                className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold"
                style={{ backgroundColor: product.color }}
              >
                {model}
              </span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {product.description}
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-5xl font-bold text-gray-900">
                AED {product.price}
              </span>
              <span className="text-green-600 font-semibold">+ Free Shipping</span>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Smartphone className="w-6 h-6" style={{ color: product.color }} />
                <div>
                  <p className="text-sm text-gray-600">Display</p>
                  <p className="font-semibold text-gray-900">{product.screen}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Battery className="w-6 h-6" style={{ color: product.color }} />
                <div>
                  <p className="text-sm text-gray-600">Battery</p>
                  <p className="font-semibold text-gray-900">{product.battery}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <HardDrive className="w-6 h-6" style={{ color: product.color }} />
                <div>
                  <p className="text-sm text-gray-600">Storage</p>
                  <p className="font-semibold text-gray-900">{product.storage}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Pen className="w-6 h-6" style={{ color: product.color }} />
                <div>
                  <p className="text-sm text-gray-600">Stylus</p>
                  <p className="font-semibold text-gray-900">{product.stylus}</p>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg"
              className="w-full text-lg py-6 mb-6"
              style={{ backgroundColor: product.color }}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart - AED {(product.price * quantity).toLocaleString()}
            </Button>

            {/* Shipping & Warranty Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Truck className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Free Shipping</p>
                  <p className="text-xs text-gray-600">3-5 business days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">2-Year Warranty</p>
                  <p className="text-xs text-gray-600">Full coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Package className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">30-Day Returns</p>
                  <p className="text-xs text-gray-600">No questions asked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Info Tabs */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="box">What's in the Box</TabsTrigger>
          </TabsList>

          <TabsContent value="features">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ backgroundColor: `${product.color}20` }}
                    >
                      <Check className="w-4 h-4" style={{ color: product.color }} />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="specs">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">{key}</span>
                    <span className="text-gray-600 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="box">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Package Contents</h3>
              <div className="space-y-4">
                {[
                  `SynaPad ${model} Device`,
                  `${product.stylus}`,
                  'USB-C Charging Cable',
                  'Quick Start Guide',
                  'Warranty Card',
                  'Protective Screen Cover',
                  model === 'Pro' ? 'Premium Leather Case' : 'Soft Sleeve Case'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Package className="w-5 h-5" style={{ color: product.color }} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

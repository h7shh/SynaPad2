import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Sparkles, 
  Leaf, 
  Zap, 
  Check,
  Star,
  Battery,
  HardDrive,
  Smartphone,
  Pen,
  Brain,
  Mic
} from "lucide-react";

const products = [
  {
    model: "Core",
    name: "SynaPad Core",
    price: 849,
    color: "#612525",
    audience: "School Students",
    screen: "6.8\" Matte Screen",
    build: "Durable Plastic",
    storage: "16GB",
    stylus: "Basic Stylus",
    battery: "6-7 Days",
    features: ["Cloud Sync", "Basic Note-Taking", "Lightweight Design"],
    description: "Perfect for school students who need a reliable, affordable digital writing companion.",
    gradient: "from-red-900/20 to-red-800/10"
  },
  {
    model: "Plus",
    name: "SynaPad Plus",
    price: 1199,
    color: "#047857",
    audience: "College Students",
    screen: "10\" Anti-Glare Screen",
    build: "Vegan Leather",
    storage: "32GB",
    stylus: "Pro Stylus",
    battery: "8-10 Days",
    features: ["AI Handwriting Recognition", "Advanced Cloud Sync", "Premium Feel"],
    description: "Designed for college students who demand more power and sophisticated features.",
    gradient: "from-emerald-700/20 to-emerald-600/10"
  },
  {
    model: "Pro",
    name: "SynaPad Pro",
    price: 2399,
    color: "#1e3a8a",
    audience: "Professionals",
    screen: "10.3\" Matte HD Screen",
    build: "Aluminum Unibody",
    storage: "64GB",
    stylus: "Advanced Pressure-Sensitive Stylus",
    battery: "10-12 Days",
    features: ["AI Voice Dictation", "Advanced Note Organization", "Premium Build"],
    description: "The ultimate tool for professionals who need the best in digital note-taking.",
    gradient: "from-blue-900/20 to-blue-800/10"
  }
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Logo in top left - white version */}
        <div className="absolute top-8 left-8 z-20">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691614e9644b2e21c1b0aadb/958eee848_synapadlogo.png"
            alt="SynaPad"
            className="h-24 md:h-32 w-auto brightness-0 invert"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691614e9644b2e21c1b0aadb/958eee848_synapadlogo.png"
            alt="SynaPad"
            className="h-40 md:h-56 w-auto mx-auto mb-8 brightness-0 invert"
          />
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Where thoughts meet technology. Premium digital writing tablets that transform how you think, learn, and create.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold"
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              className="border-2 border-white bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold transition-all"
              onClick={() => document.getElementById('compare').scrollIntoView({ behavior: 'smooth' })}
            >
              Compare Models
            </Button>
          </div>

          {/* Key Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white">
              <Leaf className="w-4 h-4" />
              <span className="text-sm">Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white">
              <Brain className="w-4 h-4" />
              <span className="text-sm">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Long Battery Life</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Match
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three powerful devices, each crafted for different needs. From students to professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.model}
                className="fade-in-section overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-gray-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundColor: product.color }}
                  />
                  {/* Stylized tablet mockup */}
                  <div className="relative w-40 h-52 bg-gray-800 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-gray-700">
                    <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
                      <div 
                        className="w-20 h-20 rounded-lg flex items-center justify-center text-2xl font-bold text-white"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.model[0]}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold" style={{ color: product.color }}>
                      {product.model}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.audience}</p>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      AED {product.price}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Smartphone className="w-4 h-4" style={{ color: product.color }} />
                      <span>{product.screen}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <HardDrive className="w-4 h-4" style={{ color: product.color }} />
                      <span>{product.storage} Storage</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Battery className="w-4 h-4" style={{ color: product.color }} />
                      <span>{product.battery} Battery</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Pen className="w-4 h-4" style={{ color: product.color }} />
                      <span>{product.stylus}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4" style={{ color: product.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={createPageUrl('ProductDetail') + `?model=${product.model}`}>
                    <Button 
                      className="w-full"
                      style={{ 
                        backgroundColor: product.color,
                        color: 'white'
                      }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="compare" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Compare All Models
            </h2>
            <p className="text-xl text-gray-600">
              See which SynaPad fits your needs best
            </p>
          </div>

          <div className="fade-in-section overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-700 font-semibold">Feature</th>
                  <th className="text-center py-4 px-6">
                    <div className="text-xl font-bold text-gray-900">Core</div>
                    <div className="text-sm text-gray-600">AED 849</div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="text-xl font-bold text-gray-900">Plus</div>
                    <div className="text-sm text-gray-600">AED 1,199</div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="text-xl font-bold text-gray-900">Pro</div>
                    <div className="text-sm text-gray-600">AED 2,399</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Display', '6.8" Matte', '10" Anti-Glare', '10.3" Matte HD'],
                  ['Build Material', 'Plastic', 'Vegan Leather', 'Aluminum'],
                  ['Storage', '16GB', '32GB', '64GB'],
                  ['Stylus', 'Basic', 'Pro', 'Pressure-Sensitive'],
                  ['Battery Life', '6-7 Days', '8-10 Days', '10-12 Days'],
                  ['Cloud Sync', 'Yes', 'Yes', 'Yes'],
                  ['AI Handwriting', 'No', 'Yes', 'Yes'],
                  ['AI Voice Dictation', 'No', 'No', 'Yes'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">{row[0]}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row[1]}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row[2]}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Loved by Students & Educators
            </h2>
            <p className="text-xl text-gray-600">
              See what our users have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariam",
                role: "High School Student",
                content: "The SynaPad Core has completely changed how I take notes in class. It's lightweight, affordable, and the battery lasts all week!",
                rating: 5,
                color: "#612525"
              },
              {
                name: "Jeevan Sundar",
                role: "University Student",
                content: "The AI handwriting recognition on the Plus model is incredible. It converts my messy notes into text perfectly. Worth every dirham!",
                rating: 5,
                color: "#047857"
              },
              {
                name: "Dr. Fatima Al-Mansoori",
                role: "University Professor",
                content: "I use the Pro model for lectures and research. The voice dictation and premium build quality make it an essential tool for my work.",
                rating: 5,
                color: "#1e3a8a"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="fade-in-section p-6 hover:shadow-xl transition-shadow" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Note-Taking?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students and professionals who've made the switch to SynaPad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            ✓ Free shipping on all orders • ✓ 2-year warranty • ✓ 30-day returns
          </p>
        </div>
      </section>
    </div>
  );
}

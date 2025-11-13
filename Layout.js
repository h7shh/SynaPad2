import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Products', href: createPageUrl('Home') + '#products' },
    { name: 'Compare', href: createPageUrl('Home') + '#compare' },
    { name: 'Testimonials', href: createPageUrl('Home') + '#testimonials' },
  ];

  const isHomePage = currentPageName === 'Home';

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <style>{`
        :root {
          --synapad-core: #612525;
          --synapad-plus: #047857;
          --synapad-pro: #1e3a8a;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Header - hide on home page to avoid duplication */}
      {!isHomePage && (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-white/95 backdrop-blur-lg'
        }`}>
          <nav className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link to={createPageUrl('Home')} className="flex items-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691614e9644b2e21c1b0aadb/958eee848_synapadlogo.png"
                  alt="SynaPad"
                  className="h-16 md:h-20 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Link to={createPageUrl('Cart')}>
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-gray-700 hover:text-gray-900 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Link to={createPageUrl('Cart')} className="block py-3">
                  <Button variant="outline" className="w-full">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    View Cart
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        </header>
      )}

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691614e9644b2e21c1b0aadb/958eee848_synapadlogo.png"
                alt="SynaPad"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-gray-400">
                Premium digital writing tablets for students and professionals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">SynaPad Core</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SynaPad Plus</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SynaPad Pro</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 SynaPad. This is a student-made concept project.</p>
            <p className="mt-2">Designed with ❤️ for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

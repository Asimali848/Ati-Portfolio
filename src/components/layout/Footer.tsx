import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Code, Heart, Coffee, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/muhammadatif', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammadatiflodhi/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/muhammadatif', label: 'Twitter' },
  { icon: Mail, href: 'mailto:muhammad.atif@email.com', label: 'Email' }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Muhammad Atif
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Data Scientist with expertise in machine learning, AI deployment, and API development. Proficient in Python, R, and MATLAB. Built LLM-based apps, RAG systems, and solutions like toxic comment detection and CRM automation. Skilled at turning data into insights.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-emerald-600 transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Lahore, Pakistan</p>
                <p>atiflodhi926@gmail.com</p>
                <p>+92-339-0339722</p>
                <div className="mt-4">
                  <div className="flex items-center space-x-1 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Available for projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024 Muhammad Atif. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-amber-600" />
            <span>in San Francisco</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
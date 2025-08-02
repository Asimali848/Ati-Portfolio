import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/MuhammadAtif03", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-atif-lodhi-39a0911a1/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:atiflodhi926@gmail.com", label: "Email" },
];

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-white dark:from-emerald-950/20 dark:via-blue-950/20 dark:to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-emerald-400 to-blue-500">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGVzV7T2gYBXw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715939453557?e=1756944000&v=beta&t=eqqR67110K8Nwc9UmBSeMZfM2j6H0IiFsJ0FQmNMHbY"
                alt="Muhammad Atif"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Status Badge */}
          <Badge
            variant="secondary"
            className="mb-6 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
          >
            Available for new opportunities
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
            Muhammad Atif
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-in slide-in-from-bottom-5 duration-1000 delay-200">
            Backend Developer & Ai Engineer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-in slide-in-from-bottom-6 duration-1000 delay-400">
            Passionate about building intelligent systems and robust backend
            architectures that power seamless digital experiences. Specializing
            in AI-driven solutions, scalable APIs, and modern server-side
            technologies with a focus on performance, security, and real-world
            impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-in slide-in-from-bottom-7 duration-1000 delay-600">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 px-8 py-3 text-lg"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-in slide-in-from-bottom-8 duration-1000 delay-800">
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

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="rounded-full h-12 w-12"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

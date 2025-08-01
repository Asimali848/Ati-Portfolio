import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Immigration ChatBot",
    description:
      "Built a platform similar to ChatGPT for immigration queries. It provides context-aware answers about visa types, legal processes, and documentation using LLMs.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "NeonDB", "React"],
    category: "AI/Backend",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    achievements: [
      "LLM integration",
      "Contextual legal answers",
      "Real-time query handling",
    ],
  },
  {
    id: 2,
    title: "US Law RAG",
    description:
      "A Retrieval-Augmented Generation (RAG) app using Pinecone for vector storage of U.S. legal documents. Delivers context-relevant legal answers.",
    image:
      "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "Pinecone"],
    category: "AI/LegalTech",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    achievements: [
      "Legal document RAG",
      "Pinecone integration",
      "Semantic search",
    ],
  },
  {
    id: 3,
    title: "Sketch This",
    description:
      "AI-powered tool that turns room dimensions into layout plans and generates captions for social sharing. Uses OpenAI for natural language generation.",
    image:
      "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "OpenAI", "React", "Scraper"],
    category: "AI/Productivity",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    achievements: [
      "AI layout generation",
      "Caption automation",
      "Interior design focus",
    ],
  },
  {
    id: 4,
    title: "Chef Quilo",
    description:
      "An AI culinary assistant providing recipes, ingredient breakdowns, and voice-guided steps using avatars. Makes cooking interactive and educational.",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    technologies: ["Python", "OpenAI", "React", "DID Agent"],
    category: "AI/Voice",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    achievements: [
      "Voice narration",
      "AI recipes",
      "Multimedia cooking assistant",
    ],
  },
  {
    id: 5,
    title: "Pimpacket",
    description:
      "Automates product content generation and publishing across platforms like Shopify, Odoo, and WooCommerce. Designed for SEO optimization and e-commerce efficiency.",
    image:
      "https://images.pexels.com/photos/5863369/pexels-photo-5863369.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    technologies: ["Python", "OpenAI", "Shopify", "Odoo", "WooCommerce"],
    category: "AI/E-Commerce",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    achievements: [
      "SEO automation",
      "Multi-platform support",
      "Content generation",
    ],
  },
  {
    id: 6,
    title: "AI Mental Health",
    description:
      "NLP-based model that detects early signs of mental health issues from text and offers supportive therapy recommendations and wellness tips.",
    image:
      "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "NLP"],
    category: "AI/Healthcare",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    achievements: [
      "NLP analysis",
      "Wellness insights",
      "Accessible mental health support",
    ],
  },
  {
    id: 7,
    title: "Appension",
    description:
      "Voice agent system that handles customer calls, books appointments, and sends call summaries using OpenAI and n8n workflows.",
    image:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "OpenAI", "n8n"],
    category: "AI/Automation",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    achievements: [
      "Voice automation",
      "n8n workflow integration",
      "AI call handling",
    ],
  },
  {
    id: 8,
    title: "AI Merg",
    description:
      "Financial RAG platform analyzing profitability, costs, and mergers using structured data and LLMs to assist business decisions.",
    image:
      "https://images.pexels.com/photos/4386365/pexels-photo-4386365.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "RAG", "LLM", "OpenAI", "React"],
    category: "AI/Finance",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    achievements: ["M&A analysis", "RAG implementation", "LLM forecasting"],
  },
];

const categories = [
  "All",
  "AI/LegalTech",
  "AI/Productivity",
  "AI/Voice",
  "AI/E-Commerce",
  "AI/Healthcare",
  "AI/Automation",
  "AI/Finance",
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that
              demonstrate my skills and passion for creating exceptional digital
              experiences.
            </p>
          </div>

          {/* Featured Projects Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-500" />
              Featured Work
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:shadow-xl group overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
                      >
                        {project.category}
                      </Badge>
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {project.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-emerald-500 to-blue-500"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter((p) => !p.featured)
              .map((project) => (
                <Card
                  key={project.id}
                  className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:shadow-lg group overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 bg-gradient-to-r from-emerald-500 to-blue-500 backdrop-blur-sm hover:bg-white/30"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 bg-gradient-to-r from-emerald-500 to-blue-500 backdrop-blur-sm hover:bg-white/30"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {project.category}
                    </Badge>
                    <h4 className="font-bold mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Interested in seeing more of my work?
            </p>
            <Button variant="outline" size="lg" className="border-2">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

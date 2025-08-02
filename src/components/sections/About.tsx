import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Backend Development",
    description:
      "Designing and implementing scalable APIs, database systems, and server-side logic using modern frameworks and best practices.",
  },
  {
    icon: Zap,
    title: "AI Engineering",
    description:
      "Developing intelligent solutions using machine learning models, data pipelines, and AI frameworks for real-world applications.",
  },
  {
    icon: Palette,
    title: "Software Engineering",
    description:
      "Building reliable and maintainable software systems with a focus on clean architecture, testing, and performance.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Contributing in cross-functional teams, leading backend and AI initiatives, and mentoring junior engineers in agile environments.",
  },
];

const technologies = [
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "SQLite",
  "Pinecone",
  "Neon DB",
  "n8n",
  "AWS",
  "Docker",
  "Django REST Framework",
  "FastAPI",
  "Flask",
  "PySpark",
  "MATLAB",
  "Generative AI",
  "LLMs",
  "RAG",
  "Prompt Engineering",
  "Power BI",
  "Plotly",
  "Zapier",
  "NLP",
  "YOLOv8",
  "Data Visualization"
];


export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate developer with 2+ years of experience creating
              digital solutions that make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Bio */}
            <div className="space-y-8">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-400 to-blue-500 p-1">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGVzV7T2gYBXw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715939453557?e=1756944000&v=beta&t=eqqR67110K8Nwc9UmBSeMZfM2j6H0IiFsJ0FQmNMHbY"
                    alt="Muhammad Atif working"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2+ Years
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Data Scientist with expertise in data analysis, machine
                  learning, and statistical modeling. Skilled in Python
                  (Scikit-learn, Pandas, NumPy, PySpark), R, and MATLAB, with
                  hands-on experience in deploying AI solutions. I have built
                  RESTful APIs using Flask, FastAPI, and Django REST Framework
                  and developed multiple generative AI applications leveraging
                  LLMs and RAG systems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I've contributed to both freelance and full-time projects,
                  creating impactful solutions like toxic comment detection
                  using XLNet and automated customer CRM workflows with VAPI and
                  n8n. My strength lies in transforming complex data into
                  actionable insights that support decision-making and growth.
                </p>
              </div>
            </div>

            {/* Right Column - Highlights and Technologies */}
            <div className="space-y-8">
              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <highlight.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-sm">
                          {highlight.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Technologies I Work With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/50 dark:to-blue-950/50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/50 dark:to-blue-950/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">2+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

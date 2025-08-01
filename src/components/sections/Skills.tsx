
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Server, Database, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'from-emerald-500 to-green-500',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 80 }
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python/Django', level: 85 },
      { name: 'GraphQL', level: 82 },
      { name: 'REST APIs', level: 92 }
    ]
  },
  {
    title: 'Database & Storage',
    icon: Database,
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'Firebase', level: 80 }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'AWS', level: 82 },
      { name: 'Docker', level: 78 },
      { name: 'CI/CD', level: 80 },
      { name: 'Kubernetes', level: 70 }
    ]
  },
  {
    title: 'Design & UX',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'UI Design', level: 85 },
      { name: 'Prototyping', level: 82 },
      { name: 'User Research', level: 75 }
    ]
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'VS Code', level: 92 },
      { name: 'Webpack', level: 80 },
      { name: 'Testing', level: 85 }
    ]
  }
];

const certifications = [
  'AWS Certified Developer',
  'React Professional Certificate',
  'Google UX Design Certificate',
  'MongoDB Developer Path'
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across 
              different technologies and tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Certifications & Achievements</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-base bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Trophy } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    company: 'TechCorp Solutions (Remote)',
    location: 'San Francisco, CA',
    duration: '2024 - Present',
    type: 'Full-time',
    description: 'Leading a team of 5 developers in building scalable web applications. Responsible for architecture decisions, code reviews, and mentoring junior developers.',
    achievements: [
      'Increased application performance by 40% through optimization',
      'Led migration from monolith to microservices architecture',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Mentored 3 junior developers to senior level'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker', 'TypeScript']
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'DigiMark Developer',
    location: 'Lahore, Pakistan',
    duration: '2023 - 2025',
    type: 'Full-time',
    description: 'Created responsive web applications and mobile-first designs. Collaborated with UX designers to implement pixel-perfect interfaces.',
    achievements: [
      'Delivered 15+ responsive web applications',
      'Improved user engagement by 35% through UI improvements',
      'Established design system used across 5 products',
      'Reduced development time by 25% through component library'
    ],
    technologies: ['React', 'JavaScript', 'SASS', 'Figma', 'Git', 'Webpack']
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Gift University',
    location: 'Gujjrawala, Pakistan',
    duration: '2019 - 2023',
    gpa: '3.2/4.0',
    achievements: [
      'Graduated Magna Cum Laude',
      'President of Computer Science Club',
      'Dean\'s List for 6 semesters',
      'Best Final Year Project Award'
    ]
  },
  {
    degree: 'Pre Engineering',
    school: 'Punjab Group of Colleges',
    location: 'Okara, Pakistan',
    duration: '2017 - 2019',
    gpa: '78%',
    achievements: [
      'Graduated Magna Cum Laude',
      'President of Computer Science Club',
      'Dean\'s List for 6 semesters',
      'Best Final Year Project Award'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and educational background that shaped my expertise 
              in software development and technology.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="w-6 h-6 mr-2 text-emerald-600" />
              Professional Experience
            </h3>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-12">
                    <div className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full border-4 border-background shadow-lg"></div>
                    
                    <Card className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                            <p className="text-lg text-emerald-600 font-semibold mb-2">{exp.company}</p>
                          </div>
                          <div className="flex flex-col lg:items-end space-y-2">
                            <Badge variant="secondary" className="w-fit bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                              {exp.type}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="mb-4">
                          <h5 className="font-semibold mb-2 flex items-center">
                            <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-2">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education (timeline style) */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-blue-600" />
              Education
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full border-4 border-background shadow-lg"></div>

                    <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                            <p className="text-lg text-blue-600 font-semibold mb-2">{edu.school}</p>
                            <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                          </div>
                          <div className="flex flex-col lg:items-end space-y-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-1" />
                              {edu.duration}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-1" />
                              {edu.location}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-2 flex items-center">
                            <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
                            Achievements & Activities
                          </h5>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

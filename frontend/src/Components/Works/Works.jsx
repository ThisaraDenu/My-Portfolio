import React, { useState } from 'react'
import { motion } from 'framer-motion'
import sliitizenImage from '../../assets/SLIITIZEN.png'
import campusFlowImage from '../../assets/Canpusflow.png'

const projects = [
  {
    title: 'Sliitizen',
    description:
      'SLIITIZEN is a full-stack social productivity app built with React, Vite, Node.js, Express, and MongoDB. It includes JWT authentication, protected routes, reusable frontend components, and a RESTful backend for user interaction, posts, notifications, groups, and resources.',
    details:
      'SLIITIZEN is a full-stack social productivity web app built with React, Vite, Node.js, Express, and MongoDB. It features JWT-based authentication, protected frontend and backend routes, and a modular architecture with reusable React components and Express controllers. The backend uses MongoDB with Mongoose for data modeling, secure password hashing via bcryptjs, and RESTful API endpoints for authentication, posts, notifications, groups, resources, and more.',
    highlights: [
      'React 19 frontend with Vite, React Router v7, Context API, and Axios',
      'Node.js + Express backend with JWT auth and middleware for secure access',
      'MongoDB database integration with Mongoose',
      'Clean project structure across frontend/ and backend/',
      'Designed for scalable user management, social interaction, and content sharing',
    ],
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    gradient: 'from-sky-500 to-blue-700',
    link: 'https://sliitizen.vercel.app/',
    image: sliitizenImage,
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 014.472 9.747M12 6v12M6.343 6.343l11.314 11.314" />
      </svg>
    ),
  },
  {
    title: 'Campus Flow',
    description:
      'CampusFlow is a full-stack campus operations platform with a React/Tailwind frontend and Spring Boot/MongoDB backend for managing resource bookings, incident tickets, notifications, and role-based access for students, staff, and admins..',
    details:
      'CampusFlow is a full-stack campus operations system built to streamline resource booking, incident ticketing, notifications, and role-based campus management. It combines a modern React frontend with a Spring Boot backend, delivering a polished experience for students, staff, and administrators.',
    highlights: [
      'Secure JWT and Google OAuth2 authentication',
      'Resource booking with conflict handling and approval workflows',
      'Incident ticket creation, comments, escalation, and SLA-based workflows',
      'Per-user notifications with read/unread state management',
      'Admin dashboards for user management and campus analytics',
    ],
    tags: ['React', 'Spring Boot', 'MongoDB'],
    gradient: 'from-fuchsia-500 to-purple-700',
    link: 'https://campus-flow-opal.vercel.app/',
    image: campusFlowImage,
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0L6 13.5m6 6l6-6.5" />
      </svg>
    ),
  },
  
  
  
  
]

function Works() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="works" className="w-full bg-gray-550 py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#050509] mb-4">
            Featured Works
          </h2>
          <p className="text-[#7B7B7B] text-base sm:text-lg">Recent projects I've worked on</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div
                className={`w-full h-48 sm:h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [background-size:20px_20px]"
                />
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">{project.icon}</div>
                )}
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#050509] group-hover:text-gray-600 transition-colors">{project.title}</h3>
                  <a
                    href={project.link || '#works'}
                    target={project.link ? '_blank' : undefined}
                    rel={project.link ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-black transition-colors"
                    aria-label={project.link ? `View live ${project.title}` : `View ${project.title}`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <p className="text-[#7B7B7B] text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col" onClick={(event) => event.stopPropagation()}>
            <div className="relative">
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  className="w-full max-h-[45vh] object-contain bg-slate-900"
                />
              )}
              <button
                className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-700 shadow hover:bg-white"
                onClick={() => setSelectedProject(null)}
              >
                <span className="sr-only">Close details</span>
                ×
              </button>
            </div>
            <div className="space-y-6 p-8 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 14rem)' }}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-[#050509]">{selectedProject.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">Click outside or use the close button to dismiss.</p>
                </div>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                  onClick={(event) => event.stopPropagation()}
                >
                  View live site
                </a>
              </div>
              <p className="text-gray-600 leading-relaxed">{selectedProject.details || selectedProject.description}</p>
              {selectedProject.highlights && (
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-[#050509]">Key highlights</h4>
                  <ul className="list-inside list-disc space-y-2 text-gray-600">
                    {selectedProject.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Works

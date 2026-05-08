import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {
    id: 1,
    period: '2023 - Present',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    description:
      'Building custom web solutions for clients, focusing on responsive design, performance optimization, and modern frontend frameworks.',
  },
  {
    id: 2,
    period: '2022 - Present',
    role: 'Software Engineering Undergraduate',
    company: 'SLIIT',
    description:
      'Pursuing a degree in Software Engineering at the Sri Lanka Institute of Information Technology. Engaging in various academic projects and learning core computer science principles.',
  },
  {
    id: 3,
    period: '2022 - 2023',
    role: 'Junior Developer Intern',
    company: 'Tech Solutions Inc.',
    description:
      'Worked on frontend development projects, collaborating with senior developers to implement UI components and fix bugs in existing applications.',
  },
]

function Experience() {
  return (
    <section id="experience" className="w-full bg-[#f2f2f2] py-16 sm:py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#050509]">Experience & Education</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-4 border-[#f2f2f2] transform -translate-x-1/2 mt-1.5 md:mt-0 z-10" />

                <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-4">{item.period}</span>
                    <h3 className="text-xl font-bold text-[#050509] mb-1">{item.role}</h3>
                    <h4 className="text-sm font-medium text-[#7B7B7B] mb-4">{item.company}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

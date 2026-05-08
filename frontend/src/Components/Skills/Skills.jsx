import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    key: 'frontend',
    title: 'Frontend Development',
    experience: '2+ Years',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: 'React', value: 85 },
      { name: 'JavaScript', value: 90 },
      { name: 'HTML5', value: 95 },
      { name: 'CSS3', value: 92 },
      { name: 'Tailwind CSS', value: 88 },
    ],
  },
  {
    key: 'uiux',
    title: 'UI/UX Design',
    experience: '1+ Year',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    skills: [
      { name: 'Figma', value: 88 },
      { name: 'Prototyping', value: 85 },
      { name: 'Photoshop', value: 75 },
      { name: 'Wireframing', value: 90 },
      { name: 'User Research', value: 80 },
    ],
  },
  {
    key: 'backend',
    title: 'Backend Development',
    experience: '2+ Years',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: 'Node.js', value: 80 },
      { name: 'MySQL', value: 80 },
      { name: 'MongoDB', value: 75 },
      { name: 'PHP', value: 75 },
      { name: 'Python', value: 70 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Skills() {
  return (
    <section id="skills" className="w-full bg-[#f2f2f2] dark:bg-[#050509] transition-colors duration-300 py-16 sm:py-20 md:py-28">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-white mb-4"
          >
            Professional Skills
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gray-900 dark:bg-white mx-auto"
          />
        </div>

        {/* 3 Column Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.key}
              variants={cardVariants}
              className="relative group bg-white dark:bg-[#111116] rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{cat.title}</h3>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{cat.experience} exp</span>
              </div>

              {/* Skills List (Different UI: Minimal tags with flex-grow bars) */}
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{skill.value}%</span>
                    </div>
                    {/* The sleek, thin progress bar */}
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gray-900 dark:bg-white rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative background element on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-900 dark:group-hover:border-white rounded-3xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

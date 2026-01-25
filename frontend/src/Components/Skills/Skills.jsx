import React, { useState } from 'react'

const categories = [
  {
    key: 'frontend',
    title: 'Frontend Development',
    experience: '2+ Years',
    icon: '💻',
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
    icon: '🎨',
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
    icon: '⚙️',
    skills: [
      { name: 'Node.js', value: 80 },
      { name: 'MySQL', value: 80 },
      { name: 'MongoDB', value: 75 },
      { name: 'PHP', value: 75 },
      { name: 'Python', value: 70 },
    ],
  },
]

function Skills() {
  const [active, setActive] = useState('frontend')
  const activeCategory = categories.find((c) => c.key === active) || categories[0]

  return (
    <section id="skills" className="w-full bg-gradient-to-b to-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Professional Skills</h2>
         
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category tabs - left sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-3 sticky top-20">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`w-full text-left px-4 py-4 rounded-lg font-medium transition-all duration-200 ${
                    active === cat.key
                      ? 'bg-[#FFFFFF] text-black shadow-lg shadow-black'
                      : 'bg-[#0d0d16] text-white hover:bg-gray-500'
                     
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cat.icon}</span>
                    <div className="text-left">
                      <p className="font-semibold text-sm">{cat.title}</p>
                      <p className={`text-xs ${active === cat.key ? 'text-black' : 'text-white'}`}>{cat.experience}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills display - main area */}
          <div className="lg:col-span-3">
            <div className="bg-[#FFFFFF] rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 shadow-black">
              {/* Category header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{activeCategory.icon}</span>
                  <h3 className="text-3xl font-bold text-black">{activeCategory.title}</h3>
                </div>
                <p className="text-gray-500 text-sm font-bold">Professional experience: <span className="font-semibold text-black">{activeCategory.experience}</span></p>
              </div>

              {/* Skills grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {activeCategory.skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex items-end justify-between">
                      <h4 className="text-base font-semibold text-black">{skill.name}</h4>
                      <span className="text-sm font-medium text-black-600 bg-gray-200 px-2 py-1 rounded">{skill.value}%</span>
                    </div>
                    <div className="relative h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-black to-black rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer stats */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-black">{activeCategory.skills.length}</p>
                    <p className="text-sm font-bold text-gray-500">Core Skills</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-black">{Math.round(activeCategory.skills.reduce((a, b) => a + b.value, 0) / activeCategory.skills.length)}</p>
                    <p className="text-sm font-bold text-gray-500">Avg. Proficiency</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-black">{categories.length}</p>
                    <p className="text-sm font-bold text-gray-500">Categories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

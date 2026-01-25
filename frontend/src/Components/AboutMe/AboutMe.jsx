import React from 'react'
import meImage from '../../assets/me.png'

function AboutMe() {
  return (
    <section
      id="about"
      className="w-full bg-[#f2f2f2] pt-0 pb-24 md:pt-4 md:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section heading - centered */}
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-16 text-center text-[#050509]">
          About me
        </h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column - Image */}
          <div className="flex justify-center md:justify-start">
            <img 
              src={meImage} 
              alt="Thisara Goonetilleke" 
              className="w-full max-w-md rounded-b-3xl object-cover grayscale"
            />
          </div>

          {/* Right column - Content */}
          <div className="flex flex-col gap-8">
            {/* Introduction heading */}
            <h3 className="text-xl md:text-2xl font-semibold text-[#7B7B7B]">
              Hi, I'm Thisara Goonetilleke, based in Sri Lanka.
            </h3>

            {/* Paragraph text */}
            <p className="text-[#050509] leading-relaxed text-sm md:text-base">
            "I am a results-driven Software Engineering undergraduate with a deep-seated passion for building high-impact solutions that streamline organizational workflows. I pride myself on being a self-motivated developer who thrives on solving complex problems with efficiency and precision. Beyond coding, I am a flexible and enthusiastic team player with the interpersonal skills necessary to bridge the gap between technical requirements and collaborative success. I am eager to apply my technical curiosity and friendly, proactive attitude to a fast-paced development team."
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 md:gap-1 mt-3">
              <div className="w-[160px] h-[140px] bg-[#0d0d16] border border-[#222237] rounded-2xl px-6 py-7 flex flex-col items-start justify-between shadow-lg shadow-black/30">
                <div className="mb-4 text-white text-2xl">
                  ★
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-400">
                    Experience
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-white">
                    2+ Years
                  </p>
                </div>
              </div>

              <div className="w-[160px] h-[140px] bg-[#0d0d16] border border-[#222237] rounded-2xl px-6 py-7 flex flex-col items-start justify-between shadow-lg shadow-black/30">
                <div className="mb-4 text-white text-2xl">
                  ⬒
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-400">
                    Completed
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-white">
                    3+ Projects
                  </p>
                </div>
              </div>
            </div>

            

          </div>
          
        </div>
      </div>

     

    </section>
  )
}

export default AboutMe
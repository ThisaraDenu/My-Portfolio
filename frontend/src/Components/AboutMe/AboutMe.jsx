import React from 'react'
import meImage from '../../assets/me.png'

function AboutMe() {
  return (
    <section
      id="about"
      className="w-full bg-[#f2f2f2] py-16 sm:py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section heading - centered */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-10 sm:mb-14 md:mb-16 text-center text-[#050509]">
          About me
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left column - Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={meImage}
              alt="Thisara Goonetilleke"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Right column - Content */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Introduction heading */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#7B7B7B]">
              Hi, I'm Thisara Goonetilleke, a based in Sri Lanka.
            </h3>

            {/* Paragraph text */}
            <p className="text-[#050509] leading-relaxed text-sm sm:text-base md:text-lg">
              "I am a results-driven Software Engineering undergraduate with a deep-seated passion for building high-impact solutions that streamline organizational workflows. I pride myself on being a self-motivated developer who thrives on solving complex problems with efficiency and precision. Beyond coding, I am a flexible and enthusiastic team player with the interpersonal skills necessary to bridge the gap between technical requirements and collaborative success. I am eager to apply my technical curiosity and friendly, proactive attitude to a fast-paced development team."
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
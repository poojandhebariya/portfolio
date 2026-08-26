import React, { useEffect, useRef } from 'react';
import { Skillcard } from '../Data/Skillcard';

const skillNames = [
  'C++', 'Cloudinary', 'CSS3', 'EmailJS', 'Express.js',
  'HTML5', 'JavaScript', 'JWT', 'MongoDB', 'React',
  'Node.js', 'Razorpay', 'Streamlit', 'Tailwind CSS', 'Postman'
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
              }, i * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-dark-900 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">My Arsenal</p>
          <h2 className="text-4xl lg:text-5xl font-outfit font-bold">
            <span className="text-white">Technical </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {Skillcard.map((item, index) => (
            <div
              key={index}
              className="skill-card group flex flex-col items-center gap-3 glass border border-white/8 rounded-2xl p-4 cursor-default transition-all duration-500 hover:border-violet-500/40 hover:bg-violet-500/5 hover:shadow-lg hover:shadow-violet-500/10 hover:scale-110 hover:-translate-y-1"
              style={{
                opacity: 0,
                transform: 'translateY(20px) scale(0.9)',
                transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={skillNames[index] || `Skill ${index + 1}`}
                  className="w-full h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-all duration-300"
                />
              </div>
              <p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors duration-300 text-center leading-tight">
                {skillNames[index] || `Skill ${index + 1}`}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-16 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 overflow-hidden">
            <div className="flex gap-6 animate-[marquee_20s_linear_infinite] shrink-0">
              {[...skillNames, ...skillNames].map((name, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap px-4 py-2 rounded-full glass border border-white/8 text-sm text-slate-500 font-medium"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;

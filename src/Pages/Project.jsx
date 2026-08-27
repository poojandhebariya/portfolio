import React, { useRef } from "react";
import { react } from "../Data/ReactProjects";
import StickyScrollReveal from "../ui/StickyScrollReveal";

const Project = () => {
  const sectionRef = useRef(null);

  const projectContent = react.map((item) => ({
    name: item.name,
    description: item.description,
    github: item.github,
    linkedin: item.linkedin,
    video: item.video,
    image: item.image,
    s1: item.s1,
    s2: item.s2,
    s3: item.s3,
    s4: item.s4,
    s5: item.s5,
  }));

  return (
    <section id="projects" ref={sectionRef} className="relative bg-dark-900">
      {/* Section Header */}
      <div className="pt-24 pb-8 text-center relative z-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
          My Work
        </p>

        <h2 className="text-4xl lg:text-5xl font-outfit font-bold">
          <span className="text-white">Featured </span>
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mx-auto mt-4" />

        <p className="text-slate-400 mt-6 max-w-lg mx-auto px-4">
          Scroll through to explore each project — watch the demo videos as you
          go
        </p>
      </div>

      <StickyScrollReveal content={projectContent} />
    </section>
  );
};

export default Project;

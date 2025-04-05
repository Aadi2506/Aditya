import React, { useState } from 'react';
import { projects } from '../data/project';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const ProjectDashBoard = () => {
  const [technology, setTechnology] = useState<string>('all');
  
  // Filter projects based on the selected technology
  const filterProjects = projects.filter((project) => {
    return technology === 'all' || project.techStack.toLowerCase() === technology.toLowerCase();
  });

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        {['All', 'MERN', 'JAVA', 'PYTHON'].map(tech => (
          <button
            onClick={() => setTechnology(tech.toLowerCase())} // Fixing the typo here
            key={tech}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300 border 
              ${technology === tech.toLowerCase() ? 'bg-black text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
              : 'bg-black/50 text-gray-400 border-gray-800 hover:border-purple-500/50'}`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="m-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filterProjects.map((project) => (
          <Card project={projects} key={project._id} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDashBoard;

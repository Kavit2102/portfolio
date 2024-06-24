import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="sticky top-0 left-0 my-12 lg:mt-32 flex gap-10 lg:gap-0 lg:justify-around">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 blur-3xl opacity-30"></div>
        <div className="flex flex-col items-center justify-start sticky top-20 left-0 lg:top-26 lg:left-24">
          <span className="bg-[#1a1443] sticky w-fit text-white px-5 py-4 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="h-screen w-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
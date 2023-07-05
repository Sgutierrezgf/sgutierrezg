import { useState } from "react";
import Modal from "./Modal";
import { AiOutlineFileText } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import portfolioData from "../portfolio.json";

interface Project {
  key: number;
  project: string;
  language: string;
  website: string;
  image: string;
  description: string;
}

const Portfolio = () => {
  const [isSelectedHeroeVisible, setIsSelectedHeroeVisible] =
    useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const portfolio: Project[] = portfolioData.portfolio;
  const handleSelectImg = (project: Project) => {
    setSelectedProject(project);
    setIsSelectedHeroeVisible(true);
  };
  return (
    <div className="portfolio professional relative">
      <div className="mx-auto py-20 relative text-center">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase">
          my <span className="text-orange-600">portfolio</span>
        </h1>
        <span
          className="text-white text-9xl max-[767px]:text-8xl max-[600px]:text-6xl font-semibold absolute left-0 right-0 top-1/2 transform -translate-y-1/2"
          style={{
            color: "hsla(0,0%,100%,.07)",
            letterSpacing: "10px",
            lineHeight: "0.7",
            textTransform: "uppercase",
          }}
        >
          works
        </span>
      </div>
      <div className="">
        <div className="">
          {/* <ul className="mt-0 pl-4 items-center flex flex-wrap justify-center gap-4 mb-4">
            <li className="">ALL</li>
            <li className="">LOGO</li>
            <li className="">VIDEO</li>
            <li className="">GRAPHIC DESIGN</li>
            <li className="">MOCKUP</li>
          </ul> */}
          <div className="ml-auto mr-auto max-w-screen-xl rounded-2xl">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-15 mb-4 pl-4 pr-4">
                {portfolio.map((project) => (
                  <div
                    key={project.key}
                    onClick={() => handleSelectImg(project)}
                    className="cursor-pointer"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <div
                        className="rounded-2xl overflow-hidden relative h-0"
                        style={{ paddingBottom: "56.25%" }}
                      >
                        <img
                          className="object-cover absolute inset-0 w-full h-full"
                          src={project.image}
                          alt={project.project}
                        />
                        <div className="hover:bg-orange-600 hover:rounded-2xl absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-600 ease-in-out">
                          <h3>
                            <span className="">{project.project}</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isSelectedHeroeVisible}
        onClose={() => setIsSelectedHeroeVisible(false)}
      >
        {selectedProject && (
          <div className="rounded-2xl h-auto p-8">
            <div data-aos="fade" className="aos-init aos-animate">
              <h2 className="text-orange-600 text-4xl font-bold m-0 pt-2.5 pb-5 text-center uppercase">
                {selectedProject.project}
              </h2>
              <div className="mb-6 flex flex-wrap gap-2">
                <div className="px-4 flex items-center">
                  <AiOutlineFileText className="mr-2" />
                  <span className="text-sm sm:text-base">
                    Project:
                    <span className="ft-wt-600 uppercase pl-1">
                      {selectedProject.project}
                    </span>
                  </span>
                </div>
                <div className="px-4 flex items-center">
                  <BsCodeSlash className="mr-2" />
                  <span className="text-sm sm:text-base">
                    Language:
                    <span className="ft-wt-600 uppercase pl-1">
                      {selectedProject.language}
                    </span>
                  </span>
                </div>
                <div className="px-4 flex items-center">
                  <BiLinkExternal className="mr-2" />
                  <span className="text-sm sm:text-base">
                    Preview:
                    <a
                      className="preview-link pl-1"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      href={selectedProject.website}
                      style={{ cursor: "none" }}
                    >
                      {selectedProject.website}
                    </a>
                  </span>
                </div>
              </div>
              <figure className="">
                <img
                  className="rounded-2xl m-0 w-full"
                  src={selectedProject.image}
                  alt={selectedProject.project}
                />
              </figure>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;

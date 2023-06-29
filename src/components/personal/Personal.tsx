import Skill from "./Skill";
import { BsBriefcase } from "react-icons/bs";

function Personal() {
  return (
    <div>
      <div className="mx-auto py-20 relative w-full text-center">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase">
          ABOUT
          <span className="text-red-500">ME</span>
        </h1>
        <span
          className="text-white text-9xl max-[767px]:text-8xl max-[600px]:text-6xl  font-semibold absolute left-0 right-0 top-1/2 transform -translate-y-1/2"
          style={{
            color: "hsla(0,0%,100%,.07)",
            letterSpacing: "10px",
            lineHeight: "0.7",
            textTransform: "uppercase",
          }}
        >
          Resume
        </span>
      </div>

      <section className="flex justify-center min-h-screen">
        <div className="w-full p-6 mx-20">
          <div className="text-xl font-bold px-4">
            <div className="grid gap-4">
              <div className="px-4 max-[767px]:text-center">
                <h3 className="text-3xl font-semibold pb-5 mb-0">
                  Personal info
                </h3>
              </div>
              <div className="px-4 hidden max-[767px]:flex max-[767px]:justify-center">
                <img
                  className="rounded-full h-60 w-60 md:h-auto md:w-6/12 object-cover"
                  src="hhttps://github.com/Sgutierrezgf/imagenes/blob/main/perfil/port3.jpeg?raw=true"
                  alt="personal"
                  loading="lazy"
                />
              </div>
              <div className="px-4 ">
                <ul className="flex flex-wrap list-none pl-0 mb-4 grid grid-rows-4 grid-flow-col gap-4">
                  <li className="pb-5">
                    <span className="title capitalize opacity-80 font-medium text-base">
                      first name:{" "}
                    </span>
                    <span className="font-semibold text-base">Sebastian</span>
                  </li>
                  <li>
                    <span className="title capitalize opacity-80 font-medium text-base">
                      last name:{" "}
                    </span>
                    <span className="font-semibold text-base">
                      Gutierrez Guisao
                    </span>
                  </li>
                  <li>
                    <span className="title capitalize opacity-80 font-medium text-base">
                      Nationality:{" "}
                    </span>
                    <span className="font-semibold text-base">Colombia</span>
                  </li>
                  <li>
                    <span className="title capitalize opacity-80 font-medium text-base">
                      phone:{" "}
                    </span>
                    <span className="font-semibold text-base">
                      +604 3012363606
                    </span>
                  </li>
                  <li>
                    <span className="title capitalize opacity-80 font-medium text-base">
                      Email:{" "}
                    </span>
                    <span className="font-semibold text-base">
                      segut10@gmail.com
                    </span>
                  </li>
                  <li>
                    <span className="title capitalize opacity-80 font-medium text-base">
                      Linkedin:{" "}
                    </span>
                    <span className="font-semibold text-base">
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/sebastian-gutierrez-54b403148/"
                        target="_blank"
                      >
                        {" "}
                        sebastian-gutierrez-54b403148
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="title capitalize opacity-80 font-medium text-base">
                      langages:{" "}
                    </span>
                    <span className="font-semibold text-base">
                      Spanish, English
                    </span>
                  </li>
                </ul>
              </div>
              <div className="px-4">
                <a href="https://github.com/Sgutierrezgf/sgutierrezcv/raw/main/src/styles/files/sebastiangutierrez-1.pdf">
                  <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white hover:text-red-500">
                    <span className="relative hover:text-red-500  pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-red-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                      Download CV
                    </span>
                    <svg
                      viewBox="0 0 46 16"
                      height="10"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      id="arrow-horizontal"
                      className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-red-500"
                    >
                      <path
                        transform="translate(30)"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        data-name="Path 10"
                        id="Path_10"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <hr className="my-4 " />
          <div className="px-4">
            <div className="max-[767px]:text-center px-4">
              <h3 className="text-3xl font-semibold pb-5 mb-0">My Skills</h3>
            </div>
            <Skill />
          </div>
          <hr className="my-4" />

          <div className="grid grid-cols-2 px-4">
            <div className="col-span-2 py-4 px-4">
              <h3 className="text-3xl font-semibold pb-5 mb-0">
                Experience <span>&amp;</span> Education
              </h3>
            </div>

            <div className="column-6 m-4 px-4">
              <div className="resume-box">
                <ul className="list-none m-0 p-0">
                  <li className="line mb-12 pr-5 pl-16 relative">
                    <div className="icon bg-red-500 rounded-full text-white h-10 w-10 flex items-center justify-center absolute top-0 left-0 right-0 z-10">
                      <BsBriefcase />
                    </div>
                    <span className="bg-gray-900 rounded-lg text-white inline-block text-xs font-semibold opacity-80 py-1 px-2 mb-3">
                      {" "}
                      2023 - 2023
                    </span>
                    <h5 className="poppins-font text-uppercase mx-1">
                      {" "}
                      Technical support
                      <span className="place opacity-8 pl-6 relative">
                        Coldetec
                      </span>
                    </h5>
                    <p className="m-0">
                      {" "}
                      Technical support was given to the different companies,
                      from installing equipment to digitalizing documents.
                    </p>
                  </li>
                  <li className="line mb-12 pr-5 pl-16 relative">
                    <div className="icon bg-red-500 rounded-full text-white h-10 w-10 flex items-center justify-center absolute top-0 left-0 right-0 z-10">
                      <BsBriefcase />
                    </div>
                    <span className="bg-gray-900 rounded-lg text-white inline-block text-xs font-semibold opacity-80 py-1 px-2 mb-3">
                      {" "}
                      2021 - 2023
                    </span>
                    <h5 className="poppins-font text-uppercase mx-1">
                      {" "}
                      Frontend developer
                      <span className="place opacity-8 pl-6 relative">
                        Jikkosoft
                      </span>
                    </h5>
                    <p className="m-0">
                      {" "}
                      Web development of a tax collection website, using
                      technologies such as React, Typescript, Material UI.
                    </p>
                  </li>
                  <li className="line mb-12 pr-5 pl-16 relative">
                    <div className="icon bg-red-500 rounded-full text-white h-10 w-10 flex items-center justify-center absolute top-0 left-0 right-0 z-10">
                      <BsBriefcase />
                    </div>
                    <span className="bg-gray-900 rounded-lg text-white inline-block text-xs font-semibold opacity-80 py-1 px-2 mb-3">
                      {" "}
                      2019 - 2021
                    </span>
                    <h5 className="poppins-font text-uppercase mx-1">
                      {" "}
                      Database Training
                      <span className="place opacity-8 pl-6 relative">
                        Seti
                      </span>
                    </h5>
                    <p className="m-0">
                      {" "}
                      Development, management and maintenance of the databases
                      of a financial company, performing the process of
                      migrating local databases to virtual databases.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column-6 m-4 px-4">
              <div className="resume-box">
                <ul>
                  <li className="line mb-12 pr-5 pl-16 relative">
                    <div className="icon bg-red-500 rounded-full text-white h-10 w-10 flex items-center justify-center absolute top-0 left-0 right-0 z-10">
                      <BsBriefcase />
                    </div>
                    <span className="bg-gray-900 rounded-lg text-white inline-block text-xs font-semibold opacity-80 py-1 px-2 mb-3">
                      2022
                    </span>
                    <h5 className="poppins-font text-uppercase">
                      ENGINEERING DEGREE
                      <span className="place opacity-8 pl-6 relative">
                        Instituto Tecnologico Metropolitano
                      </span>
                    </h5>
                    <p className="m-0">
                      {" "}
                      I obtained a degree in systems engineering
                    </p>
                  </li>
                  <li className="line mb-12 pr-5 pl-16 relative">
                    <div className="icon bg-red-500 rounded-full text-white h-10 w-10 flex items-center justify-center absolute top-0 left-0 right-0 z-10">
                      <BsBriefcase />
                    </div>
                    <span className="bg-gray-900 rounded-lg text-white inline-block text-xs font-semibold opacity-80 py-1 px-2 mb-3">
                      2020
                    </span>
                    <h5 className="poppins-font text-uppercase">
                      ENGINEERING DEGREE
                      <span className="place opacity-8 pl-6 relative">
                        Instituto Tecnologico Metropolitano
                      </span>
                    </h5>
                    <p className="m-0">
                      {" "}
                      I obtained the title of Systems Technologist.
                    </p>
                  </li>
                  {/* <li className="line mb-12 pr-5 pl-16 relative">
                    <div className="icon bg-red-500 rounded-full text-white h-10 w-10 flex items-center justify-center absolute top-0 left-0 right-0 z-10">
                      <BsBriefcase />
                    </div>
                    <span className="bg-gray-900 rounded-lg text-white inline-block text-xs font-semibold opacity-80 py-1 px-2 mb-3">
                      2015
                    </span>
                    <h5 className="poppins-font text-uppercase">
                      ENGINEERING DEGREE
                      <span className="place opacity-8 pl-6 relative">
                        OXFORD UNIVERSITY
                      </span>
                    </h5>
                    <p className="m-0">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur tempor incididunt
                      ut labore adipisicing elit
                    </p>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Personal;

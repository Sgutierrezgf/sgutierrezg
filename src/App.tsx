import { AiOutlineMessage } from "react-icons/ai";
import { FaUserCircle, FaLaptopCode, FaHome } from "react-icons/fa";
import React, { useState } from "react";
import ContactMe from "./components/ContactMe";
import Personal from "./components/personal/Personal";
import Portfolio from "./components/Portfolio";

function App() {
  const [selectedInfo, setSelectedInfo] = React.useState<unknown>();
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal(info: unknown) {
    setSelectedInfo(info);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  function Modal() {
    let modalContent;

    if (selectedInfo === "User") {
      modalContent = <Personal />;
    } else if (selectedInfo === "Portfolio") {
      modalContent = <Portfolio />;
    } else if (selectedInfo === "Contact") {
      modalContent = <ContactMe />;
    }
    return (
      <div className="modal fixed top-0 right-0 bottom-0 left-0 flex items-center  justify-center z-10 bg-neutral-950 bg-opacity-75">
        <div className="bg-neutral-950 p-4 h-screen w-full animate-slide-down">
          <div className="scroll h-full">{modalContent}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="fondo"></div>
      <div className="container h-4/5 md:flex z-10">
        <div className="image md:w-1/2 flex justify-center">
          <img
            className="object-cover rounded-full md:rounded-none  h-60 w-60 md:h-auto md:w-6/12"
            src="https://github.com/Sgutierrezgf/imagenes/blob/main/perfil/perfil.jpeg?raw=true"
            alt="perfil"
          />
        </div>
        <div className="md:w-1/2 self-center px-4 md:px-0">
          <div>
            <h1 className="text-5xl font-bold leading-10 text-orange-600 hover:underline mt-4 mb-2 pl-14 relative">
              I'M SEBASTIAN GUTIERREZ GUISAO
              <span className="block text-white pt-2">FRONTEND DEVELOPER</span>
            </h1>
            <p className="text-base text-white leading-9 mt-4 mb-6">
              I'm a software developer, my forte is frontend development, in the
              last years I've been preparing myself and continue learning new
              skills mostly with react and javascript. I try to keep a curious
              mentality of wanting to learn more every day, my goal is to become
              a fullstack developer.
            </p>
          </div>
        </div>

        <div className="icons p-4 justify-center mt-8 md:mt-0 md:flex md:justify-center z-[100] relative">
          <ul className="list flex flex-row flex-wrap justify-center md:flex-col md:space-y-2 md:items-center justify-evenly">
            <li
              className="relative group cursor-pointer"
              onClick={() => handleCloseModal()}
            >
              <div className="flex items-center justify-center h-10 relative group">
                <span className="hidden md:inline opacity-0 mr-2 group-hover:text-white px-2 py-1 rounded-full transition-opacity duration-300 group-hover:opacity-100 z-40">
                  HOME
                </span>
                <div className="w-12 h-12 flex items-center justify-center z-40">
                  <FaHome className="cursor-pointer w-8 h-8 transition-transform duration-300 group-hover:text-white z-40 text-orange-600" />
                </div>
                <div className="absolute inset-0 border-4 border-transparent rounded-full group-hover:bg-orange-600 p-2 transition duration-700 ease-in-out -m-2"></div>
              </div>
            </li>
            <li
              className="relative group cursor-pointer"
              onClick={() => handleOpenModal("User")}
            >
              <div className="flex items-center justify-center h-10 ml-3 relative group">
                <span className="hidden md:inline opacity-0 mr-2 group-hover:text-white px-2 py-1 rounded-full transition-opacity duration-300 group-hover:opacity-100 z-40">
                  ABOUT
                </span>
                <div className="w-12 h-12 flex items-center justify-center z-40">
                  <FaUserCircle className="cursor-pointer w-8 h-8 transition-transform duration-300 group-hover:text-white z-40 text-orange-600" />
                </div>
                <div className="absolute  inset-0 border-4 border-transparent rounded-full group-hover:bg-orange-600 p-2 transition duration-700 ease-in-out -m-2"></div>
              </div>
            </li>

            <li
              className="relative group cursor-pointer"
              onClick={() => handleOpenModal("Portfolio")}
            >
              <div className="flex items-center justify-center h-10 mr-2 relative group">
                <span className="hidden md:inline opacity-0 mr-2 group-hover:text-white px-2 py-1 rounded-full transition-opacity duration-300 group-hover:opacity-100 z-40">
                  PORTFOLIO
                </span>
                <div className="w-12 h-12 flex items-center justify-center z-40">
                  <FaLaptopCode className="cursor-pointer w-8 h-8 transition-transform duration-300 group-hover:text-white z-40 text-orange-600" />
                </div>
                <div className="absolute inset-0 border-4 border-transparent rounded-full group-hover:bg-orange-600 p-2 transition duration-700 ease-in-out -m-2"></div>
              </div>
            </li>
            <li
              className="relative group cursor-pointer"
              onClick={() => handleOpenModal("Contact")}
            >
              <div className="flex items-center justify-center h-10 ml-4 relative group">
                <span className="hidden md:inline opacity-0 mr-2 group-hover:text-white px-2 py-1 rounded-full transition-opacity duration-300 group-hover:opacity-100 z-40">
                  CONTACT
                </span>
                <div className="w-12 h-12 flex items-center justify-center z-40">
                  <AiOutlineMessage className="cursor-pointer w-8 h-8 transition-transform duration-300 group-hover:text-white z-40 text-orange-600" />
                </div>
                <div className="absolute inset-0 border-4 border-transparent rounded-full group-hover:bg-orange-600 p-2 transition duration-700 ease-in-out -m-2"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {modalOpen && <Modal />}
    </div>
  );
}

export default App;

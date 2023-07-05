import { useState } from "react";
import {
  FaEnvelopeOpen,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Alert } from "antd";
import axios from "axios";

function ContactMe() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleServerResponse = (ok: boolean, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      // setStatus({
      //     // info: { error: true, msg: msg }
      // })
    }
  };
  const handleOnChange = (e: {
    persist: () => void;
    target: { id: any; value: any };
  }) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/moqzvewr",
      data: inputs,
    })
      .then(() => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error: { response: { data: { error: any } } }) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const handleWhatsAppClick = () => {
    const phoneNumber = "3012363606"; // Número de teléfono móvil
    const message = "¡Hola!"; // Mensaje predefinido

    // Generar la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Abrir WhatsApp en una nueva pestaña o ventana
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="portfolio professional relative">
      <div className="mx-auto py-20 relative text-center">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase">
          get in
          <span className="text-orange-600"> touch</span>
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
          contact
        </span>
      </div>
      <div className="mx-auto max-w-7xl pb-14">
        <div className="flex flex-wrap">
          <div className="px-4 w-full md:w-2/5">
            <h3 className="text-2xl font-semibold mb-0 pb-1.5">
              Don't be shy!
            </h3>
            <p className="mt-4 mb-4">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas, or opportunities to be part of your
              visions.
            </p>
            <div className="flex items-center mb-5">
              <FiMap className="text-3xl mr-2 h-7 w-7 self-start" />
              <p className="font-semibold leading-6">
                <span className="font-normal opacity-80 pb-0 uppercase">
                  Address Point:
                </span>
                <br />
                Cr 91 # 37 - 12 , Medellin City, Colombia.
              </p>
            </div>
            <div className="flex items-center mb-5">
              <FaEnvelopeOpen className="text-3xl mr-2 h-7 w-7 self-start" />
              <p className="font-semibold leading-6">
                <span className="font-normal opacity-80 pb-0 uppercase">
                  Mail me:
                </span>
                <br />
                <a href="mailto:steve@mail.com" style={{ cursor: "none" }}>
                  segut10@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center mb-5">
              <FaPhone className="text-3xl mr-2 w-7 self-start" />
              <p className="font-semibold leading-6">
                <span className="font-normal opacity-80 pb-0 uppercase">
                  Call me:
                </span>
                <br />
                <a href="Tel: +216 21 184 010">+57 301 236 3606</a>
              </p>
            </div>
            <ul className="flex flex-wrap pt-1 mb-5 justify-center">
              <li className="bg-gray-950 hover:bg-orange-600 rounded-full text-white text-lg h-12 w-12 leading-10 mx-1 text-center flex items-center justify-center">
                <a
                  onClick={handleWhatsAppClick}
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "none" }}
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </li>
              <li className="bg-gray-950 hover:bg-orange-600 rounded-full text-white text-lg h-12 w-12 leading-10 mx-1 text-center flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/sebastian-gutierrez-54b403148/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "none" }}
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </li>
              <li className="bg-gray-950 hover:bg-orange-600 rounded-full text-white text-lg h-12 w-12 leading-10 mx-1 text-center flex items-center justify-center">
                <a
                  href="https://twitter.com/sgutierrez24"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "none" }}
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
              </li>
              <li className="bg-gray-950 hover:bg-orange-600 rounded-full text-white text-lg h-12 w-12 leading-10 mx-1 text-center flex items-center justify-center">
                <a
                  href="https://www.instagram.com/sgutierrez2488/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "none" }}
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 w-full md:w-3/5">
            <form id="myForm" className="pl-7" onSubmit={sendEmail}>
              <div className="flex flex-wrap">
                <div className="px-4 w-full md:w-2/4">
                  <div className="mb-8">
                    <input
                      onChange={handleOnChange}
                      required
                      value={inputs.name}
                      id="name"
                      type="text"
                      name="_name"
                      placeholder="YOUR NAME"
                      className="bg-gray-950 border-solid border-2 border-black rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full decoration-white pt-3 pr-6 pl-4 pb-2 w-full"
                    />
                  </div>
                </div>
                <div className="px-4 w-full md:w-2/4">
                  <div className="mb-8">
                    <input
                      onChange={handleOnChange}
                      required
                      value={inputs.email}
                      id="email"
                      type="email"
                      name="_replyto"
                      placeholder="YOUR EMAIL"
                      className="bg-gray-950 border-solid border-2 border-black rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full decoration-white pt-3 pr-6 pl-4 pb-2 w-full"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <input
                      onChange={handleOnChange}
                      required
                      value={inputs.subject}
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="YOUR SUBJECT"
                      className="bg-gray-950 border-solid border-2 border-black rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full decoration-white pt-3 pr-6 pl-4 pb-2 w-full"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <textarea
                      onChange={handleOnChange}
                      required
                      value={inputs.message}
                      id="message"
                      name="message"
                      placeholder="YOUR MESSAGE"
                      style={{ height: "280px" }}
                      className="bg-gray-950 border-solid border-2 border-black rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl decoration-white pt-3 pr-6 pl-4 w-full"
                    ></textarea>
                  </div>
                </div>
                <div className="col-span-2">
                  <button
                    className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white hover:text-orange-600"
                    type="submit"
                    value="Send"
                  >
                    <span className="relative hover:text-orange-600 pr-4 pb-1 text-white after:transition-transform after:duration-600 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-600 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                      {!status.submitting ? (
                        !status.submitted ? (
                          "Send message"
                        ) : (
                          "Message sent"
                        )
                      ) : (
                        <Spin indicator={antIcon} />
                      )}
                    </span>
                    <svg
                      viewBox="0 0 46 16"
                      height="10"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      id="arrow-horizontal"
                      className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-orange-600"
                    >
                      <path
                        transform="translate(30)"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16"
                        data-name="Path 10"
                        id="Path_10"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (
                <Alert
                  message={status.info.msg}
                  type="success"
                  style={{ marginTop: "10px" }}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

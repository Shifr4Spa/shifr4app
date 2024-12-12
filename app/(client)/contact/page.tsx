import React from "react";
import FooterSection from "../(sections)/FooterSection";
import HeaderPage from "@/app/components/HeaderPage";

function Contact() {
  return (
    <div className="min-h-screen !bg-[#121212]">
      <HeaderPage title="Contacto" />
      <div className="py-0 flex flex-col lawyers-center bg-[#efefef] pb-[5rem] text-black">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-0">
              <h3 className="font-frank text-gray-800 text-3xl font-normal sm:text-4xl">
                Información de contacto
              </h3>
              <p className="max-w-xl fontRoboto font-thin mt-10">
                Estamos aquí para ayudarte a encontrar el equilibrio y el
                bienestar que mereces. Utiliza nuestra sección de contacto para
                ponerte en contacto con nuestro equipo de expertos en bienestar
                y relajación. ¡Nos encantaría atenderte y ayudarte a planificar
                tu próxima experiencia de spa!
              </p>

              <iframe
                className="w-full h-80 border-0 mt-5"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.953167636126!2d-103.4158714!3d20.710811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af03b8d9c2b5%3A0xba20d3c808e05657!2sShifra%20Spa!5e0!3m2!1sen!2smx!4v1706583213804!5m2!1sen!2smx"
              ></iframe>

              <div className="mt-8 fontRoboto">
                Consulta gratuita:
                <h3 className="font-frank text-lg font-normal sm:text-3xl mt-5">
                  Llama a: +33 3611 3310/ 33 3611 3313
                </h3>
              </div>

              <div className="mt-8 fontRoboto">
                <h3 className="font-frank text-lg font-normal sm:text-3xl mt-5">
                  Ubicación
                </h3>
                <p className="text-sm mt-2">
                  Bllvd. Puerta de Hierro 4965, UP 65 104 Col, Puerta de Hierro,
                  45116 Zapopan, Jal.
                </p>
              </div>

              <div className="mt-8 fontRoboto">
                <h3 className="font-frank text-lg font-normal sm:text-3xl mt-5">
                  Horarios
                </h3>
                <p className="text-sm mt-2">
                  Lunes a sábado: 9 a. m. a 9 p. m.
                  <br />
                  Domingo: 11 a. m. a 9 p. m.
                </p>
              </div>
            </div>

            <div className="p-0 lg:col-span-3 lg:p-0">
              <h3 className="font-frank text-gray-800 text-3xl font-normal sm:text-4xl">
                Haga su reservación con nosotros
              </h3>

              <div className="p-0 lg:col-span-3 lg:p-0 mt-5">
                <form action="" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Nombre
                    </label>
                    <input
                      className="w-full border-2 border-gray p-3 text-sm focus:outline-none"
                      placeholder="Tu nombre"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Correo electrónico
                      </label>
                      <input
                        className="w-full border-2 border-gray-200 p-3 text-sm focus:outline-none"
                        placeholder="Tu correo electrónico"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Teléfono
                      </label>
                      <input
                        className="w-full border-2 border-gray-200 p-3 text-sm focus:outline-none"
                        placeholder="Tu número de teléfono"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-lg font-medium"
                        htmlFor="services"
                      >
                        Selecciona un servicio
                      </label>
                      <select
                        id="services"
                        className="w-full mt-2 border-2 border-gray-200 p-3 text-sm focus:outline-none"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option disabled>--- MASAJES ---</option>
                        <option value="sueco">Sueco</option>
                        <option value="holistico">Holístico</option>
                        <option value="piedras-calientes">
                          Piedras Calientes
                        </option>
                        <option value="aroma-terapeutico">
                          Aroma Terapéutico
                        </option>
                        <option value="tejido-profundo">Tejido Profundo</option>
                        <option value="lomi-lomi">Lomi Lomi</option>

                        <option disabled>--- SERVICIOS DE SPA ---</option>
                        <option value="hidroterapia">Hidroterapia</option>
                        <option value="exfoliacion-corporal">
                          Exfoliación Corporal
                        </option>
                        <option value="exfoliacion-con-hidroterapia">
                          Exfoliación con Hidroterapia
                        </option>
                        <option value="envoltura-con-exfoliacion">
                          Envoltura con Exfoliación
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Descripción de tu caso
                    </label>
                    <textarea
                      className="w-full border-2 border-gray-200 p-3 text-sm focus:outline-none"
                      placeholder="Describe tu caso"
                      rows={8}
                      id="message"
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="border border-[#971e24]  px-9 py-3 text-[#971e24] outline-0 transition-all  duration-300 hover:bg-[#971e24] hover:text-white focus:border-[#971e24] focus:outline-none focus:ring focus-visible:border-[#971e24]"
                    >
                      Conseguir ayuda ahora!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

export default Contact;

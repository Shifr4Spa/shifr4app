import React from "react";

function ContactSection() {
  return (
    <section className="bg-[#efefef] text-black">
      <div className="mx-auto max-w-screen-xl px-4  py-28 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-0">
            <h3 className="font-frank text-gray-800 text-3xl font-normal sm:text-4xl">
              ¿Necesitas ayuda?
            </h3>
            <p className="max-w-xl fontRoboto font-thin mt-10">
              Estamos aquí para escuchar y asistir. Utiliza nuestra sección de
              contacto para ponerte en contacto con Shifra Spa.
              <br />
              <br />
              Ya sea que tengas preguntas sobre nuestros servicios de spa,
              necesites asesoramiento específico o desees programar una
              consulta, nuestro equipo está listo para ayudarte. Tu camino hacia
              una experiencia relajante y rejuvenecedora comienza aquí.
            </p>

            <div className="mt-8 fontRoboto">
              Consulta gratuita:
              <h3 className="font-frank text-lg font-normal sm:text-3xl mt-5">
                Llama a:
                <br /> 33 3611 3310/ 33 3611 3313
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
                    <option value="piedras-calientes">Piedras Calientes</option>
                    <option value="aroma-terapeutico">Aroma Terapéutico</option>
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
    </section>
  );
}

export default ContactSection;

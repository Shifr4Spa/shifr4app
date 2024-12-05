import React from "react";

function ContactSection() {
  return (
    <section className="bg-[#efefef] text-black">
      <div className="mx-auto max-w-screen-xl px-4  py-28 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-0">
            <h3 className="fontFrank text-gray-800 text-3xl font-normal sm:text-4xl">
              ¿Necesitas ayuda?
            </h3>
            <p className="max-w-xl fontRoboto font-thin mt-10">
              Estamos aquí para escuchar y asistir. Utilice nuestra sección de
              contacto para ponerse en contacto con Agrod & Asociados.
              <br />
              <br />
              Ya sea que tenga preguntas sobre nuestros servicios legales,
              necesite asesoramiento específico o desee programar una consulta,
              nuestro equipo está listo para ayudarle. Su camino hacia
              soluciones legales efectivas comienza aquí.
            </p>

            <div className="mt-8 fontRoboto">
              Consulta gratuita:
              <h3 className="fontFrank text-lg font-normal sm:text-3xl mt-5">
                Llama a: +1 123 456 7890
              </h3>
            </div>
          </div>

          <div className="p-0 lg:col-span-3 lg:p-0">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
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
                    Email
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
                    Phone
                  </label>
                  <input
                    className="w-full border-2 border-gray-200 p-3 text-sm focus:outline-none"
                    placeholder="Tu número de teléfono"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
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

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
              <h3 className="fontFrank text-gray-800 text-3xl font-normal sm:text-4xl">
                Información de contacto
              </h3>
              <p className="max-w-xl fontRoboto font-thin mt-10">
                Estamos aquí para escuchar y asistir. Utilice nuestra sección de
                contacto para ponerse en contacto con Agrod & Asociados.
              </p>

              <iframe
                className="w-full h-80 border-0 mt-5"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119095.58084367783!2d-101.74765030640901!3d21.12305289836255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbeffd6e6e721%3A0x606d95ec61a54327!2sLeon%2C%20Guanajuato!5e0!3m2!1sen!2smx!4v1706583213804!5m2!1sen!2smx"
              ></iframe>
            </div>

            <div className="p-0 lg:col-span-3 lg:p-0">
              <h3 className="fontFrank text-gray-800 text-3xl font-normal sm:text-4xl">
                Revise su caso con nosotros
              </h3>
              <form action="" className="space-y-4 mt-10">
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
                    rows={9}
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

      <FooterSection />
    </div>
  );
}

export default Contact;

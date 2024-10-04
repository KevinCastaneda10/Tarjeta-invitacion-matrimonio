import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const Invitation = () => {
  const targetDate = new Date("2024-11-09T17:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Sección "Nos casamos" */}
      <div
        className="flex items-center justify-center min-h-screen"
        style={{
          backgroundImage: 'url("/fondo1.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-5xl text-yellow-900 font-bold italic">
            ¡Nos casamos!
          </h1>
          <h2 className="text-3xl text-emerald-950 font-semibold italic">
            Viviana y Jhon
          </h2>
        </section>
      </div>

      {/* Sección de cuenta regresiva */}
      <section className="text-center py-16 bg-custom-gray">
        <h3 className="text-3xl font-bold">
          La boda será el 9 de noviembre de 2024 a las 5 PM
        </h3>
        <div className="text-5xl font-bold">
          {timeLeft > 0 ? formatTime(timeLeft) : "¡Es el gran día!"}
        </div>
        <p className="mt-4">Mensaje especial aquí</p>
        <Image
          width={400}
          height={200}
          src="/Tendencias en ramos de novia.jpeg"
          alt="Imagen descriptiva"
          className="mx-auto mt-4"
        />
      </section>

      {/* Sección "Padres de la novia" y "Padres del novio" */}
      <section
        className="py-16 text-center bg-custom-gray"
        // style={{
        //   backgroundImage: 'url("/fondo1.jpeg")',
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "repeat",
        // }}
      >
        <h1 className="text-3xl mb-8">Con la bendición de Dios y nuestros padres</h1>
        <h3 className="text-3xl font-bold text-yellow-900">
          Padres de la novia
        </h3>
        <p className="text-xl text-emerald-950">Nelson y Miryam</p>

        <h3 className="text-3xl font-bold mt-8 text-yellow-900">
          Padres del novio
        </h3>
        <p className="text-xl text-emerald-950">Clemencia</p>
      </section>

      {/* Sección de ubicación */}
      <section className="py-16 bg-custom-gray">
        <h3 className="text-3xl font-bold text-center">Ubicaciones</h3>
        <div className="flex-col flex justify-center items-center mt-8">
          <div className="w-1/2">
            <h4 className="font-bold">Iglesia</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.1572004203326!2d-74.10523396924906!3d4.715345928033926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84b7a582712f%3A0x4e04259f69f7abb2!2sIglesia%20de%20Los%20Santos!5e0!3m2!1ses!2sco!4v1728006401758!5m2!1ses!2sco"
              width="100%" // Cambiado a 100% para que sea responsivo
              height="300"
              className="border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-1/2">
            <h4 className="font-bold">Lugar de reunión</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.0824863143807!2d-74.10237785428762!3d4.712629687666227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84b60f144789%3A0x7eb81ba29a73eed2!2sCasa%20Cleves!5e0!3m2!1ses!2sco!4v1728006579553!5m2!1ses!2sco"
              width="100%" // Cambiado a 100% para que sea responsivo
              height="300"
              className="border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Sección de vestimenta */}
      <section className="py-16 text-center bg-custom-gray">
        <h3 className="text-3xl font-bold">Vestimenta</h3>
        <p className="mt-4">Se requiere vestimenta formal.</p>
      </section>

      {/* Sección de regalos */}
      <section className="py-16 text-center bg-custom-gray">
        <h3 className="text-3xl font-bold">Regalos</h3>
        <p className="mt-4">Lluvia de sobres.</p>
      </section>

      {/* Confirmación de asistencia */}
      <section className="py-16 text-center bg-custom-gray">
        <h3 className="text-3xl font-bold">Confirma tu asistencia</h3>
        <a
          href="https://wa.me/1234567890"
          className="inline-block mt-4 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
        >
          Confirmar asistencia
        </a>
      </section>

      {/* Sección de cierre */}
      <section className="py-16 text-center bg-custom-gray">
        <h3 className="text-3xl font-bold">Con amor,</h3>
        <p className="text-2xl italic">Viviana y Jhon</p>
      </section>
    </div>
  );
};

export default Invitation;

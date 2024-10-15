import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
//import { FaMale, FaFemale } from "react-icons/fa";

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
          <h1
            className="text-7xl text-yellow-900 font-bold italic"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            ¡Nos casamos!
          </h1>
          <h2
            className="text-5xl text-emerald-950 font-semibold italic mt-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Viviana & Jhon
          </h2>
        </section>
      </div>

      {/* Sección de cuenta regresiva */}
      <section className="py-8 bg-gradient-to-b bg-custom-gray text-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Encabezado principal */}
          <h3 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-6">
            La boda será el 9 de noviembre de 2024 a las 5 PM
          </h3>

          {/* Cuenta regresiva */}
          <div className="text-5xl md:text-6xl font-bold text-emerald-950 bg-white py-4 px-8 rounded-lg shadow-lg inline-block">
            {timeLeft > 0 ? formatTime(timeLeft) : "¡Es el gran día!"}
          </div>

          {/* Mensaje especial */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 italic">
            &quot;El amor es paciente, el amor es bondadoso, y el gran día está
            por llegar.&quot;
          </p>

          {/* Imagen descriptiva */}
          <div className="mt-8">
            <Image
              width={400}
              height={200}
              src="/Tendencias en ramos de novia.jpeg"
              alt="Imagen descriptiva"
              className="rounded-lg shadow-md mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Sección de ubicación */}
      <section className="py-8 bg-custom-gray text-gray-800">
        <h3 className="text-4xl font-bold text-center mb-12 mx-8 text-emerald-950">
          ¿En dónde se llevará a cabo?
        </h3>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 space-y-12 lg:space-y-0 mx-auto max-w-6xl px-4">
          {/* Sección de la iglesia */}
          <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-2xl font-bold mb-2 text-gray-700">Iglesia</h4>
            <p className="text-gray-600 mb-1">
              La ceremonia se realizará en la Iglesia de Los Santos, un lugar
              lleno de historia y belleza.
            </p>
            <p className="text-gray-700 font-semibold mb-4">Hora: 5:00 PM</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.1572004203326!2d-74.10523396924906!3d4.715345928033926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84b7a582712f%3A0x4e04259f69f7abb2!2sIglesia%20de%20Los%20Santos!5e0!3m2!1ses!2sco!4v1728006401758!5m2!1ses!2sco"
              width="100%"
              height="300"
              className="border-0 rounded-md shadow-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Sección del lugar de recepción */}
          <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-2xl font-bold mb-2 text-gray-700">
              Lugar de Recepción
            </h4>
            <p className="text-gray-600 mb-1">
              La recepción se llevará a cabo en Casa Cleves, un espacio acogedor
              donde celebraremos juntos.
            </p>
            <p className="text-gray-700 font-semibold mb-4">Hora: 6:00 PM</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.0824863143807!2d-74.10237785428762!3d4.712629687666227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84b60f144789%3A0x7eb81ba29a73eed2!2sCasa%20Cleves!5e0!3m2!1ses!2sco!4v1728006579553!5m2!1ses!2sco"
              width="100%"
              height="300"
              className="border-0 rounded-md shadow-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Sección "Padres de la novia" y "Padres del novio" */}
      <section className="py-8 bg-custom-gray text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-10 text-yellow-900">
            Con la bendición de Dios y nuestros padres
          </h1>

          {/* Sección de los padres de la novia */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-yellow-800 mb-2">
              Padres de la novia
            </h3>
            <p className="text-xl text-emerald-800 italic">Nelson y Miryam</p>
            <div className="flex justify-center mt-4">
              <Image
                width={600}
                height={300}
                src="/ruta-a-imagen-padres-novia.jpg"
                alt="Padres de la novia"
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>

          {/* Sección de los padres del novio */}
          <div>
            <h3 className="text-3xl font-bold text-yellow-800 mb-2">
              Padres del novio
            </h3>
            <p className="text-xl text-emerald-800 italic">Clemencia</p>
            <div className="flex justify-center mt-4">
              <Image
                width={600}
                height={300}
                src="/ruta-a-imagen-padres-novio.jpg"
                alt="Padres del novio"
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de vestimenta */}
      <section className="py-8 text-center bg-custom-gray text-yellow-900">
        <h3 className="text-3xl font-bold text-emerald-950">
          ¿Cómo debes vestirte?
        </h3>
        <p className="mt-4 mb-12 text-lg">La vestimensa será formal.</p>

        {/* Contenedor para las imágenes y descripciones */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Vestimenta para hombre */}
          <div className="flex flex-col items-center">
            <Image
              width={600}
              height={300}
              src="/icons/traje-hombre.png" // Ruta del ícono de traje para hombre
              alt="Vestimenta formal para hombre"
              className="w-24 h-24 mb-4" // Tamaño de la imagen
            />
            <h4 className="text-xl font-semibold text-emerald-950">Ellos</h4>
            <p className="mt-2">Traje formal</p>
            <p className="mt-2 text-gray-700">
              Se reservará el color azul para el novio.
            </p>
          </div>

          {/* Vestimenta para mujer */}
          <div className="flex flex-col items-center">
            <Image
              width={600}
              height={300}
              src="/icons/vestido-mujer.png" // Ruta del ícono de vestido para mujer
              alt="Vestimenta formal para mujer"
              className="w-24 h-24 mb-4" // Tamaño de la imagen
            />
            <h4 className="text-xl font-semibold text-emerald-950">Ellas</h4>
            <p className="mt-2">Vestido formal</p>
            <p className="mt-2 text-gray-700">
              Se reservará el color blanco y rojo para la novia y damas de
              honor.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de regalos */}
      <section className="py-8 text-center bg-custom-gray text-yellow-900">
        <h3 className="text-3xl font-bold mb-6">Regalos</h3>

        {/* Icono de sobre */}
        <div className="flex justify-center mb-6">
          <Image
            width={200}
            height={100}
            src="/icons/sobre-regalo.png" // Asegúrate de tener un ícono de sobre en esta ruta
            alt="Sobre para regalo"
            className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
        </div>

        {/* Texto con estilo refinado */}
        <p className="mt-4 mx-4 md:mx-8 text-lg italic font-semibold text-gray-700">
          ¡Agradecemos tu presencia con una lluvia de sobres!
        </p>

        {/* Caja decorativa alrededor del mensaje */}
        <div className="mt-8 mx-auto max-w-md p-4 bg-white shadow-lg rounded-lg border border-gray-300 transition-transform transform hover:scale-105">
          <p className="text-md text-gray-600 text-center">
            Si deseas hacernos un regalo, te invitamos a hacerlo a través de la
            tradicional{" "}
            <span className="font-bold text-gray-700 italic">
              lluvia de sobres
            </span>
            . ¡Tu contribución será muy apreciada!
          </p>
        </div>
      </section>

      {/* Confirmación de asistencia */}
      <section className="py-8 text-center bg-custom-gray text-emerald-950">
        <h3 className="text-3xl font-bold mb-8">Confirma tu asistencia</h3>

        {/* Botón con icono de WhatsApp */}
        <a
          href="https://wa.me/573160711636?text=Hola,%20confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Viviana%20y%20Jhon."
          className="inline-flex items-center mt-4 bg-green-500 text-white py-4 px-8 rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
        >
          {/* Icono de WhatsApp */}
          <Image
            width={200}
            height={100}
            src="/icons/whatsapp-icon.png" // Asegúrate de tener un icono de WhatsApp en esta ruta
            alt="WhatsApp"
            className="w-6 h-6 mr-3"
          />
          Confirmar asistencia
        </a>

        {/* Mensaje adicional */}
        <p className="mt-6 text-sm text-gray-600 italic">
          Haz clic en el botón para confirmar tu asistencia a través de
          WhatsApp.
        </p>
      </section>

      {/* Sección de cierre */}
      <section className="py-8 text-center bg-custom-gray from-white to-gray-100 text-gray-800">
        {/* Título "Con amor" */}
        <h3 className="text-4xl font-bold mb-4 text-yellow-900 tracking-wide">
          Con amor,
        </h3>

        {/* Nombres con estilo cursivo */}
        <p className="text-3xl italic text-emerald-950">Viviana & Jhon</p>

        {/* Decoración con icono de corazones */}
        <div className="flex justify-center mt-6">
          <Image
            width={200}
            height={100}
            src="/icons/heart-icon.png"
            alt="Hearts"
            className="w-12 h-12 animate-pulse"
          />
        </div>

        {/* Frase de agradecimiento */}
        <p className="mt-8 text-lg text-gray-600 max-w-lg mx-auto italic">
          Gracias por ser parte de este día tan especial para nosotros.
          Esperamos verte pronto para celebrar juntos.
        </p>
      </section>
    </div>
  );
};

export default Invitation;

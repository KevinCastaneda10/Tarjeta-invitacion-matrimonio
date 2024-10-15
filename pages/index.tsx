"use client";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/invitation");
  };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("fondo.jpeg")', // Asegúrate de que esta sea la ruta correcta
        backgroundSize: "cover", // Para hacer que la imagen cubra toda la pantalla
        backgroundPosition: "center", // Para centrar la imagen
      }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-stone-700 text-center">
          ¡Nos Casamos!
        </h1>
        <p className="mt-4 text-base md:text-base lg:text-base text-stone-700 text-center">
          Te esperamos para celebrar con nosotros.
        </p>
        <button
          className="mt-8 bg-stone-700 text-white py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          onClick={handleClick}
        >
          Ver Invitación
        </button>
      </div>
    </div>
  );
}

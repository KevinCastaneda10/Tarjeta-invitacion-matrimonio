"use client";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/invitation");
  };

  return (
    <div className="relative h-screen w-screen" onClick={handleClick}>
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videoboda.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Capa para oscurecer el video (opcional) */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
    </div>
  );
}

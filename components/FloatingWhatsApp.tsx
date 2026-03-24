"use client";

const WA_NUMBER = "543794348893";
const WA_DEFAULT_MSG = "Hola Pablo, me contacto desde tu página web. Quisiera consultar sobre un servicio técnico de aire acondicionado.";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_DEFAULT_MSG)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="floating-wa"
      aria-label="Contactar por WhatsApp"
      title="Escribinos por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="white"
      >
        <path d="M16.003 0C7.17 0 0 7.17 0 16.003c0 2.83.74 5.49 2.03 7.8L0 32l8.43-2.01a16 16 0 0 0 7.573 1.924C24.836 31.914 32 24.744 32 16.003 32 7.17 24.836 0 16.003 0zm0 29.19a13.21 13.21 0 0 1-6.73-1.836l-.482-.286-4.998 1.19 1.22-4.87-.315-.5A13.17 13.17 0 0 1 2.82 16.003c0-7.27 5.914-13.187 13.184-13.187 7.27 0 13.184 5.916 13.184 13.187 0 7.27-5.914 13.187-13.184 13.187zm7.23-9.875c-.397-.198-2.347-1.158-2.71-1.29-.364-.13-.63-.197-.895.198-.265.394-1.03 1.29-1.26 1.555-.232.264-.464.296-.86.098-.397-.198-1.676-.618-3.192-1.97-1.18-1.052-1.977-2.35-2.21-2.746-.232-.396-.025-.61.174-.808.178-.177.396-.462.595-.693.198-.23.264-.395.396-.66.132-.263.066-.494-.033-.692-.1-.198-.895-2.156-1.226-2.95-.323-.773-.65-.668-.895-.68l-.762-.012c-.264 0-.694.1-1.057.494-.364.395-1.39 1.357-1.39 3.31 0 1.954 1.423 3.842 1.622 4.106.198.265 2.8 4.276 6.786 5.995.949.41 1.69.655 2.267.838.953.303 1.82.26 2.506.158.764-.114 2.347-.96 2.678-1.887.33-.928.33-1.724.232-1.888-.1-.165-.365-.264-.762-.462z" />
      </svg>
    </button>
  );
}

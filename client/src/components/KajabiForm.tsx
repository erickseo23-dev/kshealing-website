import { useEffect } from "react";

export default function KajabiForm() {
  useEffect(() => {
    // Cargar el script de Kajabi
    const script = document.createElement("script");
    script.src = "https://www.i3cdigital.com/forms/2149427361/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonta
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <div id="kajabi-form-container" />
    </div>
  );
}

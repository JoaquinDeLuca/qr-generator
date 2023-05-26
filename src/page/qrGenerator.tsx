import { ChangeEvent, useState } from "react";
import QRCode from "react-qr-code";
import React from "../assets/react.svg";
import Check from "../assets/check.svg";

function generatorQr() {
  const [transformToQr, setTransformToQr] = useState<string>("Hola");
  const [pressButtom, setPressBottom] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setTransformToQr(value);
  };

  const handleClick = () => {
    const url = `${window.location.origin}/qrscan?text=${encodeURIComponent(
      transformToQr
    )}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setPressBottom(true);
        let iterval = setInterval(() => {
          setPressBottom(false);

          return clearInterval(iterval);
        }, 2000);
      })
      .catch(() => {
        alert("Error al copiar la URL");
      });
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white flex flex-col items-center justify-between w-80 h-3/4 rounded-2xl shadow-lg py-4 sm:w-[28rem]">
        <div className="bg-blueqr w-72 flex flex-col  items-center rounded-2xl p-4 sm:w-96 sm:py-14 sm:mt-3 ">
          <QRCode
            value={transformToQr}
            fgColor="#fcfdfa"
            bgColor="#2b7dfa"
          />
        </div>
        <div className="flex flex-col items-center gap-4 w-9/12">
          <p className="text-center m-2">
          Genera tus propios códigos QR con facilidad. Convierte enlaces, texto, ubicaciones y más. Compártelo copiando el enlace con el botón de abajo.
          </p>
          <input
            placeholder="ej: https://open.spotify.com"
            className="p-2 border-2 border-gray-500 rounded-lg w-full"
            onChange={handleChange}
          />
          <button
            onClick={handleClick}
            className="bg-bluebtn px-4 py-2 rounded-lg text-white"
          >
            {pressButtom ? <img src={Check} alt="check" /> : "Copiar Link"}
          </button>
        </div>
      </div>
      <picture className="absolute bottom-5 right-5">
        <img src={React} />
      </picture>
    </main>
  );
}

export default generatorQr;

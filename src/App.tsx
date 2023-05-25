import { ChangeEvent, useState } from "react";
import QRCode from "react-qr-code";
import React from "./assets/react.svg";

function App() {
  const [transformToQr, setTransformToQr] = useState<string>("Hola");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setTransformToQr(value);
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div  className="bg-white flex flex-col items-center justify-between gap-8 w-11/12 h-3/4 rounded-2xl shadow-lg p-4  sm:w-[28rem] ">
        <div className="bg-blueqr w-80 flex flex-col  items-center rounded-2xl p-6 sm:w-96 sm:py-14 sm:mt-3 ">
          <QRCode 
            value={transformToQr}
            // size={230}
            // style={{ height: "auto", maxWidth: "60%", width: "100%" }}
            fgColor="#fcfdfa"
            bgColor="#2b7dfa"
          />
        </div>
        <div className="flex flex-col items-center gap-4 w-9/12">
          <p className="text-center text-gray-800">Crea tu QR, podes descargarlo o sacarle una screenShot con " Win + Shift + S "</p>
          <input
            placeholder="Ej: www.spotify.com"
            className="p-2 border-2 border-gray-500 rounded-lg w-full"
            onChange={handleChange}
            />
          <button className="bg-bluebtn px-4 py-2 rounded-lg text-white">Descargar QR</button>
        </div>
      </div>
      <picture className="absolute bottom-5 right-5 cursor-pointer">
        <img src={React} />
      </picture>
    </main>
  );
}

export default App;

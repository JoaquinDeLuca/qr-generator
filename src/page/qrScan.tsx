import { useLocation, Link } from "react-router-dom";
import QRCode from "react-qr-code";

export default function qrScan() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const text = urlParams.get("text") || "";

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col gap-6 justify-center items-center w-[21rem] py-6 rounded-2xl shadow-lg p-2 sm:p-6 sm:w-[28rem]">
        <div className="bg-blueqr w-72 flex justify-center items-center rounded-2xl p-6 sm:w-96 sm:py-14 sm:mt-3 ">
          <QRCode value={text} fgColor="#fcfdfa" bgColor="#2b7dfa" />
        </div>
        <p className="text-lg font-medium">Escanea el QR</p>
        <Link className="bg-bluebtn px-4 py-2 rounded-lg text-white" to={"/"}>
          Generar tu QR
        </Link>
      </div>
    </main>
  );
}

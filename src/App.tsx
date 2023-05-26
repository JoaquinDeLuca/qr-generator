import { Route, Routes } from "react-router-dom";
import GeneratorQR from "./page/qrGenerator";
import QrScan from "./page/qrScan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GeneratorQR />} />
        <Route path="qrscan" element={<QrScan />} />
      </Routes>
    </>
  );
}

export default App;

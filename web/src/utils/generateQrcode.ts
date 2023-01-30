import QRcode from "./qrcode.js";

interface Qrcode {
  // eslint-disable-next-line no-unused-vars
  makeCode: (text: string) => void;
  clear: () => void;
}

let qrcode: null | Qrcode = null;

function generateQrcode(text: string) {
  if (qrcode === null) {
    qrcode = new QRcode(document.getElementById("qrcode-container"));
    qrcode.makeCode(text);
  }
  qrcode.makeCode(text);
}

export default generateQrcode;

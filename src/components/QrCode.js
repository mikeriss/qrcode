import React, { useState, useEffect } from 'react';
const qr = require('qr-image')

const QrCode = ({ value = "Default Value"}) => {
  
  const [dataUrl, setDataUrl] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABzCAAAAACOKGI6AAABAElEQVR42u3aMRLDIAxEUd//0knpFAh2PYwDy6e1zWsEEsLX5/1xYQaa13jc7/183HiqzIKZatZx1pCE98qnmNlmP1qFuFVmwTzYbEnNyMTEHJr/iFvMPcxB5nMqtEk5G3Mj06rjhWidfnbAXNn02gFOtE7qYWAub/ZnKNsG1sFxkLMxNzdLpCzhhVxZ65ipZj9rPu1h9uMWM8sUDnrCMVDpf2IGmn7HYJAhhb0PM8u0Sng1vuW1gplgWtlQaJXLawUzy/Tvef1NEfMA07pfUa/slJ4U5kmmkCYH6wDzYNOq4+v5MKNNNX8+zKmY2ab//61Qps38VwBzZfPdgZllfgHyuEJkKmQ6BAAAAABJRU5ErkJggg==");

  function downloadQrCode(){
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  useEffect(() => {
    if (value) {
      const qrCodePngBuffer = qr.imageSync(value, { margin: 1 });
      const newDataUrl = `data:image/png;base64,${qrCodePngBuffer.toString('base64')}`;
      setDataUrl(newDataUrl);
    }
  }, [value]);

  const imgClassName = value ? '' : 'opacity-50'; // add class to make image partially transparent when value is empty

  return (
    <div className="bg-gray-100 m-4 rounded-r-md flex flex-col justify-center items-center">
      <img className={`w-48 ${imgClassName}`} alt="qrcode" src={dataUrl}></img>
      <button className="bg-blue-500 w-48 p-2 mt-2 hover:bg-blue-400 text-white mb-2" onClick={downloadQrCode}>Download</button>
    </div>
  );
};

export default QrCode;
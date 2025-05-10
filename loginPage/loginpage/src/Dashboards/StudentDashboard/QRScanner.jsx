import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import '../Dashboards.css';
const QRScanner = () => {
  const qrCodeRegionId = 'qr-reader';
  const html5QrCodeRef = useRef(null);
  const [scannedData, setScannedData] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const startScanner = () => {
    setIsOpen(true);
  };

  const stopScanner = () => {
    if (html5QrCodeRef.current) {
      html5QrCodeRef.current.stop().then(() => {
        html5QrCodeRef.current.clear();
        setIsOpen(false);
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      html5QrCodeRef.current = new Html5Qrcode(qrCodeRegionId);

      html5QrCodeRef.current
        .start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          (decodedText, decodedResult) => {
            setScannedData(decodedText);
            html5QrCodeRef.current
              .stop()
              .then(() => {
                html5QrCodeRef.current.clear();
                setIsOpen(false);
              });
          },
          (errorMessage) => {
          }
        )
        .catch((err) => {
          console.error('QR scanner failed to start', err);
        });
    }

    return () => {
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current.clear();
      }
    };
  }, [isOpen]);

  return (
    <div className="qrscanner-container" style={{ textAlign: 'center' }}>
      <h2>QR Code Scanner</h2>
      {!isOpen && (
        <button onClick={startScanner} style={{ padding: '10px', margin: '10px' }}>
          Open Scanner
        </button>
      )}
      {isOpen && (
        <div>
          <div id={qrCodeRegionId} style={{ width: '300px', margin: '0 auto' }} />
          <button onClick={stopScanner} style={{ marginTop: '10px' }}>
            Stop Scanner
          </button>
        </div>
      )}
      {scannedData && (
        <div style={{ marginTop: '20px' }}>
          <strong>Scanned Data:</strong>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default QRScanner;

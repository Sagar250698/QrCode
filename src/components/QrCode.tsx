import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QrCode: React.FC = () => {
  
  const pdfUrl = `${window.location.origin}/pdf/Advocate Praveen Mathare.pdf`;

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h2>QR Code Generator</h2>
      
      <div style={{ 
        margin: '30px 0',
        padding: '20px',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <QRCodeSVG 
          value={pdfUrl} 
          size={256} 
          level="H" 
          includeMargin={true}
          style={{ margin: '0 auto' }}
        />
       
        
        <div style={{ 
          marginTop: '15px',
          padding: '10px',
          backgroundColor: '#e9f7ef',
          borderRadius: '4px',
          display: 'inline-block'
        }}>
        
        </div>
      </div>
     
    </div>
  );
};

export default QrCode;
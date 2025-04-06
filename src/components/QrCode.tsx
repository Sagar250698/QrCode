import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QrCode: React.FC = () => {
  
  const pdfUrl = `${window.location.origin}/pdf/Testimonials.pdf`;

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
        <p style={{ 
          marginTop: '20px',
          fontSize: '18px',
          color: '#333'
        }}>
          Scan this QR code to open the PDF document
        </p>
        
        <div style={{ 
          marginTop: '15px',
          padding: '10px',
          backgroundColor: '#e9f7ef',
          borderRadius: '4px',
          display: 'inline-block'
        }}>
          <p>PDF URL: <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0066cc' }}
          >
            {pdfUrl}
          </a></p>
        </div>
      </div>

      <div style={{ 
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#f0f0f0',
        borderRadius: '4px'
      }}>
        <h3>How to use:</h3>
        <ol style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <li>Display this QR code where users can scan it</li>
          <li>Users scan with their phone's camera or QR scanner app</li>
          <li>The PDF will automatically open in their browser</li>
        </ol>
      </div>
    </div>
  );
};

export default QrCode;
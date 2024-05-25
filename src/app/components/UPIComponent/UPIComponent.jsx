// components/UPIComponent.js
import React from 'react';

const UPIComponent = () => {
  const dummyUpiId = 'dummy@upi';
  const dummyQrCode = '/qr'; // Replace with an actual path to the QR code image

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h3 className="text-xl font-bold mb-4">Pay via UPI</h3>
      <img src={dummyQrCode} alt="QR Code" className="mx-auto mb-4" />
      <p className="text-center mb-4">UPI ID: {dummyUpiId}</p>
      <p className="text-red-500 mb-4">Note: Mail your payment screenshot to the given email address.</p>
    </div>
  );
};

export default UPIComponent;




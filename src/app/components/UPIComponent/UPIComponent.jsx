'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const UPIComponent = ({ collegeName }) => {
  const router = useRouter();

  const LNCTUpiId = 'dummy@upi';
  const LNCTQrCode = '/upi_1716625429539.png'; // Replace with actual paths to QR code images
  const RITUpiId = 'dummy@upi';
  const RITQrCode = '/upi_1716625969013.png'; // Replace with actual paths to QR code images

  let upiId = '';
  let qrCode = '';

  if (collegeName === 'lnct') {
    upiId = LNCTUpiId;
    qrCode = LNCTQrCode;
  } else if (collegeName === 'rit') {
    upiId = RITUpiId;
    qrCode = RITQrCode;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h3 className="text-xl font-bold mb-4">Pay via UPI</h3>
      {qrCode ? (
        <Image src={qrCode} alt="QR Code" width={600} height={400} className="mx-auto mb-4" />
      ) : (
        <p className="text-center mb-4">Loading QR Code...</p>
      )}
      <p className="text-center mb-4">UPI ID: {upiId || 'Loading UPI ID...'}</p>
      <p className="text-red-500 mb-4">Note: Mail your payment screenshot to the given email address.</p>
    </div>
  );
};

export default UPIComponent;

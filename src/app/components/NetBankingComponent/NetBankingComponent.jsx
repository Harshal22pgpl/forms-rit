// components/NetBankingComponent.js
import React from 'react';

const NetBankingComponent = () => {
  const dummyAccountNumber = '656905601726';
  const dummyIFSC = 'ICIC0004204';
  const dummyLogo = '/logo1.png'; // Replace with an actual path to the logo image

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8 border-2">
      <h3 className="text-xl font-bold mb-4">Pay via Bank Account</h3>
      <img src={dummyLogo} alt="College Logo" className="mx-auto mb-4" />
      <p className="text-center mb-4 text-2xl p-6">Account Number: {dummyAccountNumber}</p>
      <p className="text-center mb-4 text-2xl">IFSC Code: {dummyIFSC}</p>

      <p className="text-red-500 mb-4">Note: Mail your payment screenshot to the given email address.</p>
    </div>
  );
};

export default NetBankingComponent;

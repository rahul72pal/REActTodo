import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const VerifyEmail = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4">Verify Your Email</h1>
      <p className="text-gray-600 mb-6">Enter the OTP sent to your email address</p>

      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        isInputNum={true}
        separator={<span className="mx-2">-</span>}
        containerStyle="mb-6"
        inputStyle="w-12 h-12 text-2xl border rounded focus:outline-none focus:border-blue-500"
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        onClick={() => {
          // Add your logic for OTP verification here
          console.log('Verifying OTP:', otp);
        }}
      >
        Verify
      </button>
    </div>
  );
};

export default VerifyEmail;

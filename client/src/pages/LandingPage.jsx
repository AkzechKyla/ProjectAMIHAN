import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/Background Photo.png';
import logoImage from '../assets/Logo.png';
import image2 from '../assets/image 2.png';
import image3 from '../assets/image 3.png';
import logowhite from '../assets/Logo White.png';

const LandingPage = () => {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/flood-prediction');
  }

  return (
    <div className="font-inter min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <img
          src={logoImage}
          alt="Amihan Logo and Title"
          className="mb-8"
          style={{ width: '536px' }}
        />

        <p className="text-[#305872] text-[18px] font-medium text-center leading-snug mb-10">
          A hybrid Neuro-Fuzzy AI to predict flood heights and <br />
          generate early risk warnings for Metro Manila
        </p>

        <button
          className="bg-[#87AEC8] text-white text-[16px] font-semibold rounded-xl cursor-pointer"
          style={{ width: '250px', height: '46px' }}
          onClick={handleButtonClick}
        >
          Try Flood Prediction Tool
        </button>
      </div>

      {/* About Section */}
      <div className="w-screen flex-grow px-20 py-16 flex flex-col gap-16">
        {/* Top Row: Text + Images */}
        <div className="flex justify-between items-start">
          <div className="max-w-xl">
            <h2 className="text-[24px] font-semibold text-[#305872] mb-4">
              What is Project Amihan?
            </h2>
            <p className="text-black text-[18px] leading-relaxed">
              <strong>Project Amihan</strong> is an advanced predictive system
              designed to enhance flood preparedness and mitigation efforts by
              providing accurate and timely warnings, ultimately helping to
              protect lives, property, and infrastructure in one of Southeast
              Asia's most vulnerable urban regions — <strong>Metro Manila</strong>.
            </p>
            <br />
            <p className="text-black text-[18px] leading-relaxed">
              The project is named after the Philippine wind deity Amihan,
              who could calm the seas to ensure safety or stir the winds as
              a warning of impending weather changes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <img
              src={image2}
              alt="Flood aerial"
              className="h-[200px] object-cover rounded"
            />
            <img
              src={image3}
              alt="Flood street"
              className="h-[200px] object-cover rounded"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Hybrid AI Description + Boxes */}
        <div>
          <p className="text-black text-[18px] leading-relaxed mb-8">
            Project Amihan utilizes a powerful hybrid AI model known as a{' '}
            <strong>Neuro-Fuzzy system</strong>. This innovative approach
            combines the best of two artificial intelligence paradigms:
          </p>

          <div className="flex justify-center gap-10">
            {/* ANN Card */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg px-16 py-16 max-w-md text-center">
              <h3 className="text-[#305872] text-[20px] font-semibold mb-2">
                Artificial Neural Networks (ANNs)
              </h3>
              <p className="text-gray-400 text-[16px] leading-snug">
                Excel at learning complex <br /> patterns and relationships<br /> from vast amounts of data
              </p>
            </div>

            {/* Fuzzy Logic Card */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg px-16 py-16 max-w-md text-center">
              <h3 className="text-[#305872] text-[20px] font-semibold mb-2">
                Fuzzy Logic
              </h3>
              <p className="text-gray-400 text-[16px] leading-snug">
                Handles uncertainty and allows the<br /> system to reason with imprecise<br /> information, much like a human<br /> expert would
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-screen bg-[#305872] px-20 py-8 flex items-center mt-auto">
        {/* Logo + Navigation Links in one row */}
        <div className="flex items-center gap-8">
          <img
            src={logowhite}
            alt="logo-white"
            className="h-[60px]"
          />
          <div className="flex flex-col text-white font-semibold text-[12px]">
            <a href="#" className="text-white hover:underline hover:text-white mb-2">Home</a>
            <a href="/flood-prediction" className="text-white hover:underline hover:text-white">Flood Prediction Tool</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

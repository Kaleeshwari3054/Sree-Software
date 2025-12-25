// import React from "react";
// import banner from "../assets/Banner.jpeg";
// import { useNavigate } from "react-router-dom";
// import "../Styles/Heros.css";

// import {
//   FaRupeeSign,
//   FaRocket,
//   FaBrain,
//   FaCheckCircle,
//   FaChartLine,
//   FaHandshake,
//   FaLifeRing,
//   FaFire,
//   FaTrophy,
//   FaClock,
//   FaBan,
//   FaShareAlt,
// } from "react-icons/fa";

// const handleShare = async () => {
//   const shareUrl = 'https://web.almodesk.in'; // Full URL with https://
//   const shareData = {
//     title: 'Check this page',
//     url: shareUrl
//   };

//   if (navigator.share) {
//     try {
//       await navigator.share(shareData);
//     } catch (error) {
//       // WhatsApp fallback
//       window.open(`https://wa.me/?text=${encodeURIComponent(shareData.title + ' ' + shareUrl)}`, '_blank');
//     }
//   } else {
//     // Desktop fallback
//     navigator.clipboard.writeText(shareUrl);
//     alert('URL copied! Paste in WhatsApp');
//   }
// };

// const Hero = () => {
//   const navigate = useNavigate();
//   const handleRegister = () => {
//     navigate("/paymentbutton");
//   };

//   //  const handleRegister = () => {
//   //   navigate("/whatsappform");
//   // };

//   //  const handleRegister = () => {
//   //   navigate("/whatsappform");
//   // };

//   return (
//     <div className="main">
//       <div className="hero layout">
//         {/* Left Side: Title + Banner Image */}
//         <div className="hero-left">
//           <h1 className="hero-title">One Day One Lakh Challenge</h1>
//           <div className="hero-banner-wrapper">
//             <img src={banner} alt="Hero" className="hero-banner" />
//           </div>
//         </div>

//         {/* Right Side: Payment Box */}
//         <div className="hero-right desktop-only">
//           <div className="hero-card">
//             <h5 className="hero-card-title">Choose Your Option</h5>

//             <label className="hero-plan">
//               <input type="radio" checked readOnly />
//               <div className="hero-plan-text">
//                 <h6>One Day One Lakh (499 + 18% GST)</h6>
//                 <small>₹ 588.82</small>
//               </div>
//             </label>

//             <div className="hero-amount-row">
//               <span>Amount</span>
//               <span className="hero-amount">₹ 588.82</span>
//             </div>

//             {/* <button className="hero-btn-primary">Register Now</button> */}
//             <button className="hero-btn-primary" onClick={handleRegister}>
//               Register Now
//             </button>
//             {/* <button className="hero-btn-secondary">
//               <i className="bi bi-share"></i> Share this page
//             </button> */}
//             <button className="hero-btn-secondary" onClick={handleShare}>
//   <i className="bi bi-share"></i> Share this page
// </button>
//           </div>
//         </div>
//       </div>

//       <div className="hero-text-block">
//         <h4 className="hero-subtitle">
//           ஒரு நாள் – ஒரு லட்சம் சம்பாதிக்க Ready ஆ?
//         </h4>

//         <div className="hero-content">
//           <p className="hero-line">
//             <FaRupeeSign className="hero-icon income" />
//             ஒரு நாள் – ஒரு லட்சம் சம்பாதிங்க
//           </p>

//           <p className="hero-line">
//             <FaCheckCircle className="hero-icon success" />
//             பூஜ்ய ரூபாய் – பூஜ்ய ரிஸ்க் – பூஜ்ய முதலீடு
//           </p>

//           <p className="hero-line">
//             <FaRocket className="hero-icon rocket" />
//             இன்று தொடங்குங்க. இன்று உங்கள் வாழ்க்கையை மாற்றுங்க.
//           </p>

//           <p className="hero-line">
//             <FaHandshake className="hero-icon handshake" />
//             ஒரே ஒரு மெசேஜ்… ஒரு வாய்ப்பு… ஒரு புதிய எதிர்காலம்.
//           </p>

//           <p className="hero-line">
//             <FaBrain className="hero-icon brain" />
//             அனுபவம் தேவையில்லை.
//           </p>

//           <p className="hero-line">
//             <FaCheckCircle className="hero-icon success" />
//             சுத்தமான வளர்ச்சி. சுத்தமான வருமானம்.
//           </p>

//           <p className="hero-line">
//             <FaChartLine className="hero-icon chart" />
//             நாள் தின இலக்கு: ₹1,00,000
//           </p>

//           <p className="hero-line">
//             <FaHandshake className="hero-icon handshake" />
//             உங்க வேலை: Join → Learn → Earn
//           </p>

//           <p className="hero-line">
//             <FaTrophy className="hero-icon trophy" />
//             Build Your Dream. Build Your Income.
//           </p>

//           <p className="hero-line">
//             <FaLifeRing className="hero-icon support" />
//             100% Support | 24/7 Guidance
//           </p>

//           <p className="hero-line">
//             <span className="hero-icon income">₹</span>
//             <span className="hero-icon success">✓</span>
//             One Day One Lakh ஒரு வாக்குறுதி மட்டும் இல்ல… உங்கள் வாழ்க்கையை
//             மாற்றும் பயணம்.
//           </p>

//           <p className="hero-line">
//             <FaRocket className="hero-icon rocket" />
//             Start From Zero. Rise Like a Hero.
//           </p>

//           <p className="hero-line">
//             <FaClock className="hero-icon clock" />
//             Your Time Starts Now.
//           </p>

//           <p className="hero-line">
//             <FaFire className="hero-icon fire" />
//             குறைந்த இடங்கள் மட்டுமே – இப்போதே சேருங்கள்!
//           </p>

//           <p className="hero-line">
//             <FaBan className="hero-icon danger" />
//             இடங்கள் முடிந்ததும் மீண்டும் திறக்காது!
//           </p>

//           <p className="hero-line">
//             <FaShareAlt className="hero-icon share" />
//             உங்க நண்பர்களுக்கும் share பண்ணுங்க… அவர்களும் உங்களோட சேர்ந்து
//             வளரட்டும்!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import banner from "../assets/Banner.jpeg";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

import {
  FaRupeeSign,
  FaRocket,
  FaBrain,
  FaCheckCircle,
  FaChartLine,
  FaHandshake,
  FaLifeRing,
  FaFire,
  FaTrophy,
  FaClock,
  FaBan,
  FaShareAlt,
  FaWhatsapp,
} from "react-icons/fa";



const Hero = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/paymentbutton");
  };
    const handleWhatsApp = () => {
    navigate("/whatsappform");  // 👈 WHATSAPP NAVIGATION
  };

    const handleShare = async () => {
    const shareUrl = "https://web.almodesk.in"; // Full URL with https://
    const shareData = {
      title: "Check this page",
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // WhatsApp fallback
        window.open(
          `https://wa.me/?text=${encodeURIComponent(
            shareData.title + " " + shareUrl
          )}`,
          "_blank"
        );
      }
    } else {
      // Desktop fallback
      navigator.clipboard.writeText(shareUrl);
      alert("URL copied! Paste in WhatsApp");
    }
  };

 
  return (
    <div className="main">
      <div className="hero layout">
        {/* Left Side: Title + Banner Image */}
        <div className="hero-left">
          <h1 className="hero-title">One Day One Lakh Challenge</h1>
          <div className="hero-banner-wrapper">
            <img src={banner} alt="Hero" className="hero-banner" />
          </div>
        </div>

        {/* Right Side: Payment Box */}
        <div className="hero-right desktop-only">
          <div className="hero-card">
            <h5 className="hero-card-title">Choose Your Option</h5>

            <label className="hero-plan">
              <input type="radio" checked readOnly />
              <div className="hero-plan-text">
                <h6>One Day One Lakh (499 + 18% GST)</h6>
                <small>₹ 588.82</small>
              </div>
            </label>

            <div className="hero-amount-row">
              <span>Amount</span>
              <span className="hero-amount">₹ 588.82</span>
            </div>

            {/* <button className="hero-btn-primary">Register Now</button> */}
            <button className="hero-btn-primary" onClick={handleRegister}>
              Register Now
            </button>
            <button className="hero-btn-secondary" onClick={handleShare}>
              <i className="bi bi-share"></i> Share this page
            </button>
          </div>
        </div>
      </div>

      <div className="hero-text-block">
        <h4 className="hero-subtitle">
          ஒரு நாள் – ஒரு லட்சம் சம்பாதிக்க Ready ஆ?
        </h4>

        <div className="hero-content">
          <p className="hero-line">
            <FaRupeeSign className="hero-icon income" />
            ஒரு நாள் – ஒரு லட்சம் சம்பாதிங்க
          </p>

          <p className="hero-line">
            <FaCheckCircle className="hero-icon success" />
            பூஜ்ய ரூபாய் – பூஜ்ய ரிஸ்க் – பூஜ்ய முதலீடு
          </p>

          <p className="hero-line">
            <FaRocket className="hero-icon rocket" />
            இன்று தொடங்குங்க. இன்று உங்கள் வாழ்க்கையை மாற்றுங்க.
          </p>

          <p className="hero-line">
            <FaHandshake className="hero-icon handshake" />
            ஒரே ஒரு மெசேஜ்… ஒரு வாய்ப்பு… ஒரு புதிய எதிர்காலம்.
          </p>

          <p className="hero-line">
            <FaBrain className="hero-icon brain" />
            அனுபவம் தேவையில்லை.
          </p>

          <p className="hero-line">
            <FaCheckCircle className="hero-icon success" />
            சுத்தமான வளர்ச்சி. சுத்தமான வருமானம்.
          </p>

          <p className="hero-line">
            <FaChartLine className="hero-icon chart" />
            நாள் தின இலக்கு: ₹1,00,000
          </p>

          <p className="hero-line">
            <FaHandshake className="hero-icon handshake" />
            உங்க வேலை: Join → Learn → Earn
          </p>

          <p className="hero-line">
            <FaTrophy className="hero-icon trophy" />
            Build Your Dream. Build Your Income.
          </p>

          <p className="hero-line">
            <FaLifeRing className="hero-icon support" />
            100% Support | 24/7 Guidance
          </p>

          <p className="hero-line">
            <span className="hero-icon income">₹</span>
            <span className="hero-icon success">✓</span>
            One Day One Lakh ஒரு வாக்குறுதி மட்டும் இல்ல… உங்கள் வாழ்க்கையை
            மாற்றும் பயணம்.
          </p>

          <p className="hero-line">
            <FaRocket className="hero-icon rocket" />
            Start From Zero. Rise Like a Hero.
          </p>

          <p className="hero-line">
            <FaClock className="hero-icon clock" />
            Your Time Starts Now.
          </p>

          <p className="hero-line">
            <FaFire className="hero-icon fire" />
            குறைந்த இடங்கள் மட்டுமே – இப்போதே சேருங்கள்!
          </p>

          <p className="hero-line">
            <FaBan className="hero-icon danger" />
            இடங்கள் முடிந்ததும் மீண்டும் திறக்காது!
          </p>

          <p className="hero-line">
            <FaShareAlt className="hero-icon share" />
            உங்க நண்பர்களுக்கும் share பண்ணுங்க… அவர்களும் உங்களோட சேர்ந்து
            வளரட்டும்!
          </p>
        </div>
      </div>
       <div className="whatsapp-popup">
        <button 
          className="whatsapp-btn"
          onClick={handleWhatsApp}
          title="WhatsApp Support"
        >
          <FaWhatsapp size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
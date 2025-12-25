// import React from "react";
// import { useNavigate } from "react-router-dom"; // ✅ add this

// const PaymentCard = () => {
//   const navigate = useNavigate();
//   const handleRegister = () => {
//     navigate("/paymentbutton");
//   };

//   const handleShare = async () => {
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
//   // const handleRegister = () => {
//   //   navigate("/whatsappform");
//   // };

//   const cardStyles = {
//   wrapper: {
//     display: "none",          // default: desktop hide
//   },
//   card: {
//     width: "100%",
//     maxWidth: "400px",
//     margin: "0 auto",
//   },
// };
//   return (
//     <div className="mobile-payment-card">
//       <div className="hero-card">
//         <h5 className="hero-card-title">Choose Your Option</h5>
//         <label className="hero-plan">
//           <input type="radio" checked readOnly />
//           <div className="hero-plan-text">
//             <h6>One Day One Lakh (499 + 18% GST)</h6>
//             <small>₹ 588.82</small>
//           </div>
//         </label>
//         <div className="hero-amount-row">
//           <span>Amount</span>
//           <span className="hero-amount">₹ 588.82</span>
//         </div>
//          <button
//               className="hero-btn-primary"
//               onClick={handleRegister}
//             >
//               Registerss Now
//             </button>
//         <button className="hero-btn-secondary" onClick={handleShare}>
//           <i className="bi bi-share"></i> Share this page
//         </button>
//       </div>
//     </div>

//   );
// };

// export default PaymentCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentCard = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/paymentbutton");
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
    <>
      {/* JSX-க்குள்ளே CSS */}
      <style>{`
       /* Default: desktop / large devices - card hide */
.mobile-payment-card {
  display: none;
}

/* Small devices மட்டும் show (width ≤ 768px) */
@media (max-width: 768px) {
  .mobile-payment-card {
    display: block;
    width: 90%;
    margin: 1rem 1rem;   

  }

  .hero-card {
    height: 600px;
    padding: 1.5rem;
  }
}

      `}</style>

      <div className="mobile-payment-card">
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

          <button className="hero-btn-primary" onClick={handleRegister}>
            Register Now
          </button>

          <button className="hero-btn-secondary" onClick={handleShare}>
            <i className="bi bi-share"></i> Share this page
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;

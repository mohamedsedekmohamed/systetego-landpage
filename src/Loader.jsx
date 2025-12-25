import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  // محاكاة انتهاء التحميل (يمكنك ربطها بـ API أو حالة حقيقية)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 4 ثواني
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <Overlay
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* خلفية تفاعلية */}
          <div className="bg-decor top-left"></div>
          <div className="bg-decor bottom-right"></div>

          <ContentContainer>
            {/* اللودر الخاص بك مع إضافة لمعان حوله */}
            <LoaderWrapper>
              <Loader />
              <div className="glow"></div>
            </LoaderWrapper>

            {/* نصوص متحركة */}
            <TextSection>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                SYSTEGO <span className="red">AI</span>
              </motion.h2>
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Initializing digital evolution...
              </motion.p>
            </TextSection>
          </ContentContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

// --- المكون الخاص بك (Loader) مع تعديلات بسيطة في الـ CSS ---
const Loader = () => {
  return (
    <StyledLoaderWrapper>
       <svg aria-label="Hourglass Loader" role="img" height="80px" width="80px" viewBox="0 0 56 56" className="loader">
        <clipPath id="sand-mound-top">
          <path d="M 14.613 13.087 C 15.814 12.059 19.3 8.039 20.3 6.539 C 21.5 4.789 21.5 2.039 21.5 2.039 L 3 2.039 C 3 2.039 3 4.789 4.2 6.539 C 5.2 8.039 8.686 12.059 9.887 13.087 C 11 14.039 12.25 14.039 12.25 14.039 C 12.25 14.039 13.5 14.039 14.613 13.087 Z" className="loader__sand-mound-top" />
        </clipPath>
        <clipPath id="sand-mound-bottom">
          <path d="M 14.613 20.452 C 15.814 21.48 19.3 25.5 20.3 27 C 21.5 28.75 21.5 31.5 21.5 31.5 L 3 31.5 C 3 31.5 3 28.75 4.2 27 C 5.2 25.5 8.686 21.48 9.887 20.452 C 11 19.5 12.25 19.5 12.25 19.5 C 12.25 19.5 13.5 19.5 14.613 20.452 Z" className="loader__sand-mound-bottom" />
        </clipPath>
        <g transform="translate(2,2)">
          <g transform="rotate(-90,26,26)" strokeLinecap="round" strokeDashoffset="153.94" strokeDasharray="153.94 153.94" stroke="hsl(0,0%,100%)" fill="none">
            <circle transform="rotate(0,26,26)" r="24.5" cy={26} cx={26} strokeWidth="2.5" className="loader__motion-thick" />
            <circle transform="rotate(90,26,26)" r="24.5" cy={26} cx={26} strokeWidth="1.75" className="loader__motion-medium" />
            <circle transform="rotate(180,26,26)" r="24.5" cy={26} cx={26} strokeWidth={1} className="loader__motion-thin" />
          </g>
          <g transform="translate(13.75,9.25)" className="loader__model">
            <path d="M 1.5 2 L 23 2 C 23 2 22.5 8.5 19 12 C 16 15.5 13.5 13.5 13.5 16.75 C 13.5 20 16 18 19 21.5 C 22.5 25 23 31.5 23 31.5 L 1.5 31.5 C 1.5 31.5 2 25 5.5 21.5 C 8.5 18 11 20 11 16.75 C 11 13.5 8.5 15.5 5.5 12 C 2 8.5 1.5 2 1.5 2 Z" fill="hsl(0,90%,85%)" />
            <g strokeLinecap="round" stroke="hsl(35,90%,90%)">
              <line y2="20.75" x2={12} y1="15.75" x1={12} strokeDasharray="0.25 33.75" strokeWidth={1} className="loader__sand-grain-left" />
              <line y2="21.75" x2="12.5" y1="16.75" x1="12.5" strokeDasharray="0.25 33.75" strokeWidth={1} className="loader__sand-grain-right" />
              <line y2="31.5" x2="12.25" y1={18} x1="12.25" strokeDasharray="0.5 107.5" strokeWidth={1} className="loader__sand-drop" />
              <line y2="31.5" x2="12.25" y1="14.75" x1="12.25" strokeDasharray="54 54" strokeWidth="1.5" className="loader__sand-fill" />
              <line y2="31.5" x2={12} y1={16} x1={12} strokeDasharray="1 107" strokeWidth={1} stroke="hsl(35,90%,83%)" className="loader__sand-line-left" />
              <line y2="31.5" x2="12.5" y1={16} x1="12.5" strokeDasharray="12 96" strokeWidth={1} stroke="hsl(35,90%,83%)" className="loader__sand-line-right" />
              <g strokeWidth={0} fill="hsl(35,90%,90%)">
                <path d="M 12.25 15 L 15.392 13.486 C 21.737 11.168 22.5 2 22.5 2 L 2 2.013 C 2 2.013 2.753 11.046 9.009 13.438 L 12.25 15 Z" clipPath="url(#sand-mound-top)" />
                <path d="M 12.25 18.5 L 15.392 20.014 C 21.737 22.332 22.5 31.5 22.5 31.5 L 2 31.487 C 2 31.487 2.753 22.454 9.009 20.062 Z" clipPath="url(#sand-mound-bottom)" />
              </g>
            </g>
            <rect height={2} width="24.5" fill="red" />
            <rect height={2} width="24.5" y="31.5" fill="red" />
          </g>
        </g>
      </svg>
    </StyledLoaderWrapper>
  );
};

// --- التنسيقات (Styled Components) لجعل الشكل "جامد" ---

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: #050505;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .bg-decor {
    position: absolute;
    width: 40vw;
    height: 40vw;
    background: radial-gradient(circle, rgba(255, 0, 0, 0.1) 0%, transparent 70%);
    filter: blur(80px);
    z-index: 1;
  }
  .top-left { top: -10%; left: -10%; }
  .bottom-right { bottom: -10%; right: -10%; }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const LoaderWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  
  .glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    background: rgba(255, 0, 0, 0.2);
    filter: blur(40px);
    border-radius: 50%;
    z-index: -1;
  }
`;

const TextSection = styled.div`
  h2 {
    color: white;
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 5px;
    margin: 0;
    text-transform: uppercase;
    
    .red { color: #ff0000; }
  }
  p {
    color: #666;
    font-family: monospace;
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

const StyledLoaderWrapper = styled.div`
  /* نضع هنا كود الـ CSS الخاص بك بالكامل للـ Loader */
  .loader {
    --dur: 2s;
    display: block;
    margin: auto;
  }
  .loader__glare-top, .loader__glare-bottom, .loader__model, .loader__motion-thick,
  .loader__motion-medium, .loader__motion-thin, .loader__sand-drop, .loader__sand-fill,
  .loader__sand-grain-left, .loader__sand-grain-right, .loader__sand-line-left,
  .loader__sand-line-right, .loader__sand-mound-top, .loader__sand-mound-bottom {
    animation-duration: var(--dur);
    animation-timing-function: cubic-bezier(0.83, 0, 0.17, 1);
    animation-iteration-count: infinite;
  }
  
  .loader__model { animation-name: loader-flip; transform-origin: 12.25px 16.75px; }
  .loader__motion-thick { animation-name: motion-thick; transform-origin: 26px 26px;}
  .loader__motion-medium { animation-name: motion-medium; transform-origin: 26px 26px;}
  .loader__motion-thin { animation-name: motion-thin; transform-origin: 26px 26px;}
  .loader__sand-drop { animation-name: sand-drop; }
  .loader__sand-fill { animation-name: sand-fill; }
  .loader__sand-mound-top { animation-name: sand-mound-top; }
  .loader__sand-mound-bottom { animation-name: sand-mound-bottom; transform-origin: 12.25px 31.5px; }

  @keyframes loader-flip { from { transform: rotate(-180deg); } 24%, to { transform: rotate(0); } }
  @keyframes motion-thick { 
      from { stroke: rgba(255,0,0,0); transform: rotate(0.67turn); } 
      20% { stroke: red; transform: rotate(1turn); } 
      40%, to { stroke: rgba(255,0,0,0); transform: rotate(1.33turn); } 
  }
  @keyframes sand-drop { from, 10% { stroke-dashoffset: 1; } 70%, to { stroke-dashoffset: -107; } }
  @keyframes sand-fill { from, 10% { stroke-dashoffset: 55; } 70%, to { stroke-dashoffset: -54; } }
  @keyframes sand-mound-top { from, 10% { transform: translate(0, 0); } 51%, to { transform: translate(0, 13px); } }
  @keyframes sand-mound-bottom { from, 31% { transform: scale(1, 0); } 56%, to { transform: scale(1, 1); } }
`;

export default LoadingScreen;
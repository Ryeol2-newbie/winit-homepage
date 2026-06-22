// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Handcrafted Wool Felt · 핸드메이드 양모펠트</div>
        <h1 className="hero-title">손으로 빚은<br /><em>따뜻함</em></h1>
        <p className="hero-desc">
          윈니트는 양모펠트로 세상에 단 하나뿐인 작품을 만듭니다.<br />
          당신의 반려동물, 소중한 사람, 특별한 순간을<br />
          영원한 작품으로 간직하세요.
        </p>
        <div className="hero-cta">
          <a href="https://open.kakao.com/o/sM5H3A5h" className="btn-primary" target="_blank" rel="noreferrer">
            오픈카카오톡 주문하기
          </a>
          <a href="#products" className="btn-outline">작품 보기</a>
        </div>
      </div>
      <div className="hero-right">
        <svg className="hero-art" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bg1" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#E8D5BE" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#F0E8DA" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="600" height="700" fill="#F0E8DA"/>
          <circle cx="480" cy="100" r="180" fill="url(#bg1)"/>
          <circle cx="100" cy="600" r="200" fill="rgba(200,149,106,0.08)"/>
          <circle cx="300" cy="350" r="160" fill="rgba(200,149,106,0.12)" stroke="rgba(200,149,106,0.2)" strokeWidth="1"/>
          <circle cx="300" cy="350" r="130" fill="rgba(212,147,122,0.15)"/>
          <circle cx="300" cy="350" r="100" fill="rgba(168,92,58,0.12)"/>
          <ellipse cx="300" cy="310" rx="80" ry="95" fill="#C8956A" opacity="0.7"/>
          <ellipse cx="285" cy="290" rx="55" ry="70" fill="#D4937A" opacity="0.6"/>
          <ellipse cx="315" cy="300" rx="50" ry="65" fill="#A85C3A" opacity="0.5"/>
          <ellipse cx="245" cy="230" rx="28" ry="38" fill="#C8956A" opacity="0.8" transform="rotate(-15 245 230)"/>
          <ellipse cx="355" cy="228" rx="28" ry="38" fill="#C8956A" opacity="0.8" transform="rotate(15 355 228)"/>
          <ellipse cx="247" cy="232" rx="16" ry="24" fill="#D4937A" opacity="0.7" transform="rotate(-15 247 232)"/>
          <ellipse cx="353" cy="230" rx="16" ry="24" fill="#D4937A" opacity="0.7" transform="rotate(15 353 230)"/>
          <circle cx="275" cy="310" r="10" fill="#6B4226"/>
          <circle cx="325" cy="310" r="10" fill="#6B4226"/>
          <circle cx="278" cy="307" r="3.5" fill="white" opacity="0.8"/>
          <circle cx="328" cy="307" r="3.5" fill="white" opacity="0.8"/>
          <ellipse cx="300" cy="335" rx="10" ry="7" fill="#6B4226"/>
          <path d="M295,342 Q300,350 305,342" stroke="#6B4226" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <line x1="240" y1="333" x2="282" y2="338" stroke="#6B4226" strokeWidth="1.2" opacity="0.5"/>
          <line x1="240" y1="341" x2="282" y2="340" stroke="#6B4226" strokeWidth="1.2" opacity="0.5"/>
          <line x1="318" y1="338" x2="360" y2="333" stroke="#6B4226" strokeWidth="1.2" opacity="0.5"/>
          <line x1="318" y1="340" x2="360" y2="341" stroke="#6B4226" strokeWidth="1.2" opacity="0.5"/>
          <ellipse cx="300" cy="430" rx="90" ry="75" fill="#C8956A" opacity="0.65"/>
          <ellipse cx="300" cy="435" rx="70" ry="60" fill="#D4937A" opacity="0.5"/>
          <ellipse cx="245" cy="490" rx="28" ry="20" fill="#C8956A" opacity="0.7"/>
          <ellipse cx="355" cy="490" rx="28" ry="20" fill="#C8956A" opacity="0.7"/>
          <circle cx="290" cy="295" r="3" fill="#8FA87A" opacity="0.5"/>
          <circle cx="310" cy="285" r="2.5" fill="#8FA87A" opacity="0.4"/>
          <circle cx="285" cy="330" r="2" fill="white" opacity="0.4"/>
          <circle cx="318" cy="325" r="2.5" fill="white" opacity="0.3"/>
          <text x="60" y="560" fontFamily="'Playfair Display', serif" fontSize="11" fill="#A85C3A" opacity="0.4" letterSpacing="3" textAnchor="start" transform="rotate(-90 60 560)">WOOL FELT HANDMADE</text>
          <circle cx="80" cy="200" r="18" fill="rgba(143,168,122,0.25)"/>
          <circle cx="90" cy="210" r="12" fill="rgba(143,168,122,0.2)"/>
          <circle cx="510" cy="480" r="22" fill="rgba(200,149,106,0.2)"/>
          <circle cx="525" cy="495" r="15" fill="rgba(168,92,58,0.15)"/>
          <circle cx="150" cy="160" r="3" fill="#A85C3A" opacity="0.4"/>
          <circle cx="450" cy="120" r="2.5" fill="#C8956A" opacity="0.5"/>
          <circle cx="480" cy="560" r="3" fill="#8FA87A" opacity="0.4"/>
          <circle cx="520" cy="200" r="2" fill="#D4937A" opacity="0.5"/>
        </svg>
      </div>
    </section>
  );
}
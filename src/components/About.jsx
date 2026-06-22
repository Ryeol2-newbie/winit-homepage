// src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img-wrap">
        <div className="about-img-main">
          <div className="about-img-accent"></div>
        </div>
      </div>
      <div>
        <div className="section-label">About Unique</div>
        <h2 className="section-title">세상에 단 하나,<br /><em>당신만을 위한</em> 작품</h2>
        <div className="section-body">
          <p style={{ marginBottom: '1rem' }}>윈니트(Unique)는 양모를 한 올 한 올 손으로 엮어 세상에 단 하나뿐인 작품을 만드는 핸드메이드 브랜드입니다.</p>
          <p style={{ marginBottom: '1rem' }}>반려동물의 귀여운 표정, 소중한 추억, 받는이가 감동할 선물 — 소중한 기억과 감정을 영원히 남길 수 있는 따뜻한 작품으로 제작해드립니다.</p>
          <p>오픈카카오톡을 통해 1:1 주문제작 상담을 진행합니다.</p>
        </div>
        <div className="about-stats">
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">핸드메이드</div>
          </div>
          <div>
            <div className="stat-num">1:1</div>
            <div className="stat-label">맞춤 제작</div>
          </div>
          <div>
            <div className="stat-num">∞</div>
            <div className="stat-label">세상에 단 하나</div>
          </div>
        </div>
      </div>
    </section>
  );
}
// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">Unique <span>윈니트</span></div>
      <ul className="nav-links">
        <li><a href="#about">브랜드</a></li>
        <li><a href="#products">작품</a></li>
        <li><a href="#process">제작과정</a></li>
        <li><a href="#order">주문제작</a></li>
      </ul>
      <a href="https://open.kakao.com/o/sM5H3A5h" className="nav-insta" target="_blank" rel="noreferrer">
        ✦ 오픈카카오톡 주문하기
      </a>
    </nav>
  );
}
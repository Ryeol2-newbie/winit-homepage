import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-logo">Unique</div>
        <p className="footer-tagline">
          세상에 단 하나뿐인 양모펠트 작품을 만드는<br />
          핸드메이드 브랜드 윈니트입니다.<br />
          당신의 소중한 순간을 작품으로 간직하세요.
        </p>
      </div>
      <div>
        <div className="footer-heading">Quick Links</div>
        <ul className="footer-links">
          <li><a href="#about">브랜드 소개</a></li>
          <li><a href="#products">작품 갤러리</a></li>
          <li><a href="#process">제작 과정</a></li>
          <li><a href="#order">주문 문의</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-heading">Contact</div>
        <ul className="footer-links">
          <li><a href="https://www.instagram.com/Unique_.1116" target="_blank" rel="noreferrer">@Unique_.1116</a></li>
          <li><a href="https://open.kakao.com/o/sM5H3A5h" target="_blank" rel="noreferrer">오픈카카오톡 주문하기</a></li>
          <li><a href="#process">제작 기간 안내</a></li>
          <li><a href="#order">자주 묻는 질문</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} Unique 윈니트. All rights reserved.</span>
        <a href="https://open.kakao.com/o/sM5H3A5h" className="footer-insta" target="_blank" rel="noreferrer">카카오톡 주문 ↗</a>
      </div>
    </footer>
  );
}
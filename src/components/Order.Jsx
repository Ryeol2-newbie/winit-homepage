import React from 'react';

export default function Order() {
  return (
    <section className="order-cta" id="order">
      <div className="cta-label">Custom Order · 주문 제작</div>
      <h2 className="cta-title">지금 바로<br /><em>나만의 작품</em>을 주문하세요</h2>
      <p className="cta-desc">
        오픈카카오톡으로 주문 문의를 해주시면<br />
        빠르게 답변 드리겠습니다.<br />
        소중한 추억을 영원한 작품으로 남겨드릴게요.
      </p>
      <a href="https://open.kakao.com/o/sM5H3A5h" className="btn-insta" target="_blank" rel="noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C6.477 3 2 6.917 2 11.75c0 3.01 1.8 5.657 4.527 7.238l-.917 3.43 3.98-2.62A12.1 12.1 0 0012 20.5c5.523 0 10-3.917 10-8.75S17.523 3 12 3z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
        </svg>
        오픈카카오톡으로 주문하기
      </a>
    </section>
  );
}
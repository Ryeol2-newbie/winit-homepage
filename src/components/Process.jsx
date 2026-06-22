import React from 'react';

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-header">
        <div className="section-label" style={{ justifyContent: 'center' }}>How It Works</div>
        <h2 className="section-title">주문 제작 과정</h2>
      </div>
      <div className="process-steps">
        <div className="step">
          <div className="step-num">01</div>
          <div className="step-title">카카오톡 문의</div>
          <div className="step-desc">오픈카카오톡으로 원하시는 작품을 말씀해주세요. 친절하게 상담 도와드립니다.</div>
        </div>
        <div className="step">
          <div className="step-num">02</div>
          <div className="step-title">사진 & 상담</div>
          <div className="step-desc">고객님의 사진과 함께 크기, 포즈, 색상 등 세부사항을 1:1로 상담합니다.</div>
        </div>
        <div className="step">
          <div className="step-num">03</div>
          <div className="step-title">제작 시작</div>
          <div className="step-desc">양모를 한 올 한 올 손으로 작업하여 세상에 단 하나뿐인 작품을 완성합니다.</div>
        </div>
        <div className="step">
          <div className="step-num">04</div>
          <div className="step-title">배송 완료</div>
          <div className="step-desc">완성된 작품을 정성껏 포장하여 배송해드립니다.</div>
        </div>
      </div>
    </section>
  );
}
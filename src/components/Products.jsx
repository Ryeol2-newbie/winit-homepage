import React from 'react';

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="products-header">
        <div className="section-label" style={{ justifyContent: 'center' }}>Our Works</div>
        <h2 className="section-title">윈니트의 작품들</h2>
      </div>
      <div className="products-grid">
        <div className="product-card">
          <div className="product-img"></div>
          <div className="product-info">
            <div className="product-tag">Dog · 강아지 전문</div>
            <div className="product-name">강아지 미니어처</div>
            <div className="product-desc">사랑하는 반려견을 양모펠트로 입체적으로 재현한 미니어처 작품.</div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img"></div>
          <div className="product-info">
            <div className="product-tag">Dog · 강아지 전문</div>
            <div className="product-name">강아지 액자</div>
            <div className="product-desc">반려견의 개성 넘치는 표정을 액자 작품으로 생생하게 담아냅니다.</div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img"></div>
          <div className="product-info">
            <div className="product-tag">Small Gift · 소품</div>
            <div className="product-name">강아지 키링</div>
            <div className="product-desc">반려견을 쏙 닮은 앙증맞은 양모펠트 키링. 선물용으로도 완벽합니다.</div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img"></div>
          <div className="product-info">
            <div className="product-tag">Large · 특대형</div>
            <div className="product-name">15cm 강아지</div>
            <div className="product-desc">손바닥 위에 올려놓는 15cm 특대형 강아지 미니어처. 존재감 넘치는 작품.</div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img"></div>
          <div className="product-info">
            <div className="product-tag">Custom · 맞춤 제작</div>
            <div className="product-name">캐릭터 맞춤커스텀</div>
            <div className="product-desc">아이가 좋아하는 캐릭터를 키링·인형 등으로 세상 단 하나뿐인 작품으로 제작.</div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img"></div>
          <div className="product-info">
            <div className="product-tag">Gift · 선물</div>
            <div className="product-name">맞춤 선물 세트</div>
            <div className="product-desc">생일, 기념일, 특별한 날을 위한 세상 단 하나의 선물.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
// src/components/Products.jsx
import React, { useEffect, useState } from 'react';
import { subscribeToProducts } from '../productService';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('전체');

  useEffect(() => {
    const unsub = subscribeToProducts(setProducts);
    return () => unsub();
  }, []);

  // 카테고리 목록 자동 추출
  const categories = ['전체', ...new Set(products.map((p) => p.category).filter(Boolean))];

  const filtered = activeCategory === '전체'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="products" id="products">
      <div className="products-header">
        <div className="section-label" style={{ justifyContent: 'center' }}>Our Works</div>
        <h2 className="section-title">윈니트의 작품들</h2>
      </div>

      {/* 카테고리 탭 */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: 999,
              border: '1px solid #ccc',
              background: activeCategory === cat ? '#333' : 'transparent',
              color: activeCategory === cat ? '#fff' : '#333',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 14,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map((p) => (
          <div className="product-card" key={p.id}>
            <div
              className="product-img"
              style={{
                backgroundImage: `url(${p.imageBase64})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="product-info">
              <div className="product-tag">{p.category}</div>
              <div className="product-name">{p.name}</div>
              <div className="product-desc">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p style={{ textAlign: 'center', color: '#999', marginTop: 40 }}>
          등록된 작품이 없어요.
        </p>
      )}
    </section>
  );
}
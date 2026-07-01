// src/components/Admin.jsx
import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { subscribeToProducts, addProduct, deleteProduct } from '../productService';
import { compressImageToBase64 } from '../imageUtils';
import { setHeroImage, subscribeToHeroImage } from '../siteService';

export default function Admin() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // 작품 관련
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('전체');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [uploading, setUploading] = useState(false);

  // Hero 이미지 관련
  const [heroImage, setHeroImageState] = useState(null);
  const [heroFile, setHeroFile] = useState(null);
  const [heroPreview, setHeroPreview] = useState('');
  const [heroUploading, setHeroUploading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setCheckingAuth(false);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;
    const unsub1 = subscribeToProducts(setProducts);
    const unsub2 = subscribeToHeroImage(setHeroImageState);
    return () => { unsub1(); unsub2(); };
  }, [user]);

  const categories = ['전체', ...new Set(products.map((p) => p.category).filter(Boolean))];
  const filtered = filterCategory === '전체'
    ? products
    : products.filter((p) => p.category === filterCategory);

  async function handleLogin(e) {
    e.preventDefault();
    setLoginError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setLoginError('이메일 또는 비밀번호가 올바르지 않아요.');
    }
  }

  function handleFileChange(e) {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  async function handleAdd(e) {
    e.preventDefault();
    if (!file || !name || !category) {
      alert('카테고리, 사진, 작품명은 필수예요.');
      return;
    }
    setUploading(true);
    try {
      const base64 = await compressImageToBase64(file);
      await addProduct({ category, name, desc, imageBase64: base64 });
      setCategory('');
      setName('');
      setDesc('');
      setFile(null);
      setPreview('');
    } catch (err) {
      alert('업로드 오류: ' + err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm('이 작품을 삭제할까요?')) return;
    await deleteProduct(id);
  }

  async function handleHeroUpload() {
    if (!heroFile) return;
    setHeroUploading(true);
    try {
      const base64 = await compressImageToBase64(heroFile);
      await setHeroImage(base64);
      setHeroFile(null);
      setHeroPreview('');
      alert('Hero 이미지가 업데이트됐어요!');
    } catch (err) {
      alert('오류: ' + err.message);
    } finally {
      setHeroUploading(false);
    }
  }

  async function handleHeroReset() {
    if (!confirm('기본 일러스트로 되돌릴까요?')) return;
    await setHeroImage(null);
  }

  if (checkingAuth) return <div style={{ padding: 40 }}>로딩 중...</div>;

  if (!user) {
    return (
      <div style={{ maxWidth: 360, margin: '80px auto', padding: 20 }}>
        <h2>관리자 로그인</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 12 }}>
            <input type="email" placeholder="이메일" value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: 8 }} required />
          </div>
          <div style={{ marginBottom: 12 }}>
            <input type="password" placeholder="비밀번호" value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: 8 }} required />
          </div>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          <button type="submit" style={{ width: '100%', padding: 10 }}>로그인</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 760, margin: '40px auto', padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>작품 관리</h2>
        <button onClick={() => signOut(auth)}>로그아웃</button>
      </div>

      {/* Hero 이미지 관리 */}
      <div style={{ margin: '24px 0', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0 }}>메인 첫 화면 이미지 (Hero)</h3>
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: 13, color: '#666', margin: '0 0 8px' }}>현재 이미지</p>
            {heroImage
              ? <img src={heroImage} alt="현재 hero" style={{ width: 180, borderRadius: 6 }} />
              : <div style={{ width: 180, height: 120, background: '#f5f5f5', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#999' }}>기본 일러스트</div>
            }
          </div>
          <div>
            <p style={{ fontSize: 13, color: '#666', margin: '0 0 8px' }}>새 이미지 업로드</p>
            <input type="file" accept="image/*" onChange={(e) => {
              const f = e.target.files[0];
              if (!f) return;
              setHeroFile(f);
              setHeroPreview(URL.createObjectURL(f));
            }} />
            {heroPreview && <img src={heroPreview} alt="미리보기" style={{ width: 180, marginTop: 8, borderRadius: 6 }} />}
            <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
              <button disabled={!heroFile || heroUploading} onClick={handleHeroUpload}
                style={{ padding: '8px 16px', background: '#333', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
                {heroUploading ? '업로드 중...' : '적용하기'}
              </button>
              {heroImage && (
                <button onClick={handleHeroReset}
                  style={{ padding: '8px 16px', background: '#ff4444', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
                  기본으로 되돌리기
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 작품 추가 폼 */}
      <form onSubmit={handleAdd} style={{ margin: '24px 0', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0 }}>새 작품 추가</h3>
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: 'block', marginBottom: 4, fontSize: 13 }}>카테고리 *</label>
          <input placeholder="예: 강아지 미니어처, 키링, 액자..."
            value={category} onChange={(e) => setCategory(e.target.value)}
            style={{ width: '100%', padding: 8 }} />
          {categories.filter(c => c !== '전체').length > 0 && (
            <div style={{ marginTop: 6, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {categories.filter(c => c !== '전체').map(c => (
                <button key={c} type="button" onClick={() => setCategory(c)}
                  style={{ padding: '3px 10px', fontSize: 12, cursor: 'pointer', borderRadius: 999, border: '1px solid #ccc' }}>
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: 'block', marginBottom: 4, fontSize: 13 }}>작품명 *</label>
          <input placeholder="작품명" value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: 8 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: 'block', marginBottom: 4, fontSize: 13 }}>설명</label>
          <textarea placeholder="작품 설명 (선택)" value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={{ width: '100%', padding: 8 }} rows={3} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: 'block', marginBottom: 4, fontSize: 13 }}>사진 *</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        {preview && <img src={preview} alt="미리보기" style={{ width: 150, marginBottom: 10, borderRadius: 6 }} />}
        <button type="submit" disabled={uploading}
          style={{ padding: '10px 24px', background: '#333', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {uploading ? '업로드 중...' : '추가하기'}
        </button>
      </form>

      {/* 카테고리 필터 */}
      <h3>등록된 작품 ({products.length})</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilterCategory(cat)}
            style={{
              padding: '6px 14px', borderRadius: 999, border: '1px solid #ccc', cursor: 'pointer',
              background: filterCategory === cat ? '#333' : 'transparent',
              color: filterCategory === cat ? '#fff' : '#333',
            }}>
            {cat}
          </button>
        ))}
      </div>

      {/* 작품 목록 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
        {filtered.map((p) => (
          <div key={p.id} style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden' }}>
            <img src={p.imageBase64} alt={p.name} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
            <div style={{ padding: 8 }}>
              <p style={{ fontSize: 11, color: '#888', margin: '0 0 2px' }}>{p.category}</p>
              <p style={{ fontWeight: 'bold', margin: '0 0 6px', fontSize: 14 }}>{p.name}</p>
              <button onClick={() => handleDelete(p.id)}
                style={{ width: '100%', padding: '6px 0', background: '#ff4444', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}>
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
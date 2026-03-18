'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import Logo from '@/components/ui/Logo';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Demo: simple credential check
    setTimeout(() => {
      if (email === 'admin@metaasset.co.kr' && password === 'admin1234') {
        sessionStorage.setItem('admin_auth', 'true');
        router.push('/admin/dashboard');
      } else {
        setError('이메일 또는 비밀번호가 올바르지 않습니다.');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className={styles.page}>
      <div className={styles.loginCard}>
        <div className={styles.logoSection}>
          <Logo width={80} height={67} />
          <h1 className={styles.logo}>META ASSET</h1>
          <span className={styles.logoSub}>MANAGEMENT</span>
          <p className={styles.logoDesc}>관리자 콘솔</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>이메일</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="admin@metaasset.co.kr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>비밀번호</label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            데모 계정: admin@metaasset.co.kr / admin1234
          </p>
        </div>
      </div>
    </div>
  );
}

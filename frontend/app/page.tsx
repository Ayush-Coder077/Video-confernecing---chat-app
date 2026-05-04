"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">VideoMeet</div>

        <nav className="menu">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/schedule">Schedule</Link>
          <Link className="active" href="/meeting/demo-room">
            Meetings
          </Link>
          <Link href="/knowledge">Knowledge</Link>
          <Link href="/analytics">Analytics</Link>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-text">
          <p className="badge">🎥 Fast · Secure · HD</p>
          <h1>Meet, chat, and collaborate in one place.</h1>
          <p className="subtitle">
            Launch video meetings instantly with built‑in chat, smart summaries,
            and real‑time collaboration.
          </p>
          <div className="cta">
            <Link className="primary" href="/meeting/demo-room">
              Start a meeting
            </Link>
            <Link className="secondary" href="#features">
              See features
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="preview">
            <div className="box big" />
            <div className="box small" />
            <div className="box small" />
            <div className="box small" />
          </div>
          <div className="stats">
            <div>
              <strong>99.9%</strong>
              <span>Uptime</span>
            </div>
            <div>
              <strong>250ms</strong>
              <span>Low latency</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>
        </div>
      </main>

      <section id="features" className="features">
        <h2>Everything you need</h2>
        <div className="grid">
          <div className="card">
            <h3>HD Video</h3>
            <p>Crystal clear video with adaptive bitrate streaming.</p>
          </div>
          <div className="card">
            <h3>Built‑in Chat</h3>
            <p>Share notes and links while you meet.</p>
          </div>
          <div className="card">
            <h3>Smart Summary</h3>
            <p>Get meeting highlights and action items instantly.</p>
          </div>
          <div className="card">
            <h3>Secure Rooms</h3>
            <p>Token‑based access with end‑to‑end security.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Simple pricing</h2>
        <div className="price-card">
          <h3>Starter</h3>
          <p className="price">Free</p>
          <ul>
            <li>Unlimited meetings</li>
            <li>Up to 6 participants</li>
            <li>Basic chat</li>
          </ul>
          <Link className="primary" href="/meeting/demo-room">
            Get started
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 VideoMeet. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #eef0f7;
          color: #121826;
        }
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
        }
        .brand {
          font-weight: 700;
          font-size: 20px;
        }

        /* Pill-style menu like the reference */
        .menu {
          display: flex;
          gap: 12px;
          background: #fff;
          padding: 8px;
          border-radius: 999px;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08);
        }
        .menu a {
          text-decoration: none;
          color: #111827;
          padding: 8px 16px;
          border-radius: 999px;
          font-weight: 500;
        }
        .menu a.active {
          background: #6b4cff;
          color: #fff;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
          padding: 20px 40px 60px;
        }
        .hero-text h1 {
          font-size: 44px;
          margin: 12px 0;
        }
        .subtitle {
          color: #5b6070;
          margin-bottom: 20px;
        }
        .badge {
          background: #fff;
          display: inline-block;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
        }
        .cta a {
          margin-right: 12px;
        }
        .primary {
          background: #3f5efb;
          color: #fff;
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
        }
        .secondary {
          background: #fff;
          color: #121826;
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
        }
        .hero-card {
          background: #fff;
          border-radius: 20px;
          padding: 16px;
        }
        .preview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .box {
          background: #dfe3f1;
          border-radius: 16px;
          height: 100px;
        }
        .big {
          grid-column: span 2;
          height: 160px;
        }
        .stats {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          font-size: 12px;
        }
        .features,
        .pricing {
          padding: 40px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        .card {
          background: #fff;
          padding: 16px;
          border-radius: 16px;
        }
        .pricing .price-card {
          background: #fff;
          padding: 20px;
          border-radius: 16px;
          max-width: 320px;
        }
        .price {
          font-size: 28px;
          font-weight: 700;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #5b6070;
        }
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .topbar {
            flex-direction: column;
            gap: 12px;
          }
          .menu {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
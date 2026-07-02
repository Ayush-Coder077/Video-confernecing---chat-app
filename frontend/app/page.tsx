"use client";

import Link from "next/link";

const highlights = [
  {
    value: "12k+",
    label: "rooms created this month",
  },
  {
    value: "99.9%",
    label: "meeting uptime",
  },
  {
    value: "250ms",
    label: "average chat delivery",
  },
];

const features = [
  {
    title: "Instant video rooms",
    description:
      "Launch a room in one click, share the link, and get everyone in fast.",
  },
  {
    title: "Persistent chat",
    description:
      "Keep decisions, notes, and links in one conversation thread that stays with the meeting.",
  },
  {
    title: "Smart scheduling",
    description:
      "Coordinate sessions, availability, and follow-ups without leaving the workspace.",
  },
  {
    title: "Live analytics",
    description:
      "Track attendance, engagement, and session health at a glance.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create a room",
    description: "Start from the home page or jump straight into a demo meeting.",
  },
  {
    number: "02",
    title: "Invite your team",
    description: "Share the link, open chat, and keep the conversation in sync.",
  },
  {
    number: "03",
    title: "Review the outcome",
    description: "Use analytics and summaries to turn meetings into action.",
  },
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Conference + chat for modern teams</p>
          <h1>Meet, message, and move work forward in one place.</h1>
          <p className="lede">
            VideoMeet gives your team a clean, fast home for live calls,
            persistent chat, scheduling, and session analytics. Start a room in
            seconds and keep the collaboration going after the call ends.
          </p>

          <div className="actions">
            <Link className="primary-action" href="/meeting/demo-room">
              Start a meeting
            </Link>
            <Link className="secondary-action" href="#features">
              Explore features
            </Link>
          </div>

          <div className="highlights" aria-label="Key platform metrics">
            {highlights.map((item) => (
              <div key={item.label} className="highlight-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Product preview">
          <div className="visual-glow visual-glow-left" />
          <div className="visual-glow visual-glow-right" />

          <div className="visual-window">
            <div className="window-topbar">
              <div className="window-controls">
                <span />
                <span />
                <span />
              </div>
              <p>Design Review Room</p>
              <span className="live-pill">Live</span>
            </div>

            <div className="window-body">
              <div className="video-stage">
                <div className="speaker-card main-speaker">
                  <div className="avatar large">AK</div>
                  <div>
                    <strong>Ana Kim</strong>
                    <span>Presenting sprint plan</span>
                  </div>
                </div>

                <div className="speaker-grid">
                  <div className="speaker-card">
                    <div className="avatar">JR</div>
                    <div>
                      <strong>Jordan</strong>
                      <span>Product</span>
                    </div>
                  </div>
                  <div className="speaker-card">
                    <div className="avatar">LP</div>
                    <div>
                      <strong>Lina</strong>
                      <span>Design</span>
                    </div>
                  </div>
                  <div className="speaker-card">
                    <div className="avatar">TS</div>
                    <div>
                      <strong>Tom</strong>
                      <span>Engineering</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="side-panel">
                <div className="panel-card agenda-card">
                  <p className="panel-label">Next up</p>
                  <h3>Weekly launch sync</h3>
                  <p>
                    Review milestones, unblock owners, and finalize release
                    notes.
                  </p>
                </div>

                <div className="panel-card chat-card">
                  <p className="panel-label">Team chat</p>
                  <div className="chat-bubble incoming">
                    Let’s lock the demo flow before we hand this off.
                  </div>
                  <div className="chat-bubble outgoing">
                    Agreed. I’ll post the follow-up notes right after.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Product signals">
        <div>
          <span>Low latency media</span>
          <strong>Crystal-clear calls even on busy networks.</strong>
        </div>
        <div>
          <span>Persistent threads</span>
          <strong>Keep decisions, links, and follow-ups together.</strong>
        </div>
        <div>
          <span>Actionable analytics</span>
          <strong>See participation and meeting health instantly.</strong>
        </div>
      </section>

      <section id="features" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Everything your team needs</p>
          <h2>A focused experience for live collaboration.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section">
        <div className="section-heading compact">
          <p className="eyebrow">How it works</p>
          <h2>From room creation to follow-up in three steps.</h2>
        </div>

        <div className="steps-list">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <p className="eyebrow">Ready to try it?</p>
          <h2>Launch your first room and see the workflow end to end.</h2>
        </div>
        <div className="cta-actions">
          <Link className="primary-action" href="/meeting/demo-room">
            Open demo room
          </Link>
          <Link className="secondary-action" href="/Schedule">
            View schedule
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 VideoMeet. Built for live collaboration.</p>
      </footer>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(56, 189, 248, 0.2), transparent 32%),
            radial-gradient(circle at top right, rgba(45, 212, 191, 0.18), transparent 28%),
            linear-gradient(180deg, #f8fbff 0%, #eef3ff 42%, #f7fafc 100%);
          color: #0f172a;
        }

        .hero-shell,
        .content-section,
        .signal-strip,
        .cta-banner,
        .footer {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .hero-shell {
          display: grid;
          align-items: center;
          grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
          gap: 32px;
          padding: 72px 0 44px;
        }

        .hero-copy h1 {
          margin: 16px 0;
          font-size: clamp(2.8rem, 6vw, 5.5rem);
          line-height: 0.96;
          letter-spacing: -0.05em;
          max-width: 11ch;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          border: 1px solid rgba(148, 163, 184, 0.32);
          border-radius: 999px;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.7);
          color: #475569;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          backdrop-filter: blur(12px);
        }

        .lede {
          max-width: 64ch;
          margin: 0;
          color: #475569;
          font-size: 1.08rem;
          line-height: 1.75;
        }

        .actions,
        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .primary-action,
        .secondary-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          border-radius: 999px;
          padding: 0 18px;
          text-decoration: none;
          transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease,
            color 160ms ease;
        }

        .primary-action {
          background: linear-gradient(135deg, #0f172a 0%, #155e75 100%);
          color: #fff;
          font-weight: 700;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
        }

        .secondary-action {
          border: 1px solid rgba(148, 163, 184, 0.35);
          background: rgba(255, 255, 255, 0.72);
          color: #0f172a;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .primary-action:hover,
        .secondary-action:hover {
          transform: translateY(-1px);
        }

        .highlights {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 28px;
        }

        .highlight-card,
        .feature-card,
        .step-card,
        .panel-card,
        .signal-strip,
        .cta-banner {
          border: 1px solid rgba(148, 163, 184, 0.22);
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
        }

        .highlight-card {
          border-radius: 24px;
          padding: 18px;
        }

        .highlight-card strong {
          display: block;
          font-size: 1.6rem;
          letter-spacing: -0.04em;
        }

        .highlight-card span {
          display: block;
          margin-top: 6px;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .hero-visual {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(22px);
        }

        .visual-glow-left {
          inset: 8% auto auto 8%;
          width: 180px;
          height: 180px;
          background: rgba(45, 212, 191, 0.24);
        }

        .visual-glow-right {
          right: 8%;
          bottom: 10%;
          width: 220px;
          height: 220px;
          background: rgba(96, 165, 250, 0.24);
        }

        .visual-window {
          position: relative;
          width: min(100%, 620px);
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.82);
          box-shadow: 0 36px 90px rgba(15, 23, 42, 0.14);
          overflow: hidden;
        }

        .window-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.18);
          background: rgba(248, 250, 252, 0.9);
        }

        .window-topbar p,
        .agenda-card p,
        .chat-bubble,
        .feature-card p,
        .step-card p,
        .signal-strip span,
        .signal-strip strong,
        .footer p {
          margin: 0;
        }

        .window-controls {
          display: flex;
          gap: 8px;
        }

        .window-controls span {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #cbd5e1;
        }

        .window-topbar p {
          flex: 1;
          font-weight: 700;
          color: #0f172a;
          text-align: center;
        }

        .live-pill {
          border-radius: 999px;
          padding: 6px 10px;
          background: rgba(15, 23, 42, 0.92);
          color: white;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .window-body {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(210px, 0.75fr);
          gap: 16px;
          padding: 18px;
        }

        .video-stage {
          display: grid;
          gap: 14px;
        }

        .main-speaker {
          min-height: 290px;
          background:
            linear-gradient(160deg, rgba(15, 23, 42, 0.95), rgba(37, 99, 235, 0.85)),
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.18), transparent 40%);
          color: white;
        }

        .main-speaker span,
        .main-speaker strong {
          color: inherit;
        }

        .speaker-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .speaker-card {
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 24px;
          padding: 16px;
          background: rgba(248, 250, 252, 0.92);
          border: 1px solid rgba(148, 163, 184, 0.16);
        }

        .speaker-card strong,
        .speaker-card span,
        .panel-card h3,
        .feature-card h3,
        .step-card h3 {
          display: block;
        }

        .speaker-card strong,
        .panel-card h3,
        .feature-card h3,
        .step-card h3 {
          margin: 0 0 4px;
          color: #0f172a;
        }

        .speaker-card span,
        .panel-card p,
        .feature-card p,
        .step-card p {
          color: #64748b;
          line-height: 1.55;
        }

        .avatar {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 16px;
          background: linear-gradient(135deg, #cbd5e1, #94a3b8);
          color: white;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .avatar.large {
          width: 66px;
          height: 66px;
          border-radius: 22px;
          background: linear-gradient(135deg, #5eead4, #0ea5e9);
          font-size: 0.95rem;
        }

        .main-speaker,
        .panel-card,
        .feature-card,
        .step-card {
          border-radius: 28px;
          padding: 20px;
        }

        .main-speaker {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 12px;
          padding: 24px;
        }

        .main-speaker strong {
          font-size: 1.15rem;
        }

        .main-speaker span {
          opacity: 0.86;
        }

        .speaker-card div {
          min-width: 0;
        }

        .side-panel {
          display: grid;
          gap: 12px;
        }

        .panel-label {
          margin-bottom: 12px;
          color: #0f172a;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .agenda-card {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(226, 232, 240, 0.75));
        }

        .chat-card {
          display: grid;
          gap: 12px;
          background: rgba(15, 23, 42, 0.95);
          color: white;
        }

        .chat-card .panel-label,
        .chat-card p {
          color: inherit;
        }

        .chat-bubble {
          max-width: 100%;
          border-radius: 18px;
          padding: 12px 14px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .incoming {
          background: rgba(255, 255, 255, 0.08);
        }

        .outgoing {
          background: rgba(45, 212, 191, 0.18);
          margin-left: auto;
        }

        .signal-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 18px;
          border-radius: 30px;
          padding: 22px;
        }

        .signal-strip div {
          display: grid;
          gap: 8px;
        }

        .signal-strip span {
          color: #64748b;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .signal-strip strong {
          color: #0f172a;
          font-size: 1rem;
          line-height: 1.5;
        }

        .content-section {
          margin-top: 44px;
        }

        .section-heading {
          display: grid;
          gap: 12px;
          max-width: 720px;
          margin-bottom: 22px;
        }

        .section-heading h2,
        .cta-banner h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .section-heading.compact {
          margin-bottom: 0;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .feature-card {
          min-height: 220px;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 18px;
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.28);
          margin-bottom: 18px;
        }

        .feature-card h3 {
          font-size: 1.15rem;
        }

        .feature-card p {
          margin-top: 10px;
        }

        .split-section {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 22px;
          align-items: start;
        }

        .steps-list {
          display: grid;
          gap: 14px;
        }

        .step-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .step-card span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: rgba(15, 23, 42, 0.95);
          color: white;
          flex-shrink: 0;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .step-card p {
          margin-top: 6px;
        }

        .cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          border-radius: 32px;
          margin-top: 48px;
          padding: 28px;
        }

        .cta-banner p {
          margin-bottom: 10px;
        }

        .footer {
          padding: 28px 0 48px;
          color: #64748b;
          text-align: center;
        }

        @media (max-width: 1100px) {
          .hero-shell,
          .split-section,
          .feature-grid,
          .signal-strip {
            grid-template-columns: 1fr 1fr;
          }

          .feature-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hero-shell {
            grid-template-columns: 1fr;
            padding-top: 56px;
          }

          .hero-visual {
            min-height: 540px;
          }
        }

        @media (max-width: 720px) {
          .hero-shell,
          .content-section,
          .signal-strip,
          .cta-banner,
          .footer {
            width: min(100% - 20px, 1180px);
          }

          .hero-shell {
            padding-bottom: 28px;
          }

          .highlights,
          .feature-grid,
          .signal-strip,
          .split-section,
          .cta-banner,
          .window-body,
          .speaker-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            min-height: auto;
          }

          .visual-window {
            border-radius: 24px;
          }

          .window-topbar {
            flex-wrap: wrap;
          }

          .window-topbar p {
            order: 3;
            width: 100%;
          }

          .cta-banner {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
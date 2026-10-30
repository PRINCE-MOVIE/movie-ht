:root {
  --bg: #05070b;
  --bg-2: #0d111a;
  --surface: rgba(15, 18, 24, 0.92);
  --panel: rgba(19, 24, 33, 0.96);
  --panel-2: rgba(25, 31, 42, 0.96);
  --muted: #9aa7ba;
  --text: #edf3ff;
  --line: rgba(255, 255, 255, 0.09);
  --accent: #7c3aed;
  --accent-2: #38bdf8;
  --red: #ef4444;
  --green: #22c55e;
  --amber: #f59e0b;
  --shadow: 0 22px 52px rgba(0, 0, 0, 0.45);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background: radial-gradient(circle at top left, rgba(124, 58, 237, 0.15), transparent 25%),
              radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.18), transparent 30%),
              var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button, input, select {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 18px 18px 32px;
}

.statusbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  padding: 6px 12px 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.status-icons {
  display: flex;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
}

.topbar {
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  align-items: center;
  gap: 18px;
  padding: 18px 20px 12px;
  background: rgba(16, 17, 22, 0.7);
  border: 1px solid var(--line);
  border-radius: 18px 18px 0 0;
  border-bottom: none;
}

.app-brand-wrap,
.header-tools {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-tools {
  justify-content: flex-end;
}

.icon-btn,
.switch,
.mini-btn,
.nav-item,
.primary-btn,
.secondary-btn,
.play-btn,
.ghost-btn,
.server-btn,
.close-btn {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border-radius: 12px;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.icon-btn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
}

.icon-btn:hover,
.nav-item:hover,
.mini-btn:hover,
.primary-btn:hover,
.secondary-btn:hover,
.play-btn:hover,
.ghost-btn:hover,
.server-btn:hover,
.switch:hover,
.close-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.14);
}

.header-title {
  text-align: center;
}

.header-title h1 {
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  letter-spacing: -0.06em;
  margin: 0;
}

.main-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  background: rgba(11, 14, 20, 0.9);
  border: 1px solid var(--line);
  border-top: none;
  border-radius: 0 0 22px 22px;
  overflow: hidden;
}

.sidebar {
  background: rgba(9, 13, 19, 0.9);
  border-right: 1px solid var(--line);
  padding: 18px 14px 20px;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.brand-logo {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  font-weight: 800;
  color: white;
  box-shadow: 0 10px 20px rgba(124, 58, 237, 0.34);
}

.brand-name {
  font-weight: 800;
  letter-spacing: -0.05em;
}

.brand-sub {
  color: var(--muted);
  font-size: 0.75rem;
}

.side-nav {
  display: grid;
  gap: 8px;
  margin-top: 18px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  font-weight: 600;
  text-align: left;
}

.nav-item.active {
  background: rgba(124, 58, 237, 0.12);
  border-color: rgba(124, 58, 237, 0.36);
}

.content-panel {
  padding: 18px 18px 24px;
}

.project-banner {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.project-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0ea5e9, #7c3aed);
  display: inline-block;
}

.project-name {
  flex: 1;
  font-weight: 700;
}

.mini-btn {
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.03);
}

.hero-section {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
  margin-top: 22px;
}

.hero-copy,
.hero-feature {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 26px 24px;
}

.eyebrow {
  display: inline-block;
  margin: 0 0 12px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent-2);
  font-weight: 800;
}

.hero-copy h2 {
  margin: 0;
  font-size: clamp(2.1rem, 3vw, 3.6rem);
  letter-spacing: -0.07em;
  line-height: 1.02;
}

.hero-copy p {
  margin: 18px 0 0;
  color: var(--muted);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 22px;
}

.primary-btn,
.secondary-btn,
.play-btn,
.ghost-btn,
.server-btn,
.switch {
  padding: 12px 18px;
  font-weight: 700;
}

.primary-btn {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  border: none;
  color: white;
  box-shadow: 0 18px 28px rgba(124, 58, 237, 0.25);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.04);
}

.hero-feature {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px 16px;
}

.feature-card.featured {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(56, 189, 248, 0.12));
}

.feature-kicker {
  display: inline-block;
  color: var(--accent-2);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  font-weight: 700;
}

.feature-card h3 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2.3rem);
  letter-spacing: -0.06em;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 16px;
  color: var(--muted);
}

.feature-card.small ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.feature-card.small li {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 10px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.feature-card.small li:last-child {
  border-bottom: none;
}

.feature-card.small span,
.feature-card.small em {
  color: var(--muted);
}

.feature-card.small strong {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
}

.toolbar {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 18px;
  margin-top: 24px;
}

.search-box,
.category-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.search-box label,
.category-box label {
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 700;
}

.search-box input,
.category-box select {
  min-height: 48px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 0 16px;
  outline: none;
}

.catalog-section {
  margin-top: 32px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.section-header h3 {
  margin: 0;
  font-size: clamp(1.4rem, 2vw, 2rem);
  letter-spacing: -0.05em;
}

.section-header span {
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 600;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 18px;
}

.catalog-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
}

.poster {
  height: 220px;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
}

.catalog-body {
  padding: 16px 16px 18px;
}

.caption-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}

.catalog-body strong {
  font-size: 1.1rem;
  letter-spacing: -0.04em;
}

.catalog-body span {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 700;
}

.catalog-body p {
  margin: 12px 0 16px;
  color: var(--muted);
  line-height: 1.5;
}

.card-actions {
  display: flex;
  gap: 10px;
}

.play-btn {
  flex: 1;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  border: none;
  color: white;
}

.ghost-btn {
  background: rgba(255, 255, 255, 0.02);
}

.lower {
  margin-top: 30px;
}

.server-list {
  display: grid;
  gap: 10px;
}

.server-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
}

.status-good {
  color: var(--green);
  font-weight: 800;
}

.status-warn {
  color: var(--amber);
  font-weight: 800;
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
}

.modal.hidden {
  display: none;
}

.modal-backdrop,
.player-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(4, 5, 8, 0.78);
  backdrop-filter: blur(8px);
}

.auth-panel,
.player-panel {
  position: relative;
  z-index: 1;
  width: min(92vw, 460px);
  background: rgba(17, 22, 31, 0.96);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 24px 22px 20px;
  box-shadow: var(--shadow);
}

.player-panel {
  width: min(94vw, 980px);
  padding-bottom: 22px;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  font-size: 1.2rem;
}

.auth-switcher {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 18px;
}

.switch {
  background: rgba(255, 255, 255, 0.04);
}

.switch.active {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.28), rgba(56, 189, 248, 0.18));
  border-color: rgba(124, 58, 237, 0.4);
}

.auth-form {
  display: none;
  gap: 14px;
}

.auth-form.active {
  display: grid;
}

.auth-form h3 {
  margin: 0 0 4px;
  font-size: 1.6rem;
  letter-spacing: -0.06em;
}

.auth-form label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-weight: 600;
}

.auth-form input {
  height: 48px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.auth-submit {
  margin-top: 8px;
}

.auth-status {
  min-height: 24px;
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 0.82rem;
}

.player-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.player-kicker {
  display: block;
  color: var(--accent-2);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  font-weight: 700;
}

.player-header h3 {
  margin: 8px 0 0;
  font-size: clamp(1.5rem, 2vw, 2.1rem);
  letter-spacing: -0.05em;
}

.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.16);
  border: 1px solid rgba(124, 58, 237, 0.35);
  color: #d8cbff;
  font-size: 0.78rem;
  font-weight: 700;
}

.video-shell {
  background: #000;
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.video-shell video {
  width: 100%;
  height: 100%;
  background: #000;
}

.server-panel {
  margin-top: 18px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  padding: 18px;
}

.server-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.server-panel-header h4 {
  margin: 0;
  font-size: 1.1rem;
}

.server-panel-header span {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 700;
}

.server-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.server-btn {
  background: rgba(255, 255, 255, 0.04);
}

@media (max-width: 980px) {
  .main-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }

  .hero-section,
  .toolbar {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .topbar {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .app-brand-wrap,
  .header-tools {
    justify-content: center;
  }

  .project-banner,
  .section-header,
  .player-header,
  .server-panel-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-actions {
    flex-direction: column;
  }
}

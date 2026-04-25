const LANDING_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SharTech.ai</title>
<meta name="description" content="Daily web experiments — interactive apps built with AI, one per day.">
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #07070d;
    --surface: #0f0f1a;
    --border: rgba(255,255,255,0.07);
    --accent: #7c6ff7;
    --accent2: #5ee7b7;
    --text: #e8e8f0;
    --muted: #6a6a80;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  /* Animated gradient background */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 20% 10%, rgba(124,111,247,0.12) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 80% 80%, rgba(94,231,183,0.08) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  main {
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 24px;
    text-align: center;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(124,111,247,0.12);
    border: 1px solid rgba(124,111,247,0.25);
    color: #a89ef7;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 32px;
  }

  .badge::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #a89ef7;
    box-shadow: 0 0 8px #a89ef7;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  h1 {
    font-size: clamp(48px, 8vw, 88px);
    font-weight: 800;
    letter-spacing: -2px;
    line-height: 1.05;
    margin-bottom: 24px;
  }

  h1 span.brand {
    background: linear-gradient(135deg, #a89ef7 0%, #5ee7b7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tagline {
    font-size: clamp(16px, 2.5vw, 20px);
    color: var(--muted);
    max-width: 520px;
    line-height: 1.6;
    margin-bottom: 48px;
  }

  .cta-row {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 80px;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #7c6ff7, #5ee7b7);
    color: #07070d;
    font-weight: 700;
    font-size: 15px;
    padding: 14px 28px;
    border-radius: 12px;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.2s;
  }

  .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--border);
    color: var(--text);
    font-weight: 600;
    font-size: 15px;
    padding: 14px 28px;
    border-radius: 12px;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s;
  }

  .btn-secondary:hover { background: rgba(255,255,255,0.09); transform: translateY(-1px); }

  /* Stats row */
  .stats {
    display: flex;
    gap: 48px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 80px;
  }

  .stat { text-align: center; }

  .stat-value {
    font-size: 36px;
    font-weight: 800;
    background: linear-gradient(135deg, #a89ef7, #5ee7b7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
  }

  .stat-label {
    font-size: 13px;
    color: var(--muted);
    margin-top: 4px;
    letter-spacing: 0.5px;
  }

  /* Feature cards */
  .sections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 20px;
    max-width: 780px;
    width: 100%;
    margin-bottom: 40px;
  }

  .section-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 28px;
    text-align: left;
    transition: border-color 0.2s, transform 0.2s;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .section-card:hover { transform: translateY(-2px); }

  .section-card.apps:hover { border-color: rgba(124,111,247,0.35); }
  .section-card.tutorials:hover { border-color: rgba(243,139,0,0.35); }

  .section-card-header { display: flex; align-items: center; gap: 12px; }

  .section-icon {
    width: 44px; height: 44px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0;
  }

  .section-icon.apps { background: linear-gradient(135deg, rgba(124,111,247,0.2), rgba(94,231,183,0.2)); }
  .section-icon.tutorials { background: linear-gradient(135deg, rgba(243,139,0,0.2), rgba(8,117,225,0.2)); }

  .section-card-title { font-size: 17px; font-weight: 700; }
  .section-card-sub { font-size: 12px; color: var(--muted); margin-top: 2px; }

  .section-card-desc { font-size: 13px; color: var(--muted); line-height: 1.6; }

  .section-card-footer {
    display: flex; align-items: center; justify-content: space-between;
    padding-top: 14px; border-top: 1px solid var(--border);
    font-size: 13px; font-weight: 600; margin-top: auto;
  }

  .section-card.apps .section-card-footer { color: #a89ef7; }
  .section-card.tutorials .section-card-footer { color: #f38b00; }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    max-width: 780px;
    width: 100%;
  }

  .feature-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    text-align: left;
    transition: border-color 0.2s, transform 0.2s;
  }

  .feature-card:hover {
    border-color: rgba(124,111,247,0.3);
    transform: translateY(-2px);
  }

  .feature-icon {
    font-size: 28px;
    margin-bottom: 12px;
    display: block;
  }

  .feature-title {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .feature-desc {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.5;
  }

  footer {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 24px;
    font-size: 13px;
    color: var(--muted);
    border-top: 1px solid var(--border);
  }

  footer a { color: var(--muted); text-decoration: none; }
  footer a:hover { color: var(--text); }
</style>
</head>
<body>
<main>
  <div class="badge">New app every day</div>

  <h1>
    <span class="brand">SharTech</span><span style="opacity:0.15">.ai</span>
  </h1>

  <p class="tagline">
    A daily lab of interactive web experiments — physics simulations, generative art, games, and tools. Built fresh every day.
  </p>

  <div class="cta-row">
    <a href="/apps" class="btn-primary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 3l14 9-14 9V3z"/></svg>
      Browse Apps
    </a>
    <a href="/tutorials" class="btn-primary" style="background:linear-gradient(135deg,#f38b00,#0875e1);">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      Workday Tutorials
    </a>
    <a href="https://github.com/SharTechAI" class="btn-secondary" target="_blank" rel="noopener">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
      GitHub
    </a>
  </div>

  <div class="stats">
    <div class="stat">
      <div class="stat-value" id="app-count">—</div>
      <div class="stat-label">Apps built</div>
    </div>
    <div class="stat">
      <div class="stat-value">Daily</div>
      <div class="stat-label">New releases</div>
    </div>
    <div class="stat">
      <div class="stat-value">Open</div>
      <div class="stat-label">Source code</div>
    </div>
  </div>

  <div class="sections">
    <a href="/apps" class="section-card apps">
      <div class="section-card-header">
        <div class="section-icon apps">🧪</div>
        <div>
          <div class="section-card-title">Daily Web Apps</div>
          <div class="section-card-sub">Physics · Art · Games · Tools</div>
        </div>
      </div>
      <div class="section-card-desc">
        A new interactive browser experiment every day — fluid dynamics, generative art, particle simulations, retro games, and more. All open source.
      </div>
      <div class="section-card-footer">
        <span>Browse all apps →</span>
        <span id="app-count-badge" style="font-size:12px;color:var(--muted);font-weight:400"></span>
      </div>
    </a>

    <a href="/tutorials" class="section-card tutorials">
      <div class="section-card-header">
        <div class="section-icon tutorials">📋</div>
        <div>
          <div class="section-card-title">Workday Tutorials</div>
          <div class="section-card-sub">HRM · Animated Walkthroughs</div>
        </div>
      </div>
      <div class="section-card-desc">
        Step-by-step animated guides for Workday HRM features — time off requests, timesheets, payslips, and more. A new tutorial added daily.
      </div>
      <div class="section-card-footer">
        <span>View tutorials →</span>
        <span id="tut-count-badge" style="font-size:12px;color:var(--muted);font-weight:400"></span>
      </div>
    </a>
  </div>

  <div class="features">
    <div class="feature-card">
      <span class="feature-icon">⚛️</span>
      <div class="feature-title">Physics & Simulation</div>
      <div class="feature-desc">Gravity sandboxes, fluid dynamics, particle life, and wave interference.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">🎨</span>
      <div class="feature-title">Generative Art</div>
      <div class="feature-desc">Kaleidoscopes, aurora effects, pixel studios, and procedural patterns.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">🎮</span>
      <div class="feature-title">Games & Tools</div>
      <div class="feature-desc">Retro arcade, synth pads, and interactive experiments built in the browser.</div>
    </div>
  </div>
</main>

<footer>
  Built by <a href="https://github.com/SharTechAI" target="_blank" rel="noopener">SharTechAI</a> &nbsp;·&nbsp;
  <a href="/apps">All Apps</a>
</footer>

<script>
  fetch('/apps')
    .then(r => r.text())
    .then(html => {
      const count = (html.match(/class="app-card"/g) || []).length;
      if (count) {
        document.getElementById('app-count').textContent = count + '+';
        document.getElementById('app-count-badge').textContent = count + ' apps';
      }
    })
    .catch(() => {});

  fetch('/tutorials')
    .then(r => r.text())
    .then(html => {
      const count = (html.match(/class="card"/g) || []).length;
      if (count) document.getElementById('tut-count-badge').textContent = count + ' tutorial' + (count !== 1 ? 's' : '');
    })
    .catch(() => {});
</script>
</body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Serve landing page at root
    if (url.pathname === '/' || url.pathname === '') {
      return new Response(LANDING_HTML, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    // /tutorials* → shartechai.github.io/workday-tutorials/*
    if (url.pathname.startsWith('/tutorials')) {
      const subPath = url.pathname.slice('/tutorials'.length) || '/';
      const targetURL = `https://shartechai.github.io/workday-tutorials${subPath}${url.search}`;
      return fetch(new Request(targetURL, {
        method: request.method,
        headers: (() => {
          const h = new Headers(request.headers);
          h.set('Host', 'shartechai.github.io');
          return h;
        })(),
        body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
        redirect: 'follow',
      }));
    }

    // All other paths proxy to daily-web-apps (direct app links like /fluid-dynamics/)
    if (!url.pathname.startsWith('/apps')) {
      const targetURL = `https://shartechai.github.io/daily-web-apps${url.pathname}${url.search}`;
      return fetch(new Request(targetURL, {
        method: request.method,
        headers: (() => {
          const h = new Headers(request.headers);
          h.set('Host', 'shartechai.github.io');
          return h;
        })(),
        body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
        redirect: 'follow',
      }));
    }

    // /apps        → /daily-web-apps/
    // /apps/       → /daily-web-apps/
    // /apps/foo    → /daily-web-apps/foo
    const subPath = url.pathname.slice('/apps'.length) || '/';
    const targetURL = `https://shartechai.github.io/daily-web-apps${subPath}${url.search}`;

    const proxied = new Request(targetURL, {
      method: request.method,
      headers: (() => {
        const h = new Headers(request.headers);
        h.set('Host', 'shartechai.github.io');
        return h;
      })(),
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
      redirect: 'follow',
    });

    const response = await fetch(proxied);

    // Rewrite any absolute redirects that point back to GitHub Pages
    if ([301, 302, 307, 308].includes(response.status)) {
      const location = response.headers.get('Location') || '';
      if (location.includes('shartechai.github.io/daily-web-apps')) {
        const rewritten = location.replace(
          'https://shartechai.github.io/daily-web-apps',
          `${url.origin}/apps`
        );
        return new Response(response.body, {
          status: response.status,
          headers: { ...Object.fromEntries(response.headers), Location: rewritten },
        });
      }
    }

    return response;
  },
};

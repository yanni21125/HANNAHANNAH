(function () {
  const body = document.body;
  if (!body) return;

  const container = document.createElement('main');
  container.style.minHeight = '100vh';
  container.style.display = 'grid';
  container.style.placeItems = 'center';
  container.style.background = 'linear-gradient(135deg, #08172d 0%, #0f172a 30%, #1d4ed8 70%, #38bdf8 100%)';
  container.style.padding = '24px';

  const card = document.createElement('section');
  card.style.width = 'min(520px, 100%)';
  card.style.padding = '32px';
  card.style.borderRadius = '22px';
  card.style.background = 'rgba(15, 23, 42, 0.72)';
  card.style.border = '1px solid rgba(147, 197, 253, 0.35)';
  card.style.boxShadow = '0 20px 45px rgba(14, 116, 144, 0.35)';
  card.style.backdropFilter = 'blur(12px)';
  card.style.color = '#e0f2fe';

  const badge = document.createElement('div');
  badge.textContent = 'Blue Theme';
  badge.style.display = 'inline-block';
  badge.style.padding = '8px 12px';
  badge.style.borderRadius = '999px';
  badge.style.background = 'rgba(59, 130, 246, 0.2)';
  badge.style.border = '1px solid rgba(147, 197, 253, 0.4)';
  badge.style.color = '#bfdbfe';
  badge.style.fontSize = '12px';
  badge.style.fontWeight = '700';
  badge.style.letterSpacing = '0.08em';
  badge.style.textTransform = 'uppercase';

  const title = document.createElement('h1');
  title.textContent = 'Calm, modern, and blue.';
  title.style.margin = '18px 0 12px';
  title.style.fontSize = 'clamp(2rem, 5vw, 3.3rem)';
  title.style.lineHeight = '1.1';
  title.style.color = '#f0f9ff';

  const text = document.createElement('p');
  text.textContent = 'A clean blue-inspired interface with soft contrast, cool gradients, and a polished glassmorphism feel.';
  text.style.margin = '0 0 24px';
  text.style.fontSize = '1rem';
  text.style.lineHeight = '1.7';
  text.style.color = '#cbd5e1';

  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.gap = '12px';
  actions.style.flexWrap = 'wrap';

  const primaryBtn = document.createElement('button');
  primaryBtn.textContent = 'Explore';
  primaryBtn.style.border = 'none';
  primaryBtn.style.borderRadius = '12px';
  primaryBtn.style.padding = '12px 18px';
  primaryBtn.style.background = 'linear-gradient(135deg, #3b82f6, #0ea5e9)';
  primaryBtn.style.color = '#eff6ff';
  primaryBtn.style.fontWeight = '700';
  primaryBtn.style.cursor = 'pointer';
  primaryBtn.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.35)';

  const secondaryBtn = document.createElement('button');
  secondaryBtn.textContent = 'Preview';
  secondaryBtn.style.border = '1px solid rgba(148, 163, 184, 0.45)';
  secondaryBtn.style.borderRadius = '12px';
  secondaryBtn.style.padding = '12px 18px';
  secondaryBtn.style.background = 'rgba(15, 23, 42, 0.45)';
  secondaryBtn.style.color = '#e2e8f0';
  secondaryBtn.style.fontWeight = '600';
  secondaryBtn.style.cursor = 'pointer';

  actions.append(primaryBtn, secondaryBtn);
  card.append(badge, title, text, actions);
  container.appendChild(card);
  body.innerHTML = '';
  body.appendChild(container);
  body.style.margin = '0';
  body.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
})();

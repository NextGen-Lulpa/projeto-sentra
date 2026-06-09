document.addEventListener("DOMContentLoaded", () => {
  const bodyEl = document.body;
  const heroGlow = document.querySelector(".sobre-hero .hero-efeito");
  const heroContent = document.querySelector(".hero-content");

  let mouseX = 0;
  let mouseY = 0;
  let smoothX = 0;
  let smoothY = 0;

  // Captura a posição do cursor ou do toque na tela
  function handleMove(clientX, clientY) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    mouseX = (clientX - centerX) / 45;
    mouseY = (clientY - centerY) / 45;
  }

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduceMotion) return;

  document.addEventListener("mousemove", (e) => {
    handleMove(e.clientX, e.clientY);
  });

  document.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    { passive: true },
  );

  // Renderização em tempo de execução via RequestAnimationFrame
  function renderParallax() {
    smoothX += (mouseX - smoothX) * 0.08;
    smoothY += (mouseY - smoothY) * 0.08;

    if (bodyEl) {
      bodyEl.style.setProperty("--bg-parallax-x", `${smoothX * 0.25}px`);
      bodyEl.style.setProperty("--bg-parallax-y", `${smoothY * 0.25}px`);
    }

    if (heroGlow) {
      heroGlow.style.transform = `translate3d(calc(-50% + ${-smoothX * 0.8}px), calc(-50% + ${-smoothY * 0.8}px), 0)`;
    }

    if (heroContent) {
      heroContent.style.transform = `translate3d(${smoothX * 0.3}px, ${smoothY * 0.3}px, 0)`;
    }

    requestAnimationFrame(renderParallax);
  }

  // Inicia a animação de parallax
  renderParallax();
});

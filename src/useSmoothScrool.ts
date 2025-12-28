export const smoothScrollTo = (id: string, duration = 700) => {
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;
  let startTime: number | null = null;

  const easeInOut = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animate = (time: number) => {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, start + distance * easeInOut(progress));
    if (progress < 1) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

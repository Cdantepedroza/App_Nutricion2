document.querySelectorAll(".progress-ring").forEach((circle) => {
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  const progress = Number(circle.dataset.progress || 0);
  const offset = circumference - (progress / 100) * circumference;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;

  window.setTimeout(() => {
    circle.style.strokeDashoffset = offset;
  }, 300);
});

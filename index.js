const clock = document.querySelector(".clock");

const clockFunc = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span>${h}</span>
    <span>${m}</span>
    <span>${s}</span>
  `;
  clock.innerHTML = html;
};

setInterval(clockFunc, 1000);

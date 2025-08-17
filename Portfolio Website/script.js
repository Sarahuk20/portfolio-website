// عناصر
const menuBtn = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

function closeMenu() {
  links.classList.remove("active");
  menuBtn.classList.remove("open");
  document.body.classList.remove("nav-open");
}

// فتح/إغلاق المنيو
menuBtn?.addEventListener("click", () => {
  const open = links.classList.toggle("active");
  menuBtn.classList.toggle("open", open);
  document.body.classList.toggle("nav-open", open);
});

// أغلق عند الضغط على رابط
links?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

// أغلق عند تغيير المقاس للديسكتوب
window.addEventListener("resize", () => {
  if (window.innerWidth > 968) closeMenu();
});

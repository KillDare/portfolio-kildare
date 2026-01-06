const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu-sup-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;

      menuItems.forEach(item => {
        const link = item.querySelector("a");
        item.classList.toggle(
          "menu-sup-item-ativo",
          link.getAttribute("href") === `#${id}`
        );
      });
    });
  },
  {
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0
  }
);

sections.forEach(section => observer.observe(section));

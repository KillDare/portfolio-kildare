// VERIFICA E CONTROLA A SEÇÃO ATIVA
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

// FEEDBACK DE EVIO DE EMAIL
const form = document.getElementById('form-contato');
const feedback = form.querySelector('.form-feedback');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  feedback.textContent = 'Enviando mensagem...';
  feedback.className = 'form-feedback';

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      feedback.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
      feedback.classList.add('sucesso');
      feedback?.classList.remove('display-none');
    } else {
      throw new Error('Erro no envio');
    }
  } catch (error) {
    feedback.textContent = 'Não foi possível enviar a mensagem. Tente novamente mais tarde.';
    feedback.classList.add('erro');
    feedback?.classList.remove('display-none');
  }
});

// script.js

// Atualiza automaticamente o ano no rodapé
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Adiciona rolagem suave aos links de navegação
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Muda a opacidade do cabeçalho ao rolar a página
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Opção para destaque de link ativo no menu
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const id = section.getAttribute('id');
    const navItem = document.querySelector(`nav a[href='#${id}']`);
    if (navItem) {
      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        navItem.classList.add('active');
      } else {
        navItem.classList.remove('active');
      }
    }
  });
});


// Seleciona elementos
const modal = document.getElementById('modalCurriculo');
const btn = document.getElementById('abrirModal');
const fechar = document.querySelector('.fechar');

// Abre o modal
btn.onclick = function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // trava o scroll do fundo
}

// Fecha o modal ao clicar no X
fechar.onclick = function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Seleciona os elementos do DOM
const modalGestao = document.getElementById('modalGestao'); // o container do modal
const abrirGestao = document.getElementById('abrirGestao'); // o botão que abre o modal
const fecharModalGestao = document.getElementById('fecharGestao'); // o botão X para fechar

// Abre o modal ao clicar no botão
abrirGestao.addEventListener('click', () => {
  modalGestao.style.display = 'block';
  document.body.style.overflow = 'hidden'; // impede o scroll da página
});




// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modalGestao) {
    modalGestao.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// === Modal Automação e BI ===
const modalAutomacao = document.getElementById('modalAutomacao');
const abrirAutomacao = document.getElementById('abrirAutomacao');
const fecharAutomacao = document.getElementById('fecharAutomacao');

// Abre o modal
abrirAutomacao.addEventListener('click', () => {
  modalAutomacao.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Fecha o modal ao clicar no X
fecharAutomacao.addEventListener('click', () => {
  modalAutomacao.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Fecha o modal ao clicar fora da caixa
window.addEventListener('click', (event) => {
  if (event.target === modalAutomacao) {
    modalAutomacao.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
// === Modal Liderança e Desenvolvimento ===
const modalLideranca = document.getElementById('modalLideranca');
const abrirLideranca = document.getElementById('abrirLideranca');
const fecharLideranca = document.getElementById('fecharLideranca');

// Abre o modal
abrirLideranca.addEventListener('click', () => {
  modalLideranca.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Fecha ao clicar no X
fecharLideranca.addEventListener('click', () => {
  modalLideranca.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Fecha ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modalLideranca) {
    modalLideranca.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// === Modal Planejamento Operacional ===
const modalPlanejamento = document.getElementById('modalPlanejamento');
const abrirPlanejamento = document.getElementById('abrirPlanejamento');
const fecharPlanejamento = document.getElementById('fecharPlanejamento');

// Abre o modal
abrirPlanejamento.addEventListener('click', () => {
  modalPlanejamento.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Fecha ao clicar no X
fecharPlanejamento.addEventListener('click', () => {
  modalPlanejamento.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Fecha ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modalPlanejamento) {
    modalPlanejamento.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// === Modal Transformação Digital ===
const modalTransformacao = document.getElementById('modalTransformacao');
const abrirTransformacao = document.getElementById('abrirTransformacao');
const fecharTransformacao = document.getElementById('fecharTransformacao');

// Abre o modal
abrirTransformacao.addEventListener('click', () => {
  modalTransformacao.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Fecha ao clicar no X
fecharTransformacao.addEventListener('click', () => {
  modalTransformacao.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Fecha ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modalTransformacao) {
    modalTransformacao.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

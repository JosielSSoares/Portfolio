const plusButton = document.getElementById('plus-button');
const infoContent = document.getElementById('info-content');
const isDragging = { value: false };
const initialPosition = { x: 0, y: 0 };

document.addEventListener('click', (e) => {
  const isClickInsideInfoContent = infoContent.contains(e.target);
  const isClickInsidePlusButton = plusButton.contains(e.target);

  if (!isClickInsideInfoContent && !isClickInsidePlusButton) {
    // Clique fora da caixa e fora do botão '+', então fecha a caixa.
    infoContent.style.display = 'none';
  }
});

function toggleInfo() {
  if (infoContent.style.display === 'block') {
    infoContent.style.display = 'none';
  } else {
    infoContent.style.display = 'block';
  }
}

// Adicione um ouvinte de eventos de clique ao botão +
plusButton.addEventListener('click', toggleInfo);

infoContent.addEventListener('mousedown', (e) => {
  isDragging.value = true;
  initialPosition.x = e.clientX - infoContent.getBoundingClientRect().left;
  initialPosition.y = e.clientY - infoContent.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging.value) {
    const newX = e.clientX - initialPosition.x;
    const newY = e.clientY - initialPosition.y;
    infoContent.style.left = `${newX}px`;
    infoContent.style.top = `${newY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging.value = false;
});

infoContent.style.position = 'absolute';
infoContent.style.right = '250px';  // Posição inicial x
infoContent.style.top = '50px';    // Posição inicial y

$(document).ready(function () {
  // Quando um elemento com a classe 'collapsible' é clicado
  $('.collapsible').click(function () {
    // Seleciona o próximo elemento com a classe 'content'
    const content = $(this).next('.content');

    // Animadamente exibe ou oculta o conteúdo
    content.slideToggle();

    // Alterna entre os ícones fa-eye-slash e fa-eye
    const icon = $(this).find('.fa-eye-slash');
    icon.toggleClass('fa-eye-slash fa-eye');

    // Ajusta a cor conforme necessário
    icon.css('color', content.is(':visible') ? '#8000ff' : '');
  });
});












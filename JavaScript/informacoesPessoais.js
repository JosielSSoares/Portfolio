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

document.addEventListener('DOMContentLoaded', function () {
  const collapsibles = document.querySelectorAll('.collapsible');

  collapsibles.forEach(function (collapsible) {
    collapsible.addEventListener('click', function () {
      const content = this.nextElementSibling;

      if (content.style.display === 'block') {
        content.style.display = 'none';
        this.querySelector('.fa-caret-down').style.transform = 'rotate(0deg)';
      } else {
        content.style.display = 'block';
        this.querySelector('.fa-caret-down').style.transform = 'rotate(180deg)';
      }
    });
  });
});









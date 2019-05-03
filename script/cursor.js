$(document).ready(function(){
  window.addEventListener('contextmenu', function (event) {
      event.preventDefault();
  })
  $('img').on('dragstart', function () {
    return false;
  });

  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX -10)+"px;");
  });

  document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });

  $('area').on('mouseover', () => {
    $('.cursor').css('border-color', 'green');
  });
});
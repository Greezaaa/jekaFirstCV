   //toogle class to nav
   $("#hamburger").on('click', function() {
    $('#menu').toggleClass("active");
});
//expand trabajos
$(function() {
    $('.wrapper').click(function() {
        $('.wrapper.active').removeClass('active');
        $('.wrapper').parent().removeClass('active');
        $(this).addClass('active');
        $(this).parent().toggleClass('active');
    })
})
const panels = document.querySelectorAll(".exp");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
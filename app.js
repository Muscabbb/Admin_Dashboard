document.querySelector(".toggle-btn").addEventListener('click', () => {
    document.querySelector(".icon").classList.toggle("wrong");
    document.querySelector(".toggle-btn").classList.toggle("bg-eee");
    document.querySelector(".toggle-btn").classList.toggle("bg-blue");
    document.querySelector(".icon").classList.toggle("fa-check");
    document.querySelector(".icon").classList.toggle("fa-xmark");
    document.querySelector(".icon").classList.toggle("c-blue");
    document.querySelector(".icon").classList.toggle("c-text");

})
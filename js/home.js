const clickUser = document.querySelector(".user");

clickUser.addEventListener('click', () => {
    const clickedUser = document.querySelector(".user-box")
    clickedUser.classList.toggle("hidden")
})

const clickArrow = document.querySelector(".icon");
const clickMenu = document.querySelector(".list-menu");

clickArrow.addEventListener('click', () => {

    const clickedArrow = document.querySelectorAll(".item")
    clickMenu.classList.toggle('list-menu')
    clickedArrow.forEach((e,i) => e.classList.toggle("hidden"))
})

const clickChose = document.querySelectorAll(".left li")
const FindBox = document.querySelectorAll(".box")


clickChose.forEach((e,i)  => {
    e.addEventListener('click', () => {
        clickChose.forEach(e => e.style.color = "white");
        e.style.color = "blue"; 
        FindBox.forEach(e => e.style.display = "none");
        FindBox[i].style.display = "block";
    })
})





let colors = ["green", "red", "rgba(133,122,200)", "#f15025","blue","black","tomatoe","coral"]
let sectionContainer = document.getElementById("section-container")
let colorEl = document.getElementById("color-el")
let colorChange = document.getElementById("color-change")


function clickMe() {
  let randomcolor =colors[getrandomColor()]
  document.body.style.backgroundColor = randomcolor
  colorEl.textContent = randomcolor
}

let getrandomColor = function () {
    return Math.floor(Math.random()* colors.length)
}
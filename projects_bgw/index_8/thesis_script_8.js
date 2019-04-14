const images = ["https://chonc268.github.io/img/square/pixel1.png", "https://chonc268.github.io/img/square/pixel2.png", "https://chonc268.github.io/img/square/pixel3.png", "https://chonc268.github.io/img/square/pixel4.png", "https://chonc268.github.io/img/square/pixel5.png", "https://chonc268.github.io/img/square/pixel6.png"]

let i = 0

function placeImage(x, y) {

  const nextImage = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)"

  document.body.appendChild(img)

  i = i +1

  if (i>= images.length) {
    i = 0
  }

}

document.addEventListener("click", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)

})

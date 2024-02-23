// DOM elements
const attractionsDiv = document.querySelector('.attractions')
const swiperDiv = document.querySelector('.swiper-wrapper')
const attractionContainer = document.querySelector('.attraction-container')

// Event Listeners
addEventListener('load', getAttractionImg(), showAllAttractions())


// Axios Calls
async function getAllAttractions() {
  let response = await axios.get(`http://localhost:3001/attraction`)
  let arr = response.data
  arr.forEach((el) => console.log(el.name))
}

async function getAttractionImg() {
  try {  
    let response = await axios.get(`http://localhost:3001/attraction`)
    let arr = response.data

    arr.forEach((el) => {
      swiperDiv.innerHTML += `<div class="swiper-slide"><img src="${el.coverImg}" alt="${el.name}"></div>`  
      // console.log(el)
    })
    // Bring in Swiper
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      autoplay: {
        delay: 5000,
        disableOnInteractiion: false,
      },
      loop: true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  } catch (error) {
    console.error('It is an error', error)
  }
}

async function showAllAttractions() {
  let response = await axios.get(`http://localhost:3001/attraction`)
  let arr = response.data
  let cityResponse = await axios.get(`http://localhost:3001/city`)
  cityArr = cityResponse.data



  arr.forEach((el) => {
    let name = el.name
    let img1 = el.img1
    let cityId = el.city
    let description = el.description
    let attractionId = el._id

    let city = cityArr.find((city) => city._id === cityId) 
    let cityName = city.name

    let attractionDiv = document.createElement('div');
    attractionDiv.className = 'attraction'
    attractionDiv.dataset.attractionId = attractionId;
    attractionDiv.innerHTML = `
      <img class="attraction-img" src="${img1}" alt="${name}" />
      <h3>${name}</h3>
      <p class="bold">${cityName}</p>
      <p>${description}</p>
    `

    attractionContainer.appendChild(attractionDiv)

    attractionDiv.addEventListener('click', function () {
      // window.location.href = `/attraction.html`
      window.location.href=`/client/attraction-detail.html?attractionId=${this.dataset.attractionId}`
    })
  })
}


// getAllAttractions()
// getAttractionImg()
// showAllAttractions()

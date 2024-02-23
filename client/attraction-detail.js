// Query DOM elements
const container = document.querySelector(".container")

document.addEventListener('DOMContentLoaded', async (event) => {


  
  const urlParams = new URLSearchParams(window.location.search);
  const attractionId = urlParams.get('attractionId');

  if (attractionId) {
    try {
      const response = await axios.get(`http://localhost:3001/attraction-detail/${attractionId}`);
      console.log('response is this:', response)
      let attraction = response.data
      let name = attraction.name
      let city = attraction.city
      let img1 = attraction.img1
      let img2 = attraction.img2
      let img3 = attraction.img3
      let description = attraction.description
      let address = attraction.address

      let cityResponse = await axios.get(`http://localhost:3001/city`)
      console.log('city response is', cityResponse)
      let cityArr = cityResponse.data
      let cityObj = cityArr.find((el) => el._id === city)
      console.log('city obj is:', cityObj)
      let cityName = cityObj.name


      container.innerHTML = `
      <img id="feature-img" src="${img1}" />

        <h1 id="attraction-name">${name}</h1>
        <a href="/client/continent.html"><h3 id="continent">${cityName}</h3></a>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!-- Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            />
          </svg>
          Save
        </button>
        <main>
          <p>${description}</p>
          <img class="content-img" src="${img2}" />
          <img class="content-img" src="${img3}" />
        </main>
        <div class="address-container">
          <p class="bold">${address}</p>
          <a href="googlemap.com"
            ></a
          >
        </div>

      `


      // Now you can use attractionData to render the attraction details on the page.
      // console.log(attractionData)
    } catch (error) {
      console.error('It is an error:', error);
    }
  }
});






// // Event Listener
// document.addEventListener('DOMContentLoaded', getAttraction)

// // Get data
// async function getAttraction() {
//   let response = await axios.get(`http://localhost:3001/attraction-detail`)


//   console.log(response)

// }



    // <!-- Background: Attraction -->
    // <img src="" />
    // <h1 id="attraction">Attraction Name</h1>
    // <a href="/client/continent.html"><h3 id="continent">Continent</h3></a>
    // <button>
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    //     <!-- Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
    //     <path
    //       d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
    //     />
    //   </svg>
    //   Save
    // </button>
    // <main>
    //   <p>Description</p>
    //   <img src="img1" />
    //   <img src="img2" />
    //   <img src="img3" />
    // </main>
    // <div class="address-container">
    //   <p class="bold">Address</p>
    //   <a href="googlemap.com">example street, example city, example country</a>
    // </div>
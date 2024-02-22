const db = require('../db')
const { Attraction, City } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const newYork = await City.findOne({ name: "New York" })
  const london = await City.findOne({ name: "London" })
  const marrakech = await City.findOne({ name: "Marrakech" })
  const agra = await City.findOne({ name: "Agra" })
  const lisbon = await City.findOne({ name: "Lisbon" })
  const capeTown = await City.findOne({ name: "Cape Town" })

  const attractions = [
    {
      name: "Central Park",
      coverImg: "https://s3.amazonaws.com/assets.centralparknyc.org/media/images/_1200x630_crop_center-center_82_none/Sheep-Meadow-Aerial-Central-Park-credit-the-Central-Park-Conservancy.jpg?mtime=1597065139",
      img1: "https://media.cntraveler.com/photos/55f9aa4cc753332a5bcdfbb1/16:9/w_2560%2Cc_limit/central-park-nyc-cr-getty.jpg",
      img2: "https://images.adsttc.com/media/images/61ee/69bd/3e4b/3150/2f00/006d/large_jpg/Harry_Gillen_via_Unsplash.jpg?1643014578",
      img3: "https://www.centralpark.com/downloads/4255/download/all-alone.jpe?cb=a1151889c810acefa6f7acdd4b918c7c",
      description: "Central Park is an urban park in New York City located between the Upper West and Upper East Sides of Manhattan. It is the fifth-largest park in the city.",
      city: newYork._id, 
      address: "New York, NY 10024, United States",
    },
    {
      name: "The British Museum",
      coverImg: "https://cdn.britannica.com/12/127112-050-F4DD3B7A/British-Museum-London.jpg",
      img1: "https://cdn.londonandpartners.com/asset/afternoon-tea-at-the-british-museum_dine-in-the-great-court-restaurant-at-the-british-museum-visitlondoncom-jon-reid_e71f2e08ac1964bc74090dae89f4de64.jpg",
      img2: "https://static01.nyt.com/images/2024/01/12/multimedia/10british-museum-zclt/10british-museum-zclt-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale",
      img3: "https://cdn.britannica.com/26/138626-050-5CCE8DEA/Reading-Room-British-Museum-London.jpg",
      description: "The British Museum, in the Bloomsbury area of London, England, is a public institution dedicated to human history, art, and culture.",
      city: london._id, 
      address: "Great Russell St, Bloomsbury, London WC1B 3DG, United Kingdom",
    },
    {
      name: "Djemaa El Fna",
      coverImg: "https://lp-cms-production.imgix.net/2019-06/GettyImages-514814737_high.jpg",
      img1: "https://www.dunesdeserts.com/wp-content/uploads/2019/01/Jmaalefna-870x480.jpg",
      img2: "https://lp-cms-production.s3.amazonaws.com/public/2021-05/GettyImages-522619216.jpg",
      img3: "https://riad-orange.com/wp-content/uploads/plein-1-e1571876356292.jpg",
      description: "Djemaa El Fna is the highlight of any visit to Marrakech and one of the top attractions in Morocco. By day it is a bustling hub of activity with snake charmers, musicians, and street performers. As the sun sets, the square transforms into a lively night market filled with food stalls, storytellers, and entertainers, offering an unforgettable experience.",
      city: marrakech._id, 
      address: "Jemaa el-Fna, Marrakech 40000, Morocco",
    },
    {
      name: "Taj Mahal",
      coverImg: "https://i.pinimg.com/originals/92/70/9b/92709b0c0acbe201f3aa135bd36823ef.jpg",
      img1: "https://www.sharingthewander.com/wp-content/uploads/2023/06/Guide-to-the-Taj-Mahal.jpg",
      img2: "https://cdn-images-1.medium.com/max/767/0*74bdVbfLcKPtXUkO.",
      img3: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2016/06/30/ba318890-39de-11e6-9a6a-3421f730b241_1280x720.JPG?itok=EG1Ou-_J",
      description: "The Taj Mahal, an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      city: agra._id,
      address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh, India",
    },
    {
      name: "Alfama",
      coverImg: "https://images.resosys.com/destinations/10/articles/alfama-neighbourhood-lisbon_en/inline/1667827088-lisbon-alfama-2.jpg",
      img1: "https://www.notesfromtheroad.com/files/lisbon-alfama.jpg",
      img2: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/538000/538531-alfama.jpg",
      img3: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/538000/538491-alfama.jpg",
      description: "Alfama is Lisbon's oldest district, renowned for its maze of narrow streets, steep steps, and stunning viewpoints. This historic area is rich with traditional Fado houses, colorful tiled buildings, and ancient landmarks like the São Jorge Castle. Alfama offers a glimpse into the traditional Portuguese lifestyle and is a must-visit for anyone exploring Lisbon.",
      city: lisbon._id,
      address: "Alfama, Lisbon, Portugal",
    },
    {
      name: "Boulders Beach",
      coverImg: "https://lh3.googleusercontent.com/p/AF1QipMKoguvmj4UPnGj4o-irD8cmevb1UNxkT9yW4Ft=s1360-w1360-h1020",
      img1: "https://lh3.googleusercontent.com/p/AF1QipMVj8pzi9uwjAbCLvmJqq5sCFlp6GdcLA1Rsboh=s1360-w1360-h1020",
      img2: "https://lh3.googleusercontent.com/p/AF1QipOKhEOTqUEBE0y915y8TmXOm8VZS85D2L5hJ2D5=s1360-w1360-h1020",
      img3: "https://lh3.googleusercontent.com/p/AF1QipMkVBm9J0l9DLBB9ckbLbHjdJTSVpXVo-XfMiNl=s1360-w1360-h1020",
      description: "Boulders Beach, located in the Cape Peninsula near Cape Town, is famous for its resident African penguin colony. Nestled in a sheltered bay within the Table Mountain National Park, the beach is surrounded by large granite boulders, giving it a unique and picturesque setting. It's a popular destination for visitors looking to enjoy the beach while observing the penguins in their natural habitat.",
      city: capeTown._id,
      address: "Kleintuin Rd, Simon's Town, Cape Town, 7995, South Africa",
    }
  ]

  await Attraction.insertMany(attractions)
  console.log("Created some attractions")
}

const run = async () => {
  await main()
  db.close()
}

run()
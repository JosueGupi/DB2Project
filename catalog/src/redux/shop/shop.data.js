const SHOP_DATA = [
  {
    id: 1,
    title: "Whisky type 1",
    routeName: "type1",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_canadianclub.jpg",
        price: 25
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_buchanans.jpg",
        price: 18
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_knob.jpg",
        price: 35
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_fourroses.jpg",
        price: 25
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14
      },
    ]
  },
  {
    id: 2,
    title: "Whisky type 2",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_glenlivet.jpg",
        price: 220
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_southerncomfort.jpg",
        price: 280
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_skrewball.jpg",
        price: 110
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_blackvelvet.jpg",
        price: 160
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: "Whisky type 3",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_seagrams.jpg",
        price: 125
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_woodford.jpg",
        price: 90
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_johnniewalker.jpg",
        price: 90
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://vinepair.com/wp-content/uploads/2022/02/top-20-whiskey-brands_internal_evanwilliams.jpg",
        price: 165
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: "Whisky type 4",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: "Whisky type 5",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;


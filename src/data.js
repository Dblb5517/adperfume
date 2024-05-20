const popularPerfumes = [
  {
    name: "Chanel No. 5",
    brand: "Chanel",
    keyNotes: ["Bergamot", "Lemon", "Jasmine", "Rose", "Vanilla"],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Elegant occasions",
    link: "https://amzn.to/3PUAwnA",
    img: "https://m.media-amazon.com/images/I/41tEJylR89L._SX679_.jpg",
  },
  {
    name: "Dior Sauvage",
    brand: "Dior",
    keyNotes: ["Bergamot", "Ambroxan", "Lavender", "Patchouli", "Vanilla"],
    fragranceFamily: "Woody",
    gender: "Men",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Evening wear",
    link: "https://amzn.to/49skJTG",
    img: "https://m.media-amazon.com/images/I/61Y4-J1gSZL._SX679_.jpg",
  },
  {
    name: "Flowerbomb",
    brand: "Viktor & Rolf",
    keyNotes: ["Jasmine", "Rose", "Osmanthus", "Patchouli", "Vanilla"],
    fragranceFamily: "Floral Oriental",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Special occasions",
    link: "https://amzn.to/4aIcRPd",
    img: "https://m.media-amazon.com/images/I/51HWphoZX+L._SX522_.jpg",
  },
  {
    name: "Acqua di Gio",
    brand: "Giorgio Armani",
    keyNotes: ["Bergamot", "Neroli", "Sea Notes", "Rosemary", "Patchouli"],
    fragranceFamily: "Aquatic",
    gender: "Men",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "Daytime casual",
    link: "https://amzn.to/3TMMHUI",
    img: "https://m.media-amazon.com/images/I/51XieLGFBWL._SX679_.jpg",
  },
  {
    name: "Valentino Born in Roma",
    brand: "Valentino",
    keyNotes: ["Blackcurrant", "Jasmine", "Vanilla Bourbon"],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Sophisticated evenings",
    link: "https://amzn.to/3xpo3Sq",
    img: "https://m.media-amazon.com/images/I/71w9oj9Wp-L._SX679_.jpg",
  },
  {
    name: "CHANCE EAU TENDRE Eau de Toilette",
    brand: "Chanel",
    keyNotes: ["Grapefruit", "Quince", "Jasmine", "White Musk"],
    fragranceFamily: "Floral Fruity",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Daytime elegance",
    link: "https://amzn.to/3W7Nbrl",
    img: "https://m.media-amazon.com/images/I/314sGJoVWEL.jpg",
  },
  {
    name: "Gucci Flora Gorgeous Magnolia Eau de Parfum",
    brand: "Gucci",
    keyNotes: ["Magnolia", "Sandalwood", "Brown Sugar"],
    fragranceFamily: "Floral Woody Musk",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Romantic occasions",
    link: "https://amzn.to/3J7eE4u",
    img: "https://m.media-amazon.com/images/I/71SQJ2zJdyL._SX679_.jpg",
  },
  {
    name: "CHANEL COCO MADEMOISELLE Eau de Parfum",
    brand: "Chanel",
    keyNotes: ["Orange", "Rose", "Patchouli", "Vetiver", "Vanilla"],
    fragranceFamily: "Floral Oriental",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Sophisticated evenings",
    link: "https://amzn.to/3VONvL5",
    img: "https://m.media-amazon.com/images/I/61+OWO8r3iL._SX679_.jpg",
  },
  {
    name: "Valentino Donna Born in Roma Coral Fantasy Eau de Parfum",
    brand: "Valentino",
    keyNotes: ["Bergamot", "Red Currant", "Jasmine", "Vanilla", "Musk"],
    fragranceFamily: "Floral Fruity",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Vibrant evenings",
    link: "https://amzn.to/3PVHAAq",
    img: "https://m.media-amazon.com/images/I/71-jGKc53WL._SX679_.jpg",
  },
  {
    name: "Yves Saint Laurent Mon Paris Eau de Parfum",
    brand: "Yves Saint Laurent",
    keyNotes: [
      "Strawberry",
      "Raspberry",
      "Pear",
      "Datura",
      "White Peony",
      "Patchouli",
      "White Musk",
    ],
    fragranceFamily: "Chypre Fruity",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Romantic occasions",
    link: "https://amzn.to/3PUAzzM",
    img: "https://m.media-amazon.com/images/I/61le89n4kvL._SX679_.jpg",
  },
  {
    name: "Dior J'adore Eau de Parfum",
    brand: "Dior",
    keyNotes: [
      "Ylang-Ylang",
      "Damascus Rose",
      "Jasmine Grandiflorum",
      "Indian Tuberose",
    ],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Special occasions",
    link: "https://amzn.to/4aptkrQ",
    img: "https://m.media-amazon.com/images/I/61FtjV9wSpL._SX679_.jpg",
  },
  {
    name: "TOM FORD Mini Soleil Blanc Shimmering Body Oil",
    brand: "TOM FORD",
    keyNotes: ["Bergamot", "Cardamom", "Pistachio", "Ylang-Ylang", "Tuberose"],
    fragranceFamily: "Floral",
    gender: "Unisex",
    intensity: "Light",
    priceRange: "$$$",
    bestFor: "Summer glow",
    link: "https://amzn.to/4cKWlQe",
    img: "https://m.media-amazon.com/images/I/617qHtliZ+L._SX679_.jpg",
  },
  {
    name: "Carolina Herrera Good Girl Eau de Parfum Supreme",
    brand: "Carolina Herrera",
    keyNotes: ["Tuberose", "Jasmine", "Tonka Bean", "Cacao", "Vanilla"],
    fragranceFamily: "Oriental Floral",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Evening glamour",
    link: "https://amzn.to/43Sc0ta",
    img: "https://m.media-amazon.com/images/I/51+8HI9F80L._SX679_.jpg",
  },
  {
    name: "Valentino Voce Viva Eau de Parfum",
    brand: "Valentino",
    keyNotes: ["Italian Bergamot", "Orange Blossom", "Crystal Moss", "Vanilla"],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Empowering moments",
    link: "https://amzn.to/3J8dV2X",
    img: "https://m.media-amazon.com/images/I/61GTC8UCziL._SX679_.jpg",
  },
  {
    name: "Valentino Donna Born In Roma Intense Eau de Parfum",
    brand: "Valentino",
    keyNotes: ["Blackcurrant", "Jasmine", "Vanilla Bourbon", "Leather Accord"],
    fragranceFamily: "Floral Oriental",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Dramatic evenings",
    link: "https://amzn.to/3TNvxpR",
    img: "https://m.media-amazon.com/images/I/71k3hQiDEzL._SX679_.jpg",
  },
  {
    name: "Gucci Bloom Eau de Parfum For Her",
    brand: "Gucci",
    keyNotes: ["Tuberose", "Jasmine", "Rangoon Creeper"],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Bohemian spirit",
    link: "https://amzn.to/43S3utO",
    img: "https://m.media-amazon.com/images/I/7134Ds7j4dL._SX679_.jpg",
  },
  {
    name: "Yves Saint Laurent Libre Le Parfum",
    brand: "Yves Saint Laurent",
    keyNotes: ["Lavender", "Jasmine", "Vanilla"],
    fragranceFamily: "Oriental Fougère",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Empowered elegance",
    link: "https://amzn.to/3U8xHld",
    img: "https://m.media-amazon.com/images/I/61nnAggVHIL._SX679_.jpg",
  },
  {
    name: "Versace Bright Crystal Absolu",
    brand: "Versace",
    keyNotes: [
      "Yuzu",
      "Pomegranate",
      "Raspberry",
      "Peony",
      "Magnolia",
      "Amber",
    ],
    fragranceFamily: "Floral Fruity",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Romantic evenings",
    link: "https://amzn.to/3Uf1LLY",
    img: "https://m.media-amazon.com/images/I/71NC-EcJH4L._SX679_.jpg",
  },
  {
    name: "Gucci Guilty Pour Femme Eau de Parfum",
    brand: "Gucci",
    keyNotes: ["Mandora", "Pink Pepper", "Lilac", "Patchouli"],
    fragranceFamily: "Floral Oriental",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Sensual allure",
    link: "https://amzn.to/3TVresD",
    img: "https://m.media-amazon.com/images/I/71p+BbceY4L._SX679_.jpg",
  },
  {
    name: "Versace Eros Pour Femme Eau de Parfum",
    brand: "Versace",
    keyNotes: [
      "Sicilian Lemon",
      "Calabrian Bergamot",
      "Pomegranate",
      "Peony",
      "Jasmine",
      "White Musk",
    ],
    fragranceFamily: "Floral Fruity",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Glamorous evenings",
    link: "https://amzn.to/3JfPwIU",
    img: "https://m.media-amazon.com/images/I/7167Hk4tO+L._SX679_.jpg",
  },
  {
    name: "Prada Paradoxe Intense Eau de Parfum",
    brand: "Prada",
    keyNotes: ["Bergamot", "Pink Pepper", "Rose", "Amber", "Patchouli"],
    fragranceFamily: "Oriental Floral",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Mysterious allure",
    link: "https://amzn.to/49vVKip",
    img: "https://m.media-amazon.com/images/I/51aXJUcwbIL._SX679_.jpg",
  },
  {
    name: "Dolce&Gabbana Q Eau de Parfum",
    brand: "Dolce&Gabbana",
    keyNotes: ["White Flowers", "Mandarin", "Jasmine", "Vanilla", "Cashmeran"],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Modern sophistication",
    link: "https://amzn.to/43ZceyH",
    img: "https://m.media-amazon.com/images/I/51ieMN1xI8L._SX522_.jpg",
  },
  {
    name: "BURBERRY Burberry Goddess Eau de Parfum Travel Spray",
    brand: "BURBERRY",
    keyNotes: ["Peach", "Iris", "Benzoin", "Sandalwood", "Vanilla"],
    fragranceFamily: "Floral Oriental",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "On-the-go luxury",
    link: "https://amzn.to/4aPsmEY",
    img: "https://m.media-amazon.com/images/I/71QDS-T-A3L._SX522_.jpg",
  },
  {
    name: "Yves Saint Laurent Black Opium Gift Set",
    brand: "Yves Saint Laurent",
    keyNotes: ["Coffee", "Orange Blossom", "Cedarwood", "Patchouli", "Vanilla"],
    fragranceFamily: "Oriental Vanilla",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Sensual indulgence",
    link: "https://amzn.to/4cOVsGt",
    img: "https://m.media-amazon.com/images/I/71BKa9KHpfL._SX679_.jpg",
  },
  {
    name: "Gucci Bamboo Eau de Parfum",
    brand: "Gucci",
    keyNotes: [
      "Italian Bergamot",
      "Casablanca Lily",
      "Ylang-Ylang",
      "Sandalwood",
      "Amber",
    ],
    fragranceFamily: "Floral Woody",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Timeless elegance",
    link: "https://amzn.to/3Jdt6Ip",
    img: "https://m.media-amazon.com/images/I/61N1FiR9TSL._SX679_.jpg",
  },
  {
    name: "KAYALI INVITE ONLY AMBER | 23",
    brand: "KAYALI",
    keyNotes: ["Amber"],
    fragranceFamily: "Warm",
    gender: "Unisex",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Special occasions",
    link: "https://amzn.to/3Jj5Bha",
    img: "https://m.media-amazon.com/images/I/41A5MPGoFNL._SX679_.jpg",
  },
  {
    name: "KAYALI Vanilla Royale Sugared Patchouli | 64 Eau de Parfum Intense Travel",
    brand: "KAYALI",
    keyNotes: ["Vanilla", "Sugared Patchouli"],
    fragranceFamily: "Gourmand",
    gender: "Unisex",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Luxurious travels",
    link: "https://amzn.to/4avD5os",
    img: "https://m.media-amazon.com/images/I/41CtPld2UBL._SX679_.jpg",
  },
  {
    name: "CHANEL COCO NOIR",
    brand: "CHANEL",
    keyNotes: ["Grapefruit", "Rose", "Patchouli", "Vanilla", "White Musk"],
    fragranceFamily: "Oriental",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Evening sophistication",
    link: "https://amzn.to/3JiS3Ca",
    img: "https://m.media-amazon.com/images/I/51A2cH-IYxL._SY879_.jpg",
  },
  {
    name: "Marc Jacobs Fragrances Daisy Love Pop Eau de Toilette",
    brand: "Marc Jacobs",
    keyNotes: ["Raspberry", "Crispy Pear", "White Peony", "Musk", "Sandalwood"],
    fragranceFamily: "Floral Fruity",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "Playful moments",
    link: "https://amzn.to/3VUDIDq",
    img: "https://m.media-amazon.com/images/I/51syZJrPdZL._SX679_.jpg",
  },
  {
    name: "NEST New York Indigo Eau de Parfum",
    brand: "NEST New York",
    keyNotes: [
      "Moroccan Tea",
      "Wild Fig",
      "Bergamot",
      "Kashmir Wood",
      "Cardamom",
    ],
    fragranceFamily: "Fresh",
    gender: "Unisex",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Everyday elegance",
    link: "https://amzn.to/3W2C9Ud",
    img: "https://m.media-amazon.com/images/I/51qYaHuZAiL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "KILIAN Paris Intoxicated",
    brand: "KILIAN Paris",
    keyNotes: ["Cardamom", "Arabian Coffee", "Vanilla"],
    fragranceFamily: "Spicy Oriental",
    gender: "Unisex",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Seductive evenings",
    link: "https://amzn.to/3UgFVb2",
    img: "https://m.media-amazon.com/images/I/71ujQgGempL._SX679_.jpg",
  },
  {
    name: "Carolina Herrera Good Girl Blush Eau de Parfum Rollerball",
    brand: "Carolina Herrera",
    keyNotes: ["Almond", "Tuberose", "Tonka Bean", "Jasmine", "Sandalwood"],
    fragranceFamily: "Floral Oriental",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "On-the-go sophistication",
    link: "https://amzn.to/3JfoXUn",
    img: "https://m.media-amazon.com/images/I/51BUdjrIXpL._SX679_.jpg",
  },
  {
    name: "Yves Saint Laurent Perfume Travel Spray Trio",
    brand: "Yves Saint Laurent",
    keyNotes: ["Black Opium", "Mon Paris", "Libre"],
    fragranceFamily: "Various",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Versatile elegance on the go",
    link: "https://amzn.to/3JhJKGE",
    img: "https://m.media-amazon.com/images/I/71o7939VMNL._SX679_.jpg",
  },
  {
    name: "NEST New York Golden Nectar Eau de Parfum",
    brand: "NEST New York",
    keyNotes: ["Acacia Honey", "Peach", "Neroli", "Bitter Orange", "Gardenia"],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Radiant and sophisticated",
    link: "https://amzn.to/3Q2WXXH",
    img: "https://m.media-amazon.com/images/I/51QSkNaQr2L._SY879_.jpg",
  },
  {
    name: "Chloé Roses De Chloé Eau de Toilette",
    brand: "Chloé",
    keyNotes: ["Bergamot", "Damascena Rose", "White Musk", "Amber", "Magnolia"],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Elegant floral freshness",
    link: "https://amzn.to/4aPN1J6",
    img: "https://m.media-amazon.com/images/I/51CqY0MeIeL._SX679_.jpg",
  },
  {
    name: "Paco Rabanne 1 Million Royal Parfum",
    brand: "Paco Rabanne",
    keyNotes: ["Cedarwood", "Cypriol", "Tuberose", "Cashmeran", "Amber"],
    fragranceFamily: "Woody Oriental",
    gender: "Men",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Regal and powerful presence",
    link: "https://amzn.to/3TVIpKG",
    img: "https://m.media-amazon.com/images/I/613e9pXFvBL._SX679_.jpg",
  },
  {
    name: "CHANEL GABRIELLE CHANEL Eau de Parfum",
    brand: "CHANEL",
    keyNotes: ["Orange Blossom", "Ylang-Ylang", "Grasse Jasmine", "Sandalwood"],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Radiant and modern femininity",
    link: "https://amzn.to/3JhJY0s",
    img: "https://m.media-amazon.com/images/I/61m1paKnuwL._SX679_.jpg",
  },
  {
    name: "Acqua di Gio",
    brand: "Giorgio Armani",
    keyNotes: ["Bergamot", "Neroli", "Sea Notes", "Rosemary", "Patchouli"],
    fragranceFamily: "Aquatic",
    gender: "Men",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "Refreshing daytime casual wear",
    link: "https://amzn.to/49zlhr8",
    img: "https://m.media-amazon.com/images/I/51XieLGFBWL._SX679_.jpg",
  },
  {
    name: "Aventus",
    brand: "Creed",
    keyNotes: ["Pineapple", "Birch", "Ambergris", "Patchouli", "Musk"],
    fragranceFamily: "Woody Fruity",
    gender: "Men",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Bold and confident signature scent",
    link: "https://amzn.to/49zllXU",
    img: "https://m.media-amazon.com/images/I/71nY6hb7uuL._SX522_.jpg",
  },
  {
    name: "Shalimar",
    brand: "Guerlain",
    keyNotes: ["Bergamot", "Iris", "Vanilla", "Tonka Bean", "Incense"],
    fragranceFamily: "Oriental",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Timeless and luxurious allure",
    link: "https://amzn.to/4aLSi4A",
    img: "https://m.media-amazon.com/images/I/614UMMH8EQL._SX679_.jpg",
  },
  {
    name: "CK One",
    brand: "Calvin Klein",
    keyNotes: ["Bergamot", "Pineapple", "Green Tea", "Amber", "Musk"],
    fragranceFamily: "Citrus Aromatic",
    gender: "Unisex",
    intensity: "Moderate",
    priceRange: "$",
    bestFor: "Casual and refreshing everyday wear",
    link: "https://amzn.to/3W4by9j",
    img: "https://m.media-amazon.com/images/I/51CCuX3miiL._SX522_.jpg",
  },
  {
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    keyNotes: ["Saffron", "Jasmine", "Amberwood", "Cedarwood", "Fir Resin"],
    fragranceFamily: "Oriental Floral",
    gender: "Unisex",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Sensual and sophisticated statement",
    link: "https://amzn.to/4aAy5yJ",
    img: "https://m.media-amazon.com/images/I/51Bp6YpL-lL._SX679_.jpg",
  },
  {
    name: "Jimmy Choo Blossom",
    brand: "Jimmy Choo",
    keyNotes: ["Red Berries", "Citrus", "Sweet Pea", "Rose", "White Musk"],
    fragranceFamily: "Floral Fruity",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "Energetic and playful daytime wear",
    link: "https://amzn.to/4aSKf5Y",
    img: "https://m.media-amazon.com/images/I/51PXSrzxarL.jpg",
  },
  {
    name: "Montblanc Legend",
    brand: "Montblanc",
    keyNotes: [
      "Bergamot",
      "Lavender",
      "White Cedarwood",
      "Oakmoss",
      "Tonka Bean",
    ],
    fragranceFamily: "Fougère",
    gender: "Men",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "Classic and timeless sophistication",
    link: "https://amzn.to/4aOQpVb",
    img: "https://m.media-amazon.com/images/I/41zF41tLyYL._SX522_.jpg",
  },
  {
    name: "Versace Pour Homme",
    brand: "Versace",
    keyNotes: ["Citron", "Bergamot", "Neroli", "Cedarwood", "Amber"],
    fragranceFamily: "Aromatic Fougère",
    gender: "Men",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "Fresh and vibrant daily wear",
    link: "https://amzn.to/3TW7q8E",
    img: "https://m.media-amazon.com/images/I/81LI+kkFOfL._SX679_.jpg",
  },
  {
    name: "Jimmy Choo Fever",
    brand: "Jimmy Choo",
    keyNotes: [
      "Black Plum",
      "Litchi",
      "Grapefruit",
      "Vanilla Orchid",
      "Roasted Tonka Bean",
    ],
    fragranceFamily: "Oriental Vanilla",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$",
    bestFor: "Sultry and captivating evening wear",
    link: "https://amzn.to/3JkqtV8",
    img: "https://m.media-amazon.com/images/I/71G5Z923hjL._SX522_.jpg",
  },
  {
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    keyNotes: ["Coffee", "Orange Blossom", "Cedarwood", "Patchouli", "Vanilla"],
    fragranceFamily: "Oriental Vanilla",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Sensual and addictive evening wear",
    link: "https://amzn.to/3Jj9K4v",
    img: "https://m.media-amazon.com/images/I/71HDIclRo3L._SX679_.jpg",
  },
  {
    name: "CHANEL COCO MADEMOISELLE Eau de Toilette",
    brand: "CHANEL",
    keyNotes: ["Orange", "Rose", "Patchouli", "Vetiver", "Vanilla"],
    fragranceFamily: "Floral Oriental",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Timeless and sophisticated daytime wear",
    link: "https://amzn.to/4cT5K8l",
    img: "https://m.media-amazon.com/images/I/719lNzxkIBL._SX679_.jpg",
  },
  {
    name: "CHANEL N°5 L’EAU",
    brand: "CHANEL",
    keyNotes: ["Lemon", "Mandarin", "Orange", "Aldehydes", "Cedarwood"],
    fragranceFamily: "Floral Aldehyde",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Fresh and modern floral elegance",
    link: "https://amzn.to/3xziKjx",
    img: "https://m.media-amazon.com/images/I/614Jj2chZmL._SY879_.jpg",
  },
  {
    name: "CHANEL CHANCE EAU FRAÎCHE Eau de Toilette",
    brand: "CHANEL",
    keyNotes: ["Citron", "Jasmine", "Teakwood", "Amber", "Patchouli"],
    fragranceFamily: "Citrus Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Fresh and lively everyday wear",
    link: "https://amzn.to/43YeFBj",
    img: "https://m.media-amazon.com/images/I/51YoMHajNfL._SX679_.jpg",
  },
  {
    name: "CHANEL CHANCE EAU VIVE Eau de Toilette",
    brand: "CHANEL",
    keyNotes: ["Grapefruit", "Blood Orange", "Jasmine", "Cedarwood", "Iris"],
    fragranceFamily: "Citrus Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Energetic and optimistic daytime wear",
    link: "https://amzn.to/4cYOaQe",
    img: "https://m.media-amazon.com/images/I/412JvhpBDAL._SX679_.jpg",
  },
  {
    name: "CHANEL COCO Eau de Toilette",
    brand: "CHANEL",
    keyNotes: [
      "Mandarin",
      "Jasmine",
      "Orange Blossom",
      "Tonka Bean",
      "Patchouli",
    ],
    fragranceFamily: "Oriental Spicy",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Timeless and sophisticated evening wear",
    link: "https://amzn.to/3Q17aUu",
    img: "https://m.media-amazon.com/images/I/41TAeggXz0L._SX679_.jpg",
  },
  {
    name: "Armani Code",
    brand: "Giorgio Armani",
    keyNotes: ["Orange Blossom", "Jasmine", "Honey", "Vanilla", "Sandalwood"],
    fragranceFamily: "Floral Oriental",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Sensual and mysterious evening wear",
    link: "https://amzn.to/3Q3FVZp",
    img: "https://m.media-amazon.com/images/I/51wkVt1d9tL._SY879_.jpg",
  },
  {
    name: "Marc Jacobs Fragrances Daisy",
    brand: "Marc Jacobs",
    keyNotes: [
      "Strawberry",
      "Violet Leaves",
      "Jasmine",
      "White Woods",
      "Vanilla",
    ],
    fragranceFamily: "Floral Fruity",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "Playful and feminine daytime wear",
    link: "https://amzn.to/3Q1dETo",
    img: "https://m.media-amazon.com/images/I/61FfBDRzdOL._SX679_.jpg",
  },
  {
    name: "Viva La Juicy",
    brand: "Juicy Couture",
    keyNotes: ["Wild Berries", "Mandarin", "Honeysuckle", "Gardenia", "Amber"],
    fragranceFamily: "Floral Fruity Gourmand",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "Sweet and playful everyday wear",
    link: "https://amzn.to/3JirY69",
    img: "https://m.media-amazon.com/images/I/51ZrDm-PvpL._SX679_.jpg",
  },
  {
    name: "L'eau D'issey (Issey Miyake)",
    brand: "Issey Miyake",
    keyNotes: ["Lotus", "Freesia", "Cyclamen", "Rose Water", "White Musk"],
    fragranceFamily: "Floral Aquatic",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "Fresh and aquatic everyday wear",
    link: "https://amzn.to/3JgtdCS",
    img: "https://m.media-amazon.com/images/I/51YQZMM4uXL._SX679_.jpg",
  },
  {
    name: "Prada CANDY Eau de Parfum",
    brand: "Prada",
    keyNotes: ["Caramel", "Musk", "Vanilla", "Benzoin", "Powdery Notes"],
    fragranceFamily: "Oriental Vanilla",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Playful and sweet everyday wear",
    link: "https://amzn.to/441HVHG",
    img: "https://m.media-amazon.com/images/I/41ttATVtW+L.jpg",
  },
  {
    name: "Dolce&Gabbana Devotion Eau de Parfum",
    brand: "Dolce&Gabbana",
    keyNotes: ["Pear", "Tuberose", "Vanilla", "Sandalwood", "Cashmeran"],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Luxurious and romantic evenings",
    link: "https://amzn.to/3vT6B8s",
    img: "https://m.media-amazon.com/images/I/618WRs5Cf4L._SX522_.jpg",
  },

  {
    name: "Valentino Voce Viva Eau de Parfum",
    brand: "Valentino",
    keyNotes: ["Italian Bergamot", "Orange Blossom", "Crystal Moss", "Vanilla"],
    fragranceFamily: "Floral",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Empowering and elegant moments",
    link: "https://amzn.to/4415Jer",
    img: "https://m.media-amazon.com/images/I/61GTC8UCziL._SX679_.jpg",
  },
  {
    name: "Yves Saint Laurent Mon Paris Intensement Eau de Parfum",
    brand: "Yves Saint Laurent",
    keyNotes: [
      "Raspberry",
      "Datura Flower",
      "White Peony",
      "Patchouli",
      "White Musk",
    ],
    fragranceFamily: "Chypre Fruity",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Passionate and intense moments",
    link: "https://amzn.to/3xIUYkU",
    img: "https://m.media-amazon.com/images/I/51zKNy8HZ0L._SX679_.jpg",
  },
  {
    name: "Jimmy Choo Illicit",
    brand: "Jimmy Choo",
    keyNotes: [
      "Ginger",
      "Bitter Orange",
      "Rose",
      "Jasmine Sambac",
      "Honey",
      "Amber",
      "Sandalwood",
    ],
    fragranceFamily: "Floral Fruity",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$",
    bestFor: "Confident and daring everyday wear",
    link: "https://amzn.to/3JkF2YY",
    img: "https://m.media-amazon.com/images/I/71aEmZ04HnL._SX679_.jpg",
  },
  {
    name: "BYREDO Mojave Ghost Eau de Parfum",
    brand: "BYREDO",
    keyNotes: [
      "Ambrette",
      "Violet",
      "Sandalwood",
      "Magnolia",
      "Chantilly Musk",
    ],
    fragranceFamily: "Woody Floral Musk",
    gender: "Unisex",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Bohemian and free-spirited individuals",
    link: "https://amzn.to/3JkqIQ2",
    img: "https://m.media-amazon.com/images/I/61yLq5PpIrL._SY879_.jpg",
  },
  {
    name: "Burberry Her Elixir de Parfum",
    brand: "Burberry",
    keyNotes: ["Blackberry", "Jasmine", "Vanilla", "Musk"],
    fragranceFamily: "Oriental Fruity",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Sophisticated and seductive evenings",
    link: "https://amzn.to/3Q47GRP",
    img: "https://m.media-amazon.com/images/I/51Xta1XRqjL._SX679_.jpg",
  },
  {
    name: "Creed Silver Mountain Water",
    brand: "Creed",
    keyNotes: [
      "Bergamot",
      "Mandarin",
      "Green Tea",
      "Blackcurrant",
      "Musk",
      "Ambergris",
    ],
    fragranceFamily: "Fresh",
    gender: "Unisex",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Refreshing and invigorating moments",
    link: "https://amzn.to/3xKFugf",
    img: "https://m.media-amazon.com/images/I/61xTlzjgZDL._SX522_.jpg",
  },
  {
    name: "Jo Malone London™ Blackberry & Bay Cologne",
    brand: "Jo Malone London™",
    keyNotes: ["Blackberry", "Bay Leaves", "Cedarwood"],
    fragranceFamily: "Fruity",
    gender: "Unisex",
    intensity: "Light",
    priceRange: "$$$",
    bestFor: "Fresh and casual occasions",
    link: "https://amzn.to/3QpYS99",
    img: "https://m.media-amazon.com/images/I/51ZZUqTpshL._SX679_.jpg",
  },
  {
    name: "ARMANI beauty Sì Eau de Parfum",
    brand: "ARMANI beauty",
    keyNotes: ["Blackcurrant", "Rose", "Vanilla", "Patchouli"],
    fragranceFamily: "Chypre Fruity",
    gender: "Women",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Sophisticated and confident occasions",
    link: "https://amzn.to/3JfiZmm",
    img: "https://m.media-amazon.com/images/I/71o8GE+ZCpL._SX679_.jpg",
  },
  {
    name: "TOM FORD Private Blend Oud Wood Eau de Parfum Travel Spray",
    brand: "TOM FORD",
    keyNotes: ["Oud Wood", "Rosewood", "Cardamom", "Tonka Bean", "Amber"],
    fragranceFamily: "Woody Oriental",
    gender: "Unisex",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Luxurious and exotic moments",
    link: "https://amzn.to/3xDbwLl",
    img: "https://m.media-amazon.com/images/I/71CbX87TKdL._SX679_.jpg",
  },
  {
    name: "Jo Malone London™ Scarlet Poppy Cologne Intense",
    brand: "Jo Malone London™",
    keyNotes: ["Poppy", "Agarwood", "Tonka Bean", "Ambrette", "Cypress"],
    fragranceFamily: "Floral Oriental",
    gender: "Unisex",
    intensity: "Intense",
    priceRange: "$$$",
    bestFor: "Mysterious and captivating moments",
    link: "https://amzn.to/4cQxhrf",
    img: "https://m.media-amazon.com/images/I/7105x44zzGL._SX679_.jpg",
  },
  {
    name: "Creed Millésime Imperial Fragrance",
    brand: "Creed",
    keyNotes: ["Sea Salt", "Citrus", "Fruit", "Marine", "Ambergris"],
    fragranceFamily: "Marine",
    gender: "Unisex",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Elegant and refreshing occasions",
    link: "https://amzn.to/441cixH",
    img: "https://m.media-amazon.com/images/I/71PN4MCvccL._SX522_.jpg",
  },
  {
    name: "Givenchy L'Interdit Eau de Parfum Rouge",
    brand: "Givenchy",
    keyNotes: ["Bergamot", "Rose", "Poppy", "Patchouli", "Tuberose"],
    fragranceFamily: "Floral Oriental",
    gender: "Women",
    intensity: "Moderate",
    priceRange: "$$$",
    bestFor: "Bold and passionate moments",
    link: "https://amzn.to/4ayPR5z",
    img: "https://m.media-amazon.com/images/I/51BmqWiI-9L._SX679_.jpg",
  },
];

export default popularPerfumes;
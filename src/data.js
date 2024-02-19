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
      },
      {
        name: "Yves Saint Laurent Mon Paris Eau de Parfum",
        brand: "Yves Saint Laurent",
        keyNotes: ["Strawberry", "Raspberry", "Pear", "Datura", "White Peony", "Patchouli", "White Musk"],
        fragranceFamily: "Chypre Fruity",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Romantic occasions",
      },
      {
        name: "Dior J'adore Eau de Parfum",
        brand: "Dior",
        keyNotes: ["Ylang-Ylang", "Damascus Rose", "Jasmine Grandiflorum", "Indian Tuberose"],
        fragranceFamily: "Floral",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Special occasions",
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
      },
      {
        name: "CHANEL N°5 Eau de Parfum",
        brand: "Chanel",
        keyNotes: ["Aldehydes", "Bergamot", "Jasmine", "Rose", "Vanilla"],
        fragranceFamily: "Floral Aldehyde",
        gender: "Women",
        intensity: "Intense",
        priceRange: "$$$",
        bestFor: "Timeless elegance",
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
      },
      {
        name: "Versace Bright Crystal Absolu",
        brand: "Versace",
        keyNotes: ["Yuzu", "Pomegranate", "Raspberry", "Peony", "Magnolia", "Amber"],
        fragranceFamily: "Floral Fruity",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Romantic evenings",
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
      },
      {
        name: "Versace Eros Pour Femme Eau de Parfum",
        brand: "Versace",
        keyNotes: ["Sicilian Lemon", "Calabrian Bergamot", "Pomegranate", "Peony", "Jasmine", "White Musk"],
        fragranceFamily: "Floral Fruity",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Glamorous evenings",
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
      },
      {
        name: "Valentino Donna Born In Roma Intense Eau de Parfum Travel Spray",
        brand: "Valentino",
        keyNotes: ["Blackcurrant", "Jasmine", "Vanilla Bourbon", "Leather Accord"],
        fragranceFamily: "Floral Oriental",
        gender: "Women",
        intensity: "Intense",
        priceRange: "$$$",
        bestFor: "On-the-go drama",
      },
      {
        name: "Gucci Bamboo Eau de Parfum",
        brand: "Gucci",
        keyNotes: ["Italian Bergamot", "Casablanca Lily", "Ylang-Ylang", "Sandalwood", "Amber"],
        fragranceFamily: "Floral Woody",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Timeless elegance",
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
      },
      {
        name: "NEST New York Indigo Eau de Parfum",
        brand: "NEST New York",
        keyNotes: ["Moroccan Tea", "Wild Fig", "Bergamot", "Kashmir Wood", "Cardamom"],
        fragranceFamily: "Fresh",
        gender: "Unisex",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Everyday elegance",
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
      },
      {
        name: "Dolce&Gabbana Dolce Violet Eau de Toilette Travel Spray",
        brand: "Dolce&Gabbana",
        keyNotes: ["Neroli", "Mandarin", "Violet", "Musk", "Cedarwood"],
        fragranceFamily: "Floral",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$",
        bestFor: "Delicate floral elegance on the go",
      },
      {
        name: "Gucci Guilty Pour Femme Eau de Parfum Intense",
        brand: "Gucci",
        keyNotes: ["Blackberry", "Bulgarian Rose", "Patchouli", "Goldenwood"],
        fragranceFamily: "Floral Oriental",
        gender: "Women",
        intensity: "Intense",
        priceRange: "$$$",
        bestFor: "Sensual and captivating allure",
      },
      {
        name: "Henry Rose Char Eau de Parfum",
        brand: "Henry Rose",
        keyNotes: ["Black Currant", "Bergamot", "Rose", "Patchouli", "Sandalwood"],
        fragranceFamily: "Floral",
        gender: "Unisex",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Timeless sophistication",
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
      },
      {
        name: "Yves Saint Laurent Libre Eau de Parfum & Lash Clash Mascara Set",
        brand: "Yves Saint Laurent",
        keyNotes: ["Lavender", "Orange Blossom", "Vanilla", "Mascara"],
        fragranceFamily: "Fougère Oriental",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Empowered elegance with standout lashes",
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
      },
      {
        name: "Montblanc Legend",
        brand: "Montblanc",
        keyNotes: ["Bergamot", "Lavender", "White Cedarwood", "Oakmoss", "Tonka Bean"],
        fragranceFamily: "Fougère",
        gender: "Men",
        intensity: "Moderate",
        priceRange: "$$",
        bestFor: "Classic and timeless sophistication",
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
      },
      {
        name: "Jimmy Choo Fever",
        brand: "Jimmy Choo",
        keyNotes: ["Black Plum", "Litchi", "Grapefruit", "Vanilla Orchid", "Roasted Tonka Bean"],
        fragranceFamily: "Oriental Vanilla",
        gender: "Women",
        intensity: "Intense",
        priceRange: "$$",
        bestFor: "Sultry and captivating evening wear",
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
      },
      {
        name: "CHANEL COCO Eau de Toilette",
        brand: "CHANEL",
        keyNotes: ["Mandarin", "Jasmine", "Orange Blossom", "Tonka Bean", "Patchouli"],
        fragranceFamily: "Oriental Spicy",
        gender: "Women",
        intensity: "Intense",
        priceRange: "$$$",
        bestFor: "Timeless and sophisticated evening wear",
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
      },
      {
        name: "Marc Jacobs Fragrances Daisy",
        brand: "Marc Jacobs",
        keyNotes: ["Strawberry", "Violet Leaves", "Jasmine", "White Woods", "Vanilla"],
        fragranceFamily: "Floral Fruity",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$",
        bestFor: "Playful and feminine daytime wear",
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
      },
      {
        name: "Yves Saint Laurent Mon Paris Eau de Parfum",
        brand: "Yves Saint Laurent",
        keyNotes: ["Strawberry", "Raspberry", "Pear", "Datura", "White Peony", "Patchouli", "White Musk"],
        fragranceFamily: "Chypre Fruity",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Romantic and passionate occasions",
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
      },  {
        name: "Yves Saint Laurent Mon Paris Intensement Eau de Parfum",
        brand: "Yves Saint Laurent",
        keyNotes: ["Raspberry", "Datura Flower", "White Peony", "Patchouli", "White Musk"],
        fragranceFamily: "Chypre Fruity",
        gender: "Women",
        intensity: "Intense",
        priceRange: "$$$",
        bestFor: "Passionate and intense moments",
      },
      {
        name: "Jimmy Choo Illicit",
        brand: "Jimmy Choo",
        keyNotes: ["Ginger", "Bitter Orange", "Rose", "Jasmine Sambac", "Honey", "Amber", "Sandalwood"],
        fragranceFamily: "Floral Fruity",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$",
        bestFor: "Confident and daring everyday wear",
      },
      {
        name: "BYREDO Mojave Ghost Eau de Parfum",
        brand: "BYREDO",
        keyNotes: ["Ambrette", "Violet", "Sandalwood", "Magnolia", "Chantilly Musk"],
        fragranceFamily: "Woody Floral Musk",
        gender: "Unisex",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Bohemian and free-spirited individuals",
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
      },{
        name: "Creed Silver Mountain Water",
        brand: "Creed",
        keyNotes: ["Bergamot", "Mandarin", "Green Tea", "Blackcurrant", "Musk", "Ambergris"],
        fragranceFamily: "Fresh",
        gender: "Unisex",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Refreshing and invigorating moments",
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
      },
      {
        name: "Tory Burch Eau de Parfum Spray",
        brand: "Tory Burch",
        keyNotes: ["Neroli", "Grapefruit", "Cassis", "Jasmine Sambac", "Vetiver", "Sandalwood"],
        fragranceFamily: "Floral Fruity",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Casual and elegant occasions",
      },
      {
        name: "Le Labo Bergamote 22 Eau de Parfum",
        brand: "Le Labo",
        keyNotes: ["Bergamot", "Grapefruit", "Orange Blossom", "Amber", "Musk"],
        fragranceFamily: "Citrus Aromatic",
        gender: "Unisex",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Energetic and uplifting moments",
      },
      {
        name: "Marc Jacobs Daisy Eau So Fresh Pop Eau de Toilette (Limited Edition)",
        brand: "Marc Jacobs",
        keyNotes: ["Mandarin", "Red Currant", "Violet", "Apple Blossom", "Cedarwood"],
        fragranceFamily: "Floral Fruity",
        gender: "Women",
        intensity: "Moderate",
        priceRange: "$$$",
        bestFor: "Fun and vibrant occasions",
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
      },
  ];

  
  
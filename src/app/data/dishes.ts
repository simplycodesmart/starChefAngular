export interface Dish {
  name: string
  rating: number
  description: string
  equipments: string[]
  image: string
  id: number,
  dishPreparation: DishDisc,
  type: 'vegetarian' | 'nonVeg'
}

export interface DishDisc {
  timeToPrepare: string
  ingredients: Ingredients
}

export interface Ingredients {
  vegetables: Vegetable[]
  spices: Spice[]
  appliances: Appliance[]
}

export interface Vegetable {
  name: string
  quantity: string
}

export interface Spice {
  name: string
  quantity: string
}

export interface Appliance {
  name: string
  image: string
}


export const dishesData: Dish[] = [{
  name: 'Achari Paneer Tikka',
  type: 'vegetarian',
  id: 1,
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Chicken 65 Boneless',
  id: 1, type: 'nonVeg',
  image: 'assets/images/dishes/chicken_65_boneless.jfif',
  rating: 4.5,
  description: '. The flavour of the dish can be attributed to red chillies, but the exact set of ingredients for the recipe can vary. It is prepared using boneless chicken and is usually served with an onion and lemon garnish ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1.5 Hours',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Dragon Chicken Drumsticks',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/chicken_drums.jfif',
  rating: 3,
  description: 'Served with the option of 2 pcs, 4 pcs the chicken legs are mainted, fried in a spicy and tangy sauce to create an explosion of flavours.',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1.3 Hours',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
},
{
  name: 'Achari Paneer Tikka',
  id: 1, type: 'vegetarian',
  image: 'assets/images/dishes/achari_paneer_tikka.jfif',
  rating: 4.1,
  description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. ',
  equipments: ["Refrigerator", "Microwave"],
  dishPreparation: {
    timeToPrepare: '1 Hour',
    ingredients: {
      vegetables: [{ "name": "Cauliflower", "quantity": "1" }, { "name": "Tomato", "quantity": "10" }, { "name": "Spinach", "quantity": "1/2 Kg" }],
      spices: [{ "name": "Coriander", "quantity": "100 gm" }, { "name": "Mustard Oil", "quantity": "1/2 litres" }],
      appliances: [{ "name": "Refrigerator", "image": "" }]
    }
  }
}]

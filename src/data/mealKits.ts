export type MealKit = {
    id: string;
    name: string;
    ingredients: {
      id: number;
      name: string;
      quantity: string; 
      price: number;
    }[];
    recipe: string;
    image?: string;
  };

  
  export const mealKits: MealKit[] = [
    {
      id: 'kit-1',
      name: 'Tomato Rice Meal',
      ingredients: [
        { id: 10, name: 'Basmati Rice', quantity: '200g', price:120 },
        { id: 14, name: 'Tomatoes', quantity: '3', price: 30 },
        { id: 27, name: 'Spice Mix Box', quantity: '1 tablespoon', price: 80 },
      ],
      recipe: `
  1️⃣ Rinse 200g Basmati Rice and cook until fluffy.
  2️⃣ Chop 3 fresh tomatoes finely.
  3️⃣ In a pan, heat oil and fry the spice mix for 1 min.
  4️⃣ Add chopped tomatoes; cook till soft.
  5️⃣ Mix in cooked rice and stir well.
     Serve hot with raita or pickle.`,
      image: 'https://assets.bonappetit.com/photos/5f315fa5459e181dafb1c526/1:1/w_4420,h_4420,c_limit/HLY-FMC-Tomato-Rice-16x9.jpg',
    },
  
    {
      id: 'kit-2',
      name: 'Cheesy Veg Sandwich',
      ingredients: [
        { id: 5, name: 'Wheat Bread', quantity: '4 slices', price: 95 },
        { id: 4, name: 'Vegan Cheese', quantity: '4 slices', price: 100 },
        { id: 14, name: 'Tomatoes', quantity: '1', price: 30 },
        { id: 23, name: 'Onions', quantity: '1', price: 50 },
        { id: 24, name: 'Coriander', quantity: 'for garnish', price: 30 },
      ],
      recipe:`
    1️⃣Layer vegan cheese, sliced tomatoes, and onions between bread slices. 
    2️⃣Grill or toast until golden. 
    3️⃣Garnish with coriander and serve hot.`,
      image: 'https://wiproappliances.com/cdn/shop/articles/Veg_grilled_cheese_sandwich.jpg?v=1714126819',
    },
    {
      id: 'kit-3',
      name: 'Avocado Spinach Toast',
      ingredients: [
        { id: 20, name: 'Avocado', quantity: '1', price: 160 },
        { id: 8, name: 'Spinach', quantity: '50g', price: 30 },
        { id: 5, name: 'Wheat Bread', quantity: '2 slices', price: 95 },
        { id: 22, name: 'Fresh Lemons', quantity: '1 teaspoon juice', price: 50 },
      ],
      recipe: `
    1️⃣ Toast the wheat bread slices until golden and crisp.
    2️⃣ Mash the avocado with lemon juice, salt, and pepper.
    3️⃣ Lightly sauté spinach in a pan until wilted.
    4️⃣ Spread the mashed avocado on the toast and top with the sautéed spinach.
    5️⃣ Optional: Sprinkle chili flakes for an extra kick. Serve fresh!
      `,
      image: 'https://i.redd.it/grilled-cheese-sandwich-with-avocado-fig-and-baby-spinach-v0-q8t2nutf5xzb1.jpg?width=3408&format=pjpg&auto=webp&s=68b43d3a58d373c257f7658bc312be217fc1ad0c'
    },
    {
      id: 'kit-4',
      name: 'Broccoli & Bell Pepper Stir Fry',
      ingredients: [
        { id: 3, name: 'Broccoli', quantity: '200g', price: 90 },
        { id: 6, name: 'Bell Pepper', quantity: '1 large', price: 40 },
        { id: 27, name: 'Spice Mix', quantity: '1 tablespoon', price: 80 },
        { id: 9, name: 'Unsalted butter', quantity: '1 teaspoon', price: 100 },
      ],
      recipe: `
    1️⃣ Cut broccoli into florets and slice the bell pepper.
    2️⃣ Heat unsalted butter in a pan and add the veggies.
    3️⃣ Stir fry for 5-7 minutes until slightly tender.
    4️⃣ Add spice mix and toss well to coat.
    5️⃣ Serve hot as a side dish or with cooked quinoa/rice.
      `,
      image: 'https://foodandstyle.com/wp-content/uploads/2012/10/IMG_0159-Saut%C3%A9ed-broccoli-with-yellow-and-red-bell-peppers-750.jpg'
    },
    {
      id: 'kit-5',
      name: 'Oats & Greek Yogurt Parfait',
      ingredients: [
        { id: 19, name: 'Oats', quantity: '50g', price: 80 },
        { id: 25, name: 'Greek Yogurt', quantity: '150g', price: 120 },
        { id: 7, name: 'Bananas', quantity: '1 sliced', price: 70 },
        { id: 11, name: 'Mangoes', quantity: 'Half, diced', price: 500 },
      ],
      recipe: `
    1️⃣ In a glass or bowl, layer oats at the bottom.
    2️⃣ Add a layer of Greek yogurt.
    3️⃣ Top with sliced bananas and diced mango.
    4️⃣ Repeat the layers if needed and finish with a drizzle of honey or nuts (optional).
    5️⃣ Serve chilled for a refreshing breakfast or snack.
      `,
      image: 'https://www.haylskitchen.com/wp-content/uploads/2020/09/Hot-Parfait-Greek-Yogurt-Protein-Oats-1.jpg'
    },
    {
      id: 'kit-6',
      name: 'Vegetable & Quinoa Salad',
      ingredients: [
        { id: 25, name: 'Quinoa', quantity: '150g', price: 180 },
        { id: 16, name: 'Cucumbers', quantity: '1, diced', price: 30 },
        { id: 24, name: 'Coriander', quantity: 'Handful, chopped', price: 30 },
        { id: 14, name: 'Tomatoes', quantity: '2, chopped', price: 30 },
        { id: 22, name: 'Fresh Lemons', quantity: 'Juice of 1', price: 50 },
      ],
      recipe: `
    1️⃣ Rinse and cook quinoa according to package instructions; let it cool.
    2️⃣ In a bowl, combine quinoa, diced cucumbers, chopped tomatoes, and coriander.
    3️⃣ Add lemon juice, salt, and pepper to taste.
    4️⃣ Mix well and chill for 15 minutes before serving.
    5️⃣ A perfect light lunch or side dish!
      `,
      image: 'https://www.seriouseats.com/thmb/2M0bpXFGsR3CsapBJM3FIkeJzYM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__10__20141022-quinoa-tomato-cucumber-salad1-3ada7fefc6f042efae631c789e086250.jpg'
    },
    {
      id: 'kit-7',
      name: 'Mango Oats Smoothie',
      ingredients: [
        { id: 11, name: 'Mangoes', quantity: '1 large, peeled and chopped', price: 500 },
        { id: 19, name: 'Oats', quantity: '3 tablespoons', price: 80 },
        { id: 2, name: 'Organic Milk', quantity: '200ml', price: 50 },
        { id: 25, name: 'Greek Yogurt', quantity: '100g', price: 120 },
      ],
      recipe: `
    1️⃣ In a blender, combine chopped mango, oats, milk, and Greek yogurt.
    2️⃣ Blend until smooth and creamy.
    3️⃣ Chill for 10 minutes or serve immediately.
    4️⃣ Optional: Add a pinch of cardamom or cinnamon for extra flavor.
    5️⃣ A filling and nutritious breakfast drink!
      `,
      image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/05/Mango-Smoothie-Thumbnail.jpg'
    },
    {
      id: 'kit-8',
      name: 'Chilled Watermelon Refresher',
      ingredients: [
        { id: 17, name: 'Watermelon', quantity: '2 cups, cubed and deseeded', price: 40 },
        { id: 39, name: 'Mint Leaves', quantity: '5–6 leaves', price: 5 },
        { id: 22, name: 'Lemon Juice', quantity: '1 tablespoon', price: 5 },
      ],
      recipe: `
    1️⃣ In a blender, add watermelon cubes, mint leaves, lemon juice, and honey (if using).
    2️⃣ Blend until smooth and frothy.
    3️⃣ Strain if desired, or serve as-is for more fiber.
    4️⃣ Pour into glasses over ice cubes.
    5️⃣ Garnish with a mint sprig. A perfect summer cooler ready in 5 minutes!
      `,
      image: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/06/watermelon-juice.jpg'
    }
    
  ];
  
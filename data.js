const data = [
    {
      groceryItem: 'Apple',
      price: '$2.99',
      category: 'Produce',
      src: require('./assets/apples.jpg'),
      id: Math.floor(Math.random() * 100) + 1
    },
    {
      groceryItem: 'Pear',
      price: '$2.49',
      category: 'Produce',
      src: require('./assets/pear.jpg'),
      id: Math.floor(Math.random() * 100) + 1
    },
    {
      groceryItem: 'Banana',
      price: '$0.99',
      category: 'Produce',
      src: require('./assets/banana.jpg'),
      id: Math.floor(Math.random() * 100) + 1
    },
    {
      groceryItem: 'Carrot',
      price: '$2.49',
      category: 'Produce',
      src: require('./assets/carrot.jpg'),
      id: Math.floor(Math.random() * 100) + 1
    },
    {
      groceryItem: 'Lettuce',
      price: '$3.99',
      category: 'Produce',
      src: require('./assets/lettuce.jpg'),
      id: Math.floor(Math.random() * 100) + 1
    },
    {
      groceryItem: 'Milk',
      price: '$2.99',
      category: 'Dairy',
      src: require('./assets/milk.jpg'),
      id: Math.floor(Math.random() * 100) + 1
    }
  ];

export { data }
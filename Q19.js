function TotalPrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    return total;
  }
  let products = [
    { name: 'Apple', price: 0.5 },
    { name: 'Orange', price: 0.8 },
    { name: 'Banana', price: 0.3 }
  ];
  console.log(TotalPrice(products));
type GroceryStore<X, Y> = {
  name: X;
  city: Y;
};

type GroceryItem<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

type CapreseSalad = GroceryItem<"Caprese Salad", 14.99, true>;

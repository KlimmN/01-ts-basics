// Оголошуємо інтерфейс
interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

// Використовуємо інтерфейс для типізації
const product: Product = {
  id: 1,
  title: 'Tablet',
  description: 'Compact and fast',
};

console.log(`Product: ${JSON.stringify(product)}`);

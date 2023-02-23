const MAX_PRICE = 25000

type Product = {
  id: number,
  price: number,
  name: string,
}

export const product: Product = {
  id: 1,
  price: 22494,
  name: 'carro de juguete'
}

if (product.price <= MAX_PRICE && product.name.length <= 20) {
  // POST
} else {
  // 
}


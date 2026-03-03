import { useEffect, useState } from "react"

type ProductType = {
  id: string
  name: string
  price: number
  size: string
  category: string
  image: string
}

const kategori = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data)
      })
      .catch((error) => {
        console.error("Error fetching produk:", error)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Daftar Produk</h1>

      <button onClick={fetchProducts} style={{ marginBottom: "20px" }}>
        Refresh Data
      </button>

      {products.map((product:ProductType) => (
        <div key={product.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0", marginBottom: "10px" }}>
          <h3>{product.name}</h3>
          <p>Harga: Rp {product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Kategori: {product.category}</p>
          <img src={product.image} alt={product.name} style={{ maxWidth: "200px", marginTop: "10px" }} />
        </div>
      ))}
    </div>
  )
}

export default kategori
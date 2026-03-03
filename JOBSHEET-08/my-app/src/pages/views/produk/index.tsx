import styles from "../../produk/product.module.scss"

type ProductType = {
  id: string
  name: string
  price: number
  size: string
  category: string
  image: string
}

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {products.map((products: ProductType) => (
          <div key={products.id} className={styles.produk__content__item}>
            <div className={styles.produk__content__item__image}>
              <img src={products.image} alt={products.name} width={200} />
            </div>
            <h4 className={styles.produk__content__item__name}>
              {products.name}
            </h4>
            <p className={styles.produk__content__item__category}>
              {products.category}
            </p>
            <p className={styles.produk__content__item__size}>
              Size: {products.size}
            </p>
            <p className={styles.produk__content__item__price}>
              {products.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TampilanProduk
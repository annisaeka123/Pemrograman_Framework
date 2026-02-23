import { useRouter } from "next/router"

const halamanToko = () => {
//   const Router = useRouter()
//   console.log(Router)
  const { query } = useRouter()
  return (
    <div>
      <h1>Halaman Shop</h1>

      {/* <p>Toko: {`${query.slug && query.slug[0]+"-"+query.slug[1]}`}</p> (masih ada keterengan undefined pada halaman) */}
      
      <p>Toko: {query.slug && `${query.slug[0]}-${query.slug[1]}`}</p> {/* Jika slug ada, baru jalankan string backtick-nya.*/}

    </div>
  )
}

export default halamanToko

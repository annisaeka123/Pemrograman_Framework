import { useRouter } from "next/router"

const halamanToko = () => {
//   const Router = useRouter()
//   console.log(Router)
  const { query } = useRouter()
  return (
    <div>
      <h1>Halaman Shop</h1>
      <p>Toko: {`${query.slug && query.slug[0]+"-"+query.slug[1]}`}</p> {/* menggunakan backtick (`) bukan petik satu (') */}
      {/* query.slug[0] untuk mengambil bagian pertama dari slug */}
      {/* query.slug[1] untuk mengambil bagian kedua dari slug */}
    </div>
  )
}

export default halamanToko

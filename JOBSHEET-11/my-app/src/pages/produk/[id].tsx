import { useRouter } from "next/router"
import TampilanProduk from "../../views/produk"
import useSWR from "swr"
import fetcher from "../../utils/swr/fetcher"

const HalamanProduk = () => {
    // const Router = useRouter()
    // console.log(Router)
    const { query } = useRouter()
    const { data, error, isLoading } = useSWR(
        query.id ? `/api/produk?kategori=${query.id}` : null, 
        fetcher
    )

    return (
        <div>
            <h1>Halaman Produk {query.id}</h1>
            <TampilanProduk products={isLoading ? [] : data?.data || []} />
        </div>
    )
}

export default HalamanProduk

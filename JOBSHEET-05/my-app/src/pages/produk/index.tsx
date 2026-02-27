import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const produk = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => { 
        const loginStatus = localStorage.getItem("isLogin")

        if (loginStatus !== "true") {
            router.replace("/auth/login") //Redirect otomatis jika belum login
        } else {
            setLoading(false)
        }
    }, [router])

    if (loading) return <div>Loading...</div>

    return (
        <div>Produk User Page</div>
    )
}

export default produk

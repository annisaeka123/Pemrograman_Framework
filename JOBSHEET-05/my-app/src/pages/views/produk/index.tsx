import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import HeroSection from "./heroSection"
import MainSection from "./mainSection"

const Produk = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin")

    if (loginStatus !== "true") {
      router.replace("/auth/login")
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return <div className="text-center py-10">Loading...</div>

  return (
    <div>
      <HeroSection />
      <MainSection />
    </div>
  )
}

export default Produk
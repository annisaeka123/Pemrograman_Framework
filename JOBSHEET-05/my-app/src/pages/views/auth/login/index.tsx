import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./login.module.css"

const halamanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        localStorage.setItem("isLogin", "true")
        push("/produk")
    }
    return (
        <div className={styles.login}>
            <h1>Halaman Login</h1>
            <button onClick={()=> handlerLogin()}>Login</button> <br />
            <h1 style={{ color: "red",border:"1px solid red", borderRadius: "5px",padding: "5px",}}>Belum Punya Akun</h1> <br />
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    )
}

export default halamanLogin
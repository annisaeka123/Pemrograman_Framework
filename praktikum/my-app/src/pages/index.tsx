import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Praktikum Next.js Pages Router</title>
      </Head>

      <main className={`${styles.container} ${inter.className}`}>
        <h1 className={styles.title}>
          Praktikum Next.js Pages Router
        </h1>

        <p className={styles.subtitle}>
          Annisa – Mahasiswa D4 Pengembangan Web
        </p>

        <Link href="/about" className={styles.link}>
          About Annisa
        </Link>

        <section className={styles.section}>
  <h2>Pertanyaan Refleksi</h2>

  <ol>
    {/* ======================= */}
    <li>
      <strong>Mengapa Pages Router disebut sebagai routing berbasis file?</strong>

      <p>
        Pages Router disebut sebagai routing berbasis file karena sistem URL
        pada aplikasi ditentukan langsung dari struktur folder dan nama file
        di dalam folder <code>pages</code>.
      </p>

      <p>
        Setiap file yang dibuat di dalam folder <code>pages</code> otomatis
        menjadi sebuah route tanpa perlu konfigurasi tambahan.
      </p>

      <pre className={styles.codeBlock}>
{`pages/
 ├── index.js
 ├── about.js
 ├── contact.js`}
      </pre>

      <pre className={styles.codeBlock}>
{`/          -> index.js
/about      -> about.js
/contact    -> contact.js`}
      </pre>
    </li>

    {/* ======================= */}
    <li>
      <strong>Perbedaan Next.js dengan React (CRA)</strong>

      <ul>
        <li>Next.js mendukung SSR, SSG, dan CSR.</li>
        <li>Routing otomatis berbasis file.</li>
        <li>Lebih optimal untuk SEO.</li>
        <li>Mendukung API Routes.</li>
        <li>CRA hanya mendukung Client Side Rendering.</li>
      </ul>
    </li>

    {/* ======================= */}
    <li>
      <strong>Fungsi npm run dev</strong>

      <p>
        Perintah <code>npm run dev</code> digunakan untuk menjalankan project
        dalam mode development.
      </p>

      <ul>
        <li>Menjalankan server lokal.</li>
        <li>Biasanya diakses melalui <code>http://localhost:3000</code>.</li>
        <li>Mendukung hot reload.</li>
        <li>Digunakan saat proses pengembangan.</li>
      </ul>
    </li>

    {/* ======================= */}
    <li>
      <strong>Perbedaan npm run dev dan npm run build</strong>

      <p><strong>npm run dev:</strong></p>
      <ul>
        <li>Untuk development.</li>
        <li>Hot reload aktif.</li>
        <li>Belum dioptimasi.</li>
      </ul>

      <p><strong>npm run build:</strong></p>
      <ul>
        <li>Untuk production.</li>
        <li>File dioptimasi dan diperkecil.</li>
        <li>Siap untuk deploy.</li>
      </ul>

      <pre className={styles.codeBlock}>
{`npm run build
npm start`}
      </pre>
    </li>
  </ol>
</section>

      </main>
    </>
  );
}

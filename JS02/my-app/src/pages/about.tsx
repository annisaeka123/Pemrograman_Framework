import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <main className={inter.className}>
      <h1>Ini Halaman About</h1>
    </main>
  )
}
# PEMROGRAMAN BERBASIS FRAMEWORK - JOBSHEET 3 - CATCH-ALL ROUTING, OPTIONAL CATCH-ALL, LINKING & NAVIGATING PADA NEXT.JS PAGES ROUTER

Disusun oleh:  
Nama: Annisa Eka Puspita  
Kelas: TI-3D  
Absen: 04  
NIM: 2341720131  
PRODI D-IV TEKNIK INFORMATIKA  
JURUSAN TEKNOLOGI INFORMASI  
POLITEKNIK NEGERI MALANG  
2026

## A. Dasar Teori Singkat

1. **Segment & Slug pada URL**
   - URL dapat terdiri dari beberapa segmen, contoh: `/product/clothes/tops/t-shirt`
   - Setiap bagian dipisahkan oleh `/` dan disebut segmen.

2. **Catch-All Route**
   - Next.js memungkinkan menangkap semua segmen URL menggunakan: `[...slug].js`
   - Hasil parameter akan berbentuk array.

3. **Optional Catch-All Route**
   - Agar halaman tetap bisa diakses meskipun tanpa parameter: `[[...slug]].js`

4. **Navigasi di Next.js**
   - Deklaratif: Link dari `next/link`
   - Imperatif: `router.push()` dari `next/router`
## B. Langkah Kerja Praktikum

### Langkah 1 - Menjalankan Project
1. Buka folder project Next.js.
2. Jalankan server: `npm run dev`
3. Akses: [http://localhost:](http://localhost:)

### Langkah 2 - Membuat Catch-All Route
1. Masuk ke folder pages.
2. Buat folder shop dan file `[...slug].tsx`.
3. Modifikasi Isi file `[...slug].tsx` dengan kode berikut:  
   Cek menggunakan `console.log` apakah nilai segment berhasil didapat
   - Jalankan browser dan ketik urlnya sebagai berikut
   - Cek Vscode jika pada `console.log` dapat menampilkan nilai querynya berarti berhasil
   - Modifikasi `[...slug].tsx` untuk menampilkan nilai query

### Langkah 3 -
Akses URL berikut di browser:
- `/shop/clothes`
- `/shop/clothes/tops`
- `/shop/clothes/tops/t-shirt`

Jika dilihat ada yang terbaca undefined dan ada yang tidak terbaca ini dikarenakan segmennya dibatasi Cuma array[0] dan array[1]. Solusinya bagaimana?  
Modifikasi `[...slug].tsx` menjadi berikut  
Jalankan browser: Berapapun banyaknya segment tetap terbaca  
Untuk saat ini gunakan  

Perhatikan bahwa:
- slug berbentuk array
- Isi halaman berubah sesuai URL

### Langkah 4 - Optional Catch-All Route
1. Jika menggunakan `[...slug].js` maka ketika mengakses shop akan terjadi error
2. Solusinya dengan Rename file: `[...slug].js` → `[[...slug]].js`
3. Sekarang akses: `/shop`
4. Halaman dapat diakses meskipun tanpa parameter.

### Langkah 5 - Validasi Parameter
Tambahkan validasi agar tidak error saat slug kosong:

```html
<p>
Kategori: {slug ? slug[0] : "Semua Kategori"}
</p>
```

### Langkah 6 - Membuat Halaman Login & Register
1. Buat folder: `pages/auth`
2. Buat file:
   - `login.jsx`
   - `register.jsx`
3. Modifikasi
   - `login.jsx`:
   - `register.jsx`:

### Langkah 7 - Navigasi Imperatif (router.push)
1. Tambahkan button login:  
   Saat ini gunakan `onClick={() => handlerLogin()}`
2. Klik tombol dan perhatikan perpindahan halaman tanpa reload.
3. Jika di klik button login maka akan menuju `/produk`

```
★ Note: - Pastikan code untuk redirect tidak aktif, jika aktif maka ketika masuk ke produk akan langsung redirect ke login
```

### Langkah 8 - Simulasi Redirect (Belum Login)
1. Di halaman product, pada `index.tsx` tambahkan beberapa code berikut:
2. Jika Akses `/product` → otomatis diarahkan ke login.
## C. Tugas Praktikum

### Tugas 1
- Buat catch-all route: `/category/[...slug].js`
- Tampilkan seluruh parameter URL dalam bentuk list.

### Tugas 2
- Buat navigasi:
  - Login → Product (imperatif)
  - Login ↔ Register (Link)

### Tugas 3 (Pengayaan)
- Terapkan redirect otomatis ke login jika user belum login.

## D. Pertanyaan Refleksi
1. Apa perbedaan `[id].js` dan `[...slug].js`?
2. Mengapa slug berbentuk array?
3. Kapan sebaiknya menggunakan Link dan `router.push()`?
4. Mengapa navigasi Next.js tidak me-refresh halaman?



# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 6

# CUSTOM DOCUMENT DAN CUSTOM ERROR PAGE PADA NEXT.JS

```
Disusun oleh:
Nama: Annisa Eka Puspita
Kelas: TI-3D
Absen: 04
NIM: 2341720131


PRODI D-IV TEKNIK INFORMATIKA
JURUSAN TEKNOLOGI INFORMASI
POLITEKNIK NEGERI MALANG
2026
```

**A. Dasar Teori**

1. Custom Document
    
    _document.js digunakan untuk:
       
       ● Mengatur struktur dasar HTML (<html>, <head>, <body>)
       
       ● Menambahkan meta tag global (SEO, verification)
       
       ● Menambahkan CDN (Bootstrap, Font, Analytics)
    
    ★ **Catatan penting:**
      
      `<title>` tidak direkomendasikan ditaruh di _document.js, tetapi di masing-masing halaman.

2. Custom Error Page (404)
  
    Next.js memungkinkan kita membuat tampilan halaman error sendiri dengan membuat file:
       
       `pages/404.js`
    
    Halaman ini akan otomatis ditampilkan saat route tidak ditemukan.

---

**B. Langkah Praktikum**
1. Menjalankan Project
a. Buka folder project.
b. Jalankan:
c. npm run dev
d. Akses:
[http://localhost:](http://localhost:)
e. Jika saat dirun ada kendala tampilan index lama tampil Uninstall
package Tailwind
- npm uninstall tailwindcss postcss autoprefixer
- Hapus file config Tailwind
- tailwind.config.js
- postcss.config.js

2. Membuat Custom Document
● Masuk ke folder:
● Modifikasi pada folder pages _document.js
● Isi dengan kode berikut:
● Periksa di Inspect Element bahwa atribut lang="id" sudah berubah.

3. Pengaturan Title per Halaman
a. Buka pages/index.js.
b. Tambahkan:
Refresh halaman dan perhatikan judul tab browser.

4. Membuat Custom Error Page (404)

a. Di folder pages, buat file

- 404.tsx
- Isi kode:

b. Akses URL yang tidak ada, misalnya:
- /dashboard

5. Styling Halaman 404

  a. Buat file:

  - styles/404.module.scss
  - Tambahkan style:
  - Modifikasi kode pada pages/404.tsx:
  - Jalankan browser
  - Jika dijalankan masih ada navbarnya , untuk itu lakukan Handling Navbar di Halaman 404
  - Tambahkan `/404` pada disable navbar
  - Jalankan browser

6. Menampilkan Gambar dari Folder Public

a. Buka website https://undraw.co/ download png 404
- Cari 404 dan download png
b. Simpan gambar not-found.png ke folder public/ dan rename agar
memudahkan
c. Modifikasi kode pada 404.tsx:
- <img src="/page-not-found.png" alt="404"
className={styles.error__image} />
- Jalankan browser

---

**C. Tugas Praktikum**
Tugas 1 (Wajib)
- Tambahkan:
- Judul halaman
- Deskripsi singkat
- Gambar ilustrasi

Tugas 2 (Wajib)
- Custom warna, font, dan layout halaman 404
- Navbar tidak tampil di halaman 404

Tugas 3 (Pengayaan)
- Tambahkan tombol:
- “Kembali ke Home”
- Gunakan navigasi Next.js (Link)

---

**D. Pertanyaan Evaluasi**


1. Apa fungsi utama _document.js?
    _document.js di Next.js berfungsi untuk mengatur struktur dasar HTML dari
    aplikasi secara keseluruhan. File ini digunakan untuk memodifikasi dokumen
    HTML yang di-render di sisi server, seperti mengatur tag <html>, <head>, dan
    <body>. Jadi, _document.js bekerja pada level paling luar dari halaman,
    sebelum konten React dirender.
    Secara default, Next.js sudah menyediakan struktur HTML dasar. Namun jika
    kita ingin menambahkan atribut khusus pada tag <html> (misalnya lang="id"),
    menambahkan script eksternal global, mengatur meta tag yang benar-benar
    global, atau menghubungkan font dari CDN yang berlaku untuk seluruh
    aplikasi, maka _document.js adalah tempat yang tepat.
    Yang penting dipahami adalah _document.js hanya dirender di server
    (server-side rendering). Artinya, file ini tidak memiliki akses ke event browser
    seperti onClick, tidak bisa menggunakan hook seperti useState atau useEffect,
    dan tidak berjalan ulang ketika berpindah halaman. Karena itu, _document.js
    lebih fokus pada struktur dokumen, bukan logika interaktif.

2. Mengapa <title> tidak disarankan di _document.js?
    Tag <title> tidak disarankan diletakkan di _document.js karena judul halaman
    biasanya bersifat dinamis dan berbeda untuk setiap halaman. _document.js
    hanya dirender sekali di server dan bersifat statis untuk seluruh aplikasi. Jika
    kita menaruh <title> di sana, maka semua halaman akan memiliki judul yang
    sama dan tidak bisa berubah sesuai konten halaman.
    Next.js sudah menyediakan komponen <Head> dari next/head yang bisa
    digunakan di setiap halaman secara terpisah. Dengan cara ini, setiap halaman
    dapat memiliki judul, meta description, dan meta tag SEO yang berbeda. Ini
    sangat penting untuk optimasi mesin pencari (SEO) dan pengalaman
    pengguna, karena judul tab browser akan menyesuaikan dengan halaman yang
    sedang dibuka.
    Selain itu, perubahan <title> harus bisa terjadi ketika user berpindah halaman
    tanpa reload penuh. Jika ditaruh di _document.js, perubahan tersebut tidak
    akan terjadi secara dinamis. Karena itu, praktik yang benar adalah
    menggunakan next/head di masing-masing file halaman, bukan di
    _document.js.

3. Apa perbedaan halaman biasa dan halaman 404.js?
    Halaman biasa di Next.js adalah halaman yang dirender ketika user mengakses
    route yang memang tersedia, seperti /about, /produk, atau /login. Halaman ini
    dibuat berdasarkan struktur file di dalam folder pages. Setiap file akan
    otomatis menjadi route.
    
    Sedangkan 404.js adalah halaman khusus yang secara otomatis digunakan oleh
Next.js ketika user mengakses route yang tidak ditemukan. Misalnya, jika user
membuka /halaman-tidak-ada, maka Next.js akan menampilkan isi dari 404.js.
Perbedaannya bukan hanya dari fungsi, tetapi juga dari perilaku sistem.
Halaman biasa dirender karena route cocok dengan file yang ada, sedangkan
404.js dirender karena tidak ada route yang cocok. Selain itu, halaman 404
secara otomatis mengirimkan status HTTP 404 ke browser, yang menandakan
bahwa halaman tidak ditemukan. Ini penting untuk SEO dan standar web.
Jadi, halaman biasa bersifat eksplisit (dibuat untuk route tertentu), sementara
404.js bersifat fallback otomatis ketika route tidak tersedia.

4. Mengapa folder public tidak perlu di-import?
    Folder public di Next.js memiliki perlakuan khusus. Semua file yang berada di
    dalam folder public akan otomatis bisa diakses langsung melalui URL tanpa
    perlu di-import ke dalam kode JavaScript atau TypeScript.
    Sebagai contoh, jika ada file gambar di:
    `_public/images/logo.png_`
    Maka kita bisa langsung mengaksesnya di browser melalui:
    _[http://localhost:3000/images/logo.png](http://localhost:3000/images/logo.png)_
    atau menggunakannya di dalam <img> seperti ini:
    <img src="/images/logo.png" />
    Tanpa perlu menulis import logo from ....
    Hal ini berbeda dengan file yang berada di luar folder public, yang harus
    di-import terlebih dahulu jika ingin digunakan. Folder public diperlakukan
    seperti root statis server. Next.js secara otomatis menjadikannya sebagai
    direktori statis yang dilayani langsung oleh server.
    Alasan desain ini adalah untuk mempermudah pengelolaan aset statis seperti
    gambar, favicon, file PDF, atau file lainnya yang tidak perlu diproses oleh
    JavaScript. Dengan sistem ini, performa lebih baik dan struktur proyek lebih
    rapi.



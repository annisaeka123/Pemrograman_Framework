# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 18

# OPTIMASI PERFORMA APLIKASI MENGGUNAKAN FITUR NEXT.JS

Disusun oleh:  
Nama: Annisa Eka Puspita  
Kelas: TI-3D  
Absen: 04  
NIM: 2341720131  

PRODI D-IV TEKNIK INFORMATIKA  
JURUSAN TEKNOLOGI INFORMASI  
POLITEKNIK NEGERI MALANG  
2026  

---

## A. Capaian Pembelajaran (CPMK)

Setelah mengikuti praktikum ini, mahasiswa mampu:

1. Mengoptimasi gambar menggunakan next/image  
2. Mengkonfigurasi remote image pada next.config.js  
3. Mengoptimasi penggunaan font dengan next/font  
4. Mengoptimasi script eksternal menggunakan next/script  
5. Mengimplementasikan Dynamic Import untuk lazy loading komponen  
6. Memahami dampak optimasi terhadap performa aplikasi  

---

## B. Langkah Praktikum

### PRAKTIKUM 1 – Image Optimization

#### A. Optimasi Gambar Lokal (Public Folder)

```
o Studi Kasus:
o Mengganti tag <img> pada halaman 404 dengan next/image. Langkah:
o Buka file src/pages/404.tsx
```

```
o Modifikasi line 7 menjadi line 8-11
```

Hasil:

- Warning hilang  
- Image dioptimasi otomatis  
- Mengurangi bandwidth  
- Mendukung lazy loading otomatis  

---

#### B. Optimasi Gambar Remote (External URL)

```
o Buka file views/product/index.tsx
```

```
o Modifikasi file index.tsx
```

```
Note : dikarenakan gambar diambil dari url tertentu maka konfigurasi berbeda
```

```
o Buka file next.config.js
```

Hasil:

- Gambar di-proxy melalui /_next/image  
- Performa lebih optimal  
- Kompresi otomatis  

---

### PRAKTIKUM 2 – Font Optimization

#### A. Menggunakan next/font

```
o Buka file index.tsx pada folder Appshell/index.tsx dan modifkasi
```

```
o Jalankan browser localhost:3000/produk maka font akan berubah menjadi roboto
untuk mengecek fontnya bisa menggunakan extension FontFinder
```

Hasil:

- Tidak perlu load dari CDN manual  
- Tidak blocking render  
- Performance meningkat  
- Tidak terjadi FOUT (Flash of Unstyled Text)  

---

### PRAKTIKUM 3 – Script Optimization

#### B. Menggunakan next/script

```
o Buka file index.tsx pada folder layouts/Navbar dan modifikasi
```

```
o Pada kasus diatas kita merubah line 11 menggunakan model Typescript dapat
terlihat ketika kita refresh web produk tulisan myApp akan terlihat berkedip
o Perbedaan mendasar antara Line 11-13 dan Line 15-18 pada file index.tsx Anda
terletak pada metode rendering teks dan interaksi dengan DOM (Document Object Model).
Berikut adalah rincian perbedaannya:
```

I. Metode Rendering  

a. Line 11-13 (Standard React/JSX): Ini adalah cara standar React.  
Teks "MyApp" ditulis langsung di dalam tag div. React akan langsung merender teks ini ke dalam HTML saat komponen dimuat.  

b. Line 15-18 (Next.js Script & Manual DOM): Menggunakan komponen `<Script>` dari Next.js dengan strategi lazyOnload. Teks tidak ada di dalam HTML saat awal dimuat, melainkan baru "disuntikkan" secara manual menggunakan perintah JavaScript  
document.getElementById('title').innerHTML = 'MyApp'; setelah script tersebut diunduh di latar belakang.  

II. Performa dan SEO  

a. Line 11-13: Sangat baik untuk SEO karena teks "MyApp" langsung terbaca oleh robot pencari (crawler) dalam kode sumber HTML.  

b. Line 15-18: Kurang baik untuk SEO karena teks muncul setelah JavaScript dijalankan dan ada delay.  

III. Keamanan (XSS)  

```
# a. Line 11-13: Aman karena React secara otomatis melakukan escape
```

```
pada string untuk mencegah serangan Cross-Site Scripting (XSS).
b. Line 15-18: Memiliki risiko keamanan lebih tinggi karena menggunakan .innerHTML.
```

---

#### C. Strategi Script

```
Strategy Fungsi
beforeInteractive Sebelum halaman interaktif
afterInteractive Setelah halaman interaktif
lazyOnload Setelah semua selesai
worker Web worker
```

Hasil:

- Script tidak blocking  
- Cocok untuk Google Analytics  
- Performa lebih ringan  

---

### PRAKTIKUM 4 – Optimasi Avatar dengan next/image

```
o Buka file index.tsx pada folder layouts/navbar dan modifikasi :
```

```
o Tambahkan hostname Google:
```

---

## C. Tugas Praktikum

1. Optimasi semua image di project menggunakan next/image  
2. Gunakan minimal 1 font dari next/font  
3. Tambahkan script Google Analytics menggunakan next/script  
4. Terapkan dynamic import pada minimal 1 komponen  
5. Dokumentasikan perubahan performa (screenshot Lighthouse)  

---

## D. Refleksi & Diskusi

1. **Mengapa `<img>` biasa tidak optimal?**  
   Karena `<img>` tidak memiliki optimasi bawaan seperti kompresi otomatis, responsive sizing, dan lazy loading. Hal ini dapat menyebabkan penggunaan bandwidth lebih besar dan waktu loading halaman menjadi lebih lama dibandingkan dengan `next/image` yang sudah dioptimasi oleh Next.js.

2. **Apa perbedaan font CDN dan next/font?**  
   Font CDN di-load dari server eksternal sehingga membutuhkan request tambahan dan berpotensi menyebabkan blocking render atau FOUT (Flash of Unstyled Text). Sedangkan `next/font` meng-host font secara lokal dan mengoptimasi loading sehingga lebih cepat, tidak blocking, dan lebih stabil.

3. **Mengapa script bisa membuat website lambat?**  
   Script dapat memblokir proses rendering halaman jika dijalankan secara sinkron. Selain itu, ukuran file script yang besar dan terlalu banyak script eksternal dapat meningkatkan waktu loading dan memperlambat performa website.

4. **Kapan harus menggunakan dynamic import?**  
   Dynamic import digunakan ketika komponen tidak perlu dimuat di awal (initial load), seperti komponen berat, komponen yang jarang digunakan, atau hanya muncul pada kondisi tertentu. Hal ini membantu mengurangi bundle size awal dan meningkatkan performa.

5. **Apa dampak bundle size terhadap UX?**  
   Bundle size yang besar akan memperlambat waktu loading aplikasi sehingga pengguna harus menunggu lebih lama. Hal ini dapat menurunkan kenyamanan pengguna (UX), meningkatkan bounce rate, dan membuat aplikasi terasa tidak responsif.

---

## E. Kesimpulan

Dalam praktikum ini mahasiswa telah mempelajari:

- Image Optimization  
- Remote Image Configuration  
- Font Optimization  
- Script Optimization  
- Dynamic Import  
- Lazy Loading  

Semua fitur ini merupakan keunggulan utama Next.js dalam meningkatkan performa aplikasi modern.
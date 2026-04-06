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

- Studi Kasus:
- Mengganti tag <img> pada halaman 404 dengan next/image. Langkah:
  - Buka file src/pages/404.tsx

    <img width="200" height="480" alt="image" src="https://github.com/user-attachments/assets/2afbfbac-59c8-4467-b25c-550d24b81d4a" />

  - Modifikasi 

    <img width="645" height="709" alt="image" src="https://github.com/user-attachments/assets/b314e8a2-2f39-4405-a233-c153bc3d3b39" />


- Hasil:

   - Warning hilang  
   - Image dioptimasi otomatis  
   - Mengurangi bandwidth  
   - Mendukung lazy loading otomatis  


#### B. Optimasi Gambar Remote (External URL)


- Buka file views/product/index.tsx

  <img width="196" height="172" alt="image" src="https://github.com/user-attachments/assets/718043ac-8f44-4683-a3da-990e89248fc9" />


- Modifikasi file index.tsx

  <img width="986" height="709" alt="image" src="https://github.com/user-attachments/assets/d52deb73-9910-4875-a6b5-b16dec7e0e93" />



```
Note : dikarenakan gambar diambil dari url tertentu maka konfigurasi berbeda
```

- Buka file next.config.js

  <img width="606" height="623" alt="image" src="https://github.com/user-attachments/assets/d41879ce-7d6c-4ad0-a3f8-ef813721f49f" />


Hasil:

- Gambar di-proxy melalui /_next/image  
- Performa lebih optimal  
- Kompresi otomatis  

---

### PRAKTIKUM 2 – Font Optimization

#### A. Menggunakan next/font

- Buka file index.tsx pada folder Appshell/index.tsx dan modifkasi

  <img width="758" height="760" alt="image" src="https://github.com/user-attachments/assets/dd9f9f41-18a0-4254-924d-6a0cd0ae3a28" />


- Jalankan browser localhost:3000/produk maka font akan berubah menjadi roboto untuk mengecek fontnya bisa menggunakan extension FontFinder

  <img width="1919" height="1016" alt="image" src="https://github.com/user-attachments/assets/f0494da8-66f3-4514-b491-66fe26d7128f" />


- Hasil:
   - Tidak perlu load dari CDN manual  
   - Tidak blocking render  
   - Performance meningkat  
   - Tidak terjadi FOUT (Flash of Unstyled Text)  

---

### PRAKTIKUM 3 – Script Optimization

#### A. Menggunakan next/script

- Buka file index.tsx pada folder layouts/Navbar dan modifikasi

  <img width="758" height="568" alt="image" src="https://github.com/user-attachments/assets/fe4cb487-2838-4b33-acfe-c2a576f206e7" />


- Pada kasus diatas kita merubah line 11 menggunakan model Typescript dapat terlihat ketika kita refresh web produk tulisan myApp akan terlihat berkedip

- Perbedaan mendasar antara **Line 11-13** dan **Line 15-18** pada file index.tsx Anda terletak pada metode rendering teks dan interaksi dengan DOM (Document Object Model).

  Berikut adalah rincian perbedaannya:

   I. Metode Rendering  
   
   a. Line 11-13 (Standard React/JSX): Ini adalah cara standar React.
  
   Teks "MyApp" ditulis langsung di dalam tag div. React akan langsung merender teks ini ke dalam HTML saat komponen dimuat.  
   
   b. Line 15-18 (Next.js Script & Manual DOM): Menggunakan komponen `<Script>` dari Next.js dengan strategi lazyOnload.

  Teks tidak ada di dalam HTML saat awal dimuat, melainkan baru "disuntikkan" secara manual menggunakan perintah JavaScript document.getElementById('title').innerHTML = 'MyApp'; setelah script tersebut diunduh di latar belakang.  
   
   II. Performa dan SEO  
   
   a. Line 11-13: Sangat baik untuk SEO karena teks "MyApp" langsung terbaca oleh robot pencari (crawler) dalam kode sumber HTML.  
   
   b. Line 15-18: Kurang baik untuk SEO karena teks muncul setelah JavaScript dijalankan dan ada delay.  
   
   III. Keamanan (XSS)  

   a. Line 11-13: Aman karena React secara otomatis melakukan escape pada string untuk mencegah serangan Cross-Site Scripting (XSS).
   
   b. Line 15-18: Memiliki risiko keamanan lebih tinggi karena menggunakan .innerHTML.


#### B. Strategi Script

| Strategy | Fungsi |
| :--- | :--- |
| beforeInteractive | Sebelum halaman interaktif |
| afterInteractive | Setelah halaman interaktif |
| lazyOnload | Setelah semua selesai |
| worker | Web worker |

- Hasil:

   - Script tidak blocking  
   - Cocok untuk Google Analytics  
   - Performa lebih ringan  

---

### PRAKTIKUM 4 – Optimasi Avatar dengan next/image

- Buka file index.tsx pada folder layouts/navbar dan modifikasi :

  <img width="621" height="701" alt="image" src="https://github.com/user-attachments/assets/6c176007-1017-4d4b-b5ca-216dd90a14d5" />


- Tambahkan hostname Google:

  <img width="472" height="566" alt="image" src="https://github.com/user-attachments/assets/a0e7a669-a226-496b-866b-779cb17fbd7e" />



---

## C. Tugas Praktikum

1. Optimasi semua image di project menggunakan next/image  

   - navbar

     <img width="775" height="858" alt="image" src="https://github.com/user-attachments/assets/4263c05c-a429-41ac-86af-919de522c7a7" />

   - profile

     <img width="761" height="700" alt="image" src="https://github.com/user-attachments/assets/90460c34-e5a6-4157-9fe1-2ca727d8dbde" />

   - produk

     <img width="1101" height="743" alt="image" src="https://github.com/user-attachments/assets/53630f75-1ac6-4152-ac50-992ca88ff60a" />


2. Gunakan minimal 1 font dari next/font  

   <img width="736" height="520" alt="image" src="https://github.com/user-attachments/assets/2ee275b3-4e9e-4918-a580-1d02403705af" />


3. Tambahkan script Google Analytics menggunakan next/script  

   - Siapkan Google Analytics ID
     - Masuk ke Google Analytics dan Start measuring
     - Buat Akun
  
       <img width="956" height="754" alt="image" src="https://github.com/user-attachments/assets/f862e744-c7d1-434c-9972-9dbae33348af" />

     - Buat Properti
  
       <img width="944" height="844" alt="image" src="https://github.com/user-attachments/assets/d0fe9fd2-2c61-4975-98d5-426bc48c5c3d" />

     - Info Bisnis
  
       <img width="931" height="866" alt="image" src="https://github.com/user-attachments/assets/acaa2708-8f5c-41a3-9490-e846989dcf3d" />
  
       <img width="952" height="825" alt="image" src="https://github.com/user-attachments/assets/6b3f7d2d-304b-4d5d-8c13-78f436fad4e6" />


     - Pilih platform Web
  
       <img width="946" height="778" alt="image" src="https://github.com/user-attachments/assets/bea4f00d-a322-447a-b6e6-f9029a27b46b" />

     - Isi Website
  
       <img width="1514" height="632" alt="image" src="https://github.com/user-attachments/assets/38e43974-9dc2-4391-8464-7dd4b41c5e8b" />

     - Ambil ID

   - Tambahkan Script Google Analytics di pages/_app.tsx

     <img width="848" height="742" alt="image" src="https://github.com/user-attachments/assets/4993f49e-ffbc-40bc-8b1c-455a12287662" />


   - Hasil

     <img width="1919" height="534" alt="image" src="https://github.com/user-attachments/assets/6378cc60-2b1d-4a52-93f2-1cad92b8d736" />


4. Terapkan dynamic import pada minimal 1 komponen  

   <img width="783" height="389" alt="image" src="https://github.com/user-attachments/assets/346f9f32-a48a-4e55-8b17-bd7217ef3714" />


5. Dokumentasikan perubahan performa (screenshot Lighthouse)

   - Sebelum (JS17)

     <img width="1919" height="928" alt="image" src="https://github.com/user-attachments/assets/330880c9-3b3c-4346-8371-7bc56f13b70e" />

   - Sesudah (JS18)

     <img width="1918" height="961" alt="image" src="https://github.com/user-attachments/assets/47b30cc5-cf01-4ce4-9217-f1263624eb8c" />


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

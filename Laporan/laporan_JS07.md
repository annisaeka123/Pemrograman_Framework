# Pemrograman Berbasis Framework

## Jobsheet 7

## API Routes pada Next.js dan Integrasi Firebase (Fullstack Next.js)

```
Disusun oleh:
Nama : Annisa Eka Puspita
Kelas: TI-3D
Absen: 04
NIM  : 2341720131


PRODI D-IV Teknik Informatika
Jurusan Teknologi Informasi
Politeknik Negeri Malang
2026
```

---

## A. Dasar Teori Singkat

### 1. API Routes di Next.js
Next.js tidak hanya framework frontend, tetapi juga dapat berfungsi sebagai backend melalui API Routes.

- File API diletakkan di:
  - `pages/api/`
- Contoh:
  - `pages/api/hello.js`
- Endpoint dapat diakses melalui:
  - `/api/hello`

### 2. Firebase Firestore
Firebase adalah layanan backend dari Google yang menyediakan:

- Database (Firestore / Realtime DB)
- Authentication
- Storage (File)

Firestore bersifat NoSQL dan cocok untuk aplikasi modern.

---

## B. Langkah Praktikum

1. Menjalankan project

    - npm run dev
    - Akses: http://localhost:3000 

2. Membuat API produk

    a. Buat file pad pages/api/produk.js

      <img width="190" height="191" alt="image" src="https://github.com/user-attachments/assets/83787c84-630b-478f-8b0f-0704757b1fc6" />

   b. Tambahkan data statis: 

      <img width="1024" height="734" alt="image" src="https://github.com/user-attachments/assets/b59d70a2-a702-43a8-8c5e-22441cd0fcdf" />

    c. Akses: http://localhost:3000/api/produk 

      <img width="943" height="641" alt="image" src="https://github.com/user-attachments/assets/63de99a1-3fb1-4d67-9716-53632dfc060d" />

3. Fetch data API di frontend

    a. Buka pages/product/index.tsx
    
      - Modifikasi kode
        - Tambahkan useEffect() dan comment useEffect untuk isLogin

           <img width="588" height="870" alt="image" src="https://github.com/user-attachments/assets/eb24921b-ca86-45a3-9086-141d929c3401" />

    b. Jalankan browser http://localhost:3000/produk 


     <img width="943" height="533" alt="image" src="https://github.com/user-attachments/assets/e405233a-6d2f-41ed-8b9f-8201a5260150" />


**Integrasi Firebase**

4. Setup Firebase

   a. Buka Firebase Go To Console ( login dengan login google)

     <img width="936" height="485" alt="image" src="https://github.com/user-attachments/assets/1054c600-557e-47a6-927b-f7d403c109b4" />


   b. Buat project baru

     <img width="857" height="836" alt="image" src="https://github.com/user-attachments/assets/10721bad-779c-4b03-a6c0-d715ac380899" />

     <img width="831" height="919" alt="image" src="https://github.com/user-attachments/assets/6c3a8e75-69cb-4425-afa0-6f76ed2af31d" />
     
     - Note : jangan lupa select parent resource nya
    
      <img width="818" height="908" alt="image" src="https://github.com/user-attachments/assets/3f1a9ed2-8f1c-4204-97bb-328b4784fdda" />

     - Note : klik create project dan disable google analytics
     
       <img width="559" height="502" alt="image" src="https://github.com/user-attachments/assets/76db3f45-f6db-43d3-9819-282bdd404d96" />

       <img width="878" height="468" alt="image" src="https://github.com/user-attachments/assets/0e731ca8-cc9d-4b7b-ac5a-769ebc1af4eb" />

       <img width="499" height="141" alt="image" src="https://github.com/user-attachments/assets/1d405781-e9df-4daf-ae42-c08af6f6c49b" />

     - Note klik add app dan pilih web
   
       <img width="610" height="524" alt="image" src="https://github.com/user-attachments/assets/bab5fbd0-7a3b-407e-8ccc-0512637edd74" />

     - Note : klik register app
   
       <img width="780" height="815" alt="image" src="https://github.com/user-attachments/assets/e1de46ba-7196-4eff-bbc4-b514de04981b" />

     - Note : klik continue to console 
   
   c. Aktifkan Firestore Database

     <img width="241" height="504" alt="image" src="https://github.com/user-attachments/assets/12e44f40-feba-495a-a7b0-0885147976cf" />

     <img width="1642" height="497" alt="image" src="https://github.com/user-attachments/assets/e71a7eaf-c484-4db6-8e3e-14cac249210f" />

     - Note : klik create database

       <img width="827" height="662" alt="image" src="https://github.com/user-attachments/assets/36712181-bef6-44c2-9892-850faaaf932b" />

       <img width="872" height="668" alt="image" src="https://github.com/user-attachments/assets/c77eedd1-c657-4e9d-ad01-6a7630765439" />

       <img width="848" height="731" alt="image" src="https://github.com/user-attachments/assets/ac75d9a9-260a-4fc7-b93c-29746232edf4" />

       <img width="1919" height="771" alt="image" src="https://github.com/user-attachments/assets/4bfdef49-33ce-440f-832f-74e218e91eee" />


     - Rubah rulesnya jadi true dan klik publish

       <img width="866" height="288" alt="image" src="https://github.com/user-attachments/assets/b852fa2a-15e7-4753-a242-211f4f48d211" />

   
   d. Buat collection:

     <img width="1266" height="724" alt="image" src="https://github.com/user-attachments/assets/0aff4bee-9b0e-4522-a64f-5e36ca9e5a9e" />

   e. products

     <img width="728" height="422" alt="image" src="https://github.com/user-attachments/assets/12fe3be9-69cb-4da3-a1ad-17c29a1d1ed3" />


     - Gunakan auto-id

       <img width="697" height="621" alt="image" src="https://github.com/user-attachments/assets/43cf6c2e-7f85-4735-ba18-1e4188ae3756" />

   
   f. Tambahkan field:

     <img width="657" height="826" alt="image" src="https://github.com/user-attachments/assets/63d97240-09d8-4f17-a749-93d339bb34ab" />

     <img width="621" height="366" alt="image" src="https://github.com/user-attachments/assets/ff780bc5-2626-45dc-8d58-64f211de86a0" />
   
5. Install Firebase

   a. npm install firebase

     <img width="743" height="185" alt="image" src="https://github.com/user-attachments/assets/379644b4-b3a4-4108-8c72-9ae8821997e6" />

   b. Buat folder dan file ts pada pages utlis/db/firebase.ts

      <img width="195" height="364" alt="image" src="https://github.com/user-attachments/assets/5d0839f2-f77e-4c75-8fb3-e724c4eaf77e" />

   c. Copy paste firebaseConfig ke file firebase.ts

      <img width="1280" height="855" alt="image" src="https://github.com/user-attachments/assets/23fbbfe0-31e0-41ea-ad4f-cc4ae0d7c068" />


   
6. Konfigurasi environment variable agar credensial Firebase tidak dapat dilihat saat dipush ke repository

   a. Buat file: .env.local 

      <img width="208" height="168" alt="image" src="https://github.com/user-attachments/assets/7306c084-6ec8-4451-b766-613e0edbd88b" />

   b. Modifikasi file env
   
     - FIREBASE_API_KEY=xxxx, FIREBASE_AUTH_DOMAIN=xxxx,
       FIREBASE_PROJECT_ID=xxxx, FIREBASE_STORAGE_BUCKET=xxxx,
       FIREBASE_MESSAGING_SENDER_ID=xxxx, FIREBASE_APP_ID=xxxx
       
     - Isikan sesuai dengan yang ada pada ( tanpa koma dan petik dua)

       <img width="1479" height="876" alt="image" src="https://github.com/user-attachments/assets/a41166bf-1d17-49d3-ae25-8f2bc6db0697" />

       <img width="262" height="191" alt="image" src="https://github.com/user-attachments/assets/1cf109bf-f10a-4141-b8c4-a69f2cedfb66" />

7. Konfigurasi Firebase
   - Modifikasi firebase.ts
    <img width="724" height="504" alt="image" src="https://github.com/user-attachments/assets/78438a74-b6cb-414a-8bdc-2cee08d1dfdb" />

8. Ambil Data dari Firestore 

   a. Buat file
     - ulits/db/servicefirebase.js

       <img width="255" height="92" alt="image" src="https://github.com/user-attachments/assets/a4b3bf5e-5e19-445b-ad0b-c852cde72c32" />

     - modifikasi file servicefirebase.ts

       <img width="763" height="387" alt="image" src="https://github.com/user-attachments/assets/e8b4e9ae-8145-4017-8f34-139ca8aa9059" />
    
9. API mengambil data Firebase
   a. Edit pages/api/product.js:

     <img width="842" height="467" alt="image" src="https://github.com/user-attachments/assets/4702cada-577f-488f-9c89-38fdf24cd462" />

   b. Jalankan browser http://localhost:3000/api/produk

     <img width="928" height="428" alt="image" src="https://github.com/user-attachments/assets/80a3fe7b-c8b6-4360-8fcc-c1aca4c879aa" />

   c. Modifikasi index.ts pada produk sesuaikan nama typenya dan db nya

     <img width="529" height="813" alt="image" src="https://github.com/user-attachments/assets/d89b3e7a-44fb-46e3-a51d-3fc1ef973fa3" />

   d. Jalankan browser

   <img width="950" height="411" alt="image" src="https://github.com/user-attachments/assets/cb38ea0d-acef-4832-a0ac-9bc9ab574d94" />




---

## C. Tugas Praktikum

### Tugas 1 (Wajib)
- Tambahkan minimal 3 data produk di Firestore
- Pastikan data tampil di halaman produk

<img width="1338" height="266" alt="image" src="https://github.com/user-attachments/assets/587643d6-2e5a-42ad-ae82-0509c111d07a" />

<img width="770" height="253" alt="image" src="https://github.com/user-attachments/assets/1d51e48b-3340-46aa-8180-f03eabbaa27e" />

<img width="795" height="243" alt="image" src="https://github.com/user-attachments/assets/e5fbff43-9185-4c92-bbcd-d64256dcb3a6" />

<img width="955" height="733" alt="image" src="https://github.com/user-attachments/assets/a07e788a-eff6-4b0d-a2b0-40cd4894c00a" />


### Tugas 2 (Wajib)
- Tambahkan field baru: `category`
- Tampilkan `category` di frontend

<img width="943" height="963" alt="image" src="https://github.com/user-attachments/assets/e2733149-c501-4f7b-8e36-328ddc86beae" />


### Tugas 3 (Pengayaan)
- Tambahkan tombol **Refresh Data**
- Gunakan fetch ulang tanpa reload halaman

<img width="1146" height="727" alt="image" src="https://github.com/user-attachments/assets/8ea381e7-390b-4a73-a4a3-ea6b27772e15" />

<img width="954" height="975" alt="image" src="https://github.com/user-attachments/assets/3568ec18-b2ef-4028-8ffe-108052d398ae" />

---

## D. Pertanyaan Evaluasi

### 1. Apa fungsi API Routes pada Next.js?
API Routes pada Next.js berfungsi untuk memungkinkan kita membuat backend langsung di dalam project yang sama dengan frontend. Artinya, kita bisa membuat endpoint seperti `/api/user`, `/api/login`, atau `/api/products` tanpa harus membuat server terpisah menggunakan Express atau framework backend lainnya. Dengan adanya API Routes, Next.js memungkinkan kita menangani request HTTP seperti GET, POST, PUT, dan DELETE untuk mengelola data.

Secara konsep, API Routes membuat Next.js tidak hanya berperan sebagai framework untuk tampilan (frontend), tetapi juga bisa menangani logika server seperti autentikasi, validasi data, koneksi ke database, hingga pengolahan data sebelum dikirim ke client. Misalnya, ketika sebuah aplikasi membutuhkan data dari database, frontend dapat memanggil API internal yang dibuat di dalam folder `pages/api` (atau `app/api` pada versi terbaru), kemudian API tersebut akan memproses permintaan dan mengirimkan respons dalam format JSON.

Dengan cara ini, pengembangan menjadi lebih praktis karena frontend dan backend berada dalam satu project yang terintegrasi. Hal ini juga mempermudah deployment karena cukup mengelola satu aplikasi saja tanpa harus memisahkan server dan client secara manual.

### 2. Mengapa .env.local tidak boleh di-push ke repository?
File `.env.local` biasanya digunakan untuk menyimpan variabel lingkungan (environment variables) yang bersifat sensitif. Contohnya seperti API key, password database, secret key untuk autentikasi, token, dan informasi konfigurasi lainnya yang tidak boleh diketahui publik. Jika file ini di-push ke repository, apalagi repository tersebut bersifat publik, maka semua orang dapat melihat informasi sensitif tersebut.

Hal ini sangat berbahaya karena bisa menyebabkan kebocoran data, penyalahgunaan API, bahkan peretasan sistem. Misalnya, jika API key dari layanan pihak ketiga bocor, orang lain bisa menggunakan API tersebut atas nama kita dan menyebabkan pembengkakan biaya atau pelanggaran keamanan. Begitu juga jika password database tersebar, maka data yang tersimpan di dalamnya bisa diakses atau dimodifikasi oleh pihak yang tidak bertanggung jawab.

Karena itu, `.env.local` biasanya dimasukkan ke dalam file `.gitignore` agar tidak ikut terunggah ke repository. Sebagai gantinya, developer biasanya hanya membagikan file contoh seperti `.env.example` yang berisi daftar nama variabel tanpa nilai aslinya. Dengan begitu, keamanan tetap terjaga sementara struktur konfigurasi tetap terdokumentasi dengan baik.

### 3. Apa perbedaan data statis dan data dinamis?
Data statis adalah data yang isinya tetap dan tidak berubah-ubah meskipun halaman diakses berkali-kali atau oleh pengguna yang berbeda. Contohnya seperti teks deskripsi perusahaan, profil organisasi, atau halaman informasi umum yang jarang diperbarui. Pada Next.js, data statis biasanya dihasilkan saat proses build menggunakan metode seperti Static Site Generation (SSG). Artinya, halaman sudah dibuat sebelumnya dan tinggal ditampilkan saat pengguna mengaksesnya, sehingga performanya sangat cepat.

Sebaliknya, data dinamis adalah data yang bisa berubah tergantung waktu, kondisi, atau siapa yang mengaksesnya. Contohnya seperti data pengguna yang sedang login, daftar produk terbaru, komentar, atau data transaksi. Data ini biasanya diambil dari database atau API setiap kali ada permintaan dari pengguna. Pada Next.js, data dinamis bisa diambil menggunakan Server Side Rendering (SSR) atau melalui fetch langsung di client side.

Perbedaan utama keduanya terletak pada waktu pembuatan dan sifat perubahannya. Data statis dibuat sekali dan relatif tetap, sedangkan data dinamis dihasilkan atau diperbarui sesuai kebutuhan secara real-time atau hampir real-time. Dari sisi performa, data statis biasanya lebih cepat karena sudah di-generate sebelumnya, sementara data dinamis lebih fleksibel karena selalu menampilkan informasi terbaru.

### 4. Mengapa Next.js disebut framework fullstack?
Next.js disebut framework fullstack karena mampu menangani pengembangan frontend dan backend dalam satu lingkungan kerja yang sama. Di sisi frontend, Next.js menggunakan React untuk membangun tampilan antarmuka pengguna yang interaktif dan modern. Developer bisa membuat halaman, komponen, layout, dan navigasi dengan pendekatan berbasis komponen seperti pada React pada umumnya.

Namun, Next.js tidak berhenti di frontend saja. Dengan adanya API Routes, middleware, serta kemampuan Server Side Rendering, Next.js juga dapat menjalankan logika di sisi server. Artinya, kita bisa membuat endpoint API, menghubungkan aplikasi ke database, melakukan autentikasi, hingga memproses data sebelum dikirim ke pengguna, semuanya dalam satu project.

Selain itu, Next.js juga mendukung berbagai metode rendering seperti Static Site Generation (SSG), Server Side Rendering (SSR), dan Incremental Static Regeneration (ISR). Kemampuan ini menunjukkan bahwa Next.js mampu mengelola alur data dari server hingga ke tampilan pengguna secara menyeluruh. Karena mencakup pengelolaan tampilan (frontend), logika server (backend), dan proses rendering, maka Next.js layak disebut sebagai framework fullstack.



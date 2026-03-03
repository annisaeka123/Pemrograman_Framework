# Pemrograman Berbasis Framework

## Jobsheet 7
**API Routes pada Next.js dan Integrasi Firebase**

### (Fullstack Next.js)

```
Disusun oleh:
Nama : Annisa Eka Puspita
Kelas: TI-3D
Absen: 04
NIM  : 2341720131
PRODI: D-IV Teknik Informatika
Jurusan: Teknologi Informasi
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
2. Membuat API produk
3. Fetch data API di frontend
4. Integrasi Firebase
5. Install Firebase
6. Konfigurasi environment variable agar credensial Firebase tidak dapat dilihat saat dipush ke repository
7. Konfigurasi Firebase
8. Ambil data dari Firebase
9. API mengambil data Firebase

---

## C. Tugas Praktikum

### Tugas 1 (Wajib)
- Tambahkan minimal 3 data produk di Firestore
- Pastikan data tampil di halaman produk

### Tugas 2 (Wajib)
- Tambahkan field baru: `category`
- Tampilkan `category` di frontend

### Tugas 3 (Pengayaan)
- Tambahkan tombol **Refresh Data**
- Gunakan fetch ulang tanpa reload halaman

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



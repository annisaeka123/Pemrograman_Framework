# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 13

# MIDDLEWARE & ROUTE PROTECTION

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

---

## A. Capaian Pembelajaran (CPMK)

Mahasiswa mampu:

1. Menjelaskan konsep Middleware pada Next.js.
2. Membedakan redirect menggunakan useEffect dan Middleware.
3. Membuat file middleware.ts.
4. Mengatur proteksi route tertentu.
5. Mengimplementasikan sistem login sederhana menggunakan Middleware.

---

## B. Dasar Teori

### 1. Apa itu Middleware?

Middleware adalah kode yang dijalankan sebelum request halaman diproses.

**Alur kerja:**

User akses halaman  

↓  

Middleware dijalankan  

↓  

Cek kondisi (login / role / dll)  

↓  

Lanjutkan request atau redirect  

Middleware berjalan di **server / edge layer sebelum halaman dirender**.

---

### 2. Mengapa Tidak Menggunakan useEffect?

Redirect menggunakan **useEffect** memiliki beberapa masalah, yaitu:

- Halaman sempat terbuka terlebih dahulu
- Terjadi **glitch**
- Kurang aman

Sedangkan dengan **Middleware**:

- Redirect terjadi **sebelum halaman dirender**
- Tidak ada glitch
- Lebih secure

---

## C. Langkah Praktikum

### Bagian 1 – Membuat Middleware

- Modifikasi file **index.tsx** pada folder `src/pages/produk`
- Buat file **src/middleware.ts** sejajar dengan folder `pages`

---

### Bagian 2 – Struktur Dasar Middleware

Jika menggunakan:

```
NextResponse.next()
```

Maka **tidak ada redirect**, sehingga halaman masih bisa diakses melalui:

```
http://localhost:3000/produk
```

---

### Bagian 3 – Redirect Sederhana

Pada tahap ini:

- Semua halaman akan **redirect ke home**
- Akan terjadi **error loading terus-menerus**

Hal ini terjadi karena **redirect dilakukan tanpa pembatasan route**.

---

### Bagian 4 – Batasi Route Tertentu

Untuk mengatasi masalah pada **Bagian 3**, perlu dilakukan **pembatasan route**.

Artinya:

- Middleware **hanya berlaku untuk `/products` dan `/about`**
- Halaman lain tetap normal
- Ketika user mengakses halaman **produk** dan **about**, maka akan langsung **redirect ke halaman home**

---

### Bagian 5 – Simulasi Sistem Login

Modifikasi file **middleware.ts**

Jika user langsung mengakses:

```
http://localhost:3000/produk
```

maka user **tidak akan bisa mengakses halaman tersebut** dan akan diarahkan ke halaman:

```
/login
```

---

## D. Pengujian

### Uji 1 – isLogin = false

Akses:

```
/products
```

Hasil:

Redirect ke:

```
/login
```

---

### Uji 2 – isLogin = true

Ubah:

```
const isLogin = true
```

Hasil:

User **bisa mengakses `/products`**

---

### Uji 3 – Tambahkan Multiple Route

```
export const config = {
matcher: ['/products', '/about']
}
```

Sekarang:

- `/products` dan `/about` **membutuhkan login**
- Halaman lain **bebas diakses**

---

## E. Perbandingan Middleware vs useEffect

| Aspek | useEffect | Middleware |
|------|------|------|
| Redirect timing | Setelah render | Sebelum render |
| Glitch | Ada | Tidak |
| Security | Lemah | Lebih aman |
| Skalabilitas | Harus tiap halaman | Sekali di middleware |

---

## F. Tugas Praktikum

### Tugas Individu

1. Buat halaman:

   - `/products`
   - `/about`
   - `/login`

2. Implementasikan **Middleware**:

   - Redirect ke `/login` jika belum login
   - Izinkan akses jika `login = true`

3. Tambahkan proteksi **hanya untuk route tertentu**

4. Dokumentasikan:

   - Screenshot **sebelum redirect**
   - Screenshot **sesudah redirect**
   - Perbandingan dengan **useEffect**

---

## G. Pertanyaan Analisis

**1. Mengapa middleware lebih aman dibanding useEffect?**

Middleware lebih aman dibandingkan dengan useEffect karena middleware dijalankan di sisi server atau edge layer sebelum halaman diproses dan dikirimkan ke browser pengguna. Dengan mekanisme ini, server dapat terlebih dahulu memeriksa kondisi tertentu seperti status login, token autentikasi, atau hak akses pengguna sebelum halaman ditampilkan. Jika kondisi tidak terpenuhi, middleware dapat langsung melakukan redirect ke halaman lain, misalnya halaman login.

Sebaliknya, useEffect berjalan di sisi client setelah halaman selesai dirender di browser. Artinya halaman sempat ditampilkan terlebih dahulu sebelum proses pengecekan dilakukan. Hal ini berpotensi menimbulkan celah keamanan karena pengguna masih bisa melihat sebagian konten halaman sebelum akhirnya diarahkan ke halaman lain. Oleh karena itu, middleware dianggap lebih aman karena proses validasi dilakukan lebih awal sebelum halaman benar-benar diberikan kepada pengguna.

---

**2. Mengapa middleware tidak menimbulkan glitch?**

Middleware tidak menimbulkan glitch karena proses redirect dilakukan sebelum halaman dirender atau sebelum konten dikirimkan ke browser pengguna. Ketika request masuk, middleware akan memeriksa kondisi tertentu terlebih dahulu, seperti apakah pengguna sudah login atau belum. Jika kondisi tidak terpenuhi, maka server langsung mengarahkan pengguna ke halaman lain tanpa menampilkan halaman yang diminta.

Berbeda dengan useEffect yang berjalan setelah halaman ditampilkan di browser. Pada useEffect, halaman akan muncul terlebih dahulu kemudian baru dilakukan pengecekan kondisi login. Jika ternyata pengguna belum memiliki akses, maka halaman akan diarahkan ke halaman lain setelah beberapa saat. Proses inilah yang menyebabkan efek "glitch" atau tampilan halaman yang muncul sebentar lalu menghilang karena terjadi redirect setelah render. Dengan middleware, kondisi tersebut tidak terjadi karena halaman yang tidak memiliki izin akses tidak pernah dirender sama sekali.

---

**3. Apa risiko jika semua halaman diproteksi tanpa pengecualian?**

Jika semua halaman diproteksi tanpa adanya pengecualian, maka seluruh halaman pada aplikasi akan membutuhkan proses autentikasi sebelum dapat diakses oleh pengguna. Hal ini dapat menyebabkan beberapa masalah, terutama pada halaman yang seharusnya bersifat publik seperti halaman login, halaman utama, atau halaman informasi umum.

Salah satu risiko yang paling sering terjadi adalah infinite redirect atau redirect loop. Misalnya ketika halaman login juga ikut diproteksi oleh middleware. Ketika pengguna mencoba mengakses halaman login, middleware akan menganggap pengguna belum login dan mengarahkan kembali ke halaman login tersebut secara terus-menerus. Akibatnya halaman tidak pernah berhasil dimuat dan aplikasi menjadi tidak dapat digunakan.

Selain itu, memproteksi semua halaman juga dapat mengurangi fleksibilitas aplikasi karena tidak semua halaman memang membutuhkan autentikasi. Oleh karena itu biasanya middleware hanya diterapkan pada route tertentu yang benar-benar memerlukan perlindungan, seperti halaman dashboard, halaman admin, atau halaman yang menampilkan data sensitif.

---

**4. Kapan middleware tidak diperlukan?**

Middleware tidak diperlukan ketika aplikasi tidak memiliki kebutuhan untuk melakukan pengecekan kondisi tertentu sebelum halaman diakses. Contohnya pada website yang seluruh kontennya bersifat publik seperti blog sederhana, halaman informasi, atau landing page yang tidak memerlukan sistem login atau pembatasan akses pengguna.

Selain itu middleware juga tidak terlalu dibutuhkan ketika logika yang digunakan hanya bersifat sederhana di sisi client, misalnya hanya untuk mengatur tampilan komponen atau melakukan manipulasi UI setelah halaman dimuat. Pada kondisi seperti ini, penggunaan useEffect atau state management di client sudah cukup untuk menangani kebutuhan aplikasi.

Dengan kata lain, middleware lebih cocok digunakan ketika aplikasi membutuhkan kontrol akses, autentikasi, atau validasi request sebelum halaman dirender. Jika kebutuhan tersebut tidak ada, maka penggunaan middleware bisa dianggap berlebihan dan justru menambah kompleksitas pada aplikasi.

---

**5. Apa perbedaan middleware dan API route?**

Middleware dan API route memiliki fungsi yang berbeda dalam aplikasi Next.js. Middleware berfungsi sebagai lapisan perantara yang dijalankan sebelum request diproses oleh halaman atau API. Middleware biasanya digunakan untuk melakukan pengecekan kondisi tertentu seperti autentikasi pengguna, validasi token, logging request, atau melakukan redirect sebelum halaman dirender.

Sedangkan API route merupakan endpoint yang digunakan untuk menangani proses backend seperti mengambil data dari database, memproses data, atau mengirimkan respon dalam bentuk JSON kepada client. API route bekerja seperti server-side function yang dapat dipanggil oleh frontend melalui HTTP request.

Perbedaan utama keduanya terletak pada tujuan penggunaannya. Middleware berfungsi untuk mengontrol alur request sebelum diproses lebih lanjut, sedangkan API route digunakan untuk menyediakan layanan backend atau pengolahan data yang dibutuhkan oleh aplikasi. Dengan demikian, middleware lebih fokus pada pengaturan akses dan alur request, sedangkan API route berfokus pada logika bisnis dan pengolahan data.

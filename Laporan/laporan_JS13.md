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

  <img width="791" height="558" alt="image" src="https://github.com/user-attachments/assets/e07096e7-c0a4-4406-b7ff-daabd10b8523" />

- Buat file **src/middleware.ts** sejajar dengan folder `pages`

  <img width="321" height="224" alt="image" src="https://github.com/user-attachments/assets/8eea7f10-fae5-4f10-9ef9-ca7b14810c25" />




### Bagian 2 – Struktur Dasar Middleware

<img width="615" height="198" alt="image" src="https://github.com/user-attachments/assets/773a6574-5d7e-4bc1-9ca1-334455e5ec2e" />

Jika menggunakan:

```
NextResponse.next()
```

Maka **tidak ada redirect**, sehingga halaman masih bisa diakses melalui:

```
http://localhost:3000/produk
```



### Bagian 3 – Redirect Sederhana

<img width="656" height="241" alt="image" src="https://github.com/user-attachments/assets/21c97552-d5b3-430e-91b3-6c098214e991" />


- Semua halaman akan **redirect ke home**
- Akan terjadi **error loading terus-menerus**

<img width="961" height="839" alt="image" src="https://github.com/user-attachments/assets/25dffb95-d977-4def-8ab0-3e3f1f24c138" />

Hal ini terjadi karena **redirect dilakukan tanpa pembatasan route**.



### Bagian 4 – Batasi Route Tertentu

Untuk mengatasi masalah pada **Bagian 3**, perlu dilakukan **pembatasan route**.

<img width="648" height="326" alt="image" src="https://github.com/user-attachments/assets/0a608376-7ea0-4a2c-8886-66106505a7ee" />


Artinya:

- Middleware **hanya berlaku untuk `/products` dan `/about`**
- Halaman lain tetap normal
- Ketika user mengakses halaman **produk** dan **about**, maka akan langsung **redirect ke halaman home**



### Bagian 5 – Simulasi Sistem Login

- Modifikasi file **middleware.ts**

  <img width="782" height="501" alt="image" src="https://github.com/user-attachments/assets/a920dd75-1e80-4a0e-975c-89b764db83de" />


- Jika user langsung mengakses:

 ```
 http://localhost:3000/produk
 ```

- maka user **tidak akan bisa mengakses halaman tersebut** dan akan diarahkan ke halaman:

 ```
 /login
 ```

---

## D. Pengujian

### Uji 1 – isLogin = false

<img width="788" height="495" alt="image" src="https://github.com/user-attachments/assets/fd8472dc-db5e-4b9b-ab40-84a94e2ba5ab" />


Akses:

```
/products
```

Hasil:

Redirect ke:

```
/login
```

<img width="940" height="966" alt="image" src="https://github.com/user-attachments/assets/866b8b08-bba7-43c9-8ebf-54a8dbdf648e" />



### Uji 2 – isLogin = true

Ubah:

```
const isLogin = true
```

<img width="777" height="520" alt="image" src="https://github.com/user-attachments/assets/e06cc0d4-1530-4680-b866-ff6fcfa39f21" />


Hasil:

User **bisa mengakses `/products`**

<img width="931" height="949" alt="image" src="https://github.com/user-attachments/assets/63a4f997-3ba6-40df-be20-1193db39cd10" />


### Uji 3 – Tambahkan Multiple Route

```
export const config = {
matcher: ['/products', '/about']
}
```
<img width="809" height="538" alt="image" src="https://github.com/user-attachments/assets/a9ae5251-8954-469d-b91b-b94d2d5a7331" />

Sekarang:

- `/products` dan `/about` **membutuhkan login**
- Halaman lain **bebas diakses**

<img width="955" height="706" alt="image" src="https://github.com/user-attachments/assets/597180f7-d117-46d8-b82b-c42e33ac91da" />

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

   <img width="185" height="253" alt="image" src="https://github.com/user-attachments/assets/ba3c7801-01aa-40b8-b0ca-4e8b3588cc9f" />


2. Implementasikan **Middleware**:

   - Redirect ke `/login` jika belum login
   - Izinkan akses jika `login = true`

   <img width="813" height="548" alt="image" src="https://github.com/user-attachments/assets/ac95b5fd-6981-423e-a694-38806f3f4e1c" />


3. Tambahkan proteksi **hanya untuk route tertentu**

   <img width="457" height="94" alt="image" src="https://github.com/user-attachments/assets/dd14e33c-0d57-46e2-8d1b-98d4f728a3b0" />

4. Dokumentasikan:

   - Screenshot **sebelum redirect**
     
     <img width="931" height="949" alt="image" src="https://github.com/user-attachments/assets/63a4f997-3ba6-40df-be20-1193db39cd10" />

     Bisa akses langsung halaman produk
     
   - Screenshot **sesudah redirect**

     <img width="940" height="966" alt="image" src="https://github.com/user-attachments/assets/866b8b08-bba7-43c9-8ebf-54a8dbdf648e" />

     Diarahkan ke halaman Login terlebih dahulu saat mengakses halaman produk
     
   - Perbandingan dengan **useEffect**

     Middleware dan useEffect sama-sama dapat digunakan untuk melakukan pengecekan kondisi seperti status login sebelum pengguna mengakses suatu halaman. Namun keduanya bekerja pada tahap yang berbeda dalam proses rendering aplikasi.

      Middleware dijalankan di sisi server sebelum halaman dirender. Ketika pengguna mengakses suatu route, middleware akan terlebih dahulu mengecek kondisi seperti status login. Jika pengguna belum login, maka middleware akan langsung melakukan redirect ke halaman login. Karena proses ini terjadi sebelum halaman ditampilkan, maka pengguna tidak akan melihat halaman yang tidak memiliki izin akses.
   
      Sedangkan useEffect berjalan di sisi client setelah halaman dirender di browser. Artinya halaman akan muncul terlebih dahulu, kemudian baru dilakukan pengecekan kondisi. Jika pengguna tidak memiliki akses, maka halaman akan diarahkan ke halaman lain setelah beberapa saat. Hal ini dapat menyebabkan glitch, yaitu halaman muncul sebentar lalu berpindah.
   
      Dengan demikian, middleware lebih efektif digunakan untuk proteksi route karena bekerja sebelum render, lebih aman, dan tidak menimbulkan glitch dibandingkan dengan useEffect.

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

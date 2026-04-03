# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 16

# IMPLEMENTASI LOGIN DATABASE & MULTI-ROLE ( Sistem Autentikasi Login Terintegrasi Database )

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

1. Menghubungkan login dengan database.
2. Melakukan verifikasi password menggunakan bcrypt.
3. Membuat custom login page.
4. Mengimplementasikan callback URL redirect.
5. Menerapkan middleware authentication.
6. Menerapkan role-based access control (RBAC).

---

## B. Dasar Teori

### 1. Alur Login Database

User input email + password  

↓  

NextAuth authorize()  

↓  

Query user berdasarkan email  

↓  

bcrypt.compare(password)  

↓  

Jika cocok → return user  

↓  

Token & Session dibuat  

↓  

Redirect sesuai callbackURL  

### 2. Role-Based Access Control (RBAC)

Contoh role:

- user  
- admin  

Tujuan:

- Halaman tertentu hanya bisa diakses admin.  
- User biasa tidak bisa masuk halaman admin.  

---

## C. Langkah Praktikum

### Bagian 1 – Custom Login Page

- Tambahkan custom page di NextAuth line 55–57  
- Jalankan browser:

  ```
  http://localhost:3000/
  ```

  dan klik sign in maka akan diarahkan ke login  

---

### Bagian 2 – Handle Login di Frontend

- Copy paste isi dari register/index.tsx ke file login/index.tsx  
- Copy paste isi dari register/register.module.scss ke file login/login.module.scss  
- Semua text register pada file index.tsx pada folder login diubah menjadi login  
- Jangan lupa setting link hrefnya  

- Lakukan hal yang sama pada file login.module.scss rubah text register menjadi login  
- Cek pada file login.tsx pada pages/auth  
- Jalankan browser:

  ```
  localhost:3000/auth/login
  ```

  Tampilannya akan sama dengan register  

- Pada tampilan login kita tidak perlu hapus fullname jadi pada folder  
  views/auth/login/index.tsx hapus fullname  

```
Sehingga hasilnya seperti berikut :
```

- Buka file index.tsx pada folder views/auth/login dan modifikasi codenya seperti berikut  
  (Untuk line 64 sampai kebawah tidak ada perubahan)

```
Note pastikan tulisan password pada event.password.value pada line 48 sama dengan yang ada di
```

- Buka file servicefirebase.ts dan tambahkan code di line 25-  

---

### Bagian 3 – Authorize di NextAuth (Database Login)

- Buka file [...nextauth].ts modifikasi menjadi berikut (pada bagian providers)

---

### Bagian 4 – Tambahkan Role ke Token

- JWT Callback pada file [...nextauth].ts modifikasi menjadi  
- Jalankan browser:

  ```
  http://localhost:3000/auth/login
  ```

#### Note ERROR

JIKA TERDAPAT ERROR SEPERTI INI DISEBABKAN KARENA  

In this case, the problem is that a `<head>` tag is being rendered inside a `<div>`, which is invalid HTML. The `<head>` element must be a direct child of `<html>`, not nested inside other elements.

#### SOLUSI

Buka file:

```
SRC/VIEWS/AUTH/LOGIN/INDEX.TSX
```

Tambahkan:

```
<> </>
```

Seperti pada gambar (line 67 dan 116)

---

### Bagian 5 – Callback URL Logic

- Modifikasi withAuth.ts pada folder src/middleware  

Tujuannya:  
Setelah login, user kembali ke halaman sebelumnya.

---

### Bagian 6 – Membuat Halaman Admin dan Authorization

- Buat halaman admin  
- Pada index.tsx tambahkan code berikut  
- Modifikasi withAuth.ts  

- Jalankan browser:

  ```
  localhost:3000/produk
  ```

  pada status sudah login, ubah URL menjadi:

  ```
  http://localhost:3000/admin
  ```

  maka user akan diarahkan ke localhost  

  Intinya role selain admin tidak bisa mengakses  

- Untuk mencoba halaman admin, ubah role pada firebase pada salah satu akun dan jalankan:

  ```
  http://localhost:3000/admin
  ```

---

## D. Pengujian

### Uji 1 – Login Valid

Input:

- Email benar  
- Password benar  

Hasil:

- Login berhasil  
- Redirect sesuai callbackUrl  

---

### Uji 2 – Password Salah

Input:

- Email benar  
- Password salah  

Hasil:

- Error message tampil  
- Tidak login  

---

### Uji 3 – Akses Admin sebagai User

Login sebagai:

- role: user  

Akses:

```
/admin
```

Hasil:

- Redirect ke home  

---

### Uji 4 – Akses Admin sebagai Admin

Login sebagai:

- role: admin  

Akses:

```
/admin
```

Hasil:

- Bisa masuk halaman admin  

---

## E. Struktur Database Users

Collection:

```
users
```

Field:

| Field     | Tipe             |
|----------|------------------|
| email    | string           |
| password | string (hashed)  |
| role     | string           |
| fullName | string           |

---

## F. Perbandingan Sistem

| Fitur      | Sebelum   | Sekarang        |
|-----------|----------|-----------------|
| Login     | Hardcoded | Database        |
| Password  | Plaintext | Hashed          |
| Role      | Tidak ada | Ada             |
| Redirect  | Manual    | Callback URL    |
| Middleware| Basic     | Role-based      |

---

## G. Tugas Praktikum

1. Implementasikan login database.  
2. Tambahkan role pada user.  
3. Buat halaman:  
   - /profile  
   - /admin  
4. Proteksi /admin hanya untuk admin.  
5. Implementasikan callback URL.  

---

## H. Pertanyaan Analisis

1. Mengapa password harus diverifikasi dengan bcrypt.compare?  

    Password harus diverifikasi menggunakan bcrypt.compare karena password di database disimpan dalam bentuk hash, bukan plaintext. Fungsi ini digunakan untuk mencocokkan password input user dengan hash yang tersimpan tanpa perlu mengembalikannya ke bentuk asli. Hal ini penting untuk menjaga keamanan data pengguna agar tetap terlindungi meskipun database mengalami kebocoran.

2. Mengapa role disimpan di token?  

    Role disimpan di dalam token agar informasi hak akses pengguna dapat langsung digunakan di berbagai bagian aplikasi tanpa perlu melakukan query ulang ke database. Dengan adanya role di token, sistem dapat dengan cepat menentukan apakah user memiliki izin untuk mengakses suatu halaman atau fitur, sehingga meningkatkan efisiensi dan performa.

3. Apa fungsi callbackUrl?  

    CallbackUrl berfungsi untuk menentukan halaman tujuan setelah user berhasil login. Dengan adanya callbackUrl, user dapat dikembalikan ke halaman sebelumnya yang ingin diakses sebelum login, sehingga meningkatkan pengalaman pengguna (user experience).

4. Mengapa middleware penting untuk security?  

    Middleware penting untuk security karena berfungsi sebagai lapisan pengaman yang memeriksa setiap request sebelum masuk ke halaman tertentu. Middleware dapat digunakan untuk mengecek apakah user sudah login atau belum, serta memastikan user memiliki hak akses yang sesuai. Dengan demikian, akses ke halaman sensitif dapat dibatasi dengan baik.

5. Apa risiko jika role tidak dicek di middleware?  

    Jika role tidak dicek di middleware, maka semua user berpotensi mengakses halaman yang seharusnya dibatasi, seperti halaman admin. Hal ini dapat menyebabkan kebocoran data, penyalahgunaan fitur, dan menurunnya keamanan sistem secara keseluruhan. Oleh karena itu, pengecekan role sangat penting untuk menjaga integritas dan keamanan aplikasi.

---

## I. Output yang Diharapkan

Mahasiswa menghasilkan:

- Login terhubung database  
- Password diverifikasi  
- Custom login page  
- Redirect sesuai callback URL  
- Middleware aktif  
- Role-based access berjalan  

---

## Insight Penting

Level ini sudah masuk kategori:

**Production-ready authentication system**

Yang sudah mencakup:

- Authentication  
- Authorization  
- Session management  
- Role-based access control  
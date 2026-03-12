# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 14

# SISTEM AUTENTIKASI & PROTEKSI ROUTE

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

1. Menjelaskan konsep autentikasi dan otorisasi.
2. Mengimplementasikan login menggunakan NextAuth.
3. Menggunakan Credentials Provider.
4. Mengelola session berbasis JWT.
5. Mengakses data session di frontend.
6. Melindungi halaman menggunakan middleware.

---

## B. Dasar Teori

### Autentikasi vs Otorisasi

| Konsep | Fungsi |
|------|------|
| Autentikasi | Memverifikasi siapa user |
| Otorisasi | Mengontrol akses user |

### NextAuth

NextAuth adalah library autentikasi untuk Next.js yang mendukung:

- OAuth (Google, GitHub, dll)
- Credentials (Email & Password)
- JWT session
- Middleware integration

---

## C. Langkah Praktikum

### Bagian 1 – Install NextAuth

```
npm install next-auth --force
```

---

### Bagian 2 – Konfigurasi API Auth

- Buat file dan folder pada:

```
pages/api/auth/[...nextauth].ts
```

- Modifikasi file **[...nextauth].ts**

---

### Bagian 3 – Tambahkan Secret

- Buka file **.env.local** dan tambahkan code:

```
NEXTAUTH_SECRET=RANDOM_BASE64_STRING
```

Untuk mendapatkan nilai **RANDOM_BASE64_STRING** gunakan generator:

https://www.convertsimple.com/random-base64-generator/

---

### Bagian 4 – Tambahkan SessionProvider

- Buka file **_app.tsx** dan modifikasi.

---

### Bagian 5 – Tambahkan Tombol Login & Logout

- Buka file **index.tsx** pada folder:

```
components/navbar
```

- Modifikasi file **index.tsx** pada line **10 dan 2**

- Buka file **navbar.module.scss** dan tambahkan code pada line **9**

- Jalankan:

```
http://localhost:3000/
```

Jika tombol **Sign In** diklik maka akan muncul form login.  
Isi textbox yang tersedia kemudian klik **Sign In** dan halaman akan kembali ke **localhost**.

Setelah berhasil login maka akan muncul **session**.

Untuk menangkap data pada session tambahkan code berikut.

Selanjutnya lakukan uji coba:

- Sign In
- Sign Out

Jalankan kembali:

```
npm run dev
```

Kemudian jalankan **localhost**, klik **Sign In**, isi textbox, dan setelah login maka akan muncul tombol **Sign Out**.

Ketika user klik **Sign Out**, maka tampilan akan kembali menjadi **Sign In**.

---

## D. Menambahkan Data Tambahan (Full Name)

- Buka file **[...nextauth].js** dan tambahkan code pada **line 22**

- Pada **callbacks**, modifikasi code menjadi berikut.

- Modifikasi **navbar.module.scss**

- Modifikasi **index.tsx** pada folder:

```
components/layouts/navbar
```

- Jalankan browser pada **localhost**

- Lakukan **Sign In**

---

## E. Proteksi Halaman Profile

### Buat Halaman Profile

- Buat file:

```
pages/profile/index.tsx
```

- Modifikasi file **index.tsx**

- Jalankan browser

---

### Buat Middleware Authorization

- Buat folder **middleware** di **src**

- Buat file:

```
withAuth.ts
```

- Modifikasi **withAuth.ts**

- Modifikasi file **middleware.ts**

Jika user mengakses halaman:

```
/profile
```

maka user tidak akan bisa mengaksesnya dan akan diarahkan ke **localhost**.

---

## F. Pengujian

### Uji 1 – Belum Login

Akses:

```
/profile
```

Hasil:

Redirect ke **home**

---

### Uji 2 – Sudah Login

Login terlebih dahulu → Akses:

```
/profile
```

Hasil:

Bisa masuk

---

### Uji 3 – Logout

Klik **Sign Out** → Akses:

```
/profile
```

Hasil:

Tidak bisa masuk

---

## G. Alur Login NextAuth

User klik **Sign In**

↓  

NextAuth menampilkan form credentials  

↓  

`authorize()` dijalankan  

↓  

JWT dibuat  

↓  

Session disimpan  

↓  

Frontend mengakses `useSession()`

---

## H. Tugas Praktikum

1. Implementasikan login menggunakan **Credentials Provider**.
2. Tambahkan field **full name**.
3. Tampilkan **full name** setelah login.
4. Buat halaman **profile**.
5. Lindungi halaman **profile** dengan middleware.

Dokumentasikan:

- Screenshot login
- Screenshot session
- Screenshot redirect middleware

---

## I. Pertanyaan Analisis

1. Mengapa session menggunakan JWT?
2. Apa perbedaan `authorize()` dan callback `jwt()`?
3. Mengapa middleware perlu `getToken()`?
4. Apa risiko jika `NEXTAUTH_SECRET` tidak digunakan?
5. Apa perbedaan autentikasi dan otorisasi dalam sistem ini?
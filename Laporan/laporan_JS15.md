# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 15

# IMPLEMENTASI SISTEM REGISTRASI (DATABASE INTEGRATION)

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

1. Membuat form registrasi.
2. Mengirim data menggunakan metode POST.
3. Membuat API Route untuk register.
4. Melakukan validasi email unik.
5. Meng-hash password menggunakan bcrypt.
6. Menyimpan user ke database.
7. Menampilkan loading dan error handling di frontend.

---

## B. Dasar Teori

### 1. Alur Sistem Register

User isi form  

↓  

Frontend kirim POST ke API  

↓  

API cek method POST  

↓  

Cek email sudah ada?  

↓  

Jika tidak → hash password  

↓  

Simpan ke database  

↓  

Return response

### 2. Mengapa Password Harus Di-Hash?

Password tidak boleh disimpan dalam bentuk plaintext karena:

- Risiko kebocoran data
- Keamanan rendah
- Tidak sesuai best practice

Gunakan:

```
bcrypt
```

---

## C. Langkah Praktikum

### Bagian 1 – Membuat Register View

```
Buat folder pada views dengan nama register dan tambahkan 2 file yaitu index.tsx
dan register.module.scss
```

```
Modifikasi file index.tsx (pada folder views/auth/register/index.tsx)
```

- Buka file **register.tsx** pada folder **auth/register.tsx**

- Modifikasi file **register.tsx** (pada folder **pages/auth/register.tsx**)

- Modifikasi **register.module.scss**

- Tambahkan form inputan pada file **index.tsx** (pada folder **views/auth/register/index.tsx**)  
  Form berisi:

  - Email
  - Full Name
  - Password
  - Button Register

- Kode keseluruahannya sebagai berikut :

- Modifikasi **register.module.scss**

- Jalankan browser:

```
http://localhost:3000/auth/register
```

sehingga tampilan sebagai berikut

---

### Bagian 2 – Membuat API Register

```
Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi
```

- Buat file **register.ts** pada folder **api**

- Modifikasi file **register.ts**

- Modifikasi **index.tsx** pada folder **register** (tambahkan beberapa code)

- Buka browser

```
http://localhost:3000/auth/register
```

isikan data dan klik register. Jika berhasil maka akan masuk ke menu login.

---

### Bagian 3 – Install bcrypt

Install library:

```
npm install bcrypt --force
npm install --save-dev @types/bcrypt –force
```

- Buka file **servicefirebase.ts** pada folder **src/utils/db** dan modifikasi

- Jalankan browser

```
http://localhost:3000/auth/register
```

- Input data setelah itu klik **register**

- Buka pada **firebase** jika berhasil maka data register akan masuk

- Jika user memasukkan data yang sama sistem tidak akan memproses tetapi permasalahannya user memasukkan data yang sama tidak ada pemberitahuan pada layar maka dari itu perlu ada perubahan pada code **index.tsx** pada folder **views/auth/register**

  - Line 41

```
Line 94 dan 96
```

```
Line 34 rubah menjadi email
```

- Modifikasi juga pada **register.module.scss**

- Jika berhasil maka hasilnya seperti berikut

- Tambakan loading dengan menambahkan kode pada **index.tsx**

- Jika berhasil maka hasilnya akan muncul **loading saat klik register**

---

## D. Pengujian

### Uji 1 – Register Baru

Input:

- Email baru

Hasil:

- Data tersimpan di Firestore
- Password ter-hash
- Redirect ke login

---

### Uji 2 – Email Sudah Ada

Input:

- Email yang sama

Hasil:

- Error 400
- Message: Email already exists

---

### Uji 3 – Method GET

Akses:

```
/api/register
```

Hasil:

- 405 Method Not Allowed

---

## E. Struktur Database (Firestore)

Collection:

```
users
```

Field:

| Field | Tipe |
|------|------|
| fullName | string |
| email | string |
| password | string (hashed) |
| role | string |
| createdAt | timestamp |

---

## G. Tugas Praktikum

1. Implementasikan register terhubung database.
2. Tambahkan validasi:
   - Email wajib
   - Password minimal 6 karakter
3. Tambahkan role default **"member"**.
4. Tampilkan pesan error di UI.
5. Screenshot hasil:
   - Register sukses
   - Email sudah ada
   - Database Firestore

---

## H. Pertanyaan Analisis

1. Mengapa password harus di-hash?
2. Apa perbedaan **addDoc** dan **setDoc**?
3. Mengapa perlu validasi method **POST**?
4. Apa risiko jika email tidak dicek unik?
5. Apa fungsi role pada user?

---

## I. Output yang Diharapkan

Mahasiswa menghasilkan:

- Form registrasi berfungsi
- API POST berjalan
- Email unik tervalidasi
- Password ter-hash
- Data tersimpan di Firestore
- Error tampil di UI
- Redirect ke login
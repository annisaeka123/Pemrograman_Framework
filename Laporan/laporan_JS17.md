# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 17

# IMPLEMENTASI LOGIN GOOGLE PROVIDER DENGAN NEXTAUTH.JS + FIREBASE

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

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Mengkonfigurasi Google OAuth melalui Google Cloud Console  
2. Mengintegrasikan Google Provider ke NextAuth.js  
3. Mengelola session dan JWT callback  
4. Menyimpan data user Google ke Firebase Firestore  
5. Mengimplementasikan multi-role (member & admin)  
6. Menampilkan avatar dan data profil user  
7. Memahami alur autentikasi OAuth berbasis provider  

---

## B. Dasar Teori

### 1. Praktikum: Google Login dengan NextAuth.js

---

## C. Langkah Praktikum

### Bagian 1 – Persiapan

Pastikan project sudah memiliki:

- Next.js (App Router atau Pages Router)  
- NextAuth.js terinstall  
- Firebase Firestore terkoneksi  
- Sistem login credential sudah berjalan (opsional)  

---

### Bagian 2 – Konfigurasi Google OAuth

#### Langkah 1 – Masuk ke Google Cloud Console

Buka:

```
https://console.cloud.google.com/apis/credentials
```

#### Langkah 2 – Buat Project Baru

- Klik New Project  
- Nama project: MyAppNext  
- Klik Create  

- Setelah berhasil, buka kembali:
```
https://console.cloud.google.com/apis/credentials
```
Pastikan projectnya **MyAppNext**

---

#### Langkah 3 – Konfigurasi OAuth Consent Screen

1. Pilih OAuth consent screen  
2. Pilih Get Started  

3. Maka akan muncul seperti berikut dan isikan  

```
Klik create
```

---

#### Langkah 4 – Buat OAuth Credentials

1. Klik create client pada Clients  

---

### Bagian 3 – Tambahkan Environment Variables

1. Copy dan paste client ID dan Client secret ke `.env`  

---

### Bagian 4 – Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session

1. Buka file `[...nextauth].ts` pada folder `api/auth` dan modifikasi menjadi berikut  

---

### Bagian 5 – Tambahkan Button Login Google

1. Modifikasi file `index.tsx` pada folder `views/auth/login`  
2. Jalankan browser:

```
localhost:3000/auth/login
```

Masuk melalui **sign in with google**. Jika berhasil maka akan terhubung dengan akun Google.  

```
Note: data akun google tidak tersimpan dalam database
```

---

### Bagian 6 – Menampilkan Avatar Google

- Buka file `index.tsx` dan tambahkan code berikut  

```
Buka file navbar.module.css dan tambahkan code berikut
```

```
Jika berhasil maka tampilannya akan seperti berikut
```

---

### Bagian 7 – Simpan Data Google ke Database

```
Buka file servicefirebase.ts pada folder src/utils/db/ dan tambahkan beberapa kode berikut
```

```
Tambahkan juga code berikut
```

- Panggil service di JWT Callback buka file `[...nextAuth].ts`  

```
Jalankan browser dan login menggunakan akun google setelah cek di firebase, jika data akun googlenya masuk ke database maka anda telah berhasil
```

---

## D. Pengujian

| Skenario | Hasil yang Diharapkan |
|----------|----------------------|
| Login Google pertama kali | Data tersimpan di Firestore |
| Login Google kedua kali | Data diupdate |
| User role member akses /admin | Redirect |
| User role admin akses /admin | Bisa masuk |
| Avatar tampil | Ya |

---

## E. Analisis & Diskusi

1. Apa perbedaan login credential dan login Google?  
2. Mengapa data Google tetap perlu disimpan ke database?  
3. Apa fungsi JWT callback?  
4. Mengapa perlu multi-role?  
5. Apa risiko jika tidak menyimpan user ke database?  

---

## F. Tugas Mandiri

1. Tambahkan role editor  
2. Buat halaman khusus editor  
3. Tambahkan provider GitHub  
4. Refactor service agar reusable  
5. Gunakan next/image untuk optimasi avatar  

---

## G. Kesimpulan

Pada praktikum ini mahasiswa telah:

- Mengimplementasikan Google OAuth  
- Mengintegrasikan dengan NextAuth.js  
- Menyimpan user ke Firestore  
- Mengelola JWT dan Session  
- Mengimplementasikan Multi-Role  
- Menampilkan avatar profil  
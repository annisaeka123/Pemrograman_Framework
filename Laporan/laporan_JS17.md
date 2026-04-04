<img width="488" height="786" alt="image" src="https://github.com/user-attachments/assets/2a17d8f3-3adf-494c-a9e3-9a3af4605ca8" /># PEMROGRAMAN BERBASIS FRAMEWORK

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

<img width="1919" height="923" alt="image" src="https://github.com/user-attachments/assets/dbdbcfe7-e834-4170-bb1d-afdf80562500" />



#### Langkah 2 – Buat Project Baru

- Klik New Project

  <img width="949" height="953" alt="image" src="https://github.com/user-attachments/assets/bf3b3758-2116-4b47-8405-23f1910ffb78" />

- Nama project: MyAppNext

  <img width="938" height="736" alt="image" src="https://github.com/user-attachments/assets/a8fa647a-f54c-4b60-a936-df25e99aa35a" />

- Klik Create  

- Setelah berhasil, buka kembali:
```
https://console.cloud.google.com/apis/credentials
```
Pastikan projectnya **MyAppNext**

<img width="950" height="845" alt="image" src="https://github.com/user-attachments/assets/b9cf37bd-da9f-4bef-9959-269118d19094" />


---

#### Langkah 3 – Konfigurasi OAuth Consent Screen

1. Pilih OAuth consent screen  

    <img width="498" height="454" alt="image" src="https://github.com/user-attachments/assets/cf96e1dd-a7a9-4218-96ab-a3f5b478857a" />

2. Pilih Get Started  

    <img width="939" height="859" alt="image" src="https://github.com/user-attachments/assets/ce914472-28a6-4572-87e5-bd937aaa909c" />

3. Maka akan muncul seperti berikut dan isikan

   <img width="942" height="865" alt="image" src="https://github.com/user-attachments/assets/c5ea39a8-1d9a-48d7-b667-dda6e659a56e" />

   <img width="743" height="655" alt="image" src="https://github.com/user-attachments/assets/b20a02d6-8c96-4bc5-a3e6-2d75e0b9f0cb" />

   <img width="943" height="800" alt="image" src="https://github.com/user-attachments/assets/bfc110cd-49c6-4b01-897b-752cb408b9b3" />

   <img width="943" height="722" alt="image" src="https://github.com/user-attachments/assets/8b3b2dec-5df3-4426-bef6-0287fa9fa673" />


```
Klik create
```

---

#### Langkah 4 – Buat OAuth Credentials

1. Klik create client pada Clients

    <img width="956" height="431" alt="image" src="https://github.com/user-attachments/assets/ebec6c87-0962-42c9-8882-9e79815bb14b" />

    <img width="950" height="856" alt="image" src="https://github.com/user-attachments/assets/3c8b2523-f6db-466c-81e3-f6d04e753f81" />



---

### Bagian 3 – Tambahkan Environment Variables

1. Copy dan paste client ID dan Client secret ke `.env`

   <img width="271" height="389" alt="image" src="https://github.com/user-attachments/assets/bc645a42-5292-4c0d-9628-c3cfc61f016a" />



---

### Bagian 4 – Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session

1. Buka file `[...nextauth].ts` pada folder `api/auth` dan modifikasi menjadi berikut

   <img width="688" height="916" alt="image" src="https://github.com/user-attachments/assets/d43c6f08-18a6-4221-b928-db2255108d3e" />

   <img width="562" height="579" alt="image" src="https://github.com/user-attachments/assets/a164c642-3109-4d42-b8fd-87ee6d2dd722" />



---

### Bagian 5 – Tambahkan Button Login Google

1. Modifikasi file `index.tsx` pada folder `views/auth/login`  

    <img width="996" height="376" alt="image" src="https://github.com/user-attachments/assets/729a817b-8db7-46f4-bb89-0788befc1319" />


2. Jalankan browser:

```
localhost:3000/auth/login
```

Masuk melalui **sign in with google**. Jika berhasil maka akan terhubung dengan akun Google.  

<img width="951" height="952" alt="image" src="https://github.com/user-attachments/assets/3ddb1e66-ba44-4e47-8c1b-6228db1b418f" />

```
Note: data akun google tidak tersimpan dalam database
```

---

### Bagian 6 – Menampilkan Image dari Google

- Buka file `navbar/index.tsx` dan tambahkan code berikut

  <img width="653" height="514" alt="image" src="https://github.com/user-attachments/assets/f1616165-6b10-4225-bf6f-800691266251" />

- Buka file navbar.module.css dan tambahkan code berikut

  <img width="747" height="696" alt="image" src="https://github.com/user-attachments/assets/e15f9691-a18f-43f9-993b-bdf23ea53f90" />


- Jika berhasil maka tampilannya akan seperti berikut

  <img width="1919" height="435" alt="image" src="https://github.com/user-attachments/assets/a5c929c6-783d-4255-93f2-ddf6ce3ea6ff" />


---

### Bagian 7 – Simpan Data Google ke Database

- Buka file servicefirebase.ts pada folder src/utils/db/ dan tambahkan beberapa kode

  <img width="378" height="252" alt="image" src="https://github.com/user-attachments/assets/e19a56a1-9b59-41a0-92a5-50aa8b41dada" />


  <img width="570" height="771" alt="image" src="https://github.com/user-attachments/assets/943fe05b-57c2-4d1e-9db1-3ffe422400a4" />


- Panggil service di JWT Callback buka file `[...nextAuth].ts`

  <img width="679" height="679" alt="image" src="https://github.com/user-attachments/assets/819c7ada-a626-4ca0-ad7e-b48850f61026" />

- Jalankan browser dan login menggunakan akun google setelah cek di firebase, jika data akun googlenya masuk ke database maka anda telah berhasil

  <img width="786" height="501" alt="image" src="https://github.com/user-attachments/assets/82581903-a192-44be-ab5f-cf42d5248723" />



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

    Login credential menggunakan email dan password yang dibuat serta dikelola langsung oleh sistem aplikasi. Data autentikasi disimpan di database dan diverifikasi secara manual menggunakan metode seperti bcrypt.

    Sedangkan login Google menggunakan layanan OAuth dari Google, di mana proses autentikasi dilakukan oleh pihak ketiga (Google). Aplikasi hanya menerima data user yang sudah diverifikasi tanpa perlu mengelola password secara langsung.

2. Mengapa data Google tetap perlu disimpan ke database?  

    Data pengguna dari Google tetap perlu disimpan ke database agar aplikasi dapat mengelola informasi user secara internal, seperti menyimpan role, riwayat aktivitas, dan preferensi pengguna. Selain itu, penyimpanan ini juga memungkinkan integrasi dengan fitur lain dalam aplikasi yang membutuhkan identitas user secara konsisten.

3. Apa fungsi JWT callback?  

    JWT callback berfungsi untuk memproses dan menyimpan data tambahan ke dalam token saat proses autentikasi berlangsung. Data seperti user ID, email, dan role dapat dimasukkan ke dalam token sehingga dapat digunakan di berbagai bagian aplikasi tanpa perlu melakukan query ulang ke database.

4. Mengapa perlu multi-role?  

    Multi-role diperlukan untuk mengatur hak akses pengguna dalam aplikasi. Dengan adanya role seperti admin dan member, sistem dapat membatasi fitur atau halaman tertentu hanya untuk pengguna tertentu. Hal ini penting untuk menjaga keamanan, mengontrol akses, dan memastikan setiap user hanya dapat melakukan tindakan sesuai dengan perannya.

5. Apa risiko jika tidak menyimpan user ke database?

   Jika data user tidak disimpan ke database, maka aplikasi tidak dapat mengelola informasi pengguna secara lengkap, seperti role, histori, atau preferensi. Selain itu, setiap kali user login, sistem harus bergantung sepenuhnya pada provider (Google), yang dapat menyebabkan keterbatasan dalam pengelolaan akses dan fitur. Hal ini juga berisiko dalam hal konsistensi data dan pengembangan fitur lanjutan.

---

## F. Tugas Mandiri

1. Tambahkan role editor  

    <img width="773" height="783" alt="image" src="https://github.com/user-attachments/assets/817871e9-906f-4687-b3d6-9c75dc685d02" />

    <img width="1200" height="323" alt="image" src="https://github.com/user-attachments/assets/a0792436-02ed-4466-9069-35a81f733f2f" />

    <img width="692" height="364" alt="image" src="https://github.com/user-attachments/assets/ffb23b86-78c7-4bce-9dba-5afa9f50ee2d" />


2. Buat halaman khusus editor  

    <img width="814" height="439" alt="image" src="https://github.com/user-attachments/assets/e8bb2de0-5c10-4ebd-97e6-07863b60d139" />

    <img width="955" height="409" alt="image" src="https://github.com/user-attachments/assets/f24360c5-6e4e-42d9-a3d2-56441a6f69b5" />


3. Tambahkan provider GitHub  

    - Modifikasi pages/api/auth/[...nextauth].ts

      <img width="760" height="168" alt="image" src="https://github.com/user-attachments/assets/a6187a1e-ce08-44a6-99f7-90b23a647b9d" />

      <img width="756" height="349" alt="image" src="https://github.com/user-attachments/assets/adfd0a01-7dcd-4877-bf78-a56c00ac8723" />

      <img width="556" height="802" alt="image" src="https://github.com/user-attachments/assets/3f052c40-3211-49cb-8a03-0f518118d876" />


    - Ambil client ID & secret dari GitHub (https://github.com/settings/developers)

      <img width="993" height="952" alt="image" src="https://github.com/user-attachments/assets/0ad7c2a2-8d72-4379-9862-2e63c9123f68" />

      <img width="930" height="926" alt="image" src="https://github.com/user-attachments/assets/55ebf890-68aa-40fd-890e-658d80a983a6" />


    - Copy client ID & secret dan masukan ke .env

      <img width="256" height="52" alt="image" src="https://github.com/user-attachments/assets/f9fada64-8cb4-4c0b-a7e6-459e0046ba6c" />

    - Tambah tombol Login dengan Github (index.tsx)

      <img width="771" height="361" alt="image" src="https://github.com/user-attachments/assets/caf40bc3-8fd7-40df-b662-42f20bc60454" />

    - Hasil
  
      <img width="697" height="694" alt="image" src="https://github.com/user-attachments/assets/21c12187-1833-483d-a91d-e63bf9c4f482" />

      <img width="956" height="463" alt="image" src="https://github.com/user-attachments/assets/77ebe76e-ddb0-4f82-bea5-7cd1aa88355b" />

      <img width="827" height="493" alt="image" src="https://github.com/user-attachments/assets/79beb413-80bc-4879-85d3-fc0f89736192" />


4. Refactor service agar reusable  

    Mengubah fungsi service agar tidak menggunakan callback, tetapi menggunakan return value, serta menyederhanakan struktur fungsi agar dapat digunakan kembali di berbagai bagian aplikasi seperti NextAuth, API, dan halaman frontend.

    - Buat folder services

      <img width="199" height="197" alt="image" src="https://github.com/user-attachments/assets/4ba26ac4-4403-4eb2-a102-ffe0e7d3a3eb" />

      - authService.ts

        <img width="544" height="875" alt="image" src="https://github.com/user-attachments/assets/0279234d-a1f2-4a5e-9a0e-0a927728556f" />

        <img width="502" height="484" alt="image" src="https://github.com/user-attachments/assets/861015a3-41fa-4f8c-bfd1-1e88b4e0be59" />


      - produkService.ts

        <img width="599" height="310" alt="image" src="https://github.com/user-attachments/assets/327d0893-6c45-49ab-a329-bbcd2109b070" />

    - Modifikasi servicefirebase.ts

      <img width="497" height="885" alt="image" src="https://github.com/user-attachments/assets/ab3e5402-ca3f-4942-9170-792edab44bb8" />

      <img width="471" height="898" alt="image" src="https://github.com/user-attachments/assets/838f633d-401c-40f7-83ed-98350652fbce" />



    - Modifikasi [...nextauth].ts

      <img width="534" height="871" alt="image" src="https://github.com/user-attachments/assets/fdd8ee2b-d247-4e16-8458-81fb4c3d5187" />

      <img width="488" height="786" alt="image" src="https://github.com/user-attachments/assets/0e5b1999-9c80-458e-8991-9d45948353f1" />

    - Modifikasi firebase.ts

      <img width="729" height="568" alt="image" src="https://github.com/user-attachments/assets/62b74efe-0bb8-4fef-ab83-8c5a28988c0b" />


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

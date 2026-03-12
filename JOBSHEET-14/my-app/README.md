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

<img width="803" height="251" alt="image" src="https://github.com/user-attachments/assets/ff314ad9-6018-45f5-be60-72583f224b2c" />


### Bagian 2 – Konfigurasi API Auth

- Buat file dan folder pada:

    ```
    pages/api/auth/[...nextauth].ts
    ```

  <img width="298" height="212" alt="image" src="https://github.com/user-attachments/assets/d74e5127-b07d-441c-915a-f965c8431f73" />


- Modifikasi file **[...nextauth].ts**

  <img width="520" height="882" alt="image" src="https://github.com/user-attachments/assets/98b89bba-4980-4868-8fdf-dce8f9a06fa4" />



### Bagian 3 – Tambahkan Secret

- Buka file **.env.local** dan tambahkan code:

```
NEXTAUTH_SECRET=RANDOM_BASE64_STRING
```

Untuk mendapatkan nilai **RANDOM_BASE64_STRING** gunakan generator:

https://www.convertsimple.com/random-base64-generator/

<img width="1144" height="114" alt="image" src="https://github.com/user-attachments/assets/28e7a776-eaef-408a-b571-a7405b11a0cd" />


### Bagian 4 – Tambahkan SessionProvider

- Buka file **_app.tsx** dan modifikasi.

  <img width="1010" height="418" alt="image" src="https://github.com/user-attachments/assets/a580e5bb-4494-4f99-a451-354d8e8a836d" />


### Bagian 5 – Tambahkan Tombol Login & Logout

- Buka file **index.tsx** pada folder:

  ```
  components/navbar
  ```

  <img width="270" height="200" alt="image" src="https://github.com/user-attachments/assets/636667d4-d6d0-45cf-ace0-326cc14aa10e" />


- Modifikasi file **index.tsx** pada line **1 dan 7**

  <img width="683" height="336" alt="image" src="https://github.com/user-attachments/assets/caee69e3-58ed-4efe-a931-2cb7a2e967ce" />


- Buka file **navbar.module.scss** dan tambahkan code pada line **9**

  <img width="713" height="319" alt="image" src="https://github.com/user-attachments/assets/4811e943-a8a3-4470-89a1-e0eed0dea664" />


- Jalankan:

  ```
  http://localhost:3000/
  ```

  <img width="959" height="501" alt="image" src="https://github.com/user-attachments/assets/9244fbbc-ad9f-4880-930c-38968c8ccda5" />


- Jika tombol **Sign In** diklik maka akan muncul form login. Isi textbox yang tersedia kemudian klik **Sign In** dan halaman akan kembali ke **localhost**.

  <img width="955" height="950" alt="image" src="https://github.com/user-attachments/assets/f8977297-a97d-42af-ac18-1a4143470cd3" />


- Setelah berhasil login maka akan muncul **session**.

  <img width="1919" height="684" alt="image" src="https://github.com/user-attachments/assets/b7cc351e-53fa-43a0-873b-5ba0dae6c3cf" />


- Untuk menangkap data pada session tambahkan code berikut.

  <img width="755" height="488" alt="image" src="https://github.com/user-attachments/assets/48996d3b-f978-49fd-818c-76d066376652" />


- Uji coba sign in dan sign out

  - Jalankan kembali:

    ```
    npm run dev
    ```
  -  Jalankan localhost

     <img width="951" height="525" alt="image" src="https://github.com/user-attachments/assets/1ba3985a-0ba6-4e8a-83fc-ad522db5575a" />

  -  Klik sign in dan isikan textboxnya

     <img width="950" height="953" alt="image" src="https://github.com/user-attachments/assets/8bad8e00-efda-4c7a-a6fe-302ad200d6a1" />

  -  Maka akan muncul tombol signout

     <img width="954" height="715" alt="image" src="https://github.com/user-attachments/assets/08cb644a-a8c7-4f06-9c11-9013ee03a948" />

  -  Ketika user klik signout maka akan kembali sign in

     <img width="948" height="559" alt="image" src="https://github.com/user-attachments/assets/23edee3c-f445-4dc0-90fd-c4d7fd34679b" />

    

---

## D. Menambahkan Data Tambahan (Full Name)

- Buka file **[...nextauth].js** 

- Pada **callbacks**, modifikasi code menjadi berikut.

  <img width="651" height="523" alt="image" src="https://github.com/user-attachments/assets/8bbcab9c-62f3-44f7-9667-4aeeb8d4768c" />


- Modifikasi **navbar.module.scss**

  <img width="482" height="814" alt="image" src="https://github.com/user-attachments/assets/f0a8a35b-9da0-4c18-b5f4-2847e2c4c532" />



  <img width="319" height="525" alt="image" src="https://github.com/user-attachments/assets/370ef3dd-e9c8-4da3-98f0-3ad4b6f90beb" />



- Modifikasi **index.tsx** pada folder:

  ```
  components/layouts/navbar
  ```

  <img width="780" height="824" alt="image" src="https://github.com/user-attachments/assets/99007bee-79d8-49eb-b068-08eeaa43e637" />


- Jalankan browser pada **localhost**

  <img width="958" height="526" alt="image" src="https://github.com/user-attachments/assets/389db67c-9f70-4141-98a8-c5e6a4f804ad" />


- Lakukan **Sign In**

  <img width="920" height="999" alt="image" src="https://github.com/user-attachments/assets/6d20afea-8b35-4179-84e6-5c599a2bcf35" />

  <img width="954" height="767" alt="image" src="https://github.com/user-attachments/assets/c3c0e181-52f1-477a-a78a-bb8cf95e7805" />


---

## E. Proteksi Halaman Profile

### Buat Halaman Profile

- Buka file **pages/profile/index.tsx** dan modifikasi file **index.tsx**

  <img width="592" height="388" alt="image" src="https://github.com/user-attachments/assets/8c6e8a42-8f72-4458-836e-bc8a4cd73972" />


- Jalankan browser

  <img width="953" height="585" alt="image" src="https://github.com/user-attachments/assets/6c015c83-a240-4635-9c43-de13611c2d0d" />



### Buat Middleware Authorization

- Buat folder **middleware** di **src**

- Buat file:

  ```
  withAuth.ts
  ```

  <img width="199" height="120" alt="image" src="https://github.com/user-attachments/assets/a8c2e320-d596-4fa7-bde3-376ae13e4036" />


- Modifikasi **withAuth.ts**

  <img width="913" height="594" alt="image" src="https://github.com/user-attachments/assets/3cb3c57c-55e8-4bd3-b057-2680e1703609" />


- Modifikasi file **middleware.ts**

  <img width="596" height="356" alt="image" src="https://github.com/user-attachments/assets/322788cf-99aa-4819-a1bd-73e0a990d833" />


- Jika user mengakses halaman `profile` maka user tidak akan bisa mengaksesnya dan akan diarahkan ke **localhost**.

---

## F. Pengujian

### Uji 1 – Belum Login

Akses:

```
/profile
```

Hasil:

Redirect ke **home**

<img width="956" height="629" alt="image" src="https://github.com/user-attachments/assets/9661b3dc-ae90-4a86-90b7-f4c352d57909" />



### Uji 2 – Sudah Login

Login terlebih dahulu → Akses:

```
/profile
```

Hasil:

Bisa masuk

<img width="953" height="998" alt="image" src="https://github.com/user-attachments/assets/8c43f300-d690-4017-b68e-c98d632eb83a" />

<img width="953" height="682" alt="image" src="https://github.com/user-attachments/assets/ae672088-0b23-4877-9615-2b33fbbf87d0" />


### Uji 3 – Logout

Klik **Sign Out** → Akses:

```
/profile
```

Hasil:

Tidak bisa masuk

<img width="951" height="715" alt="image" src="https://github.com/user-attachments/assets/42f1490e-5173-4750-9fe8-8c9306ec3f76" />


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
    Login pada aplikasi diimplementasikan menggunakan Credentials Provider dari NextAuth. Provider ini memungkinkan pengguna melakukan autentikasi menggunakan email dan password. Proses verifikasi dilakukan pada fungsi authorize() yang akan memeriksa data kredensial yang dimasukkan oleh pengguna. Jika data valid, maka NextAuth akan membuat JWT token dan menyimpan informasi pengguna pada session sehingga dapat diakses di sisi frontend menggunakan useSession().
  
    `pages/api/auth/[...nextauth].ts`
  
   <img width="430" height="787" alt="image" src="https://github.com/user-attachments/assets/7c64b7dd-7599-46ab-b7eb-ec6fb165f5d9" />

2. Tambahkan field **full name**.

    `pages/api/auth/[...nextauth].ts`

    <img width="626" height="569" alt="image" src="https://github.com/user-attachments/assets/07442d6f-3e23-49f1-ad67-67805db4b196" />

3. Tampilkan **full name** setelah login.

    `pages/api/auth/[...nextauth].ts`

    <img width="593" height="531" alt="image" src="https://github.com/user-attachments/assets/12dee761-92d5-44d4-95c5-d0d407490ba7" />

4. Buat halaman **profile**.

    `pages/profile/index.tsx`

    <img width="639" height="414" alt="image" src="https://github.com/user-attachments/assets/e85401a9-4342-4739-b129-aa44e7784299" />

5. Lindungi halaman **profile** dengan middleware.

    `src/middleware.ts`

    <img width="592" height="362" alt="image" src="https://github.com/user-attachments/assets/47b5a162-3bd4-43df-ab6c-3ecfbe2dd3f8" />

6. Dokumentasikan:

    - Screenshot login

      <img width="962" height="1013" alt="image" src="https://github.com/user-attachments/assets/0a871e6f-e7bc-4357-ab7a-cdf1004ff87a" />

    - Screenshot session

      <img width="950" height="651" alt="image" src="https://github.com/user-attachments/assets/ea8cdaa5-fa15-4ca6-8424-aee7d949bd49" />

      <img width="954" height="621" alt="image" src="https://github.com/user-attachments/assets/4b8822c7-cb88-4ab6-8455-66499b85d182" />


    - Screenshot redirect middleware

      <img width="950" height="681" alt="image" src="https://github.com/user-attachments/assets/0f889f62-fd05-46c0-96e1-cea56686cc62" />


---

## I. Pertanyaan Analisis

**1. Mengapa session menggunakan JWT?**

  Session menggunakan JWT (JSON Web Token) karena JWT memungkinkan penyimpanan data autentikasi secara aman tanpa harus menyimpan session di server. Token akan dikirim ke client setelah proses login berhasil dan disimpan di browser. Setiap kali user mengakses halaman tertentu, token tersebut dapat digunakan untuk memverifikasi identitas user. Dengan menggunakan JWT, proses autentikasi menjadi lebih efisien, stateless, dan mudah digunakan pada aplikasi modern seperti Next.js.

**2. Apa perbedaan `authorize()` dan callback `jwt()`?**

Fungsi authorize() digunakan untuk memverifikasi data login yang dimasukkan oleh pengguna, seperti email dan password. Jika data yang diberikan valid, fungsi ini akan mengembalikan data user yang akan digunakan untuk membuat session.

Sedangkan callback jwt() digunakan setelah proses autentikasi berhasil untuk menyimpan atau memodifikasi data yang akan dimasukkan ke dalam token JWT. Data seperti email atau fullname biasanya ditambahkan pada tahap ini agar dapat digunakan kembali pada session di frontend.

**3. Mengapa middleware perlu `getToken()`?**

Middleware menggunakan getToken() untuk mengambil dan memeriksa token JWT dari request yang dikirim oleh user. Dengan token tersebut, middleware dapat mengetahui apakah user sudah login atau belum. Jika token tidak ditemukan, middleware akan melakukan redirect ke halaman lain, sehingga halaman yang dilindungi tidak dapat diakses oleh user yang belum melakukan login.

**4. Apa risiko jika `NEXTAUTH_SECRET` tidak digunakan?**

  NEXTAUTH_SECRET digunakan untuk mengenkripsi dan memverifikasi token JWT agar tidak dapat dimanipulasi oleh pihak lain. Jika secret ini tidak digunakan, maka token JWT menjadi kurang aman dan berpotensi dimodifikasi oleh pengguna yang tidak bertanggung jawab. Hal ini dapat menyebabkan kebocoran data atau akses tidak sah ke sistem.

**5. Apa perbedaan autentikasi dan otorisasi dalam sistem ini?**

Autentikasi adalah proses untuk memverifikasi identitas pengguna, misalnya dengan memasukkan email dan password saat login. Proses ini memastikan bahwa pengguna benar-benar adalah orang yang memiliki akun tersebut.

Sedangkan otorisasi adalah proses untuk menentukan apakah pengguna yang sudah terverifikasi memiliki hak akses untuk membuka suatu halaman atau fitur tertentu. Dalam sistem ini, middleware digunakan untuk mengatur otorisasi dengan membatasi akses ke halaman seperti /profile hanya untuk user yang sudah login.

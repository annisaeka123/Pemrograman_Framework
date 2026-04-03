# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 16

# IMPLEMENTASI LOGIN DATABASE & MULTI-ROLE

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

- Tambahkan custom page di NextAuth line 52-54

  <img width="219" height="220" alt="image" src="https://github.com/user-attachments/assets/570ae85c-ac58-4161-ad24-8bccb0eb8892" />

  <img width="579" height="202" alt="image" src="https://github.com/user-attachments/assets/75bf88e5-ee22-44fb-842b-90db7f97a507" />


- Jalankan browser:

  ```
  http://localhost:3000/
  ```

  dan klik sign in maka akan diarahkan ke login  

---

### Bagian 2 – Handle Login di Frontend

- Copy paste isi dari register/index.tsx ke file login/index.tsx

  <img width="231" height="255" alt="image" src="https://github.com/user-attachments/assets/beb0e2f9-eb8d-4806-80db-418eb03404f7" />

- Copy paste isi dari register/register.module.scss ke file login/login.module.scss  
- Semua text register pada file index.tsx pada folder login diubah menjadi login (ctrl+H)

  <img width="788" height="565" alt="image" src="https://github.com/user-attachments/assets/4e6db60f-1a5c-43e6-9ac9-303c8c4d8f6d" />

- Jangan lupa setting link hrefnya

  <img width="1023" height="105" alt="image" src="https://github.com/user-attachments/assets/da43788e-bbfc-4d58-b971-2066eec72329" />


- Lakukan hal yang sama pada file login.module.scss rubah text register menjadi login

  <img width="569" height="614" alt="image" src="https://github.com/user-attachments/assets/ec875b8b-7347-4ef9-85d6-8e9efcbb75fd" />

- Cek pada file login.tsx pada pages/auth

  <img width="587" height="368" alt="image" src="https://github.com/user-attachments/assets/a0ee9f44-4eae-4406-a94a-324bbd28fe21" />

- Jalankan browser:

  ```
  localhost:3000/auth/login
  ```

  Tampilannya akan sama dengan register

  <img width="962" height="973" alt="image" src="https://github.com/user-attachments/assets/fa2f5a79-e796-4297-80ef-e45ea31de5f1" />


- Pada tampilan login kita tidak perlu input fullname, jadi pada folder  
  views/auth/login/index.tsx hapus kode fullname  

  <img width="688" height="572" alt="image" src="https://github.com/user-attachments/assets/eabf670a-a38b-45d5-8d3c-d1c0dc4b71ea" />

  Sehingga hasilnya seperti berikut :

  <img width="957" height="968" alt="image" src="https://github.com/user-attachments/assets/fee3eccd-9997-465c-b1c4-700cb2aa9acb" />



- Buka file index.tsx pada folder views/auth/login dan modifikasi codenya seperti berikut  

  <img width="509" height="741" alt="image" src="https://github.com/user-attachments/assets/2ca58043-94b8-4250-b1a0-9c2d5aca5a45" />


  ```
  Note pastikan tulisan password pada event.password.value pada line 48 sama dengan yang ada di
  ```

  <img width="472" height="210" alt="image" src="https://github.com/user-attachments/assets/0fda2ea6-a6da-4d0f-b954-b67ebe81a1aa" />


- Buka file servicefirebase.ts dan tambahkan code di line 32-44

   <img width="750" height="310" alt="image" src="https://github.com/user-attachments/assets/cf6639a5-7145-44f7-94d3-4f985c14b6d7" />


---

### Bagian 3 – Authorize di NextAuth (Database Login)

- Buka file [...nextauth].ts modifikasi menjadi berikut (pada bagian providers)

  <img width="566" height="729" alt="image" src="https://github.com/user-attachments/assets/cfefac53-5e4e-4678-8e03-dc9d924ff35b" />


---

### Bagian 4 – Tambahkan Role ke Token

- JWT Callback pada file [...nextauth].ts modifikasi menjadi

  <img width="635" height="573" alt="image" src="https://github.com/user-attachments/assets/badbe88f-2b0b-4396-9689-bc4ff8176a1b" />

- Jalankan browser:

  ```
  http://localhost:3000/auth/login
  ```

  <img width="606" height="557" alt="image" src="https://github.com/user-attachments/assets/13ba8ce8-b495-421d-adfe-36a810c59c4c" />


#### Note ERROR

JIKA TERDAPAT ERROR SEPERTI INI DISEBABKAN KARENA  

In this case, the problem is that a `<head>` tag is being rendered inside a `<div>`, which is invalid HTML. The `<head>` element must be a direct child of `<html>`, not nested inside other elements.

<img width="1919" height="736" alt="image" src="https://github.com/user-attachments/assets/f358c868-9cff-4dcb-9c61-0b8897001edc" />


#### SOLUSI

Buka file:

```
SRC/VIEWS/AUTH/LOGIN/INDEX.TSX
```

<img width="728" height="601" alt="image" src="https://github.com/user-attachments/assets/a6127196-2349-496d-9906-42b6d79362bc" />


Tambahkan:

```
<> </>
```

Seperti pada gambar (line 67 dan 116)

<img width="791" height="637" alt="image" src="https://github.com/user-attachments/assets/77dd7934-3079-4f3e-a0e0-5da492393cea" />

<img width="1919" height="641" alt="image" src="https://github.com/user-attachments/assets/0c856f2e-ba10-406b-b16f-9e85621870e2" />


---

### Bagian 5 – Callback URL Logic

- Modifikasi withAuth.ts pada folder src/middleware

  <img width="936" height="743" alt="image" src="https://github.com/user-attachments/assets/05420c0a-ffe5-4b35-8cfc-d6ff7d924d42" />



Tujuannya:  

Setelah login, user kembali ke halaman sebelumnya.

---

### Bagian 6 – Membuat Halaman Admin dan Authorization

- Buat halaman admin

  <img width="191" height="114" alt="image" src="https://github.com/user-attachments/assets/f4e8429a-39cd-4e4b-8358-e5ced429e452" />

- Pada index.tsx tambahkan code berikut

  <img width="1133" height="339" alt="image" src="https://github.com/user-attachments/assets/a6246289-b719-43c0-9d1c-2b6ab3aaf398" />

- Modifikasi withAuth.ts

  <img width="914" height="773" alt="image" src="https://github.com/user-attachments/assets/8302c843-d9cc-411e-8015-85cb25928432" />


- Jalankan browser:

  ```
  localhost:3000/produk
  ```

  pada status sudah login, ubah URL menjadi:

  ```
  http://localhost:3000/admin
  ```

  maka user akan diarahkan ke localhost.

  Intinya role selain admin tidak bisa mengakses  

- Untuk mencoba halaman admin, ubah role pada firebase pada salah satu akun dan jalankan:

  ```
  http://localhost:3000/admin
  ```

  <img width="1696" height="493" alt="image" src="https://github.com/user-attachments/assets/7f75a50d-d96f-43ce-89c6-1d486a775d91" />


  <img width="1919" height="538" alt="image" src="https://github.com/user-attachments/assets/458e8e8c-6bfa-4bdb-9b46-1b57529a9b78" />


---

## D. Pengujian

### Uji 1 – Login Valid

Input:

<img width="962" height="972" alt="image" src="https://github.com/user-attachments/assets/513fe487-f0e8-4edd-b402-7cafa4680017" />


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

<img width="959" height="970" alt="image" src="https://github.com/user-attachments/assets/e4b77cce-bb07-4695-899e-ae522b00a602" />

- Error message tampil  
- Tidak login  

---

### Uji 3 – Akses Admin sebagai User

Login sebagai:

- role: user  

<img width="966" height="970" alt="image" src="https://github.com/user-attachments/assets/0b9f540a-8836-4213-b5ba-77210c2a02a8" />

Akses:

```
/admin
```

Hasil:

<img width="1919" height="489" alt="image" src="https://github.com/user-attachments/assets/2a6e93cf-1214-4cca-8d84-3f272dd30c76" />

- Redirect ke home  

---

### Uji 4 – Akses Admin sebagai Admin

Login sebagai:

- role: admin

<img width="690" height="594" alt="image" src="https://github.com/user-attachments/assets/f62816cf-1e0a-46df-9f89-b08acf24894b" />


Akses:

```
/admin
```

Hasil:

<img width="1919" height="449" alt="image" src="https://github.com/user-attachments/assets/97df008c-9423-40fa-97ce-02cb660d81de" />

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

    Login sudah tersambung dengan database

2. Tambahkan role pada user.  
3. Buat halaman:  
   - /profile

     <img width="318" height="86" alt="image" src="https://github.com/user-attachments/assets/a8d5b835-d05f-433a-b900-91a0bd1e7642" />

     <img width="959" height="591" alt="image" src="https://github.com/user-attachments/assets/f00bf855-eba9-4a7c-8371-a8518b9e99ed" />

   - /admin

     <img width="262" height="111" alt="image" src="https://github.com/user-attachments/assets/830bf856-99d2-4469-b80f-b65ba0f09dc4" />

     <img width="1919" height="490" alt="image" src="https://github.com/user-attachments/assets/a8c5a0ee-cf49-4281-bdc6-784acc5c67e8" />


4. Proteksi /admin hanya untuk admin.  

    <img width="972" height="758" alt="image" src="https://github.com/user-attachments/assets/8319d945-3024-480f-aebc-d79eafd34786" />

5. Implementasikan callback URL.

     <img width="521" height="204" alt="image" src="https://github.com/user-attachments/assets/948f332d-7774-4085-9fc7-970f5b942872" />


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

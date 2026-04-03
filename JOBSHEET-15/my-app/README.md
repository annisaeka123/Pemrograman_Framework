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

- Buat folder pada views dengan nama register dan tambahkan 2 file yaitu index.tsx dan register.module.scss

  <img width="271" height="177" alt="Screenshot 2026-04-01 124016" src="https://github.com/user-attachments/assets/5f082dd4-e899-4911-9a78-044ef9bfaa09" />



- Modifikasi file index.tsx (pada folder views/auth/register/index.tsx)

  <img width="825" height="380" alt="Screenshot 2026-04-01 124330" src="https://github.com/user-attachments/assets/cf6437ad-5f7e-49ed-a0b1-aec04d641a42" />


- Buka file **register.tsx** pada folder **auth/register.tsx**

  <img width="259" height="167" alt="Screenshot 2026-04-01 124727" src="https://github.com/user-attachments/assets/7d84bad4-a3b8-4312-8379-7fb62b780c9f" />



- Modifikasi file **register.tsx** (pada folder **pages/auth/register.tsx**)

  <img width="621" height="291" alt="Screenshot 2026-04-01 124412" src="https://github.com/user-attachments/assets/182106f1-3f31-4dd2-813f-c05b46c34f8b" />



- Modifikasi **register.module.scss**

  <img width="617" height="191" alt="Screenshot 2026-04-01 124839" src="https://github.com/user-attachments/assets/786287a2-52c5-4f22-ad89-ede705572849" />


- Tambahkan form inputan pada file **index.tsx** (pada folder **views/auth/register/index.tsx**)  
  Form berisi:

  - Email
  - Full Name
  - Password
  - Button Register

- Kode keseluruahannya sebagai berikut :

  <img width="597" height="921" alt="Screenshot 2026-04-01 123601" src="https://github.com/user-attachments/assets/29f5e783-9df9-4725-8809-cf2c101b4de0" />


- Modifikasi **register.module.scss**

  <img width="598" height="922" alt="Screenshot 2026-04-01 123641" src="https://github.com/user-attachments/assets/cf233fe3-5633-493a-9f37-15a8599e69ec" />

  <img width="462" height="843" alt="Screenshot 2026-04-01 123711" src="https://github.com/user-attachments/assets/8607b698-7367-4d6a-b271-352d062d70ab" />



- Jalankan browser:

  ```
  http://localhost:3000/auth/register
  ```
  
  sehingga tampilan sebagai berikut

  <img width="940" height="952" alt="Screenshot 2026-04-01 131928" src="https://github.com/user-attachments/assets/af1aead4-864d-49a2-880f-55d342447325" />



---

### Bagian 2 – Membuat API Register

```
Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi
```

- Buat file **register.ts** pada folder **api**

  <img width="364" height="226" alt="Screenshot 2026-04-01 131046" src="https://github.com/user-attachments/assets/8fac1bbc-b7d7-418b-a258-03eb0c5e9bb8" />


- Modifikasi file **register.ts**

  <img width="863" height="705" alt="Screenshot 2026-04-01 135407" src="https://github.com/user-attachments/assets/4e9d3b63-c8c7-4749-a713-4f4538562534" />


- Modifikasi **index.tsx** pada folder **register** (tambahkan beberapa code)

  <img width="734" height="825" alt="Screenshot 2026-04-01 131826" src="https://github.com/user-attachments/assets/b2bbfbc8-2457-4442-b115-18e36ba8c46d" />


- Buka browser

  ```
  http://localhost:3000/auth/register
  ```
  
  isikan data dan klik register. Jika berhasil maka akan masuk ke menu login.

  <img width="965" height="985" alt="Screenshot 2026-04-01 135040" src="https://github.com/user-attachments/assets/11574942-d3f7-4d65-99a6-f0cc737b710e" />




---

### Bagian 3 – Install bcrypt

- Install library:

  ```
  npm install bcrypt --force
  npm install --save-dev @types/bcrypt –force
  ```

  <img width="972" height="792" alt="Screenshot 2026-04-01 135813" src="https://github.com/user-attachments/assets/8382ab63-7b2e-4ac0-bb33-7f6be743c55d" />


- Buka file **servicefirebase.ts** pada folder **src/utils/db** dan modifikasi

  <img width="702" height="861" alt="image" src="https://github.com/user-attachments/assets/4bf1030c-cc42-42fe-b2eb-78281c062818" />

  <img width="599" height="780" alt="image" src="https://github.com/user-attachments/assets/e73e8da1-1042-4840-845b-b885883d3df7" />


- Jalankan browser dan Input data setelah itu klik **register**

  <img width="962" height="971" alt="image" src="https://github.com/user-attachments/assets/4bf12fdf-e6cf-48cf-987f-a142da10b5ed" />


- Buka pada **firebase** jika berhasil maka data register akan masuk

  <img width="1722" height="433" alt="image" src="https://github.com/user-attachments/assets/89bacbc7-c49d-44ee-9e2f-43b88ef30f3c" />


- Jika user memasukkan data yang sama sistem tidak akan memproses tetapi permasalahannya user memasukkan data yang sama tidak ada pemberitahuan pada layar maka dari itu perlu ada perubahan pada code **index.tsx** pada folder **views/auth/register**

  - Line 57

    <img width="1055" height="379" alt="image" src="https://github.com/user-attachments/assets/6b8d057c-12fb-42c7-8d9c-40aa0d7e60f5" />

  - Line untuk bagian button

    <img width="670" height="168" alt="image" src="https://github.com/user-attachments/assets/54eae544-6fa6-42e9-9769-eb026e3586e1" />


  - Line 34 rubah menjadi email

    <img width="898" height="49" alt="image" src="https://github.com/user-attachments/assets/18201c06-4dc8-4f7e-ab3e-3d233ad87ade" />


- Modifikasi juga pada **register.module.scss**

  <img width="346" height="263" alt="image" src="https://github.com/user-attachments/assets/057e874c-9c24-4599-a57e-a6eb5d553a20" />


- Jika berhasil maka hasilnya seperti berikut

  <img width="954" height="966" alt="image" src="https://github.com/user-attachments/assets/9c5af65c-d221-4ce8-a178-c037af860b2c" />


- Tambakan loading dengan menambahkan kode pada **index.tsx**

  <img width="841" height="213" alt="image" src="https://github.com/user-attachments/assets/1c085ea6-9d09-48bb-a723-c054ad8eaa7e" />


- Jika berhasil maka hasilnya akan muncul **loading saat klik register**

---

## D. Pengujian

### Uji 1 – Register Baru

Input:

- Email baru

  <img width="962" height="971" alt="image" src="https://github.com/user-attachments/assets/4bf12fdf-e6cf-48cf-987f-a142da10b5ed" />

Hasil:

<img width="1722" height="433" alt="image" src="https://github.com/user-attachments/assets/89bacbc7-c49d-44ee-9e2f-43b88ef30f3c" />

- Data tersimpan di Firestore
- Password ter-hash
- Redirect ke login

---

### Uji 2 – Email Sudah Ada

Input:

- Email yang sama

  <img width="962" height="971" alt="image" src="https://github.com/user-attachments/assets/4bf12fdf-e6cf-48cf-987f-a142da10b5ed" />

Hasil:

<img width="954" height="966" alt="image" src="https://github.com/user-attachments/assets/9c5af65c-d221-4ce8-a178-c037af860b2c" />

- Error 400
- Message: Email already exists

---

### Uji 3 – Method GET

Akses:

```
/api/register
```

Hasil:

<img width="949" height="233" alt="image" src="https://github.com/user-attachments/assets/66675e07-bd3e-4e73-9ad0-313ec79be87b" />

<img width="644" height="54" alt="image" src="https://github.com/user-attachments/assets/ce46cb94-e346-41ba-b0a5-ed362435cde7" />


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

     <img width="746" height="337" alt="image" src="https://github.com/user-attachments/assets/130e34d9-c5e1-4cd1-83a0-b07e07189bf6" />

   - Password minimal 6 karakter

     <img width="753" height="340" alt="image" src="https://github.com/user-attachments/assets/c01ea4fd-d9c9-45d5-8611-e764acd10ab1" />

     <img width="581" height="211" alt="image" src="https://github.com/user-attachments/assets/a1e9eae2-8548-4f5f-8694-d31814f4ab4b" />


3. Tambahkan role default **"member"**.

    <img width="801" height="460" alt="image" src="https://github.com/user-attachments/assets/f334c0af-11d0-430f-8b46-2eb28ec805d1" />

4. Tampilkan pesan error di UI.

5. Screenshot hasil:
   - Register sukses

     <img width="959" height="966" alt="image" src="https://github.com/user-attachments/assets/334b6fa7-e26e-4431-88aa-e2cc306e5cf0" />

     <img width="951" height="828" alt="image" src="https://github.com/user-attachments/assets/e5d2a8d1-a30b-4620-8ce3-782b62f511e7" />


   - Email sudah ada

     <img width="961" height="971" alt="image" src="https://github.com/user-attachments/assets/d1fac44b-1c1d-4c91-a885-7b7006bef650" />

   - Database Firestore

     <img width="824" height="432" alt="image" src="https://github.com/user-attachments/assets/a70eb4aa-75f6-497a-8191-0c75101c6f7d" />


---

## H. Pertanyaan Analisis

1. Mengapa password harus di-hash?

    Password harus di-hash agar tidak disimpan dalam bentuk asli (plain text) di dalam database. Dengan proses hashing, password diubah menjadi bentuk terenkripsi yang sulit dikembalikan ke bentuk semula. Hal ini penting untuk menjaga keamanan data pengguna, sehingga jika terjadi kebocoran database, password asli tetap tidak dapat diketahui oleh pihak yang tidak bertanggung jawab.

2. Apa perbedaan **addDoc** dan **setDoc**?

    Perbedaan antara addDoc dan setDoc terletak pada cara penentuan ID dokumen. addDoc digunakan untuk menambahkan data dengan ID yang dibuat secara otomatis oleh sistem, sehingga cocok ketika tidak perlu menentukan ID secara manual. Sedangkan setDoc digunakan untuk menambahkan atau memperbarui data dengan ID yang sudah ditentukan, sehingga dapat digunakan untuk mengontrol atau menimpa data tertentu dalam database.

3. Mengapa perlu validasi method **POST**?

    Validasi method POST diperlukan agar endpoint API hanya menerima permintaan yang sesuai dengan fungsinya, yaitu untuk mengirim atau menambahkan data. Dengan adanya validasi ini, sistem dapat mencegah penggunaan method lain seperti GET yang tidak sesuai, sehingga dapat mengurangi risiko kesalahan penggunaan API serta meningkatkan keamanan aplikasi.

4. Apa risiko jika email tidak dicek unik?

    Jika email tidak dicek keunikannya, maka dapat terjadi duplikasi akun dengan email yang sama. Hal ini dapat menimbulkan berbagai masalah, seperti kebingungan saat proses login, kesulitan dalam pengelolaan data pengguna, serta potensi penyalahgunaan akun. Oleh karena itu, pengecekan email unik sangat penting untuk menjaga konsistensi dan keamanan data pengguna dalam sistem.

5. Apa fungsi role pada user?

    Role pada user berfungsi untuk mengatur hak akses atau izin yang dimiliki oleh setiap pengguna dalam sistem. Dengan adanya role, sistem dapat membedakan tindakan apa saja yang boleh dan tidak boleh dilakukan oleh user, misalnya antara admin dan pengguna biasa. Hal ini membantu menjaga keamanan, mengontrol akses terhadap fitur tertentu, serta memastikan setiap user hanya dapat mengakses sesuai dengan kewenangannya.
   
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
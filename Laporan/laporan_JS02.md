# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 2

# SETUP PROJECT NEXT.JS MENGGUNAKAN PAGES ROUTER

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

## A. Langkah Kerja Praktikum

### Langkah 1 – Pengecekan Lingkungan

1. Buka terminal / command prompt.
2. Jalankan perintah berikut:
3. `node -v`
    <img width="734" height="73" alt="image" src="https://github.com/user-attachments/assets/0c70e57d-d5ee-4cdf-b999-5f707b059d08" />

4. `npm -v`
    <img width="733" height="71" alt="image" src="https://github.com/user-attachments/assets/586be9e3-22a5-4210-9228-010fdd2216ce" />

5. Pastikan Node.js dan npm sudah terinstal. Jika belum terinstall maka Install pada alamat berikut: https://nodejs.org/en/download

6. `git -v`
    <img width="733" height="72" alt="image" src="https://github.com/user-attachments/assets/095f9cea-984e-4ae6-b429-9868b73df8cb" />

7. Jika belum install maka install pada alamat berikut: https://git-scm.com/install/windows

### Langkah 2 – Membuat Project Next.js

1. Buat direktori baru dan masuk ke direktori kerja
    <img width="764" height="87" alt="image" src="https://github.com/user-attachments/assets/84dbcb1d-b51f-40e3-a31c-99dcba1ec3b6" />

2. Jalankan perintah: `npx create-next-app@13.4.7`
3. Masuk ke folder projectnya
4. Tunggu hingga proses instalasi selesai.

### Langkah 3 – Menjalankan Server Development

1. Masuk ke folder project:
    <img width="820" height="68" alt="image" src="https://github.com/user-attachments/assets/30bf2a8d-af42-4a31-ae4f-88bbcf806dee" />

2. Jalankan aplikasi: `npm run dev`
    <img width="859" height="340" alt="image" src="https://github.com/user-attachments/assets/ca4ebc3a-e4fe-4c19-82e4-26a60634e796" />

3. Buka browser dan akses: http://localhost:3000
    <img width="673" height="830" alt="image" src="https://github.com/user-attachments/assets/d8631210-f652-411e-a980-0b94e6be4b68" />


### Langkah 4 – Mengenal Struktur Folder

- `pages/` → tempat routing halaman

  <img width="234" height="188" alt="image" src="https://github.com/user-attachments/assets/b8696e71-cbc7-4426-a82a-1035219357ee" />

- `public/` → aset statis

  <img width="278" height="181" alt="image" src="https://github.com/user-attachments/assets/42315951-6336-47e5-a636-d1e090934724" />

- `styles/` → file CSS

  <img width="414" height="227" alt="image" src="https://github.com/user-attachments/assets/9bee8d4f-75df-4c9c-ab4e-eb66e30e309f" />

- `package.json` → konfigurasi project

  <img width="474" height="619" alt="image" src="https://github.com/user-attachments/assets/cb9b32c2-3c1b-4102-ab2a-b47fcb78bdf8" />

- `.gitignore` → file konfigurasi di Git yang berfungsi untuk memberitahu Git file atau folder apa saja yang TIDAK perlu di-track / di-commit ke repository.

  <img width="779" height="716" alt="image" src="https://github.com/user-attachments/assets/68c8fd1a-1545-48aa-aae4-62c561ce4b50" />


### Langkah 5 – Modifikasi Halaman Utama

1. Buka file: `pages/index.js`
2. Ubah isi halaman:
3. Simpan dan lihat perubahan di browser.
    <img width="833" height="254" alt="image" src="https://github.com/user-attachments/assets/122c03ca-baba-44e3-8115-f0a5245a4bff" />

### Langkah 6 – Modifikasi API

1. Buka folder `api`
<img width="259" height="176" alt="image" src="https://github.com/user-attachments/assets/46afa326-ffc7-4b73-a4be-aaa15a7abac2" />

2. Modifikasi `hello.ts`
    <img width="883" height="409" alt="image" src="https://github.com/user-attachments/assets/649347a0-7c2d-4576-8c31-b065b8a2d647" />

3. Jalankan browser dengan Alamat http://localhost:3000/api/hello
    <img width="574" height="297" alt="image" src="https://github.com/user-attachments/assets/783bd967-2ddb-4e1e-8d69-d445d43b5a20" />

4. Tambahkan extensions chrome
    <img width="807" height="387" alt="image" src="https://github.com/user-attachments/assets/9dddadf0-c90f-4a31-afc9-59544dfcbf07" />

5. Jalankan browser chrome
    <img width="812" height="185" alt="image" src="https://github.com/user-attachments/assets/f465cde8-801a-4021-9c30-2af74c19e4d2" />


### Langkah 7 – Modifikasi Background

1. Buka file `_app.tsx`

   <img width="308" height="222" alt="image" src="https://github.com/user-attachments/assets/9e6b8c88-7fd5-485f-b771-fc34551e2e97" />

2. Modifikasi menjadi berikut

   <img width="868" height="246" alt="image" src="https://github.com/user-attachments/assets/49073efe-c951-4a76-8f12-ff7725ff89d4" />

3. Jalankan localhost

   <img width="732" height="306" alt="image" src="https://github.com/user-attachments/assets/3f1b59ff-6dee-46f2-80e8-d7bda7d05708" />


### Langkah 8 – Setup ext pada VSCode (opsional)

1. Auto Rename

    <img width="621" height="192" alt="image" src="https://github.com/user-attachments/assets/acd5ac71-3b32-45d4-b24e-b9b938c6cc97" />

2. Console Ninja

     <img width="724" height="168" alt="image" src="https://github.com/user-attachments/assets/b3e73102-a4e4-4e35-bfc2-cc3074189c80" />

3. Windsurf Plugin

    <img width="704" height="173" alt="image" src="https://github.com/user-attachments/assets/9b65a9ad-2a05-4b63-9f32-49ecdcafe475" />


## B. Tugas Praktikum

### Tugas 1

- Buat halaman baru `about.js` di folder `pages`.
- Tampilkan:
  - Nama Mahasiswa
  - NIM
  - Program Studi

### Tugas 2

- Tambahkan minimal 1 link navigasi dari halaman utama ke halaman about.

### Hasil
- Halaman Utama

  <img width="765" height="348" alt="image" src="https://github.com/user-attachments/assets/6cf1fd41-b1b3-473e-995e-6e97a012cb06" />

- Halaman About

  <img width="663" height="427" alt="image" src="https://github.com/user-attachments/assets/f754e315-49f8-47d8-a195-d3dd82d45bb8" />


## C. Pertanyaan Refleksi

1. **Mengapa Pages Router disebut sebagai routing berbasis file?**  
   Pages Router disebut sebagai routing berbasis file karena sistem URL pada aplikasi ditentukan langsung dari struktur folder dan nama file di dalam folder pages.  
   Setiap file yang dibuat di dalam folder pages otomatis menjadi sebuah route tanpa perlu konfigurasi tambahan.
    <img width="842" height="339" alt="image" src="https://github.com/user-attachments/assets/489ed9a8-e415-4f6e-b5d9-14f150353017" />

2. **Apa perbedaan Next.js dengan React standar (CRA)?**  
   - Next.js mendukung SSR, SSG, dan CSR.
   - Routing otomatis berbasis file.
   - Lebih optimal untuk SEO.
   - Mendukung API Routes.
   - CRA hanya mendukung Client Side Rendering.

3. **Apa fungsi perintah `npm run dev`?**  
   Perintah `npm run dev` digunakan untuk menjalankan project dalam mode development.  
   - Menjalankan server lokal.
   - Biasanya diakses melalui http://localhost:3000.
   - Mendukung hot reload.
   - Digunakan saat proses pengembangan.

4. **Apa perbedaan `npm run dev` dan `npm run build`?**
   a. `npm run dev`:
     - Untuk development.
     - Hot reload aktif.
     - Belum dioptimasi.
   b. `npm run build`:
     - Untuk production.
     - File dioptimasi dan diperkecil.
     - Siap untuk deploy.



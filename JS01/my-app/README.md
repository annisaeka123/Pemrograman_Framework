# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 1

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
4. `npm -v`
5. Pastikan Node.js dan npm sudah terinstal. Jika belum terinstall maka Install pada alamat berikut: https://nodejs.org/en/download
6. `git -v`
7. Jika belum install maka install pada alamat berikut: https://git-scm.com/install/windows

### Langkah 2 – Membuat Project Next.js

1. Buat direktori baru dan masuk ke direktori kerja
2. Jalankan perintah: `npx create-next-app@13.4.7`
3. Kita menggunakan versi 13.4.7 bukan yang latest (`npx create-next-app@latest` nextjs-pages router) dan Tunggu hingga proses instalasi selesai.
4. Masuk ke folder projectnya
5. Tunggu hingga proses instalasi selesai.

### Langkah 3 – Menjalankan Server Development

1. Masuk ke folder project:
2. Jalankan aplikasi: `npm run dev`
3. Buka browser dan akses: http://localhost:3000

### Langkah 4 – Mengenal Struktur Folder

- `pages/` → tempat routing halaman
- `public/` → aset statis
- `styles/` → file CSS
- `package.json` → konfigurasi project
- `.gitignore` → file konfigurasi di Git yang berfungsi untuk memberitahu Git file atau folder apa saja yang TIDAK perlu di-track / di-commit ke repository.

### Langkah 5 – Modifikasi Halaman Utama

1. Buka file: `pages/index.js`
2. Ubah isi halaman, misalnya:
3. Simpan dan lihat perubahan di browser.

### Langkah 6 – Modifikasi API

1. Buka folder `api`
2. Modifikasi `hello.ts`
3. Jalankan browser dengan Alamat http://localhost:3000/api/hello
4. Tambahkan extensions chrome
5. Jalankan browser chrome

### Langkah 7 – Modifikasi Background

1. Buka file `_app.tsx`
2. Modifikasi menjadi berikut
3. Jalankan localhost

### Langkah 8 – Setup ext pada VSCode (opsional)

1. Auto Rename
2. Console Ninja
3. Windsurf Plugin

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

## C. Pertanyaan Refleksi

1. **Mengapa Pages Router disebut sebagai routing berbasis file?**  
   Pages Router disebut sebagai routing berbasis file karena sistem URL pada aplikasi ditentukan langsung dari struktur folder dan nama file di dalam folder pages.  
   Setiap file yang dibuat di dalam folder pages otomatis menjadi sebuah route tanpa perlu konfigurasi tambahan.

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
   - `npm run dev`:
     - Untuk development.
     - Hot reload aktif.
     - Belum dioptimasi.
   - `npm run build`:
     - Untuk production.
     - File dioptimasi dan diperkecil.
     - Siap untuk deploy.



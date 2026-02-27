# PEMROGRAMAN BERBASIS FRAMEWORK

## JOBSHEET 5

### STYLING PADA NEXT.JS (GLOBAL CSS, CSS MODULE, INLINE STYLE, SCSS, DAN TAILWIND CSS)


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

### A. Konsep Dasar Styling di Next.js
Next.js mendukung beberapa pendekatan styling:

1. Global CSS
2. CSS Module
3. Inline Style (CSS-in-JS)
4. SCSS / SASS
5. Utility-first CSS Framework (Tailwind CSS, Bootstrap, dll)

### B. Langkah Praktikum
1. Global CSS
   - File Global
   - Import Global CSS di pages/_app.tsx
   - Catatan: hanya bisa di-_app.tsx dan berlaku untuk seluruh aplikasi

2. CSS Module (Local Scope)
   - Struktur komponen Navbar (folder dan file)
   - Modifikasi global.css dan 
avbar.module.css
   - Panggil di komponen dan jalankan browser
   - Keunggulan: scope lokal, tidak bentrok, cocok untuk komponen reusable

3. Styling untuk Pages (CSS Module)
   - Contoh Login Page: tambahkan dan modifikasi login.module.css di folder uth
   - Tambahkan import dan className={styles.login} pada login.tsx

4. Conditional Rendering Navbar
   - Di Appshell gunakan useRouter untuk menyembunyikan navbar pada route login/register
   - Gunakan 
outer.pathname jika ada query, jangan sPath

5. Refactoring Struktur Project
   - Struktur awal: pages/login.tsx dan styles/login.module.css
   - Struktur refactor: pages/auth/login.tsx dan src/views/auth/Login/index.tsx + Login.module.css
   - Hapus module lama, pisahkan logic dan UI

6. Inline Styling (CSS-in-JS)
   - Contoh pada iews/auth/login/index.tsx menggunakan atribut style dengan camelCase
   - Cocok untuk styling kecil & dinamis, tidak untuk layout besar

7. Kombinasi Global CSS + CSS Module
   - Gunakan global untuk utility umum, module untuk styling spesifik komponen

8. SCSS (SASS)
   - Install SASS dan tambahkan variable di colors.scss
   - Gunakan file .module.scss pada komponen, import dan gunakan map-get
   - Keunggulan: variabel, nested rule, maintainable untuk project besar

9. Tailwind CSS
   - Install dan inisialisasi, konfigurasi 	ailwind.config.js
   - Import directive di global CSS
   - Contoh: gunakan utility class pada elemen di halaman login

### C. Tugas Praktikum
- Buat halaman Register dengan CSS Module
- Refactor halaman Produk ke folder views, pisahkan Hero dan Main Section
- Terapkan Tailwind CSS dengan minimal 5 utility class

### D. Pertanyaan Refleksi
1. **Kapan sebaiknya menggunakan CSS Module dibanding Global CSS?**
   - Saat aplikasi memiliki banyak komponen dan untuk menghindari konflik class.
   - Module mengisolasi scope dan menghasilkan nama unik.
   - Global cocok untuk styling umum seperti reset, font, layout.

2. **Apa kelemahan inline styling?**
   - Tidak mendukung pseudo-class, media query, atau animasi kompleks.
   - Kode menjadi kurang terstruktur, tidak reusable.
   - Cocok hanya untuk gaya dinamis berbasis state.

3. **Mengapa SCSS cocok untuk project skala besar?**
   - SCSS menambah fitur seperti variabel, nested rule, mixin, function.
   - Memudahkan manajemen styling dan menjaga konsistensi.

4. **Apa keunggulan Tailwind dibanding CSS tradisional?**
   - Utility-first mempercepat pengembangan dan prototyping.
   - Menjaga konsistensi desain dengan nilai standar.
   - Mendukung responsive design dengan prefix.

### E. Kesimpulan
Next.js memberikan fleksibilitas styling:
- Global CSS ? utility umum
- CSS Module ? komponen
- Inline Style ? dinamis
- SCSS ? scalable
- Tailwind CSS ? cepat & konsisten

Pemilihan teknik styling disesuaikan dengan skala dan kebutuhan project.

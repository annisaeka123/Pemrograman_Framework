# PEMROGRAMAN BERBASIS FRAMEWORK  

# JOBSHEET 19  

# IMPLEMENTASI UNIT TESTING PADA NEXT.JS MENGGUNAKAN JEST  

Disusun oleh:
Nama: Annisa Eka Puspita
Kelas: TI-3D
Absen: 04
NIM: 2341720131

PRODI D-IV TEKNIK INFORMATIKA
JURUSAN TEKNOLOGI INFORMASI
POLITEKNIK NEGERI MALANG
2026

---

## A. Tujuan Pembelajaran  

Setelah mengikuti praktikum ini, mahasiswa mampu:

1. Memahami konsep dasar Unit Testing  
2. Menginstal dan mengkonfigurasi Jest di Next.js  
3. Menggunakan React Testing Library  
4. Membuat file testing (.spec / .test)  
5. Menguji komponen dan halaman (pages)  
6. Menghasilkan laporan coverage  
7. Melakukan mocking pada Next Router  
8. Menganalisis error melalui testing  

---

## B. Dasar Teori  

### 1. Konsep Unit Testing  

o Unit Testing adalah proses pengujian bagian kecil dari aplikasi (unit), seperti:

- Component  
- Pages  
- Function  
- Library  

o Tujuan:

- Mencegah bug  
- Menjamin stabilitas kode  
- Meningkatkan kualitas sebelum production  
- Memenuhi standar perusahaan (biasanya >80% coverage)  

---

## C. Langkah Praktikum  

### Praktikum 1 – Setup Jest di Next.js  

Install Dependencies:

npm install jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom --save-dev --force

Buat File Konfigurasi:

Doc: https://nextjs.org/docs/pages/guides/testing/jest  

- Buat file: jest.config.mjs  
- Isi dengan:

Tambahkan Script di package.json  

---

### Praktikum 2 – Struktur Folder Testing  

Buat folder:

src/__test__/

Struktur contoh:

src  
├── pages  
├── components  
├── views  
└── __test__  
    ├── pages  
    └── components  

---

### Praktikum 3 – Testing Halaman About  

Buat File Testing:

src/__test__/pages/about.spec.tsx  

Contoh Testing Snapshot. Pada about.spec.tsx tambahkan code berikut:

Jalankan Testing:

npm run test  

Jika berhasil:

PASS about.spec.tsx  

---

### Praktikum 4 – Coverage Report  

Jalankan:

npm run test:coverage  

Akan muncul folder:

coverage/  

Buka:

coverage/lcov-report/index.html  

(buka melalui explorer)

Target perusahaan biasanya:

Minimum 80% coverage  

---

### Praktikum 5 – Konfigurasi Coverage Lengkap  

- Update jest.config.mjs  
- Jalankan npm run test:coverage  

- Jika dilihat di index.htmlnya  

---

### Praktikum 6 – Testing dengan getByTestId  

1. Tambahkan pada About Page  

<h1 data-testid="title">About Page</h1>

2. Update Testing pada about.spec.tsx  

- Dicoba untuk di run  

Coba jika dibuat salah:

toBe("About")  

Jalankan dan hasil:

FAIL  
Expected: "About"  
Received: "About Page"  

---

### Praktikum 7 – Testing Page dengan Router (Mocking)  

Kita coba untuk melakukan testing pada halaman produk  

1. Buat file product.spec.tsx  
2. Tambahkan kode berikut  

Ketika testing halaman Product, sering muncul error:

NextRouter was not mounted  

Solusi: Mock Next Router  

Tambahkan di file product.spec.tsx  

---

### Praktikum 8 – Menangani Undefined Data  

Jalankan:

npm run test:coverage  

Jika muncul error:

Cannot read properties of undefined  

Perbaiki di komponen:

Pada file index.tsx pada folder pages/produk  

Jalankan npm run test:coverage maka akan muncul error  

Maka solusinya perbaiki code pada file  

Note: pastikan comment pada code berikut pada 2 code testing  

---

## D. Analisis Coverage  

Jika dilihat aplikasi yang dibuat masih 5% jadi perlu banyak perbaikan sebelum proses deploy.  

Perhatikan bagian:

- Statement  
- Branch  
- Function  
- Lines  

Contoh:

Metric Hasil  

Statements 85%  
Branch 60%  
Functions 90%  
Lines 88%  

Branch biasanya paling sulit karena perlu menguji kondisi if/else.  

---

## E. Standar Industri  

Biasanya:

- ≥ 80% → boleh production  
- < 80% → harus diperbaiki  
- Semua critical feature wajib dites  

---

## F. Tugas Praktikum  

1. Buat unit test untuk:

o Halaman Product  
o 1 Komponen  

2. Gunakan minimal:

o 1 Snapshot test  
o 1 toBe()  
o 1 getByTestId()  

3. Buat coverage minimal 50%  
4. Lakukan mocking untuk router  
5. Dokumentasikan hasil coverage  

---

## G. Diskusi & Refleksi  

1. Mengapa unit testing penting sebelum production?  
2. Mengapa branch coverage sulit mencapai 100%?  
3. Apa itu mocking?  
4. Kapan snapshot test digunakan?  
5. Apakah semua file harus dites?  

---

## H. Kesimpulan  

Dalam praktikum ini mahasiswa telah:

- Menginstal dan mengkonfigurasi Jest  
- Menggunakan React Testing Library  
- Membuat unit test pada pages  
- Menghasilkan coverage report  
- Melakukan mocking router  
- Memahami pentingnya testing di industri  
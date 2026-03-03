# PEMROGRAMAN BERBASIS FRAMEWORK

## JOBSHEET 8

## CLIENT SIDE RENDERING & DATA FETCHING

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

## A. Dasar Teori Singkat

### 1. Client Side Rendering (CSR)
    Client Side Rendering adalah proses rendering UI yang dilakukan di sisi
    browser (client).
    Ciri-ciri:
    - HTML awal kosong.
    - Data diambil setelah halaman dimuat.
    - Ada delay sebelum data tampil.
    - Cocok untuk aplikasi interaktif.

### 2. Data Fetching dengan useEffect ( Contoh Penggunan CSR )
    Karakteristik:
    - Data diambil di sisi client
    - Akan ada loading state
    - Perlu conditional rendering

### 3. Skeleton Loading
    Skeleton digunakan untuk:
    - Menghindari tampilan kosong
    - Memberikan feedback visual
    - Meningkatkan UX

### 4. Data Fetching dengan SWR
    SWR adalah React Hooks untuk data fetching dengan caching otomatis.
    Keunggulan:
    - Caching otomatis
    - Revalidation
    - Handling loading & error lebih sederhana
    - Lebih clean dibanding useEffect manual

---

## B. Langkah Praktikum

Buka firebase dan rubah fieldnya serta tambahkan beberapa field seperti pada gambar
dan untuk image bisa gunakan url pada image toko-toko sepatu ( copy image address).
Selain itu tambah juga documentnya sehingga ada 2 document.

### Bagian 1 – Setup Data Produk

1. Siapkan project Next.js.
2. Buat endpoint API /api/products.
3. Pastikan data memiliki:
● id
● name
● category
● price
● image


4. jalankan browser [http://localhost:3000/api/produk](http://localhost:3000/api/produk)

### Bagian 2 – Implementasi CSR dengan useEffect

1. Membuat file index.tsx pada folder views/products
2. Modifikasi index.tsx
3. Buka file index.tsx pada pages/produk/
4. Modifikasi index.tsx pada pages/produk/
5. Jalankan browser [http://localhost:3000/produk](http://localhost:3000/produk)
6. Pada folder produk buat file produk.modules.scss
7. Modifikasi produk.modules.scss
8. Modifikasi Pada file index.tsx pada folder pages/views/product
9. Jalankan Browser

### Bagian 3 – Implementasi Skeleton Loading

1. Modfikasi file index.tsx pada folder views/product/index.tsx
2. Modifikasi file product.module.scss
3. Jalankan browser maka akan muncul skeleton yang terdapat animasi berkedip
4. Modifikasi pada index.tsx pada folder views/product/index.tsx
5. Jalankan browser
● Jika dijalankan akan muncul skeletonnya terlebih dahulu setelah itu muncul gambar dan informasinya

### Bagian 4 – Implementasi SWR

https://swr.vercel.app/

1. Install SWR
2. Buka dan modifkasi file index.tsx pada folder pages/product/
3. Agar terlihat lebih rapi
- Buat folder swr pada utils dan tambahkan file dengan nama fetcher.js
- Modifikasi file fetcher.ts
- Modifikasi file index.tsx pada folder pages/produk
4. Bandingkan:
- useEffect manual
- SWR

★ **Note** : untuk client side rendering dapat menggunakan 2 cara yaitu
menggunakan manual ( userEffect) atau menggunakan SWR

---

## C. Tugas Praktikum

### 1. Jelaskan perbedaan:

● Client Side Rendering
● Server Side Rendering
● Static Site Generation

### 2. Buat halaman produk dengan:

● Skeleton loading
● Animasi

### 3. Refactor kode dari useEffect menjadi SWR.

★ **Note Error**
- Jika saat menjalankan [http://localhost:3000/produk/server](http://localhost:3000/produk/server) muncul error sbb
- Maka buka file index.tsx pada folder views/product/
- Modifikasi pada code berikut
- Menjadi :
- Jalankan [http://localhost:3000/produk/server](http://localhost:3000/produk/server)



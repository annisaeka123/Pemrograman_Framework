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

<img width="1450" height="377" alt="image" src="https://github.com/user-attachments/assets/1a1f1e30-3d24-4eb1-802b-9fc0162fb779" />


### Bagian 1 – Setup Data Produk

1. Siapkan project Next.js.
2. Buat endpoint API /api/products.
3. Pastikan data memiliki:

    - id
    - name
    - category
    - price
    - image

4. jalankan browser [http://localhost:3000/api/produk](http://localhost:3000/api/produk)

   <img width="931" height="709" alt="image" src="https://github.com/user-attachments/assets/43654e28-c6ed-465f-9e2e-ef1dd487a6dd" />


### Bagian 2 – Implementasi CSR dengan useEffect

1. Membuat file index.tsx pada folder views/products

    <img width="176" height="143" alt="image" src="https://github.com/user-attachments/assets/0b9e8f72-efc3-4069-bb21-f967e5aa9ec5" />

2. Modifikasi index.tsx

    <img width="1255" height="745" alt="image" src="https://github.com/user-attachments/assets/de935fa7-3153-4f59-b9f2-d8cb3a9e6c85" />

3. Buka file index.tsx pada pages/produk/

    <img width="190" height="242" alt="image" src="https://github.com/user-attachments/assets/8f17ae64-9879-4102-bcdb-a8da19b2f4fa" />

4. Modifikasi index.tsx pada pages/produk/

    <img width="648" height="773" alt="image" src="https://github.com/user-attachments/assets/71cab0cc-046d-400c-95e8-53f279b6c861" />

5. Jalankan browser [http://localhost:3000/produk](http://localhost:3000/produk)

    <img width="956" height="963" alt="image" src="https://github.com/user-attachments/assets/09a5bce6-0667-47f9-b09d-ed446ce78037" />

6. Pada folder produk buat file produk.modules.scss

    <img width="266" height="111" alt="image" src="https://github.com/user-attachments/assets/0c76403c-358a-4695-ac9b-7774ada59cf4" />

7. Modifikasi produk.modules.scss

    <img width="423" height="835" alt="image" src="https://github.com/user-attachments/assets/83e43926-0ae8-482e-958b-eea0d2018264" />

8. Modifikasi Pada file index.tsx pada folder pages/views/product

    <img width="575" height="781" alt="image" src="https://github.com/user-attachments/assets/38cb52e7-608e-4582-af8d-730525fece55" />

9. Jalankan Browser

    <img width="958" height="961" alt="image" src="https://github.com/user-attachments/assets/cd45a791-40a9-445d-bcda-51c26c4fe8ce" />

### Bagian 3 – Implementasi Skeleton Loading

1. Modfikasi file index.tsx pada folder views/product/index.tsx

    <img width="701" height="842" alt="image" src="https://github.com/user-attachments/assets/e37c4245-6e46-4542-8954-09626181de1f" />

2. Modifikasi file product.module.scss

    <img width="578" height="889" alt="image" src="https://github.com/user-attachments/assets/560cca2c-a6d6-4f53-a7c0-80efdb6a8ede" />

    <img width="582" height="807" alt="image" src="https://github.com/user-attachments/assets/13e8a315-3709-48d3-a865-a2890be2e265" />


3. Jalankan browser maka akan muncul skeleton yang terdapat animasi berkedip

    <img width="952" height="764" alt="image" src="https://github.com/user-attachments/assets/6ea6b15c-9bda-4c33-8da9-e34d0ad74340" />

    <img width="954" height="881" alt="image" src="https://github.com/user-attachments/assets/605ceb2d-367c-4645-9009-cd4a1a65c0f7" />


4. Modifikasi pada index.tsx pada folder views/product/index.tsx

    <img width="523" height="803" alt="image" src="https://github.com/user-attachments/assets/ddae8377-0b8d-4a1d-9653-b5c9e595133e" />

5. Jalankan browser
   - Jika dijalankan akan muncul skeletonnya terlebih dahulu setelah itu muncul gambar dan informasinya

### Bagian 4 – Implementasi SWR

https://swr.vercel.app/

1. Install SWR

    <img width="713" height="177" alt="image" src="https://github.com/user-attachments/assets/ba760dd4-7738-4422-a6e4-bde39ae3b32d" />


2. Buka dan modifkasi file index.tsx pada folder pages/product/

    <img width="794" height="491" alt="image" src="https://github.com/user-attachments/assets/1a160fe5-53fd-4a09-85e5-8b4b1660a535" />

3. Agar terlihat lebih rapi
    
    - Buat folder swr pada utils dan tambahkan file dengan nama fetcher.js

      <img width="248" height="171" alt="image" src="https://github.com/user-attachments/assets/4e900fba-0ecb-49c0-b2a0-159a6b66b428" />

    - Modifikasi file fetcher.ts

      <img width="771" height="98" alt="image" src="https://github.com/user-attachments/assets/55e76a85-c3c4-4509-aa4d-e3c5f34637ed" />

    - Modifikasi file index.tsx pada folder pages/produk

      <img width="796" height="520" alt="image" src="https://github.com/user-attachments/assets/498cb1b1-27a6-4625-be91-b55f2c221229" />


4. Bandingkan:
    - useEffect manual
    - SWR

   Secara sederhana, useEffect manual mengharuskan pengembang mengatur seluruh proses pengambilan data sendiri. Mulai dari membuat state untuk menyimpan data, loading, dan error, hingga menuliskan logika fetch di dalam useEffect. Pendekatan ini lebih panjang dan membutuhkan pengelolaan yang lebih detail, tetapi sangat baik untuk memahami alur kerja React secara mendasar.

    Sedangkan SWR menyediakan cara yang lebih ringkas dan praktis. Dengan satu hook useSWR, data, status loading, dan error sudah langsung tersedia. Selain itu, SWR memiliki fitur caching dan revalidasi otomatis sehingga performa aplikasi lebih optimal tanpa perlu penanganan manual tambahan.

    Singkatnya, useEffect bersifat manual dan fundamental, sementara SWR lebih otomatis dan efisien untuk kebutuhan aplikasi yang lebih kompleks.

★ **Note** : untuk client side rendering dapat menggunakan 2 cara yaitu
menggunakan manual ( userEffect) atau menggunakan SWR

---

## C. Tugas Praktikum

### 1. Jelaskan perbedaan:

#### a. Client Side Rendering

- Proses render halaman dilakukan di browser.
- Server hanya mengirim HTML dasar dan file JavaScript.
- Data diambil setelah halaman dimuat.
- Interaksi terasa cepat setelah load pertama selesai.
- Waktu muat awal bisa lebih lambat karena menunggu JavaScript dijalankan.

#### b. Server Side Rendering

- Halaman dirender di server setiap ada permintaan.
- HTML sudah siap tampil saat dikirim ke browser.
- Waktu tampil awal lebih cepat untuk pengguna.
- Lebih baik untuk SEO karena konten langsung tersedia.
- Beban server lebih besar karena render dilakukan setiap request.

#### c. Static Site Generation
- Halaman dibuat saat proses build (sebelum diakses pengguna).
- Menghasilkan file HTML statis.
- Sangat cepat karena tidak perlu render ulang saat diakses.
- Cocok untuk konten yang jarang berubah.
- Perlu build ulang jika ada perubahan data.

### 2. Buat halaman produk dengan:

a. Skeleton loading

b. Animasi

- Hasil (sudah diimplementasikan di bagian 3)
    - product.module.scss
      
      <img width="578" height="889" alt="image" src="https://github.com/user-attachments/assets/560cca2c-a6d6-4f53-a7c0-80efdb6a8ede" />

      <img width="582" height="807" alt="image" src="https://github.com/user-attachments/assets/13e8a315-3709-48d3-a865-a2890be2e265" />

    - views/produk/index.tsx

      <img width="523" height="803" alt="image" src="https://github.com/user-attachments/assets/ddae8377-0b8d-4a1d-9653-b5c9e595133e" />

### 3. Refactor kode dari useEffect menjadi SWR.

Sudah diimplemantaasikan pada praktikum bagian 4.

- fetcher.ts

  <img width="771" height="98" alt="image" src="https://github.com/user-attachments/assets/55e76a85-c3c4-4509-aa4d-e3c5f34637ed" />
  
- pages/produk/index.tsx

  <img width="796" height="520" alt="image" src="https://github.com/user-attachments/assets/498cb1b1-27a6-4625-be91-b55f2c221229" />

---

★ **Note Error** : 

- Saat menjalankan http://localhost:3️000/produk/server produk tidak tampil

  <img width="950" height="619" alt="image" src="https://github.com/user-attachments/assets/f1123591-3cb7-4c41-8c43-77ef02c4a1f0" />

- Modifikasi pages/produk/[id].tsx

  <img width="221" height="277" alt="image" src="https://github.com/user-attachments/assets/990738f7-d229-4c27-9e0b-98266f161a2b" />

- Implementasikan swr:

  <img width="834" height="629" alt="image" src="https://github.com/user-attachments/assets/61bb93df-62b3-4abe-8d39-017f6c84869f" />

- Lalu jalankan kembali /produk/server

  <img width="955" height="972" alt="image" src="https://github.com/user-attachments/assets/b8b383af-0014-4036-8491-b28d8c474577" />


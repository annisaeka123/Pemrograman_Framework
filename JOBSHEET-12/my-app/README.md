# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 12

# INCREMENTAL STATIC REGENERATION (ISR)

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

## A. Dasar Teori

### 1. Masalah Static Site Generation (SSG)

Pada SSG:

- Data hanya diambil saat build
- Perubahan database tidak langsung tampil
- Harus melakukan `npm run build` ulang

### 2. Incremental Static Regeneration (ISR)

ISR memungkinkan:

- Halaman tetap static
- Namun dapat diperbarui setelah waktu tertentu
- Tanpa perlu rebuild aplikasi

### Alur ISR

User request  
↓  
Serve cached static page  
↓  
Setelah waktu revalidate habis  
↓  
Next.js fetch ulang data di background  
↓  
Cache diperbarui  
↓  
Halaman kembali static

---

## B. Implementasi ISR Otomatis

### Bagian 1 – Tambahkan Revalidate

- Buka halaman **static.tsx** pada folder `src/pages/produk`

Artinya:

- Setiap **10 detik** halaman akan dicek ulang
- Jika ada perubahan data → **cache diperbarui**

---

### Bagian 2 – Pengujian ISR

1. Jalankan:

```
npm run build
```

(jika berhasil)

2. Jalankan server

```
npm run start
```

3. Tambahkan **data baru di database Firebase**

4. Refresh halaman **sebelum 10 detik → Data lama**

   - Sebelum 10 detik data yang akan ditampilkan masih data lama

5. Refresh **setelah 10 detik → Data baru muncul**

---

## C. On-Demand Revalidation

Jika tidak ingin menunggu waktu **revalidate**, gunakan **endpoint khusus**.

---

### Bagian 1 – Buat API Revalidate

- Buat file **revalidate.ts** pada folder `pages/api/`

★ Note:

Jika menggunakan code ini ada sedikit masalah yaitu ketika salah satu data dihapus maka data yang terhapus tidak secara otomatis terupdate pada layar meskipun sudah di refresh selama 10 detik.

Untuk bisa terupdate data yang ditampilkan diperlukan trigger dengan mengakses API berikut:

```
http://localhost:3000/api/produk
```

---

### Bagian 2 – Tambahkan Parameter Data

Untuk mengatasi hal tersebut (pada bagian 1) maka ditambahkan suatu kondisi pada file **revalidate.ts**.

- Modifikasi file **revalidate.ts**

Uji coba menambahkan parameter dan value pada URL:

```
http://localhost:3000/api/revalidate?data=produk
```

Maka akan muncul **true** karena sesuai dengan kondisi:

```
(req.query.data === "produk")
```

Uji coba juga dengan URL berikut:

```
http://localhost:3000/api/revalidate?data=
```

---

### Bagian 3 – Tambahkan Token Security

Perlu ditambahkan parameter agar user tidak merubah data melalui URL.

1. Buka file `.env` dan modifikasi

2. Modifikasi file **revalidate.ts** tambahkan kondisi pada line **13 – 17**

---

## D. Pengujian Manual Revalidation

Akses:

```
http://localhost:3000/api/revalidate?data=products&token=
```

Jika benar:

```
{ revalidate: true }
```

Jika token salah maka request tidak diproses.

---

## E. Perbandingan SSG vs ISR

| Aspek | SSG | ISR |
|------|------|------|
| Update Data | Harus build ulang | Otomatis / Trigger |
| Cache | Static permanen | Static + Refresh |
| Cocok untuk | Konten tetap | Konten semi-dinamis |

---

## F. Tugas Praktikum

### Tugas Individu

1. Tambahkan lagi **produk pada Firebase**
2. Implementasikan **ISR dengan `revalidate: 10`**
3. Tambahkan **endpoint On-Demand Revalidation**
4. Tambahkan **validasi token**

Uji dengan:

- Token benar
- Token salah
- Tanpa token

---

## G. Pertanyaan Analisis

1. Mengapa ISR lebih fleksibel dibanding SSG?
2. Apa perbedaan revalidate waktu dan on-demand?
3. Mengapa endpoint revalidation harus diamankan?
4. Apa risiko jika token tidak digunakan?
5. Kapan ISR lebih cocok dibanding SSR?
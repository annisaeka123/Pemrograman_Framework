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

**Alur ISR**

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

  <img width="731" height="736" alt="image" src="https://github.com/user-attachments/assets/316366e7-d9eb-41f4-be08-ba25f06b89eb" />


★ Artinya:

- Setiap **10 detik** halaman akan dicek ulang
- Jika ada perubahan data → **cache diperbarui**

---

### Bagian 2 – Pengujian ISR

1. Jalankan:

```
npm run build
```

(jika berhasil)

<img width="720" height="806" alt="image" src="https://github.com/user-attachments/assets/dd2643e2-d2c1-4be0-952c-5f2df7e24d40" />


2. Jalankan server

```
npm run start
```

   <img width="672" height="244" alt="image" src="https://github.com/user-attachments/assets/f9a07b13-b621-4fe4-b8e3-9dc004f2a7f4" />

3. Tambahkan **data baru di database Firebase**

   <img width="430" height="787" alt="image" src="https://github.com/user-attachments/assets/2399ac96-cb85-46c2-be2b-85c50dc5d085" />

   <img width="815" height="561" alt="image" src="https://github.com/user-attachments/assets/088efc16-406a-475e-9ffa-a58013438633" />

4. Refresh halaman **sebelum 10 detik → Data lama**

   - Sebelum 10 detik data yang akan ditampilkan masih data lama

5. Refresh **setelah 10 detik → Data baru muncul**

   <img width="940" height="927" alt="image" src="https://github.com/user-attachments/assets/912ceff3-1fcc-4893-864c-caba56af1a2e" />


---

## C. On-Demand Revalidation

Jika tidak ingin menunggu waktu **revalidate**, gunakan **endpoint khusus**.

---

### Bagian 1 – Buat API Revalidate

- Buat file **revalidate.ts** pada folder `pages/api/`

  <img width="830" height="540" alt="image" src="https://github.com/user-attachments/assets/48a810a3-604b-4fd7-bce4-d780dcb64622" />


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

<img width="634" height="232" alt="image" src="https://github.com/user-attachments/assets/6ea96c44-25f9-47a5-93bf-618499bed2bc" />


Uji coba juga dengan URL berikut:

```
http://localhost:3000/api/revalidate?data=
```

<img width="670" height="223" alt="image" src="https://github.com/user-attachments/assets/19363bce-455d-413d-be9a-a2809d730e58" />


---

### Bagian 3 – Tambahkan Token Security

Perlu ditambahkan parameter agar user tidak merubah data melalui URL.

1. Buka file `.env` dan modifikasi

   <img width="586" height="140" alt="image" src="https://github.com/user-attachments/assets/42a941ec-ddad-4f92-a2e2-4a0bb4d9e45b" />

2. Modifikasi file **revalidate.ts** tambahkan kondisi pada line **13 – 18**

   <img width="692" height="720" alt="image" src="https://github.com/user-attachments/assets/8026625a-96ae-4526-aef1-1a72f728e6dc" />


---

## D. Pengujian Manual Revalidation

Akses:

```
http://localhost:3000/api/revalidate?data=produk&token=123123123
```

Jika benar:

<img width="664" height="191" alt="image" src="https://github.com/user-attachments/assets/9459107e-216d-444e-a4d2-3102e00c1e5e" />


Jika token salah:

<img width="648" height="212" alt="image" src="https://github.com/user-attachments/assets/0e1c4bc9-aae2-4575-9b27-808cf3f4e34c" />



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

   -> Sudah diimplementasikan di Implementasi ISR Otomatis Bagian 2

2. Implementasikan **ISR dengan `revalidate: 10`**

   -> Sudah diimplemetasikan di Implemetasi ISR Otomatis Bagian 1

3. Tambahkan **endpoint On-Demand Revalidation**

   -> Sudah diimplemetasikan dibagian On-Demand Revalidation Bagian 1 dan 2

4. Tambahkan **validasi token**

   -> Sudah diimplementasikan di On-Demand Revalidation Bagian 3

5. Uji dengan:

   - Token benar
   - Token salah
   - Tanpa token

     Sudah dilakukan dibagian Pengujian Manual Revalidation beserta dokumentasinya

---

## G. Pertanyaan Analisis

**1. Mengapa ISR lebih fleksibel dibanding SSG?**

   ISR (Incremental Static Regeneration) lebih fleksibel dibanding SSG karena halaman yang sudah di-generate secara statis masih bisa diperbarui tanpa perlu melakukan build ulang seluruh aplikasi. Pada SSG, jika ada perubahan data maka developer harus menjalankan proses build lagi agar halaman diperbarui. Sedangkan pada ISR, halaman dapat diperbarui secara otomatis setelah waktu tertentu atau ketika ada permintaan revalidasi. Dengan demikian, ISR memungkinkan halaman tetap cepat seperti SSG tetapi tetap dapat menampilkan data yang lebih terbaru.

**2. Apa perbedaan revalidate waktu dan on-demand?**

   Revalidate waktu adalah mekanisme pembaruan halaman berdasarkan interval waktu tertentu yang sudah ditentukan pada konfigurasi. Misalnya halaman akan diperbarui setiap 10 detik atau 1 menit setelah ada request berikutnya. Sedangkan on-demand revalidation adalah pembaruan halaman yang dilakukan secara manual melalui endpoint API ketika ada perubahan data, misalnya setelah admin menambahkan atau mengedit data. Jadi perbedaannya terletak pada cara pemicu pembaruannya: revalidate waktu otomatis berdasarkan interval, sedangkan on-demand dipicu secara manual melalui request API.

**3. Mengapa endpoint revalidation harus diamankan?**

   Endpoint revalidation harus diamankan karena endpoint tersebut dapat memicu proses regenerasi halaman. Jika tidak dilindungi, siapa pun dapat mengakses endpoint tersebut dan terus-menerus memicu proses revalidasi. Hal ini dapat menyebabkan beban server meningkat, memperlambat performa aplikasi, atau bahkan menyebabkan gangguan layanan. Oleh karena itu biasanya endpoint ini dilindungi dengan token atau mekanisme autentikasi tertentu.

**4. Apa risiko jika token tidak digunakan?**

   Jika token tidak digunakan, maka endpoint revalidation dapat diakses oleh siapa saja tanpa pembatasan. Risiko yang dapat terjadi antara lain penyalahgunaan endpoint oleh pihak yang tidak bertanggung jawab, spam request yang memicu regenerasi halaman secara terus-menerus, meningkatnya penggunaan resource server, dan potensi serangan seperti denial of service. Akibatnya performa aplikasi bisa menurun dan keamanan sistem menjadi lemah.

**5. Kapan ISR lebih cocok dibanding SSR?**

   ISR lebih cocok digunakan ketika aplikasi membutuhkan halaman yang cepat seperti halaman statis tetapi datanya tetap perlu diperbarui secara berkala. Contohnya pada website e-commerce, blog, atau katalog produk yang tidak berubah setiap saat. Dengan ISR, halaman tetap dapat dimuat dengan cepat karena sudah di-generate sebelumnya, namun tetap bisa diperbarui secara otomatis tanpa harus merender ulang setiap request seperti pada SSR. Hal ini membuat performa aplikasi lebih efisien dibanding SSR pada kasus data yang tidak sering berubah.
   

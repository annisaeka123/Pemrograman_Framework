# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 11

# DYNAMIC ROUTING & STATIC GENERATION

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

**1. Dynamic Routing**

  Dynamic routing pada Next.js menggunakan tanda kurung siku

**2. Rendering pada Halaman Detail**

**3. getStaticPaths**

Digunakan untuk:

- Mendaftarkan daftar ID yang akan dibuat secara statis saat build
- Wajib pada dynamic SSG

---

## B. Langkah Praktikum

### Bagian 1 – Membuat Dynamic Route

1. Buka file pages/products/[product].tsx dan modfikasi sbb ( line 20 )

2. Jalankan browser [http://localhost:3000/produk](http://localhost:3000/produk)

- Jika kita klik salah satu gambar maka akan menuju halaman lain

### Bagian 2 – Implementasi CSR (Client Rendering)

1. Modifikasi pada file [produk].tsx pada folder src/pages/produk/

2. Pada file produk.ts pada folder pages/api di rename menjadi [[...product]].ts Menjadi

3. Modifikasi file servicefirebase.ts o Modifikasi file [[...produk]].ts

4. Jalankan browser
[http://localhost:3000/api/produk/3FwB5UeuLVBpQy2umXHD](http://localhost:3000/api/produk/3FwB5UeuLVBpQy2umXHD)

5. Jalankan alamat url [http://localhost:3000/api/produk/](http://localhost:3000/api/produk/)

6. Buat file dengan nama index.tsx pada folder views/DetailProduct selain itu buat juga file dengan nama detailProduct.module.scss

7. Modifikasi detailProduct.module.scss

8. Modifikasi index.tsx pada folder DetailProduct

9. Modifikasi file [product].tsx

10. Modifikasi index.tsx pada folder views/detailProduct line 16

11. Jalankan browser [http://localhost:3000/produk/](http://localhost:3000/produk/) saat produk diklik maka akan
muncul detailProduk
[http://localhost:3000/produk/pAWIT99SWmVbVrNm49ml](http://localhost:3000/produk/pAWIT99SWmVbVrNm49ml)

12. Agar tulisan detail produk ditengah maka modifikasi file
detailProduct.module.scss line 103-108 dan file index.tsx tambahkan code
pada line 7,8 dan 22 menjadi

13. Sehingga hasilnya seperti berikut



### Bagian 3 – Implementasi SSR

1. Modifikasi [produk].tsx pada folder src/pages/produk dan comment line 9
    sampai 20 dikarena kita akan menggunakan metode SSR. Tambahkan
    beberapa kode untuk SSR

2. Jalankan browser [http://localhost:3000/produk/server](http://localhost:3000/produk/server)

★ Tidak perlu loading state karena data sudah tersedia sebelum render.

### Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)

1. Buka file [produk].tsx dan modifikasi seperti berikut

2. Buka file index.tsx pada folder src/views/DetailProduct dan modifikasi pada
line 11

3. Jalankan browser [http://localhost:3000/produk](http://localhost:3000/produk)

4. Saat diklik salah satu produk

---

## C. Pengujian

- Uji 1 – CSR

    - Refresh halaman detail

    - Perhatikan loading

    - Periksa Network → XHR → API request terlihat

- Uji 2 – SSR

    - Refresh halaman detail

    - Tidak ada loading

    - Periksa Network → tidak terlihat fetch detail

- Uji 3 – SSG

    a. Jalankan:

    - npm run build

    - npm run start

    b. Tambahkan produk baru di database.

    c. Buka halaman detail produk baru:

    ★ Tidak muncul.

    d. Build ulang:

    - npm run build

    - npm run start

    ★ Baru muncul.

---

## D. Tugas Praktikum

1. Implementasikan halaman detail dengan:
    - CSR
    - SSR
    - SSG

2. Buat tabel perbandingan:

3. Dokumentasikan:
    - Screenshot
    - Network tab
    - Build result

---

## E. Pertanyaan Analisis

**1. Mengapa getStaticPaths wajib pada dynamic SSG?**

getStaticPaths wajib digunakan pada dynamic SSG karena Next.js perlu
mengetahui halaman dinamis mana saja yang harus dibuat saat proses build.
Pada halaman dengan parameter dinamis seperti /products/[id], Next.js tidak
tahu daftar id produk secara otomatis. Oleh karena itu, getStaticPaths
digunakan untuk memberikan daftar path atau parameter yang akan
di-generate menjadi halaman statis. Tanpa fungsi ini, Next.js tidak dapat
membuat halaman statis untuk setiap data sehingga halaman dinamis tidak
bisa dibangun saat proses build.

**2. Mengapa CSR membutuhkan loading state?**

CSR membutuhkan loading state karena proses pengambilan data dilakukan di
sisi client setelah halaman dimuat di browser. Saat halaman pertama kali
dibuka, data dari API atau database belum tersedia sehingga halaman biasanya
masih kosong. Oleh karena itu, diperlukan loading state untuk memberi
informasi kepada pengguna bahwa data sedang dimuat. Loading state
membantu meningkatkan pengalaman pengguna karena pengguna mengetahui
bahwa sistem sedang mengambil data.

**3. Mengapa SSG tidak menampilkan produk baru tanpa build ulang?**

SSG tidak menampilkan produk baru tanpa build ulang karena data halaman
diambil saat proses build aplikasi. Ketika build dijalankan, Next.js mengambil
data dari database dan membuat halaman HTML statis berdasarkan data
tersebut. Setelah halaman statis dibuat, data tidak akan berubah meskipun ada
perubahan di database. Oleh karena itu, jika ada produk baru ditambahkan,
halaman SSG harus di-build ulang agar data terbaru dapat dimasukkan ke
dalam halaman statis.

**4. Mana metode terbaik untuk halaman detail e-commerce?**

Metode yang sering dianggap terbaik untuk halaman detail e-commerce adalah
Server Side Rendering (SSR) atau kombinasi SSG dengan revalidation. SSR
memungkinkan halaman selalu menampilkan data terbaru seperti harga atau
stok produk karena data diambil setiap kali halaman diakses. Hal ini penting
pada e-commerce karena informasi produk bisa berubah sewaktu-waktu. Jika
data tidak terlalu sering berubah, SSG dengan revalidation juga bisa
digunakan untuk mendapatkan performa yang cepat namun tetap memperbarui
data secara berkala.

**5. Apa risiko menggunakan SSG untuk produk yang sering berubah?**

Risiko menggunakan SSG untuk produk yang sering berubah adalah data yang
    ditampilkan bisa menjadi tidak akurat atau tidak terbaru. Misalnya harga, stok,
    atau ketersediaan produk dapat berubah di database tetapi halaman masih
    menampilkan data lama karena halaman statis belum di-build ulang. Hal ini
    bisa menyebabkan pengguna melihat informasi yang salah, seperti stok yang
    sebenarnya sudah habis tetapi masih terlihat tersedia di halaman. Oleh karena
    itu, SSG kurang cocok untuk data yang sering berubah kecuali menggunakan
    mekanisme revalidation.



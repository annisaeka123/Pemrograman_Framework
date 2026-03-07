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

1. Buka file src/views/produk/index.tsx dan modfikasi sbb

    <img width="563" height="847" alt="image" src="https://github.com/user-attachments/assets/20de3b6f-15de-4cd2-92a8-457f28eb9351" />


2. Jalankan browser [http://localhost:3000/produk](http://localhost:3000/produk)

   <img width="944" height="961" alt="image" src="https://github.com/user-attachments/assets/759ccfc0-db11-4771-8d58-2e8ea799e24d" />

- Jika kita klik salah satu gambar maka akan menuju halaman lain

  <img width="680" height="258" alt="image" src="https://github.com/user-attachments/assets/100ea018-a134-4cd4-94e6-e92a1baffbf8" />


### Bagian 2 – Implementasi CSR (Client Rendering)

1. Modifikasi pada file [produk].tsx pada folder src/pages/produk/

  <img width="921" height="485" alt="image" src="https://github.com/user-attachments/assets/625e69f3-dc62-4907-9da2-57420a4a2ffd" />


2. Pada file produk.ts pada folder pages/api di rename menjadi [[...produk]].ts

  <img width="169" height="83" alt="image" src="https://github.com/user-attachments/assets/7e9c26e4-5be0-416d-bad7-6dd4eec9dcb7" />

  Menjadi

  <img width="199" height="81" alt="image" src="https://github.com/user-attachments/assets/9ab08b03-d042-4ba8-b453-e09345c3d29b" />


3. Modifikasi file servicefirebase.ts

  <img width="1007" height="543" alt="image" src="https://github.com/user-attachments/assets/897a80bb-2369-4f57-96ad-947b61b258f2" />


4. Modifikasi file [[...produk]].ts

   <img width="946" height="690" alt="image" src="https://github.com/user-attachments/assets/08835e57-487b-4cbf-a172-eb35d781e3c4" />

5. Jalankan browser http://localhost:3000/api/produk/MIJJ9oXRd9bRRoJrCVdI 

<img width="941" height="427" alt="image" src="https://github.com/user-attachments/assets/7b09aa47-0c1a-411a-97f5-09d9d246f905" />


7. Jalankan alamat url [http://localhost:3000/api/produk/](http://localhost:3000/api/produk/)

  <img width="949" height="277" alt="image" src="https://github.com/user-attachments/assets/794991f6-ec4a-4694-a4d5-5c6577cebfcb" />

8. Buat file dengan nama index.tsx pada folder views/DetailProduct selain itu buat juga file dengan nama detailProduct.module.scss

  <img width="330" height="141" alt="image" src="https://github.com/user-attachments/assets/0a39a398-24e7-46f5-aaea-58274b54ce2b" />

9. Modifikasi detailProduct.module.scss

  <img width="332" height="833" alt="image" src="https://github.com/user-attachments/assets/de08cf7c-ddc9-4c7f-a52a-1b3e211a28df" />

10. Modifikasi index.tsx pada folder DetailProduct

  <img width="855" height="602" alt="image" src="https://github.com/user-attachments/assets/7446a951-93c5-4fc0-82b8-6547237cc9eb" />

11. Modifikasi file [product].tsx

  <img width="889" height="560" alt="image" src="https://github.com/user-attachments/assets/ac805cd8-e5a6-4dab-ba71-37c760e443bf" />

12. Modifikasi index.tsx pada folder views/detailProduct line 16

  <img width="841" height="647" alt="image" src="https://github.com/user-attachments/assets/062dc2a6-6750-4a0b-9fad-079c6936349a" />

13. Jalankan browser [http://localhost:3000/produk/](http://localhost:3000/produk/) saat produk diklik maka akan
muncul detailProduk
[http://localhost:3000/produk/MIJJ9oXRd9bRRoJrCVdI](http://localhost:3000/produk/MIJJ9oXRd9bRRoJrCVdI)

  <img width="946" height="949" alt="image" src="https://github.com/user-attachments/assets/b58ef6cc-15cb-41cf-a6cc-88d3520d3555" />

  <img width="947" height="970" alt="image" src="https://github.com/user-attachments/assets/a5003354-1020-4f69-aae3-e3e419321f73" />

14. Agar tulisan detail produk ditengah maka modifikasi file detailProduct.module.scss line 73 dan file index.tsx tambahkan code pada line 7,8 dan 23 menjadi

  <img width="699" height="289" alt="image" src="https://github.com/user-attachments/assets/19d080fa-4924-43de-8a50-d848a0bc3296" />

  <img width="915" height="700" alt="image" src="https://github.com/user-attachments/assets/450a68a5-b527-4a7b-98d6-2b0291c3fe5b" />

15. Sehingga hasilnya seperti berikut

   <img width="950" height="953" alt="image" src="https://github.com/user-attachments/assets/52773101-034d-4f3b-83ec-29c1aca07060" />


### Bagian 3 – Implementasi SSR

1. Modifikasi [produk].tsx pada folder src/pages/produk dan comment beberapa code. Tambahkan
    beberapa kode untuk SSR

   <img width="1012" height="757" alt="image" src="https://github.com/user-attachments/assets/43ea2108-4e14-4fb6-8a01-c59b55166306" />

2. Jalankan browser [http://localhost:3000/produk/server](http://localhost:3000/produk/server)

   <img width="952" height="950" alt="image" src="https://github.com/user-attachments/assets/3180375f-6bc0-4009-9cbf-63fda211c154" />

   <img width="957" height="964" alt="image" src="https://github.com/user-attachments/assets/d0fbbe6c-1907-4e83-b5b1-842eed05d65b" />

★ Tidak perlu loading state karena data sudah tersedia sebelum render.

### Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)

1. Buka file [produk].tsx dan modifikasi seperti berikut

   <img width="665" height="854" alt="image" src="https://github.com/user-attachments/assets/6d868d2e-ca15-4da4-846d-d41cab88bfa0" />

2. Buka file index.tsx pada folder src/views/DetailProduct dan modifikasi pada
line 11

   <img width="908" height="733" alt="image" src="https://github.com/user-attachments/assets/4fd2c315-8a93-4168-8360-9f8611f59f8f" />

3. Jalankan browser [http://localhost:3000/produk](http://localhost:3000/produk)

   <img width="946" height="964" alt="image" src="https://github.com/user-attachments/assets/c89681f5-b9eb-49f2-a760-6513db2879f5" />

4. Saat diklik salah satu produk

   <img width="942" height="969" alt="image" src="https://github.com/user-attachments/assets/1987afb9-6c95-4196-960f-d4552c182932" />


---

## C. Pengujian

- Uji 1 – CSR

    - Refresh halaman detail

    - Perhatikan loading

    - Periksa Network → XHR → API request terlihat

      <img width="908" height="703" alt="image" src="https://github.com/user-attachments/assets/5b7ae473-fa3d-4924-9ff5-d8799e3c57de" />

      <img width="875" height="530" alt="image" src="https://github.com/user-attachments/assets/ff8c72fd-6ec9-4c01-affb-a15842e3d805" />

      <img width="1919" height="963" alt="image" src="https://github.com/user-attachments/assets/9ff9b2dd-08e7-4fc0-9783-6b82dd1b2262" />




- Uji 2 – SSR

    - Refresh halaman detail

    - Tidak ada loading

    - Periksa Network → tidak terlihat fetch detail

      <img width="1012" height="757" alt="image" src="https://github.com/user-attachments/assets/43ea2108-4e14-4fb6-8a01-c59b55166306" />
      
      <img width="1919" height="968" alt="image" src="https://github.com/user-attachments/assets/9735748a-8615-470f-b0d6-cef10d12aaba" />



- Uji 3 – SSG

    a. Jalankan:

    - npm run build

      <img width="806" height="790" alt="image" src="https://github.com/user-attachments/assets/0a5bbc5f-4836-4619-9f54-db55f0c470c5" />


    - npm run start

      <img width="680" height="244" alt="image" src="https://github.com/user-attachments/assets/5960424d-c79d-47ae-aad4-9b45e98ab48c" />


    b. Tambahkan produk baru di database.

     <img width="450" height="770" alt="image" src="https://github.com/user-attachments/assets/9d127cf2-c0b5-4870-bf79-34a4bf4a05d1" />

    c. Buka halaman detail produk baru:

    ★ Tidak muncul.

     <img width="956" height="953" alt="image" src="https://github.com/user-attachments/assets/84da84ab-7ec8-4fda-8a37-90e5951234f7" />


    d. Build ulang:

    - npm run build

      <img width="834" height="816" alt="image" src="https://github.com/user-attachments/assets/d61acf75-15ba-454f-ad3b-98a8add1a15c" />


    - npm run start

      <img width="688" height="278" alt="image" src="https://github.com/user-attachments/assets/fa3f4744-e8ec-4249-922d-75663f0c4c13" />


    ★ Baru muncul.

     <img width="956" height="972" alt="image" src="https://github.com/user-attachments/assets/1ee5f692-1d02-4997-8f47-e22b9745d4ab" />

     <img width="951" height="958" alt="image" src="https://github.com/user-attachments/assets/ad17f551-ae37-42b4-9a3e-cd233754c5c5" />



---

## D. Tugas Praktikum

1. Implementasikan halaman detail dengan:
    - CSR -> sudah diimplementasikan di praktikum bagian 2
    - SSR -> sudah diimplementasikan di praktikum bagian 3
    - SSG -> sudah diimplementasikan di praktikum bagian 4
      

2. Buat tabel perbandingan:

  | Aspek              | CSR (Client-Side Rendering)                                       | SSR (Server-Side Rendering)                                   | SSG (Static Site Generation)                               |
  | ------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------- |
  | **Loading**        | Ada loading karena data diambil di browser setelah halaman render | Tidak ada loading, data sudah ada saat halaman dikirim server | Tidak ada loading karena halaman sudah menjadi HTML statis |
  | **Build Required** | Tidak perlu build ulang saat data berubah                         | Tidak perlu build ulang                                       | Perlu build ulang (`npm run build`) jika ada data baru     |
  | **SEO**            | Kurang baik karena data dimuat di client                          | Sangat baik karena HTML sudah berisi data dari server         | Sangat baik karena halaman sudah statis                    |
  | **Perubahan Data** | Langsung terlihat saat data berubah                               | Langsung terlihat saat request halaman                        | Tidak langsung terlihat sampai dilakukan build ulang       |

    
3. Dokumentasikan:
    - Screenshot
    - Network tab
    - Build result

   Dokumentasi lengkap sudah tersedia di bab Pengujian

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



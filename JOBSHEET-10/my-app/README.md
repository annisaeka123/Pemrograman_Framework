# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 10

# STATIC SITE GENERATION (SSG)

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

**1. Konsep Pre-Rendering**

- Pre-rendering adalah proses:

    - Mengambil data eksternal

   - Mengubah kode menjadi HTML

    - Mengirim HTML ke client

    - Dilanjutkan proses hydration oleh React

- Dalam Next.js terdapat 2 metode pre-rendering:
    
    Metode Waktu Eksekusi

    - SSR : Saat request (runtime)
    
    - SSG : Saat build time

**2. Static Site Generation (SSG)**

Static Site Generation adalah metode rendering di mana:

- HTML di-generate saat build

- Data diambil saat proses build

- Tidak berubah sampai dilakukan build ulang

**3. Perbandingan CSR vs SSR vs SSG**

| Aspek | CSR | SSR | SSG |
| :--- | :--- | :--- | :--- |
| **Waktu Fetch** | Client | Runtime | Build Time |
| **Skeleton** | Ada | Tidak | Tidak |
| **Update Data** | Real-time | Real-time | Harus build ulang |

    Cocok untuk Dashboard E-commerce Landing page

---

## B. Langkah Praktikum

### Bagian 1 – Setup Halaman Static

1. Buat file baru pada pages/products/static.tsx

2. Modifikasi file static.tsx

★ **Catatan:**

- Mirip dengan SSR

- Perbedaan hanya pada nama method

### Bagian 2 – Build Production Mode

1. Pindah beberapa folder diluar pages antara lain

    - Untuk menghindari error maka folder Views, utils, styles dipindah diluar folder src sehingga susunan folder pada src sebagai berikut

2. Jalankan: npm run build
    - Jalankan npm run dev dan pastikan ini jalan ( jangan distop saat
       ngebuild ), jadi buka dua terminal

        - Terminal 1 : jalankan aplikasi npm run dev

        - Terminal 2 : build aplikasi

    - Hal ini dikarenakan aplikasi berjalan di local
       [http://localhost:3000/api/produk](http://localhost:3000/api/produk) (jika berhasil maka akan muncul
       pesan route(pages))
        
        ★ Note : jika error maka lakukan langkah berikut :
        - hapus folder .next menggunakan perintah `Remove-Item -Recurse -Force .next`
        - ketik perintah npm run dev

3. Jika berhasil: npm run start
    - Jika saat menjalankan npm run start muncul error :
    - Maka ada perintah npm run dev yang sedang jalan , matikan terlebih
       dahulu setelah lakukan perintah npm run start

4. Akses: [http://localhost:3000/products/static](http://localhost:3000/products/static)

### Bagian 3 – Pengujian Perubahan Data
- Uji 1 – Tambah Data di Database
    1. Buka database firebasenya
        - Tambahkan produk baru di database.
    2. Buka halaman:
        - /products (CSR) → Data bertambah
        - /products/server (SSR) → Data bertambah
        - /products/static (SSG) → Data tidak berubah

- Uji 2 – Build Ulang
    1. Jalankan kembali:

        a. npm run build
        - lakukan secara bersamaan dengan npm run dev saat melakukan npm run build
        
        b. npm run start
        - npm run dev stop terlebih dahulu setelah itu npm run start

    2. Refresh halaman static

        → Data baru muncul

---

## C. Tugas Praktikum

**1. Buat 3 halaman:**
- CSR
- SSR
- SSG

**2. Lakukan pengujian:**
- Tambah data
- Hapus data
- Bandingkan hasil

**3. Buat laporan analisis minimal 3 halaman.**

---

## D. Studi Analisis

**1. Mengapa SSG tidak menampilkan data terbaru?**

Static Site Generation (SSG) tidak menampilkan data terbaru karena halaman
web dibuat atau digenerate saat proses build aplikasi, bukan ketika pengguna
mengakses halaman tersebut. Pada saat build dilakukan, Next.js akan
mengambil data dari sumber seperti API atau database, kemudian
menghasilkan file HTML statis berdasarkan data tersebut. File HTML inilah
yang nantinya disimpan dan langsung dikirim ke pengguna setiap kali halaman
dibuka. Karena halaman sudah dibuat sebelumnya, maka data yang
ditampilkan adalah data yang tersedia pada saat proses build berlangsung. Jika
setelah itu terjadi perubahan data pada server atau database, halaman yang
sudah digenerate tidak akan otomatis berubah sampai dilakukan build ulang
atau proses regenerasi halaman. Oleh karena itu, SSG sering kali tidak
menampilkan data yang paling terbaru apabila data tersebut sering berubah.

**2. Mengapa SSG lebih cepat?**

SSG dianggap lebih cepat karena halaman yang dihasilkan sudah berupa file
HTML statis yang siap dikirim langsung ke browser pengguna. Ketika
pengguna membuka halaman, server tidak perlu lagi melakukan proses
pengambilan data atau rendering halaman secara dinamis seperti pada SSR.
Server hanya perlu mengirimkan file HTML yang sudah tersedia. Hal ini
membuat waktu respon server menjadi lebih singkat dan proses loading
halaman lebih cepat. Selain itu, halaman statis hasil SSG juga dapat dengan
mudah disimpan di Content Delivery Network (CDN) sehingga dapat diakses
dari server terdekat dengan pengguna. Dengan adanya CDN, waktu
pengiriman data menjadi lebih cepat dan performa website menjadi lebih
optimal.

**3. Kapan SSG tidak cocok digunakan?**

SSG tidak cocok digunakan pada aplikasi atau halaman yang memiliki data
yang sering berubah atau harus selalu up-to-date. Karena halaman pada SSG
hanya dibuat saat proses build, setiap perubahan data memerlukan proses build
ulang agar halaman diperbarui. Jika data berubah sangat sering, proses build
ulang ini akan menjadi tidak efisien dan memakan waktu. Contohnya adalah
aplikasi yang menampilkan data real-time seperti dashboard monitoring,
sistem transaksi, atau aplikasi yang menampilkan stok produk yang selalu
berubah. Dalam kondisi seperti ini, metode seperti Server Side Rendering
(SSR) atau Client Side Rendering (CSR) lebih cocok digunakan karena dapat
mengambil data terbaru setiap kali halaman dimuat atau ketika pengguna
melakukan interaksi.

**4. Mengapa e-commerce tidak cocok menggunakan SSG murni?**
    Website e-commerce biasanya memiliki data yang sangat dinamis, seperti
    harga produk, stok barang, diskon, dan status ketersediaan produk yang dapat
    berubah sewaktu-waktu. Jika menggunakan SSG secara murni, halaman
    produk akan digenerate saat proses build dan tidak akan berubah sampai
    dilakukan build ulang. Hal ini dapat menyebabkan informasi yang ditampilkan
    kepada pengguna menjadi tidak akurat, misalnya stok barang yang sebenarnya
    sudah habis tetapi masih terlihat tersedia di halaman produk. Selain itu,
    e-commerce juga sering membutuhkan fitur yang bersifat dinamis seperti
    keranjang belanja, rekomendasi produk, dan sistem pembayaran. Oleh karena
    itu, e-commerce biasanya menggunakan kombinasi beberapa metode
    rendering seperti SSR, CSR, atau Incremental Static Regeneration (ISR) agar
    tetap mendapatkan performa cepat tetapi juga dapat menampilkan data yang
    lebih terbaru.

**5. Apa perbedaan build mode dan development mode?**
    Build mode dan development mode merupakan dua tahap yang berbeda dalam
    proses pengembangan aplikasi web. Development mode digunakan ketika
    aplikasi sedang dalam proses pengembangan oleh programmer. Pada mode ini,
    server akan berjalan secara lokal dan mendukung fitur seperti hot reload,
    sehingga setiap perubahan kode dapat langsung terlihat tanpa perlu
    membangun ulang seluruh aplikasi. Mode ini biasanya dijalankan dengan
    perintah seperti npm run dev.
    Sedangkan build mode digunakan ketika aplikasi sudah siap untuk
    dipublikasikan atau dijalankan dalam lingkungan produksi. Pada tahap ini,
    aplikasi akan melalui proses build untuk mengoptimalkan kode, membuat file
    statis, serta menghasilkan versi aplikasi yang lebih ringan dan cepat untuk
    diakses oleh pengguna. Proses ini biasanya dijalankan dengan perintah npm
    run build, kemudian aplikasi dijalankan menggunakan npm start. Dengan kata
    lain, development mode digunakan untuk proses pengembangan dan testing,
    sedangkan build mode digunakan untuk menghasilkan versi final aplikasi yang
    siap digunakan oleh pengguna.



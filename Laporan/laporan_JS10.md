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

    <img width="188" height="330" alt="image" src="https://github.com/user-attachments/assets/c558fd5d-9d0f-4ca1-9b47-3a8a68aae7c9" />


2. Modifikasi file static.tsx

   <img width="788" height="713" alt="image" src="https://github.com/user-attachments/assets/d09f9479-7982-4381-9c4b-018d1a20d865" />


★ **Catatan:**

- Mirip dengan SSR

- Perbedaan hanya pada nama method

### Bagian 2 – Build Production Mode

1. Pindah beberapa folder diluar pages antara lain

    - Untuk menghindari error maka folder Views, utils, styles dipindah diluar folder src sehingga susunan folder pada src sebagai berikut

      <img width="212" height="192" alt="image" src="https://github.com/user-attachments/assets/e12e1bf3-0ecb-4cc3-b821-ff6e62261f61" />


2. Jalankan: npm run build
    - Jalankan npm run dev dan pastikan ini jalan ( jangan distop saat
       ngebuild ), jadi buka dua terminal

        - Terminal 1 : jalankan aplikasi npm run dev

        - Terminal 2 : build aplikasi

    - Hal ini dikarenakan aplikasi berjalan di local
       [http://localhost:3000/api/produk](http://localhost:3000/api/produk) (jika berhasil maka akan muncul pesan route(pages))

      <img width="489" height="566" alt="image" src="https://github.com/user-attachments/assets/e9aeb210-ea8b-4db5-9ca3-fa34fc2b6c96" />

        
        ★ Note : jika error maka lakukan langkah berikut :
        - hapus folder .next menggunakan perintah `Remove-Item -Recurse -Force .next`
        - ketik perintah npm run dev

3. Jika berhasil: npm run start
    - Jika saat menjalankan npm run start muncul error :

      <img width="739" height="335" alt="image" src="https://github.com/user-attachments/assets/9c3233e4-526c-4302-bc14-e86842bf1660" />

    - Maka ada perintah npm run dev yang sedang jalan , matikan terlebih
       dahulu setelah lakukan perintah npm run start

      <img width="675" height="294" alt="image" src="https://github.com/user-attachments/assets/6691e205-4f69-40a1-af7c-081d99f5c8ab" />


4. Akses: [http://localhost:3000/products/static](http://localhost:3000/products/static)

   <img width="960" height="953" alt="image" src="https://github.com/user-attachments/assets/54fa9769-8f14-4863-b1f0-0c02f170bba0" />


### Bagian 3 – Pengujian Perubahan Data
- Uji 1 – Tambah Data di Database
    1. Buka database firebasenya
        - Tambahkan produk baru di database.

          <img width="600" height="418" alt="image" src="https://github.com/user-attachments/assets/54facd4e-d528-4970-b77d-455e1470d318" />

    2. Buka halaman:
        - /products (CSR) → Data bertambah

          <img width="963" height="962" alt="image" src="https://github.com/user-attachments/assets/c9314c79-4b3e-420d-974f-60fe3ac15713" />

        - /products/server (SSR) → Data bertambah

          <img width="954" height="947" alt="image" src="https://github.com/user-attachments/assets/236a0115-c4de-41f4-a235-b128dd6467f6" />

        - /products/static (SSG) → Data tidak berubah

          <img width="956" height="957" alt="image" src="https://github.com/user-attachments/assets/3bee3dd3-0d1a-421d-94f4-95ac734294e9" />


- Uji 2 – Build Ulang
    1. Jalankan kembali:

        a. npm run build
        - lakukan secara bersamaan dengan npm run dev saat melakukan npm run build
        
        b. npm run start
        - npm run dev stop terlebih dahulu setelah itu npm run start

    2. Refresh halaman static

        → Data baru muncul

         <img width="950" height="960" alt="image" src="https://github.com/user-attachments/assets/e695428f-a9d2-4b47-8153-943ddbbaff6d" />


---

## C. Tugas Praktikum

### 1. Buat 3 halaman:
- CSR

  <img width="112" height="226" alt="image" src="https://github.com/user-attachments/assets/de518870-ed79-4712-b080-54bd1aba12ef" />

  <img width="515" height="857" alt="image" src="https://github.com/user-attachments/assets/f2f3e8a1-6471-48d0-b5f3-4cb1a8894022" />

- SSR

  <img width="115" height="214" alt="image" src="https://github.com/user-attachments/assets/3ecfeee9-4482-4542-8575-25473fc06ce8" />

  <img width="1451" height="699" alt="image" src="https://github.com/user-attachments/assets/aff9cf28-ff81-4870-a6aa-f188036f35b4" />

- SSG

  <img width="206" height="388" alt="image" src="https://github.com/user-attachments/assets/4a8ec57e-33bf-424f-9d19-99e93fcb8295" />

  <img width="763" height="726" alt="image" src="https://github.com/user-attachments/assets/c8222972-33b8-46b9-930d-db58b36ec912" />

### 2. Lakukan pengujian:
- Tambah data
  1. npm run dev + npm run build, lalu npm run start

  2. Tambah data 

    <img width="600" height="418" alt="image" src="https://github.com/user-attachments/assets/413dbed5-2611-4fbf-a70a-c823f96e27da" />

    <img width="951" height="888" alt="image" src="https://github.com/user-attachments/assets/a249b977-e917-437c-a4a2-c18f65b7e1b5" />

  3. CSR (data bertambah)

    <img width="963" height="962" alt="image" src="https://github.com/user-attachments/assets/d0fbbf44-c228-43d5-95f4-15c45dc4e9b1" />

  4. SSR (data bertambah)

    <img width="954" height="947" alt="image" src="https://github.com/user-attachments/assets/d10ff615-bd0d-4573-ba73-8224cb03320d" />

  5. SSG (data tidak berubah)

    <img width="956" height="957" alt="image" src="https://github.com/user-attachments/assets/37622873-f32b-4581-aa32-189d4520335c" />

  6. npm run dev + npm run build, lalu npm run start lagi

  7. SSG (data berubah)

     <img width="950" height="960" alt="image" src="https://github.com/user-attachments/assets/51c3d1ea-f998-49be-8df8-9fa48c32a8d9" />

     
- Hapus data
  1. npm run dev + npm run build, lalu npm run start

  2. hapus data
    
    <img width="604" height="361" alt="image" src="https://github.com/user-attachments/assets/e1b20021-68b3-4723-b052-125a881f372b" />

    <img width="957" height="952" alt="image" src="https://github.com/user-attachments/assets/9fe2512d-2f6c-448f-9f3a-211f0f078ea9" />

  3. CSR (data berkurang)

    <img width="950" height="929" alt="image" src="https://github.com/user-attachments/assets/a1b4c38b-d638-42a7-a8c7-85a41922ee8a" />

  4. SSR (data berkurang)

    <img width="951" height="956" alt="image" src="https://github.com/user-attachments/assets/47076a66-e4f9-40dc-a77e-04927bc6e0a2" />

  5. SSG (data tidak bertambah)

      <img width="954" height="956" alt="image" src="https://github.com/user-attachments/assets/8db7e983-39ba-4a84-ad50-d440ad418cdc" />

  6. npm run dev + npm run build, lalu npm run start lagi

     <img width="584" height="297" alt="image" src="https://github.com/user-attachments/assets/224b47ce-03fa-44f6-a7ba-9afacae163ec" />

     <img width="601" height="709" alt="image" src="https://github.com/user-attachments/assets/b4e365b0-4985-44a6-be3f-c3d74c7a418b" />

    <img width="701" height="283" alt="image" src="https://github.com/user-attachments/assets/620c5fc7-577d-48c4-aa33-10c77ea08de4" />


  7. SSG (data berkurang)

     <img width="954" height="956" alt="image" src="https://github.com/user-attachments/assets/fec5eb63-711c-4da7-9dab-9dae9bf74623" />

     
- Bandingkan hasil

  Pada CSR (Client Side Rendering), data akan langsung berubah ketika ada penambahan atau penghapusan data di database. Hal ini karena data diambil langsung dari API saat halaman dibuka di browser, sehingga setiap kali halaman direfresh, data terbaru akan ditampilkan.

    Pada SSR (Server Side Rendering), data juga akan ikut berubah ketika ada perubahan di database. Hal ini terjadi karena server akan mengambil data terbaru setiap kali halaman diminta oleh pengguna, sehingga hasil yang ditampilkan selalu sesuai dengan kondisi data di database saat itu.

    Sedangkan pada SSG (Static Site Generation), data tidak langsung berubah ketika ada penambahan atau penghapusan data di database. Hal ini karena halaman sudah dibuat secara statis saat proses build. Agar data terbaru muncul, perlu dilakukan proses build ulang terlebih dahulu sehingga halaman statis dibuat kembali dengan data yang terbaru.

### 3. Buat laporan analisis minimal 3 halaman.

**Analisis Perbandingan Metode Rendering pada Next.js (CSR, SSR, dan SSG)**

- **Pendahuluan**

  Dalam pengembangan aplikasi web modern, cara pengambilan dan penampilan data menjadi salah satu faktor penting yang mempengaruhi performa, kecepatan akses, serta pengalaman pengguna. Framework Next.js menyediakan beberapa metode rendering yang dapat digunakan oleh developer, yaitu Client Side Rendering (CSR), Server Side Rendering (SSR), dan Static Site Generation (SSG).

    Setiap metode memiliki cara kerja yang berbeda dalam menampilkan data ke halaman web. Oleh karena itu, penting untuk memahami perbedaan dari ketiga metode tersebut agar dapat memilih metode yang paling sesuai dengan kebutuhan aplikasi.

    Pada praktikum ini dilakukan pengujian terhadap tiga metode rendering tersebut dengan membuat tiga halaman berbeda, yaitu halaman CSR, SSR, dan SSG. Data yang digunakan berasal dari database Firebase yang berisi data produk. Pengujian dilakukan dengan melakukan perubahan data pada database, yaitu dengan menambahkan dan menghapus data produk, kemudian mengamati perubahan yang terjadi pada masing-masing metode rendering.

    Tujuan dari pengujian ini adalah untuk mengetahui bagaimana setiap metode merespon perubahan data serta memahami perbedaan karakteristik antara CSR, SSR, dan SSG dalam menampilkan data.
  
- **Analisis Metode Rendering**
  
  - **Client Side Rendering (CSR)**

    Client Side Rendering merupakan metode rendering di mana proses pengambilan data dilakukan di sisi client atau browser. Pada metode ini, halaman web akan dimuat terlebih dahulu oleh browser, kemudian browser akan mengambil data dari API atau database melalui JavaScript.

    Dalam pengujian yang dilakukan, halaman CSR mengambil data produk dari database Firebase menggunakan metode fetch atau library seperti SWR setelah halaman berhasil dimuat. Karena proses pengambilan data dilakukan langsung dari client, maka setiap kali halaman direfresh, browser akan mengambil data terbaru dari server.

    Hasil pengujian menunjukkan bahwa ketika dilakukan penambahan data pada database, halaman CSR langsung menampilkan data terbaru setelah halaman direfresh. Hal yang sama juga terjadi ketika data dihapus dari database, yaitu data yang dihapus tidak lagi muncul pada halaman setelah dilakukan refresh.

    Hal ini menunjukkan bahwa CSR selalu menampilkan data terbaru karena pengambilan data dilakukan secara langsung dari client setiap kali halaman diakses. Kelebihan dari metode ini adalah data yang ditampilkan selalu up-to-date. Namun, kekurangannya adalah waktu loading awal bisa lebih lama karena browser harus mengambil data terlebih dahulu sebelum menampilkan isi halaman secara lengkap.
    
  - **Server Side Rendering (SSR)**

    Server Side Rendering merupakan metode rendering di mana proses pengambilan data dilakukan di sisi server sebelum halaman dikirim ke browser pengguna. Pada Next.js, metode ini biasanya menggunakan fungsi seperti getServerSideProps.

    Dalam metode ini, setiap kali pengguna membuka halaman, server akan menjalankan proses untuk mengambil data dari database terlebih dahulu. Setelah data diperoleh, server akan merender halaman lengkap beserta datanya, kemudian hasilnya dikirim ke browser pengguna.

    Berdasarkan hasil pengujian yang dilakukan, ketika data baru ditambahkan ke database Firebase, halaman SSR langsung menampilkan data tersebut ketika halaman diakses kembali atau direfresh. Hal yang sama juga terjadi ketika data dihapus dari database, yaitu data yang telah dihapus tidak lagi muncul pada halaman.

    Hal ini terjadi karena setiap permintaan halaman akan memicu server untuk mengambil data terbaru dari database. Dengan demikian, halaman SSR selalu menampilkan data yang paling terbaru.

    Kelebihan dari SSR adalah data yang ditampilkan selalu up-to-date seperti CSR, namun proses rendering sudah dilakukan di server sehingga halaman bisa lebih cepat ditampilkan kepada pengguna. Kekurangannya adalah beban server menjadi lebih besar karena setiap permintaan halaman harus diproses oleh server.

  - **Static Site Generation (SSG)**

    Static Site Generation merupakan metode rendering di mana halaman web dibuat secara statis saat proses build aplikasi. Pada Next.js, metode ini biasanya menggunakan fungsi seperti getStaticProps.

    Pada metode ini, data dari database akan diambil saat proses build dilakukan, kemudian halaman HTML statis akan dibuat berdasarkan data tersebut. Halaman statis tersebut kemudian disimpan dan akan langsung dikirim ke browser ketika pengguna mengakses halaman.

    Berdasarkan hasil pengujian yang dilakukan, ketika data baru ditambahkan ke database Firebase, halaman SSG tidak langsung menampilkan data terbaru. Data yang ditampilkan tetap sama seperti saat proses build dilakukan. Hal ini juga terjadi ketika data dihapus dari database, yaitu halaman tetap menampilkan data lama.

    Agar perubahan data dapat terlihat pada halaman SSG, perlu dilakukan proses build ulang menggunakan perintah seperti npm run build. Setelah proses build selesai dan server dijalankan kembali menggunakan npm run start, maka halaman SSG akan menampilkan data terbaru sesuai dengan kondisi database saat proses build dilakukan.

    Kelebihan dari metode SSG adalah performa yang sangat cepat karena halaman sudah berupa file statis. Namun kekurangannya adalah data tidak dapat berubah secara langsung ketika terjadi perubahan pada database.

- **Perbandingan Hasil Pengujian**

  Berdasarkan hasil pengujian yang telah dilakukan, terdapat perbedaan yang cukup jelas antara CSR, SSR, dan SSG dalam menampilkan perubahan data.

    Pada metode CSR dan SSR, perubahan data seperti penambahan maupun penghapusan data dapat langsung terlihat setelah halaman direfresh. Hal ini karena kedua metode tersebut mengambil data secara langsung dari server setiap kali halaman diakses.

    Sedangkan pada metode SSG, perubahan data tidak langsung terlihat karena halaman sudah dibuat secara statis pada saat proses build. Oleh karena itu, diperlukan proses build ulang agar halaman dapat menampilkan data terbaru dari database.

    Secara umum, CSR dan SSR lebih cocok digunakan untuk aplikasi yang membutuhkan data yang selalu diperbarui secara real-time atau sering berubah, seperti aplikasi dashboard, sistem manajemen data, atau aplikasi yang berhubungan dengan transaksi. Sementara itu, SSG lebih cocok digunakan untuk halaman yang datanya jarang berubah, seperti halaman blog, halaman dokumentasi, atau halaman profil perusahaan.

- **Kesimpulan**

  Berdasarkan hasil praktikum dan pengujian yang telah dilakukan, dapat disimpulkan bahwa setiap metode rendering pada Next.js memiliki karakteristik dan kegunaan yang berbeda.

    Client Side Rendering (CSR) mengambil data di sisi client sehingga data yang ditampilkan selalu terbaru, namun waktu loading awal bisa lebih lama. Server Side Rendering (SSR) mengambil data di sisi server setiap kali halaman diakses sehingga data juga selalu terbaru dan halaman dapat ditampilkan lebih cepat kepada pengguna. Static Site Generation (SSG) menghasilkan halaman statis saat proses build sehingga memiliki performa yang sangat cepat, namun data tidak akan berubah sampai dilakukan build ulang.

    Dengan memahami perbedaan tersebut, developer dapat memilih metode rendering yang paling sesuai dengan kebutuhan aplikasi yang sedang dikembangkan.

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



# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 9

# SERVER SIDE RENDERING (SSR)

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

### 1. Konsep Server Side Rendering (SSR)

    Server Side Rendering adalah proses rendering HTML yang dilakukan di
    server sebelum dikirim ke browser.
    Karakteristik SSR:
    - HTML sudah lengkap saat diterima client
    - Tidak ada skeleton awal
    - Cocok untuk SEO
    - Data diambil setiap request

#### 2. Perbedaan CSR vs SSR

    **Aspek CSR SSR**
    **Rendering** Client Server
    **Data Fetching** useEffect getServerSideProps
    **Skeleton** Perlu Tidak perlu
    **SEO** Kurang optimal Lebih optimal
    **Network tab** Terlihat request API Tidak terlihat

---

## B. Langkah Praktikum

### Bagian 1 – Setup Halaman SSR

1. Buat file baru pada pages/products/server.tsx
2. Modifikasi file server.tsx :
3. Jalankan browser : [http://localhost:3000/produk/server](http://localhost:3000/produk/server)

### Bagian 2 – Implementasi getServerSideProps pada server.tsx

● Jalankan browser [http://localhost:3000/produk/server](http://localhost:3000/produk/server)

★ **Catatan:**
- Jika dijalankan maka skeleton tidak muncul yang akan muncul
langsung pada produknya
- Harus menggunakan full URL
- Dipanggil setiap request halaman

### Bagian 3 – Refactor Type ( produk type )

1. Buat folder types pada folder pages dan buat file Product.type.ts
2. Modifikasi Product.type.ts
3. Setelah membuat file Product.type.ts maka modifikasi pada file server.tsx
menjadi

### Bagian 4 – Uji Perbedaan SSR vs CSR

- Uji 1 – Skeleton
    - Buka halaman CSR
    - Refresh
    - Skeleton muncul
    - Buka halaman SSR
    - Refresh
    - Skeleton tidak muncul

- Uji 2 – Network Tab

    1. Buka DevTools → Network → XHR

    2. Refresh halaman CSR

        → Request API terlihat

    3. Refresh halaman SSR

        → Request API tidak terlihat

- Uji 3 – Response HTML

    - CSR: HTML awal kosong (berisi skeleton)

    - SSR: HTML sudah berisi data produk lengkap

---

## C. Tugas Praktikum

1. Buat 2 halaman:

    - /products (CSR)

    - /products/server (SSR)

2. Dokumentasikan:
    - Screenshot CSR
    - Screenshot SSR
    - Perbedaan Network tab
    - Perbedaan View Source

3. Buat laporan analisis minimal 2 halaman.

---

### D. Studi Analisis

**1. Mengapa SSR lebih baik untuk SEO?**

Server Side Rendering (SSR) dianggap lebih baik untuk SEO karena halaman
    web sudah dirender terlebih dahulu di server sebelum dikirim ke browser
    pengguna. Artinya, ketika mesin pencari seperti Google melakukan proses
    crawling atau pengindeksan, konten halaman sudah dalam bentuk HTML
    lengkap. Mesin pencari dapat langsung membaca isi halaman seperti teks,
    judul, dan struktur konten tanpa harus menunggu proses JavaScript dijalankan
    di browser. Hal ini berbeda dengan metode lain seperti Client Side Rendering
    (CSR), di mana halaman awalnya hanya berisi struktur dasar dan kontennya
    baru dimuat setelah JavaScript dijalankan di sisi klien. Karena konten pada

SSR sudah tersedia sejak awal, proses pengindeksan oleh mesin pencari
    menjadi lebih mudah dan cepat, sehingga peluang halaman untuk muncul di
    hasil pencarian juga lebih baik. Selain itu, SSR juga membantu meningkatkan
    performa loading awal halaman, yang juga menjadi salah satu faktor yang
    dipertimbangkan oleh mesin pencari dalam penilaian SEO.

**2. Kapan sebaiknya menggunakan SSR?**

SSR sebaiknya digunakan ketika aplikasi web membutuhkan konten yang
    harus langsung terlihat oleh pengguna dan mesin pencari sejak halaman
    pertama kali dimuat. Contohnya adalah website yang berfokus pada konten
    seperti blog, portal berita, halaman produk pada e-commerce, atau halaman
    landing page yang membutuhkan optimasi SEO. Dengan SSR, pengguna dapat
    langsung melihat isi halaman tanpa harus menunggu proses render di browser
    selesai. Selain itu, SSR juga cocok digunakan pada aplikasi yang
    membutuhkan data yang selalu diperbarui setiap kali halaman diminta, karena
    server akan mengambil data terbaru lalu merender halaman sebelum
    mengirimkannya ke pengguna. Dengan cara ini, pengguna akan selalu
    mendapatkan konten yang up-to-date ketika membuka halaman tersebut.

**3. Apa kekurangan SSR dibanding CSR?**

Meskipun memiliki banyak kelebihan, SSR juga memiliki beberapa
    kekurangan dibandingkan dengan Client Side Rendering (CSR). Salah satu
    kekurangannya adalah beban kerja server yang lebih besar karena proses
    rendering halaman dilakukan di server setiap kali ada permintaan dari
    pengguna. Hal ini dapat meningkatkan penggunaan sumber daya server,
    terutama jika jumlah pengunjung sangat banyak. Selain itu, implementasi SSR
    biasanya lebih kompleks dibandingkan CSR karena pengembang harus
    mengelola proses rendering di server sekaligus memastikan data yang dikirim
    ke klien tetap sinkron dengan aplikasi di browser. Proses pengembangan dan
    debugging juga bisa menjadi lebih sulit karena kode harus berjalan di dua
    lingkungan, yaitu server dan klien. Selain itu, interaksi dinamis pada aplikasi
    kadang lebih cepat ditangani oleh CSR karena rendering berikutnya dilakukan
    langsung di browser tanpa harus meminta server untuk merender ulang
    halaman.

**4. Mengapa skeleton tidak muncul pada SSR?**

Skeleton loading biasanya tidak muncul pada SSR karena pada metode ini
    halaman sudah dirender lengkap di server sebelum dikirim ke browser
    pengguna. Skeleton pada dasarnya adalah tampilan sementara yang digunakan
    saat data masih dimuat di sisi klien, sehingga pengguna melihat placeholder
    terlebih dahulu sebelum konten asli muncul. Namun pada SSR, data yang
    diperlukan sudah diambil oleh server dan langsung dimasukkan ke dalam
    HTML hasil render. Ketika halaman sampai ke browser, konten sebenarnya
    sudah tersedia dan langsung ditampilkan. Karena proses pemuatan data sudah
    selesai di server, tidak ada waktu tunggu yang memerlukan tampilan skeleton
    sebagai placeholder. Oleh karena itu, pada SSR pengguna biasanya langsung
    melihat konten utama tanpa melewati tahap tampilan skeleton terlebih dahulu.



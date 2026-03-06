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

Server Side Rendering adalah proses rendering HTML yang dilakukan di server sebelum dikirim ke browser.

Karakteristik SSR:

- HTML sudah lengkap saat diterima client

- Tidak ada skeleton awal

- Cocok untuk SEO

- Data diambil setiap request

#### 2. Perbedaan CSR vs SSR

| Aspek | CSR | SSR |
| :--- | :--- | :--- |
| **Rendering** | Client | Server |
| **Data Fetching** | useEffect | getServerSideProps |
| **Skeleton** | Perlu | Tidak perlu |
| **SEO** | Kurang optimal | Lebih optimal |
| **Network tab** | Terlihat request API | Tidak terlihat |


---

## B. Langkah Praktikum

### Bagian 1 – Setup Halaman SSR

1. Buat file baru pada pages/products/server.tsx

    <img width="232" height="302" alt="image" src="https://github.com/user-attachments/assets/e5ca4669-ddb4-488a-b181-ad7d04a367d2" />

2. Modifikasi file server.tsx :

    <img width="528" height="331" alt="image" src="https://github.com/user-attachments/assets/c63a47b3-5db9-4522-8824-ac033c7d281a" />

3. Jalankan browser : [http://localhost:3000/produk/server](http://localhost:3000/produk/server)

    <img width="952" height="940" alt="image" src="https://github.com/user-attachments/assets/64dd10a3-f042-4c14-b885-480cb18cedd4" />


### Bagian 2 – Implementasi getServerSideProps pada server.tsx

<img width="1446" height="894" alt="image" src="https://github.com/user-attachments/assets/f32d3d6d-228c-4cab-92ec-9c1987136741" />

● Jalankan browser [http://localhost:3000/produk/server](http://localhost:3000/produk/server)

  <img width="950" height="958" alt="image" src="https://github.com/user-attachments/assets/3fec9f78-e6b1-49f4-b8d1-381fb4a32c2d" />

★ **Catatan:**
- Jika dijalankan maka skeleton tidak muncul yang akan muncul
langsung pada produknya
- Harus menggunakan full URL
- Dipanggil setiap request halaman

### Bagian 3 – Refactor Type ( produk type )

1. Buat folder types pada folder pages dan buat file Product.type.ts

    <img width="231" height="331" alt="image" src="https://github.com/user-attachments/assets/f06adcd3-be1e-40aa-b70a-a588b773108c" />

2. Modifikasi Product.type.ts

    <img width="519" height="249" alt="image" src="https://github.com/user-attachments/assets/0a75bdf4-6465-46e0-826b-badb1a118e0f" />

3. Setelah membuat file Product.type.ts maka modifikasi pada file server.tsx
menjadi

    <img width="1461" height="682" alt="image" src="https://github.com/user-attachments/assets/315ad09c-f4e0-4608-b594-2c463a9492ea" />


### Bagian 4 – Uji Perbedaan SSR vs CSR

- Uji 1 – Skeleton
    - Buka halaman CSR

      <img width="948" height="959" alt="image" src="https://github.com/user-attachments/assets/a9ffa0cc-f0a8-4539-92f9-4ea88feae3a1" />

    - Refresh
    - Skeleton muncul
    - Buka halaman SSR

      <img width="950" height="945" alt="image" src="https://github.com/user-attachments/assets/3f09872c-1395-4d4c-9bad-9f84a0557d25" />

    - Refresh
    - Skeleton tidak muncul

- Uji 2 – Network Tab

    1. Buka DevTools → Network → XHR

    2. Refresh halaman CSR

        → Request API terlihat

       <img width="1919" height="953" alt="image" src="https://github.com/user-attachments/assets/89293915-0961-4628-af05-bc5be527a2b8" />


    3. Refresh halaman SSR

        → Request API tidak terlihat

       <img width="1915" height="956" alt="image" src="https://github.com/user-attachments/assets/1ea04b5b-33de-48a8-91d8-8de7dd3fe519" />


- Uji 3 – Response HTML

    - CSR: HTML awal kosong (berisi skeleton)

    - SSR: HTML sudah berisi data produk lengkap

---

## C. Tugas Praktikum

1. Buat 2 halaman:

    - /products (CSR)

      <img width="307" height="601" alt="image" src="https://github.com/user-attachments/assets/a455c107-3cd0-4c8c-9b8c-7f33973dae61" />

    - /products/server (SSR)

      <img width="319" height="361" alt="image" src="https://github.com/user-attachments/assets/53a86c21-a3b7-459b-9a77-f755c2b01aca" />


2. Dokumentasikan:
   
    - Screenshot CSR

      <img width="948" height="959" alt="image" src="https://github.com/user-attachments/assets/38a6fe42-5b81-4097-89b4-214de389efef" />

    - Screenshot SSR

      <img width="950" height="945" alt="image" src="https://github.com/user-attachments/assets/a936b53b-6241-4d7f-875a-872371619f4b" />

    - Perbedaan Network tab
      
      - CSR

        <img width="1919" height="953" alt="image" src="https://github.com/user-attachments/assets/f3fa3c8e-e858-4af0-aa2d-cbd09426d5b5" />

      - SSR

        <img width="1915" height="956" alt="image" src="https://github.com/user-attachments/assets/6c2e8220-a2c0-4004-bf6f-051ada694cc5" />

    - Perbedaan View Source
      
      - CSR

        <img width="1919" height="636" alt="image" src="https://github.com/user-attachments/assets/bf9396b4-8f5a-4080-a4dc-1a0b3d1d3e24" />

      - SSR

        <img width="1919" height="675" alt="image" src="https://github.com/user-attachments/assets/fa71e7f7-9177-43ef-bb8a-13f20bde7bf8" />


3. Buat laporan analisis minimal 2 halaman.

   **Analisis Perbedaan Client Side Rendering (CSR) dan Server Side Rendering (SSR)**
   
    - Pendahuluan

        Dalam pengembangan aplikasi web modern, terdapat beberapa metode rendering yang digunakan untuk menampilkan data pada halaman web. Dua metode yang sering digunakan adalah Client Side Rendering (CSR) dan Server Side Rendering (SSR). Kedua metode ini memiliki cara kerja yang berbeda dalam menampilkan konten kepada pengguna. Pada CSR, proses pengambilan data dan rendering dilakukan di sisi client atau browser, sedangkan pada SSR proses rendering dilakukan terlebih dahulu di server sebelum halaman dikirim ke browser.
        
        Pada praktikum ini dilakukan percobaan dengan membuat dua halaman berbeda pada aplikasi Next.js, yaitu halaman /products yang menggunakan metode CSR dan halaman /products/server yang menggunakan metode SSR. Tujuan dari percobaan ini adalah untuk memahami perbedaan cara kerja kedua metode tersebut serta melihat perbedaan dari sisi tampilan halaman, aktivitas network, dan struktur HTML yang dihasilkan.

    - Implementasi Halaman CSR dan SSR

        Pada tahap pertama dibuat dua halaman yang memiliki fungsi sama yaitu menampilkan daftar produk dari API. Perbedaannya terletak pada cara pengambilan datanya.
        
        Halaman CSR dibuat pada route /products. Pada halaman ini data produk diambil di sisi client menggunakan JavaScript setelah halaman dimuat di browser. Biasanya metode ini menggunakan hook seperti useEffect, SWR, atau fetch di dalam komponen React. Ketika halaman pertama kali dibuka, data produk belum tersedia sehingga komponen akan menampilkan skeleton loading sebagai placeholder sampai data berhasil diambil dari API.
        
        Sedangkan halaman SSR dibuat pada route /products/server. Pada halaman ini data produk diambil di server menggunakan fungsi getServerSideProps(). Fungsi ini akan dijalankan setiap kali halaman diakses. Server akan mengambil data dari API terlebih dahulu kemudian merender halaman menjadi HTML lengkap sebelum dikirim ke browser. Karena data sudah tersedia sejak awal, halaman langsung menampilkan daftar produk tanpa perlu menunggu proses pengambilan data di client.

    - Hasil Pengujian Tampilan Halaman

        Berdasarkan hasil pengujian yang dilakukan dengan melakukan refresh halaman, terdapat perbedaan tampilan antara CSR dan SSR.
        
        Pada halaman CSR, ketika halaman di-refresh maka yang pertama kali muncul adalah skeleton loading. Skeleton ini merupakan tampilan sementara yang digunakan untuk memberikan indikasi bahwa data sedang dimuat. Setelah proses request API selesai, barulah data produk ditampilkan di halaman. Hal ini terjadi karena pengambilan data dilakukan oleh browser setelah halaman dimuat.
        
        Sebaliknya, pada halaman SSR, ketika halaman di-refresh produk langsung muncul tanpa menampilkan skeleton terlebih dahulu. Hal ini disebabkan karena data sudah diambil oleh server sebelum halaman dikirim ke browser. Browser hanya menerima HTML yang sudah berisi konten lengkap sehingga halaman dapat langsung menampilkan data produk.
        
        Perbedaan ini menunjukkan bahwa SSR memiliki keunggulan dalam menampilkan konten lebih cepat pada saat pertama kali halaman dimuat.

    - Perbedaan pada Network Tab

        Perbedaan lain dapat dilihat melalui Network tab pada Developer Tools di browser. Pada saat membuka halaman CSR dan melakukan refresh, terlihat adanya request tambahan dari browser menuju endpoint API, misalnya /api/products. Request ini dilakukan oleh JavaScript di browser untuk mengambil data produk setelah halaman dimuat.
        
        Sedangkan pada halaman SSR, request API tidak terlihat pada Network tab browser. Hal ini karena request tersebut dilakukan oleh server saat proses rendering di backend. Browser hanya menerima hasil akhir berupa HTML yang sudah berisi data produk. Dengan demikian, proses pengambilan data pada SSR terjadi sebelum halaman sampai ke browser.
        
        Perbedaan ini menunjukkan bahwa pada CSR proses komunikasi dengan API dilakukan oleh browser, sedangkan pada SSR dilakukan oleh server.

    - Perbedaan pada View Source

        Perbedaan berikutnya dapat dilihat melalui fitur View Page Source pada browser. Ketika melihat source code halaman CSR, HTML yang ditampilkan biasanya hanya berisi struktur dasar halaman seperti container atau div tanpa data produk. Hal ini terjadi karena data produk dimuat secara dinamis oleh JavaScript setelah halaman dirender di browser.
        
        Sebaliknya, pada halaman SSR, ketika melihat View Source maka data produk sudah terlihat di dalam HTML. Hal ini karena server telah merender seluruh konten halaman terlebih dahulu sebelum dikirim ke browser. Dengan kata lain, HTML yang diterima browser sudah berisi data lengkap.
        
        Perbedaan ini juga menjadi salah satu alasan mengapa SSR lebih baik untuk Search Engine Optimization (SEO), karena mesin pencari dapat langsung membaca konten halaman tanpa harus menjalankan JavaScript terlebih dahulu.

    - Kesimpulan

        Berdasarkan hasil percobaan yang dilakukan, dapat disimpulkan bahwa Client Side Rendering (CSR) dan Server Side Rendering (SSR) memiliki cara kerja yang berbeda dalam menampilkan konten halaman. Pada CSR, data diambil oleh browser setelah halaman dimuat sehingga sering menampilkan skeleton loading terlebih dahulu. Selain itu, request API dapat terlihat pada Network tab browser dan konten halaman tidak langsung tersedia pada View Source.
        
        Sebaliknya, pada SSR proses pengambilan data dilakukan oleh server sebelum halaman dikirim ke browser. Hal ini menyebabkan halaman dapat langsung menampilkan data tanpa menunggu proses loading di client. Selain itu, request API tidak terlihat pada Network tab browser dan konten halaman sudah tersedia di dalam HTML pada View Source.
        
        Dengan demikian, SSR lebih cocok digunakan untuk halaman yang membutuhkan performa loading awal yang cepat serta optimasi SEO, sedangkan CSR lebih cocok untuk aplikasi yang memiliki banyak interaksi dinamis di sisi client.

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



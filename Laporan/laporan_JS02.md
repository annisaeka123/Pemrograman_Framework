# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 2

# ROUTING & LAYOUTING PADA NEXT.JS (PAGES ROUTER)

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

## A. Dasar Konsep (Ringkas)
- Folder pages/ → otomatis menjadi routing
- index.tsx → root route (/)
- Folder di dalam pages/ → nested route
- File [param].tsx → dynamic routing
- pages/_app.tsx → entry point global aplikasi

## B. Langkah Kerja Praktikum

### 1. Routing Dasar (Static Routing)
a. Struktur Awal
```
pages/
└── index.tsx
```
b. Tambahkan Halaman About
c. Uji di Browser
- [http://localhost:3000/about](http://localhost:3000/about)

★ Catatan
Next.js otomatis membuat routing berdasarkan nama file tanpa konfigurasi tambahan.

### 2. Routing Menggunakan Folder
a. Rapikan Menggunakan Folder
- Ubah struktur menjadi:
```
pages/
└── about/
    └── index.tsx ( yang sebelumnya about.tsx menjadi index.tsx )
```
- Akses: /about

★ Insight: index.tsx di dalam folder mewakili root folder tersebut.

b. Akses dari Halaman Browser ( tetap sama tetapi lebih rapi )

### 3. Nested Routing
a. Buat Folder Setting
```
pages/
└── setting/
    ├── user.tsx
    └── app.tsx
```
- Modifikasi kodenya
  - user.tsx
  - app.tsx
- Akses:
  - /setting/user
  - /setting/app
- Modifikasi struktur folder pages dengan menambahkan folder user dan user.tsx pada setting dipindah ke folder user dan rubah file user.tsx menjadi index.tsx
- Jalankan pada browser

b. Nested Lebih Dalam
```
pages/
└── setting/
    └── user/
        └── password/
            └── index.tsx
```
- Akses: /setting/user/password

★ Keunggulan: Tidak perlu konfigurasi manual seperti React Router atau Laravel Route.

### 4. Dynamic Routing
a. Buat Halaman Produk
```
└── produk/
    ├── index.tsx
    └── [id].tsx
```
- Modifikasi index.tsx
- Modifikasi [id].tsx
- Buka browser [http://localhost:3000/produk/sepatu](http://localhost:3000/produk/sepatu) tambahkan segment sepatu.
- Cek menggunakan console.log jika berhasil maka pada console.log dapat terlihat pada id terdapat nilai sepatu.

★ Catatan Penting: Pada console.log data langsung terlihat dikarenakan terdapat ext vscode console ninja.

- Modifikasi [id].tsx agar dapat mengambil nilai dari id
- Buka browser

b. Uji di Browser
- /produk/sepatu-baru
- /produk/baju

★ Catatan Penting: Nama file di dalam [ ] akan menjadi parameter URL. Contoh:

### 5. Membuat Komponen Navbar
a. Struktur Komponen
```
src/
└── components/
    └── layouts/
        └── Navbar/
            └── index.tsx
```
- Modifikasi index.tsx
- Buka globals.css untuk nantinya digunakan pada style navbar
  - globals.css
  - Modifikasi globals.css
- Modifikasi index.tsx dengan menambahkan classname untuk style navbar
- Modifikasi globals.css
- Modifikasi index.tsx pada folder pages
- Modifikasi _app.tsx ( pastikan import styles dalam keadaan aktif)
- Jalankan di browser ( Navbar akan tampil )

★ Catatan Penting: navbar hanya akan muncul pada index page, pada page produk navbar tidak akan muncul. Contoh:

- Modifikasi navbar agar tampil di semua page
  - Modifikasi index.tsx pada folder page ( hapus navbar )
  - Modifikasi _app.tsx ( Menambahkan navbar )
- Jalankan Browser

### 6. Membuat Layout Global (App Shell)
a. Buat AppShell
- Modifikasi index.tsx pad AppShell

### 7. Implementasi Layout di _app.tsx
- Hasil

Navbar dan layout muncul di semua halaman tanpa perlu dipanggil satu per satu. contoh Modifikasi pada _app.tsx tambahkan footer seperti pada gambar dan amati hasilnya.

## C. Tugas Praktikum

### Tugas 1 – Routing
1. Buat halaman:
   - /profile
   - /profile/edit
2. Pastikan routing berjalan tanpa error

### Tugas 2 – Dynamic Routing
1. Buat routing:
2. /blog/[slug]
3. Tampilkan nilai slug di halaman

### Tugas 3 – Layout
1. Tambahkan Footer pada AppShell
2. Footer tampil di semua halaman

## D. Pertanyaan Refleksi
1. Apa perbedaan routing berbasis file dan routing manual?  
   Routing berbasis file adalah metode penentuan jalur (route) yang secara otomatis mengikuti struktur folder dan nama file dalam sebuah proyek. Artinya, setiap file yang dibuat di dalam folder tertentu secara langsung merepresentasikan sebuah URL tanpa perlu konfigurasi tambahan. Pendekatan ini biasanya membuat proses pengembangan menjadi lebih cepat dan sederhana karena developer tidak perlu menuliskan definisi route satu per satu. Sebaliknya, routing manual mengharuskan developer mendefinisikan setiap route secara eksplisit di dalam kode program. Pada metode ini, kita menentukan sendiri path URL dan komponen apa yang akan ditampilkan ketika path tersebut diakses. Routing manual memberikan fleksibilitas lebih tinggi untuk pengaturan logika navigasi yang kompleks, tetapi membutuhkan konfigurasi lebih banyak dan lebih rentan terhadap kesalahan jika tidak dikelola dengan baik.

2. Mengapa dynamic routing penting dalam aplikasi web?  
   Dynamic routing penting karena memungkinkan aplikasi web menangani banyak halaman dengan struktur yang sama tetapi data yang berbeda. Dalam aplikasi nyata seperti e-commerce, portal berita, atau sistem informasi, sering kali terdapat halaman detail yang bergantung pada parameter tertentu, seperti ID produk atau ID artikel. Dengan dynamic routing, kita cukup membuat satu template halaman yang dapat menerima parameter tersebut, sehingga tidak perlu membuat file terpisah untuk setiap data. Hal ini membuat aplikasi lebih efisien, mudah dikembangkan, dan lebih scalable ketika jumlah data terus bertambah. Selain itu, dynamic routing membantu menciptakan URL yang lebih terstruktur dan informatif, sehingga meningkatkan pengalaman pengguna dan mempermudah pengelolaan sistem secara keseluruhan.

3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu?  
   Layout global memberikan keuntungan dalam hal efisiensi, konsistensi, dan kemudahan pemeliharaan kode. Dengan layout global, komponen yang digunakan secara berulang seperti header, navbar, sidebar, atau footer cukup didefinisikan sekali saja dan otomatis diterapkan ke seluruh halaman. Hal ini mengurangi duplikasi kode dan membuat struktur proyek lebih rapi. Jika terjadi perubahan pada salah satu bagian layout, developer hanya perlu memperbarui satu file tanpa harus mengedit setiap halaman secara manual. Selain itu, penggunaan layout global menjaga konsistensi tampilan dan pengalaman pengguna di seluruh aplikasi, sehingga aplikasi terlihat lebih profesional dan terstruktur dengan baik.

## E. Kesimpulan
Melalui praktikum ini, mahasiswa telah memahami bahwa **Next.js Pages Router** :
- Menghemat waktu konfigurasi routing
- Mendukung nested dan dynamic routing secara natural
- Memudahkan pengelolaan layout global menggunakan _app.tsx



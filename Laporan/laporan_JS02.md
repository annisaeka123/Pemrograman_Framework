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

## B. Langkah Praktikum

### 1. Routing Dasar (Static Routing)
a. Struktur Awal
```
pages/
└── index.tsx
```
b. Tambahkan Halaman About

  <img width="194" height="220" alt="image" src="https://github.com/user-attachments/assets/78f533a0-9f15-428a-a75d-fa8132353002" />


c. Uji di Browser
- [http://localhost:3000/about](http://localhost:3000/about)

    <img width="552" height="182" alt="image" src="https://github.com/user-attachments/assets/73420afe-fc7b-4bce-82a3-92d175d7ab48" />


★ **Catatan:**

Next.js otomatis membuat routing berdasarkan nama file tanpa konfigurasi tambahan.


### 2. Routing Menggunakan Folder
a. Rapikan Struktur Pages
    
- Ubah struktur menjadi:
```
pages/
└── about/
    └── index.tsx ( yang sebelumnya about.tsx menjadi index.tsx )
```
  - Sebelum

    <img width="190" height="193" alt="image" src="https://github.com/user-attachments/assets/ed03e6b4-4f66-4687-8fe6-606383824ae4" />

  - Sesudah

    <img width="211" height="223" alt="image" src="https://github.com/user-attachments/assets/b58e8a85-8aa0-44d0-9f4b-6d66ca731ee7" />


- Akses: /about

★ **Insight:** 

index.tsx di dalam folder mewakili root folder tersebut.

b. Akses dari Halaman Browser ( tetap sama tetapi lebih rapi )

<img width="568" height="182" alt="image" src="https://github.com/user-attachments/assets/f411a5d2-b81d-440c-8f54-5207a736d97e" />

### 3. Nested Routing
a. Buat Folder Setting
```
pages/
└── setting/
    ├── user.tsx
    └── app.tsx
```

<img width="215" height="194" alt="image" src="https://github.com/user-attachments/assets/3f01cb4c-021e-482b-bf78-be3537b29860" />

- Modifikasi kodenya
  - user.tsx

    <img width="430" height="264" alt="image" src="https://github.com/user-attachments/assets/822457c8-5db5-4e3e-9967-67c3f8154a99" />

  - app.tsx

    <img width="451" height="268" alt="image" src="https://github.com/user-attachments/assets/79f109ce-f46e-48c0-baee-d68bd3aaa4d0" />

    Tips: Copy paste dari user.tsx , block Usersettingpage + Control+D maka saat merubah 
usersettingpage menjadi Appsetting akan berubah semua tanpa harus rename satu-satu.

- Akses:
  - /setting/user

    <img width="430" height="151" alt="image" src="https://github.com/user-attachments/assets/eed06d29-892f-49c2-99e4-053926de6641" />

  - /setting/app

    <img width="395" height="146" alt="image" src="https://github.com/user-attachments/assets/094dd5ff-c351-4e79-8af5-8db5fc69ac3e" />

- Modifikasi struktur folder pages dengan menambahkan folder user dan user.tsx pada setting dipindah ke folder user dan rubah file user.tsx menjadi index.tsx
    - Sebelum

      <img width="198" height="176" alt="image" src="https://github.com/user-attachments/assets/3742eb19-a983-4857-b5c3-656d9a7e534b" />

    - Sesudah

      <img width="201" height="193" alt="image" src="https://github.com/user-attachments/assets/7f7caa00-f0ec-48a2-aee2-8fc457b66150" />

- Jalankan pada browser

  <img width="657" height="145" alt="image" src="https://github.com/user-attachments/assets/e20192a9-f415-4d3b-80f3-d83b315f04b2" />

b. Nested Lebih Dalam

<img width="194" height="247" alt="image" src="https://github.com/user-attachments/assets/9d9a4d61-5233-4b77-b0f4-3df09baa2cff" />

```
pages/
    └── user/
        └── password/
            └── index.tsx
```
- Akses: /setting/user/password

  <img width="672" height="166" alt="image" src="https://github.com/user-attachments/assets/ab2c73e8-ee1b-4b1b-96c2-a9ed66ae8490" />

★ **Keunggulan:** 

Tidak perlu konfigurasi manual seperti React Router atau Laravel Route.

### 4. Dynamic Routing
a. Buat Halaman Produk
```
└── produk/
    ├── index.tsx
    └── [id].tsx
```
- Modifikasi index.tsx

  <img width="445" height="258" alt="image" src="https://github.com/user-attachments/assets/764c3440-ef0b-4720-bb12-6c9c29c5cf87" />

- Modifikasi [id].tsx
  Buka browser [http://localhost:3000/produk/sepatu](http://localhost:3000/produk/sepatu) tambahkan segment sepatu.

  <img width="687" height="172" alt="image" src="https://github.com/user-attachments/assets/7ee05b78-f9e6-4288-a9c5-83f81981351f" />

- Cek menggunakan console.log jika berhasil maka pada console.log dapat terlihat pada id terdapat nilai sepatu.

  <img width="499" height="383" alt="image" src="https://github.com/user-attachments/assets/8460ac56-73d6-4df4-9964-cfdffc2f5c58" />


★ **Catatan Penting:** 

Pada console.log data langsung terlihat dikarenakan terdapat ext vscode console ninja.

- Modifikasi [id].tsx agar dapat mengambil nilai dari id

  <img width="491" height="409" alt="image" src="https://github.com/user-attachments/assets/553fec2c-2dd8-49b9-a72a-f984633a4c35" />

- Buka browser

  <img width="676" height="174" alt="image" src="https://github.com/user-attachments/assets/8ef60806-4242-48d7-8422-ce634e3f3a3a" />


b. Uji di Browser
- /produk/sepatu-baru

  <img width="686" height="176" alt="image" src="https://github.com/user-attachments/assets/d568fdbc-0983-4631-b2db-dc99b7ad3bb1" />

- /produk/baju

  <img width="674" height="188" alt="image" src="https://github.com/user-attachments/assets/5fcf8107-d6b3-41f4-a0d3-39119956fd94" />


★ **Catatan Penting:** 

Nama file di dalam [ ] akan menjadi parameter URL.

### 5. Membuat Komponen Navbar
a. Struktur Komponen
```
src/
└── components/
    └── layouts/
        └── Navbar/
            └── index.tsx
```

<img width="278" height="83" alt="image" src="https://github.com/user-attachments/assets/f6f78693-0d5b-4e4b-9143-e2b622685b4e" />

- Modifikasi index.tsx

  <img width="576" height="259" alt="image" src="https://github.com/user-attachments/assets/44d99574-6a0d-49f7-9e83-51f04686a3fe" />

- Buka globals.css untuk nantinya digunakan pada style navbar

  <img width="577" height="907" alt="image" src="https://github.com/user-attachments/assets/1579320f-0183-4fff-80b8-238dff67c9f2" />

- Modifikasi index.tsx dengan menambahkan classname untuk style navbar

  <img width="544" height="265" alt="image" src="https://github.com/user-attachments/assets/2d8ba30c-adba-451e-a134-bf2b8cac8baf" />

- Modifikasi globals.css

  <img width="380" height="241" alt="image" src="https://github.com/user-attachments/assets/cdc1ae73-6c54-45d7-a622-993be239c82a" />


- Modifikasi index.tsx pada folder pages

  <img width="591" height="456" alt="image" src="https://github.com/user-attachments/assets/24daffd3-970e-446b-940a-29f696b9893b" />

- Modifikasi _app.tsx ( pastikan import styles dalam keadaan aktif)

  <img width="596" height="194" alt="image" src="https://github.com/user-attachments/assets/c7a1d117-4645-4bda-9b99-d10f44e7c5d1" />

- Jalankan di browser ( Navbar akan tampil )

  <img width="685" height="322" alt="image" src="https://github.com/user-attachments/assets/fca70a96-cd2f-46eb-884c-6564aeca664e" />


★ **Catatan Penting:** 

navbar hanya akan muncul pada index page, pada page produk navbar tidak akan muncul. Contoh:

<img width="516" height="185" alt="image" src="https://github.com/user-attachments/assets/126e2f0e-23c7-4959-9d44-2d40563bbf18" />


- Modifikasi navbar agar tampil di semua page
  - Modifikasi index.tsx pada folder page ( hapus navbar )

    <img width="595" height="426" alt="image" src="https://github.com/user-attachments/assets/101b9940-c56d-4912-b5bc-949f64385b07" />

  - Modifikasi _app.tsx ( Menambahkan navbar )

    <img width="708" height="329" alt="image" src="https://github.com/user-attachments/assets/5ba147d4-221b-472e-90cb-a8b045fc83be" />

- Jalankan Browser

  <img width="722" height="310" alt="image" src="https://github.com/user-attachments/assets/cd35d71d-583c-4c86-8071-2cb24ca1ea64" />

  <img width="685" height="229" alt="image" src="https://github.com/user-attachments/assets/651092cf-c8bf-4d34-8c80-6034476efc25" />

  <img width="709" height="294" alt="image" src="https://github.com/user-attachments/assets/20625ff3-c153-4a8f-872c-a7bcdfb0fc44" />

  <img width="717" height="263" alt="image" src="https://github.com/user-attachments/assets/437eecb9-082b-418b-af9f-c9b300d6fbb9" />


### 6. Membuat Layout Global (App Shell)
a. Buat AppShell
```
└── Appshell/
    ├── Navbar (tetap)
    └── Children (dinamis)
```

<img width="275" height="168" alt="image" src="https://github.com/user-attachments/assets/9afb664d-634b-424c-8e1d-29220ffb54f1" />

- Modifikasi index.tsx pad AppShell

  <img width="603" height="468" alt="image" src="https://github.com/user-attachments/assets/41e57324-9efb-4dbe-85f8-5a8db9b380ae" />


### 7. Implementasi Layout di _app.tsx

<img width="721" height="329" alt="image" src="https://github.com/user-attachments/assets/2c4d3ad9-621b-4d35-bfc4-1ed500b786d3" />

Modifikasi pada Appshell/index.tsx, tambahkan footer seperti pada gambar dan amati hasilnya.

<img width="579" height="561" alt="image" src="https://github.com/user-attachments/assets/84f3cad2-cd85-4799-ad7e-47279e44dbde" />


- Hasil

  Navbar dan layout muncul di semua halaman tanpa perlu dipanggil satu per satu.

  <img width="687" height="289" alt="image" src="https://github.com/user-attachments/assets/d232a002-0704-4fe7-98ce-7f4ebb2f7c89" />

  <img width="490" height="242" alt="image" src="https://github.com/user-attachments/assets/242928f0-42e6-449c-bb42-048def8460dd" />


## C. Tugas Praktikum

### Tugas 1 – Routing
1. Buat halaman:
   - /profile
   - /profile/edit
2. Pastikan routing berjalan tanpa error

Hasil:

<img width="190" height="114" alt="image" src="https://github.com/user-attachments/assets/991d60c1-97b8-42ed-bed9-2b00b6696df9" />

- /profile

  <img width="957" height="505" alt="image" src="https://github.com/user-attachments/assets/053f1f6e-88d7-443e-9cce-e7e68104ea07" />


- /profile/edit

  <img width="953" height="517" alt="image" src="https://github.com/user-attachments/assets/9674090e-177f-4746-80cf-62432e8e3479" />



### Tugas 2 – Dynamic Routing
1. Buat routing:
2. /blog/[slug]
3. Tampilkan nilai slug di halaman

Hasil:

<img width="180" height="169" alt="image" src="https://github.com/user-attachments/assets/3cce4990-d885-4316-ba07-6b360bea3e06" />

- /blog

  <img width="952" height="351" alt="image" src="https://github.com/user-attachments/assets/d8b3e873-c11b-4ce2-bbea-ba85dae06b51" />


- /blog/pemrograman-framework

  <img width="953" height="371" alt="image" src="https://github.com/user-attachments/assets/6446c04f-ff4d-443d-b093-b6dc7b56260d" />


- /blog/pbf

  <img width="954" height="352" alt="image" src="https://github.com/user-attachments/assets/c86c477e-607a-4d42-84f4-9117733cea12" />



### Tugas 3 – Layout
1. Tambahkan Footer pada AppShell
2. Footer tampil di semua halaman

Hasil:

<img width="254" height="225" alt="image" src="https://github.com/user-attachments/assets/f13f3a85-38f9-4e8e-b14c-72678828bb12" />

<img width="963" height="419" alt="image" src="https://github.com/user-attachments/assets/8d172b8e-e0bb-4916-a710-bc84ba3d38d1" />

<img width="959" height="337" alt="image" src="https://github.com/user-attachments/assets/ec5b73f6-9fe3-4247-bbb3-7ab4043d2f62" />


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



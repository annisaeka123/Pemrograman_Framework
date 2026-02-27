# PEMROGRAMAN BERBASIS FRAMEWORK

# JOBSHEET 4

# CATCH-ALL ROUTING, OPTIONAL CATCH-ALL, LINKING & NAVIGATING PADA NEXT.JS PAGES ROUTER

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

## A. Dasar Teori Singkat

1. **Segment & Slug pada URL**
   - URL dapat terdiri dari beberapa segmen, contoh: `/product/clothes/tops/t-shirt`
   - Setiap bagian dipisahkan oleh `/` dan disebut segmen.

2. **Catch-All Route**
   - Next.js memungkinkan menangkap semua segmen URL menggunakan: `[...slug].js`
   - Hasil parameter akan berbentuk array.

3. **Optional Catch-All Route**
   - Agar halaman tetap bisa diakses meskipun tanpa parameter: `[[...slug]].js`

4. **Navigasi di Next.js**
   - Deklaratif: Link dari `next/link`
   - Imperatif: `router.push()` dari `next/router`
## B. Langkah Kerja Praktikum

### Langkah 1 - Menjalankan Project
1. Buka folder project Next.js.
2. Jalankan server: `npm run dev`
3. Akses: [http://localhost:](http://localhost:)

   <img width="979" height="289" alt="image" src="https://github.com/user-attachments/assets/ecf76d93-070b-4538-870e-5bfdda177eb1" />


### Langkah 2 - Membuat Catch-All Route
1. Masuk ke folder pages.
2. Buat folder shop dan file `[...slug].tsx`.
   
   <img width="204" height="259" alt="image" src="https://github.com/user-attachments/assets/d9fc3cdd-bc8f-48e3-b46c-7448cbf53b53" />

3. Modifikasi Isi file `[...slug].tsx` dengan kode berikut:  

   <img width="563" height="390" alt="image" src="https://github.com/user-attachments/assets/a211c362-42b1-4adb-8e2a-7d36479cf2ff" />

   Cek menggunakan `console.log` apakah nilai segment berhasil didapat
   
   - Jalankan browser dan ketik urlnya sebagai berikut

     <img width="956" height="327" alt="image" src="https://github.com/user-attachments/assets/2928361b-2271-484d-97cd-3a338e495980" />

   - Cek Vscode jika pada `console.log` dapat menampilkan nilai querynya berarti berhasil

     <img width="1613" height="420" alt="image" src="https://github.com/user-attachments/assets/38ce5d8c-4412-4b13-93bf-055eacdcab15" />
     
   - Modifikasi `[...slug].tsx` untuk menampilkan nilai query

     <img width="1325" height="470" alt="image" src="https://github.com/user-attachments/assets/820e32eb-085f-4613-897f-823bc1cb812b" />


### Langkah 3 - Pengujian Catch-All Route 
Akses URL berikut di browser:
- `/shop/clothes`

  <img width="953" height="337" alt="image" src="https://github.com/user-attachments/assets/b85bd647-e8e1-4a60-a240-75c1a9f2b57a" />

- `/shop/clothes/tops`

  <img width="949" height="352" alt="image" src="https://github.com/user-attachments/assets/16b37684-b9f4-411c-a3dc-136dd9dfda7f" />

- `/shop/clothes/tops/t-shirt`
  <img width="952" height="359" alt="image" src="https://github.com/user-attachments/assets/0ad5643c-5a8d-41d2-9bac-8b4d13b3c44e" />


Jika dilihat ada yang terbaca undefined dan ada yang tidak terbaca ini dikarenakan segmennya dibatasi Cuma array[0] dan array[1]. Solusinya bagaimana?

Modifikasi `[...slug].tsx` menjadi berikut

<img width="1296" height="482" alt="image" src="https://github.com/user-attachments/assets/8d0e72e3-3f42-4996-b5fe-e652d3060fef" />

Jalankan browser: Berapapun banyaknya segment tetap terbaca  

<img width="951" height="338" alt="image" src="https://github.com/user-attachments/assets/2566ba82-84d5-4924-ad37-ecd93907a98d" />

<img width="948" height="344" alt="image" src="https://github.com/user-attachments/assets/ba3c5c6a-a8b9-49ed-90ff-5b4c28ec7eec" />


**Untuk saat ini gunakan**

<img width="1340" height="435" alt="image" src="https://github.com/user-attachments/assets/5c0f0c37-2341-4756-9b2a-8bda09b83335" />


Perhatikan bahwa:
- slug berbentuk array
- Isi halaman berubah sesuai URL

### Langkah 4 - Optional Catch-All Route
1. Jika menggunakan `[...slug].js` maka ketika mengakses shop akan terjadi error

   <img width="954" height="711" alt="image" src="https://github.com/user-attachments/assets/654fc221-eecc-40ec-aca5-110a95fde400" />

2. Solusinya dengan Rename file: `[...slug].js` → `[[...slug]].js`

   <img width="184" height="256" alt="image" src="https://github.com/user-attachments/assets/bcb267e6-59a4-440f-8ae7-c863ec43a9d1" />

3. Sekarang akses: `/shop`

   <img width="955" height="357" alt="image" src="https://github.com/user-attachments/assets/8509441f-b1cc-44a2-a4e7-23512f08a472" />

4. Halaman dapat diakses meskipun tanpa parameter.

### Langkah 5 - Validasi Parameter
Tambahkan validasi agar tidak error saat slug kosong:

```html
<p>
Kategori: {slug ? slug[0] : "Semua Kategori"}
</p>
```

<img width="872" height="575" alt="image" src="https://github.com/user-attachments/assets/95aee710-fd7c-4295-8a0a-e7739d6805d1" />


<img width="955" height="374" alt="image" src="https://github.com/user-attachments/assets/b0ce482e-226a-4393-9bca-58d56326f168" />



### Langkah 6 - Membuat Halaman Login & Register
1. Buat folder: `pages/auth`
2. Buat file:
   - `login.jsx`
   - `register.jsx`
   
   <img width="182" height="164" alt="image" src="https://github.com/user-attachments/assets/d7ed23e7-c8b7-441c-aeef-0c939e83f2a4" />

3. Modifikasi
   - `login.jsx`:

     <img width="722" height="331" alt="image" src="https://github.com/user-attachments/assets/475fdb76-8361-43cd-a4e3-add07a4c8c15" />

   - `register.jsx`:

     <img width="684" height="350" alt="image" src="https://github.com/user-attachments/assets/59d14359-11fa-4074-98ff-a3844425b952" />


### Langkah 7 - Navigasi Imperatif (router.push)
1. Tambahkan button login:  

   <img width="800" height="599" alt="image" src="https://github.com/user-attachments/assets/169a5b3c-5251-4dd7-a467-8df0294553e9" />
   
   | Kode | Cara Kerja | Kapan Dipanggil | Kelebihan | Kekurangan | Rekomendasi |
   | :--- | :--- | :--- | :--- | :--- | :--- |
   | `onClick={handlerLogin}` | Mengirim referensi fungsi ke event handler | Saat tombol diklik | Paling bersih, efisien, dan best practice | Tidak bisa kirim parameter langsung | **Sangat direkomendasikan** |
   | `onClick={() => push('/produk')}` | Arrow function memanggil fungsi di dalamnya | Saat tombol diklik | Praktis untuk aksi sederhana | Kurang reusable jika logika bertambah | Direkomendasikan untuk navigasi sederhana |
   | `onClick={() => handlerLogin()}` | Arrow function membungkus pemanggilan fungsi | Saat tombol diklik | Fleksibel untuk kirim parameter | Redundant jika tanpa parameter | Direkomendasikan hanya jika perlu argumen |
   | `onClick={handlerLogin()}` | Fungsi langsung dieksekusi | Saat render | Tidak ada | Bug: fungsi tidak menunggu klik | **Tidak direkomendasikan** |

   Saat ini gunakan `onClick={() => handlerLogin()}`

2. Klik tombol dan perhatikan perpindahan halaman tanpa reload.
3. Jika di klik button login maka akan menuju `/produk`

   <img width="955" height="423" alt="image" src="https://github.com/user-attachments/assets/5fdf0e59-a011-488c-968b-1a48145eeae1" />

   <img width="953" height="315" alt="image" src="https://github.com/user-attachments/assets/293df63f-adb9-418b-9dc5-3fe29db1919f" />

   <img width="956" height="349" alt="image" src="https://github.com/user-attachments/assets/60e8cf85-9d2f-4171-b15e-3e85772bbd89" />

```
★ Note: - Pastikan code untuk redirect tidak aktif, jika aktif maka ketika masuk ke produk akan langsung redirect ke login
```

### Langkah 8 - Simulasi Redirect (Belum Login)
1. Di halaman product, pada `index.tsx` tambahkan beberapa code berikut:

   <img width="608" height="458" alt="image" src="https://github.com/user-attachments/assets/4c8179f5-e355-4221-a07c-dc014a7d76b2" />

2. Jika Akses `/product` → otomatis diarahkan ke login.

## C. Tugas Praktikum

### Tugas 1
- Buat catch-all route: `/category/[...slug].js`
  
- Tampilkan seluruh parameter URL dalam bentuk list.


   <img width="849" height="716" alt="image" src="https://github.com/user-attachments/assets/79bd19e8-a1c1-4b2b-9221-16c5c763e13e" />

   <img width="956" height="441" alt="image" src="https://github.com/user-attachments/assets/6cd2f369-4297-44b1-9b02-a83852a5b162" />


### Tugas 2
- Buat navigasi:
  - Login → Product (imperatif)
  - Login ↔ Register (Link)


   <img width="860" height="586" alt="image" src="https://github.com/user-attachments/assets/63da5050-9acd-4c59-854b-0a364b5169ee" />


   <img width="693" height="337" alt="image" src="https://github.com/user-attachments/assets/d2bde192-0a6e-45ed-ba68-f3b6c3b66741" />


### Tugas 3 (Pengayaan)
- Terapkan redirect otomatis ke login jika user belum login.

   <img width="875" height="650" alt="image" src="https://github.com/user-attachments/assets/60bc8410-a05a-4693-bb3a-403ca5a01fba" />



## D. Pertanyaan Refleksi
1. Apa perbedaan `[id].js` dan `[...slug].js`?

   Perbedaan antara [id].js dan [...slug].js terletak pada jumlah parameter yang dapat ditangkap dari URL. File [id].js digunakan untuk menangkap satu parameter dinamis saja. Misalnya jika terdapat route /produk/10, maka nilai id yang diterima adalah “10”. Route seperti ini biasanya digunakan ketika kita hanya membutuhkan satu data unik, seperti ID produk, ID user, atau ID artikel. Sedangkan [...slug].js adalah catch-all route yang dapat menangkap lebih dari satu segmen URL sekaligus. Misalnya pada URL /category/baju/pria/murah, maka semua bagian setelah /category akan ditangkap dalam satu variabel bernama slug. Jadi secara sederhana, [id] menangkap satu segmen, sedangkan [...slug] bisa menangkap banyak segmen.

2. Mengapa slug berbentuk array?

   Slug berbentuk array karena pada catch-all route, URL bisa memiliki beberapa bagian yang dipisahkan oleh tanda garis miring (/). Setiap bagian tersebut dianggap sebagai satu segmen path. Agar semua segmen bisa disimpan dan diakses dengan mudah, Next.js menyimpannya dalam bentuk array. Dengan bentuk array, kita bisa mengambil setiap bagian secara terpisah, misalnya slug[0], slug[1], atau menggabungkannya kembali sesuai kebutuhan. Jika hanya berupa string tunggal, maka tidak akan bisa menangani struktur URL yang bertingkat.

3. Kapan sebaiknya menggunakan Link dan `router.push()`?

   Link sebaiknya digunakan ketika kita ingin melakukan navigasi biasa antar halaman tanpa adanya logika tambahan, seperti menu navigasi atau tombol pindah halaman sederhana. Komponen ini bersifat deklaratif karena kita langsung mendefinisikan tujuan halamannya di dalam JSX. Sedangkan router.push() digunakan ketika perpindahan halaman terjadi karena suatu aksi atau kondisi tertentu, misalnya setelah login berhasil, setelah submit form, atau setelah pengecekan validasi. router.push() bersifat imperatif karena kita memerintahkan perpindahan halaman melalui kode program.

4. Mengapa navigasi Next.js tidak me-refresh halaman?

   Navigasi Next.js tidak me-refresh halaman karena Next.js menggunakan konsep Single Page Application (SPA). Ketika berpindah halaman, browser tidak memuat ulang seluruh halaman dari awal seperti pada website tradisional. Sebaliknya, Next.js menggunakan client-side routing untuk mengganti komponen yang berubah tanpa melakukan reload penuh. Proses ini memanfaatkan JavaScript dan sistem rendering React, sehingga perpindahan halaman terasa lebih cepat, lebih halus, dan tidak menampilkan efek refresh ulang pada browser.


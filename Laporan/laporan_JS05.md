# PEMROGRAMAN BERBASIS FRAMEWORK  

# JOBSHEET 5  

# STYLING PADA NEXT.JS (GLOBAL CSS, CSS MODULE, INLINE STYLE, SCSS, DAN TAILWIND CSS)

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

## A. Konsep Dasar Styling di Next.js

Next.js mendukung beberapa pendekatan styling:

- Global CSS  
- CSS Module  
- Inline Style (CSS-in-JS)  
- SCSS / SASS  
- Utility-first CSS Framework (Tailwind CSS, Bootstrap, dll)  

---

## B. Langkah Praktikum

### 1. Global CSS

a. File Global  

   <img width="556" height="907" alt="image" src="https://github.com/user-attachments/assets/baed995d-7689-4418-8729-80aa65602ccd" />

b. Import Global CSS  

   `// pages/_app.tsx`  
   `import "@/styles/globals.css";`

   <img width="607" height="327" alt="image" src="https://github.com/user-attachments/assets/72f84586-ef03-414e-b5d0-8d43032cbd0e" />

★ Catatan:
- Global CSS hanya bisa di-import di _app.tsx  
- Berlaku untuk seluruh aplikasi  

---

### 2. CSS Module (Local Scope)

a. Struktur Komponen Navbar  

   src/components/layout/Navbar/  
   ├── index.tsx  
   └── Navbar.module.css  

   <img width="298" height="223" alt="image" src="https://github.com/user-attachments/assets/fa776950-c2ba-4779-a70e-76b04b01e0b1" />

b. File CSS Module  
   - Modifikasi global.css

       <img width="557" height="857" alt="image" src="https://github.com/user-attachments/assets/e9ab42fd-5557-4a6f-ae77-45b93a680f9d" />

   - Modifikasi navbar.module.css

       <img width="422" height="242" alt="image" src="https://github.com/user-attachments/assets/9e1c67f2-ba77-4e8a-8acd-95bb71310d0a" />


c. Pemanggilan di Komponen  
   - Modifikasi kode pada index.tsx pada folder navbar

       <img width="507" height="286" alt="image" src="https://github.com/user-attachments/assets/dbf9aa4d-9dee-485f-9c2d-f23f5f4a3a99" />

   - Jalankan browser

     <img width="956" height="418" alt="image" src="https://github.com/user-attachments/assets/3eef64ad-4dd9-4d9e-b252-9f9656a04419" />


★ Keunggulan CSS Module:
- Scope lokal  
- Tidak bentrok antar class  
- Cocok untuk komponen reusable  

---

### 3. Styling untuk Pages (CSS Module)

a. Contoh Login Page  

- Tambahkan login.module.css pada folder auth

  <img width="241" height="243" alt="image" src="https://github.com/user-attachments/assets/e910526b-cc24-4957-8a1e-b26620333dbe" />

- Modifikasi login.module.css

  <img width="523" height="199" alt="image" src="https://github.com/user-attachments/assets/49905a16-5769-4134-b02a-8165a051c678" />

- Modifikasi login.tsx  
  - Tambahkan import styles  
  - Tambahkan className={styles.login}

   <img width="869" height="598" alt="image" src="https://github.com/user-attachments/assets/d38ed4bd-92dd-4d9e-ab7d-ea49d1121082" />

- Jalankan browser

  <img width="928" height="797" alt="image" src="https://github.com/user-attachments/assets/56b80caa-aba1-4114-a728-015cc5523f86" />


---

### 4. Conditional Rendering Navbar (Tanpa Navbar di Login)

 - Modifikasi index.tsx pada folder Appshell  

      - import { useRouter } from "next/router";  
      - const disableNavbar = ["/auth/login", "/auth/register"];  
      - const { pathname } = useRouter();  
      - {!disableNavbar.includes(router.pathname) && <Navbar />}

     <img width="667" height="620" alt="image" src="https://github.com/user-attachments/assets/50a539e8-2889-45d4-8a4b-a470ae9999ff" />


   - Jalankan browser

     <img width="935" height="820" alt="image" src="https://github.com/user-attachments/assets/ae9e2ce6-ca95-482f-a86d-fe42871f5961" />


**★ Insight:**

   - Gunakan router.pathname jika ada query parameter.  
      - const { pathname } = useRouter();
      - Darimanakah pathname → lakukan console.log pada router.  
   - Jangan gunakan asPath jika ada query parameter.  

---

### 5. Refactoring Struktur Project (Best Practice)

a. Struktur Awal (Kurang Rapi)

   pages/login.tsx  
   
   styles/login.module.css  

  <img width="201" height="113" alt="image" src="https://github.com/user-attachments/assets/2882359f-4275-4970-9da1-f0a5e429bf6c" />


b. Struktur Refactor (Disarankan)

   pages/auth/login.tsx  
   src/views/auth/Login/  
   ├── index.tsx  
   └── Login.module.css  

   <img width="341" height="440" alt="image" src="https://github.com/user-attachments/assets/ce02cafd-f38f-42c7-947b-e883b822d90e" />


- Modifikasi login.module.css pada folder views/auth/login/

  <img width="633" height="204" alt="image" src="https://github.com/user-attachments/assets/a64beeba-3528-4f77-b980-e66af0f393e8" />

- Login.module.css pada folder pages/auth dihapus

  <img width="262" height="163" alt="image" src="https://github.com/user-attachments/assets/8956942c-cf42-4be8-b79a-643e52ab7f19" />

- Modifikasi login.tsx pada folder pages/auth

  <img width="529" height="347" alt="image" src="https://github.com/user-attachments/assets/32760a45-9d0d-4f72-b1fd-162b25f7cd55" />

- Modifikasi index.tsx pada folder views/auth/login

  <img width="782" height="554" alt="image" src="https://github.com/user-attachments/assets/f9ee5c4b-8246-433b-b5d1-bb38839c75b4" />

- Jalankan browser

  <img width="955" height="963" alt="image" src="https://github.com/user-attachments/assets/58ac6db1-9869-43cf-ad04-257585fbb041" />


**★ Manfaat:**
   - Routing tetap bersih  
   - Logic & UI terpisah  
   - Mudah dikembangkan  

---

### 6. Inline Styling (CSS-in-JS)

- Modifikasi index.tsx pada folder views/auth/login  

   `<h1 style={{ color: "red", borderRadius: "10px", padding: "10px" }}>`

  <img width="1317" height="574" alt="image" src="https://github.com/user-attachments/assets/8ecc557d-5ce1-4589-991d-ca2dd06cc176" />


- Jalankan browser

  <img width="936" height="954" alt="image" src="https://github.com/user-attachments/assets/13943ac1-5924-4945-b0ff-335623bf8b5c" />


**★ Catatan Penting:**
   - Menggunakan camelCase → borderRadius: "10px"  
   - Cocok untuk styling kecil & dinamis  
   - Tidak disarankan untuk layout besar  

---

### 7. Kombinasi Global CSS + CSS Module

- Modifikasi global.css

  <img width="495" height="240" alt="image" src="https://github.com/user-attachments/assets/e221c5fa-01d3-4705-9c05-fe9cbfd2bdf8" />

- Modifikasi index.tsx pada folder components/layouts/navbar  

   `<div className="big">navbar</div>`

  <img width="651" height="291" alt="image" src="https://github.com/user-attachments/assets/3846c287-0946-4e8e-af05-a348648b31fb" />


**★ Kesimpulan:**
   - Global → utility umum  
   - Module → styling spesifik komponen  

---

### 8. SCSS (SASS)

a. Install SASS  

   <img width="724" height="202" alt="image" src="https://github.com/user-attachments/assets/092f0e68-c2d4-4567-9486-869fb5a47774" />

- Cek pada package.json jika berhasil maka akan muncul seperti pada gambar

  <img width="503" height="656" alt="image" src="https://github.com/user-attachments/assets/833843eb-c21f-4fcf-b63a-852a218016d6" />


b. Global Variable  

   - Tambahkan colors.scss pada folder styles

     <img width="212" height="108" alt="image" src="https://github.com/user-attachments/assets/ce9a307a-e137-4128-b552-3e1f254cf13d" />

   - Modifikasi colors.scss

       <img width="530" height="211" alt="image" src="https://github.com/user-attachments/assets/6b869f25-f890-4450-ba36-cef98d4c5436" />


c. Gunakan di Module  

- Tambahkan file login.module.scss pada folder views/auth/login/

  <img width="232" height="144" alt="image" src="https://github.com/user-attachments/assets/9e21c74a-3b0a-409f-908e-1ba4a45635b8" />

- Modifikasi index.tsx  
  - Tambahkan import styles from "./login.module.scss"  
  - Disable import styles from "./login.module.css"

   <img width="1316" height="598" alt="image" src="https://github.com/user-attachments/assets/0d6267b1-7a66-4629-8849-e0d212de0d6d" />

- Modifikasi login.module.scss  

   - `background-color: map-get($map: $schema, $key: color-secondary);`

     <img width="723" height="273" alt="image" src="https://github.com/user-attachments/assets/110b7a6d-ad78-420d-9a6d-8ff28c631891" />


- Jalankan browser

  <img width="927" height="956" alt="image" src="https://github.com/user-attachments/assets/83e81399-6859-4162-9007-f9b1827ffb2c" />


**★ Keunggulan SCSS:**
   - Variable → Bisa simpan warna, font, ukuran, dll di satu tempat  
   - Nested rule → Struktur CSS mengikuti struktur HTML  
   - Maintainable untuk project besar  

---

### 9. Tailwind CSS

a. Install  

- npm install -D tailwindcss postcss autoprefixer

  <img width="797" height="199" alt="image" src="https://github.com/user-attachments/assets/daeeda80-7d74-4f83-8d6b-d994cffe7ae3" />


b. Konfigurasi tailwind.config.js  

   <img width="507" height="337" alt="image" src="https://github.com/user-attachments/assets/e700f618-c164-497a-bfca-9d063c2ead38" />

c. Import di Global CSS  

   - @tailwind base;  
   - @tailwind components;  
   - @tailwind utilities;  

   <img width="780" height="451" alt="image" src="https://github.com/user-attachments/assets/d68861f8-0f55-4389-abd4-20e02891691f" />


d. Contoh Penggunaan  

   - Modifikasi index.tsx pada folder auth/login/  

      `<h1 className="text-3xl font-bold text-blue-600">  Halaman Login  </h1>`  

      <img width="1320" height="593" alt="image" src="https://github.com/user-attachments/assets/50476382-fa15-4045-85cd-be4261edf558" />


   - Jalankan browser

     <img width="940" height="965" alt="image" src="https://github.com/user-attachments/assets/43f06c3a-e025-4965-8883-2195cca64a87" />


---

## C. Tugas Praktikum

**Tugas 1 ** 
- Buat halaman Register  
- Gunakan CSS Module

<img width="667" height="371" alt="image" src="https://github.com/user-attachments/assets/fb70bb6b-808c-4f32-b451-b977c3c170cf" />

<img width="667" height="371" alt="image" src="https://github.com/user-attachments/assets/65965578-cf4f-40e7-85d7-6f6f070e2093" />

<img width="667" height="371" alt="image" src="https://github.com/user-attachments/assets/83a8a381-a712-4cb3-8b09-0790e8e1739c" />

<img width="951" height="363" alt="image" src="https://github.com/user-attachments/assets/9981fc24-1b06-4a93-8bd5-4eef5b1a50d3" />


**Tugas 2  **
- Refactor halaman Produk ke folder views  
- Pisahkan Hero Section dan Main Section  

<img width="220" height="173" alt="image" src="https://github.com/user-attachments/assets/a3ad6cce-6d6a-4eaa-9835-cba6e9bdbf81" />


**Tugas 3**
- Terapkan Tailwind CSS  
- Gunakan minimal 5 utility class  

<img width="838" height="765" alt="image" src="https://github.com/user-attachments/assets/c14d1a08-195f-4ed7-91cc-2922a1e1fd41" />

<img width="1073" height="905" alt="image" src="https://github.com/user-attachments/assets/2656426b-e9b5-41fe-a58d-5668eb60c2c5" />

<img width="1264" height="468" alt="image" src="https://github.com/user-attachments/assets/871960a0-02b2-4540-933c-c7b0692dadb6" />

<img width="1919" height="962" alt="image" src="https://github.com/user-attachments/assets/bf903963-1364-447c-97da-501d09cbfc09" />

---

## D. Pertanyaan Refleksi

1. Kapan sebaiknya menggunakan CSS Module dibanding Global CSS?  

CSS Module sebaiknya digunakan ketika kita membangun aplikasi yang memiliki banyak komponen, terutama pada framework modern seperti Next.js atau React yang berbasis komponen. Dalam aplikasi seperti ini, setiap komponen biasanya memiliki struktur dan gaya masing-masing. Jika kita menggunakan Global CSS, semua class yang dibuat akan bersifat global dan bisa saling bertabrakan (conflict). Misalnya, dua komponen berbeda sama-sama memiliki class bernama .card, maka styling bisa saling menimpa tanpa disadari. Hal ini sering menyebabkan bug tampilan yang sulit dilacak.  

CSS Module bekerja dengan cara mengisolasi scope CSS hanya untuk file atau komponen tertentu. Jadi, class yang kita tulis di dalam file module tidak akan mempengaruhi komponen lain. Sistem akan secara otomatis menghasilkan nama class yang unik. Ini membuat kode lebih aman, terstruktur, dan mudah dirawat dalam jangka panjang.  

Global CSS lebih cocok digunakan untuk styling yang memang bersifat umum dan digunakan di seluruh aplikasi, seperti reset CSS, pengaturan font dasar, warna tema utama, atau layout global seperti header dan footer. Namun untuk styling spesifik komponen, CSS Module jauh lebih direkomendasikan karena membantu menjaga modularitas dan mencegah konflik antar style.  

2. Apa kelemahan inline styling?  

Inline styling adalah cara menuliskan CSS langsung pada elemen melalui atribut style. Meskipun terlihat praktis dan cepat, terutama untuk styling sederhana atau dinamis, pendekatan ini memiliki beberapa kelemahan yang cukup signifikan.  

Pertama, inline styling tidak mendukung fitur-fitur lanjutan CSS seperti pseudo-class (:hover, :focus), media queries, atau animasi kompleks. Hal ini membuat kita kesulitan jika ingin membuat tampilan yang responsif atau interaktif hanya dengan inline style.  

Kedua, dari sisi kerapihan dan maintainability, inline styling membuat kode menjadi kurang terstruktur. Style bercampur langsung dengan struktur HTML atau JSX, sehingga mempersulit pembacaan dan pemisahan tanggung jawab antara struktur dan tampilan. Dalam project besar, ini akan menyulitkan proses pengembangan dan kolaborasi tim.  

Selain itu, inline styling juga tidak dapat dimanfaatkan kembali (reusable) dengan mudah. Jika banyak elemen memiliki gaya yang sama, kita harus menuliskannya berulang-ulang. Berbeda dengan CSS biasa atau CSS Module yang memungkinkan penggunaan class untuk banyak elemen sekaligus. Karena itu, inline styling biasanya hanya cocok untuk kondisi tertentu seperti styling dinamis berbasis state, bukan untuk keseluruhan desain aplikasi.  

3. Mengapa SCSS cocok untuk project skala besar?  

SCSS merupakan pengembangan dari CSS yang termasuk dalam CSS preprocessor. SCSS sangat cocok untuk project skala besar karena menyediakan fitur-fitur tambahan yang membantu mengelola kode styling agar lebih terstruktur, efisien, dan mudah dirawat.  

Salah satu keunggulan utama SCSS adalah adanya variabel. Dalam project besar, biasanya terdapat banyak warna, ukuran font, atau spacing yang digunakan berulang kali. Dengan variabel, kita cukup mendefinisikan satu kali, lalu bisa digunakan di seluruh file. Jika ada perubahan desain, kita hanya perlu mengubah nilai variabel tersebut tanpa harus mencari dan mengganti satu per satu di seluruh file.  

SCSS juga mendukung nesting, yaitu penulisan CSS yang mengikuti struktur HTML secara hierarkis. Ini membuat kode lebih rapi dan mudah dipahami, terutama ketika menangani komponen dengan banyak elemen turunan. Selain itu, SCSS memiliki fitur seperti mixin dan function yang memungkinkan kita membuat potongan kode CSS yang dapat digunakan kembali. Hal ini sangat membantu dalam menjaga konsistensi desain dan mengurangi duplikasi kode.  

Dalam project besar dengan banyak halaman dan komponen, manajemen styling menjadi hal yang krusial. SCSS membantu mengorganisasi file menjadi modular, misalnya dipisah berdasarkan layout, komponen, variabel, dan utilities. Dengan struktur yang baik, tim developer dapat bekerja lebih efisien dan meminimalkan konflik dalam pengembangan.  

4. Apa keunggulan Tailwind dibanding CSS tradisional?  

Tailwind adalah framework CSS berbasis utility-first, yang berarti kita membangun desain langsung menggunakan class-class kecil yang sudah tersedia, seperti untuk margin, padding, warna, ukuran teks, dan sebagainya. Pendekatan ini berbeda dengan CSS tradisional yang biasanya mengharuskan kita membuat class sendiri terlebih dahulu di file CSS.  

Salah satu keunggulan utama Tailwind adalah kecepatan dalam pengembangan. Kita tidak perlu berpindah-pindah antara file HTML/JSX dan file CSS untuk membuat atau mengedit class. Semua styling bisa langsung ditulis di dalam atribut class. Hal ini mempercepat proses prototyping dan pengembangan fitur.  

Selain itu, Tailwind membantu menjaga konsistensi desain karena semua nilai seperti spacing, warna, dan ukuran sudah terstandarisasi dalam sistem desain bawaan. Developer cenderung menggunakan nilai yang sudah disediakan daripada membuat ukuran sembarangan, sehingga tampilan aplikasi menjadi lebih konsisten.  

Tailwind juga sangat fleksibel dan mendukung responsive design dengan mudah melalui prefix seperti md:, lg:, dan sebagainya. Kita bisa langsung mengatur tampilan berbeda untuk berbagai ukuran layar tanpa perlu menulis media query secara manual.  

Dibanding CSS tradisional yang sering menghasilkan file CSS panjang dan sulit dikelola dalam project besar, Tailwind menawarkan pendekatan yang lebih terstruktur dan efisien, terutama untuk aplikasi modern berbasis komponen. Namun tentu saja, setiap pendekatan memiliki konteks penggunaannya masing-masing, tergantung kebutuhan dan preferensi tim pengembang.  

---

## E. Kesimpulan

Next.js memberikan fleksibilitas penuh dalam styling:

- Global CSS → utility umum  
- CSS Module → komponen  
- Inline Style → dinamis  
- SCSS → scalable  
- Tailwind CSS → cepat & konsisten  

Pemilihan teknik styling harus disesuaikan dengan skala dan kebutuhan project.

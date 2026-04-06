# PEMROGRAMAN BERBASIS FRAMEWORK  

# JOBSHEET 19  

# IMPLEMENTASI UNIT TESTING PADA NEXT.JS MENGGUNAKAN JEST  


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

## A. Tujuan Pembelajaran  

Setelah mengikuti praktikum ini, mahasiswa mampu:

1. Memahami konsep dasar Unit Testing  
2. Menginstal dan mengkonfigurasi Jest di Next.js  
3. Menggunakan React Testing Library  
4. Membuat file testing (.spec / .test)  
5. Menguji komponen dan halaman (pages)  
6. Menghasilkan laporan coverage  
7. Melakukan mocking pada Next Router  
8. Menganalisis error melalui testing  

---

## B. Dasar Teori  

### 1. Konsep Unit Testing  

o Unit Testing adalah proses pengujian bagian kecil dari aplikasi (unit), seperti:

- Component  
- Pages  
- Function  
- Library  

o Tujuan:

- Mencegah bug  
- Menjamin stabilitas kode  
- Meningkatkan kualitas sebelum production  
- Memenuhi standar perusahaan (biasanya >80% coverage)  

---

## C. Langkah Praktikum  

### Praktikum 1 – Setup Jest di Next.js  

- Install Dependencies:

  npm install jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom --save-dev --force

  <img width="878" height="484" alt="image" src="https://github.com/user-attachments/assets/a06b9216-a27c-465b-8a2e-9d5773265414" />


- Buat File Konfigurasi:

  Doc: https://nextjs.org/docs/pages/guides/testing/jest


    - Buat file: jest.config.mjs

      <img width="250" height="410" alt="image" src="https://github.com/user-attachments/assets/e355e1d0-621d-4ebc-8dd8-e6b056457719" />

    - Isi dengan:

      <img width="495" height="347" alt="image" src="https://github.com/user-attachments/assets/ee2717e9-d23f-46e7-aa4c-dba8e10dcde8" />


- Tambahkan Script di package.json

  <img width="592" height="400" alt="image" src="https://github.com/user-attachments/assets/62840b8d-7167-45eb-98ea-45baf7a72e40" />


---

### Praktikum 2 – Struktur Folder Testing  

- Buat folder:

    src/__test__/

- Struktur contoh:

    src  
    ├── pages  
    ├── components  
    ├── views  
    └── __test__  
        ├── pages  
        └── components

  <img width="202" height="122" alt="image" src="https://github.com/user-attachments/assets/2c53adbe-062d-4107-9f3c-960d67dd87c8" />


---

### Praktikum 3 – Testing Halaman About  

- Buat File Testing:

    src/__test__/pages/about.spec.tsx

  <img width="202" height="174" alt="image" src="https://github.com/user-attachments/assets/10a3e1a5-a0e2-4255-b6f6-058af70ebd92" />


- Contoh Testing Snapshot. Pada about.spec.tsx tambahkan code berikut:

  <img width="578" height="267" alt="image" src="https://github.com/user-attachments/assets/f4bf3995-385b-4f2f-b684-547717c5babe" />


- Jalankan Testing:
  - npm run test
  - Jika berhasil:

    PASS about.spec.tsx

  <img width="664" height="449" alt="image" src="https://github.com/user-attachments/assets/24b48195-d5b4-4a39-b1ee-204364d3247c" />


---

### Praktikum 4 – Coverage Report  

- Jalankan:

  npm run test:coverage

  <img width="774" height="556" alt="image" src="https://github.com/user-attachments/assets/ee7b45dd-0c75-4900-84b9-e2a488c2d191" />
  
 

- Akan muncul folder:
  - coverage/
  - Buka `coverage/lcov-report/index.html` (buka melalui explorer)

    <img width="242" height="463" alt="image" src="https://github.com/user-attachments/assets/ed1c171e-11bc-4287-8e52-8e7571128a4f" />


- Target perusahaan biasanya:

  <img width="1917" height="390" alt="image" src="https://github.com/user-attachments/assets/dc762fd1-2c84-42fe-9671-4c57bd5a775e" />


  Minimum 80% coverage  

---

### Praktikum 5 – Konfigurasi Coverage Lengkap  

- Update jest.config.mjs

  <img width="498" height="650" alt="image" src="https://github.com/user-attachments/assets/96709902-f17d-47cc-a381-07997df48780" />

- Jalankan npm run test:coverage

  <img width="412" height="908" alt="image" src="https://github.com/user-attachments/assets/beabe0d3-f5f8-4bf7-a93c-24f1a694e198" />


- Jika dilihat di index.htmlnya

  <img width="1919" height="773" alt="image" src="https://github.com/user-attachments/assets/d032222b-2560-42ae-b251-9835554828a3" />


---

### Praktikum 6 – Testing dengan getByTestId  

1. Tambahkan pada About Page  

    <h1 data-testid="title">About Page</h1>

    <img width="580" height="462" alt="image" src="https://github.com/user-attachments/assets/a6f8a9fd-80b8-4ba4-a680-3957693c1574" />


2. Update Testing pada about.spec.tsx

   <img width="805" height="284" alt="image" src="https://github.com/user-attachments/assets/84162cc3-dbdd-4cb8-bbff-c7806b5daa79" />


   - Dicoba untuk di run

     <img width="486" height="835" alt="image" src="https://github.com/user-attachments/assets/cc586534-3bae-47b0-984b-17d7c029b51e" />


    - Coba jika dibuat salah:
      - Rubah menjadi toBe("About")

        <img width="770" height="276" alt="image" src="https://github.com/user-attachments/assets/2a15465b-9959-4d2d-88aa-78de4e9594a4" />

    - Jalankan dan hasil:
      - FAIL  
        Expected: "About"  
        Received: "About Page"

        <img width="516" height="794" alt="image" src="https://github.com/user-attachments/assets/ecbb42f3-305d-4fc7-8d30-3a9e2086e03e" />



        <img width="821" height="176" alt="image" src="https://github.com/user-attachments/assets/f4beeaba-3ec2-4443-bb11-c786d8dbb7c3" />



---

### Praktikum 7 – Testing Page dengan Router (Mocking)  

Kita coba untuk melakukan testing pada halaman produk  

1. Buat file product.spec.tsx  

    <img width="314" height="200" alt="image" src="https://github.com/user-attachments/assets/1da8ebd1-f6c1-4612-b6df-861eca068e6f" />


2. Tambahkan kode berikut

    <img width="871" height="285" alt="image" src="https://github.com/user-attachments/assets/cd3b5297-f878-416a-be26-59e6288c5061" />


3. Ketika testing halaman Product, sering muncul error:
   - NextRouter was not mounted

     <img width="895" height="821" alt="image" src="https://github.com/user-attachments/assets/792cd57e-ba52-45c6-8545-cda96b08ed6a" />


4. Solusi: Mock Next Router

   Tambahkan di file product.spec.tsx

   <img width="782" height="702" alt="image" src="https://github.com/user-attachments/assets/ed0da8b5-57ea-4e75-9391-73c6d38ad59b" />



---

### Praktikum 8 – Menangani Undefined Data  

- Jalankan: npm run test:coverage

  <img width="738" height="513" alt="image" src="https://github.com/user-attachments/assets/d8b9365b-8f37-4fd7-bdf8-a03bd35afad9" />

- Jika muncul error:
  - Cannot read properties of undefined
  - Perbaiki di komponen:
    - Pada file index.tsx pada folder pages/produk

      <img width="793" height="317" alt="image" src="https://github.com/user-attachments/assets/c181c845-228c-4bcd-a475-4e8bb87b3ad6" />

    - Jalankan npm run test:coverage maka akan muncul error

      <img width="865" height="673" alt="image" src="https://github.com/user-attachments/assets/6ace6fce-9d1c-4aec-8255-dd3b83296de8" />

    - Maka solusinya perbaiki code pada file

      <img width="785" height="297" alt="image" src="https://github.com/user-attachments/assets/9647b506-a55c-49bd-b276-95207de396f1" />


- Note: pastikan comment pada code berikut pada 2 code testing
   - product

     <img width="878" height="712" alt="image" src="https://github.com/user-attachments/assets/fdaf1c81-e829-4255-a45c-59cecb723077" />

   - about

     <img width="872" height="295" alt="image" src="https://github.com/user-attachments/assets/f341f2c6-6523-4999-bf79-f6ee1421c3f2" />


---

## D. Analisis Coverage  

<img width="1916" height="730" alt="image" src="https://github.com/user-attachments/assets/0b75411e-f695-48ea-9487-b5e1a8470fcd" />

Jika dilihat aplikasi yang dibuat masih 5% jadi perlu banyak perbaikan sebelum proses deploy.  

- Perhatikan bagian:

    - Statement  
    - Branch  
    - Function  
    - Lines  

Branch biasanya paling sulit karena perlu menguji kondisi if/else.  

---

## E. Standar Industri  

Biasanya:

- ≥ 80% → boleh production  
- < 80% → harus diperbaiki  
- Semua critical feature wajib dites  

---

## F. Tugas Praktikum  

1. Buat unit test untuk:
    - Halaman Product
    - 1 Komponen

    <img width="425" height="107" alt="image" src="https://github.com/user-attachments/assets/4e72ab1e-72a7-4856-9739-ee7194d74048" />

    <img width="246" height="218" alt="image" src="https://github.com/user-attachments/assets/33aabe28-00ce-434b-a46a-7073bfc87e68" />



2. Gunakan minimal:

    ```
        1 Snapshot test
        1 toBe()
        1 getByTestId()
    ```

    - Halaman Produk
      
      - produk.spec.tsx
        
        <img width="708" height="816" alt="image" src="https://github.com/user-attachments/assets/cc8f2f9e-4068-4c11-9a94-3e106f87bab4" />
      
      - pages/produk/index.tsx

        <img width="794" height="694" alt="image" src="https://github.com/user-attachments/assets/1744ed13-08b8-4d20-ac88-2451ef9d3d9b" />

    - Komponen Navbar
      
      - navbar.spec.tsx

        <img width="724" height="539" alt="image" src="https://github.com/user-attachments/assets/c66af957-86e8-42e7-a0df-7c879c41cc6e" />
        
      - .../navbar/index.tsx

        <img width="775" height="492" alt="image" src="https://github.com/user-attachments/assets/4bc7d6a6-96b6-4b6d-a62a-c09d7fd78f28" />



3. Buat coverage minimal 50%  

    <img width="1919" height="512" alt="image" src="https://github.com/user-attachments/assets/aab233db-7d75-4854-8e42-59f0a5f85fbb" />


4. Lakukan mocking untuk router  

    <img width="528" height="299" alt="image" src="https://github.com/user-attachments/assets/4557a1a5-671d-4356-b2f2-785fc8db3e0e" />


5. Dokumentasikan hasil coverage

   <img width="548" height="172" alt="image" src="https://github.com/user-attachments/assets/5f609810-5b7b-4298-a558-81609a4b2c0a" />

   <img width="638" height="296" alt="image" src="https://github.com/user-attachments/assets/9ff4e8de-3fb9-471e-9fcd-6905b2e2e224" />



---

## G. Diskusi & Refleksi

### 1. Mengapa unit testing penting sebelum production?

Unit testing penting karena dapat mendeteksi bug sejak dini sebelum aplikasi digunakan oleh pengguna. Dengan melakukan pengujian pada setiap bagian kecil (unit), kualitas kode menjadi lebih terjamin, risiko error saat production berkurang, serta memudahkan proses maintenance dan pengembangan selanjutnya.

---

### 2. Mengapa branch coverage sulit mencapai 100%?

Branch coverage sulit mencapai 100% karena setiap kondisi percabangan (seperti `if`, `else`, atau `switch`) harus diuji dengan berbagai kemungkinan skenario. Beberapa kondisi jarang terjadi atau sulit disimulasikan, sehingga tidak semua cabang dapat dengan mudah diuji.

---

### 3. Apa itu mocking?

Mocking adalah teknik dalam testing untuk meniru atau mensimulasikan fungsi atau dependensi eksternal, seperti API, database, atau router. Tujuannya adalah agar proses testing tetap berjalan tanpa bergantung pada sistem asli yang bisa menyebabkan error atau tidak stabil.

---

### 4. Kapan snapshot test digunakan?

Snapshot test digunakan ketika ingin memastikan tampilan (UI) suatu komponen tidak berubah secara tidak sengaja. Biasanya digunakan pada komponen React untuk membandingkan hasil render saat ini dengan hasil sebelumnya.

---

### 5. Apakah semua file harus dites?

Tidak semua file harus dites. Pengujian sebaiknya difokuskan pada bagian penting atau fitur utama aplikasi, terutama yang memiliki logika kompleks atau berisiko tinggi. Namun, semakin banyak bagian yang diuji dengan baik, maka kualitas aplikasi akan semakin terjamin.


---

## H. Kesimpulan  

Dalam praktikum ini mahasiswa telah:

- Menginstal dan mengkonfigurasi Jest  
- Menggunakan React Testing Library  
- Membuat unit test pada pages  
- Menghasilkan coverage report  
- Melakukan mocking router  
- Memahami pentingnya testing di industri  

# Tugas UTS Pemrograman Web 1 - Toko Buku Online

Repositori ini dibuat untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web 1 di Universitas Pelita Bangsa.

## Identitas Mahasiswa
* **Nama:** Nabila Lutfia Sari
* **NIM:** 312510040
* **Kelas / Program Studi:** I253A / Teknik Informatika

---

## Link Video Presentasi / Demo
* **Link YouTube:** [https://youtu.be/vtge6VNFUI4?si=6a_3zR6W1yJUYOY-]

---

## Deskripsi & Fitur Project
Aplikasi web **Toko Buku Online** ini dirancang dengan konsep minimalis bernuansa estetik pink, menggunakan struktur modular agar bersih dan mudah dikembangkan. Fitur-fitur utama yang tersedia meliputi:
1. **Halaman Login & Validasi:** Dilengkapi logo bersih tanpa teks, validasi form login (pesan *error* jika salah), serta kotak modal interaktif untuk fitur "Lupa Password" dan "Daftar Akun".
2. **Dashboard Dinamis:** Dilengkapi teks *greeting* yang otomatis menyesuaikan waktu lokal komputer.
3. **Informasi Katalog Stok Buku (`stok.html`):** Menampilkan tabel data buku lengkap dengan foto cover buku asli (Manajemen Keuangan, Pengantar Ilmu Komunikasi, Kepemimpinan, Mikrobiologi Dasar, dan Perkembangan Anak Usia Dini).
4. **Manipulasi DOM:** Fitur interaktif untuk menambahkan baris data stok buku baru secara *real-time* langsung dari halaman web tanpa *refresh*.
5. **Halaman Pemesanan / Checkout:** Form pemesanan lengkap dengan pilihan buku, jumlah, dan pilihan metode pembayaran (Transfer, E-Wallet, COD)[cite: 1].
6. **Tracking Pengiriman (Delivery Order):** Fitur pelacakan paket berdasarkan nomor DO (Contoh: `20230012` atau `20230013`) yang menampilkan status, ekspedisi, total biaya, hingga riwayat perjalanan paket.

---

##  Struktur Folder Project
```text
tugas-uts-web1/
├── index.html        
├── dashboard.html    
├── stok.html          
├── checkout.html      
├── tracking.html      
├── css/
│   └── style.css      
├── js/
│   ├── data.js        
│   └── script.js      
└── img/
    ├── logo.png      
    ├── pengantar_komunikasi.jpg
    ├── manajemen_keuangan.jpg
    ├── kepemimpinan.jpg
    ├── mikrobiologi.jpg\
    └── paud_perkembangan.jpeg
└── README.md
```

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

---

# Tangkapan Layar (Screenshot) Setiap Proses

## 1. Struktur Folder di VS Code
<img width="101" height="151" alt="image" src="https://github.com/user-attachments/assets/6211a463-37ff-4ed0-98c7-e69459388680" />


Menunjukkan penerapan modularitas file (css/, js/, img/, dan file HTML terpisah).   

## 2. Tampilan Halaman Login (index.html)
<img width="959" height="438" alt="Screenshot 2026-11-08 064029" src="https://github.com/user-attachments/assets/9ea53da1-3952-4d76-8015-c518a8c297f5" />


Pengujian validasi form login[cite: 1] serta modal interaktif.

## 3. Tampilan Dashboard (dashboard.html)
<img width="959" height="446" alt="Screenshot 2026-11-08 064054" src="https://github.com/user-attachments/assets/a9a76cce-dd9f-47c5-a3a6-b6de9112b330" />


Menampilkan sapaan dinamis berdasarkan waktu[cite: 1] dan menu navigasi.

## 4. Tampilan Katalog Stok Buku & Manipulasi DOM (stok.html)
<img width="959" height="434" alt="Screenshot 2026-11-08 064129" src="https://github.com/user-attachments/assets/35f53900-6011-4210-b3ea-8660e636e989" />


Menampilkan tabel data lengkap bersama cover buku resmi kiriman dosen[cite: 1, 6, 7, 8, 9] serta form penambahan data baru secara dinamis[cite: 1].

## 5. Tampilan Halaman Pemesanan (checkout.html)
<img width="959" height="436" alt="Screenshot 2026-11-08 064159" src="https://github.com/user-attachments/assets/a35c0692-1e59-4403-8af3-e3cff183ebf0" />


Proses pencatatan pesanan buku dan metode pembayaran[cite: 1].

## 6. Tampilan Tracking Pengiriman (tracking.html)
<img width="959" height="428" alt="Screenshot 2026-11-08 064214" src="https://github.com/user-attachments/assets/6045f3a6-fe54-43fb-a59e-4226fc6f0e77" />


Detail riwayat perjalanan pengiriman paket menggunakan nomor DO[cite: 2].

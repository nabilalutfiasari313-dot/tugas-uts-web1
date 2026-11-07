// js/script.js
document.addEventListener("DOMContentLoaded", function () {
  // Login & Modal
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = document.getElementById("email").value;
      const passInput = document.getElementById("password").value;

      let found = dataPengguna.find(
        (u) => u.email === emailInput && u.password === passInput
      );

      if (found) {
        alert("Login Berhasil! Selamat datang, " + found.nama);
        window.location.href = "dashboard.html";
      } else {
        alert("Email atau password yang anda masukkan salah!");
      }
    });

    const modal = document.getElementById("infoModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const closeBtn = document.querySelector(".close-btn");

    document.getElementById("btnLupa").addEventListener("click", function (e) {
      e.preventDefault();
      modalTitle.innerText = "Lupa Password";
      modalText.innerText = "Silakan hubungi Administrator (Siti Marlina) untuk reset password.";
      modal.style.display = "block";
    });

    document.getElementById("btnDaftar").addEventListener("click", function (e) {
      e.preventDefault();
      modalTitle.innerText = "Pendaftaran Akun";
      modalText.innerText = "Fitur pendaftaran akun baru sedang dalam pemeliharaan.";
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Dashboard Greeting
  const greetingText = document.getElementById("greetingText");
  if (greetingText) {
    const jam = new Date().getHours();
    let waktu = "Pagi";
    if (jam >= 11 && jam < 15) {
      waktu = "Siang";
    } else if (jam >= 15 && jam < 18) {
      waktu = "Sore";
    } else if (jam >= 18) {
      waktu = "Malam";
    }
    greetingText.innerText = `Selamat ${waktu}, Nabila! Dashboard Toko Buku Online`;
  }

  // Stok & DOM Manipulation dengan Kolom Cover Buku
  const tabelStokBody = document.querySelector("#tabelStok tbody");
  if (tabelStokBody && typeof dataKatalogBuku !== "undefined") {
    function renderTabelStok() {
      tabelStokBody.innerHTML = "";
      dataKatalogBuku.forEach((buku) => {
        let gambarCover = buku.cover 
          ? `<img src="${buku.cover}" alt="Cover" style="width: 45px; height: 60px; object-fit: cover; border-radius: 4px;">` 
          : `-`;

        let row = `<tr>
          <td style="text-align: center;">${gambarCover}</td>
          <td>${buku.kodeBarang}</td>
          <td>${buku.namaBarang}</td>
          <td>${buku.jenisBarang}</td>
          <td>${buku.edisi}</td>
          <td>${buku.stok}</td>
          <td>${buku.harga}</td>
        </tr>`;
        tabelStokBody.innerHTML += row;
      });
    }
    renderTabelStok();

    document.getElementById("tambahBarisBtn").addEventListener("click", function () {
      const kode = document.getElementById("kodeBarang").value;
      const nama = document.getElementById("namaBarang").value;
      const jenis = document.getElementById("jenisBarang").value;
      const harga = document.getElementById("harga").value;
      const stok = document.getElementById("stok").value;

      if (!kode || !nama) {
        alert("Kode dan Nama Barang wajib diisi!");
        return;
      }

      dataKatalogBuku.push({
        kodeBarang: kode,
        namaBarang: nama,
        jenisBarang: jenis || "Buku Ajar",
        edisi: "1",
        stok: parseInt(stok) || 100,
        harga: harga || "Rp 100.000",
        cover: ""
      });

      renderTabelStok();
      alert("Baris stok baru berhasil ditambahkan!");
      
      document.getElementById("kodeBarang").value = "";
      document.getElementById("namaBarang").value = "";
      document.getElementById("jenisBarang").value = "";
      document.getElementById("harga").value = "";
      document.getElementById("stok").value = "";
    });
  }

  // Checkout / Pemesanan
  const pilihBukuSelect = document.getElementById("pilihBuku");
  if (pilihBukuSelect && typeof dataKatalogBuku !== "undefined") {
    dataKatalogBuku.forEach((buku) => {
      let opt = document.createElement("option");
      opt.value = buku.namaBarang;
      opt.textContent = `${buku.namaBarang} (${buku.harga})`;
      pilihBukuSelect.appendChild(opt);
    });

    document.getElementById("checkoutForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = document.getElementById("namaPemesan").value;
      const buku = pilihBukuSelect.value;
      const jumlah = document.getElementById("jumlahPesan").value;
      const metode = document.getElementById("metodePembayaran").value;

      document.getElementById("outputCheckout").innerHTML = `
        <div style="background: #e2f0cb; padding: 15px; border-radius: 6px; border: 1px solid #b5d56c;">
          <h3>Pesanan Berhasil Dicatat!</h3>
          <p><b>Pemesan:</b> ${nama}</p>
          <p><b>Buku:</b> ${buku}</p>
          <p><b>Jumlah:</b> ${jumlah}</p>
          <p><b>Metode Bayar:</b> ${metode}</p>
        </div>
      `;
    });
  }

  // Tracking
  const cariDoBtn = document.getElementById("cariDoBtn");
  if (cariDoBtn) {
    cariDoBtn.addEventListener("click", function () {
      const noDo = document.getElementById("inputNoDO").value.trim();
      const hasilDiv = document.getElementById("hasilTracking");

      if (dataTracking[noDo]) {
        let tr = dataTracking[noDo];
        let timelineHTML = tr.perjalanan
          .map((p) => `<li><b>${p.waktu}</b> - ${p.keterangan}</li>`)
          .join("");

        hasilDiv.innerHTML = `
          <div style="background: #fff; padding: 20px; border-radius: 6px; border: 1px solid #ff69b4;">
            <h3>Detail Pengiriman (DO: ${tr.nomorDO})</h3>
            <p><b>Nama Penerima:</b> ${tr.nama}</p>
            <p><b>Status:</b> <span style="color: green; font-weight: bold;">${tr.status}</span></p>
            <p><b>Ekspedisi:</b> ${tr.ekspedisi} (${tr.paket})</p>
            <p><b>Tanggal Kirim:</b> ${tr.tanggalKirim}</p>
            <p><b>Total Biaya:</b> ${tr.total}</p>
            <h4 style="margin-top: 15px;">Riwayat Perjalanan:</h4>
            <ul style="margin-left: 20px; margin-top: 5px;">${timelineHTML}</ul>
          </div>
        `;
      } else {
        hasilDiv.innerHTML = `<p style="color: red;">Nomor Delivery Order (DO) tidak ditemukan. Coba gunakan: 20230012 atau 20230013.</p>`;
      }
    });
  }
});
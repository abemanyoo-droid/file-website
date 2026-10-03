# Panduan Foto — Situs Manyoo

Taruh foto persis dengan nama file di bawah ini di masing-masing folder.

PENTING - nama file harus PERSIS seperti yang tertulis, contoh: hero-1.jpg
Jangan ikut menyalin tanda backtick (`), tanda strip panjang, atau teks
keterangan di belakangnya. Nama seperti
"`hero-1.jpg` - Kopi Susu Gula Aren.jpg" TIDAK akan terbaca oleh web.
Begitu file diletakkan, foto akan otomatis tampil di web menggantikan
ilustrasi SVG sementara (tidak perlu ubah kode apa pun lagi).

Format yang disarankan: `.jpg` (atau `.webp`, tinggal ganti ekstensi di
`src=""` pada index.html), dikompres secukupnya untuk web (idealnya di
bawah 400 KB per foto agar situs tetap cepat dibuka).

## 1. Hero Slider (assets/images/hero/) — PALING PENTING
Foto besar full-bleed untuk 3 slide di bagian paling atas web. Landscape,
minimal 1600×1000 px, orientasi lanskap.
- `hero-1.jpg` — Kopi Susu Gula Aren (slide "Racikan Musim Ini")
- `hero-2.jpg` — suasana ngumpul bareng teman/keluarga (slide "Cukup Untuk Semua Orang")
- `hero-3.jpg` — kopi dibawa jalan/take-away (slide "Nyaman Dibawa Ke Mana Saja")

## 2. Cerita Kami (assets/images/cerita/)
Foto dapur kecil/awal mula Manyoo. Potret atau lanskap, minimal 1000×840 px.
- `cerita-1.jpg`

## 3. Kemitraan (assets/images/kemitraan/)
Foto interior/eksterior gerai untuk ajakan franchise. Minimal 1000×840 px.
- `kemitraan-1.jpg`

## 4. Social Strip / Ikuti Keseharian Manyoo (assets/images/sosial/)
6 foto gaya feed Instagram, rasio 1:1 (persegi), minimal 600×600 px.
- `sosial-1.jpg` sampai `sosial-6.jpg`

## 5. Menu (assets/images/menu/) — SUDAH DISAMBUNGKAN
Foto produk untuk kartu menu. Rasio 4:3 (lanskap), ukuran ideal
1200x900 px (minimal 800x600 px), format .jpg, di bawah 300 KB per foto.
Ambil dari depan-atas (45 derajat) dengan latar polos/gelap agar seragam.
Kalau fotonya persegi/potret jangan dipaksakan - cukup crop dulu ke 4:3,
karena foto akan dipotong otomatis (object-fit: cover) di bagian atas kartu.

Kategori Kopi:
- `kopi-1.jpg` - Kopi Susu Gula Aren
- `kopi-2.jpg` - Cold Brew Kelapa
- `kopi-3.jpg` - Americano Panggang
- `kopi-4.jpg` - Kopi Tubruk Manyoo

Kategori Non-Kopi:
- `nonkopi-1.jpg` - Matcha Yuzu Latte
- `nonkopi-2.jpg` - Choco Hazelnut Frappe
- `nonkopi-3.jpg` - Lemon Tea Manyoo
- `nonkopi-4.jpg` - Strawberry Yogurt Smoothie

Kategori Camilan:
- `camilan-1.jpg` - Croissant Almond
- `camilan-2.jpg` - Banana Bread Slice
- `camilan-3.jpg` - Cookies Dark Choco

Kalau foto ada, foto tampil dan ikon SVG otomatis disembunyikan.
Kalau belum ada, ikon SVG tetap tampil seperti semula. Boleh diisi
sebagian saja - kartu yang belum ada fotonya tetap rapi.

## 5b. Lokasi (assets/images/lokasi/) - belum disambungkan
Folder untuk foto gerai per kota. Beri tahu kalau sudah ada fotonya,
nanti saya sambungkan ke section Lokasi.

## 6. Gambar untuk Preview Link (assets/images/og/)
Untuk preview link di WhatsApp/Instagram/Facebook saat link web dibagikan.
Rasio 1200×630 px.
- `og-image.jpg`
Setelah foto ini ada, tambahkan juga baris berikut di dalam `<head>`
index.html (ganti URL dengan alamat foto yang sudah di-hosting, bukan
path lokal):
```html
<meta property="og:image" content="https://domain-anda.com/assets/images/og/og-image.jpg">
<meta name="twitter:image" content="https://domain-anda.com/assets/images/og/og-image.jpg">
```

---
### Cara kerja teknisnya
Setiap ilustrasi SVG di hero slider, Cerita Kami, dan Kemitraan sekarang
punya lapisan `<img class="art-photo" ...>` di atasnya dengan atribut
`onerror="this.style.display='none'"`. Artinya:
- Kalau file foto belum ada → foto disembunyikan, ilustrasi SVG tetap tampil.
- Kalau file foto sudah ada dengan nama yang persis sama → foto otomatis
  menutupi ilustrasi SVG.

Jadi Anda bisa isi foto satu per satu kapan saja tanpa perlu edit kode.

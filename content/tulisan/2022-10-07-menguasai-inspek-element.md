+++
title = "Menguasai Inspek Element Browser"
slug = "pro-inspek-element"
description = "Kalau kamu menguasai ini, bakal ga buka vscode buat ngoding HTML"
page_template = "page.html"
draft = false
author = "lort"
[extra]
thumbnail = "/pic/pro-inspect-elemen/pro-inspek-element.png"
category = "koding"
+++

Klik kanan lalu di klik Inspect(_Q_) atau pencet F12 di browser kamu akan muncul subjek yang tulisan ini, yak si inspek elemen. FYI, Lort disini pakai Firefox sebagai alat peraga.

Inspek elemen hadir sebagai alat debbuging dokumen HTML yang ditampilin browser saat kita buka website atau file HTML, kita bisa ngubah ngedit struktur HTML, mengetes style CSS realtime, liat network apa aja yang didownlod sama webnya dan tentu menjalanin javascript di browser  - untuk menguasai dunia.

Tapi tau ga kamu, kalau browser itu save kodingan HTML kita di inspek element ? dan beragam _mystery feature pack_ browser yang siap kita unboxing pada tulisan ini.

## Inspek element

Inspek elemen ga hanya untuk inspektor HTML (topik utama kita) saja, ada banyak fitur lainya yang akan kita bahasa per bagian tulisan ini. Berikut ini:

<center>
    <img src="/pic/pro-inspect-elemen/inspek-elemen-analogy.png">
</center>

1. Tab menu inspek elemen, untuk pindah-pindah fitur yang disediakan.

2. Hasil render dokumen HTML, lihat bagian 3 untuk dokumen HTML nya.

3. Dokumen HTML yang ngehasilin tampilan yang kita lihat di bagian 2.

4. Rincian CSS yang dibuat untuk mempecantik tampilan HTML, sekedar tips coba liat warna di box model sama judul blog ini di panel bagian 2 tebak itu apa.

Bagian  3 dan 4 akan kita bahasa lebih lanjut di bagian Inspektor

### Inspektor

Inspektor ini gunanya untuk mecah dan ngelacak apa komponen HTML dan CSS mana yang mengebuat tampilan ini.

<center>
    <img src="/pic/pro-inspect-elemen/inspektor-html.png">
</center>

1. HTML Pane

HTML pane berisi dokumen HTML yang menjadi struktur dari website yang ditampilkan, disini kita bisa mengedit kode HTML dan langsung melihat hasil perubahaanya.

HTML sifatnya sebagai building block jadi kita berurusan dengan komponen tampilan, berbeda dengan CSS yang lebih ke styling (pengayaan) tampilan komponen.

2. CSS Pane

CSS pane disini berisi seluruh informasi styling yang ada di tag html yang kita pilih, jadi disini kita bisa debuging style sesuai dengan keinginan kita dan hasilnya langsung keliatan.

3. Layout Pane

Layout ini masih berurusan ke styling juga tetapi lebih cenderung ke posisi dan tata letak, bagian ini ngebantu kita untuk ngedebug ukuran komponen, flexbox , grid dan sebagainya. Pane berguna banget bagi kamu yang berkutat ke responsivitas tampilan dan layar. 

### Console

Console, tempat kita menjalankan javascript untuk keperluan manipulasi dokumen HTML -- mirip metaprogramming, memanipulasi kodenya sendiri dan menanggapnya sebagai data, dan memberi logika ke dokumen html yang kita buat. Contoh simple seperti ini:

![console di inspek element](/pic/pro-inspect-elemen/console-dan-dom-selector.png)

1. Standard input untuk console, disitu  kita masukin kode javascript buat dijalanin.

2. Shadowlight nilai kembalian dari kode yang kita tulis.

3. Highlight dari inspect elment saat kita melakukan DOM selector dengan javascript.

### Network

Tab ini gunanya nampilin semua asset/file yang didownload untuk nampilin website kamu seutuhnya, seperti css file, js file, gambar dan macem-macem. 

Selain itu, manfaat kita bisa tau semua file ini adalah kita bisa benchmark dan optimisasi loading time website kita seperti ada file yang gambar yang berat perlu dikompres atau mindahin file tertentu ke CDN biar diaksesnya lebih cepat.

![tampilan network](/pic/pro-inspect-elemen/network-bar.png)

List diatas sudah cukup jelas nunjukin file apa yang diambil, dari alamat mana filenya, tipe dokumen, ukuran dan durasi file untuk diunduh serta request fetch API masuk kesini juga, kalau kamu klik kanan pada salah satu isi list akan ada opsi lanjut untuk itu seperti didownload atau diblok.

Bagian yang Lort tandai itu fitur yang bantu kamu biar ga overwhelm sama menu inspek element yang satu ini.

1. Filter jenis dokumen

Fitur ini mudahin kita biar buat milihin file-file tertentu, seperti file multimedia, request API dan semacamnya.

2. Cache dan Throttling

Secara default browser kita nge-cache asset tertentu, sehingga opsi ini untuk disable itu. 

Throttling ini untuk simulasi situasi internet, misal gimana rasanya website kamu di load dalam jaringan internet 3G, HSDPA+ atau 4G, tujuanya sama untuk benchmark kecepatan loading website disituasi internet jelek misal di wilayah sulit internet.

3. Search

Karena file disini banyak, fitur ini tugasnya untuk ngebantu kamu mencari file yang kamu inginkan.

4. Stat

Ini rangkuman benchmark loading websitenya.

### Style Editor

Bagian ini tempat kita _purely_ ngoding CSS sekaligus ngedebugnya, karena file css disini bila di save kaya di VSCode.

![style editor](/pic/pro-inspect-elemen/style-editor.png)

1. File eksplorer

2. Editor tempat kita ngoding CSS, perubahanya bisa langsung ke apply kalo kita edit-edit disini.

3. Tempat kita debug media query -- ukuran layar thingy, buat liat kalau layar ukuran segini CSS apa yang aktif.

4. Buat simulasi tampilan web kita ke mode mobile/tablet.

### Memory 

Bagian ini yang cukup asing buat Lort, tetapi punya satu tujuan yang penting banget yaitu buat kita tahu berapa banyak memory ram yang dihabisin untuk ngeload halaman web di tab sekarang.

![memory tab](/pic/pro-inspect-elemen/style-editor.png)

1. Snapshoot saat halaman tab yang kita check memorynya.
2. Visualisasi alokasi memory yang dipakai.

### Storage 

Tab ini tugasnya untuk melihat data kustom yang diperlukan website untuk menyimpan data unik untuk browser pengguna, seperti cookies dan session. 

Kalau kamu mau bikin web yang ga perlu backend, kamu bisa manfaatin localstorage untuk nyimpen data tapi inget datanya hanya ada dibrowser kamu. 

Sifat penyimpan di storage ini yaitu key-value jadi kamu ga perlu repot query sql disini.

![storage tab](/pic/pro-inspect-elemen/storage-value.png)

1. Pilihan Storage

Ada banyak tempat kita bisa inspek storage, kalau kamu ingin nyimpen data yang ada hanya saat tab di buka simpen datanya di session storage atau non-volatile meskipun buka tutup browser datanya masih ada pilih storage local storage.

Fitur ini bisa diakses lewat javascript dan protokol HTTP untuk jenis tertentu, HTML/CSS ga punya power disini.

2. Tampilan penyimpanan data

### Accessibility

Accesibility ini gunanya untuk mengecek apakah komponen di website kita bisa dibaca oleh alat pandu untuk rekan-rekan kita yang memiliki keterbatasan panca indra.

![tab aksesibilitas](/pic/pro-inspect-elemen/a11ty-tab.png)

1. Simulasi tampilan web kita untuk mode disabilitas indra tertentu.
2. alt text di komponen node HTML yang sedang ditampilkan
3. nilai dari alt text yang ada dikomponen yang ditampilkan.

Pro-tip: jangan lupa kasih atribut `alt` di tag gambar atau di anchor link ya.

Ada dua tab yang ga Lort bahas yaitu Performance karena spesifik buat firefox aja dan Debugger karena ga ngerti dan ga pernah pake. Nanti kalau udah paham ini artikel di update deh.

Oh iya, browser yang dipakai pada tutorial ini yaitu Mozilla Firefox Developer Edition.

## Ngoding di Browser

![tab baru](/pic/pro-inspect-elemen/new-tab.png)

Ngoding di browser memang terkesan aneh, tapi taukah kamu kalau di browser kamu bisa save HTML mirip kayak di VSCode ? caranya sama cukup `CTRL + S`.

Berikut ini mungkin video demo gimana make inspektor sama ngesave HTML di browser lalu ngeloadnya lagi (lupa cara bikin CSS ke load sama ke save bareng, ntaran ada video revisi, liat yang ini aja dulu):

<iframe src="https://youtu.be/TYbgaYDpc9M"  width="420" height="315" ></iframe>

### Reference

- [Open the Inspector. Firefox Source Docs. Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html)

- [Memory. Firefox Source Docs. Firefox](https://firefox-source-docs.mozilla.org/devtools-user/memory/)
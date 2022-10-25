+++
title = "Membuat Software yang Berguna"
slug = "membuat-software-yang-berguna"
description = "Sekian lama kamu membuat program, tetapi pernahkah kamu membuat satu yang berguna untuk dirimu?"
page_template = "page.html"
draft = false
author = "lort"
[extra]
thumbnail = ""
category = "renungan"
+++

Siang-malam kita membanting otak mempelajari teknologi yang menjanjikan prospek karier, uang yang banyak dan masa depan yang cerah meyilaukan dengan jiwa yang redup karena kelelahan kerja dari hal-hal kantor. 

Tetapi pernah terbesitkah pemikiran untuk membuat sesuatu yang berguna untuk diri kamu dari apa yang telah kamu pelajari selama ini?

Membuat sesuatu yang berguna apalagi yang dipakai banyak orang bukan hal yang mudah karena banyak perhitungan ruwet, tetapi bagaimana membuat untuk diri kita sendiri, apakah kita cukup bercermin dengan masalah yang kamu hadapi dalam hidup? jawabanya tidak.

## Keterampilan merumuskan masalah

> Disklaimer: Disini Lort tidak menyatakan bahwa semua masalah dapat diselekain dengan teknologi, seperti masalah KDRT atau semacamnya itu masih menjadi masalah dalam proses kita menjadi manusia yang tidak bisa digantikan oleh teknologi.

Saat kita menghadapi masalah, hal yang paling penting dilakukan adalah ambil ruang sejenak dan tentukan gambaran dari masalah yang kita hadapi, seperti kamu terkendala bangun pagi, susah untuk mencari suasana sosial baru ataupun kesulitan merencanakan piknik.

Mulai dari contoh yang saya pribadi, saya kerap menumpuk cucian dan ketinggalan jadwal, hal yang saya lakukan mengambil ruang selangkah dari hingar bingar kehidupan memikirkan sebab-akibat dari apa yang terjadi dan mencari hal yang bisa membantu.

Penyebab dari penumpukan cucian dan ketinggalan jadwal karena kesulitan untuk membangun rutinitas. Lalu bagaimana saya membangun rutinitas ? jawabanya yaitu pembiasaan dan caranya ada banyak entah melalui penjadwalan atau mengikuti  _Cognitive-Behaivoral Theraphy_ oleh psikiater. Jelas saya akan mengambil opsi pertama karena faktor ekonomi dan keyakinan berhasil.

Sampai bagian ini saya dapat dibilang berhasil merumuskan masalah, tetapi pertanyaan berikutnya apakah solusinya saya pilih berhasil ?, Jika kemungkinan berhasilnya kecil bagaimana itu bisa diperbesar ?

Kembali opsi solusi pertama yakni penjadwalaan. Solusi ini sederhana kita cukup menulis semacam to-do list kemudian menjalanin aktivitas berlandaskan itu, apakah mudah melakukanya ? 

Iya , tetapi tidak untuk menjaganya agar bisa teratur dari hari ke hari. Solusi ini sangat tipis kemungkinan berhasil karena sangat bergantung pada interaksi kita, To-do list tidak bisa menyapa kita kapan waktunya sudah dekat.

Rumusan masalah baru : metode penjadwalan perlu proses pembiasaan yang kerap kali kalah dengan aktivitas harian lainya. Pertanyaan selanjutnya, bagaimana kita mendapat prioritas lebih ?

Pengalihan perhatian seperti notifikasi ataupun alarm telepon dapat melepaskan kita dari aktivitas sekarang untuk mengecek. Apakah ada program to-do list di Internet tertentu ada? jawabanya Ada tetapi tujuan kita disini adalah membuat satu untuk diri kita.

Sampai disini, merumuskan masalah tidak hanya cukup bercermin dengan masalah kehidupan sehari-hari. Kita perlu mengkritisi masalah tersebut sampai seberapa mungkin desain solusi tersebut membantu.

## Digitalisasi dunia

Digitalisasi adalah pemindahan proses yang tadinya ada di dunia nyata ke dunia digital, contohnya seperti pesan makanan cukup dengan aplikasi, beli tiket secara daring dan sebagainya semuanya sudah dilakukan didalam dunia digital.

Inti dari digitalisasi bagaimana sebuah proses/aktivitas dalam kehidupan dibuat respersentasinya dalam program sehingga memberi nilai lebih dalam usahanya. Nilai lebih ini seperti lebih ringkas pengerjaannya, bisa ada kostumisasi lebih yang tidak bisa di dunia nyata dsb.

Disini keterampilan menerapkan algoritme dan struktur data kita di uji, untuk mengolah data menjadi informasi selain membuat tampilan fungsional nan estetik.

Kembali ke masalah todo-list, Bagaimana kita membuat program to-do list ?

Jika kita memikirkan teknik pemrograman, kumpulan task to-do list dapat dilihat sebagai kumpulan objek dalam sebuah senarai (_Array_), objek didalamnya memiliki deskripsi jadwal, tanggal kapan pengerjaan dan tanda sudah dikerjakan atau belum.

```nim
type 
    Task = object
        waktu* : DateTime
        deskripsi* : string
        done* : string

    TaskList = seq[Task]
```

Struktur diatas cukup untuk meng-_contain_ kebutuhan entitas data dari todo-list, kemudian kita membuat algoritme untuk berkerja dengan data tersebut.

```nim
# Disclaimer: ini pseudo-code format Nim, not working code.
var jadwal : TaskList = @[]

# untuk nambah jadwal
proc jadwalBaru(des: string) =
    jadwal.add(
        Task (
            waktu: now()
            , deskripsi: des
            , done: false
        )
    )

# untuk cek jadwal
proc cekJadwal() =
    if jadwal.len == 0 :
        echo "Jadwal Kosong"
        return
    
    for task in jadwal:
        echo "Task:"
        echo task.waktu
        echo task.deskripsi
        echo task.done


# untuk alarm jadwal, awas ini infinte loop.
proc eventLoop() =
    # waktu remainder
    let alarmDelay = 15 
    while true:
        var waktuSekarang = now()
        for task in jadwal:

            #cek jadwal yang 15 menit kedepan bakal dilakuin
            if task.waktu + alarmDelay > waktuSekarang :
                echo "Siap, 15 menit waktunya kamu untuk"
                echo task.deskripsi

        sleep(1) #buat bikin jeda satu menit
```

Kode diatas kita menambah algoritme untuk menambah, membaca dan membuat alarm. Kode diatas kurang lebih cukup untuk mengambarkan todo-list sederhana, kurang fungsi untuk menandainya jika task sudah selesai, menyaring task yang belum dan fungsi bunyi untuk alarm.

> Pro-tip : ketika kamu membuat program, pikirkan dahulu data yang akan disimpan seperti apa jika ada karena ini akan berpengaruh pada algoritme.

Jika kita memetakan task tersebut kedalam sturktur data Pohon dengan cabang berdasarkan format waktu (cabang level 1 berdasarkan jam atau level 2 berdasarkan hari), kita bisa mengoptimalkan waktu pengecekan task berdasarkan cabang pohon. Tapi sampai sini ini hanya sebagai pengantar saja ya.

## Seorang engineer dan artis

Anggap saja kamu sudah mebuat sebuah aplikasi tetapi kamu ragu ini akan berkerja ? ini hal yang wajar, untuk versi awal pengembangan memang aplikasi yang kita buat jauh dari kata layak dipakai seperti tampilan jelek, fitur kurang ataupun kebanjiran ide sana-sini buat fitur masuk ke aplikasi yang membuat kita merasa kurang.

Hal yang kamu bisa lakukan ditahap ini, tetap percaya diri, improving dan bijak. Kenapa bijak ? karena ada saatnya kamu kebanjiran ide maka kamu harus bijak memilih dengan fitur yang ingin ditambahkan lalu mencatat sisanya untuk tabungan ide di lain hari, dan juga saat kamu tidak ada ide sama sekali waktunya kamu riset kenapa orang lain membuat fitur ini.

Sebelum membuat aplikasi kita juga perlu melakukan riset fitur seperti alasan dan kenapa suatu fitur dibuat dan sebagainya. Mendapat referensi dari luar itu tidaklah masalah selama memenuhi kebutuhan dari apilkasi yang kita buat, karena aplikasi adalah arransemen atau lukisan yang dibuat dari kumpulan fitur dan rupa program yang selalu bertambah dan tidak pernah berakhir pengembanganya.

"_Steal like an artist, but don't plagiarise_", disini ini kamu perlu berpikir seperti seorang _software engineer_ sekaligus _software artisan_. _Software engineering_ berpikir kapan ini selesai, tau apa yang harus dikerjakan terlebih dahulu dan tau kebutuhan user, _software artisan_ bagaimana kamu merangkai fitur-fitur dialam software kamu bak lukisan atau komposisi musik untuk memenuhi kebutuhan user. Jika kamu bingung dengan istilah fitur, lihat saja fungsi yang dibuat pada contoh pseudo-kode sebelumnya.

Kembali lagi ke contoh To-Do list. Sekarang banyak fitur cloud back-up, fitur yang membuat catatanmu ada cadangan jadi kamu bisa akses kembali catatan kamu kalau kamu ganti HP atau pindah device jadi ga usah nulis ulang lagi, bagaimana kalau itu kita buat ke aplikasi To-Do list?

Pertama kita breakdown dulu apa yang pasti ada ketika kita mau pake fitur itu ? salah satu caranya liat apa blokernya ? seperti apakah kita harus login, atau perlu verifikasi email. Kemudian kita brainstroming kenapa fitur itu perlu bloker demikian - kenapa bergantung pada fitur tersebut ?

Jawabanya untuk membedakan data todo-list kamu dan pengguna lain yang akan disimpan di cloud, maka perlu login untuk memberi keunikan data antar todo list dan verifikasi email untuk menghindari spam.

Bacaan lebih lanjut mengenai ini, [Multi-tenancy Architecture](https://www.techtarget.com/whatis/definition/multi-tenancy).

Merasa agak jauh dari programming ? iya, karena ini tentang rekayasa perangkat lunak.

## Kapitalisme

Tentu sesuai keinginan kamu, dapet duit dari koding. Lort ingin ngenalin sebuah gerakan namanya indie maker, gerakan ini cocok bagi kamu yang belajar mulai ngehasil duit lewat program yang kamu buat : [Indie Maker](https://www.indiemakers.id/) dan [buku Indie Maker Starter Guide Bahasa Indonesia](https://ia601507.us.archive.org/4/items/indie-maker-starter-guide/Indie%20Maker%20Starter%20Guide.pdf). Cara yang disampein Indie Maker cocok untuk kamu yang bingung cara monetisasi aplikasi kamu, misal gimana dapat revenue dan strategi lainya.

Tapi lort tetep penulis sedikit tambahan biar kamu paham, monetisasi banyak caranya entah kamu mode _subscription_, _virtual economy_ (sistem kredit top-up), iklan dan semacamnya.

Pastin kamu aplikasi kamu menyediakan layanan unggulan - biar jadi _Software-as-a-Service_,atau fitur yang perlu resource lebih untuk ada, karena bagian ini yang jadi target monetisasi sebagai _additional feature_ dari fitur utama, contohnya ketika mau nambah seribu task harus ada bloker atau mau remove iklan harus subscription.

Lort pernah nemuin web yang biasa aja tapi dark mode masuk opsi _subscription_ tapi tetep works well karena dia memonetisasi _additional feature_ tetapi enggak memengekang berlebih usernya dengan paywall.


> Pro-tips: Jangan memotivasikan membuat aplikasi untuk uang, tapi memotivasikan untuk menghasilkan nilai, karena dari nilai yang dihasilkan menjadi pertimbangan apakah layak secarik uang untuk aplikasi kamu.

## Penutup

Lort disini mengajak kalian untuk membuat program/software/apilkasi yang berguna untuk kamu, ketika kamu merasa masalah ini bukan hanya kamu aja yang mengalami dan kamu melihat ada potensi segment pasar tertentu.

Kamu bisa aja menjadikan aplikasi kamu sebagai alat pemasukan kecil-kecilan ataupun kalau mau serius kamu bisa part-time ataupun fulltime untuk ngembangin aplikasi - dengan catatan memang sudah jalan dan mau naik kelas, dan kamu harus mulai belajar tentang bisnis dan marketing kalau sudah sampai tahap ini.

> Pro-tip: Membuat aplikasi tidak selamanya pakai koding, bisa saja menggunakan teknologi _no-code_.

Lort berterima kasih ke kak Indra Zulfi ([@indrazulfi](https://twitter.com/indrazulfi)) sudah membuat indiemaker.id, semoga harapanya tercapai.
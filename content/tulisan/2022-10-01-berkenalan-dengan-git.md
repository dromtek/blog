+++
title = "Kenalan dengan Git"
slug = "git-intro"
description = "Kamu mungkin pernah dengan GitHub atau GitLab, tapi kamu tau git?"
page_template = "page.html"
draft = false
author = "lort"
[extra]
thumbnail = "/pic/git-intro/git-header.png"
category = "koding"
+++

Ave Dromtek.

Sobat-sobat sekalian pernah dengan kata Git ga sih ? atau GitHub ? kalau belum tau ayo kenalan dulu.

Git secara umum alat untuk manajemen kodingan kita, nama kerennya _version control system_ (VCS). Di situ kita bisa nandain kita habis ngoding apa, mau kolab jadi mudah dan punya magic mesin waktu yang bisa ngerekam jejak kodingan kamu, ketika kamu salah hapus file bisa di cari backupnya di Git.

Lalu GitHub itu apa kak? mereka itu ibarat sosmed tapi isinya kodingan yang sudah dibungkus sistem Git -- repository kode. Di sana kamu bisa lihat kodingan orang lain, memperbaiki kodingan orang lain ataupun minta perbaikan dan tentunya bisa jadi branding image kamu sebagai programmer baik untuk jadi porto untuk ditaro di CV atau kolaborasi dengan komunitas _open source_.

Jadi apakah punya akun GitHub wajib kak? jawabanya enggak harus punya. Tapi kalau kamu punya, kamu bisa lihat trend-trend dari bahasa yang kamu pake, repo sejenis yang kamu kasih bintang, ngelihat apa sih yang temen kamu lagi sukai (caranya buka profile github orang dan lihat **stars**) dan eksplore di GitHub.

<center>
<img src="/pic/git-intro/github-stars.png" />
<p>1. Pencet Tab Stars , 2. List repo yang di sukai  <lp>
</center>

<center>
<img src="/pic/git-intro/github-explore.png" />
<p>1. Pencet Tab Explore , 2. List rekomendasi dari repo yang kamu suka, 3. Repo yang lagi trending <lp>
</center>

Sebelum kita jauh mendalam GitHub mari kita kenalan dengan Git dulu supaya afdol memakai GitHub nya.

## Apa itu Git ?

Git merupakan salah satu dari _version control system_ (temannya Subversion, Dracs dsb). _Version Control_ adalah sistem yang mencatat perubahan (_changes_) file dan folder dari waktu ke waktu sehingga kita bisa kembali ke _snapshot_ perubahan pada titik waktu tertentu suatu saat nanti. 

<center>
    <img src="/pic/git-intro/git-commit-flow.png" alt="git commit over time">
    <p>Illustrasi kerja VCS melalui git</p>
</center>

Biar lebih mudah di ingat, anggap saja ini mesin waktu untuk file dan folder supaya kamu bisa kembali kapan saja untuk melihat file/folder lawas.  

Branch adalah kumpulan baris waktu komit-komit yang terekam oleh git, Main branch adalah branch utama dari repository kode kamu.

### Kondisi file/folder

Kondisi kommit adalah kondisi sebuah file terdaftar dan perubahanya terekam oleh database VCS (dalam kasus ini Git) yang bisa kita tilik balik versi lampaunya. Sebuah file/folder mencapai kondisi komit ada kondisi tertentu yang harus dilalui (bisa dicek dengan `git status`) :

<center>
    <img src="/pic/git-intro/git-status.png" alt="status git" />
</center>

- *Modified*

Status yang ngasih tau kalau file itu ada perubahan dari komit terakhir. File yang statusnya modified bakal dibandingin perubahanya sama git  dari perubahan komit terakhir, jadi bisa dibuang perubahanya kalau enggak perlu atau ada kesalahan.

- *Staged*

Status file/folder yang baru didaftarkan ke branch repository kode (`git add`) untuk nanti masuk komit, lawanya status ini *untracked*.

- *Commited*

Status file sudah aman tercatat ke database git (`git commit`), kalau kita ada perubahan yang tidak inginkan cukup `git reset HEAD` untuk kembali ke komit terakhir.

Selain kondisi file, ada hal terkait file sistem yang perlu kamu ketahui untuk memahami kondisi file.

File sistem ini dibagi menjadi 3 juga:

<center>
    <img alt="worktree staging area" src="/pic/git-intro/wt-sa.png" />
    <p>1. Working Tree, 2. Hasil kerjaan staging area</p>
</center>

- Working Tree

Working tree adalah lokasi kamu saat berkerja dengan kode, seperti mengedit dan semacamnya.

Ini memang tidak terlihat tampak, tetapi akan jelas ketika kamu melakukan checkout branch dari 2 branch yang memiliki perubahan masing-masing.

- Stagging Area

Stagging area yang bertugas mencatat sebuah status file sebelum komit ke branch, baik itu modified, staged ataupun untracked. 

- `.git` Directory

Folder ini berisi database berisi tentang branch dan snapshotnya. Ini adalah jantung dari repository git dari kode kamu.

## Branching dan Merging

Kita bisa membuat branch baru (`git switch -c <nama branch>`) untuk membuat perubahan terpisah dari main branch, sebagai contoh branch X dan Y -- untuk melihat branch yang dimiliki `git branch`.

Jadi bayangkan saja batang pohon rimbun yang ditebang denga cara rantingnya di potong-potong (`git merge`) supaya pohonya tumbuh lurus keatas contohnya dibawah ini:

<center>
    <img src="/pic/git-intro/git-branch-merging.png" alt="git commit over time">
    <p>Illustrasi kerja VCS melalui git</p>
</center>

> Funfact: Kamu tahu sistem kerja git mirip blockchain berkerja: saling berikatan, seragam dan immutable setelah commit.

### Distribusi

Git memungkinkan kamu untuk berkolaborasi antar sesama koder, ini terjadi karena Git memiliki mode :

- Lokal

Database rekaman perubahan disimpan secara lokal dalam folder `.git` di folder repository kode (tempat kamu ngejalanin `git init`), git hampir sepenuhnya berkerja di lokalan komputer kita.

Database ini yang nantinya akan disinkronisasikan -- dikirim dan dicocokan isinya dengan git di komputer lain (`git push`), ke lokasi git yang kamu kehendaki seperti GitHub atau server git lainya.

Database yang dimaksud berupa file-file rekaman perubahan Git bukan RDBMS seperti mysql/postgres tetapi memiliki tujuan yang sama sebagai pangkalan data.

- Terpusat (_centralize server_)

Penyimpanan database di lakukan pada sebuah server yang didedikasikan sebagai database Git, contohnya GitHub, Bitbucket dan gitea (kalau mau hosting server sendiri). 

Penyimpanan terpusat mengharuskan kita mengunduh database git (`git clone`) ke lokalan kita dan rutin melakukan pembaharuan (`git pull`) agar database lokal dan server tersinkronisasi untuk menghindari konflik karena kurang update jika kolaborasi dengan programmer lain.

Distribusi terpusat seperti ini membolehkan kita untuk bertukar kode dan berkolaborasi dengan programmer lain. Caranya dengan melakukan `fork`-`pull request`-`merge`:

- `fork`, kita membuat salinan dari branch repository kode programmer X, anggap saja ingin memperbaiki sesuatu.
- `pull request`, kita mengajukan banding kode dari repositori yang kita fork ke repo programmer X.
- `merge`, branch kode repository kita akan digabungkan ke repository programmer X, asal disetujui oleh programmer X itu sendiri.

## GitHub

[GitHub](https://github.com) adalah layanan penyedia awan penyimpanan git sekaligus sosial media untuk pengguna git, ibarat instagramnya buat programmer.

<center>
    <img src="/pic/git-intro/lp-github.png" alt="landing page github" />
</center>

Sosial media ini punya fitur :

- Sistem follower, kamu bisa liat update mutualan kamu lagi bikin apa dan nge-star proyek yang menarik.
- Commit heatmap, buat jadi metrik keaktifan kamu ngoding sekaligus mood booster buat ngisi "cendol".
- Stargazer, seperti "like" pada sosial media pada umumnya tapi untuk repositori kodingan, semakin banyak bintang semakin "viral".
- Issue, kamu meminta pertolongan, melaporkan bug atau memberi saran untuk pengembangan software.
- Pull request, selain minta tolong kita bisa nolong orang beneran dengan ngebuka pull request berisi perbaikan yang kita kasih.
- Eksplore, berisi rekomendasi repo-repo sejenis yang kamu kasih star.
- Sponsor, donasi untuk mendukung proyek dan komunitas open-source, contohnya [profile Sponsor](https://github.com/sponsors/frederett).

Manfaatnya kamu punya akun GitHub :

- Jadi portofolio entah itu untuk jadi CV atau bantuan sosial untuk orang lain yang lagi belajar.
- Punya feed trend supaya kamu ga ketinggalan trend.
- Paling enggak, sebuah langkah untuk membangun validasi kamu sebagai programmer.

## Penutup

Sekian ulasan berkenalan dengan cara kerja, masalah branching merging dan distribusi database pada Git. 

Tulisan ini tidak berniat menguliti tentang Git terlalu dalam, teruntuk proses installasi dan teknik dasar akan diulas pada tulisan lain karena terlalu banyak bila nanti di gabung.


### Referensi

- [Chacon S, Straub B. Pro Git. 2014. Appress.](https://git-scm.com/book/id/v2/Getting-Started-About-Version-Control)
- [Muhardian A. Apa itu Git dan Pentingnya untuk Programmer. 2017. https://petanikode.com](https://www.petanikode.com/git-untuk-pemula/)
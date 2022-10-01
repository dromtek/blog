+++
title = "Kenalan dengan Git"
slug = "intro-git"
description = "Kamu mungkin pernah dengan GitHub atau GitLab, tapi kamu tau git?"
page_template = "page.html"
draft = false
author = "lort"
[extra]
thumbnail = "/pic/git-header.png"
category = "koding"
+++

Ave Dromtek.

Sobat-sobat sekalian pernah dengan kata Git ga sih ? atau GitHub ? kalau belum tau ayo kenalan dulu.

Git secara umum alat untuk manajemen kodingan kita, nama kerennya _version control system_ (VCS). Di situ kita bisa nandain kita habis ngoding apa, mau kolab jadi mudah dan punya magic mesin waktu yang bisa ngerekam jejak kodingan kamu, ketika kamu salah hapus file bisa di cari backupnya di Git.

Lalu GitHub itu apa kak? mereka itu ibarat sosmed tapi isinya kodingan yang sudah dibungkus sistem Git -- repository kode. Di sana kamu bisa lihat kodingan orang lain, memperbaiki kodingan orang lain ataupun minta perbaikan dan tentunya bisa jadi branding image kamu sebagai programmer baik untuk jadi porto untuk ditaro di CV atau kolaborasi dengan komunitas _open source_.

Jadi apakah punya akun GitHub wajib kak? jawabanya enggak harus punya. Tapi kalau kamu punya, kamu bisa lihat trend-trend dari bahasa yang kamu pake, repo sejenis yang kamu kasih bintang, ngelihat apa sih yang temen kamu lagi sukai (caranya buka profile github orang dan lihat **stars**) dan eksplore di GitHub.

<center>
<img src="/pic/github-stars.png" />
<p>1. Pencet Tab Stars , 2. List repo yang di sukai  <lp>
</center>

<center>
<img src="/pic/github-explore.png" />
<p>1. Pencet Tab Explore , 2. List rekomendasi dari repo yang kamu suka, 3. Repo yang lagi trending <lp>
</center>

Sebelum kita jauh mendalam GitHub mari kita kenalan dengan Git dulu supaya afdol memakai GitHub nya.

## Apa itu Git ?

Git merupakan salah satu dari _version control system_ (temannya Subversion, Dracs dsb). _Version Control_ adalah sistem yang mencatat perubahan (_changes_) file dan folder dari waktu ke waktu sehingga kita bisa kembali ke cuplikan perubahan pada titik waktu tertentu suatu saat nanti. 

<center>
    <img src="/pic/git-commit-flow.png" alt="git commit over time">
    <p>Illustrasi kerja VCS melalui git</p>
</center>

Biar lebih mudah di ingat, anggap saja ini mesin waktu untuk file dan folder kamu bisa kembali kapan saja untuk melihat file/folder lawas.  Branch adalah kumpulan baris waktu komit-komit yang terekam oleh git, Main branch adalah branch utama dari repository kode kamu.

## Branching dan Merging

Kita bisa membuat branch baru (`git switch -c <nama branch>`) untuk membuat perubahan terpisah dari main branch, sebagai contoh branch X dan Y.

Jadi bayangkan saja batang pohon rimbun yang ditebang denga cara rantingnya di potong-potong (`git merge`) supaya pohonya tumbuh lurus keatas contohnya dibawah ini:

<center>
    <img src="/pic/git-branch-merging.png" alt="git commit over time">
    <p>Illustrasi kerja VCS melalui git</p>
</center>

> Funfact: Kamu tahu sistem kerja git mirip blockchain berkerja: saling berikatan, seragam dan immutable setelah commit.

### Kondisi file/folder

Kondisi kommit adalah kondisi dimana sebuah file terdaftar dan perubahanya terekam oleh database VCS (dalam kasus ini Git) yang bisa kita tilik balik versi lampaunya, untuk sebuah file/folder mencapai kondisi komit ada kondisi tertentu yang harus dilalui :

- Untracked

- Stagged



### Distribusi

Git memungkinkan kamu untuk berkolaborasi antar sesama koder, ini terjadi karena Git memiliki 3 mode :

- Lokal

Database rekaman perubahan disimpan secara lokal dalam folder `.git` di folder repository kode (tempat kamu ngejalanin `git init`). 

Database ini yang nantinya akan disinkronisasikan -- dikirim dan dicocokan isinya dengan git di komputer lain (`git push`), ke lokasi git yang kamu kehendaki seperti GitHub atau server git lainya.

Database yang dimaksud berupa file-file rekaman perubahan Git bukan RDBMS seperti mysql/postgres tetapi memiliki tujuan yang sama sebagai pangkalan data.

- Terpusat (_centralize server_)

Penyimpanan database di lakukan pada sebuah server yang didedikasikan sebagai database Git, contohnya GitHub, Bitbucket dan gitea (kalau mau hosting server sendiri). 

Penyimpanan terpusat mengharuskan kita mengunduh database git (`git clone`) ke lokalan kita dan rutin melakukan pembaharuan (`git pull`) agar database lokal dan server tersinkronisasi untuk menghindari konflik karena kurang update jika kolaborasi dengan programmer lain.

Distribusi terpusat seperti ini membolehkan kita untuk bertukar kode dan berkolaborasi dengan programmer lain. Caranya dengan melakukan `fork`-`pull request`-`merge`:

- `fork`, kita membuat salinan dari branch repository kode programmer X, anggap saja ingin memperbaiki sesuatu.
- `pull request`, kita mengajukan banding kode dari repositori yang kita fork ke repo programmer X.
- `merge`, branch kode repository kita akan digabungkan ke repository programmer X, asal disetujui oleh programmer X itu sendiri.

- Tersebar (_decentralized_)


## GitHub

GitHub adalah layanan penyedia penyimanan git sekaligus sosial media untuk pengguna git.

### Referensi

- [Chacon S, Straub B. Pro Git. 2014. Appress.](https://git-scm.com/book/id/v2/Getting-Started-About-Version-Control)
- [Muhardian A. Apa itu Git dan Pentingnya untuk Programmer. 2017. https://petanikode.com](https://www.petanikode.com/git-untuk-pemula/)
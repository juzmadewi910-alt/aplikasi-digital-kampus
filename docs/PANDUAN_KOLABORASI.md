# Panduan Simulasi Kolaborasi GitHub

## A. Persiapan
1. Semua anggota membuat akun di https://github.com/.
2. Satu orang menjadi pemilik repository dan membuat repository `aplikasi-digital-kampus`.
3. Pemilik membuka Settings → Collaborators (atau Collaborators and teams) → Add people, lalu mengundang anggota dengan username/email GitHub mereka.
4. Anggota menerima undangan melalui notifikasi/email.
5. Instal Git dan Visual Studio Code pada komputer masing-masing.

## B. Developer: clone, branch, commit, push
Buka terminal VS Code:
```bash
git clone https://github.com/USERNAME/aplikasi-digital-kampus.git
cd aplikasi-digital-kampus
git checkout -b feature/krs
```
Kerjakan perubahan, lalu:
```bash
git status
git add .
git commit -m "feat: tambah fitur pengisian KRS"
git push -u origin feature/krs
```
Ganti `USERNAME` dengan username pemilik repository.

## C. Membuat Issue
1. Buka tab Issues → New Issue.
2. Contoh judul: `Membuat fitur pengisian KRS`.
3. Isi deskripsi: pengguna dapat memilih mata kuliah dan kelas, melihat jumlah mata kuliah serta total SKS, dan menghapus pilihan.
4. Tetapkan Assignee jika tersedia.
5. Buat Issue dan catat nomor Issue.

## D. Membuat Pull Request
1. Setelah branch berhasil di-push, buka tab Pull requests.
2. Klik New pull request.
3. Base: `main`; Compare: `feature/krs`.
4. Isi ringkasan perubahan dan hasil pengujian.
5. Buat Pull Request.
6. Hubungkan Issue, misalnya tulis `Closes #1` pada deskripsi (sesuaikan nomor Issue).

## E. Tester dan Reviewer
1. Tester membuka aplikasi dan mengikuti `TESTING_CHECKLIST.md`.
2. Tester menulis hasil tes pada komentar PR atau Issue.
3. Jika gagal, tulis langkah mengulang dan hasil yang diharapkan; Developer memperbaiki pada branch yang sama.
4. Reviewer membuka tab Files changed, membaca perubahan, dan memberi komentar.
5. Jika sudah benar, Reviewer memilih Approve. Jika belum, pilih Request changes atau beri komentar.
6. Setelah persyaratan terpenuhi, orang yang memiliki izin melakukan Merge pull request.

## F. Operations: deployment dan monitoring
Untuk simulasi lokal, jalankan `index.html` di browser dan pastikan aplikasi tampil. Untuk demonstrasi online, repository dapat dipublikasikan melalui Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save, jika GitHub Pages tersedia untuk repository tersebut.
Setelah aktif, periksa URL Pages dan uji halaman. Pantau tab Actions untuk status workflow CI. Jika workflow gagal, buka detail run dan perbaiki masalahnya.

## G. Bukti yang dikumpulkan
Ambil screenshot milik kelompok sendiri:
1. Repository dan daftar anggota/collaborator.
2. Issue yang dibuat.
3. Branch fitur.
4. Commit dan push.
5. Pull Request.
6. Hasil pengujian/komentar Tester.
7. Review dan status Approved.
8. Merge berhasil.
9. Actions menunjukkan workflow berhasil.
10. Aplikasi berjalan atau URL GitHub Pages.

Jangan membuat screenshot bukti palsu. Screenshot harus diambil dari repository dan proses yang benar-benar dilakukan kelompok.

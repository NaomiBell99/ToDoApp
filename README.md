# ToDoApp
Anggota Kelompok dan Pembagian Tugas:

Sony Gunawan
- React Navigation dan validasi

Steven Setiawan Kusuma
- Redux dan style

Adriel Lazaro Fitzhan
- API calls (fetching data) & FlatList

Glenn Louis Tamin
- AddToDo components

Naomi Belinda May Arbai
- Redux dan Button Components


Aplikasi ini merupakan aplikasi untuk To do list. Fungsinya saat ini hanya dapat dipakai untuk menampilkan list yang dipanggil dari API, dan masuk kedalam form Add.
Dimana pada screen utama akan terdapat list data yang kami ambil menggunakan axios dan memakai url: 'https://api.fake.rest/189bf93b-4d78-4f00-86ac-76d87cfccbd1/task/list', dengan validasi jika statusnya sudah selesai maka akan tercoret. Pada halaman utama juga terdapat button '+' yang merepresentasikan fungsi 'add' to do list yang jika diklik akan menggunakan react-navigation dan diarahkan ke screen AddToDo yaitu form Add
Pada AddToDo, terdapat form inputan text dan juga button save. Ketika klik save, maka list pada halaman utaman akan bertambah dengan to do yang baru saja di add
Redux sudah dimasukan ke dalam code namun hanya dapat dipakai untuk add to do
fitur edit dan delete yang ada pada halaman utama hanya dapat melakukan console.log edit dan console.log delete. Untuk delete cukup klik pada list todo, sedangkan delete cukup klik button delete yang tersedia


Untuk menjalankan project ini:
1. Clone project pada Visual Studio Code
2. Jalankan emulator Android ataupun IOS
3. Pada terminal yang terdapat di Visual Studio Code jalankan 'npm install'
4. Setelah selesai, jalankan 'npx react-native run-android'
5. Project dapat dilihat pada emulator


Kendala :
Kendala yang dihadapi oleh kelompok kami adalah, setiap anggota terdapat kesibukannya masing - masing dalam pekerjaan, seperti sudah terdapat banyak project yang sedang berjalan dan hal tersebut membuat kami susah untuk dapat memulai project ini, sehingga kami hanya dapat mengerjakan sejauh mungkin yang kami bisa selama ada waktu luang. Tidak hanya itu, beberapa anggota kelompok juga mendapati kendala error saat menjalankan project ini pada Visual Studio Code, sehingga code harus digabungkan secara manual

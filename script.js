document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir default

  // Tangkap nilai dari bidang formulir
  var name = document.getElementById("name").value; // Mengambil nilai dari input nama
  var email = document.getElementById("email").value; // Mengambil nilai dari input email
  var dob = document.getElementById("dob").value; // Mengambil nilai dari input tanggal lahir
  var gender; // Variabel untuk menyimpan nilai gender
  var genderOptions = document.getElementsByName('gridRadios'); // Mengambil elemen-elemen input gender
  for(var i = 0; i < genderOptions.length; i++) { // Loop melalui elemen-elemen input gender
      if(genderOptions[i].checked) { // Periksa apakah radio button gender terpilih
          gender = genderOptions[i].value; // Jika terpilih, simpan nilai gender
          break; // Hentikan loop
      }
  }

  var programOfInterest = document.getElementById("optionSelect").value; // Mengambil nilai dari dropdown program of interest
  var address = document.getElementById("address").value; // Mengambil nilai dari input alamat
  var phoneNumber = document.getElementById("phoneNumber").value; // Mengambil nilai dari input nomor telepon
  var momName = document.getElementById("momName").value; // Mengambil nilai dari input nama ibu
  var dadName = document.getElementById("dadName").value; // Mengambil nilai dari input nama ayah
  
  // Validasi nama (hanya huruf)
  var nameRegex = /^[a-zA-Z\s]*$/; // Pola regex untuk hanya huruf dan spasi
  if (!nameRegex.test(name)) { // Jika nama tidak sesuai pola
      alert("Please enter only letters for the name field."); // Tampilkan pesan kesalahan
      return; // Hentikan pengiriman formulir jika validasi gagal
  } else if (!nameRegex.test(momName)){ // Jika nama ibu tidak sesuai pola
    alert("Please enter only letters for the mother's name field."); // Tampilkan pesan kesalahan
    return; // Hentikan pengiriman formulir jika validasi gagal
  } else if (!nameRegex.test(dadName)){ // Jika nama ayah tidak sesuai pola
    alert("Please enter only letters for the father's name field."); // Tampilkan pesan kesalahan
    return; // Hentikan pengiriman formulir jika validasi gagal
  }
  
  // Tangkap foto
  var photo = document.getElementById("photo").files[0]; // Mengambil file foto
  var imageURL = URL.createObjectURL(photo); // Membuat URL objek untuk menampilkan foto

  //Validasi File Gambar JPG dan JPEG
  var photo = document.getElementById("photo"); // Mengambil elemen input file foto
  var photoValue = photo.value; // Mengambil nilai dari input file foto
  
  // Periksa apakah ada file yang dipilih
  if (photoValue.trim() === '') {
      alert("Please select a photo."); // Tampilkan pesan kesalahan jika tidak ada file yang dipilih
      return; // Hentikan pengiriman formulir jika validasi gagal
  }

  // Periksa ekstensi file
  var allowedExtensions = /(\.jpg|\.jpeg)$/i; // Ekstensi yang diterima: .jpg dan .jpeg
  if (!allowedExtensions.exec(photoValue)) {
      alert('Please upload file having extensions .jpeg/.jpg only.'); // Tampilkan pesan kesalahan jika ekstensi tidak sesuai
      photo.value = ''; // Kosongkan nilai input file
      return; // Hentikan pengiriman formulir jika validasi gagal
  }

  // Tampilkan nilai di bawah formulir
  var outputDiv = document.getElementById("output"); // Mengambil elemen div output
  outputDiv.innerHTML = "<h2>Hi " + name + ", here is your data !</h2>" + // Menampilkan pesan sambutan
                        "<p><strong>Name : </strong> " + name + "</p>" + // Menampilkan nama
                        "<p><strong>Email : </strong> " + email + "</p>" + // Menampilkan email
                        "<p><strong>Date of Birth : </strong> " + dob + "</p>" + // Menampilkan tanggal lahir
                        "<p><strong>Gender : </strong> " + gender + "</p>" + // Menampilkan gender
                        "<p><strong>Program of Interest : </strong> " + programOfInterest + "</p>" + // Menampilkan program of interest
                        "<p><strong>Address : </strong> " + address + "</p>" + // Menampilkan alamat
                        "<p><strong>Phone Number : </strong> " + phoneNumber + "</p>" + // Menampilkan nomor telepon
                        "<p><strong>Mother's Name : </strong> " + momName + "</p>" + // Menampilkan nama ibu
                        "<p><strong>Father's Name : </strong> " + dadName + "</p>" + // Menampilkan nama ayah
                        "<p><strong>Photo : </strong><br><img src='" + imageURL + "' class='img-fluid col-3' alt='Uploaded photo'></p>"; // Menampilkan foto

  // Hapus nilai dari bidang formulir setelah ditampilkan
  document.getElementById("registrationForm").reset(); // Mengosongkan formulir setelah pengiriman
});

//memakai $ karena menggunakan jquery
var tombolMenu = $(".tombol-menu"); //vriabel tombolMenu berisi class tombol-menu (.tombol-menu)
var menu = $("nav .menu ul"); //variabel menu berisi nav .menu ul

function klikMenu() { //fungsi klikMenu
    tombolMenu.click(function () {
        menu.toggle(); //akan mengaktifkan jika misalnya tombol menu dalam keadaan non aktif
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width(); //menggunakan properti dari JQuery untuk pengecekan lebar layar
    if (width < 890) { //jika lebar layar kurang dari 990 maka bisa diklik
        klikMenu(); //fungsi klikMenu dijalankan, jadi jika garis-garis pojok kanan atas diklik akan menampilkan menu
    }
})

//check lebar
//agar menu garis-garis saat minimaize dapat diklik, dan jika sudah tidak minimaize tampilan menu akan berubah semula
$(window).resize(function () { //melakukan pengecekan saat layarnya berubah ukuran
    var width = $(window).width(); //mengecek lebar
    if (width > 989) { //jika lebar lebih besar dari 989 
        menu.css("display", "block"); //maka akan menampilkan menu
        //display:block --> jika di css
    } else { //bila salah
        menu.css("display", "none"); //maka ukuran layar besar
    }
    klikMenu(); 
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0; //variabel scrool_pos
    $(document).scroll(function () { 
        scroll_pos = $(this).scrollTop(); //pengecekan jarak dengan atas
        if (scroll_pos > 0) { //jika jarak dengan atas lebih besar dari 0 saat di scroll kebawah
            $("nav").addClass("putih"); //memberikan efek background putih di menu dan disinilah css dari nav.putih berfungsi
        } else { //jika salah atau saat dikembalikan scroll ke atas 
            $("nav").removeClass("putih"); //menghapus efek background putih
            
        }
    })
});
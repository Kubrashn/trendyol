$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  });

  $("#tumu").click(function (e) { 
    e.preventDefault();
    $(".alanb").toggle();
  });

//   $(document).ready(function () {
//     InputDeger = parseInt($(".adet").val());

//     $(".eksiltmebtn").click(function (e) { 
//         e.preventDefault();
//         if (InputDeger > 1){
//             InputDeger--;
//             $(".adet").attr("value" , InputDeger);
//         }
//     });

//     $(".arttirmabtn").click(function (e) { 
//         e.preventDefault();
//         if (InputDeger <10){
//             InputDeger++;
//             $(".adet").attr("value" , InputDeger);
//         }
//     });
//   });

function arttir() {
    let sonuc = document.getElementById("adet");
    sonuc.value=Number(sonuc.value)+1;
    sonuc = Number(sonuc.value)

    let test = document.querySelector('.birimfgizli').innerHTML
    test = Number(test)
    
    let degisim = test*(sonuc);
    document.getElementById("birimfiyat").innerHTML=degisim;
}

function azalt() {
    let sonuc = document.getElementById("adet");
    sonuc.value=Number(sonuc.value)-1;
    sonuc = Number(sonuc.value)

    let test = document.querySelector('.birimfgizli').innerHTML
    test = Number(test)

    let degisim = test*(sonuc);
    document.getElementById("birimfiyat").innerHTML=degisim;

    
}

// function fiyatDegistir() {
//     let test = document.querySelector('birimfiyat').innerHTML
//     test = Number(test)
//     let uruntoplami = document.querySelector(".show").innerHTML=test
// }

// function fiyatDegistir() {
//     let urun = document.querySelector(".show").innerHTML
//     urun = Number(urun)
//     let kargo = document.querySelector("kargof").innerHTML
//     kargo = Number(kargo)
//     let toplam = urun + kargo 
//     document.querySelector(".fiyattoplam").innerHTML=toplam
    
    
// }


$(".copkutusu").click(function (e) { 
    e.preventDefault();
    $(".alanc").hide();
    $(".urunyoktur").show();
});

function closeWin() {
    document.getElementsByClassName("btn-close").close();
}



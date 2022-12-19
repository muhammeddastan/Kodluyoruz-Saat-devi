let name = prompt("Lütfen Adınızı Giriniz")
console.log(name)

let myName = document.getElementById('myName')
myName.innerHTML = name

function currentTime() {
    let date = new Date(); 
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    let gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    let gun = 0;
  
    if(saat == 0){
        saat = 0
        gun ++;
    }
    

     saat = (saat < 10) ? "0" + saat : saat;
     dakika = (dakika < 10) ? "0" + dakika : dakika;
     saniye = (saniye < 10) ? "0" + saniye : saniye;
      
     let zaman = saat + ":" + dakika + ":" + saniye + " ";
  
    document.getElementById("myClock").innerHTML = zaman + gunler [gun];
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();







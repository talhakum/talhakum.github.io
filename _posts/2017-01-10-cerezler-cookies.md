---
layout: post
title: Çerezler (Cookies)
date: 2017-01-10 18:30:00
tags: [Javascript çerezler,Javascript Cookies,Javascript Dersleri]
comments: true
show-share: true
---

Merhaba arkadaşlar, bu yazıda JavaScript'te çerezler (cookies) konusunu ele alacağız.

### Cookie nedir ?

Kısaca açıklamak gerekirse cookie, web sitelerin tarayıcıya bir takım amaçlar için yüklediği küçük bilgilerdir. En yaygın kullanımı bir web sitesine giriş yaptığımızda tarayıcının üye girişi için tekrar üyelik bilgisi sormamasıdır. Başka bir kullanım alanı ise e-ticaret sitelerinde üye girişi yapmadan sepete ürün eklenebilmesidir.

#### Cookie Oluşturmak

JavaScript'te Cookie oluşturmak için temel komut

`document.cookie= "cookieAdı=içerik; expires= bitişTarihi;"` şeklindedir.

Bir örnek yaparak nasıl kullanıldığını görelim.

```html
<html>
<head>
<meta charset="UTF-8"/>
<script type="text/javascript">
function cookieOlustur() {
	var cookieAd=document.getElementById("cookieAd").value;
	var cookieIcerik=document.getElementById("cookieIcerik").value;
	var cookieGun=parseInt(document.getElementById("cookieGun").value,10); //cookieGun içeriğini int bir değere parse ettik. Virgülden sonraki 10, sayı tabanını temsil ediyor.
	var cookieTarih=new Date();
	cookieTarih.setDate(cookieTarih.getDate()+cookieGun);
	document.cookie= cookieAd +"="+escape(cookieIcerik) + ";expires=" + cookieTarih.toString();
}
</script>
</head>
<body>
<form>
Cookie Adı: <input type="text" id="cookieAd" />: <br>
Cookie İçeriği: <input type="text" id="cookieIcerik" /> <br>
Cookie Aktif Kalacak Gün Sayısı: <input type="number" id="cookieGun" /> <br>
<input type="submit" value="Cookie Oluştur" onclick="cookieOlustur();"/> <br>
</form>
</body>
</html>
```

Bu örneğimizde cookie adını, içeriğini ve aktif olacağı gün sayısını alarak bir cookie oluşturduk. Kod içerisinde gerekli açıklamaları yaptığımdan daha fazla yazmaya gerek görmedim. Firefox kullananlar Tercihler -> Gizlilik sekmesine gelerek Geçmiş kısmında yazan çerezleri tek tek kaldırabilirsiniz'e tıklayarak oluşturdukları çereze bakabilirler.

<p align="center">
  <img src="https://raw.githubusercontent.com/talhakum/talhakum.github.io/master/img/js7.png"/>
</p>

### Cookie Okumak

Var olan Cookie'leri okumak için ise document.cookie komutu kullanılabilir. Örneğin biraz önce oluşturduğumuz cookie'yi okuyalım.

```html
<html>
<head>
<meta charset="UTF-8"/>
<script type="text/javascript">
function cookieOku() {
	document.write(document.cookie);

}
</script>
</head>
<body>

<form>
  <input type="submit" value="Cookie Oku" onclick="cookieOku();" />
</form>
</body>
</html>
```

Çıktımız bu şekilde olacaktır.

<p align="center">
  <img src="https://raw.githubusercontent.com/talhakum/talhakum.github.io/master/img/js7.png"/>
</p>

Eğer belirli bir isme göre Cookie çekmek istiyorsak o zaman document.cookie.indexOf() metodunu kullanabiliriz. Bununla ilgili de bir örnek gösterelim.

```html
<html>
<head>
<meta charset="UTF-8"/>
<script type="text/javascript">

function getCookie() {
var cookieAd=document.getElementById("cookieGet").value;
    var cookieAd = cookieAd + "=";
    var cookies= document.cookie.split(';');
    for(var i=0; i<cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieAd) == 0) {
            document.write( c.substring(cookieAd.length, c.length));
        }
    }
    return "";
}
</script>
</head>
<body>
Aranacak Cookie’nin adını giriniz: <input type="text" id="cookieGet"> <br>
<input type="submit" value="Cookie’yi Getir" onclick="getCookie();">
</body>
</html>
```

Örneğimizde bir input yardımıyla aranacak cookie'nin girilmesini istiyoruz. Girildikten sonra submit butonuna tıklanarak getCookie() fonksiyonumuz çalışıyor. Daha önce de yaptığımız gibi cookieAd değişkeni input text'e yazılan değeri alıyor. cookieAd değişkenine "=" eklememizin sebebi c.substring() metoduna verdiğimiz ilk parametreden aramaya başlamasıdır. Örneğin input'a ad yazdıysak "ad="den sonrasını alması gerekir. Daha sonra cookies değişkenine split() metodu kullanarak var olan cookie'leri bir dizi şeklinde atıyoruz. Örneğin ad=talha; soyad=kum cookilerimiz varsa ad=talha cookies dizisinin ilk elemanı, soyad=kum ikinci elemanı oluyor. Ardından bir for döngüsü yardımıyla var olan cookiler üzerinde geziyoruz. c değişkeni tahmin edebileceğiniz üzere sırasıyla cookie'leri tutuyor. c.indexOf metoduyla da yukarıda anlattığımız gibi c değişkeninin içerisinde inputla girilen verinin oluo olmadığını sınıyoruz. Şayet varsa ekrana cookie içeriğini yazdırıyor.

While döngüsü ise eğer bir cookie'nin ilk elemanı boş karakter ise substring metodunu kullanarak boş karakteri siliyor.

Örneği detaylı bir şekilde anlatmaya çalıştım umarım anlaşılmıştır.

### Cookie Silmek

Var olan bir cookie'yi silmek için cookie'yi tarihi geçmiş bir değişkenle güncelleriz.

```html
<html>
<head>
<meta charset="UTF-8"/>
<script type="text/javascript">

function cookieSil() {
	var cookieAd=document.getElementById("cookieSil").value;
	document.cookie=cookieAd+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

}
</script>
</head>
<body>
Silinecek Cookie’nin adını giriniz: <input type="text" id="cookieSil"> <br>
<input type="submit" value="Cookie’yi Sil" onclick="cookieSil();">
</body>
</html>
```

Yukarıdaki örneğe benzer bir şekilde kullanıcıdan bir input alarak bunu, geçmiş bir tarihi kullanarak güncelledik. Böylelikle cookie silinmiş oldu.


Bu derste JavaScript'te cookie yapısını temel olarak aktarmaya çalıştım, bir sonraki derste görüşmek dileğiyle hoşça kalın..

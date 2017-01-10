---
layout: post
title: Düzenli İfadeler(Regular Expressions)
date: 2017-01-10 17:03:00
tags: [Javascript düzenli ifadeler,Javascript dersleri,Javascript regular expression]
comments: true
show-share: true
---

Merhaba, bu yazımızda JavaScript'te düzenli ifadeler'in (regular expressions) nasıl kullanıldığını öğrenmeye çalışacağız. Tanımından başlayalım.

### Düzenli İfadeler nedir ?

En basit tabiriyle kullanıcıdan alınacak bir input için belirlediğimiz kriterlerdir. Genel olarak form alanlarında karşılaşırız. Örneğin bir siteye kayıt olurken bizden istediği e-mail adresinin formatı genellikle somebody@something.xxx(.xx) şeklinde olmaktadır. Bu işlemi server tarafında da yapabiliriz ancak kullanıcı tarafında yapmak server tarafındaki iş yükünü azaltacak ve hız kazandıracaktır.
RegExp Nesnesi

Yukarıda bahsettiğimiz düzenli ifadeleri oluşturmak için RegExp nesnesi kullanılır. Syntax'ı şu şekildedir:

`var regexp=new RegExp("kalıp", "düzenleyici");`
`var regexp=/kalıp/düzenleyici`

Burada ki 2 yöntemide kullanabiliriz. Burada kalıp denilen şey düzenli ifade metnidir. Düzenleyici ise 3 parametre seçeneğinden oluşan, düzenli ifadeye bazı seçenekler sunan ayarlar kısmımızdır. Bu parametler:

1. g (global) : Karakter metninin tamamında arama yapılacağını belirtir.
2. i (ignore case) : Karakter metnini ararken büyük/küçük harf ayrımı yapılmayacağını belirtir.
3. m (multiline) : Karakter metninin birden çok satırdan oluştuğunu belirtmek için kullanılır.

RegExp nesnesinin de bazı metotları mevcuttur, ben burada bizim işimize yaracak 2 metottan bahsedeceğim.

1. test() : Karakter dizisi içerisinde tanımladığımız düzenli ifade ile bir eşleşme olup olmadığını kontrol eder. Eğer eşleşme olduysa true değerini döndürür. Eşleşme olduğunda, regexp nesnesinin last index değeri eşleşme olan yerin indexi olarak güncellenir. Birazdan örnek yapacağız.
2. exec() : Exec metodu da test metoduyla çok benzerdir. Sadece eşleşme olduğunda geriye eşleşme olan kısımlarını dizi olarak döndürür.

Bazı tanımları verdikten sonra şimdi birkaç örnek üzerinden anlamaya çalışalım.

Bazı tanımları verdikten sonra şimdi birkaç örnek üzerinden anlamaya çalışalım.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>
	
		var metin="talha kum";
var regexp=new RegExp("ku","g");

if(regexp.test(metin)){
document.write("Kalip bulundu. Index : "+regexp.lastIndex); //lastIndex özelliği eşleşmenin olduğu yerin indexini geriye döndürür.
}else{
document.write("Bulunamadi.");
}
</script>	
</body>
</html>
```

Örnekte kalıbımızı gördüğünüz gibi "ku" olarak verdik. Yani metin içerisinde "ku" diye bir sözcüğün olup olmadığına bakıyor. "g" de daha önce yazdığımız gibi bütün metin parçasında arama yapacağı anlamına geliyor. if kontrol ifadesine, verdiğimiz düzenli ifadenin test metodunu, metin parametresiyle yazıyoruz. Bu şu anlama geliyor, metnimiz içinde "ku" diye bir parça var mı ? Varsa (true ise) içeriye gir, ekrana "kalıp bulundu" ve eşleşmenin olduğu yeri (indexi) yaz. Eğer test metodundan geriye false değeri dönerse, ekrana "bulunamadı" yaz.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>
	
		var metin="talha kum";
var regexp=new RegExp("KU","g"); // büyük harflerle yazdığımıza dikkat edin.

if(regexp.test(metin)){
document.write("Kalip bulundu. Index : "+regexp.lastIndex); //lastIndex özelliği eşleşmenin olduğu yerin indexini geriye döndürür.
}else{
document.write("Bulunamadi.");
}
</script>	
</body>
</html>
```

Bu örnekte de tahmin edeceğiniz gibi ekrana bulunamadı yazısı çıkacaktır. Bunun sebebi metnimiz içerisinde "KU" adında bir parça olmamasıdır. Peki ne yapacağız ?

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>
	
		var metin="talha kum";
var regexp=new RegExp("KU","gi");

if(regexp.test(metin)){
document.write("Kalip bulundu. Index : "+regexp.lastIndex); //lastIndex özelliği eşleşmenin olduğu yerin indexini geriye döndürür.
}else{
document.write("Bulunamadi.");
}
		
</script>	
</body>
</html>
```

"g" harfinin yanına "i" yi eklediğimiz zaman aranacak metin içerisinde büyük küçük harf ayrımı yapmayacağını söylüyoruz. Ve dolayısıyla ekrana bulundu yazısı yazacaktır.

Bu örnekleri çoğaltabiliriz, ancak ben daha önemli olduğunu düşündüğüm özel karakterlere değineceğim. Bunları gösterdikten sonra örnekler üzerinden anlatacağım.

<table>
<tbody>
<tr>
<th><span style="color: #000000;">Karakter</span></th>
<th><span style="color: #000000;">Açıklama</span></th>
</tr>
<tr>
<td><span style="color: #000000;">^</span></td>
<td><span style="color: #000000;">Düzenli ifadenin, karşılaştırmaya nereden başlayacağını belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">$</span></td>
<td><span style="color: #000000;">Düzenli ifadenin, karşılaştırmayı nerede bitireceğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\b</span></td>
<td><span style="color: #000000;">Düzenli ifade içerisindeki metin, karşılaştırılacak metnin başında ya da sonunda aranır.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\B</span></td>
<td><span style="color: #000000;">Düzenli ifade içerisindeki metin, karşılaştırılacak metnin içerisinde aranır. (Başı veya sonu önemsizdir.)</span></td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th><span style="color: #000000;">Karakter</span></th>
<th><span style="color: #000000;">Açıklama</span></th>
</tr>
<tr>
<td><span style="color: #000000;">{x}</span></td>
<td><span style="color: #000000;">Düzenli ifade içerisine yazdığımız ifadenin, kaç defa tekrarlanacağını belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">{x,y}</span></td>
<td><span style="color: #000000;">Düzenli ifade içerisine yazdığımız ifadenin, en az kaç, en fazla kaç defa tekrarlanacağını belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">+</span></td>
<td><span style="color: #000000;">Düzenli ifade içerisine yazdığımız ifadenin, bir ya da daha fazla tekrarlanmış olması gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">?</span></td>
<td><span style="color: #000000;">Düzenli ifade içerisine yazdığımız ifadenin, hiç tekrarlanmamış veya en fazla 1 kez tekrarlanmış olması gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">*</span></td>
<td><span style="color: #000000;">Düzenli ifade içerisine yazdığımız ifadenin, hiç tekrarlanmamış veya tekrarlanmış olması gerektiğini belirtir.</span></td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th><span style="color: #000000;">Karakter</span></th>
<th><span style="color: #000000;">Açıklama</span></th>
</tr>
<tr>
<td><span style="color: #000000;">[abc]</span></td>
<td><span style="color: #000000;">Karşılaştırma yapacağımız ifadenin, ayraç içerisine yazılan karakterlerden herhangi biri ile eşleşmesi gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">[a-z]</span></td>
<td><span style="color: #000000;">Karşılaştırma yapacağımız ifadenin, ayraç içerisine yazılan karakterler arasındaki karakterlerden biriyle eşleşmesi gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">[^abc]</span></td>
<td><span style="color: #000000;">Ayraç içerisine yazılan karakterler dışındaki karakterlerden birisiyle eşleşmesi gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">[^a-z]</span></td>
<td><span style="color: #000000;">Ayraç içerisine yazılan karakter aralığındaki karakterlerin dışındaki bir karakterle eşleşmesi gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">a|b</span></td>
<td><span style="color: #000000;">a ya da b ile eşleşmesi gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\w</span></td>
<td><span style="color: #000000;">Alfanümerik bir karakter ile eşleşmesi gerektiğini belirtir. (A-Z,a-z,0-9,_,-)</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\W</span></td>
<td><span style="color: #000000;">Alfanümerik olmayan bir karakter ile eşleşmesi gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\d</span></td>
<td><span style="color: #000000;">Decimal (ondalık) bir karakterle eşleşmesi gerektiğini belirtir. (0-9)</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\D</span></td>
<td><span style="color: #000000;">Decimal (ondalık) olmayan bir karakterle eşleşmesi gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\s</span></td>
<td><span style="color: #000000;">Bir boşluk karakteriyle eşleşmesi gerektiğini belirtir. (space, yeni satır gibi)</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\S</span></td>
<td><span style="color: #000000;">Boşluk karakteri olmayan bir karakterle eşleşmesi gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\0</span></td>
<td><span style="color: #000000;">Null karakter ile eşleşmesi gerektiğini belirtir.</span></td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th><span style="color: #000000;">Karakter</span></th>
<th><span style="color: #000000;">Açıklama</span></th>
</tr>
<tr>
<td><span style="color: #000000;">\n</span></td>
<td><span style="color: #000000;">Yeni satır karakteriyle eşleşmesi gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\t</span></td>
<td><span style="color: #000000;">Tab karakteriyle eşleşmesi gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\xdd</span></td>
<td><span style="color: #000000;">Decimal olarak yazılmış dd sayısının ASCII karşılığının x yerine yazılmış olması gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\udddd</span></td>
<td><span style="color: #000000;">Hexadecimal olarak yazılmış dddd sayısının Unicode karşılığının u yerine yazılmış olması gerektiğini belirtir.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">()</span></td>
<td><span style="color: #000000;">Düzenli ifade içerisindeki metni gruplamamız için kullanılır.</span></td>
</tr>
<tr>
<td><span style="color: #000000;">\</span></td>
<td><span style="color: #000000;">Ters slash karakterinden sonra gelen karakterin karşılaştırılacak metinle eşleşmesi gerektiğini belirtir.</span></td>
</tr>
</tbody>
</table>

Bunlar şuan çok karmaşık gelmiş olabilir. Ancak birkaç örnekten sonra anlayabiliriz. Şimdi örneklerimize geçelim.

```html
<html>
<head>
<script type=text/javascript>

function fonk() {
    var metin=document.getElementById("input").value; //id'si input olan element'in value kısmını (input text'e yazılan kısmını) almak için kullanılır. Önümüzdeki konularda ayrıntılı bir şekilde göreceğiz. 
    var regexp=/[a-z]/; //Eğer başlangıç ve bitişi belirtmezsek 45talha veya talha45 yazabiliriz. Ancak eğer başlangıç ve bitiş belirtirsek farklı olur. Bir sonraki örneğe bakalım.

    if(regexp.test(metin)){
        //Burada sorun yok.
    }else{
    alert("Girdiginiz deger formata uygun degil.");
    }
    
    }
</script>	
</head>
<body>
<input type="text" value="" onChange="fonk()" id="input"/> <!-- Enter'a basıldığında fonk() fonksiyonu çalıştırılacak. Önümüzdeki konularda daha ayrıntılı bir şekilde değineceğiz. -->    
</body>
</html>
```

Yukarıdaki örnekte daha önce görmedimiz şeyler var. Bunlardan ileriki konularda bahsedeceğim ancak şuan da anlaşılabilir arkadaşlar. Örneğimizde bir input text görüyoruz. Bunu zaten html'den biliyoruz. Bu element'te onChange diye bir özellik görüyoruz. Bu demek oluyor ki, "enter tuşuna basıldığında onChange özelliğine verilen fonksiyonu çalıştır." Bu fonksiyonumuzda da document.getElementById diye bir özellik görüyoruz. Bu, parametre olarak verdiğimiz id'ye sahip olan elemanın referansını geriye döndürür. Value ise id'sini verdiğimiz input text'in değerine (value) ulaşmamıza olanak sağlıyor. Bu da klavyeden girilen değer oluyor tabii. Ondan sonra düzenli ifademizin içerisine [a-z] yazmışız. Bu da yukarıda tanımını yaptığımız gibi a ile z arasında bir karakter olup olmadığını test ediyor. Şayet a ile z arasında bir karakter varsa geriye eşleştirdiği karakterin index'ini döndürüyor. İf koşulunun içi 0'dan farklı bir sayı olacağından içeriye giriyor ve hata vermiyor. Burada dikkat edilmesi gereken yer ise, biz bu düzenli ifademizin içerisine herhangi bir başlangıç veya bitiş belirtmedik. Yani istediğimiz kadar rakam, harf girebiliriz. Yeter ki bu metnin içerisinde bir tane a ile z arasında harf olsun. Şimdi isterseniz başlangıcı ve bitişi olan bir örnek gösterelim.

```html
<html>
<head>

<script type=text/javascript>

function fonk() {
    var metin=document.getElementById("input").value;  
    var regexp=/^[a-z]$/; //Başlangıç ve bitişi belirttik. Bu eşlenecek metin içerisinde sadece a ile z arasında bir karakter olması anlamına  geliyor.

    if(regexp.test(metin)){
        //Burada sorun yok.
    }else{
    alert("Girdiginiz deger formata uygun degil.");
    }
    
    }
</script>	
<body>
<input type="text" value="" onChange="fonk()" id="input"/>
</body>
</html>
```

Yukarıdaki örnek için gereken açıklamayı örnek içerisinde yaptım.

Şimdi isterseniz işi büyütüp kullanıcıdan bir e-mail adresi girmesini isteyelim.

```html
<html>
<head>

<script type=text/javascript>

function fonk() {
    var metin=document.getElementById("input").value;
    var regexp=/^[A-Za-z\d-_.]+@[A-Za-z\d-_.]+\.[A-Za-z]+$/; 

    if(regexp.test(metin)){
        //Burada sorun yok.
    }else{
    alert("Girdiginiz deger formata uygun degil.");
    }
    
    }
</script>	
</head>
<body>
<input type="text" value="" onChange="fonk()" id="input"/>    
</body>
</html>
```

Yukarıda ki örneği açıklamaya çalışalım. İlk başta ^ işareti ile karşılaştırma yapılacak yeri belirtiyoruz. Bundan sonra ayraçlar içerisinde A-Z a-z \d ve -_. ile bu yazılan karakterlerden herhangi birisinin olacağını söylüyoruz. Bunun yanında dikkat ederseniz + işareti var. Bu da bu ifadenin birden çok olabileceğini söylüyor. Bundan sonra bir @ işareti görüyoruz. Bu da yazdığımız yazıdan sonra bir @olması gerektiği anlamına geliyor. Sonra tekrar [A-Z a-z \d ve -_.] karakterlerini görüyoruz. \. ise bir nokta gelmesi geretiğini söylüyor. Yukarıda \'ın ne işe yaradığından bahsetmiştik. sonra A-Z ve a-z ifadesini görüyoruz. Burda dikkat etmemiz gereken \d olmaması. Yani as6d@asd6.com gibi bir ifade yazabiliyorken sondaki com yerine bir sayı veya -_. işaretlerinden birini koyamıyoruz.

Bunu birde alfanümerik karakterle yapalım.

```html
<html>
<head>


<script type=text/javascript>

	function fonk() {
    var metin=document.getElementById("input").value;
    var regexp=/^\w+@\w+\.\w+$/; 

    if(regexp.test(metin)){
        //Burada sorun yok.
    }else{
    alert("Girdiginiz deger formata uygun degil.");
    }
    
    }
</script>	
</head>
<body>
<input type="text" value="" onChange="fonk()" id="input"/>
</body>
</html>
```

Yukarıdaki örnekte bir üstteki örneğe çok benziyor. \w işareti A-Z, a-z, 0-9 veya _ işaretlerinden herhangi birisinin gelebileceğini belirtiyor. Yine + işaretini yanına koyarak bunun bir veya daha fazla olabileceğini belirtiyoruz.

Elimden geldiğince açıklayıcı olmaya çalıştım, bir sonraki yazımızda görüşmek ümidiyle, sevgiler..

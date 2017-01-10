---
layout: post
title: Fonksiyonlar
date: 2017-01-10 16:00:00
tags: [Javascript Fonksiyonlar,JS fonksiyonlar,Javascript dersleri]
comments: true
show-share: true
---

Merhabalar, dizilerden sonra bu konuyu öğrenmeye çalışacağız. Dizilerin içerisinde dizileri öğrenebilmemiz için mecburen fonksiyon kullanmamız gerekiyordu. Eğer orada anlamadıysanız bu konudan sonra bakabilirsiniz.

### Fonksiyon nedir ?

Belirli bir ismi olan, verdiğimiz parametrelere göre yazılan bir kod parçacığını çalıştıran, geriye bir değer döndürebilen yapıdır. Fonksiyonları çalıştırabilmemiz için bir yerden çağırmamız gerekir (fonksiyonAdi() şeklinde). JS'de tanımlanan her fonksiyon Function global nesnesinden türetilmiş bir nesnedir. İleriki derslerde bu konuya daha ayrıntılı bir şekilde yer vereceğim.

`function fonksiyonAdi(parametre1,parametre2...) {
// something
}`

Bu tanımlama da return anahtar kelimesini kullanmadım. Return geriye bir değer döndürmek için kullanılır. Örneğin return 1 dediğimizde fonksiyon geriye 1 değerini döndürecektir. Bir örnek yapalım.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>
	var geriyeDonenDeger=myFunction(5,10);
	alert(geriyeDonenDeger); //Ekrana 15 yazar.
	function myFunction(a,b) {
		return a+b; //Geriye değer döndürmeyebilirdikte.
	}
	
</script>
</body>
</html>
```

Fonksiyon aşağıdaki gibi de tanımlanabilir.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>

	var test=function(a,b) {
		return a+b;
	}
	alert(test(2,3));
</script>

</body>
</html>
```

JS'de tanımlanan her fonksiyonun Function global nesnesinden türetilmiş bir nesne olduğunu söylemiştik. Function global nesnesi dediğimiz de bir metot aslında. Bu demek oluyor ki aşağıda ki gibi de tanımlanabilir. Nesne olayını daha sonra ayrıntılı göreceğimizden bu tanıma çok takılmanıza gerek yok. Bunun örneği de :

`var ornek=new Function("parametre1","parametre2","fonksiyonGovdesi");`

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>

var ornek=new Function("parametre1","parametre2","document.write(parametre1+\" \"+parametre2)");
    
    
	ornek("talha","kum");
</script>

</body>
</html>
```

### Fonksiyon Nesnelerinin Özellikleri

Daha önce bütün fonksiyonların Function kurucusundan türemiş olduğunu söylemiştik. Fonksiyonlar Function kurucusundan türediği için ona ait olan metotlara ve özelliklere de erişebilir. Şimdi o metotlara ve özelliklere değinelim.

Bu tanımlamalarda zorlananlar olabilir, tavsiyem bu noktada sorun yaşıyorsanız bir sonraki konuda işleyeceğimiz nesne yönelimli programlama dersinden sonra bakmanızdır.

* Arguments Özelliği

Arguments bizim fonksiyonu çağırırken verdiğimiz parametrelere erişebilmemize olanak sağlar. Örneğin fonksiyona verdiğimiz 1. parametreye erişebilmemiz için arguments[0]'ı kullanırız. Örnek verirsek:

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>

	function myFunction(a,b) {
		alert(arguments[0]+"-"+arguments[1]); // Aynı zamanda argümanları değiştirebilirsiniz de.
	
	}
	myFunction(3,5);
	
</script>

</body>
</html>
```

* Caller Özelliği

Eğer bir fonksiyondan başka bir fonksiyonu çağırırsak, çağrılan fonksiyondan, fonksiyonadi.caller.arguments[index] şeklinde çağırdığımız fonksiyonun argümanlarına erişebiliriz.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>

	var ornek=function() {
		document.write(ornek.caller.arguments[0]+"-"+ornek.caller.arguments[1]); //islem fonksiyonunun argümanlarına eriştik.
	
	}
	function islem(x,y) {
		ornek();
	}
	islem(10,20);
</script>

</body>
</html>
```

* Length Özelliği

Bir fonksiyona verilen parametre sayısını bulmamıza olanak sağlayan özelliktir.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>

	
	function islem(x,y) {
		document.write(arguments.length); // 2 Çıktısını verecektir.
		return x+y;
	} 
	var b=islem(10,20);
	</script>
</body>
</html>
```

### JS'de Hazır Olarak Bulunan Metotlar

JavaScript'te daha önceden tanımlanmış bazı hazır metotlar vardır. Şimdi bunları inceleyelim.

* EVAL()

Eval fonksiyonu, kendisine parametre olarak verilen kısmı JS kodu olarak işler. Dikkat edilmesi gereken nokta, kendisine verilen parametrenin string olması gerekliliğidir. Örnek vermek gerekirse:

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>

	
	function islem(x,y) {
		document.write(x+y); 
	} 
	eval("var a=5; var b=10; islem(a,b)");
	</script>
	

</body>
</html>
```

* isNaN()

Bu metot da adından anlaşılacağı üzere parametre olarak verilen değerin bir sayı olup olmadığını bulmamıza yarıyor. Verilen değer bir sayı değilse geriye true değeri döndürür. NaN'ın açılımı Not a Number'dır.

```html
<html>
<head>
</head>
<body>

<script type=text/javascript>
	
	document.write(isNaN(848.853)); //Geriye false değeri döndürecektir.
	</script>
</body>
</html>
```

* isFinite()

Bu da aynı şekilde adından anlaşılacağı üzere parametre olarak verilen sayının tanımlı aralılarda (5E-324,1.79E+308) olup olmadığını bulmamıza yarıyor.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>

	
	document.write(isFinite(1.79e+308)); //true
	document.write(isFinite(1.79e+309)); //false
	document.write(isFinite("hello"));   //sayı olmadığından false
	</script>
</body>
</html>
```

* ESCAPE() VE UNESCAPE()

Escape metodu bizim parametre olarak verdiğimiz değeri URL'e çevirmek için kullanılıyor. Unescape metodu da bu URL'e çevrilmiş değeri çözmek için kullanılıyor.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>

	
	var test=escape("hello world!");
	document.write(test+"<br>");
	var uns=unescape(test);
	document.write(uns);
	</script>
</body>
</html>
```

* parseInt()

Kendisine verilen string tipindeki parametreyi tam sayıya çevirmek için kullanılır. Burada karıştırılmaması gereken parametreyi Number veri türüne değil sadece tam sayıya dönüştürmesidir. (Noktalı, farklı tabanlardaki sayılarla dönüşüm yapılmaz.)

<p align="center"> parseInt(metin); </p>
<p align="center"> parseInt(metin,taban); </p>

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>

	document.write(parseInt("10") + "<br>");
document.write(parseInt("10.00") + "<br>");
document.write(parseInt("10",10)+ "<br>");
document.write(parseInt("10",8)+ "<br>");
document.write(parseInt("0x10")+ "<br>");
document.write(parseInt("10",16)+ "<br>");

</script>
</body>
</html>
```

* parseFloat()

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>
document.write(parseFloat("10") + "<br>"); 
document.write(parseFloat("10.00") + "<br>");
document.write(parseFloat("10.33") + "<br>");
document.write(parseFloat("34 45 66") + "<br>"); // 34 çıktısı verir.
document.write(parseFloat(".64")+""); //0.64
document.write(parseFloat("10e-2")); //0.1
</script>
</body>
</html>
```

* NUMBER() VE STRİNG()

Son olarak da adından anlaşılacağı üzere verilen parametreye göre geriye string veya number veri tipinde değer döndüren metotlarımız var. Bununda örneklerini verelim:

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>

	
	document.write(String(5.5)+"5"+"<br>");
	document.write(Number("5.5")+5);
</script>
</body>
</html>
```

Bu yazımız bu kadar, bir sonraki yazıda görüşmek ümidiyle..


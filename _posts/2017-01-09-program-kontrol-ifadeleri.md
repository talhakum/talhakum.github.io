---
layout: post
title: Program Kontrol İfadeleri
date: 2017-01-09 22:00
tags: [Javascript dersleri,javascript if else,javascript kontrol ifadeleri,javascript for döngüsü,javascript while]
comments: true
show-share: true
---

Merhabalar, bu yazımızda koşul ifadeleri ve döngülerden bahsetmeye çalıcağım. Yine bir önceki yazı gibi, herhangi bir programlama diline hakim olan birisinin buraya göz gezdirmesi yeterli olacaktır.

### Program Kontrol İfadesi nedir ?

Bir şarta bağlı olarak programın akışını değiştirmek istediğimizde koşul ifadelerine ihtiyaç duyarız. Örneğin ışık kapalıysa ışığı yak gibi. Döngüleri ise yine bir şart durumuna göre belli bir kod parçacığını bir veya daha fazla çalıştırmak için kullanırız.

## Koşul İfadeleri

Bir şarta göre bloklar ( {,} ) arasındaki kodların icra edilmesine olanak sağlar. Şart durumundan geriye dönen değer True ise bloklar arasındaki kodu icra eder, False ise içeri girmez. Her birisinden çok basit olacak şekilde örnek vermeye çalışacağım.

* IF

`if(condition) {`
`...`
`}`

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var number1=10;
	if(number1<20) { // < operatörünü bir önceki dersimizde görmüştük.
		document.write("Number1, 20'den kucuktur.");
	}
</script>
</body>
</html>
```
* IF - ELSE

Eğer if ifadesinin içerisindeki değer false değeri döndürürse else blokları arasındaki kod parçacığının çalışmasına olanak sağlar. Yani eğer if'in içerisindeki değer doğruysa içeri gir, eğer değilse else'e gir.

`if(condition) {`
`}`
`else {`
`}`

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var number1=10;
	if(number1<5) {
		document.write("Number1, 5'den kucuktur.");
	}
	else {
		document.write("Number1, 5'ten buyuktur.");
	}

</script>
</body>
</html>
```

* IF .. ELSE IF .. ELSE

Burada da birden çok koşula bağlı bir yapı görüyoruz arkadaşlar. Yani bizim 1'den çok if'imiz var. 1. if'den başlayarak koşulları test eder, eğer true döndüren bir yapı olursa içeri dallanır, olmazsa bir üstte gördüğümüz gibi else'e dallanır.

`if(condition1) {`
`}`
`else if(condition2){`
`}`
`else {`
`}`

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var number1=10;
	if(number1<5) {
		document.write("Number1, 5'den kucuktur.");
	}
	else if(number1<=10) {
		document.write("Number1, 5 ile 10 arasindadir.");
	}
	else {
		document.write("Number1, 10'dan buyuktur.");
	}

</script>
</body>
</html>
```

* SWİTCH

İf .. else if .. else ile aynı semantiğe sahiptir. Sadece çok koşul gerektiren durumlarda kullanmak işe yarar. Sınıfta hocamızın verdiği bir örnek: Telefonla bir işletmeyi aradığımızı düşünelim. Karşımıza telesekreter çıkıyor ve bize seçenekler sunuyor. 1- Teknik destek almak istiyorum, 2-Hız sorunu yaşıyorum gibi. 1'i seçerse karşısına yine bazı seçenekler geliyor. 1-Modem ile ilgili sorun yaşıyorum. 2-Telefon ile ilgili sorun yaşıyorum gibi.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var gun="sali";
	switch(gun) {
		case "pazartesi":
			document.write("Haftanin ilk gunu.");
		break;
		case "sali":
			document.write("Haftanin ikinci gunu.");
			break;
		case "carsamba":
			document.write("Haftanin ucuncu gunu.");
			break;
		case "persembe":
			document.write("Haftanin dorduncu gunu.");
			break;
		case "cuma":
			document.write("Haftanin besinci gunu.");
			break;
		case "cumartesi":
			document.write("Haftanin altinci gunu.");
			break;
		case "pazar":
			document.write("Haftanin yedinci gunu.");
			break;	

	}

</script>
</body>
</html>
```

## Döngüler

Daha önce tanımını verdiğimiz gibi, bir veya birden çok şarta göre belirli bir kod parçacığını istediğimiz kadar çalıştırmak için kullanılır.

* For

`for(başlangıç(lar); koşul(lar); arttırma/azaltma(lar) etc.) {`
`}`

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var i;
	var b;
	for(i=1,b=0; i<100; i+=i,b++) {
		document.write("2^"+b+"  ="+i+"<br>"); //<br> etiketi alt satıra geçmek için kullanılır.
	}                                          //Burada 2 başlangıç,2 koşul, 2 artırma yaptık.
</script>                                      //İstersek 1 veya 2'den fazla da yazabilirdik.
</body>                                        // (,)'ün ne işe yaradığından daha önce bahsetmiştik.
</html>
```

* WHİLE

While döngüsünde kod ya da kod parçacıkları, tanımlanan şart true değer ürettiği sürece çalıştırılır.

`while(condition) {`
`}`

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var x=10;
	while(0<x) {
		document.write(x); //X 0'dan büyük olduğu sürece 0'a kadar ekrana x'in değerini yazdıracaktır.
		x--;
	}

</script>
</body>
</html>
```

* DO.. WHİLE

While döngüsü ilk önce koşul testi yapıp bloklar arasındaki kodu icra eder, ancak do while ifadesi ilk önce döngüye girer, 1 kez çalıştırdıktan sonra koşulu test eder.

`do {`

`}while(condition);`

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var i;
	i=prompt("Bir sayi giriniz: ");
	do{
		document.write(i+"<br>");
		i--;
	}while(0<i);
</script>
</body>
</html>
```

* For .. In Döngüsü

Bir nesne içerisindeki nesnelere veya dizinin elemanlarına sıralı olarak erişmemizi sağlayan döngüdür.

Her iterasyonda verdiğimiz bir nesnenin sırasıyla özellikleri veya yine sırasıyla dizinin index numarası elde edilir. Bu biraz karmaşık gelebilir aşağıya örnek ekledim. Sorunuz olursa yorum kısmına yazabilirsiniz arkadaşlar.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var dizi=[2,3,4,5,3,7,8,9];
	var nesne={x:10,y:20,z:30}; // Daha önce gösterdiğimiz Object veri türünün içine  özellikler atanmıştır. Buradaki verilere nesne.özellik şeklinde erişebiliyoruz. İlerleyen konularda ayrıntılı bir şekilde değineceğiz.

	for(var a in dizi) {
		document.write(dizi[a]+"<br>"); // Bildiğimiz foreach döngüsünden biraz farklı.
	}

	for(var b in nesne) {
		document.write(nesne[b]+"<br>"); // Daha önce Object veri türünden bahsetmiştik. Normalde nesne.özellik şeklinde elemanlara erişiyorduk ancak burada biraz farklı.
	}
</script>
</body>
</html>
```

## Döngülerde Kullanılan Anahtar Kelimeler

* break

Aslında yukarıda switch-case örneğinde yaptığımız gibi döngüden çıkmak için kullanılan anahtar kelimedir.

* continue

Yorumlayıcı continue'yi gördüğü anda o andaki iterasyonu pas geçer, döngünün ilk satırından itibaren kodu icra etmeye devam eder.

Bu yazımız da bu kadar, bir sonraki yazımız diziler olacak, görüşmek dileğiyle..


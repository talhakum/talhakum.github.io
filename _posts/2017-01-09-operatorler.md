---
layout: post
title: Operatörler
date: 2017-01-09 21:00
tags: [Javascript'te Operatörler, Javascript dersleri, Operatörler]
comments: true
show-share: true
---

Merhabalar, bu yazımızda JavaScript'te operatörlerden bahsedeceğiz. Aslında farklı bir programlama dili bilen birisinin bu sayfaya göz gezdirmesi yeterli olacaktır.

### Operatör nedir ?

Bir deyim ya da ifadede önceden tanımlanmış görevleri yerine getiren karakter ya da karakter gruplarına operatör deniyor.

Bu başlık altında 11 adet operatör grubu göstermeye çalışacağım.

#### 1-Aritmetik Operatörler

&nbsp;

<table border="1">
<tbody>
<tr>
<th><span style="color: #000000;">Operatör</span></th>
<th><span style="color: #000000;">Açıklama</span></th>
</tr>
<tr>
<td><span style="color: #000000;">+</span></td>
<td><span style="color: #000000;">Toplama Operatörü(Aynı zamanda string'leri birleştirme olarak da kullanılır. ("İs"+"tan"+"bul") gibi)</span></td>
</tr>
<tr>
<td><span style="color: #000000;">-</span></td>
<td><span style="color: #000000;">Çıkarma Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">*</span></td>
<td><span style="color: #000000;">Çarpma Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">/</span></td>
<td><span style="color: #000000;">Bölme Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">%</span></td>
<td><span style="color: #000000;">Mod Alma Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">++</span></td>
<td><span style="color: #000000;">Artırma Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">--</span></td>
<td><span style="color: #000000;">Azaltma Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">-</span></td>
<td><span style="color: #000000;">Eksi Operatörü</span></td>
</tr>
</tbody>
</table>

#### 2-Karşılaştırma Operatörleri

&nbsp;

<table border="1">
<tbody>
<tr>
<th><span style="color: #000000;">Operatör</span></th>
<th><span style="color: #000000;">Açıklama</span></th>
</tr>
<tr>
<td><span style="color: #000000;">==</span></td>
<td><span style="color: #000000;">Eşitlik Operatörü <code style="background-color: #373d44; color: white; padding: 2px 4px; font-family: Consolas; border-radius: 5px;">Eşitlik sınaması yapıldığında tür dönüşümü gerçekleşir. Örneğin "1"==1-->True değeri döndürür.</code></span></td>
</tr>
<tr>
<td><span style="color: #000000;">===</span></td>
<td><span style="color: #000000;">Katı Eşitlik Operatörü <code style="background-color: #373d44; color: white; padding: 2px 4px; font-family: Consolas; border-radius: 5px;">Eşitlik sınaması yapıldığında tür dönüşümü gerçekleşmez. Örneğin "1"==1-->False değeri döndürür. </code></span></td>
</tr>
<tr>
<td><span style="color: #000000;">!=</span></td>
<td><span style="color: #000000;">Eşitsizlik Operatörü<code style="background-color: #373d44; color: white; padding: 2px 4px; font-family: Consolas; border-radius: 5px;">Eşitlik sınaması yapıldığında tür dönüşümü gerçekleşir. Örneğin "1"!=1-->False değeri döndürür. </code></span></td>
</tr>
<tr>
<td><span style="color: #000000;">!=</span></td>
<td><span style="color: #000000;">Katı Eşitsizlik Operatörü<code style="background-color: #373d44; color: white; padding: 2px 4px; font-family: Consolas; border-radius: 5px;">Eşitlik sınaması yapıldığında tür dönüşümü gerçekleşmez. Örneğin "1"!=1-->True değeri döndürür. </code></span></td>
</tr>
<tr>
<td><span style="color: #000000;">></span></td>
<td><span style="color: #000000;">Büyüktür Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;"><</span></td>
<td><span style="color: #000000;">Küçüktür Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">>=</span></td>
<td><span style="color: #000000;">Büyük Eşit Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;"><=</span></td>
<td><span style="color: #000000;">Küçük Eşit Operatörü</span></td>
</tr>
</tbody>
</table>

> Burada tür dönüşümü olarak söylenen şey bir veri türünün başka bir veri türüne otomatik olarak çevrilmesidir. Örnek olarak aşağıya ekledim.

&nbsp;

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var a=3;
	var b="talha";
	var c=a+b; //String ile Number veri türü toplanamayacağından a,
	document.write(c); // String veri türüne dönüştürülüp ekrana "3talha" yazısını yazar.
</script>
</body>
</html>
```

#### 3- Mantıksal Operatörler

&nbsp;

<table border="1">
<tbody>
<tr>
<th><span style="color: #000000;">Operatör</span></th>
<th><span style="color: #000000;">Açıklama</span></th>
</tr>
<tr>
<td><span style="color: #000000;">&&</span></td>
<td><span style="color: #000000;">Mantıksal Ve Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">||</span></td>
<td><span style="color: #000000;">Mantıksal Veya Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">!</span></td>
<td><span style="color: #000000;">Mantıksal Değil Operatörü</span></td>
</tr>
</tbody>
</table>

#### 4- Bitsel Operatörler

&nbsp;

<table border="1">
<tbody>
<tr>
<th><span style="color: #000000;">Operatör</span></th>
<th><span style="color: #000000;">Açıklama</span></th>
</tr>
<tr>
<td><span style="color: #000000;">&</span></td>
<td><span style="color: #000000;">Bitsel Ve(AND) Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">|</span></td>
<td><span style="color: #000000;">Bitsel Veya(OR) Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">^</span></td>
<td><span style="color: #000000;">XOR Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">~</span></td>
<td><span style="color: #000000;">NOT Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;"><<</span></td>
<td><span style="color: #000000;">Left Shift Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">>></span></td>
<td><span style="color: #000000;">Right Shift Operatörü</span></td>
</tr>
</tbody>
</table>

#### 5- Atama Operatörleri
&nbsp;
<table border="1">
<tbody>
<tr>
<th><span style="color: #000000;">Operatör</span></th>
<th><span style="color: #000000;">Açıklama</span></th>
</tr>
<tr>
<td><span style="color: #000000;">=</span></td>
<td><span style="color: #000000;">Değer Atama Operatörü</span></td>
</tr>
<tr>
<td><span style="color: #000000;">+=</span></td>
<td><span style="color: #000000;">Toplama Ataması</span></td>
</tr>
<tr>
<td><span style="color: #000000;">-=</span></td>
<td><span style="color: #000000;">Çıkarma Ataması</span></td>
</tr>
<tr>
<td><span style="color: #000000;">*=</span></td>
<td><span style="color: #000000;">Çarpma Ataması</span></td>
</tr>
<tr>
<td><span style="color: #000000;">/=</span></td>
<td><span style="color: #000000;">Bölme Ataması</span></td>
</tr>
<tr>
<td><span style="color: #000000;">%=</span></td>
<td><span style="color: #000000;">Kalan Ataması</span></td>
</tr>
<tr>
<td><span style="color: #000000;"><<=</span></td>
<td><span style="color: #000000;">Left Shift Ataması</span></td>
</tr>
<tr>
<td><span style="color: #000000;">>>=</span></td>
<td><span style="color: #000000;">Right Shift Ataması</span></td>
</tr>
<tr>
<td><span style="color: #000000;">&=</span></td>
<td><span style="color: #000000;">AND Ataması</span></td>
</tr>
<tr>
<td><span style="color: #000000;">|=</span></td>
<td><span style="color: #000000;">OR Ataması</span></td>
</tr>
<tr>
<td><span style="color: #000000;">^=</span></td>
<td><span style="color: #000000;">XOR Ataması</span></td>
</tr>
</tbody>
</table>

#### 6- Özel Operatörler

* **Conditional Operator** 

Conditional Operator olarak tanımlanan if ifadesinin kısaltılmış formudur diyebiliriz.

`<değişken> (koşul) ? atama1 : atama2;`

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
var x=20;
var y=(x<21)? "X 21'den küçüktür" : "X 21'den büyüktür.";
document.write(y); // Ekrana X 21'den küçüktür yazısını verecektir.
</script>
</body>
</html>
```

> Not: document.write() ifadesi ekrana bir yazı yazdırmak için kullanılmaktadır.

&nbsp;

* **Comma  Operator** 

Örnek olarak bir for döngüsünün içinde iki koşul tanımlaması yapmak için kullandığımız (,) operatörüdür.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
var j=10;
for(var i=0; i<10; i++,j--) {
alert("i="+i+"\n"+"j="+j); //Deneyebilirsiniz.
}
</script>
</body>
</html>
```

* **Delete   Operator** 

Bir nesneyi, nesnenin bir özelliğini veya dizinin bir elemanını silmek için kullanılır.


```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
var object={x:10,y:20};
delete object.x;
document.write(object.x); // Ekrana undefined yazısı verecektir.
</script>
</body>
</html>
```

* **IN    Operator** 

Bir nesnenin bir özelliğe sahip olup olmadığını kontrol etmek için kullanılır.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
var object={x:10,y:20};
var b="x" in object;
document.write(b); //ekrana true değeri döndürecektir.
</script>
</body>
</html>
```

* **TypeOf     Operator** 

Bir değişkenin türünü öğrenmek için kullanılır.

```javascript
var a=10.50;
alert(typeof(a)); // Ekranda Number yazısını görürüz.
```

* **Void      Operator** 

Geriye hiçbir değer döndürülmesini istemediğimiz yerlerde kullanırız.

### OPERATÖRLERİN ÖNCELİK SIRASI

Burada da operatörlerin öncelik sırası var. Yukarıdan aşağıya doğru öncelik sırası azalıyor.

<table border="1">
<tbody>
<tr>
<th><span style="color: #000000;">Operatörler</span></th>
</tr>
<tr>
<td><span style="color: #000000;">. []</span></td>
</tr>
<tr>
<td><span style="color: #000000;">() new</span></td>
</tr>
<tr>
<td><span style="color: #000000;">! ~ - + ++ --</span></td>
</tr>
<tr>
<td><span style="color: #000000;">* / %</span></td>
</tr>
<tr>
<td><span style="color: #000000;">+ -</span></td>
</tr>
<tr>
<td><span style="color: #000000;"><< >></span></td>
</tr>
<tr>
<td><span style="color: #000000;">< <= > >= in instanceof</span></td>
</tr>
<tr>
<td><span style="color: #000000;">== != === !==</span></td>
</tr>
<tr>
<td><span style="color: #000000;">&</span></td>
</tr>
<tr>
<td><span style="color: #000000;">^</span></td>
</tr>
<tr>
<td><span style="color: #000000;">|</span></td>
</tr>
<tr>
<td><span style="color: #000000;">&&</span></td>
</tr>
<tr>
<td><span style="color: #000000;">||</span></td>
</tr>
<tr>
<td><span style="color: #000000;">?:</span></td>
</tr>
<tr>
<td><span style="color: #000000;">= += -= /= %= <<= >>= ^= |=</span></td>
</tr>
<tr>
<td><span style="color: #000000;">, (En Düşük Öncelik)</span></td>
</tr>
</tbody>
</table>

Bu yazımız da bu kadar, bir sonraki konumuz program kontrol ifadeleri olacak. Görüşmek dileğiyle..

---
layout: post
title: JavaScript'te Değişkenler ve Veri Türleri
date: 2017-01-09 18:00
tags: [JavaScript,Javascript'te değişkenler,Javascript veri türleri,Javascript dersleri]
comments: true
show-share: true
---

Merhabalar, bu dersimizde JavaScript'te değişken tanımlamasını ve veri türlerini irdeleyeceğiz.

#### JavaScript'te Değişkenler

Genelde programlama dillerinde değişken tanımlarken aşağıdaki syntax söz konusudur.

 
 <p align="center"> < veri_türü > < degisken_adi > = < deger > </p>
  

Bu syntax JS'de geçerli değildir. JS'de veri türü, çalışma zamanında yorumlanarak (interpretation) dinamik olarak belirlenir. Bunun yanında değişken tanımlarken diğer dillerdeki kurallar tabidir. Örneğin JS de Case Sensitivity (büyük küçük harfe duyarlı) bir dildir.

#### Değişken tanımlamak

JS de tanımlayacağımız değişkenin veri tipi yorumlama (interpretation) anında belirlenmektedir. Biz var keyword'ünü kullanarak gerisini JS'nin yorumlayıcısına bırakıyoruz.

Örneğin ad diye bir değişken tanımlayalım ve değer ataması yapalım.

```javascript
var y=25;

var z=x+y;   

alert(z);                          //ekrana 25 çıktısını verecektir.
```

Bir de şundan bahsetmek gerekiyor. JavaScript'te değişken olarak tanımlanamayacak bazı keyword'ler (Reserved Words) vardır. Onların listesi de resimdeki gibidir:

<p align="center">
  <img src="https://raw.githubusercontent.com/talhakum/talhakum.github.io/master/img/js2.png"/>
</p>

#### Veri Türleri

Tarayıcının dinamik olarak veri türünü belirlediğini söylemiştik. Şimdi bu veri türlerine bakalım.

##### 1- Number Veri Türü

Tam ve ondalıklı sayıları tutmak için kullanılan genel veri türüdür. IEEE 754 formatı ile standartlaştırılmıştır. Bu konuyu merak edenler yazdığım bu yazıyı okuyabilirler. number veri türü aslında daha sonraki derslerde göreceğimiz Number nesnesinden türemiş bir nesnedir.

Number veri türüne ondalıklı sayı, 10, 8, 16'lık tabanda sayılar atamanız mümkündür. 8 tabanında sayı atamak için başına 0, 16'lık tabanda sayı atamak için 0x koymanız gerekir. Örnek olarak koda bakabilirsiniz.
```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
var ondalikli=12.9;
var tamsayi=20;
var sekizli=012;
var onaltili=0xA;
alert(ondalikli+"\n"+tamsayi+"\n"+sekizli+"\n"+onaltili);
</script>
</body>
</html>
```

<p align="center">
  <img src="https://raw.githubusercontent.com/talhakum/talhakum.github.io/master/img/js3.png"/>
</p>

##### 2- Boolean Veri Türü

Mantıksal veri türüdür. True veya false alabilir.

```javascript
var case=true;
```

##### 3-String Veri Türü

Atayacağımız değişken tek tırnak (' ') veya çift tırnak (" ") arasına alındığında değişkenimizin türü String olarak belirlenmektedir.


```javascript
var ad="talha";
```


##### 4- Undefined Veri Türü

var keyword'ü ile bir değişken tanımlanıp değer atanmadıysa veri türü undefined olarak görülecektir.

```javascript
var value;                                  //Değer ataması yapılmadı.
alert(value);
```

<p align="center">
  <img src="https://raw.githubusercontent.com/talhakum/talhakum.github.io/master/img/js4.png"/>
</p>

##### 5-Null Veri Türü

Undefined veri türünde herhangi bir işlem yapmaya çalıştığımızda NaN (Not a Number)hatası alırız. Ancak null veri türü ataması yapıp herhangi bir işlem yapmaya çalıştığımızda bu hatayı almayız. Dinamik olarak tür dönüşümü gerçekleşir. Örnek vermek gerekirse:

```javascript
var x=null;

var y=25;

var z=x+y;   

alert(z);                          //ekrana 25 çıktısını verecektir.
```
<p align="center">
  <img src="https://raw.githubusercontent.com/talhakum/talhakum.github.io/master/img/js5.png"/>
</p>

> Not: Undefined ve Null veri türleri special veri türü olarak adlandılır.

##### 6-Object Veri Türü

Bir değişkene özellik ve metotlara sahip bir nesne atandığında, bu değişkenin veri türü object olur.

Veri türlerimiz bu kadar. Bazı karakterleri string formatında özel anlanmarı vardır. (') , (") gibi. Bunlardan kurtulmak için Escape Character dediğimiz ters slash kullanılır. Aşağıda listesini görebilirsiniz.

<p align="center">
  <img src="https://raw.githubusercontent.com/talhakum/talhakum.github.io/master/img/js6.png"/>
</p>

Bu yazımız bu kadar. Bir sonraki derste operatörlerden devam edeceğiz.

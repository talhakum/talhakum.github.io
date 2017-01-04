---
layout: post
title: Kayan Noktalı Sayılar
subtitle: Floating point numbers
date: 2017-01-04 14:18:00
tags: [IEEE 754, Kayan Noktalı Sayılar, Bilgisayarın Temelleri,KTÜ]
comments: true
show-share: true
---

1.Sınıfta gördüğümüz bir derste geçen ve benim çok ilgimi çeken bir konu da Kayan Noktalı Sayılar’dı. Burada bu konu hakkında Türkçe kaynağın yetersizliğinden dolayı bildiklerimi paylaşacağım. Öncelikle tanımından başlayalım.

#### Kayan Noktalı Sayılar nedir ?

En basit tabiriyle noktalı sayıların bilgisayar tarafından anlaşılması için bir standart haline getirilmesidir. Elimizde -1453 sayısının olduğunu düşünelim. Bunu 2’lik sisteme `1111 1111 1111 1111 1111 1010 0101 0011` şeklinde dönüştürebiliriz. Ancak iş noktalı sayılara  gelince biraz değişiyor.

Noktalı sayıların gösterimi IEEE 754 ile standartlaştırılmıştır. Bu standarda göre aşağıda göreceğiniz gibi en anlamlı bit Sign yani işaret bitidir. Sayımız pozitif ise burası `0`, negatif ise `1` olacaktır. Exponent kısmı ise sayımızı bilimsel gösterime çevirdikten sonra oluşan üst kısmına `127` eklenmiş halidir. Mantissa ise (resimde fraction olan kısım) noktadan sonraki kısımdır. Örnekte daha iyi anlayacağız.


  <p align="center">
 [![Demo](https://raw.githubusercontent.com/talhakum/talhakum.github.io/master/img/floating.png)](https://github.com/talhakum/talhakum.github.io/tree/master/img)
</p>



Elimizde `50.25` sayısı olsun. Bu sayıyı bildiğimiz yöntemle `110010.01` olarak 2’lik sisteme dönüştürüyoruz. Bununla ilgili sorun yaşayanların buraya bakmasını tavsiye edeceğim. Bu elimizdeki sayıyı bilimsel şekilde yazarsak  `1.1001001 x 2^5` elde ederiz. Şimdi buradaki üst’e yani `5`‘e `127` ekliyoruz. `132` sayısı ( `1000 0100` ) bizim Exponent kısmımız oldu.

Geriye kaldı Mantissa ve Sign biti. Sayımız pozitif olduğundan Sign biti de `0` oluyor. Mantissa’da daha önce dediğimiz gibi noktadan sonraki sayımız. Yani `0110010`. Mantissaa kısmı 23 bit olduğundan geri kalan kısmı `0` ile dolduruyoruz.

Sonuç olarak sayımız `0 10000100 10010010000000000000000` oldu.

>Not: Burada Exponent’i bulmak için `127` eklememizin sebebini merak etmiş olabilirsiniz. Bu standartda  Exponenti bulmak için `2^(w-1)-1` formülü kullanılıyor. 32 bit için w yerine 8 geliyor. Nihayetinde `2^7-1=127` çıkıyor.

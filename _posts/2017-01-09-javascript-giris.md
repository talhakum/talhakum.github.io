---
layout: post
title: JavaScript'e giriş - JavaScript nedir ?
date: 2017-01-09 13:10
tags: [JavaScript,Javascript dersleri,JS tutorials,JavaScript giriş]
comments: true
show-share: true
---

Merhabalar, normalde JavaScript ile ilgili Türkçe dökümanların mevcut olmasına rağmen çeşitlilik olması ve Türkçe kaynaklara katkımız olması için JavaScript ile ilgili bildiklerimi sizinle paylaşacağım. İlk önce tanımından başlayalım.

#### JavaScript nedir ?

JavaScript temel olarak tarayıcının kullanıcıyla iletişimde bulunması amacıyla ortaya çıkmış tarayıcının kontrol edilmesi, asenkron bir şekilde sunucu ile iletişime geçilmesi ve web sayfası içeriğinin değiştirilmesi gibi işlevler sunan nesne yönelimli bir betik dilidir. Html’in içine gömülür, tarayıcı tarafından yorumlanır. JavaScript Node.js gibi kütüphaneler sayesinde sunucu tarafında da kullanılmaktadır. Günümüzde ihtiyaca göre kullanılan çok farklı JavaScript kütüphaneleri mevcuttur. Bunlara örnek olarak AngularJS, jQuery, Node.js, Ember.js verilebilir. Sanılanın aksine Java ile JavaScript’in syntax dışında bir benzerliği yoktur.

#### Giriş

Ben yazılarımda JavaScript geliştirmek için notepad++ kullanacağım arkadaşlar. Siz istediğiniz IDE’yi kullabilirsiniz. notepad++ açık kaynaklı bir yazılım olduğundan tercih ediyorum. [Buradan](https://notepad-plus-plus.org/download/v6.9.2.html) indirebilirsiniz. Yazılarımda temel html ve css bilgilerinizin olduğu varsayılacaktır. Bu konuda sorun yaşanların da [buraya](https://www.w3schools.com/html/) bakmalarını tavsiye edeceğim.

#### JavaScript’in HTML5 belgesi içerisine dahil edilmesi

JavaScript’i html dosyamızda kullanabilmemiz için 2 yöntem mevcuttur. 1. si < script> </script> etiketleri arasına kodlarımızı yazarak, 2. si < script src=”ornek.js”>< /script> şeklinde link vererektir.

1. `< script type=”text/javascript”> < /script>`
2. `< script src=”ornek.js”> < /script>`

Projemize göre 2’sininde avantajlı olduğu durumlar olabilir. Ancak bir JS dosyası oluşturup bunun uzantısını .js olarak kaydedip bu dosyaya 2. yöntemdeki gibi link vererek ulaşmak bu JS dosyamıza farklı dosyalardan da erişilebilme olanağı sağlayacaktır. Bu şekilde koddan ve zamandan tasarruf etmiş oluruz.

Bir örnek olarak aşağıya resim de ekledim.

<p align="center">
  <img src="https://raw.githubusercontent.com/talhakum/talhakum.github.io/master/img/js1.png"/>
</p>

>Not: Resimdeki 1. kullanımda src niteliğiyle JS dosyasını kullanabilmemiz için .html uzantılı dosyamızla aynı klasörde "jsornek.js" adında bir dosyanın olması gerekmektedir.

İlk yazımız bu kadar arkadaşlar. 2. yazımızda değişkenler ve veri türlerinden devam edeceğiz. Eklenmesini istediğiniz şeyler olursa yorum kısmına yazabilirsiniz.

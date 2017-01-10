---
layout: post
title: Hata Yönetimi (Exception Handling)
date: 2017-01-10 18:00:00
tags: [Javascript hata yönetimi,Javascript try catch,Javascript exception handling]
comments: true
show-share: true
---

Selamlar, bu yazıda diğer programlama dillerinde de mevcut olan hata yönetimi (Exception Handling) yapısının JavaScript'te nasıl kullanıldığını aktarmaya çalışacağım.

### Hata Yönetimi Nedir ?

Bazen bir program yazarken yazdığımız kodda hata verebilecek yerleri belirtmek isteriz. Burada amaç, belirtilen yerin hata vermesi durumunda programın çökmeden, akışına devam etmesini sağlamaktır. Bu işi de try-catch blokları denen yapı ile sağlarız.

#### try-catch Yapısı

Adında da belli olan try, program akışında hata verebilecek kod parçacıklarını içerisine yazdığımız kısımdır.

Aynı şekilde catch de hata oluşması durumunda çalıştırılmasını istediğimiz kodların olduğu bölümdür.

`try {`
`}`
`catch(error) {`
`}`

Hemen bir örnek yaparak try-catch yapısını kavramaya çalışalım.

```html
<html>
<head>
<script type="text/javascript">
try {

	document.write(a);

}
catch(error) {
document.write(error);
}
</script>
</head>
<body>
</body>
</html>
```

Yukarıdaki örnekte try bloğu içerisinde yazdırmaya çalıştığımız a değişkeni, tanımlanmadığı için hata verecektir. Catch'e parametre olarak verdiğimiz error, hatanın türünü tutan nesnedir. Farklı bir şey de yazılabilir.

#### throw

Try bloğu içerisinde, program akışı esnasında istediğimiz zaman programın hata vermesini istiyorsak throw anahtar kelimesini kullanıyoruz.

`throw "exception";`

```html
<html>
<head>
<script type="text/javascript">
try {

	document.write("Hello<br>");
	throw "hata";
	document.write("World!")
}
catch(error) {
document.write(error);
}
</script>
</head>
<body>
</body>
</html>
```

#### finally

İster hata olsun ister olmasın çalıştırılacak kısımdır.

```html
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript">
	var a=0;
	function olay(event) {
	try {
	var x=document.getElementById("ornek");
	var y=x.value;
		if(y=="gonder")
			throw ("hata!");

			document.write("Hata yok!");
	}catch(error) {
		document.write(error);
	}
	finally{
	document.write("<br>Hata olsun olmasın çalışacak komut.");
	}

	}

</script>
</head>
<body>
<form>
<input id="ornek"  onchange="olay(event)">
</form>
</body>
</html>
```

Yukarıdaki örnekte bir input aracılığıyla kullanıcıdan veri alınıyor. Bu alınan veriye eğer "gonder" yazılırsa bir throw oluşturulup catch bloğu, akabinde finally bloğu çalışıyor. Şayet "gonder" yazılmazsa "Hata yok!" yazısı ardından finally bloğu çalışıyor.

Bu dersimizde try-catch-finally bloklarının kullanımını öğrenmiş olduk. Bir sonraki derste görüşmek dileğiyle..


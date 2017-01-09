---
layout: post
title: Kayan Noktalı Sayılar
subtitle: Floating point numbers
date: 2017-01-04 14:18:00
tags: [IEEE 754, Kayan Noktalı Sayılar, Bilgisayarın Temelleri,KTÜ]
comments: true
show-share: true
---

Merhabalar, bu yazımızda JavaScript'te dizilerden bahsetmeye çalışacağız. Bilenlerimiz vardır, normalde dizi tanımlaması "aynı türde değişkenleri bir arada tutmamızı sağlayan yapı" olarak geçer. Ancak JS de bu yine söz konusu değildir. Yani JS'de farklı türde değişkenleri aynı dizide tutabilme imkanına sahibiz.

JS de diziler Array global nesnesinden türetilmiş birer nesnedir. Bu bağlamda diziler Array nesnesinin de özellik ve metotlarına sahip olur. Birazdan bu metotlara değineceğiz.

### Dizileri Tanımlamak

1. var dizi = new Array(); Bu tanımlamada dizinin uzunluğunu belirtmiyoruz.
2. var dizi = new Array(length); Bu tanımlamada dizinin uzunluğunu belirtiyoruz.

### Diziye değer atamak

#### 1. Yol

Dizilere değer atamak için ilk yolumuz index kullanaraktır. Dizilerin ilk elemanı 0. index'ten başlar. Ve index sayılarını kullanarak diziye istediğiniz kadar değer atabilirsiniz.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi = new Array();
	dizi[0]="t";
	dizi[1]="a";
	dizi[2]="l";          //        1. Tanımlama da verdiğimiz kullanım.
	dizi[3]="h";
	dizi[4]="a";
	document.write(dizi); //Ekrana talha yazacaktır.
	
	var dizi2 = new Array(3);
	dizi2[0]="k";
	dizi2[1]="u";         //        2.Tanımlama da verdiğimiz kullanım.
	dizi2[2]="m";
	document.write(dizi2); // Ekrana kum yazacaktır.
	
    </script>

</body>
</html>

```

`Not:` Dizinin uzunluğunu dizi.length kullanımıyla bulabilirsiniz. Örneğin yukarıdaki örnek için dizi.length; ekrana 5 yazdıracaktır.

#### 2. Yol

Dizilere değer atamak için 2. yol ise dizinin tanımlandığı satırda dizi elemanlarını belirtmemizdir.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi = new Array("t","a","l","h","a");
	document.write(dizi);
    
</script>
</body>
</html>
```

#### 3. Yol

JS'de dizi tanımlamak için en son yol da bazı kitaplarda geçen Array Literali yapısını kullanmakdır. Diğer dillerde olduğu gibi köşeli parantezleri kullanarak ( [ ] ) dizilere değer atabiliriz.

`var dizi = [value1,value2,value3...];`

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi = ["t","u","r",1,2,0x65,"o","n","e","m","s","i","z",065];
	document.write(dizi);
    
</script>
</body>
</html>
```

Şimdi diziyle ilgili birkaç örnek verelim.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi = ["t","u","r",1,2,0x65,"o","n","e","m","s","i","z",065];
	
	for(var c in dizi) {
		document.write(dizi[c]+""); // for in döngüsünden daha önce bahsetmiştik.
	}
	</script>


</body>
</html>
```

### Dizi Metotları

Burada diziler için özel olarak tanımlanmış metotlara değineceğiz. En güzel öğrenme şekli denemek olduğundan kısa açıklamalarını yazıp örnek vereceğim.

Burada diziler için özel olarak tanımlanmış metotlara değineceğiz. En güzel öğrenme şekli denemek olduğundan kısa açıklamalarını yazıp örnek vereceğim.

* POP()

Dizi içerisindeki en son elemanı siler ve silinen elemanı geriye döndürür. Bir nevi FIFO (queue) yapısı gibi düşünebiliriz. Veri yapılarına giren bu konuyu merak edenlerin burayı okumasını tavsiye edeceğim.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi = ["t","u","r",1,2,0x65,"o","n","e","m","s","i","z",065];
	
	var silinendeger=dizi.pop();
	document.write("Silinen deger: "+silinendeger+"<br/>"); // Random sayılar urettigimiz icin cikti her zaman degisecektir.
	document.write("Yeni dizi: "+dizi);
    
</script>
</body>
</html>
```

* PUSH

Bir dizinin sonuna bir veya daha fazla eleman eklemek amacı ile kullanılır. Geriye yeni oluşan dizinin uzunluğunu döndürür.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var dizi = ["t","u","r",1,2,0x65,"o","n","e","m","s","i","z",065];
	
	var yeniDizi=dizi.push(99);
	document.write("Dizinin yeni uzunlugu: "+yeniDizi);
	</script>
</body>
</html>
```

* Shift()

Dizi içerisindeki ilk elemanı siler. Geriye sildiği elemanın değerini döndürür. Bu da bir nevi FIFO yapısıdır.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi = ["t","u","r",1,2,0x65,"o","n","e","m","s","i","z",065];
	var silinenDeger=dizi.shift();
	document.write("Silinen deger: "+silinenDeger+"<br/>");
	document.write("Yeni dizi: "+dizi);
		</script>
</body>
</html>
```

* Unshift()

Bu da dizinin başına eleman eklemek için kullanılıyor. Geriye yeni oluşan dizinin uzunluğunu döndürür.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi = ["t","u","r",1,2,0x65,"o","n","e","m","s","i","z",065];
		document.write("Dizinin eski uzunlugu: "+dizi.length+"<br>");

	var yeniUzunluk=dizi.unshift(10);
	document.write("Yeni dizi: "+dizi+"<br>");
	document.write("Dizinin yeni uzunlugu "+yeniUzunluk);
		</script>
</body>
</html>
```

* Reverse()

Bu metot dizi elemanlarının sıralaması ters çevirir. Geriye yeni oluşan diziyi döndürür.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi = ["t","u","r",1,2,0x65,"o","n","e","m","s","i","z",065];
	var yeniDizi=dizi.reverse();
	document.write("Yeni dizi: "+yeniDizi);
    
</script>
</body>
</html>
```

* Sort()

Dizi içerisindeki elemanları sıralar. Ancak sıralama yaparken her zaman alfabetik-artan şekilde değil değerlerin Unicode karşılıklarını kullanır.

1. dizi.sort();
2. dizi.sort(CompareNumber);

Unicode karşılığında tam olarak ne demek istiyoruz ? Bunu bir örnekle gösterelim.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var dizi=new Array(7,100,5,65,32,1);
	document.write("Onceki dizi:"+dizi+"<br>");
	dizi.sort();
	document.write("Yeni dizi "+dizi+"<br>");
	document.write("Dizinin yeni uzunlugu "+yeniUzunluk);
	</script>
</body>
</html>
```

Normalde çıktının sıralı olmasını beklerdik. Ancak göreceksiniz ki sıralı olmayacak. Bunun sebebine gelirsek, ilk başta dizide 7 ile 1 karşılaştırılıyor. 1 sayısının Unicode değeri 49, 7 sayısının unicode değeri 55 olduğundan dizi sıralamasında 100 7'den önce gelmektedir. Unicode değerlerinin listesine [buradan](https://en.wikipedia.org/wiki/List_of_Unicode_characters) bakabilirsiniz.

Şimdi de gelelim yukarıdaki 2. yola. Parametre olarak verilen compareNumber bir sayı değil, fonksiyondur. Bu fonksiyonu biz kendimiz tanımlayacağız. Fonksiyonun adı user-define yani istediğiniz adı verebilirsiniz. Peki fonksiyonun içinde ne olacak ?

Fonksiyon 2 parametre almalıdır. Geriye ya a-b döndürür. Ya da b-a. Eğer a-b şeklinde yaparsınız fonksiyon artan bir şekilde sıralama yapılmasına olanak sağlayacaktır. Eğer b-a şeklinde olursa fonksiyon azalan şekilde sıralama yapacaktır. Daha iyi anlayabilmemiz için örnek vereceğim.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi=new Array(7,1,5,65,32,100);
	document.write("Onceki dizi:"+dizi+"<br>");
	dizi.sort(artanSirala);
	document.write("Artan sekilde siralanmis dizi "+dizi+"<br>");
	dizi.sort(azalanSirala);
	document.write("Azalan sekilde siralanmis dizi "+dizi);

	function artanSirala(a,b) {
		return a-b;
	}
	function azalanSirala(a,b) {
		return b
	}
</script>
</body>
</html>
```

* Splice()

Diziye verdiğimiz başlangıç indexinden başlayarak istediğimiz kadar eleman silmemize ve istersek de yeni eleman eklememize olanak sağlar.

1. dizi.splice(baslangicIndexi, silinecekIndexSayisi);
2. dizi.splice(baslangicIndexi, silinecekIndexSayisi,yeniEleman1,yeniEleman2,...);

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi=new Array(7,1,5,65,32,100);
	document.write("Onceki dizi:"+dizi+"<br>");
	dizi.splice(1,2);
	document.write("Yeni dizi: "+dizi+"<br>"); // Diziye yeni eleman eklenmeden kullanım.
	document.write("Mevcut dizi:"+dizi+"<br>");
	dizi.splice(0,2,3,4,5,6);
	document.write("Yeni dizi:"+dizi); // Diziye yeni eleman eklenerek kullanım.
</script>
</body>
</html>
```

* indexOf

Dizinin içerisinde verilen parametreyi arar ve geriye bulduğu elemanın indexini döndürür. İstersek nereden aramaya başlayacağını da belirtebiliriz.

1. dizi.indexOf(aranacakIndex);
2. dizi.indexOf(aranacakIndex, baslangicIndexi);

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi=new Array(7,1,5,65,32,100);
	var index=dizi.indexOf(5);
	document.write("Bulunan index: "+index);
	
	var index=dizi.indexOf(5,3);
	document.write("Bulunan index: "+index); //-1 degeri dondurmesinin sebebi 3. den basladigi zaman 5 sayısını bulamamasidir.
</script>
</body>
</html>
```

* lastIndexOf

Yukarıdaki işlemin aynısıdır aslında. Tek farkı dizide, aranacak değerden 2 veya daha fazla olduğu zaman indexOf sayıyı ilk bulduğu indexi geriye döndürür, lastIndexOf en sonda bulduğu indexi geriye döndürür.

* forEach()

Bu metot kendisine parametre olarak verdiğimiz bir fonksiyonu, dizinin her elemanı için çalıştırır.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi=[2,3,4,5,3,7,8,9];
	var toplam=0;
	document.write("dizi icerisindeki elemanlar: ");
	document.write(dizi+"");
	dizi.forEach(carp);
	document.write("<br>dizi elemanlari 2 ile carpildi: "+dizi);
	dizi.forEach(topla);
	document.write("<br>dizi elemanlarin toplami: "+toplam);
	
	
	function carp(element,index,array) {
	array[index]=2 * element;
	}
	
	
	function topla(element,index,array) {
		toplam+=element;
	}
	</script>
</body>
</html>
```

* Every()

Bu da aslında yukarıdaki metoda çok benziyor. Sadece bu metodun geriye true veya false bir değer döndürmesi lazım. Eğer dizi elemanlarını fonksiyona gönderirken bir false değeri dönerse geri kalan elemanları fonksiyona göndermez.

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">

	var dizi=[2,3,4,5,3,7,8,9,10];
	document.write(dizi+"<br>");
	dizi.every(test);
	document.write("index no: "+indexx+", degeri= "+dizi[indexx]);
	function test(element, index, array) {
	indexx=index;             
			return element 
    }
</script>
</body>
</html>
```

* Some()

Bu metot da yukarıdaki metodun tam tersidir, yani yukarıdaki fonksiyon false değeri görene kadar dizi üzerindeki elemanları fonksiyona gönderirken bu metot true değeri görene kadar dizi üzerindeki elemanları fonksiyona gönderiyor.

* Filter()

Every() metoduna çok benzer, sadece false değeri döndürse bile dize üzerindeki elemanları fonksiyona göndermeyi durdurmaz. En önemli özelliği fonksiyona gönderilen elemanlardan geriye true değeri döndürenleri yeni bir diziye atayıp geriye döndürmesidir.

* Map()

Bu da filter metoduna çok benzer, sadece geriye false veya true değeri döndürmez, geriye döndürülen değerlerden yeni bir dizi oluşturur ve bunu geriye döndürür.

* Concat()

Kendisine parametre olarak verilen elemanları diziye ekler.

* Join()

Parametre olarak verilen bir string'i, dizi elemanları arasına ekleyerek geriye string bir dizi döndürür.

* Slice()

Bu metoda 2 aralık parametresi veriyoruz, bu aralıklar arasındaki elemanlardan yeni bir dizi oluşturup geriye döndürür.

* toString()

Dizi elemanlarını string'e çevirir

### Çok Boyutlu Diziler

Yine diğer dillerde olduğu gibi köşeli parantezleri kullanarak çok boyutlu dizi oluşturabiliriz. Bir matrisin satır ve sütunları gibi düşünebilirsiniz. İlk açtığımız köşeli parantez satırları, ikinci açtığımız köşeli parantez sütunları belirtir. Dizi elemanlarına dizi[i][j] şeklinde erişiriz. İ satırı j sütunu temsil etmekte. Örnek vermek gerekirse:

```html
<html>
<head>
</head>
<body>
<script type="text/javascript">
	var dizi=[[1,2,9],[3,4,5],[6,7,8]];
	for(var i=0; i<3; i++) {
        for(var j=0; j<3; j++) {
            
        document.write(dizi[i][j])    
            }
	}
</script>
</body>
</html>
```

Dizileri burada bitiyorum, sorunuz varsa yorum kısmına yazabilirsiniz. Bir sonraki derste görüşmek dileğiyle..



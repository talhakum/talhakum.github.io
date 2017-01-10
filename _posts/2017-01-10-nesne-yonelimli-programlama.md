---
layout: post
title: Nesne Yönelimli Programlama
date: 2017-01-10 16:38:00
tags: [Javascript nesne yönelimli programlama,javascript nyp, javascript dersleri]
comments: true
show-share: true
---

Merhabalar, JavaScript'te fonksiyonlar yazımızdan sonra bu ders JS'de Nesne Yönelimli Programlamaya (Object Oriented Programming) değineceğiz. Günümüzde çoğu programlama dilinin desteklediği bu yaklaşım JS'de de mevcut. Öncelikle tanımından başlayalım.

### Nesne Yönelimli Programlama nedir ?

NYP kısaca açıklamak gerekirse sınıf-nesne ilişkisinden doğmuş, bilgi gizleme (information hiding), veri soyutlama (data abstraction), çok biçimlilik (polymorphism) ve kalıtım (inheritance) özellikleriyle yazılım dünyasına katkıda bulunan bir yaklaşımdır. Biz sadece JavaScript'te NYP üzerinde duracağız.

JavaScript NYP'de olan aşağıdaki kavramları desteklemektedir:

1. Class (Sınıf)
2. Object (Nesne)
3. Constructor (Yapıcı Metot)
4. Property (Özellik)
5. Method (Metot)
6. Inheritance (Kalıtım)

### Nesne Oluşturmak

Öncelikle bir nesnenin nasıl oluşturulacağını gösterelim. Aslında daha önce Object nesnesini kullanarak oluşturmuştuk.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>
	
	var nesne={x:12,y:20,z:"z ozelligi"}; //Nesne tanımlamak için 1. ve en basit yol. Ayraçlar bizim nesneyi kısa yoldan (Dizilerde ki [ ] gibi) oluşturmamıza olanak sağlar.
	document.write(nesne.x+"<br>");
	
	var nesne2=new Object(); // Burada nesne2 adında Object global nesnesinden bir nesne oluşturduk.
	nesne2.yazdir=function() {
		return 15;
	}
	document.write(nesne2.yazdir());
</script>	
</body>
</html>
```

### JavaScript'te Sınıf Tanımlamak

NYP kavramında sınıf(Class), bir nesnenin özelliklerini ve davranışlarını belirlemek için kullanılan yapıdır. Örnek olarak insan diye bir nesnemiz olsun. İnsanın nefes almak, su içmek gibi özelliklerinin tanımlandığı kavram sınıftır. Bu sınıfta örneğin Memeliler olabilir. JavaScript'te sınıf kavramı ise diğer dillerde olan Class anahtar kelimesiyle değil constructor (yapıcı metot) sayesinde tanımlanır. Yani bir önceki konumuzda anlattığımız fonksiyonları kullanarak sınıf tanımlayacağız. Constructor, bir nesne tanımlarken vereceğimiz parametler sayesinde özelliklere ilk değer atamak için kullanılır.

Şimdi kendi oluşturduğumuz bir sınıftan nesne tanımlayalım. Bunun için new anahtar kelimesini kullanacağız.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>
	var sinif=function() {  // Bu, Constructor dediğimiz Yapıcı Metot. Sınıf da diyebiliriz.
	this.x=10;
	
		}
	var nesne=new sinif(); // "sinif" sınıfımızdan(yapıcı metottan) bir nesne oluşturduk. Yapıcı Metodun parametre almadığına dikkat ediniz.
	
	document.write(nesne.x);
</script>
</body>
</html>
```

Bu benim gibi başka dillerle uğraşanlara biraz farklı gelebilir.

Şimdi yukarıdaki örnekte this anahtar kelimesinin ne olduğunu tahmin etmişsinizdir. This anahtar kelimesi yapıcı metotdan oluşturduğumuz nesnenin referansını tutmak için kullanılır. Yani this aslında "nesne" adındaki nesnemizdir diyebiliriz. Bu nesneye özellik atamış olduk. Ve bu özelliği ekrana yazdırdık. Bir nesneye nasıl özellik atandığını öğrenmiş olduk. Şimdi de bir nesneye nasıl fonksiyon ekleneceğini gösterelim.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>
		var sinif=function() {  
		this.x=10;
		this.fonk=function() { // Bu seferde this anahtar kelimesini kullanarak nesnemize bir fonksiyon eklemiş olduk. İstersek buna parametre de ekleyebilirdik.
			return 15;
		}
			}
		var nesne=new sinif(); // "sinif" sınıfımızdan(yapıcı metottan) bir nesne oluşturduk. Yapıcı Metodun parametre almadığına dikkat ediniz.
		
		document.write(nesne.fonk());
  </script>
</body>
</html>
```
  
  Şimdi de örnek olsun diye yapıcı metodumuza parametre gönderecek şekilde bir nesne tanımlaması yapalım.
  
  ```html
  <html>
<head>
</head>
<body>
<script type=text/javascript>
		
		var sinif=function(taban,yukseklik) {  
		this.taban=taban;
		this.alan=function() { // Bu seferde this anahtar kelimesini kullanarak nesnemize bir fonksiyon eklemiş olduk. İstersek buna parametre de ekleyebilirdik.
			return taban*yukseklik/2;
		}
			}
		var nesne=new sinif(12,24); 
		document.write(nesne.alan()+"<br>");
		document.write(nesne["taban"]); // İstersek bu şekilde de nesne elemanlarına erişmemiz mümkündür.
</script>	
	
</body>
</html>
  ```
  
  şu an aslında JS'de nesne-sınıf ilişkisini öğrenmiş olduk. Şimdi biraz daha derinlere inelim.
  
* Prototype Kullanımı

JavaScript'te sıklıkla kullanılan prototype anahtar kelimesi, belleğin daha verimli kullanılmasına imkan sağlar.

Normalde prototype değişkenler ve sınıflar için kullanılabilir. Ancak ben burada sadece sınıflar için kullanımından bahsedeceğim. Prototype'ı sınıfın dışında bir sınıf gibi düşünebiliriz. Elimizde bir sınıfımız var. Ancak buna bir metot eklemek istiyoruz. Yalnız öyle bir durum var ki, bu eklediğimiz metoda sadece bir nesne için ihtiyaç duyuyoruz. Yani bu metodu 1 kere kullanacağız. İşte bu durumda prototype anahtar kelimesini kullanarak bir sınıf oluşturmak işimize gelecektir. Örnek yaparak daha iyi anlayabileceğimizi düşünüyorum.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>	
		
		var sinif=function(taban,yukseklik) {  
		this.taban=taban;
		this.yukseklik=yukseklik;
		}
		sinif.prototype.alan=function() { 
			
			return this.taban*this.yukseklik/2;
		}
		var nesne=new sinif(12,24);
		document.write(nesne.alan());
        
</script>
</body>
</html>
```

Gördüğünüz gibi prototype anahtar kelimesini kullanarak bir metot oluşturduk. Peki bu metodu zaten var olan sınıfımız içinde kullanamaz mıydık ?

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>	
		
		var sinif=function(taban,yukseklik) {  
		this.taban=taban;
		this.yukseklik=yukseklik;
		this.alan=function() {
			
			return this.taban*this.yukseklik/2;
		}
		}
		
		var nesne=new sinif(12,24);
		document.write(nesne.alan());
</script>	
</body>
</html>
```
  
Gördüğünüz gibi daha önce ki örneklerde yaptığımız gibi kullandık. Peki ne avantajı vardır bu protoype'ın ?

Prototype anahtar kelimesini kullanarak bellekte sadece 1 metodun yer tutacağını söyledik. Ancak böyle yapmasaydık, yani 2. örnekteki gibi yapsaydık oluşturulan her nesne için bu metot bellekte ayrı bir yer işgal etmiş olacaktı.

### JavaScript'te Kalıtım

NYP kavramlarından birisi de kalıtımdır(inheritance). Kalıtım, bir sınıfın başka bir sınıfın özelliklerini ve metotlarını kullanabilmesine imkan sağlayan yapıdır. Yukarıda örnek olarak Memeli sınıfından bahsetmiştik. Memelilerin de bir hayvan olduğunu varsayarak Memeliler sınıfının Hayvanlar sınıfından türediğini söyleyebiliriz.

JavaScript'te kalıtım için apply ve call adında bize yardımcı olan 2 metodumuz vardır. Bir örnek vererek, örnek üzerinden anlatmaya çalışacağım.
  
  ```html
 <html>
<head>
</head>
<body>
<script type=text/javascript>
		
		var sinif=function(t,y) {  
		this.t=t;
		this.y=y;
		this.alan=function() { 
			return t*y/2;
		}
			}
		var inherit=function(taban,yukseklik) {
			this.taban=taban;
			this.yukseklik=yukseklik;
			sinif.apply(this,arguments);
			
		}
		var nesne=new inherit(12,24); // dikkat ederseniz nesneyi sinif metodundan üretmedik.
		document.write(nesne.alan());
</script>			
</body>
</html>
```

inherit yapıcı metodunu (class'ını) kullanarak bir nesne ürettik. Görüldüğü gibi inherit metodu alan adında bir metodu barındırmıyor. Ancak biz ekrana nesne.alan() diye erişebildik. Bunu sağlayan yapı ise apply metodu. Apply metodu ilk parametresine this, ikinci parametresine arguments nesnesini alarak farklı bir metod çağırmak için kullanılır. Yani inherit metodu sinif nesnesinden türemiş oldu. Şimdi ise call metodunu gösterelim.

```html
<html>
<head>
</head>
<body>
<script type=text/javascript>
	
		
		var sinif=function(t,y) {  
		this.t=t;
		this.y=y;
		this.alan=function() { 
			return t*y/2;
		}
			}
		var inherit=function(taban,yukseklik) {
			this.taban=taban;
			this.yukseklik=yukseklik;
			sinif.call(this,taban,yukseklik);  //this anahtar kelimesinin yanında istediğimiz parametreleri verebiliriz.
			
		}
		var nesne=new inherit(12,24); //
		document.write(nesne.alan());
</script>	
</body>
</html>
```
  
Call metodu ise aslında apply'e çok benzer bir metod. Call metodunu apply metodundan ayıran özellik ise call metodunu istediğimiz parametre ile çağırabilmemizdir. Yani yanına daha fazla parametre de ekleyebilirdik. Tabi bu şekilde üst sınıfın constructor'ı parametreyi alamamış olacaktır.

Bu dersimizde JavaScript'te nesne yönelimli programlama kavramını elimden geldiğince anlatmaya çalıştım. Bir sonraki yazıda görüşmek dileğiyle..

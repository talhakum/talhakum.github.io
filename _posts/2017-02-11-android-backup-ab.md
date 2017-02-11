---
layout: post
title: Android'de Veri Yazılan Dosyaya Erişmek
date: 2017-02-11 20:30:00
tags: [Android,Android dosya yazma,Android dosyaya veri yazmak,Android backup.ab]
comments: true
show-share: true
---

Android'de dosyaya veri yazdıktan sonra eğer emülatör kullanmıyorsanız ve yazdığınız dosyayı harici depolama alanına kaydetmediyseniz bulmak zordur. Tabi dosyaya ulaşmak yerine çok daha basit olarak dosya okuması yapabilirsiniz.

İlk olarak bir dosyaya yazma işlemi gerçekleştirelim.

```java
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.activity_main);

        File dosya=new File(this.getFilesDir(),"example.txt");
        try {

            FileOutputStream oStream = new FileOutputStream(dosya);
            OutputStreamWriter oWriter=new OutputStreamWriter(oStream);
            oWriter.write("Android'de veri yazılan dosyaya erişmek\n");
            oWriter.write("Talha Kum");
            oWriter.close();
            oWriter.close();

        }
        catch (Exception e) {
            e.getStackTrace();
        }
    }
    }
```

Ardından komut satırından platform-tools klasörüne gelmeniz gerekiyor. Komut ekranına `adb shell` yazarak adb'yi açıyoruz. 
Şimdi `adb backup -noapk com.your.packagename` kendi paket adınız olacak şekilde giriniz.

Ardından Android cihazınıza aşağıdaki gibi bir bildirim gelecek.

 <p align="center">
  <img src="https://raw.githubusercontent.com/talhakum/talhakum.github.io/master/img/androidyedekleme.png"/>
</p>

Şifreyi boş bırakıp sağ altta bulunan "VERİLERİMİ YEDEKLE" seçeneğini seçebilirsiniz.

Ardından platforms-tools klasörünüze backup.ab isminde bir dosya eklenecek. Bu dosyayı açmak için ise [bu](https://sourceforge.net/projects/adbextractor/) aracı indirebilirsiniz. 




İndirdikten sonra abe.jar dosyasını çıkartın. Ardından yine komut satırından ```{r, engine='bash', count_lines}
java.exe -jar abe.jar unpack backup.ab test.tar ""
``` giriniz.

Aynı klasörde test isimli bir .tar dosyası göreceksiniz. Bunun içinde yazdığınız "example.txt" dosyasını görebilirsiniz.

İyi çalışmalar

const baseUrl = "{{ site.baseurl }}";

const json = {
    "title": "Çiğdem Quiz",
    "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    "completedHtmlOnCondition": [
      {
        "expression": "{correctAnswers} == 0",
        "html": "<h4>Maalesef, hiçbir cevabınız doğru değil. Lütfen tekrar deneyin.<br><video width='300' autoplay controls><source src="{{ 'assets/img/basarisiz.mp4' | relative_url }}" type='video/mp4'>Tarayıcınız videoyu desteklemiyor.</video></h4>"
      },
      {
        "expression": "{correctAnswers} == {questionCount}",
        "html": "<h4>Tebrikler! Bütün soruları doğru cevapladınız!<br><img src="{{ 'assets/img/bilge.png' | relative_url }}" style='max-width:300px;'></h4>"
      }
    ],
    "pages": [
      {
        "name": "intro",
        "elements": [
          {
            "type": "html",
            "name": "intro-text",
            "html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Çiğdem Quiz</title>\n    <style>\n        ul {\n            list-style-type: disc;\n            padding-left: 10px;\n        }\n    </style>\n</head>\n<body> \n<p style=\"margin-top: 1em; text-align: justify;\">\n  <strong>Çiğdem Quiz'e Hoş Geldiniz!</strong>\n</p>\n<p style=\"margin-top: 1em; text-align: justify;\">Bu quiz, Musical Doctrines of Çiğdem öğretilerine sadık kalarak oluşturulmuştur.\n<br>\n<br>\nBaşlamadan önce lütfen isminizi girin. Daha sonra, <b>Quiz'e Başla</b>'ya tıklayın.\n<br>\n<br>\İyi şanslar!</p>"
          },
          {
            "type": "text",
            "name": "username",
            "titleLocation": "hidden",
            "isRequired": true,
            "requiredErrorText": "Lütfen isminizi giriniz.",
            "maxLength": 25,
            "placeholder": "Çiğdem"
          }
        ]
      },
      {
        "name": "first-page",
        "elements": [
          {
            "type": "radiogroup",
            "name": "aittir",
            "title": "Aşağıdaki sözlerden hangisi Çiğdem Hoca'ya aittir?",
            "correctAnswer": "a",
            "choices": [
                {
                    "value": "a",
                    "text": "Beyer'siz piyano olur ama Czerny'siz olmaz"
                  },
                  {
                    "value": "b",
                    "text": "Her zaman ilk başta metronomla çalışmaya başlanır"
                  },
                  {
                    "value": "c",
                    "text": "Melodiyi öğrendikten sonra nüanslar daha kolaydır"
                  },
                  {
                    "value": "d",
                    "text": "Bir parça üzerinde çalışmaya başlarken iki el birlikte çalınır"
                  }
            ],
            "choicesOrder": "random",
            "colCount": 2
          }
        ]
      },
      {
        "name": "second-page",
        "elements": [
          {
            "type": "radiogroup",
            "name": "ait-degildir",
            "title": "Aşağıdaki sözlerden hangisi Çiğdem Hoca'ya ait değildir?",
            "correctAnswer": "d",
            "choices": [
              {
                "value": "a",
                "text": "Piyanoyu herkes çalabilir önemli olan ahenk, bağlar"
              },
              {
                "value": "b",
                "text": "Sonatin halay gibi bir tür"
              },
              {
                "value": "c",
                "text": "Her zaman ilk başta akıldan sayarak çalmaya başlanır, metronoma daha sonra geçilir"
              },
              {
                "value": "d",
                "text": "Parçayı hızlı tempo ile çalışmak daha faydalıdır"
              }
            ],
            "choicesOrder": "random",
            "colCount": 2
          }
        ]
      },
      {
        "name": "third-page",
        "elements": [
          {
            "type": "radiogroup",
            "name": "hangisi-dogrudur",
            "title": "Aşağıdakilerden hangisi doğrudur?",
            "correctAnswer": "a",
            "choices": [
                {
                    "value": "a",
                    "text": "Sonatin sadece piyanoda çalınır. Konçerto'da başka enstrümanla çalınmaz"
                  },
                  {
                    "value": "b",
                    "text": "Staccato'da bağ varsa sert basılır"
                  },
                  {
                    "value": "c",
                    "text": "Parçanın başında ayrıştırıcı işaret yoksa bu do major ya da mi minördür"
                  },
                  {
                    "value": "d",
                    "text": "Romantik dönemde sol el ile sağ el konuşuyor gibidir"
                  }
              ],
            "choicesOrder": "random",
            "colCount": 2
          },
        ]
      },
      {
        "name": "fourth-page",
        "elements": [
        {
            "type": "radiogroup",
            "name": "bemol-hangi-notada",
            "title": "Gamda yalnızca bir bemol varsa, o bemol hangi notadır?",
            "correctAnswer": "d",
            "choices": [
                {
                    "value": "a",
                    "text": "Do",
                    },
                    {
                    "value": "b",
                    "text": "Mi",
                    },
                    {
                    "value": "c",
                    "text": "Sol",
                    },
                    {
                    "value": "d",
                    "text": "Si",
                    }
                ],
            "choicesOrder": "random",
            "colCount": 2
            },
        ]
      },
      {
        "name": "fifth-page",
        "elements": [
            {
                "type": "radiogroup",
                "name": "minor",
                "title": "Bir major gamın minörünü bulmak istiyorsak kaç ses geri geliriz?",
                "correctAnswer": "a",
                "choices": [
                    {
                        "value": "a",
                        "text": "3"
                      },
                      {
                        "value": "b",
                        "text": "2"
                      },
                      {
                        "value": "c",
                        "text": "4"
                      },
                      {
                        "value": "d",
                        "text": "5"
                      }
                  ],
                "choicesOrder": "random",
                "colCount": 2
              },
        ]
      },
      {
        "name": "sixth-page",
        "elements": [
            {
            "type": "imagepicker",
            "name": "do-diyez-minor",
            "title": "Aşağıdakilerden hangisi do# minör gamıdır?",
            "correctAnswer": "a",
            "choices": [
                {
                    "value": "a",
                    "imageLink": baseUrl + "/assets/images/survey/do-diyez-minor.svg"
                  },
                  {
                    "value": "b",
                    "imageLink": baseUrl + "/assets/images/survey/re-diyez-minor.svg"
                  },
                  {
                    "value": "c",
                    "imageLink": baseUrl + "/assets/images/survey/sol-diyez-minor.svg"
                  },
                  {
                    "value": "d",
                    "imageLink": baseUrl + "/assets/images/survey/la-diyez-minor.svg"
                  }
              ],
            "choicesOrder": "random",
            "colCount": 2
          },
        ]
      },
      {
        "name": "seventh-page",
        "elements": [
            {
                "type": "html",
                "name": "gamin-adi-nedir-soru",
                "html": "Görseldeki gamın adı nedir?<br><img src="{{ 'assets/img/la-bemol-major.svg' | relative_url }}" style='max-width:300px;'>",
              },
              {
                "type": "radiogroup",
                "name": "gamin-adi-nedir-cevap",
                "title": "Seçenekler:",
                "correctAnswer": "b",
                "choices": [
                    {
                        "value": "a",
                        "text": "Do# Minör"
                      },
                      {
                        "value": "b",
                        "text": "La♭ Majör"
                      },
                      {
                        "value": "c",
                        "text": "Fa# Minör"
                      },
                      {
                        "value": "d",
                        "text": "Mi Majör"
                      }
                  ],
                "choicesOrder": "random",
                "colCount": 2
              }
        ]
      },
    ],
    "cookieName": "geography-quiz",
    "requiredText": "*",
    "requiredErrorText": "Lütfen bu soruyu cevaplayınız.",
    "pageNextText": "Sonraki",
    "pagePrevText": "Önceki",
    "showProgressBar": true,
    "progressBarLocation": "belowHeader",
    "progressBarType": "questions",
    "autoAdvanceAllowComplete": false,
    "startSurveyText": "Quiz'e Başla",
    "firstPageIsStartPage": true,
    "questionsOnPageMode": "standard",
    "showTimer": false,
    "headerView": "advanced",
  };
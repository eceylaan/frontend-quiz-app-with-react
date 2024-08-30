export const htmlQuestions = [
  {
    id: "1",
    ask: "HTML nedir?",
    choices: [
      { text: "Bir programlama dili", isCorrect: false },
      { text: "Web sayfalarının yapısal iskeletidir", isCorrect: true },
      { text: "Bir web tarayıcısı", isCorrect: false },
      { text: "Bir stil şeması dili", isCorrect: false },
    ],
  },
  {
    id: "2",
    ask: "HTML'de `<head>` etiketi hangi bilgileri içerir?",
    choices: [
      { text: "Sayfanın görünümüne dair stiller", isCorrect: true },
      { text: "Sayfa içeriği", isCorrect: false },
      { text: "Sayfanın başlığı", isCorrect: false },
      { text: "Sayfanın görsel içeriği", isCorrect: false },
    ],
  },
  {
    id: "3",
    ask: "HTML'de bir bağlantı oluşturmak için hangi etiket kullanılır?",
    choices: [
      { text: "<link>", isCorrect: false },
      { text: "<a>", isCorrect: true },
      { text: "<href>", isCorrect: false },
      { text: "<url>", isCorrect: false },
    ],
  },
  {
    id: "4",
    ask: "HTML'de form verilerini göndermek için hangi etiket kullanılır?",
    choices: [
      { text: "<form>", isCorrect: true },
      { text: "<input>", isCorrect: false },
      { text: "<button>", isCorrect: false },
      { text: "<submit>", isCorrect: false },
    ],
  },
  {
    id: "5",
    ask: "HTML'de bir resim eklemek için hangi etiket kullanılır?",
    choices: [
      { text: "<image>", isCorrect: false },
      { text: "<img>", isCorrect: true },
      { text: "<pic>", isCorrect: false },
      { text: "<photo>", isCorrect: false },
    ],
  },
  {
    id: "6",
    ask: "HTML'de başlık etiketleri hangi sıra ile kullanılır?",
    choices: [
      { text: "<h1> - <h6>", isCorrect: true },
      { text: "<header> - <footer>", isCorrect: false },
      { text: "<title> - <subtitle>", isCorrect: false },
      { text: "<section> - <article>", isCorrect: false },
    ],
  },
  {
    id: "7",
    ask: "HTML'de metin vurgulamak için hangi etiket kullanılır?",
    choices: [
      { text: "<highlight>", isCorrect: false },
      { text: "<strong>", isCorrect: true },
      { text: "<bold>", isCorrect: false },
      { text: "<emphasize>", isCorrect: false },
    ],
  },
  {
    id: "8",
    ask: "HTML'de liste oluşturmak için hangi etiket kullanılır?",
    choices: [
      { text: "<ul>", isCorrect: true },
      { text: "<div>", isCorrect: false },
      { text: "<li>", isCorrect: false },
      { text: "<list>", isCorrect: false },
    ],
  },
  {
    id: "9",
    ask: "HTML'de bir tablo başlığı eklemek için hangi etiket kullanılır?",
    choices: [
      { text: "<thead>", isCorrect: true },
      { text: "<table>", isCorrect: false },
      { text: "<caption>", isCorrect: false },
      { text: "<header>", isCorrect: false },
    ],
  },
  {
    id: "10",
    ask: "HTML'de yorum eklemek için hangi etiket kullanılır?",
    choices: [
      { text: "<!-- yorum -->", isCorrect: true },
      { text: "<comment>", isCorrect: false },
      { text: "<note>", isCorrect: false },
      { text: "<info>", isCorrect: false },
    ],
  },
];
export const cssQuestions = [
  {
    id: "1",
    ask: "CSS nedir?",
    choices: [
      { text: "Web sayfalarının içeriğini yönetir", isCorrect: false },
      { text: "Web sayfalarının görünümünü düzenler", isCorrect: true },
      { text: "JavaScript kodlarını çalıştırır", isCorrect: false },
      { text: "Veri tabanı işlemlerini yönetir", isCorrect: false },
    ],
  },
  {
    id: "2",
    ask: "CSS'te bir öğeye stil eklemek için hangi kural kullanılır?",
    choices: [
      { text: "selector { property: value; }", isCorrect: true },
      { text: "selector : property = value", isCorrect: false },
      { text: "selector => property : value", isCorrect: false },
      { text: "selector - property / value", isCorrect: false },
    ],
  },
  {
    id: "3",
    ask: "CSS'te bir öğenin arka plan rengini değiştirmek için hangi özellik kullanılır?",
    choices: [
      { text: "background-color", isCorrect: true },
      { text: "color", isCorrect: false },
      { text: "background-image", isCorrect: false },
      { text: "text-color", isCorrect: false },
    ],
  },
  {
    id: "4",
    ask: "CSS'te bir öğeyi ortalamak için hangi özellik kullanılır?",
    choices: [
      { text: "align", isCorrect: false },
      { text: "margin: auto", isCorrect: true },
      { text: "center", isCorrect: false },
      { text: "justify", isCorrect: false },
    ],
  },
  {
    id: "5",
    ask: "CSS'te bir öğenin font büyüklüğünü değiştirmek için hangi özellik kullanılır?",
    choices: [
      { text: "font-size", isCorrect: true },
      { text: "text-size", isCorrect: false },
      { text: "font-weight", isCorrect: false },
      { text: "text-style", isCorrect: false },
    ],
  },
  {
    id: "6",
    ask: "CSS'te bir öğeye kenarlık eklemek için hangi özellik kullanılır?",
    choices: [
      { text: "border", isCorrect: true },
      { text: "outline", isCorrect: false },
      { text: "margin", isCorrect: false },
      { text: "padding", isCorrect: false },
    ],
  },
  {
    id: "7",
    ask: "CSS'te hangi seçici, tüm öğelere stil ekler?",
    choices: [
      { text: "*", isCorrect: true },
      { text: "all", isCorrect: false },
      { text: "body", isCorrect: false },
      { text: "global", isCorrect: false },
    ],
  },
  {
    id: "8",
    ask: "CSS'te öğe seçici ile bir sınıfı nasıl seçersiniz?",
    choices: [
      { text: ".className", isCorrect: true },
      { text: "#className", isCorrect: false },
      { text: "className", isCorrect: false },
      { text: "*className", isCorrect: false },
    ],
  },
  {
    id: "9",
    ask: "CSS'te öğe üst üste bindirme (z-index) özelliği hangi tür değerler alabilir?",
    choices: [
      { text: "Pozitif ve negatif sayılar", isCorrect: true },
      { text: "Sadece pozitif sayılar", isCorrect: false },
      { text: "Yüzde değerler", isCorrect: false },
      { text: "Yalnızca renk değerleri", isCorrect: false },
    ],
  },
  {
    id: "10",
    ask: "CSS'te bir öğenin metin hizalamasını değiştirmek için hangi özellik kullanılır?",
    choices: [
      { text: "text-align", isCorrect: true },
      { text: "text-position", isCorrect: false },
      { text: "align-text", isCorrect: false },
      { text: "vertical-align", isCorrect: false },
    ],
  },
];
export const jsQuestions = [
  {
    id: "1",
    ask: "JavaScript nedir?",
    choices: [
      { text: "Bir stil dili", isCorrect: false },
      { text: "Bir programlama dili", isCorrect: true },
      { text: "Bir veri tabanı yönetim sistemi", isCorrect: false },
      { text: "Bir sunucu tarafı dili", isCorrect: false },
    ],
  },
  {
    id: "2",
    ask: "JavaScript'te bir değişken nasıl tanımlanır?",
    choices: [
      { text: "int variableName", isCorrect: false },
      { text: "let variableName", isCorrect: true },
      { text: "define variableName", isCorrect: false },
      { text: "set variableName", isCorrect: false },
    ],
  },
  {
    id: "3",
    ask: "JavaScript'te bir işlev nasıl tanımlanır?",
    choices: [
      { text: "function myFunction() {}", isCorrect: true },
      { text: "func myFunction() {}", isCorrect: false },
      { text: "define myFunction() {}", isCorrect: false },
      { text: "method myFunction() {}", isCorrect: false },
    ],
  },
  {
    id: "4",
    ask: "JavaScript'te bir dizi nasıl tanımlanır?",
    choices: [
      { text: "const myArray = [];", isCorrect: true },
      { text: "const myArray = {};", isCorrect: false },
      { text: "const myArray = new ArrayList();", isCorrect: false },
      { text: "const myArray = () => [];", isCorrect: false },
    ],
  },
  {
    id: "5",
    ask: "JavaScript'te `console.log()` ne işe yarar?",
    choices: [
      { text: "Ekrana veri yazdırır", isCorrect: true },
      { text: "Bir dosyaya veri yazar", isCorrect: false },
      { text: "Bir veri tabanına veri gönderir", isCorrect: false },
      { text: "Kullanıcıdan veri alır", isCorrect: false },
    ],
  },
  {
    id: "6",
    ask: "JavaScript'te bir olay dinleyicisi nasıl eklenir?",
    choices: [
      { text: "element.addEventListener('event', callback);", isCorrect: true },
      { text: "element.addFunction = callback;", isCorrect: false },
      { text: "element.attachEvent('event', callback);", isCorrect: false },
      { text: "element.addEvent('event', callback);", isCorrect: false },
    ],
  },
  {
    id: "7",
    ask: "JavaScript'te `parseInt()` fonksiyonu ne işe yarar?",
    choices: [
      { text: "Bir string değeri tam sayıya dönüştürür", isCorrect: true },
      { text: "Bir string değeri ondalıklı sayıya dönüştürür", isCorrect: false },
      { text: "Bir sayıyı string değere dönüştürür", isCorrect: false },
      { text: "Bir array oluşturur", isCorrect: false },
    ],
  },
  {
    id: "8",
    ask: "JavaScript'te bir nesne nasıl oluşturulur?",
    choices: [
      { text: "const myObject = {};", isCorrect: true },
      { text: "const myObject = [];", isCorrect: false },
      { text: "const myObject = ()=>{};", isCorrect: false },
      { text: "const myObject = ();", isCorrect: false },
    ],
  },
  {
    id: "9",
    ask: "JavaScript'te `this` anahtar kelimesi neyi temsil eder?",
    choices: [
      { text: "Fonksiyonun kendisini", isCorrect: false },
      { text: "Fonksiyonun çağrıldığı nesneyi", isCorrect: true },
      { text: "Global değişkenleri", isCorrect: false },
      { text: "Yalnızca sayıları", isCorrect: false },
    ],
  },
  {
    id: "10",
    ask: "JavaScript'te `let` ve `const` arasındaki fark nedir?",
    choices: [
      { text: "`let` değişkeni değiştirilebilir, `const` sabittir", isCorrect: true },
      { text: "`let` sadece global değişken tanımlar, `const` yerel değişken tanımlar", isCorrect: false },
      { text: "`let` bir nesne oluşturur, `const` bir dizi oluşturur", isCorrect: false },
      { text: "`let` değişkenleri yalnızca bir kez atanabilir, `const` birden fazla kez atanabilir", isCorrect: false },
    ],
  },
];
export const accessibilityQuestions = [
  {
    id: "1",
    ask: "Erişilebilirlik nedir?",
    choices: [
      { text: "Web sitelerinin sadece görsel kullanıcılar için optimize edilmesidir", isCorrect: false },
      { text: "Web sitelerinin tüm kullanıcılar için erişilebilir olmasını sağlamaktır", isCorrect: true },
      { text: "Yalnızca mobil cihazlar için erişilebilirliktir", isCorrect: false },
      { text: "Web sitelerinin sadece metin tabanlı tarayıcılara uyumlu hale getirilmesidir", isCorrect: false },
    ],
  },
  {
    id: "2",
    ask: "Ayrıca, web içeriğinde erişilebilirlik için hangi HTML özelliği kullanılır?",
    choices: [
      { text: "alt", isCorrect: true },
      { text: "title", isCorrect: false },
      { text: "href", isCorrect: false },
      { text: "class", isCorrect: false },
    ],
  },
  {
    id: "3",
    ask: "Aşağıdaki etiketlerden hangisi ekran okuyucular için önemli bir rol oynar?",
    choices: [
      { text: "<div>", isCorrect: false },
      { text: "<header>", isCorrect: true },
      { text: "<span>", isCorrect: false },
      { text: "<link>", isCorrect: false },
    ],
  },
  {
    id: "4",
    ask: "Erişilebilirlik için bir form alanı üzerinde hangi HTML özelliği kullanılmalıdır?",
    choices: [
      { text: "aria-label", isCorrect: true },
      { text: "alt", isCorrect: false },
      { text: "placeholder", isCorrect: false },
      { text: "role", isCorrect: false },
    ],
  },
  {
    id: "5",
    ask: "Bir bağlantının (link) erişilebilirliğini artırmak için hangi özellik önemlidir?",
    choices: [
      { text: "aria-label", isCorrect: true },
      { text: "src", isCorrect: false },
      { text: "alt", isCorrect: false },
      { text: "id", isCorrect: false },
    ],
  },
  {
    id: "6",
    ask: "Erişilebilirlik için bir butona ne eklemelisiniz?",
    choices: [
      { text: "aria-role", isCorrect: false },
      { text: "aria-label", isCorrect: true },
      { text: "src", isCorrect: false },
      { text: "placeholder", isCorrect: false },
    ],
  },
  {
    id: "7",
    ask: "Ekran okuyucular için görsel içeriğin açıklamasını sağlamak amacıyla hangi özellik kullanılır?",
    choices: [
      { text: "alt", isCorrect: true },
      { text: "title", isCorrect: false },
      { text: "class", isCorrect: false },
      { text: "style", isCorrect: false },
    ],
  },
  {
    id: "8",
    ask: "Bir web sayfasında, farklı görsel öğeleri gruplamak için hangi HTML etiketi kullanılır?",
    choices: [
      { text: "<article>", isCorrect: true },
      { text: "<img>", isCorrect: false },
      { text: "<header>", isCorrect: false },
      { text: "<footer>", isCorrect: false },
    ],
  },
  {
    id: "9",
    ask: "Aşağıdaki `aria` özelliğinden hangisi bir öğenin rolünü belirtir?",
    choices: [
      { text: "aria-label", isCorrect: false },
      { text: "aria-role", isCorrect: false },
      { text: "role", isCorrect: true },
      { text: "aria-hidden", isCorrect: false },
    ],
  },
  {
    id: "10",
    ask: "Bir sayfadaki tüm öğelerin erişilebilirliğini kontrol etmek için hangi araç kullanılabilir?",
    choices: [
      { text: "Ekran okuyucu", isCorrect: true },
      { text: "Tarayıcı geliştirici araçları", isCorrect: false },
      { text: "Web tarayıcısı eklentileri", isCorrect: false },
      { text: "SEO araçları", isCorrect: false },
    ],
  },
];

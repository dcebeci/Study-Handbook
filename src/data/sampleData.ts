import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'java',
    title: 'Java',
    topics: [
      {
        id: 'java-oop',
        title: 'Object-Oriented Programming (OOP)',
        categoryId: 'java',
        difficulty: 'Beginner',
        content: {
          overview: {
            en: 'Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods). The four main pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism.',
            tr: 'Nesne Yönelimli Programlama (OOP), verileri ve kodu içeren "nesneler" kavramına dayanan bir programlama paradigmasıdır. Veriler alanlar (özellikler veya nitelikler), kod ise prosedürler (metotlar) şeklinde bulunur. Dört ana temeli şunlardır: Kapsülleme (Encapsulation), Soyutlama (Abstraction), Kalıtım (Inheritance) ve Çok Biçimlilik (Polymorphism).'
          },
          whyExists: {
            en: 'OOP exists to solve the problems of procedural programming by making code more modular, reusable, and easier to maintain. It models real-world entities and their interactions, which helps in designing complex software systems logically.',
            tr: 'OOP, prosedürel programlamanın sorunlarını çözmek, kodu daha modüler, yeniden kullanılabilir ve bakımı kolay hale getirmek için vardır. Gerçek dünya varlıklarını ve etkileşimlerini modelleyerek karmaşık yazılım sistemlerinin mantıksal olarak tasarlanmasına yardımcı olur.'
          },
          howItWorks: {
            en: 'OOP works by defining Classes as blueprints and instantiating Objects from them. The JVM manages objects in the Heap memory. Object methods have an implicit reference (`this`) to the object they belong to. Method dispatch for overridden methods (Polymorphism) is handled dynamically at runtime (Dynamic Method Dispatch) using a virtual method table (vtable).',
            tr: 'OOP, Sınıfları (Class) taslak olarak tanımlayarak ve onlardan Nesneler (Object) örnekleyerek çalışır. JVM, nesneleri Heap belleğinde yönetir. Nesne metotları, ait oldukları nesneye örtük bir referansa (`this`) sahiptir. Geçersiz kılınan (overridden) metotlar için metot gönderimi (Polymorfizm), sanal metot tablosu (vtable) kullanılarak çalışma zamanında (Dynamic Method Dispatch) dinamik olarak işlenir.'
          },
          realWorldExample: {
            en: 'Banking System: A `BankAccount` class encapsulates the balance (data) and provides methods like `deposit()` and `withdraw()`. An abstract `Card` class can have derived classes like `CreditCard` and `DebitCard` (Inheritance & Abstraction). Paying with either card triggers the specific implementation of `processPayment()` (Polymorphism).',
            tr: 'Banka Sistemi: `BankAccount` sınıfı bakiyeyi (veri) kapsüller ve `deposit()` ve `withdraw()` gibi metotlar sunar. Soyut bir `Card` sınıfı, `CreditCard` ve `DebitCard` (Kalıtım ve Soyutlama) gibi türetilmiş sınıflara sahip olabilir. Herhangi bir kartla ödeme yapmak, `processPayment()` (Polymorfizm) metodunun spesifik uygulamasını tetikler.'
          },
          codeExample: {
            language: 'java',
            code: `// Encapsulation
public class BankAccount {
    private double balance; // Hidden data

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public double getBalance() {
        return balance;
    }
}

// Abstraction & Inheritance
abstract class Card {
    abstract void processPayment(double amount);
}

class CreditCard extends Card {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing credit payment: " + amount);
    }
}

class DebitCard extends Card {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing debit payment: " + amount);
    }
}`
          },
          interviewAnswer: {
            en: 'OOP is a paradigm based on objects containing data and methods. Its main pillars are Encapsulation (hiding data), Abstraction (hiding implementation details), Inheritance (reusing code through hierarchies), and Polymorphism (one interface, multiple implementations). It improves maintainability and scalability.',
            tr: 'OOP, veri ve metotlar içeren nesnelere dayanan bir paradigmadır. Ana temelleri; Kapsülleme (veriyi gizleme), Soyutlama (uygulama detaylarını gizleme), Kalıtım (hiyerarşiler aracılığıyla kodun yeniden kullanımı) ve Çok Biçimliliktir (tek arayüz, çoklu uygulama). Bakım kolaylığını ve ölçeklenebilirliği artırır.'
          },
          seniorExplanation: {
            en: 'While OOP is great for modeling business domains, overuse of inheritance leads to tight coupling (fragile base class problem). Favor composition over inheritance. Understand memory implications: excessive object creation causes GC pauses. Polymorphism relies on vtable lookups which have a slight performance overhead but provide great flexibility (Strategy pattern).',
            tr: 'OOP iş alanlarını modellemek için harika olsa da, kalıtımın aşırı kullanımı sıkı bağımlılığa (kırılgan temel sınıf sorunu) yol açar. Kalıtım yerine kompozisyonu (composition) tercih edin. Bellek etkilerini anlayın: aşırı nesne oluşturma GC duraklamalarına neden olur. Çok biçimlilik, hafif bir performans maliyeti olan ancak büyük esneklik sağlayan vtable aramalarına dayanır.'
          },
          commonQuestions: [
            {
              question: { en: 'What is the difference between Abstraction and Encapsulation?', tr: 'Soyutlama (Abstraction) ile Kapsülleme (Encapsulation) arasındaki fark nedir?' },
              answer: { 
                en: 'Encapsulation is about hiding the state (data) and providing controlled access via getters/setters (data hiding). Abstraction is about hiding the internal implementation details and showing only the essential features of an object (design level).',
                tr: 'Kapsülleme, durumu (veriyi) gizlemek ve getter/setter\'lar aracılığıyla kontrollü erişim sağlamakla (veri gizleme) ilgilidir. Soyutlama ise iç uygulama detaylarını gizleyip sadece temel özellikleri göstermekle (tasarım seviyesi) ilgilidir.'
              }
            }
          ],
          followUpQuestions: [
            {
              question: { en: 'Can you explain the fragile base class problem?', tr: 'Kırılgan temel sınıf (fragile base class) sorununu açıklayabilir misiniz?' },
              answer: {
                en: 'It happens in object-oriented systems where base classes are considered "fragile" because seemingly safe modifications to a base class can cause derived classes to malfunction. This is a primary reason to favor composition over inheritance.',
                tr: 'Nesne yönelimli sistemlerde, temel sınıflarda yapılan görünüşte güvenli değişikliklerin türetilmiş sınıfların arızalanmasına neden olabilmesidir. Bu durum kalıtım yerine kompozisyonun tercih edilmesinin temel nedenidir.'
              }
            }
          ],
          commonMistakes: {
            en: '1. Using inheritance just to reuse code (violates IS-A relationship). 2. Creating "God Objects" that do everything. 3. Making fields public instead of using Encapsulation.',
            tr: '1. Kalıtımı sadece kodu yeniden kullanmak için kullanmak (IS-A ilişkisini ihlal eder). 2. Her şeyi yapan "God Object"ler (Tanrı Nesneler) oluşturmak. 3. Kapsülleme kullanmak yerine alanları (fields) public yapmak.'
          },
          bestPractices: {
            en: 'Follow SOLID principles. Favor Composition over Inheritance. Program to interfaces, not implementations. Keep classes focused (Single Responsibility).',
            tr: 'SOLID prensiplerini takip edin. Kalıtım yerine kompozisyonu tercih edin. Somut sınıflara değil, arayüzlere (interface) göre programlama yapın. Sınıfların odaklı olmasını sağlayın (Tek Sorumluluk - Single Responsibility).'
          },
          performance: {
            en: 'Creating too many short-lived objects increases Garbage Collection overhead. Deep inheritance hierarchies can slow down method dispatch. Use object pooling if instantiation is very expensive.',
            tr: 'Çok fazla kısa ömürlü nesne oluşturmak Çöp Toplayıcı (Garbage Collection) yükünü artırır. Derin kalıtım hiyerarşileri metot çağrılarını yavaşlatabilir. Nesne oluşturma işlemi çok maliyetliyse nesne havuzu (object pooling) kullanın.'
          },
          comparison: {
            conceptA: 'Inheritance',
            conceptB: 'Composition',
            rows: [
              {
                feature: { en: 'Relationship', tr: 'İlişki' },
                conceptA: { en: 'IS-A (e.g., Car is a Vehicle)', tr: 'IS-A (örn. Araba bir Araçtır)' },
                conceptB: { en: 'HAS-A (e.g., Car has an Engine)', tr: 'HAS-A (örn. Arabanın bir Motoru vardır)' }
              },
              {
                feature: { en: 'Coupling', tr: 'Bağımlılık' },
                conceptA: { en: 'Tight coupling', tr: 'Sıkı bağımlılık (Tight coupling)' },
                conceptB: { en: 'Loose coupling', tr: 'Gevşek bağımlılık (Loose coupling)' }
              }
            ]
          },
          summary: {
            en: 'OOP encapsulates state and behavior into objects, uses abstraction to hide complexity, inheritance for hierarchy, and polymorphism for dynamic behavior. It is fundamental for large-scale enterprise applications.',
            tr: 'OOP, durum ve davranışı nesnelere kapsüller, karmaşıklığı gizlemek için soyutlama, hiyerarşi için kalıtım ve dinamik davranış için çok biçimlilik kullanır. Büyük ölçekli kurumsal uygulamalar için temeldir.'
          },
          mermaidDiagram: `classDiagram
    class Vehicle {
        +startEngine()
        +stopEngine()
    }
    class Car {
        -String model
        +startEngine()
    }
    Vehicle <|-- Car : Inheritance (IS-A)
    
    class Engine {
        +ignite()
    }
    Car *-- Engine : Composition (HAS-A)`,
          flashcards: [
            {
              question: { en: 'What are the 4 pillars of OOP?', tr: 'OOP\'nin 4 temeli nedir?' },
              answer: { en: 'Encapsulation, Abstraction, Inheritance, Polymorphism.', tr: 'Kapsülleme, Soyutlama, Kalıtım, Çok Biçimlilik.' }
            }
          ],
          checklist: [
            { en: 'I can explain all 4 pillars of OOP.', tr: 'OOP\'nin 4 temelini açıklayabilirim.' },
            { en: 'I know the difference between Abstraction and Encapsulation.', tr: 'Soyutlama ile Kapsülleme arasındaki farkı biliyorum.' },
            { en: 'I can explain Composition vs Inheritance.', tr: 'Kompozisyon ile Kalıtım arasındaki farkı açıklayabilirim.' }
          ],
          quiz: [
            {
              question: { en: 'Which OOP principle is used to hide internal details and show only functionality?', tr: 'İç detayları gizleyip sadece işlevselliği göstermek için hangi OOP prensibi kullanılır?' },
              options: [
                { en: 'Inheritance', tr: 'Kalıtım' },
                { en: 'Abstraction', tr: 'Soyutlama' },
                { en: 'Encapsulation', tr: 'Kapsülleme' },
                { en: 'Polymorphism', tr: 'Çok Biçimlilik' }
              ],
              correctIndex: 1,
              explanation: { en: 'Abstraction is the process of hiding implementation details and showing only the necessary features.', tr: 'Soyutlama, uygulama detaylarını gizleme ve sadece gerekli özellikleri gösterme sürecidir.' }
            }
          ]
        }
      }
    ]
  },
  {
    id: 'react',
    title: 'React',
    topics: [
      {
        id: 'react-usestate',
        title: 'Hooks: useState',
        categoryId: 'react',
        difficulty: 'Beginner',
        content: {
          overview: {
            en: '`useState` is a React Hook that lets you add state variables to functional components. It returns an array with exactly two items: the current state value and a state setter function to update it.',
            tr: '`useState`, fonksiyonel bileşenlere durum (state) değişkenleri eklemenizi sağlayan bir React Hook\'udur. Tam olarak iki öğe içeren bir dizi döndürür: mevcut durum değeri ve onu güncellemek için bir durum ayarlayıcı (setter) fonksiyon.'
          },
          whyExists: {
            en: 'Before Hooks, functional components were stateless. To use state, you had to write class components. `useState` exists to allow state management inside clean, simpler functional components, improving code reusability and readability.',
            tr: 'Hook\'lardan önce fonksiyonel bileşenler durumsuzdu (stateless). Durum kullanmak için sınıf (class) bileşenleri yazmanız gerekiyordu. `useState`, temiz ve daha basit fonksiyonel bileşenler içinde durum yönetimine izin vererek kodun yeniden kullanılabilirliğini ve okunabilirliğini artırmak için vardır.'
          },
          howItWorks: {
            en: 'When a component renders, `useState` checks if there is existing state for this hook in React\'s internal memory (linked list for that component). If yes, it returns the current value. If not, it initializes it with the provided initial value. Calling the setter function queues a re-render of the component with the new state.',
            tr: 'Bir bileşen render edildiğinde, `useState` React\'in iç belleğinde (o bileşen için linked list) bu hook için mevcut bir durum olup olmadığını kontrol eder. Varsa mevcut değeri döndürür. Yoksa, sağlanan başlangıç değeriyle başlatır. Setter fonksiyonunu çağırmak, bileşenin yeni durumla yeniden render edilmesini kuyruğa alır.'
          },
          realWorldExample: {
            en: 'Shopping Cart: Tracking the quantity of an item. A user clicks "+" to increase quantity, triggering the state setter. React re-renders the cart UI to reflect the new total.',
            tr: 'Alışveriş Sepeti: Bir ürünün miktarını izlemek. Kullanıcı miktarı artırmak için "+"\ya tıklar ve durum ayarlayıcı (setter) tetiklenir. React, yeni toplamı yansıtmak için sepet arayüzünü yeniden render eder.'
          },
          codeExample: {
            language: 'tsx',
            code: `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Best practice: Use updater function when depending on previous state
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}`
          },
          interviewAnswer: {
            en: '`useState` is a React Hook used to manage state in functional components. It returns the current state and an updater function. When the state is updated, React re-renders the component. For updates depending on the previous state, we should pass a callback to the setter function.',
            tr: '`useState`, fonksiyonel bileşenlerde durumu (state) yönetmek için kullanılan bir React Hook\'udur. Mevcut durumu ve güncelleyici bir fonksiyon döndürür. Durum güncellendiğinde React bileşeni yeniden render eder. Önceki duruma bağlı güncellemeler için setter fonksiyonuna bir callback geçirmeliyiz.'
          },
          seniorExplanation: {
            en: 'State updates are asynchronous and batched by React for performance (React 18 batches almost everywhere). Using `setState(val)` repeatedly in the same synchronous block will overwrite previous ones unless you use the functional update form `setState(prev => prev + 1)`. Complex state objects should be handled carefully to avoid mutating state directly; always return a new reference.',
            tr: 'Durum güncellemeleri asenkrondur ve performans için React tarafından gruplandırılır (React 18 hemen hemen her yerde batch işlemi yapar). Aynı senkron blokta art arda `setState(val)` kullanmak, fonksiyonel güncelleme formu `setState(prev => prev + 1)` kullanılmadığı sürece öncekilerin üzerine yazar. Karmaşık state nesneleri, durumu doğrudan mutasyona uğratmaktan kaçınmak için dikkatle ele alınmalı; her zaman yeni bir referans döndürülmelidir.'
          },
          commonQuestions: [
            {
              question: { en: 'Why shouldn\'t we mutate state directly in React?', tr: 'React\'te durumu (state) neden doğrudan mutasyona uğratmamalıyız (değiştirmemeliyiz)?' },
              answer: {
                en: 'React relies on reference equality checks (Object.is) to determine if a re-render is necessary. Mutating an object directly keeps the same memory reference, so React thinks nothing changed and won\'t trigger a re-render.',
                tr: 'React, yeniden render işleminin gerekli olup olmadığını belirlemek için referans eşitliği kontrollerine (Object.is) dayanır. Bir nesneyi doğrudan değiştirmek aynı bellek referansını korur, bu nedenle React hiçbir şeyin değişmediğini düşünür ve yeniden render tetiklemez.'
              }
            }
          ],
          followUpQuestions: [
            {
              question: { en: 'What is lazy initialization in useState?', tr: 'useState\'te tembel başlatma (lazy initialization) nedir?' },
              answer: {
                en: 'Passing a function to `useState` instead of a value. The function runs only during the initial render, which is useful for expensive initial state calculations: `useState(() => expensiveComputation())`.',
                tr: '`useState` içine bir değer yerine bir fonksiyon geçirmektir. Fonksiyon sadece ilk render sırasında çalışır; bu, maliyetli başlangıç durumu hesaplamaları için faydalıdır: `useState(() => expensiveComputation())`.'
              }
            }
          ],
          commonMistakes: {
            en: '1. Updating state directly: `state.count = 1`. 2. Relying on current state inside async callbacks without using the functional update form. 3. Overusing useState for derived data that could just be calculated on the fly.',
            tr: '1. Durumu doğrudan güncellemek: `state.count = 1`. 2. Asenkron callback\'ler içinde fonksiyonel güncelleme formunu kullanmadan mevcut duruma güvenmek. 3. Anında hesaplanabilecek türetilmiş veriler için useState\'i aşırı kullanmak.'
          },
          bestPractices: {
            en: 'Use functional state updates when next state depends on previous state. Group related state into objects or separate `useState` calls logically. Initialize state lazily if computation is heavy.',
            tr: 'Sonraki durum önceki duruma bağlı olduğunda fonksiyonel durum güncellemelerini kullanın. İlgili durumu nesnelere gruplayın veya `useState` çağrılarını mantıksal olarak ayırın. Hesaplama ağırsa durumu tembel başlatın.'
          },
          performance: {
            en: 'Avoid defining expensive initial state directly inside `useState(expensive())` (runs every render). Use a function `useState(() => expensive())`. Keep state as local as possible to prevent unnecessary re-renders of parent components.',
            tr: 'Pahalı başlangıç durumunu doğrudan `useState(expensive())` içinde tanımlamaktan kaçının (her render\'da çalışır). Bir fonksiyon kullanın `useState(() => expensive())`. Üst bileşenlerin gereksiz yere yeniden render edilmesini önlemek için durumu olabildiğince yerel tutun.'
          },
          summary: {
            en: '`useState` allows functional components to maintain state. It triggers re-renders upon updates. Proper usage of functional updates and avoiding direct mutation are key for stable React apps.',
            tr: '`useState`, fonksiyonel bileşenlerin durum tutmasını sağlar. Güncellemelerde yeniden render işlemini tetikler. Fonksiyonel güncellemelerin doğru kullanımı ve doğrudan değişiklikten kaçınmak kararlı React uygulamaları için çok önemlidir.'
          },
          mermaidDiagram: `sequenceDiagram
    participant User
    participant Component
    participant React
    
    User->>Component: Clicks Button
    Component->>React: setCount(newVal)
    React->>React: Batch updates & evaluate state
    React->>Component: Re-render with newVal
    Component->>User: Display updated UI`,
          flashcards: [
            {
              question: { en: 'What does useState return?', tr: 'useState ne döndürür?' },
              answer: { en: 'An array with two items: [stateValue, stateSetterFunction].', tr: 'İki öğeli bir dizi: [durumDegeri, durumAyarlayiciFonksiyon].' }
            }
          ],
          checklist: [
            { en: 'I can explain why state mutation is bad.', tr: 'State mutasyonunun neden kötü olduğunu açıklayabilirim.' },
            { en: 'I know how to use functional updates.', tr: 'Fonksiyonel güncellemeleri (functional updates) nasıl kullanacağımı biliyorum.' },
            { en: 'I can explain lazy initialization.', tr: 'Tembel başlatmayı (lazy initialization) açıklayabilirim.' }
          ],
          quiz: [
            {
              question: { en: 'If count is 0, what is the count after this runs synchronously: setCount(count + 1); setCount(count + 1);', tr: 'Count 0 ise, bu senkron blok çalıştıktan sonra count kaç olur: setCount(count + 1); setCount(count + 1);' },
              options: [
                { en: '0', tr: '0' },
                { en: '1', tr: '1' },
                { en: '2', tr: '2' }
              ],
              correctIndex: 1,
              explanation: { en: 'Because state updates are batched and `count` closure is still 0, both set count to 1. You should use `setCount(prev => prev + 1)` instead.', tr: 'Çünkü state güncellemeleri gruplandırılır (batched) ve `count` closure değeri hala 0\'dır, bu yüzden her ikisi de count\'u 1 yapar. Bunun yerine `setCount(prev => prev + 1)` kullanılmalıdır.' }
            }
          ]
        }
      }
    ]
  }
];

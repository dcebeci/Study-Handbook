import { Category } from '../types';

export const javaData: Category = {
  id: 'java',
  title: 'Java',
  topics: [
    {
      id: 'java-gc',
      title: 'Garbage Collection & Memory',
      categoryId: 'java',
      difficulty: 'Senior',
      content: {
        overview: {
          en: 'JVM Garbage Collection (GC) automatically manages memory, reclaiming objects no longer in use.',
          tr: 'JVM Çöp Toplayıcı (GC), belleği otomatik olarak yönetir ve kullanılmayan nesneleri geri kazanır.'
        },
        whyExists: { en: 'Prevents memory leaks without manual memory management (like in C++).', tr: 'Manuel bellek yönetimi olmadan (C++ daki gibi) bellek sızıntılarını önler.' },
        howItWorks: { en: 'Uses generational heap (Young, Old). Minor GC cleans Eden, Major GC cleans Old Gen.', tr: 'Nesilsel heap kullanır (Young, Old). Minor GC Edeni, Major GC Old Geni temizler.' },
        realWorldExample: { en: 'Low-latency apps use ZGC to keep GC pauses under 1ms.', tr: 'Düşük gecikmeli uygulamalar GC duraklamalarını 1ms altında tutmak için ZGC kullanır.' },
        interviewAnswer: { en: 'GC automatically frees unreferenced objects using root tracing. It divides heap into generations for efficiency.', tr: 'GC, root tracing kullanarak referanssız nesneleri serbest bırakır. Verimlilik için heap i nesillere ayırır.' },
        seniorExplanation: { en: 'Stop-The-World (STW) pauses affect performance. G1GC balances throughput/latency. Tuning involves sizing Eden/Old regions.', tr: 'STW duraklamaları performansı etkiler. G1GC verim ve gecikmeyi dengeler.' },
        commonMistakes: { en: 'Calling System.gc(), memory leaks via static maps.', tr: 'System.gc() çağırmak, statik haritalar yoluyla bellek sızıntıları.' },
        bestPractices: { en: 'Profile with VisualVM. Avoid large object allocations in tight loops.', tr: 'VisualVM ile profilleme yapın. Sıkı döngülerde büyük nesne tahsislerinden kaçının.' },
        performance: { en: 'High allocation rates cause frequent GCs.', tr: 'Yüksek tahsis oranları sık GC lere neden olur.' },
        codeExample: { language: 'java', code: 'String temp = "Data"; temp = null; // Eligible for GC' },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'java-oop-solid',
      title: 'OOP & SOLID Principles',
      categoryId: 'java',
      difficulty: 'Mid-Level',
      content: {
        overview: {
          en: 'OOP organizes code around data/objects. SOLID is 5 design principles for maintainable software.',
          tr: 'OOP, kodu veri/nesneler etrafında düzenler. SOLID, bakımı kolay yazılımlar için 5 tasarım prensibidir.'
        },
        whyExists: { en: 'Reduces code duplication, increases modularity and testability.', tr: 'Kod tekrarını azaltır, modülerliği ve test edilebilirliği artırır.' },
        howItWorks: { en: 'Encapsulation, Inheritance, Polymorphism, Abstraction. SOLID: Single Resp, Open/Closed, Liskov, Interface Seg, Dependency Inv.', tr: 'Kapsülleme, Kalıtım, Çok Biçimlilik, Soyutlama. SOLID prensipleri.' },
        realWorldExample: { en: 'Using interfaces for PaymentProcessing allows adding new gateways without changing core logic (Open/Closed).', tr: 'Ödeme işlemleri için arayüzler kullanmak, çekirdek mantığı değiştirmeden yeni ağ geçitleri eklemeyi sağlar (Açık/Kapalı).' },
        interviewAnswer: { en: 'SOLID ensures classes have one reason to change, are open for extension, and depend on abstractions.', tr: 'SOLID, sınıfların değişmek için tek bir nedeni olmasını, uzantılara açık olmasını ve soyutlamalara dayanmasını sağlar.' },
        seniorExplanation: { en: 'Violating Liskov Substitution creates hidden bugs where subclasses behave unexpectedly. Favor composition over inheritance.', tr: 'Liskov un ihlali, alt sınıfların beklenmedik davrandığı gizli hatalar yaratır. Kalıtım yerine kompozisyonu tercih edin.' },
        commonMistakes: { en: 'God classes (violating SRP). Tight coupling.', tr: 'God class lar (SRP ihlali). Sıkı bağımlılık.' },
        bestPractices: { en: 'Depend on interfaces, not implementations.', tr: 'Uygulamalara değil, arayüzlere (interface) dayanın.' },
        performance: { en: 'Polymorphic virtual method calls have slight overhead but usually negligible.', tr: 'Polimorfik sanal metot çağrılarının hafif bir yükü vardır ancak genelde ihmal edilebilir.' },
        codeExample: { language: 'java', code: 'public interface Shape { double area(); }' },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'java-collections',
      title: 'Collections (List, Set, Map)',
      categoryId: 'java',
      difficulty: 'Beginner',
      content: {
        overview: {
          en: 'The Collections Framework provides interfaces and classes to store and manipulate groups of objects.',
          tr: 'Collections Framework, nesne gruplarını depolamak ve işlemek için arayüzler ve sınıflar sağlar.'
        },
        whyExists: { en: 'Replaces raw arrays with dynamic, feature-rich data structures.', tr: 'Ham dizileri dinamik, zengin özellikli veri yapılarıyla değiştirir.' },
        howItWorks: { en: 'List (ordered, duplicates), Set (unordered, unique), Map (key-value pairs).', tr: 'List (sıralı, kopyalar var), Set (sırasız, benzersiz), Map (anahtar-değer çiftleri).' },
        realWorldExample: { en: 'Use HashMap for O(1) lookups of user sessions by session ID.', tr: 'Oturum kimliğine göre kullanıcı oturumlarının O(1) aramaları için HashMap kullanın.' },
        interviewAnswer: { en: 'ArrayList is fast for reading, LinkedList for inserting in middle. HashSet uses hashing for unique items. HashMap stores key-value pairs.', tr: 'ArrayList okuma için, LinkedList ortasına ekleme için hızlıdır. HashSet benzersiz öğeler için hashing kullanır.' },
        seniorExplanation: { en: 'HashMap handles collisions via Separate Chaining (trees in Java 8+). ConcurrentHashMap is needed for thread safety over Collections.synchronizedMap.', tr: 'HashMap çakışmaları Separate Chaining ile işler. İplik güvenliği için ConcurrentHashMap gereklidir.' },
        commonMistakes: { en: 'Using ArrayList for heavy arbitrary insertions. Forgetting to override hashCode() and equals() when using objects in a HashSet/HashMap.', tr: 'Yoğun eklemeler için ArrayList kullanmak. HashSet te hashCode() ve equals() ı geçersiz kılmayı unutmak.' },
        bestPractices: { en: 'Initialize collections with estimated capacity to avoid array resizing overhead.', tr: 'Dizi yeniden boyutlandırma yükünü önlemek için koleksiyonları tahmini kapasiteyle başlatın.' },
        performance: { en: 'HashMap lookup is O(1). ArrayList lookup by index is O(1). LinkedList search is O(N).', tr: 'HashMap araması O(1) dir. İndekse göre ArrayList araması O(1) dir. LinkedList araması O(N) dir.' },
        codeExample: { language: 'java', code: 'Map<String, Integer> map = new HashMap<>(); map.put("John", 25);' },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    }
  ]
};

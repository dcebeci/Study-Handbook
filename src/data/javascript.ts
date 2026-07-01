import { Category } from '../types';

export const javascriptData: Category = {
  id: 'javascript', 
  title: 'JavaScript', 
  topics: [
    {
      id: 'js-event-loop',
      title: 'Event Loop & Asynchronous JS',
      categoryId: 'javascript',
      difficulty: 'Senior',
      content: {
        overview: { en: "Event Loop handles async operations in JS.", tr: "Event Loop JS'deki asenkron işlemleri yönetir." },
        whyExists: { en: "Prevents blocking the main thread.", tr: "Ana iş parçacığının bloklanmasını önler." },
        howItWorks: { en: "Call Stack -> Microtask Queue (Promises) -> Macrotask Queue (setTimeout).", tr: "Çağrı Yığını -> Microtask Kuyruğu -> Macrotask Kuyruğu." },
        realWorldExample: { en: "Fetching API data without freezing UI.", tr: "Kullanıcı arayüzünü dondurmadan API verisi çekmek." },
        interviewAnswer: { en: "Microtasks have higher priority than Macrotasks.", tr: "Microtask'ler Macrotask'lerden daha yüksek önceliğe sahiptir." },
        seniorExplanation: { en: "Node.js uses libuv for the event loop phases.", tr: "Node.js olay döngüsü aşamaları için libuv kullanır." },
        commonMistakes: { en: "Thinking setTimeout(0) runs instantly.", tr: "setTimeout(0)'ın anında çalıştığını düşünmek." },
        bestPractices: { en: "Don't block event loop with heavy crypto tasks.", tr: "Ağır kripto görevleriyle olay döngüsünü bloklamayın." },
        performance: { en: "Use Web Workers for heavy CPU tasks.", tr: "Ağır CPU görevleri için Web Worker kullanın." },
        codeExample: { language: 'javascript', code: `setTimeout(()=>console.log('Macro'), 0); Promise.resolve().then(()=>console.log('Micro'));` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'js-closures',
      title: 'Closures & Lexical Scope',
      categoryId: 'javascript',
      difficulty: 'Mid-Level',
      content: {
        overview: { en: "A closure gives access to an outer function's scope from an inner function.", tr: "Bir closure, iç fonksiyondan dış fonksiyonun kapsamına erişim sağlar." },
        whyExists: { en: "Enables data privacy and factory functions.", tr: "Veri gizliliğini ve fabrika fonksiyonlarını sağlar." },
        howItWorks: { en: "Functions 'remember' the environment in which they were created.", tr: "Fonksiyonlar oluşturuldukları ortamı 'hatırlarlar'." },
        realWorldExample: { en: "Private variables in a counter module.", tr: "Bir sayaç modülündeki gizli değişkenler." },
        interviewAnswer: { en: "A closure is formed when an inner function accesses variables from its outer scope.", tr: "Bir closure, iç fonksiyon dış kapsamındaki değişkenlere eriştiğinde oluşur." },
        seniorExplanation: { en: "Closures can cause memory leaks if outer scope variables are kept alive indefinitely.", tr: "Closures, dış değişkenler sonsuza kadar yaşatılırsa bellek sızıntılarına neden olabilir." },
        commonMistakes: { en: "Creating closures inside loops with 'var'.", tr: "'var' ile döngüler içinde closure oluşturmak." },
        bestPractices: { en: "Use 'let' in loops to create block scope.", tr: "Blok kapsamı oluşturmak için döngülerde 'let' kullanın." },
        performance: { en: "Avoid excessive closures if memory is tight.", tr: "Bellek kısıtlıysa aşırı closure kullanmaktan kaçının." },
        codeExample: { language: 'javascript', code: `function makeCounter() { let c = 0; return () => ++c; }` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'js-promises',
      title: 'Promises & Async/Await',
      categoryId: 'javascript',
      difficulty: 'Intermediate',
      content: {
        overview: { en: "Promises represent eventual completion of an async operation.", tr: "Promiseler asenkron bir işlemin nihai tamamlanmasını temsil eder." },
        whyExists: { en: "Avoids callback hell (Pyramid of Doom).", tr: "Callback cehennemini önler." },
        howItWorks: { en: "Has 3 states: Pending, Fulfilled, Rejected. Handled via .then() or async/await.", tr: "3 durumu vardır: Bekliyor, Gerçekleşti, Reddedildi." },
        realWorldExample: { en: "Making an HTTP request to fetch user profile.", tr: "Kullanıcı profilini çekmek için HTTP isteği yapmak." },
        interviewAnswer: { en: "Async/await is syntactic sugar over Promises, making async code look synchronous.", tr: "Async/await, asenkron kodun senkron görünmesini sağlayan Promise üzerindeki sözdizimsel şekerdir." },
        seniorExplanation: { en: "Use Promise.all() for concurrent requests instead of awaiting in a loop.", tr: "Döngü içinde beklemek yerine eşzamanlı istekler için Promise.all() kullanın." },
        commonMistakes: { en: "Forgetting try/catch with async/await.", tr: "Async/await ile try/catch unutmak." },
        bestPractices: { en: "Always handle rejections to avoid UnhandledPromiseRejection errors.", tr: "Hataları önlemek için her zaman reddedilmeleri ele alın." },
        performance: { en: "Promise.all enables parallel execution, speeding up requests.", tr: "Promise.all paralel yürütmeyi sağlar." },
        codeExample: { language: 'javascript', code: `async function get() { try { await fetch(url); } catch(e) {} }` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    }
  ]
};

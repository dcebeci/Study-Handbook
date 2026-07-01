import { Category } from '../types';

export const angularData: Category = {
  id: 'angular',
  title: 'Angular',
  topics: [
    {
      id: 'ng-change-detection',
      title: 'Change Detection Strategy',
      categoryId: 'angular',
      difficulty: 'Senior',
      content: {
        overview: { en: "Syncs state with UI using Zone.js.", tr: "Zone.js kullanarak durumu UI ile senkronize eder." },
        whyExists: { en: "Automates DOM updates.", tr: "DOM güncellemelerini otomatikleştirir." },
        howItWorks: { en: "Checks component tree on async events.", tr: "Asenkron olaylarda bileşen ağacını kontrol eder." },
        realWorldExample: { en: "Updating stock dashboard.", tr: "Borsa gösterge tablosunu güncellemek." },
        interviewAnswer: { en: "OnPush optimizes performance by checking only when Input references change.", tr: "OnPush yalnızca Input referansları değiştiğinde kontrol ederek performansı optimize eder." },
        seniorExplanation: { en: "Signals (v16+) provide fine-grained reactivity without Zone.js.", tr: "Sinyaller (v16+) Zone.js olmadan ince taneli reaktivite sağlar." },
        commonMistakes: { en: "Mutating objects directly with OnPush.", tr: "OnPush ile nesneleri doğrudan değiştirmek." },
        bestPractices: { en: "Use immutable data and OnPush.", tr: "Değişmez (immutable) veri ve OnPush kullanın." },
        performance: { en: "Avoid function calls in templates.", tr: "Şablonlarda fonksiyon çağrılarından kaçının." },
        codeExample: { language: 'typescript', code: `changeDetection: ChangeDetectionStrategy.OnPush` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'ng-rxjs',
      title: 'RxJS & Observables',
      categoryId: 'angular',
      difficulty: 'Senior',
      content: {
        overview: { en: "RxJS handles asynchronous data streams.", tr: "RxJS asenkron veri akışlarını işler." },
        whyExists: { en: "More powerful than Promises for streams of events.", tr: "Olay akışları için Promise'lerden daha güçlüdür." },
        howItWorks: { en: "Observables emit values, Subscriptions listen.", tr: "Observable'lar değer yayar, Abonelikler dinler." },
        realWorldExample: { en: "Search autocomplete with debounceTime.", tr: "debounceTime ile arama otomatik tamamlama." },
        interviewAnswer: { en: "Use async pipe to automatically subscribe and unsubscribe to prevent memory leaks.", tr: "Bellek sızıntılarını önlemek ve otomatik abone olmak için async pipe kullanın." },
        seniorExplanation: { en: "Operators like switchMap cancel previous requests.", tr: "switchMap gibi operatörler önceki istekleri iptal eder." },
        commonMistakes: { en: "Forgetting to unsubscribe, causing memory leaks.", tr: "Abonelikten çıkmayı unutup bellek sızıntısına neden olmak." },
        bestPractices: { en: "Use the 'async' pipe in templates.", tr: "Şablonlarda 'async' pipe'ı kullanın." },
        performance: { en: "Combine latest data using combineLatest.", tr: "combineLatest kullanarak en son verileri birleştirin." },
        codeExample: { language: 'typescript', code: `data$ = this.http.get(url).pipe(take(1));` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'ng-di-services',
      title: 'Dependency Injection & Services',
      categoryId: 'angular',
      difficulty: 'Intermediate',
      content: {
        overview: { en: "Services share data/logic. DI provides instances.", tr: "Servisler veri/mantık paylaşır. DI örnekleri sağlar." },
        whyExists: { en: "Keeps components lean and focused on UI.", tr: "Bileşenleri ince ve UI'ye odaklı tutar." },
        howItWorks: { en: "Angular Injector creates singleton instances.", tr: "Angular Injector singleton örnekler oluşturur." },
        realWorldExample: { en: "AuthService managing login state globally.", tr: "Giriş durumunu küresel yöneten AuthService." },
        interviewAnswer: { en: "@Injectable({ providedIn: 'root' }) makes it a singleton.", tr: "@Injectable({ providedIn: 'root' }) onu singleton yapar." },
        seniorExplanation: { en: "Tree-shakable providers optimize bundle size.", tr: "Tree-shakeable sağlayıcılar paket boyutunu optimize eder." },
        commonMistakes: { en: "Providing a service in multiple components, creating multiple instances.", tr: "Bir servisi birden fazla bileşende sağlayıp birden fazla örnek oluşturmak." },
        bestPractices: { en: "Always use providedIn: 'root'.", tr: "Her zaman providedIn: 'root' kullanın." },
        performance: { en: "Lazy loaded modules get their own child injector.", tr: "Tembel yüklenen modüller kendi alt enjektörlerini alır." },
        codeExample: { language: 'typescript', code: `@Injectable({ providedIn: 'root' }) class DataService {}` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    }
  ]
};

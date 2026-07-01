import { Category } from '../types';

export const reactData: Category = {
  id: 'react',
  title: 'React',
  topics: [
    {
      id: 'react-reconciliation',
      title: 'Virtual DOM & Reconciliation',
      categoryId: 'react',
      difficulty: 'Senior',
      content: {
        overview: { en: "React updates the DOM using a Virtual DOM and Diffing algorithm.", tr: "React, Sanal DOM ve Diff algoritması kullanarak DOM'u günceller." },
        whyExists: { en: "Direct DOM manipulation is slow.", tr: "Doğrudan DOM manipülasyonu yavaştır." },
        howItWorks: { en: "Compares new VDOM with old VDOM. Uses 'key' for lists.", tr: "Yeni VDOM'u eskiyle karşılaştırır. Listeler için 'key' kullanır." },
        realWorldExample: { en: "Updating one cell in a 10k row table only updates that specific <td>.", tr: "10 bin satırlık tabloda tek bir hücreyi güncellemek sadece o <td>'yi günceller." },
        interviewAnswer: { en: "Virtual DOM batches DOM updates efficiently via Reconciliation.", tr: "Sanal DOM, güncellemeleri Reconciliation ile verimli bir şekilde gruplar." },
        seniorExplanation: { en: "React Fiber made reconciliation asynchronous.", tr: "React Fiber, uzlaştırmayı asenkron hale getirdi." },
        commonMistakes: { en: "Using array index as keys.", tr: "Dizi indeksini anahtar olarak kullanmak." },
        bestPractices: { en: "Use stable database IDs for keys.", tr: "Anahtarlar için sabit veritabanı ID'leri kullanın." },
        performance: { en: "Diffing is fast, but re-renders can be slow. Use React.memo.", tr: "Diff hızlıdır, ancak yeniden render yavaş olabilir. React.memo kullanın." },
        codeExample: { language: 'tsx', code: `{items.map(item => <li key={item.id}>{item.name}</li>)}` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'react-hooks-core',
      title: 'Hooks (useState, useEffect)',
      categoryId: 'react',
      difficulty: 'Intermediate',
      content: {
        overview: { en: "Hooks allow using state and side effects in functional components.", tr: "Hooklar, fonksiyonel bileşenlerde durum ve yan etkileri kullanmayı sağlar." },
        whyExists: { en: "Class components were verbose and hard to reuse logic.", tr: "Sınıf bileşenleri uzundu ve mantığı yeniden kullanmak zordu." },
        howItWorks: { en: "Hooks rely on call order (must be at top level).", tr: "Hooklar çağrı sırasına güvenir (en üst düzeyde olmalıdır)." },
        realWorldExample: { en: "Fetching user data on mount using useEffect.", tr: "useEffect kullanarak yüklemede kullanıcı verisi çekmek." },
        interviewAnswer: { en: "useState manages state, useEffect handles side effects like data fetching.", tr: "useState durumu yönetir, useEffect veri çekme gibi yan etkileri işler." },
        seniorExplanation: { en: "Stale closures in useEffect can cause bugs. Use exhaustive-deps.", tr: "useEffect'teki bayat kapanışlar hatalara neden olabilir." },
        commonMistakes: { en: "Missing dependency array in useEffect (infinite loops).", tr: "useEffect'te eksik bağımlılık dizisi (sonsuz döngüler)." },
        bestPractices: { en: "Use functional state updates: setCount(c => c + 1).", tr: "Fonksiyonel durum güncellemeleri kullanın." },
        performance: { en: "Split unrelated logic into multiple useEffects.", tr: "İlgisiz mantıkları birden fazla useEffect'e bölün." },
        codeExample: { language: 'tsx', code: `useEffect(() => { fetchData(); }, [id]);` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'react-context-redux',
      title: 'State Management (Context, Redux)',
      categoryId: 'react',
      difficulty: 'Senior',
      content: {
        overview: { en: "Managing global state across the component tree without prop drilling.", tr: "Prop drilling olmadan bileşen ağacında küresel durumu yönetmek." },
        whyExists: { en: "Passing props down 10 levels is unmaintainable.", tr: "Propları 10 seviye aşağı geçirmek sürdürülemez." },
        howItWorks: { en: "Context broadcasts values. Redux uses a single store with reducers.", tr: "Context değerleri yayınlar. Redux reducer'larla tek bir store kullanır." },
        realWorldExample: { en: "Shopping cart state accessible from Navbar and Checkout page.", tr: "Alışveriş sepeti durumuna Navbar ve Ödeme sayfasından erişilebilir." },
        interviewAnswer: { en: "Context is great for low-frequency updates (theme). Redux/Zustand for high-frequency.", tr: "Context düşük frekanslı güncellemeler (tema) için harikadır. Redux yüksek frekanslı güncellemeler içindir." },
        seniorExplanation: { en: "Context triggers re-renders for ALL consumers on value change. Redux allows selector-based precise renders.", tr: "Context tüm tüketicilerde yeniden render tetikler. Redux hassas render'lara izin verir." },
        commonMistakes: { en: "Putting all state in Context, causing massive re-renders.", tr: "Tüm durumu Context'e koyarak devasa yeniden render'lara neden olmak." },
        bestPractices: { en: "Use Redux Toolkit for complex state, Context for simple config.", tr: "Karmaşık durum için Redux Toolkit, basit konfigürasyon için Context kullanın." },
        performance: { en: "Memoize Context values with useMemo.", tr: "Context değerlerini useMemo ile ezberleyin." },
        codeExample: { language: 'tsx', code: `const ThemeContext = createContext('dark');` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    }
  ]
};

import { Category } from '../types';

export const typescriptData: Category = {
  id: 'typescript',
  title: 'TypeScript',
  topics: [
    {
      id: 'ts-generics',
      title: 'Generics & Utility Types',
      categoryId: 'typescript',
      difficulty: 'Intermediate',
      content: {
        overview: { en: "Generics make components work over variety of types.", tr: "Jenerikler bileşenlerin çeşitli türlerde çalışmasını sağlar." },
        whyExists: { en: "Avoids 'any' type, preserving type safety.", tr: "Tür güvenliğini koruyarak 'any' türünü önler." },
        howItWorks: { en: "<T> acts as a placeholder for a type.", tr: "<T> bir tür için yer tutucu görevi görür." },
        realWorldExample: { en: "ApiResponse<T> wrapper for all API calls.", tr: "Tüm API çağrıları için ApiResponse<T> sarmalayıcısı." },
        interviewAnswer: { en: "Utility Types like Partial, Pick use generics under the hood.", tr: "Partial, Pick gibi Yardımcı Türler arka planda jenerikleri kullanır." },
        seniorExplanation: { en: "Conditional Types (T extends U) enable advanced logic.", tr: "Koşullu Türler (T extends U) gelişmiş mantığı etkinleştirir." },
        commonMistakes: { en: "Using 'any' instead of type constraints.", tr: "Tür kısıtlamaları yerine 'any' kullanmak." },
        bestPractices: { en: "Use descriptive generic names (TRequest).", tr: "Açıklayıcı jenerik adları kullanın (TRequest)." },
        performance: { en: "Type erasure means zero runtime overhead.", tr: "Tip silme (Type erasure) sıfır çalışma zamanı yükü demektir." },
        codeExample: { language: 'typescript', code: `function echo<T>(val: T): T { return val; }` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'ts-interfaces-types',
      title: 'Interfaces vs Types',
      categoryId: 'typescript',
      difficulty: 'Beginner',
      content: {
        overview: { en: "Both define object shapes, but have subtle differences.", tr: "Her ikisi de nesne şekillerini tanımlar, ancak ince farkları vardır." },
        whyExists: { en: "To type-check objects and function signatures.", tr: "Nesneleri ve fonksiyon imzalarını tür kontrolünden geçirmek için." },
        howItWorks: { en: "Interfaces use 'extends', Types use '&' (intersection).", tr: "Arayüzler 'extends', Türler '&' (kesişim) kullanır." },
        realWorldExample: { en: "Defining a User object shape.", tr: "Bir Kullanıcı nesnesi şekli tanımlamak." },
        interviewAnswer: { en: "Interfaces can be declaration-merged, types cannot. Types can represent primitives and unions.", tr: "Arayüzler birleştirilebilir, türler birleştirilemez. Türler birleşimleri temsil edebilir." },
        seniorExplanation: { en: "For public APIs, use Interfaces to allow merging. For complex logic, use Types.", tr: "Açık API'ler için Arayüzleri, karmaşık mantık için Türleri kullanın." },
        commonMistakes: { en: "Mixing them inconsistently.", tr: "Onları tutarsız bir şekilde karıştırmak." },
        bestPractices: { en: "Prefer Interfaces for object definitions by default.", tr: "Varsayılan olarak nesne tanımları için Arayüzleri tercih edin." },
        performance: { en: "No runtime difference.", tr: "Çalışma zamanı farkı yoktur." },
        codeExample: { language: 'typescript', code: `interface User { name: string; } type ID = string | number;` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    }
  ]
};

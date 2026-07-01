import { Category } from '../types';

export const springBootData: Category = {
  id: 'spring-boot',
  title: 'Spring Boot',
  topics: [
    {
      id: 'sb-ioc-di',
      title: 'IoC & Dependency Injection',
      categoryId: 'spring-boot',
      difficulty: 'Intermediate',
      content: {
        overview: { en: "IoC transfers object creation to Spring. DI is injecting dependencies.", tr: "IoC nesne oluşturmayı Spring'e devreder. DI bağımlılıkları enjekte eder." },
        whyExists: { en: "Decouples components, makes unit testing easier.", tr: "Bileşenleri ayırır, birim testini kolaylaştırır." },
        howItWorks: { en: "Spring Container scans for @Component, creates Beans, and wires them.", tr: "Spring Container @Component tarar, Beanleri oluşturur ve bağlar." },
        realWorldExample: { en: "Injecting PaymentGateway into OrderService.", tr: "PaymentGateway'i OrderService'e enjekte etmek." },
        interviewAnswer: { en: "Use constructor injection to ensure dependencies are not null and immutable.", tr: "Bağımlılıkların null olmamasını ve immutable olmasını sağlamak için constructor injection kullanın." },
        seniorExplanation: { en: "Field injection hides dependencies and allows circular dependencies.", tr: "Field injection bağımlılıkları gizler ve döngüsel bağımlılıklara izin verir." },
        commonMistakes: { en: "Using @Autowired on fields.", tr: "Alanlarda @Autowired kullanmak." },
        bestPractices: { en: "Always use Constructor Injection and final fields.", tr: "Her zaman Constructor Injection ve final alanlar kullanın." },
        performance: { en: "Reflection is used at startup, runtime performance is not affected.", tr: "Başlangıçta reflection kullanılır, çalışma zamanı performansı etkilenmez." },
        codeExample: { language: 'java', code: `@Service public class OrderService { private final PaymentGateway pg; public OrderService(PaymentGateway pg) { this.pg = pg; } }` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'sb-jpa-hibernate',
      title: 'JPA & Hibernate',
      categoryId: 'spring-boot',
      difficulty: 'Senior',
      content: {
        overview: { en: "JPA is a specification, Hibernate is the implementation for ORM.", tr: "JPA bir belirtimdir, Hibernate ORM için uygulamadır." },
        whyExists: { en: "Avoids writing raw SQL, maps Java objects to DB tables.", tr: "Ham SQL yazmayı önler, Java nesnelerini DB tablolarına eşler." },
        howItWorks: { en: "Uses EntityManager to track entity states (Transient, Managed, Detached).", tr: "Entity durumlarını izlemek için EntityManager kullanır." },
        realWorldExample: { en: "Saving a User object directly to PostgreSQL.", tr: "Bir User nesnesini doğrudan PostgreSQL'e kaydetmek." },
        interviewAnswer: { en: "FetchType.LAZY is crucial for performance to avoid N+1 query problems.", tr: "N+1 sorgu problemlerini önlemek için FetchType.LAZY performans için çok önemlidir." },
        seniorExplanation: { en: "The N+1 problem occurs when fetching a list of entities and their relations separately. Use JOIN FETCH.", tr: "N+1 problemi varlıkların ve ilişkilerinin ayrı ayrı çekilmesinde oluşur. JOIN FETCH kullanın." },
        commonMistakes: { en: "Using EAGER fetching globally.", tr: "Global olarak EAGER fetching kullanmak." },
        bestPractices: { en: "Use DTOs instead of returning Entities in Controllers.", tr: "Controller'larda Entity döndürmek yerine DTO kullanın." },
        performance: { en: "Use Batch inserts for large datasets.", tr: "Büyük veri kümeleri için Toplu (Batch) eklemeler kullanın." },
        codeExample: { language: 'java', code: `@Entity public class User { @Id @GeneratedValue private Long id; }` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    },
    {
      id: 'sb-rest-mvc',
      title: 'Spring MVC & REST APIs',
      categoryId: 'spring-boot',
      difficulty: 'Mid-Level',
      content: {
        overview: { en: "Spring MVC builds web applications and RESTful services.", tr: "Spring MVC web uygulamaları ve RESTful servisler oluşturur." },
        whyExists: { en: "Provides a structured way to handle HTTP requests.", tr: "HTTP isteklerini işlemek için yapılandırılmış bir yol sağlar." },
        howItWorks: { en: "DispatcherServlet routes requests to @Controllers.", tr: "DispatcherServlet istekleri @Controller'lara yönlendirir." },
        realWorldExample: { en: "Building a CRUD API for a blog.", tr: "Bir blog için CRUD API'si oluşturmak." },
        interviewAnswer: { en: "@RestController combines @Controller and @ResponseBody.", tr: "@RestController, @Controller ve @ResponseBody'yi birleştirir." },
        seniorExplanation: { en: "Use @ControllerAdvice for global exception handling.", tr: "Global hata yönetimi için @ControllerAdvice kullanın." },
        commonMistakes: { en: "Putting business logic in controllers.", tr: "İş mantığını controller'lara koymak." },
        bestPractices: { en: "Keep controllers thin, delegate to Service layer.", tr: "Controller'ları ince tutun, Service katmanına devredin." },
        performance: { en: "Use pagination for returning lists.", tr: "Listeleri döndürmek için sayfalama (pagination) kullanın." },
        codeExample: { language: 'java', code: `@RestController @RequestMapping("/api") public class ApiController { }` },
        detailedQuestions: [], commonQuestions: [], followUpQuestions: [], flashcards: [], checklist: [], quiz: []
      }
    }
  ]
};

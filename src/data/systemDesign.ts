import { Category } from '../types';

export const systemDesignData: Category = {
  id: 'system-design',
  title: 'System Design',
  topics: [
    {
      id: 'sd-cap-theorem',
      title: 'CAP Theorem',
      categoryId: 'system-design',
      difficulty: 'Senior',
      content: {
        overview: {
          en: 'The CAP Theorem states that a distributed data store can only simultaneously provide two out of three guarantees: Consistency, Availability, and Partition Tolerance.',
          tr: 'CAP Teoremi, dağıtık bir veri deposunun aynı anda şu üç garantiden yalnızca ikisini sağlayabileceğini belirtir: Tutarlılık (Consistency), Erişilebilirlik (Availability) ve Bölünme Toleransı (Partition Tolerance).'
        },
        whyExists: {
          en: 'It exists to help architects understand the fundamental trade-offs when designing distributed systems, particularly databases.',
          tr: 'Özellikle veritabanları olmak üzere dağıtık sistemler tasarlanırken mimarların temel ödünleşimleri (trade-offs) anlamalarına yardımcı olmak için vardır.'
        },
        howItWorks: {
          en: 'In the presence of a network partition (P), a system must choose between Consistency (C) - canceling the operation to ensure all nodes have the same data, or Availability (A) - proceeding with the operation and returning the most recent available, though possibly stale, data.',
          tr: 'Bir ağ bölünmesi (P) durumunda, sistem Tutarlılık (C - tüm düğümlerin aynı veriye sahip olmasını sağlamak için işlemi iptal etmek) veya Erişilebilirlik (A - işleme devam edip en güncel, ancak muhtemelen eski veriyi döndürmek) arasında bir seçim yapmalıdır.'
        },
        realWorldExample: {
          en: 'ATMs prioritize Availability over Consistency during network partitions. It is better to let a customer withdraw $50 (and risk a temporary overdraft) than to completely shut down the ATM network.',
          tr: 'ATM\'ler ağ bölünmeleri sırasında Erişilebilirliği Tutarlılığa tercih eder. Bir müşterinin 50$ çekmesine izin vermek (ve geçici bir eksi bakiye riskini almak), ATM ağını tamamen kapatmaktan daha iyidir.'
        },
        interviewAnswer: {
          en: 'CAP Theorem dictates that in a distributed system experiencing a network partition (P), you must choose between Consistency (C) and Availability (A). You cannot have all three.',
          tr: 'CAP Teoremi, ağ bölünmesi (P) yaşayan dağıtık bir sistemde Tutarlılık (C) ve Erişilebilirlik (A) arasında seçim yapmanız gerektiğini dikte eder. Üçüne birden sahip olamazsınız.'
        },
        seniorExplanation: {
          en: 'Network partitions are inevitable in distributed systems, so P is a given. The real choice is always between CP (e.g., MongoDB, HBase) and AP (e.g., Cassandra, DynamoDB). However, "100% consistent" or "100% available" are extremes; modern systems use techniques like eventual consistency and tunable consistency (e.g., Quorum reads/writes in Cassandra) to balance these needs.',
          tr: 'Ağ bölünmeleri dağıtık sistemlerde kaçınılmazdır, bu nedenle P veri olarak kabul edilir. Asıl seçim her zaman CP (örn. MongoDB, HBase) ve AP (örn. Cassandra, DynamoDB) arasındadır. Ancak "100% tutarlı" veya "100% erişilebilir" uç noktalardır; modern sistemler bu ihtiyaçları dengelemek için nihai tutarlılık (eventual consistency) ve ayarlanabilir tutarlılık (Cassandra\'da Quorum okuma/yazma gibi) gibi teknikler kullanır.'
        },
        commonQuestions: [],
        followUpQuestions: [],
        commonMistakes: {
          en: 'Assuming you can choose CA in a distributed system over a wide area network. Network failures always happen.',
          tr: 'Geniş alan ağında (WAN) dağıtık bir sistemde CA\'yı seçebileceğinizi varsaymak. Ağ hataları her zaman olur.'
        },
        bestPractices: {
          en: 'Choose AP for systems where uptime is critical and stale data is acceptable (like social media feeds). Choose CP for financial transactions.',
          tr: 'Çalışma süresinin kritik olduğu ve eski verinin kabul edilebilir olduğu sistemler için (sosyal medya akışları gibi) AP\'yi seçin. Finansal işlemler için CP\'yi seçin.'
        },
        performance: {
          en: 'Strict consistency often requires distributed locks or consensus algorithms (like Paxos/Raft), which significantly increase latency. Availability-focused systems typically offer much lower latency.',
          tr: 'Sıkı tutarlılık genellikle gecikmeyi önemli ölçüde artıran dağıtık kilitler veya mutabakat algoritmaları (Paxos/Raft gibi) gerektirir. Erişilebilirlik odaklı sistemler genellikle çok daha düşük gecikme sunar.'
        },
        summary: {
          en: 'CAP Theorem is the ultimate trade-off in distributed systems: when the network fails, do you stop answering (CP) or answer with potentially old data (AP)?',
          tr: 'CAP Teoremi dağıtık sistemlerdeki nihai ödünleşimdir: ağ çöktüğünde yanıt vermeyi durdurur musunuz (CP) yoksa potansiyel olarak eski veriyle mi yanıt verirsiniz (AP)?'
        },
        flashcards: [],
        checklist: [],
        quiz: []
      }
    }
  ]
};

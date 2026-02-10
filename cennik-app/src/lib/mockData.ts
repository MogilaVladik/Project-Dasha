/** Shared mock data for the app — single source of truth for lists */

export const PODCASTS = [
  {
    id: 24,
    title: "Будущее российского ритейла",
    guest: "Дмитрий Иванов, CEO «Лента»",
    description:
      "Обсуждаем стратегию развития сети, работу с поставщиками и планы на 2025 год.",
    duration: "45 мин",
    date: "15 января 2025",
    season: 3,
    episode: 4,
  },
  {
    id: 23,
    title: "Цифровизация поставок",
    guest: "Анна Смирнова, CDO «X5 Group»",
    description:
      "Как технологии меняют логистику: от автоматизации складов до прогнозирования спроса.",
    duration: "38 мин",
    date: "1 января 2025",
    season: 3,
    episode: 3,
  },
  {
    id: 22,
    title: "Тренды категорийного менеджмента",
    guest: "Сергей Петров, эксперт Nielsen",
    description:
      "Анализ данных, оптимизация ассортимента и работа с новыми категориями товаров.",
    duration: "42 мин",
    date: "15 декабря 2024",
    season: 3,
    episode: 2,
  },
  {
    id: 21,
    title: "Экологичность в ритейле",
    guest: "Елена Волкова, директор по устойчивому развитию «Азбука Вкуса»",
    description:
      "Как бренды внедряют эко-стандарты и что это значит для поставщиков.",
    duration: "35 мин",
    date: "1 декабря 2024",
    season: 3,
    episode: 1,
  },
  {
    id: 20,
    title: "Маркетплейсы: новая реальность",
    guest: "Михаил Соколов, VP «Яндекс.Маркет»",
    description:
      "Стратегии продаж на маркетплейсах, работа с рейтингами и отзывами.",
    duration: "50 мин",
    date: "15 ноября 2024",
    season: 2,
    episode: 12,
  },
  {
    id: 19,
    title: "Ценообразование в нестабильные времена",
    guest: "Ольга Кузнецова, финансовый директор «Дикси»",
    description:
      "Как балансировать между рентабельностью и конкурентоспособностью.",
    duration: "40 мин",
    date: "1 ноября 2024",
    season: 2,
    episode: 11,
  },
] as const;

export type Podcast = (typeof PODCASTS)[number];

export const ARCHIVE_ISSUES = [
  { id: 12, year: 2025, quarter: "Q1", title: "Будущее поставок в цифровую эру", theme: "navy" as const },
  { id: 11, year: 2024, quarter: "Q4", title: "Итоги года: ритейл в цифрах", theme: "black" as const },
  { id: 10, year: 2024, quarter: "Q3", title: "Экологичность и устойчивость", theme: "navy" as const },
  { id: 9, year: 2024, quarter: "Q2", title: "Новые технологии логистики", theme: "black" as const },
  { id: 8, year: 2024, quarter: "Q1", title: "Омниканальная торговля", theme: "navy" as const },
  { id: 7, year: 2023, quarter: "Q4", title: "Тренды маркетплейсов", theme: "black" as const },
  { id: 6, year: 2023, quarter: "Q3", title: "Автоматизация складов", theme: "navy" as const },
  { id: 5, year: 2023, quarter: "Q2", title: "Категорийный менеджмент", theme: "black" as const },
  { id: 4, year: 2023, quarter: "Q1", title: "Стратегии ценообразования", theme: "navy" as const },
  { id: 3, year: 2022, quarter: "Q4", title: "Цифровая трансформация", theme: "black" as const },
  { id: 2, year: 2022, quarter: "Q3", title: "Работа с данными", theme: "navy" as const },
  { id: 1, year: 2022, quarter: "Q2", title: "Первый выпуск", theme: "black" as const },
] as const;

export type ArchiveIssue = (typeof ARCHIVE_ISSUES)[number];

export const AUTHORS = [
  { id: 1, name: "Александр Новиков", role: "Главный редактор", bio: "Более 15 лет в ритейл-журналистике. Бывший редактор Forbes Retail, специалист по стратегическому развитию торговых сетей.", articles: 48 },
  { id: 2, name: "Мария Лебедева", role: "Обозреватель логистики", bio: "Эксперт в области логистики и supply chain. MBA Стокгольмской школы экономики. Консультант для крупнейших дистрибьюторов.", articles: 32 },
  { id: 3, name: "Игорь Соболев", role: "Аналитик рынка", bio: "Специалист по категорийному менеджменту и рыночной аналитике. Бывший директор Nielsen Russia.", articles: 29 },
  { id: 4, name: "Елена Волкова", role: "Редактор подкастов", bio: "Журналист, ведущая, продюсер. Опыт работы на радио «Коммерсантъ FM» и РБК. Специализация: интервью с топ-менеджментом.", articles: 15 },
  { id: 5, name: "Дмитрий Ковалев", role: "Обозреватель технологий", bio: "Эксперт по цифровизации ритейла. CTO в нескольких стартапах. Специализация: автоматизация, AI и ML в торговле.", articles: 24 },
  { id: 6, name: "Ольга Смирнова", role: "Редактор маркетинга", bio: "Специалист по маркетинговым стратегиям в FMCG. 10 лет в брендинге и продвижении товаров массового потребления.", articles: 21 },
  { id: 7, name: "Сергей Петров", role: "Финансовый обозреватель", bio: "Аналитик рынка капитала. Специализация: финансовые показатели ритейлеров, инвестиции и M&A в торговле.", articles: 18 },
  { id: 8, name: "Анна Кузнецова", role: "Редактор трендов", bio: "Исследователь потребительского поведения. Регулярный спикер на отраслевых конференциях. Соавтор книги «Ритейл будущего».", articles: 27 },
] as const;

export type Author = (typeof AUTHORS)[number];

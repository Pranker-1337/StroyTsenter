export interface Property {
  id: number;
  title: string;
  price: number;
  district: string;
  type: 'apartment' | 'house' | 'commercial';
  image: string;
  area: number;
}

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "ЖК 'Премиум Плаза'",
    price: 85000,
    district: "Исмоили Сомони",
    type: 'apartment',
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    area: 75
  },
  {
    id: 2,
    title: "Бизнес-центр 'Душанбе'",
    price: 120000,
    district: "Шохмансур",
    type: 'commercial',
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    area: 150
  },
  {
    id: 3,
    title: "Вилла 'Зеленая Роща'",
    price: 250000,
    district: "Варзоб",
    type: 'house',
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    area: 320
  },
  {
    id: 4,
    title: "Апартаменты 'Центральные'",
    price: 65000,
    district: "Сино",
    type: 'apartment',
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
    area: 55
  },
  {
    id: 5,
    title: "Офис в 'Сити Тауэр'",
    price: 45000,
    district: "Исмоили Сомони",
    type: 'commercial',
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    area: 45
  },
  {
    id: 6,
    title: "Коттедж 'Сафед-Дара'",
    price: 180000,
    district: "Фирдавси",
    type: 'house',
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    area: 210
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Алишер Саидов",
    text: "Купили квартиру в ЖК 'Премиум Плаза' без проблем, всё быстро оформили. Очень довольны качеством строительства.",
    rating: 5
  },
  {
    id: 2,
    name: "Мадина Холова",
    text: "Хорошие цены и честные условия. Менеджеры всегда на связи, помогли с выбором планировки.",
    rating: 5
  },
  {
    id: 3,
    name: "Парвиз Назаров",
    text: "Рекомендую Stroy Tsentr, помогли выбрать лучший вариант для коммерции. Профессиональный подход.",
    rating: 5
  }
];

export const ADVANTAGES = [
  {
    title: "Прямые продажи",
    description: "Покупка напрямую от застройщика без посредников и лишних переплат."
  },
  {
    title: "Без комиссий",
    description: "Прозрачное ценообразование и отсутствие скрытых платежей."
  },
  {
    title: "Гибкая оплата",
    description: "Рассрочка и индивидуальные условия оплаты для каждого клиента."
  },
  {
    title: "Проверенные объекты",
    description: "Все объекты проходят строгий контроль качества и юридическую проверку."
  }
];

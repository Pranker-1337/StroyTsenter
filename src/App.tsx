/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Star, 
  MessageSquare, 
  ArrowRight,
  Home,
  Building2,
  Briefcase,
  Filter
} from 'lucide-react';
import { PROPERTIES, REVIEWS, ADVANTAGES, Property } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState({ type: 'all', district: 'all' });
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProperties = PROPERTIES.filter(p => {
    const typeMatch = filter.type === 'all' || p.type === filter.type;
    const districtMatch = filter.district === 'all' || p.district === filter.district;
    return typeMatch && districtMatch;
  });

  const districts = Array.from(new Set(PROPERTIES.map(p => p.district)));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', comment: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm">
              <Building2 className="text-white w-6 h-6" />
            </div>
            <div className={`font-bold text-xl tracking-tighter ${scrolled ? 'text-primary' : 'text-white'}`}>
              STROY <span className="text-accent">TSENTR</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest ${scrolled ? 'text-primary' : 'text-white'}`}>
            <a href="#about" className="hover:text-accent transition-colors">О компании</a>
            <a href="#objects" className="hover:text-accent transition-colors">Объекты</a>
            <a href="#advantages" className="hover:text-accent transition-colors">Преимущества</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
            <a 
              href="tel:+992934510606" 
              className="flex items-center gap-2 bg-accent text-white px-5 py-2 rounded-sm hover:bg-accent-hover transition-all"
            >
              <Phone size={16} />
              +992 93 451 06 06
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
            >
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold text-lg">О компании</a>
              <a href="#objects" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold text-lg">Объекты</a>
              <a href="#advantages" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold text-lg">Преимущества</a>
              <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold text-lg">Контакты</a>
              <a href="tel:+992934510606" className="flex items-center gap-3 text-accent font-bold text-lg">
                <Phone size={20} />
                +992 93 451 06 06
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80" 
            alt="Modern Building"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Офис продаж в Душанбе</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Продажа недвижимости <br />
              <span className="text-accent italic font-serif font-light">напрямую от застройщика</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-xl leading-relaxed">
              Квартиры, дома и коммерческая недвижимость по выгодным ценам в лучших районах столицы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#objects" className="btn-primary flex items-center justify-center gap-2">
                Смотреть объекты <ChevronRight size={18} />
              </a>
              <a href="#contact-form" className="btn-outline flex items-center justify-center gap-2">
                Оставить заявку
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-accent rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
                alt="Office"
                className="rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent p-8 text-white hidden lg:block">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-xs uppercase tracking-widest font-semibold">Лет на рынке</div>
              </div>
            </motion.div>

            <div>
              <h2 className="section-title">Надежность и опыт в строительстве</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Stroy Tsentr — это не просто компания, это ваш надежный партнер в мире недвижимости Таджикистана. Мы специализируемся на прямых продажах без посредников, гарантируя лучшую цену и юридическую чистоту каждой сделки.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Сданных объектов</div>
                </div>
              </div>

              <ul className="space-y-4">
                {['Прозрачные условия договора', 'Индивидуальный подход к каждому', 'Высокое качество материалов'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary font-medium">
                    <CheckCircle2 className="text-accent" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objects Section */}
      <section id="objects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Наши объекты</h2>
            <p className="section-subtitle">
              Выберите идеальное пространство для жизни или бизнеса из нашего актуального каталога.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                onClick={() => setFilter({ ...filter, type: 'all' })}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter.type === 'all' ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-gray-100'}`}
              >
                Все типы
              </button>
              <button 
                onClick={() => setFilter({ ...filter, type: 'apartment' })}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter.type === 'apartment' ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-gray-100'}`}
              >
                Квартиры
              </button>
              <button 
                onClick={() => setFilter({ ...filter, type: 'house' })}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter.type === 'house' ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-gray-100'}`}
              >
                Дома
              </button>
              <button 
                onClick={() => setFilter({ ...filter, type: 'commercial' })}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter.type === 'commercial' ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-gray-100'}`}
              >
                Коммерция
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((property) => (
                <motion.div
                  layout
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                      {property.type === 'apartment' ? 'Квартира' : property.type === 'house' ? 'Дом' : 'Коммерция'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-primary">{property.title}</h3>
                      <div className="text-accent font-bold text-lg">${property.price.toLocaleString()}</div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-accent" />
                        {property.district}
                      </div>
                      <div className="flex items-center gap-1">
                        <Home size={14} className="text-accent" />
                        {property.area} м²
                      </div>
                    </div>
                    <button className="w-full py-3 border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                      Подробнее
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">Наши преимущества</h2>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {ADVANTAGES.map((adv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 rounded-sm group hover:bg-accent transition-all duration-300">
                  <CheckCircle2 className="text-accent group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Отзывы клиентов</h2>
            <p className="section-subtitle">Что говорят о нас те, кто уже нашел свой дом с нашей помощью.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="p-8 bg-gray-50 rounded-sm relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="font-bold text-primary uppercase tracking-wider text-sm">{review.name}</div>
                <MessageSquare className="absolute top-8 right-8 text-gray-200" size={40} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section id="contact-form" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-primary p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">Получите бесплатную консультацию</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Наши эксперты помогут вам подобрать объект, который идеально соответствует вашим целям и бюджету.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Звоните нам</div>
                    <div className="font-bold">+992 93 451 06 06</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Наш офис</div>
                    <div className="font-bold">Душанбе, Pulodi Street 41</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-accent outline-none transition-all"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-accent outline-none transition-all"
                    placeholder="+992 XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Комментарий</label>
                  <textarea 
                    rows={3}
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-accent outline-none transition-all resize-none"
                    placeholder="Меня интересует..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts & Footer */}
      <footer id="contacts" className="bg-primary pt-24 pb-12 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-sm">
                  <Building2 className="text-white w-5 h-5" />
                </div>
                <div className="font-bold text-lg tracking-tighter">
                  STROY <span className="text-accent">TSENTR</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Премиальная недвижимость в Душанбе от застройщика. Качество, надежность и комфорт в каждой детали.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-accent transition-all">
                  <MessageSquare size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-accent transition-all">
                  <Phone size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-8">Навигация</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-accent transition-colors">О компании</a></li>
                <li><a href="#objects" className="hover:text-accent transition-colors">Объекты</a></li>
                <li><a href="#advantages" className="hover:text-accent transition-colors">Преимущества</a></li>
                <li><a href="#contact-form" className="hover:text-accent transition-colors">Заявка</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-8">Контакты</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent shrink-0" />
                  Душанбе, Pulodi Street 41
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-accent shrink-0" />
                  +992 93 451 06 06
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-accent shrink-0" />
                  Ежедневно 08:00 – 20:00
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-8">Локация</h4>
              <div className="w-full h-40 bg-white/5 rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs text-center p-4">
                  Карта Душанбе <br /> Pulodi Street 41
                </div>
                {/* Placeholder for real map */}
                <div className="w-full h-full bg-gray-800 opacity-50"></div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs uppercase tracking-widest">
            <div>© 2026 Stroy Tsentr. Все права защищены.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/992934510606" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <MessageSquare size={32} />
      </a>
    </div>
  );
}

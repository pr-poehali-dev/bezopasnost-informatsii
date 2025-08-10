import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      icon: 'Shield',
      title: 'Аудит информационной безопасности',
      description: 'Комплексная оценка защищенности ваших информационных систем и выявление уязвимостей'
    },
    {
      icon: 'Server',
      title: 'Поставка средств защиты информации',
      description: 'Поставка, установка и настройка сертифицированных средств защиты информации'
    },
    {
      icon: 'FileCheck',
      title: 'Аттестация информационных систем',
      description: 'Проведение аттестационных работ по требованиям ФСТЭК России и ФСБ России'
    }
  ];

  const advantages = [
    'Лицензированные специалисты',
    'Сертифицированные решения',
    'Соответствие ФСТЭК и ФСБ',
    'Полный цикл услуг'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Безопасность технологий и решений
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
                О компании
              </a>
              <a href="#licenses" className="text-gray-600 hover:text-primary transition-colors">
                Лицензии
              </a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-white mb-10 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Защита вашей информации — 
                <span className="text-blue-300"> наша миссия</span>
              </h2>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Профессиональные услуги в области информационной безопасности для российских организаций. 
                Аудит, поставка СЗИ, аттестация по требованиям ФСТЭК и ФСБ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Скачать презентацию
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <img 
                  src="/img/c0c6e93e-fd0b-4c62-9aa7-04ca31340440.jpg" 
                  alt="Информационная безопасность" 
                  className="rounded-2xl shadow-2xl max-w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный комплекс услуг по обеспечению информационной безопасности организаций
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="ghost" className="mt-6 p-0 h-auto text-primary hover:text-primary/80">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-1" size={16} />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">О компании</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Безопасность технологий и решений" — российская компания, специализирующаяся на комплексных 
                решениях в области информационной безопасности. Мы работаем с государственными и коммерческими 
                организациями, обеспечивая высокий уровень защиты их информационных активов.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Наша команда состоит из сертифицированных специалистов с многолетним опытом работы в сфере 
                информационной безопасности. Мы используем только проверенные и сертифицированные решения, 
                соответствующие требованиям российского законодательства.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Icon name="Users" className="text-primary mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Опытная команда</h3>
                </div>
                <p className="text-gray-600">
                  Сертифицированные специалисты с опытом более 10 лет в области ИБ
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Icon name="Award" className="text-primary mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Лицензии и сертификаты</h3>
                </div>
                <p className="text-gray-600">
                  Все необходимые лицензии ФСТЭК и ФСБ для работы с государственной тайной
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Icon name="Clock" className="text-primary mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Круглосуточная поддержка</h3>
                </div>
                <p className="text-gray-600">
                  24/7 техническая поддержка и оперативное реагирование на инциденты
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section id="licenses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Лицензии и сертификаты</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наша деятельность подтверждена всеми необходимыми лицензиями и сертификатами
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Лицензия ФСТЭК', description: 'На деятельность по технической защите конфиденциальной информации' },
              { title: 'Лицензия ФСБ', description: 'На осуществление работ с использованием сведений, составляющих государственную тайну' },
              { title: 'ISO 27001', description: 'Международный стандарт управления информационной безопасностью' },
              { title: 'Аттестат ФСТЭК', description: 'На проведение работ по аттестации объектов информатизации' }
            ].map((license, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Certificate" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{license.title}</h3>
                <p className="text-sm text-gray-600">{license.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Контакты</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="MapPin" className="text-blue-400 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-gray-300">123456, г. Москва, ул. Примерная, д. 1, офис 100</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Phone" className="text-blue-400 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Mail" className="text-blue-400 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@security-tech.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Clock" className="text-blue-400 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-gray-300">Пн-Пт: 9:00-18:00</p>
                    <p className="text-gray-300">Сб-Вс: по договоренности</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="p-8 bg-white text-gray-900">
                <h3 className="text-xl font-semibold mb-6">Получить консультацию</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Компания</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Название компании"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Опишите ваши потребности в области ИБ"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <Icon name="Shield" className="text-white" size={16} />
              </div>
              <span className="font-semibold">Безопасность технологий и решений</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
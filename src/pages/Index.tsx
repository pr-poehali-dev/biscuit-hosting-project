import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Icon name="Cookie" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-heading font-bold text-secondary-800">Бисквит Хостинг</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="text-secondary-700 hover:text-primary-500 transition-colors">Главная</button>
              <button onClick={() => scrollToSection("pricing")} className="text-secondary-700 hover:text-primary-500 transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection("features")} className="text-secondary-700 hover:text-primary-500 transition-colors">Возможности</button>
              <button onClick={() => scrollToSection("about")} className="text-secondary-700 hover:text-primary-500 transition-colors">О нас</button>
              <button onClick={() => scrollToSection("blog")} className="text-secondary-700 hover:text-primary-500 transition-colors">Блог</button>
              <button onClick={() => scrollToSection("faq")} className="text-secondary-700 hover:text-primary-500 transition-colors">FAQ</button>
              <button onClick={() => scrollToSection("contact")} className="text-secondary-700 hover:text-primary-500 transition-colors">Контакты</button>
            </div>
            <Button className="bg-primary-500 hover:bg-primary-600 text-white">
              Начать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary-100 text-primary-700 hover:bg-primary-200">
              Быстро. Надёжно. Доступно.
            </Badge>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-secondary-900 mb-6">
              Хостинг, который<br />
              <span className="text-primary-500">не подведёт</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Быстрые серверы, SSD-хранилище и оптимизированная инфраструктура для вашего успеха в интернете
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 transition-transform hover:scale-105">
                Попробовать бесплатно
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary-300 text-secondary-700 hover:bg-secondary-50 text-lg px-8">
                Узнать больше
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-heading font-bold text-primary-500">99.9%</div>
                <div className="text-secondary-600 mt-2">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-primary-500">24/7</div>
                <div className="text-secondary-600 mt-2">Поддержка</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-primary-500">5000+</div>
                <div className="text-secondary-600 mt-2">Клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
              Возможности хостинга
            </h2>
            <p className="text-xl text-secondary-600">
              Всё, что нужно для быстрого и надёжного сайта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-primary-500" size={24} />
                </div>
                <CardTitle className="text-2xl">Быстрые серверы</CardTitle>
                <CardDescription>
                  Современное серверное оборудование обеспечивает мгновенную загрузку вашего сайта
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="HardDrive" className="text-primary-500" size={24} />
                </div>
                <CardTitle className="text-2xl">SSD хранилище</CardTitle>
                <CardDescription>
                  Твердотельные накопители для максимальной скорости чтения и записи данных
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="text-primary-500" size={24} />
                </div>
                <CardTitle className="text-2xl">Оптимизация</CardTitle>
                <CardDescription>
                  Настроенная инфраструктура для максимальной производительности вашего проекта
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-primary-500" size={24} />
                </div>
                <CardTitle className="text-2xl">Безопасность</CardTitle>
                <CardDescription>
                  SSL-сертификаты, защита от DDoS и ежедневные резервные копии
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart" className="text-primary-500" size={24} />
                </div>
                <CardTitle className="text-2xl">Масштабирование</CardTitle>
                <CardDescription>
                  Легко увеличивайте ресурсы по мере роста вашего проекта
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="HeadphonesIcon" className="text-primary-500" size={24} />
                </div>
                <CardTitle className="text-2xl">Поддержка 24/7</CardTitle>
                <CardDescription>
                  Наши специалисты всегда готовы помочь в любое время суток
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
              Тарифные планы
            </h2>
            <p className="text-xl text-secondary-600">
              Выберите оптимальный тариф для вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Стартовый</CardTitle>
                <CardDescription>Для небольших сайтов</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-heading font-bold text-secondary-900">₽299</span>
                  <span className="text-secondary-600">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>10 GB SSD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>100 GB трафика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>1 сайт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>SSL-сертификат</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>Техподдержка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-secondary-700 hover:bg-secondary-800 text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-500 hover:shadow-xl transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Бизнес</CardTitle>
                <CardDescription>Для растущих проектов</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-heading font-bold text-secondary-900">₽799</span>
                  <span className="text-secondary-600">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>50 GB SSD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>Безлимитный трафик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>5 сайтов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>SSL-сертификат</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>Ежедневный бэкап</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Профессиональный</CardTitle>
                <CardDescription>Для крупных проектов</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-heading font-bold text-secondary-900">₽1499</span>
                  <span className="text-secondary-600">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>200 GB SSD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>Безлимитный трафик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>Безлимит сайтов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>SSL-сертификат</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>VIP поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span>Выделенные ресурсы</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-secondary-700 hover:bg-secondary-800 text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
                О компании
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-secondary-700 mb-6">
                  Бисквит Хостинг — это современная хостинг-компания, которая предоставляет надёжные услуги размещения сайтов с 2015 года.
                </p>
                <p className="text-lg text-secondary-700 mb-6">
                  Мы используем только самое современное оборудование и технологии, чтобы обеспечить максимальную скорость и стабильность работы ваших проектов.
                </p>
                <p className="text-lg text-secondary-700">
                  Наша команда состоит из опытных специалистов, готовых помочь вам 24/7. Мы гордимся тем, что более 5000 клиентов доверяют нам свои сайты.
                </p>
              </div>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Award" className="text-primary-500" size={24} />
                      Опыт
                    </CardTitle>
                    <CardDescription>
                      10 лет на рынке хостинг-услуг
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-l-4 border-l-primary-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Users" className="text-primary-500" size={24} />
                      Клиенты
                    </CardTitle>
                    <CardDescription>
                      Более 5000 довольных клиентов
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-l-4 border-l-primary-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Server" className="text-primary-500" size={24} />
                      Инфраструктура
                    </CardTitle>
                    <CardDescription>
                      Собственные дата-центры в России
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
              Блог
            </h2>
            <p className="text-xl text-secondary-600">
              Полезные статьи о хостинге и веб-разработке
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary-100 text-primary-700">Новости</Badge>
                <CardTitle className="text-xl">Как выбрать хостинг для вашего сайта</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Icon name="Calendar" size={16} />
                  15 декабря 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-700 mb-4">
                  Подробное руководство по выбору оптимального хостинга в зависимости от типа вашего проекта...
                </p>
                <Button variant="link" className="text-primary-500 p-0">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-1" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary-100 text-primary-700">Руководства</Badge>
                <CardTitle className="text-xl">Оптимизация скорости загрузки сайта</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Icon name="Calendar" size={16} />
                  10 декабря 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-700 mb-4">
                  10 проверенных способов ускорить ваш сайт и улучшить пользовательский опыт...
                </p>
                <Button variant="link" className="text-primary-500 p-0">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-1" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary-100 text-primary-700">Безопасность</Badge>
                <CardTitle className="text-xl">SSL-сертификаты: зачем они нужны</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Icon name="Calendar" size={16} />
                  5 декабря 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-700 mb-4">
                  Всё, что нужно знать о SSL-сертификатах и безопасности вашего сайта...
                </p>
                <Button variant="link" className="text-primary-500 p-0">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-1" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-secondary-600">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-secondary-900 hover:text-primary-500">
                  Как быстро активируется хостинг после оплаты?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-700">
                  Хостинг активируется автоматически в течение 5-10 минут после подтверждения оплаты. Вы получите письмо с данными для доступа на указанный email.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-secondary-900 hover:text-primary-500">
                  Можно ли перенести сайт с другого хостинга?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-700">
                  Да, мы предоставляем бесплатный перенос сайта с любого хостинга. Наши специалисты помогут вам с переносом всех файлов и баз данных без простоя.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-secondary-900 hover:text-primary-500">
                  Есть ли тестовый период?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-700">
                  Мы предоставляем 14 дней для тестирования наших услуг. Если вы не будете удовлетворены качеством, мы вернём деньги без лишних вопросов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-secondary-900 hover:text-primary-500">
                  Как работает техническая поддержка?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-700">
                  Наша поддержка работает 24/7 без выходных. Вы можете связаться с нами через онлайн-чат, email или телефон. Среднее время ответа — менее 15 минут.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-secondary-900 hover:text-primary-500">
                  Какие способы оплаты доступны?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-700">
                  Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), электронными кошельками, а также по счёту для юридических лиц.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-secondary-900 hover:text-primary-500">
                  Делаете ли вы резервные копии?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-700">
                  Да, мы автоматически создаём ежедневные резервные копии всех сайтов. Бэкапы хранятся 30 дней, и вы можете восстановить сайт в любой момент.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-secondary-600">
              Готовы ответить на ваши вопросы
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Отправьте сообщение</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input placeholder="Тема" />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" rows={5} />
                    </div>
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                      Отправить
                      <Icon name="Send" className="ml-2" size={18} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary-500" size={24} />
                    Email
                  </CardTitle>
                  <CardDescription className="text-base">
                    support@biskvit-hosting.ru
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary-500" size={24} />
                    Телефон
                  </CardTitle>
                  <CardDescription className="text-base">
                    +7 (495) 123-45-67
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary-500" size={24} />
                    Адрес
                  </CardTitle>
                  <CardDescription className="text-base">
                    Москва, ул. Примерная, д. 123
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Clock" className="text-primary-500" size={24} />
                    Режим работы
                  </CardTitle>
                  <CardDescription className="text-base">
                    Поддержка 24/7<br />
                    Офис: Пн-Пт 9:00-18:00
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <Icon name="Cookie" className="text-white" size={24} />
                </div>
                <span className="text-xl font-heading font-bold">Бисквит Хостинг</span>
              </div>
              <p className="text-secondary-300">
                Надёжный хостинг для вашего успеха в интернете
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Компания</h4>
              <ul className="space-y-2 text-secondary-300">
                <li><a href="#about" className="hover:text-primary-400 transition-colors">О нас</a></li>
                <li><a href="#blog" className="hover:text-primary-400 transition-colors">Блог</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-secondary-300">
                <li><a href="#pricing" className="hover:text-primary-400 transition-colors">Тарифы</a></li>
                <li><a href="#features" className="hover:text-primary-400 transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">VPS</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Домены</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Поддержка</h4>
              <ul className="space-y-2 text-secondary-300">
                <li><a href="#faq" className="hover:text-primary-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">База знаний</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">Связаться</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Статус сервисов</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400">
              © 2024 Бисквит Хостинг. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
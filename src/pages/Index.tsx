import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showConsole, setShowConsole] = useState(false);
  const [consoleStep, setConsoleStep] = useState(0);
  const [selectedTariff, setSelectedTariff] = useState("");

  const consoleSteps = [
    { command: "biskvit init", output: "🍪 Инициализация Бисквит Хостинг...\n✓ Проверка системы\n✓ Подготовка окружения" },
    { command: "biskvit show-tariffs", output: "" },
    { command: "biskvit select", output: "" },
  ];

  const handleStartConsole = () => {
    setShowConsole(true);
    setConsoleStep(0);
    setSelectedTariff("");
    setTimeout(() => setConsoleStep(1), 1000);
  };

  const handleSelectTariff = (tariff: string) => {
    setSelectedTariff(tariff);
    setConsoleStep(3);
  };

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
            <Button onClick={handleStartConsole} className="bg-primary-500 hover:bg-primary-600 text-white">
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
              <Button onClick={handleStartConsole} size="lg" className="bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 transition-transform hover:scale-105">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-6">
                  Управляйте хостингом<br />
                  <span className="text-primary-500">из терминала</span>
                </h2>
                <p className="text-lg text-secondary-700 mb-6">
                  Полный контроль над вашими файлами, настройками и тарифами через удобный интерфейс командной строки
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon name="Check" className="text-primary-500" size={16} />
                    </div>
                    <span className="text-secondary-700">Мгновенный доступ к файлам</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon name="Check" className="text-primary-500" size={16} />
                    </div>
                    <span className="text-secondary-700">Быстрое переключение тарифов</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon name="Check" className="text-primary-500" size={16} />
                    </div>
                    <span className="text-secondary-700">Полная автоматизация задач</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-secondary-800 rounded-lg shadow-2xl overflow-hidden border-2 border-secondary-700">
                  <div className="bg-secondary-900 px-4 py-3 flex items-center gap-2 border-b border-secondary-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-secondary-400 text-sm ml-4 font-mono">biskvit-console</span>
                  </div>
                  <div className="p-6 font-mono text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-primary-500">user@biskvit:~$</span>
                      <span className="text-secondary-300">ls -la</span>
                    </div>
                    <div className="text-secondary-400 pl-4 space-y-1">
                      <div className="flex items-center gap-3">
                        <Icon name="Folder" className="text-primary-400" size={14} />
                        <span>public_html</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Folder" className="text-primary-400" size={14} />
                        <span>logs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="FileText" className="text-secondary-500" size={14} />
                        <span>index.php</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="FileText" className="text-secondary-500" size={14} />
                        <span>config.json</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-primary-500">user@biskvit:~$</span>
                      <span className="text-secondary-300">show-tariff</span>
                    </div>
                    <div className="bg-secondary-900 rounded p-3 mt-2">
                      <div className="text-primary-400 mb-2">Текущий тариф: <span className="text-white font-semibold">Бизнес</span></div>
                      <div className="text-secondary-400 text-xs space-y-1">
                        <div>• SSD: 42GB / 50GB</div>
                        <div>• Сайтов: 3 / 5</div>
                        <div>• Трафик: безлимит</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-primary-500">user@biskvit:~$</span>
                      <span className="text-secondary-300 animate-pulse">_</span>
                    </div>
                  </div>
                </div>
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

      <Dialog open={showConsole} onOpenChange={setShowConsole}>
        <DialogContent className="max-w-4xl bg-secondary-900 text-white border-2 border-secondary-700">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-white">
              <Icon name="Terminal" className="text-primary-500" size={24} />
              Консоль Бисквит Хостинг
            </DialogTitle>
            <DialogDescription className="text-secondary-400">
              Выберите тариф и начните работу с вашим хостингом
            </DialogDescription>
          </DialogHeader>
          <div className="bg-secondary-800 rounded-lg p-6 font-mono text-sm max-h-[600px] overflow-y-auto">
            {consoleStep >= 1 && (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary-500">user@biskvit:~$</span>
                  <span className="text-secondary-300">{consoleSteps[0].command}</span>
                </div>
                <div className="text-secondary-400 pl-4 mb-4 whitespace-pre-line">
                  {consoleSteps[0].output}
                </div>
              </>
            )}

            {consoleStep >= 1 && (
              <>
                <div className="flex items-center gap-2 mb-2 mt-6">
                  <span className="text-primary-500">user@biskvit:~$</span>
                  <span className="text-secondary-300">{consoleSteps[1].command}</span>
                </div>
                <div className="pl-4 mb-4">
                  <div className="text-primary-400 mb-3">📋 Доступные тарифы:</div>
                  <div className="space-y-3">
                    <div 
                      onClick={() => handleSelectTariff("Стартовый")}
                      className="bg-secondary-900 rounded p-4 cursor-pointer hover:bg-secondary-700 transition-colors border-2 border-transparent hover:border-primary-500"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">1. Стартовый</span>
                        <span className="text-primary-400 font-bold">₽299/мес</span>
                      </div>
                      <div className="text-secondary-400 text-xs space-y-1">
                        <div>• SSD: 10 GB</div>
                        <div>• Трафик: 100 GB</div>
                        <div>• Сайтов: 1</div>
                      </div>
                    </div>
                    <div 
                      onClick={() => handleSelectTariff("Бизнес")}
                      className="bg-secondary-900 rounded p-4 cursor-pointer hover:bg-secondary-700 transition-colors border-2 border-primary-500"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">2. Бизнес</span>
                          <Badge className="bg-primary-500 text-white text-xs">Популярный</Badge>
                        </div>
                        <span className="text-primary-400 font-bold">₽799/мес</span>
                      </div>
                      <div className="text-secondary-400 text-xs space-y-1">
                        <div>• SSD: 50 GB</div>
                        <div>• Трафик: Безлимит</div>
                        <div>• Сайтов: 5</div>
                      </div>
                    </div>
                    <div 
                      onClick={() => handleSelectTariff("Профессиональный")}
                      className="bg-secondary-900 rounded p-4 cursor-pointer hover:bg-secondary-700 transition-colors border-2 border-transparent hover:border-primary-500"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">3. Профессиональный</span>
                        <span className="text-primary-400 font-bold">₽1499/мес</span>
                      </div>
                      <div className="text-secondary-400 text-xs space-y-1">
                        <div>• SSD: 200 GB</div>
                        <div>• Трафик: Безлимит</div>
                        <div>• Сайтов: Безлимит</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {consoleStep >= 3 && selectedTariff && (
              <>
                <div className="flex items-center gap-2 mb-2 mt-6">
                  <span className="text-primary-500">user@biskvit:~$</span>
                  <span className="text-secondary-300">biskvit select "{selectedTariff}"</span>
                </div>
                <div className="pl-4 mb-4">
                  <div className="bg-secondary-900 rounded p-4 border-2 border-primary-500">
                    <div className="text-primary-400 mb-2">✓ Тариф выбран: <span className="text-white font-semibold">{selectedTariff}</span></div>
                    <div className="text-secondary-400 text-xs space-y-2 mt-3">
                      <div>✓ Создание учетной записи...</div>
                      <div>✓ Настройка серверного окружения...</div>
                      <div>✓ Установка SSL-сертификата...</div>
                      <div>✓ Подготовка файловой системы...</div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-secondary-700">
                      <div className="text-primary-400 mb-2">🎉 Всё готово!</div>
                      <div className="text-secondary-300 text-xs mb-3">
                        Ваш хостинг активирован и готов к использованию.
                      </div>
                      <Button 
                        onClick={() => {
                          setShowConsole(false);
                          scrollToSection("contact");
                        }}
                        className="w-full bg-primary-500 hover:bg-primary-600 text-white"
                      >
                        Связаться с нами
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {consoleStep < 3 && (
              <div className="flex items-center gap-2 mt-4">
                <span className="text-primary-500">user@biskvit:~$</span>
                <span className="text-secondary-300 animate-pulse">_</span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
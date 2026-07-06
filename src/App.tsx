import { useState, useEffect, useCallback } from 'react';
import {
  Code2,
  Globe,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  Check,
  Star,
  Zap,
  Users,
  Award,
  Play,
  BookOpen,
  Terminal,
  Smartphone,
  Cloud,
  Shield,
  Mail,
  MapPin,
  Send,
  Loader2,
  Sparkles,
} from 'lucide-react';

const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      education: 'التعليم',
      pricing: 'الباقات',
      contact: 'تواصل معنا',
    },
    hero: {
      title: 'طور حلولك البرمجية مع',
      brand: 'Torrema',
      subtitle: 'نقدم حلول برمجية ذكية ومواقع إلكترونية احترافية تلبي احتياجات عملك',
      cta: 'ابدأ الآن',
      learnMore: 'اكتشف المزيد',
    },
    stats: {
      projects: 'مشروع منجز',
      clients: 'عميل سعيد',
      years: 'سنوات خبرة',
      support: 'دعم فني',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'نقدم مجموعة متكاملة من الخدمات التقنية',
      items: [
        { title: 'تطوير البرمجيات', desc: 'حلول برمجية مخصصة تناسب احتياجات عملك' },
        { title: 'تصميم المواقع', desc: 'مواقع إلكترونية حديثة ومتجاوبة' },
        { title: 'تطبيقات الجوال', desc: 'تطبيقات ذكية لأنظمة iOS و Android' },
        { title: 'الخدمات السحابية', desc: 'استضافة وحلول سحابية آمنة' },
        { title: 'الأمن السيبراني', desc: 'حماية بياناتك وأنظمتك' },
        { title: 'الذكاء الاصطناعي', desc: 'حلول ذكية تعتمد على AI' },
      ],
    },
    education: {
      title: 'التعليم والتدريب',
      subtitle: 'تعلم من الخبراء واكتسب مهارات حقيقية',
      courses: [
        { title: 'تطوير واجهات المستخدم', desc: 'تعلم React و Vue و Angular من الصفر حتى الاحتراف', hours: '40 ساعة', level: 'مبتدئ - متقدم' },
        { title: 'تطوير الخوادم', desc: 'Node.js و Python و databases الاحترافية', hours: '50 ساعة', level: 'متوسط - متقدم' },
        { title: 'تصميم UI/UX', desc: 'مبادئ التصميم وأدوات Figma و Adobe XD', hours: '30 ساعة', level: 'مبتدئ - متوسط' },
        { title: 'الأمن السيبراني', desc: 'حماية الأنظمة والبيانات من التهديدات', hours: '45 ساعة', level: 'متوسط - متقدم' },
      ],
      enroll: 'سجل الآن',
    },
    pricing: {
      title: 'باقات الأسعار',
      subtitle: 'اختر الباقة المناسبة لاحتياجاتك',
      popular: 'الأكثر طلباً',
      perMonth: '/شهرياً',
      getStarted: 'ابدأ الآن',
      contact: 'تواصل معنا',
      plans: [
        { name: 'المبتدئ', price: '99', features: ['موقع بسيط', '5 صفحات', 'دعم فني 3 أشهر', 'تحسين SEO'] },
        { name: 'الاحترافي', price: '299', features: ['موقع متكامل', '15 صفحة', 'دعم فني سنة', 'لوحة تحكم', 'تكامل الدفع'] },
        { name: 'المؤسسي', price: '999', features: ['حلول مخصصة', 'صفحات غير محدودة', 'دعم على مدار الساعة', 'API مخصص', 'تدريب الفريق'] },
      ],
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      send: 'إرسال',
      info: {
        address: 'المملكة العربية السعودية',
        email: 'abdulreadhido@gmail.com',
      },
    },
    footer: {
      rights: 'جميع الحقوق محفوظة',
      made: 'صنع بحب من Torrema',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      education: 'Education',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    hero: {
      title: 'Build Your Software Solutions with',
      brand: 'Torrema',
      subtitle: 'We provide smart software solutions and professional websites that meet your business needs',
      cta: 'Get Started',
      learnMore: 'Learn More',
    },
    stats: {
      projects: 'Completed Projects',
      clients: 'Happy Clients',
      years: 'Years Experience',
      support: '24/7 Support',
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer a comprehensive range of technical services',
      items: [
        { title: 'Software Development', desc: 'Custom software solutions tailored to your business needs' },
        { title: 'Web Design', desc: 'Modern responsive websites and web applications' },
        { title: 'Mobile Apps', desc: 'Smart applications for iOS and Android' },
        { title: 'Cloud Services', desc: 'Secure hosting and cloud solutions' },
        { title: 'Cybersecurity', desc: 'Protect your data and systems' },
        { title: 'AI Solutions', desc: 'Intelligent solutions powered by AI' },
      ],
    },
    education: {
      title: 'Education & Training',
      subtitle: 'Learn from experts and gain real skills',
      courses: [
        { title: 'Frontend Development', desc: 'Learn React, Vue, and Angular from scratch to mastery', hours: '40 hours', level: 'Beginner - Advanced' },
        { title: 'Backend Development', desc: 'Node.js, Python, and professional databases', hours: '50 hours', level: 'Intermediate - Advanced' },
        { title: 'UI/UX Design', desc: 'Design principles, Figma, and Adobe XD', hours: '30 hours', level: 'Beginner - Intermediate' },
        { title: 'Cybersecurity', desc: 'Protect systems and data from threats', hours: '45 hours', level: 'Intermediate - Advanced' },
      ],
      enroll: 'Enroll Now',
    },
    pricing: {
      title: 'Pricing Plans',
      subtitle: 'Choose the right plan for your needs',
      popular: 'Most Popular',
      perMonth: '/month',
      getStarted: 'Get Started',
      contact: 'Contact Us',
      plans: [
        { name: 'Starter', price: '99', features: ['Simple website', '5 pages', '3 months support', 'SEO optimization'] },
        { name: 'Professional', price: '299', features: ['Complete website', '15 pages', '1 year support', 'Admin panel', 'Payment integration'] },
        { name: 'Enterprise', price: '999', features: ['Custom solutions', 'Unlimited pages', '24/7 support', 'Custom API', 'Team training'] },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: "We're here to help you",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      info: {
        address: 'Saudi Arabia',
        email: 'abdulreadhido@gmail.com',
      },
    },
    footer: {
      rights: 'All rights reserved',
      made: 'Made with love by Torrema',
    },
  },
};

type Language = 'ar' | 'en';

function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState<'lang' | 'theme' | null>(null);

  const t = translations[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'services', 'education', 'pricing', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add Tawk.to chat script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6a15fe719bfae41c32321ce1/1jpiujr9h';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleLangChange = useCallback(() => {
    setTransitionType('lang');
    setIsTransitioning(true);
    setTimeout(() => {
      setLang(lang === 'ar' ? 'en' : 'ar');
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionType(null);
      }, 300);
    }, 200);
  }, [lang]);

  const handleThemeChange = useCallback(() => {
    setTransitionType('theme');
    setIsTransitioning(true);
    setTimeout(() => {
      setDark(!dark);
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionType(null);
      }, 300);
    }, 200);
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        dark ? 'dark bg-slate-900 text-white' : 'bg-white text-slate-900'
      } ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
          <div className={`absolute inset-0 ${transitionType === 'lang' ? 'bg-emerald-500/10' : 'bg-slate-900/10'} animate-pulse`} />
          <div className="relative z-10">
            <Loader2 className={`w-12 h-12 animate-spin ${transitionType === 'lang' ? 'text-emerald-500' : 'text-slate-700'}`} />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? dark
              ? 'bg-slate-900/95 backdrop-blur-lg shadow-xl shadow-slate-900/50'
              : 'bg-white/95 backdrop-blur-lg shadow-xl shadow-slate-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-110">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Torrema
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === key
                      ? 'text-emerald-500 bg-emerald-500/10'
                      : dark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {label}
                  {activeSection === key && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={handleLangChange}
                disabled={isTransitioning}
                className={`relative overflow-hidden px-4 py-2 rounded-xl font-bold transition-all duration-300 ${
                  dark
                    ? 'bg-gradient-to-r from-emerald-600/20 to-teal-600/20 hover:from-emerald-600/30 hover:to-teal-600/30 text-emerald-400 border border-emerald-500/30'
                    : 'bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 text-emerald-600 border border-emerald-200'
                } disabled:opacity-50`}
              >
                {isTransitioning && transitionType === 'lang' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
                )}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={handleThemeChange}
                disabled={isTransitioning}
                className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  dark
                    ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20 hover:from-yellow-400/30 hover:to-orange-400/30 text-yellow-400 border border-yellow-500/30'
                    : 'bg-gradient-to-br from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-700 border border-slate-300'
                } disabled:opacity-50`}
              >
                {isTransitioning && transitionType === 'theme' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : dark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`md:hidden w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  dark
                    ? 'bg-slate-800 text-white hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className={`md:hidden pb-6 ${dark ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-lg rounded-b-2xl`}>
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className={`block w-full text-right px-6 py-4 rounded-xl mx-2 mt-2 transition-all duration-300 ${
                    activeSection === key
                      ? 'bg-emerald-500/10 text-emerald-500'
                      : dark
                      ? 'hover:bg-slate-800 text-slate-300'
                      : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 transition-colors duration-700 ${dark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-emerald-50 via-white to-teal-50'}`} />
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/30 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/30 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/5 dark:to-teal-500/5 rounded-full blur-3xl" />

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${dark ? 'bg-emerald-400/30' : 'bg-emerald-500/20'} animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${dark ? 'opacity-5' : 'opacity-[0.03]'}`}
          style={{
            backgroundImage: `radial-gradient(circle, ${dark ? '#10b981' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 animate-fade-in ${
            dark
              ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-500/30'
              : 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700'
          }`}>
            <Sparkles className="w-4 h-4 animate-pulse" />
            {lang === 'ar' ? 'حلول ذكية ومبتكرة' : 'Smart & Innovative Solutions'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            {t.hero.title}{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              {t.hero.brand}
            </span>
          </h1>

          <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-slide-up-delay ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay-2">
            <button
              onClick={() => scrollTo('pricing')}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold text-lg shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollTo('services')}
              className={`group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2 ${
                dark
                  ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-emerald-500/50'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-emerald-500/50 shadow-lg'
              }`}
            >
              {t.hero.learnMore}
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-delay">
            {[
              { num: '250+', label: t.stats.projects, icon: Award },
              { num: '150+', label: t.stats.clients, icon: Users },
              { num: '8+', label: t.stats.years, icon: Star },
              { num: '24/7', label: t.stats.support, icon: Shield },
            ].map((stat, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                  dark
                    ? 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/30'
                    : 'bg-white/80 hover:bg-white backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-100'
                }`}
              >
                <stat.icon className="w-8 h-8 mb-3 text-emerald-500 mx-auto group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  {stat.num}
                </div>
                <div className={`text-sm mt-1 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className={`w-8 h-12 rounded-full border-2 ${dark ? 'border-slate-600' : 'border-slate-300'} flex items-start justify-center p-2`}>
            <div className={`w-1.5 h-3 rounded-full ${dark ? 'bg-slate-500' : 'bg-slate-400'} animate-pulse`} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 transition-colors duration-500 ${dark ? 'bg-slate-800/30' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              dark ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
            }`}>
              <Zap className="w-4 h-4" />
              {lang === 'ar' ? 'ماذا نقدم' : 'What We Offer'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Terminal, ...t.services.items[0] },
              { icon: Globe, ...t.services.items[1] },
              { icon: Smartphone, ...t.services.items[2] },
              { icon: Cloud, ...t.services.items[3] },
              { icon: Shield, ...t.services.items[4] },
              { icon: Zap, ...t.services.items[5] },
            ].map((service, i) => (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden ${
                  dark
                    ? 'bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-emerald-500/30'
                    : 'bg-white hover:shadow-2xl border border-slate-100'
                } shadow-lg`}
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-300 rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-500 transition-colors">{service.title}</h3>
                  <p className={dark ? 'text-slate-400' : 'text-slate-600'}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              dark ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-700'
            }`}>
              <GraduationCap className="w-4 h-4" />
              {lang === 'ar' ? 'تعلم من الخبراء' : 'Learn from Experts'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.education.title}</h2>
            <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.education.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.education.courses.map((course, i) => (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden ${
                  dark
                    ? 'bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-teal-500/30'
                    : 'bg-white hover:shadow-2xl border border-slate-100'
                } shadow-lg`}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 rounded-full blur-3xl transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-sm px-3 py-1.5 rounded-full font-medium ${
                      dark
                        ? 'bg-slate-700 text-slate-300'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {course.hours}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{course.title}</h3>
                  <p className={`mb-6 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {course.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${
                      dark ? 'text-teal-400' : 'text-teal-600'
                    }`}>
                      {course.level}
                    </span>
                    <button
                      onClick={() => scrollTo('pricing')}
                      className="flex items-center gap-2 text-emerald-500 hover:text-emerald-600 transition-colors font-medium group/btn"
                    >
                      {t.education.enroll}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-24 transition-colors duration-500 ${dark ? 'bg-slate-800/30' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              dark ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
            }`}>
              <Star className="w-4 h-4" />
              {lang === 'ar' ? 'اختر باقتك' : 'Choose Your Plan'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.pricing.title}</h2>
            <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  i === 1
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl shadow-emerald-500/30'
                    : dark
                    ? 'bg-slate-800 border border-slate-700'
                    : 'bg-white shadow-lg border border-slate-100'
                }`}
              >
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 rounded-full text-sm font-bold shadow-lg">
                    {t.pricing.popular}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={i === 1 ? 'text-white/70' : 'text-slate-500'}>
                    {t.pricing.perMonth}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        i === 1 ? 'bg-white/20' : 'bg-emerald-500/10'
                      }`}>
                        <Check className={`w-3 h-3 ${i === 1 ? 'text-white' : 'text-emerald-500'}`} />
                      </div>
                      <span className={i === 1 ? 'text-white/90' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {i === 1 ? (
                  <div className="space-y-3">
                    <a
                      href="https://buy.stripe.com/test_8x28wRdxJ8Rd7MVgzi8Vi01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 bg-white text-emerald-600 rounded-xl font-bold text-center hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] shadow-lg"
                    >
                      {t.pricing.getStarted}
                    </a>
                    <div className="flex justify-center">
                      <stripe-buy-button
                        buy-button-id="buy_btn_1TqBBERz5odtTXroEwIN1Pxi"
                        publishable-key="pk_test_51TnDkBRz5odtTXroiRwCSsQnNk1ggf9ee2bGdvkVeCPZUnLnv27whFqakNabb05ZjxOGLIqiFJh7ih9Rd5DdwmhY00kCMuCMqI"
                      ></stripe-buy-button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => scrollTo('contact')}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] ${
                      dark
                        ? 'bg-slate-700 hover:bg-slate-600 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {t.pricing.contact}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              dark ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
            }`}>
              <Mail className="w-4 h-4" />
              {lang === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.contact.title}</h2>
            <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className={`p-8 rounded-2xl shadow-lg ${
              dark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100'
            }`}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-4 rounded-xl transition-all duration-300 ${
                      dark
                        ? 'bg-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500'
                        : 'bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500'
                    } border border-slate-200 dark:border-slate-600 outline-none`}
                    placeholder={t.contact.name}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-4 rounded-xl transition-all duration-300 ${
                      dark
                        ? 'bg-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500'
                        : 'bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500'
                    } border border-slate-200 dark:border-slate-600 outline-none`}
                    placeholder={t.contact.email}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.contact.message}
                  </label>
                  <textarea
                    rows={5}
                    className={`w-full px-4 py-4 rounded-xl transition-all duration-300 resize-none ${
                      dark
                        ? 'bg-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500'
                        : 'bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500'
                    } border border-slate-200 dark:border-slate-600 outline-none`}
                    placeholder={t.contact.message}
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-lg shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  {t.contact.send}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: MapPin, text: t.contact.info.address },
                { icon: Mail, text: t.contact.info.email },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                    dark ? 'bg-slate-800 hover:bg-slate-750 border border-slate-700' : 'bg-white shadow-lg hover:shadow-xl border border-slate-100'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}

              {/* Video Placeholder */}
              <div className={`p-6 rounded-xl ${dark ? 'bg-slate-800 border border-slate-700' : 'bg-white shadow-lg border border-slate-100'}`}>
                <div className="aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-600/0 group-hover:from-emerald-500/10 group-hover:to-teal-600/10 transition-all duration-300" />
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <p className={`text-center mt-4 text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {lang === 'ar' ? 'شاهد فيديو تعريفي عن Torrema' : 'Watch our intro video about Torrema'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 transition-colors duration-500 ${dark ? 'bg-slate-900 border-t border-slate-800' : 'bg-slate-100 border-t border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Torrema
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://buy.stripe.com/test_8x28wRdxJ8Rd7MVgzi8Vi01"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                {lang === 'ar' ? 'اشترِ الآن' : 'Buy Now'}
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  dark
                    ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow'
                }`}
              >
                {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </button>
            </div>

            <p className={`text-sm ${dark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.footer.rights} Torrema &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticatedHeader from '../../components/ui/AuthenticatedHeader';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import MissionSection from './components/MissionSection';
import HowItWorksSection from './components/HowItWorksSection';
import StakeholdersSection from './components/StakeholdersSection';
import ImpactMetricsSection from './components/ImpactMetricsSection';
import TechnologySection from './components/TechnologySection';
import FooterSection from '../landing-page/components/FooterSection';

const LearnAboutIzra = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Arabic content
  const content = {
    hero: {
      badge: "شركاؤنا",
      title: "معاً نبني مستقبلًا مستدامًا",
      subtitle: "التعاون بين التكنولوجيا والبيئة من أجل التأثير الحقيقي",
      description:
        "نلتقي الخبرة البيئية العميقة مع الابتكار الرقمي المتقدم لإنشاء حلول مستدامة تحول أهداف الحياد الكربوني إلى إجراءات ملموسة.",
      companies: [
        {
          name: "Nature for Environmental & Agricultural Solutions (NEAS)",
          role: "شريك البيئة والزراعة",
          description:
            "منظمة إماراتية رائدة مكرسة لاستعادة النظم البيئية وحماية المانغروف والممارسات الزراعية المستدامة. مع خبرة عميقة على أرض الواقع ومعرفة إقليمية، تقود NEAS مبادرات بيئية حقيقية تحمي النظم البيئية الطبيعية مع دعم أهداف الاستدامة طويلة الأمد.",
          website: "https://www.neas.ae/about-us",
          logo: "/nature-logo-right.avif",
          image: "/natureneas.jpg"
        },
        {
          name: "Ultranous",
          role: "شريك التكنولوجيا",
          description:
            "شركة ابتكار تكنولوجية متخصصة في بناء منصات رقمية ذكية باستخدام الذكاء الاصطناعي والبيانات والتكنولوجيا الناشئة. مع التركيز القوي على ESG والزراعة الرقمية والحلول المدفوعة بالاستدامة، تصمم Ultranous أنظمة قابلة للتوسع تحول الأهداف البيئية المعقدة إلى نتائج قابلة للتنفيذ وقابلة للقياس من خلال البنية التحتية الرقمية الذكية.",
          website: "https://ultranous.ae/",
          logo: "/logo-ultra.png",
          image: "/ultra.jpg"
        },
        {
          name: "IZRA",
          role: "منصتنا",
          description:
            "ولدت إزرا من التعاون بين Ultranous و NEAS، حيث تجمع بين التكنولوجيا المتقدمة والخبرة البيئية العملية. من خلال توحيد الابتكار الرقمي مع عمل الاستدامة في العالم الحقيقي، تعمل إزرا كمنصة تثقف وتمكن وتسرع التأثير البيئي الهادف عبر المجتمعات والصناعات والنظم البيئية.",
          website: "/",
          logo: null,
          image: "/izra.jpg"
        }
      ]
    }
  };

  // Auto slide (RTL safe)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % content.hero.companies.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [content.hero.companies.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide(
      (prev) =>
        (prev - 1 + content.hero.companies.length) %
        content.hero.companies.length
    );
  const goToNext = () =>
    setCurrentSlide(
      (prev) => (prev + 1) % content.hero.companies.length
    );

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader
        isAuthenticated={false}
        userRole={null}
        onLogout={() => {}}
      />

      <main className="flex-grow">
        <section
          className="relative pt-0 pb-2 md:pb-3 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"
          dir="rtl"
        >
          <div className="container-safe">
            <div className="space-y-3">

              {/* Header */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                  <Icon name="Info" size={12} className="text-emerald-400" />
                  <span className="text-xs font-medium text-emerald-300">
                    {content.hero.badge}
                  </span>
                </div>

                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {content.hero.title}
                </h1>

                <h2 className="text-sm md:text-base font-semibold text-emerald-300">
                  {content.hero.subtitle}
                </h2>

                <p className="text-xs text-slate-200 max-w-xl mx-auto">
                  {content.hero.description}
                </p>
              </div>

              {/* Slider */}
              <div className="relative w-full overflow-hidden">
                <div className="relative h-[360px] md:h-[420px]">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{
                      transform: `translateX(${currentSlide * 100}%)`
                    }}
                  >
                    {content.hero.companies.map((company, index) => (
                      <div key={index} className="w-full flex-shrink-0 h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full p-6">

                          {/* Info */}
                          <div className="space-y-3 text-right">
                            {company.logo && (
                              <div className="flex justify-end">
                                <img
                                  src={company.logo}
                                  alt={`${company.name} logo`}
                                  className="w-10 h-10 object-contain"
                                />
                              </div>
                            )}

                            <h3 className="text-lg font-bold text-white">
                              {company.name}
                            </h3>

                            <span className="inline-block px-3 py-1 text-sm rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300">
                              {company.role}
                            </span>

                            <p className="text-sm text-slate-200 leading-relaxed">
                              {company.description}
                            </p>

                            <Button
                              size="sm"
                              onClick={() =>
                                company.website === '/'
                                  ? navigate('/')
                                  : window.open(company.website, '_blank')
                              }
                            >
                              زيارة الموقع
                            </Button>
                          </div>

                          {/* Image */}
                          <div className="relative rounded-xl overflow-hidden">
                            <img
                              src={company.image}
                              alt={company.name}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 text-white p-3 rounded-full"
                  >
                    <Icon name="ChevronRight" size={20} className="rotate-180" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 text-white p-3 rounded-full"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {content.hero.companies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? 'bg-emerald-500 w-8'
                          : 'bg-slate-600 w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <MissionSection />
        <HowItWorksSection />
        <StakeholdersSection />
        <ImpactMetricsSection />
        <TechnologySection />
        <FooterSection />
      </main>
    </div>
  );
};

export default LearnAboutIzra;

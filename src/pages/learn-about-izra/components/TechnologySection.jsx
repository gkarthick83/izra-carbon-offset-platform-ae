import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TechnologySection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Technology & Transparency",
      subtitle: "Blockchain-Powered Environmental Accountability",
      features: [
        {
          icon: "Shield",
          title: "Immutable Records",
          description: "Every tree planted and carbon credit traded is permanently recorded on blockchain, ensuring complete transparency and preventing fraud."
        },
        {
          icon: "Award",
          title: "NFT Certificates",
          description: "Sponsors receive unique NFT certificates for their contributions, providing verifiable proof of environmental impact."
        },
        {
          icon: "Lock",
          title: "Smart Contracts",
          description: "Automated verification and distribution processes through smart contracts ensure fair and transparent transactions."
        },
        {
          icon: "Eye",
          title: "Real-Time Tracking",
          description: "Monitor project progress, carbon offset metrics, and marketplace activity through comprehensive dashboards."
        }
      ]
    },
    ar: {
      title: "التكنولوجيا والشفافية",
      subtitle: "المساءلة البيئية المدعومة بالبلوكشين",
      features: [
        {
          icon: "Shield",
          title: "سجلات ثابتة",
          description: "يتم تسجيل كل شجرة مزروعة وكل رصيد كربون متداول بشكل دائم على البلوكشين، مما يضمن الشفافية الكاملة ويمنع الاحتيال."
        },
        {
          icon: "Award",
          title: "شهادات NFT",
          description: "يتلقى الرعاة شهادات NFT فريدة لمساهماتهم، مما يوفر دليلاً قابلاً للتحقق من التأثير البيئي."
        },
        {
          icon: "Lock",
          title: "العقود الذكية",
          description: "عمليات التحقق والتوزيع الآلية من خلال العقود الذكية تضمن معاملات عادلة وشفافة."
        },
        {
          icon: "Eye",
          title: "التتبع في الوقت الفعلي",
          description: "راقب تقدم المشروع ومقاييس تعويض الكربون ونشاط السوق من خلال لوحات معلومات شاملة."
        }
      ]
    }
  };

  const text = content?.[currentLanguage];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container-safe">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {text?.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {text?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Column - Image */}
          <div className="lg:col-span-2 relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1664022617645-cf71791942e4?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={currentLanguage === 'en' ? "Blockchain and NFT technology powering IZRA platform" : "تكنولوجيا البلوكشين والعملات غير القابلة للاستبدال (NFT) تدعم منصة إزرع"}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/800x600/0f172a/ffffff?text=IZRA+Blockchain';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {currentLanguage === 'en' ? 'Transparent & Secure' : 'شفاف وآمن'}
              </h3>
              <p className="text-white/90 text-sm">
                {currentLanguage === 'en'
                  ? "Powered by blockchain for complete transparency and security in every transaction."
                  : "مدعوم بتقنية البلوكشين لضمان الشفافية الكاملة والأمان في كل معاملة."}
              </p>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {text?.features?.map((feature, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
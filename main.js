const root = document.documentElement;
const translations = {
  en: {
    navAbout: 'About',
    navImpact: 'Impact',
    navWork: 'Work',
    navProcess: 'Process',
    navContact: 'Contact',
    ctaCaseStudies: 'View Growth Case Studies',
    ctaResume: 'Download CV',
    ctaContact: 'Contact Me',
    eyebrow: 'Growth & Product Marketing Specialist',
    heroTitle: 'Growth & Product Marketing Specialist | Building Full-Funnel Growth Engines, Lifecycle Automation & AI-Powered GTM Systems',
    heroSubtitle: '3+ years driving measurable pipeline, trial activation, and B2B/SaaS adoption across Southeast Asia & global markets — bridging behavioral data, operational storytelling, and product-led growth.',
    locationLabel: 'Location',
    locationValue: 'Thu Duc, Ho Chi Minh City, Vietnam',
    focusLabel: 'Primary focus',
    focusValue: 'Lifecycle, Demand Gen, AI GTM',
    trustSaaS: 'B2B SaaS',
    trustLifecycle: 'Lifecycle',
    trustAutomation: 'Automation',
    trustAI: 'AI GTM',
    locationBadge: 'Based in Thu Duc, HCMC',
    miniLabel: 'Growth operator',
    signalLabel: 'Pipeline velocity',
    kpiTrials: 'Trial activation',
    kpiLicense: 'Paid conversion lift',
    kpiViews: 'LinkedIn reach',
    metricsEyebrow: 'North Star growth metrics',
    metricsTitle: 'Verified impact across funnel, retention, and AI-driven acquisition',
    metricKickerTrial: 'Trial activation',
    metricDeltaTrial: '+59% uplift in 2 months',
    metricTextTrial: 'Built behavioral tracking from zero at phpFox and drove activation from 48.3% to 76.9% within two months.',
    metricKickerConversion: 'Paid conversions',
    metricTextConversion: 'MoM growth from trial pool via milestone-triggered lifecycle automation.',
    metricKickerReach: 'LinkedIn reach',
    metricTextReach: 'YoY impression growth at Shelby Global with 526% MoM acceleration at YouNet Social.',
    metricKickerEmail: 'Outbound email delivery',
    metricTextEmail: 'SEA HR outreach engine delivered 96.28% with -18.6% bounce and 0.26% unsubscribe.',
    metricKickerSEO: 'Organic engagement',
    metricTextSEO: 'AI Search-driven organic traffic and 50% engagement with 3m34s average session time.',
    workEyebrow: 'Selected case studies',
    workTitle: 'Growth systems that connect intent, activation, and monetization',
    filterAll: 'All',
    filterLifecycle: 'Lifecycle',
    filterDemand: 'Demand Gen',
    filterSEO: 'SEO & AI',
    filterProduct: 'Product Marketing',
    projectTrialTitle: 'Trial activation engine',
    projectTrialText: 'Built the behavioral tracking layer and optimization playbook that turned underperforming trials into a high-velocity activation funnel.',
    projectTrialItem1: 'Lifecycle segmentation from zero',
    projectTrialItem2: 'Milestone-based nudges and self-serve onboarding',
    projectTrialItem3: 'Activation clarity for PMM and product teams',
    projectShelbyTitle: 'Demand creation at scale',
    projectShelbyText: 'Refined community-led content and funnel orchestration to improve visibility, credibility, and conversion across social demand generation.',
    projectShelbyItem1: '+3,000% YoY LinkedIn reach',
    projectShelbyItem2: 'Creative testing and campaign sequencing',
    projectShelbyItem3: 'Persona-based funnel storytelling',
    projectAISEOTitle: 'AI search visibility system',
    projectAISEOText: 'Translated technical expertise into high-intent content and SERP optimization that captured traffic from AI-assisted discovery journeys.',
    projectAISEOItem1: '72.83% engagement rate',
    projectAISEOItem2: 'Top-of-funnel discovery and education flow',
    projectAISEOItem3: 'High-intent offering narratives',
    projectPLGTitle: 'Product narrative and GTM alignment',
    projectPLGText: 'Connected feature launches with customer language, activation proof, and launch messaging to increase product understanding and adoption.',
    projectPLGItem1: 'Launch narrative design',
    projectPLGItem2: 'In-product activation storytelling',
    projectPLGItem3: 'Cross-functional GTM coordination',
    capabilitiesEyebrow: 'What I bring',
    capabilitiesTitle: 'A modern growth operator blending analytics, product thinking, and storytelling',
    capabilityFunnelTitle: 'Full-funnel growth strategy',
    capabilityFunnelText: 'From awareness to pipeline conversion, building acquisition systems around measurable intent and behavior.',
    capabilityLifecycleTitle: 'Lifecycle automation',
    capabilityLifecycleText: 'Designing milestone-based journeys, nudges, and in-product activations that support retention and expansion.',
    capabilityAITitle: 'AI-powered GTM',
    capabilityAIText: 'Combining experimentation, content systems, and smart automation to scale acquisition with less friction.',
    capabilityInsightsTitle: 'Insight-driven messaging',
    capabilityInsightsText: 'Translating customer behavior and product signals into stories that improve activation and conversion.',
    experienceEyebrow: 'Experience',
    experienceTitle: 'A track record across B2B SaaS, community-led growth, and product marketing',
    timelineRoleOne: 'Growth & Product Marketing Specialist',
    timelineCompanyOne: 'Independent consultant • B2B SaaS / growth systems',
    timelineTextOne: 'Leading lifecycle strategy, funnel optimization, and AI-assisted acquisition experiments for product-led companies.',
    timelineRoleTwo: 'Growth Marketing Lead',
    timelineCompanyTwo: 'Shelby Global & YouNet Social',
    timelineTextTwo: 'Developed multi-channel demand generation programs with stronger creative testing, social proof, and conversion alignment.',
    timelineRoleThree: 'Marketing & Growth Specialist',
    timelineCompanyThree: 'phpFox',
    timelineTextThree: 'Owned trial activation strategy, lifecycle automation, and data-backed optimization across onboarding and conversion.',
    proofEyebrow: 'Proof points',
    proofTitle: 'Growth work that is operationally sharp and commercially relevant',
    quoteOne: '“Jasmine brings a rare mix of analytical rigor and user empathy — turning product data into growth levers that sellers, PMs, and customers all understand.”',
    quoteRoleOne: 'B2B SaaS stakeholder',
    quoteTwo: '“Her automation thinking simplified the acquisition funnel and made behavioral insight actionable across the customer journey.”',
    quoteRoleTwo: 'Lifecycle optimization partner',
    contactEyebrow: 'Let’s build growth engines',
    contactTitle: 'Open to opportunities in SaaS growth, lifecycle strategy, and AI GTM execution.',
    contactEmail: 'Email Me',
    contactLinkedIn: 'Connect on LinkedIn'
  },
  vi: {
    navAbout: 'Giới thiệu',
    navImpact: 'Tác động',
    navWork: 'Công việc',
    navProcess: 'Quy trình',
    navContact: 'Liên hệ',
    ctaCaseStudies: 'Xem case study tăng trưởng',
    ctaResume: 'Tải CV',
    ctaContact: 'Liên hệ',
    eyebrow: 'Chuyên viên Growth & Product Marketing',
    heroTitle: 'Chuyên viên Growth & Product Marketing | Xây dựng mô hình tăng trưởng full-funnel, automation lifecycle và hệ thống GTM AI',
    heroSubtitle: 'Hơn 3 năm thúc đẩy pipeline, tỷ lệ kích hoạt thử dùng và mức độ chấp nhận SaaS/B2B ở Đông Nam Á và thị trường toàn cầu — kết nối dữ liệu hành vi, câu chuyện vận hành và tăng trưởng hướng sản phẩm.',
    locationLabel: 'Địa điểm',
    locationValue: 'Thủ Đức, TP.HCM, Việt Nam',
    focusLabel: 'Tập trung chính',
    focusValue: 'Lifecycle, Demand Gen, AI GTM',
    trustSaaS: 'B2B SaaS',
    trustLifecycle: 'Lifecycle',
    trustAutomation: 'Automation',
    trustAI: 'AI GTM',
    locationBadge: 'Đặt tại Thủ Đức, TP.HCM',
    miniLabel: 'Growth operator',
    signalLabel: 'Tốc độ pipeline',
    kpiTrials: 'Kích hoạt thử dùng',
    kpiLicense: 'Tăng conversion trả phí',
    kpiViews: 'Đạt được trên LinkedIn',
    metricsEyebrow: 'Số liệu tăng trưởng cốt lõi',
    metricsTitle: 'Tác động đã được xác minh trên toàn bộ funnel, giữ chân khách hàng và acquisition theo hướng AI',
    metricKickerTrial: 'Kích hoạt thử dùng',
    metricDeltaTrial: '+59% cải thiện trong 2 tháng',
    metricTextTrial: 'Xây dựng hệ thống tracking hành vi từ đầu tại phpFox và tăng tỷ lệ kích hoạt từ 48,3% lên 76,9% trong 2 tháng.',
    metricKickerConversion: 'Chuyển đổi trả phí',
    metricTextConversion: 'Tăng trưởng MoM từ nguồn trial thông qua automation lifecycle theo mốc milestone.',
    metricKickerReach: 'Độ phủ LinkedIn',
    metricTextReach: 'Tăng trưởng impressions YoY tại Shelby Global với mức tăng 526% MoM tại YouNet Social.',
    metricKickerEmail: 'Giao hàng email outbound',
    metricTextEmail: 'Hệ thống outreach SEA HR đạt 96,28% delivery, bounce -18,6% và unsubscribe 0,26%.',
    metricKickerSEO: 'Tương tác nội dung',
    metricTextSEO: 'Traffic từ AI Search và tỷ lệ tương tác 50% cùng thời gian session trung bình 3m34s.',
    workEyebrow: 'Case studies được chọn',
    workTitle: 'Hệ thống tăng trưởng nối intent, activation và monetization',
    filterAll: 'Tất cả',
    filterLifecycle: 'Lifecycle',
    filterDemand: 'Demand Gen',
    filterSEO: 'SEO & AI',
    filterProduct: 'Product Marketing',
    projectTrialTitle: 'Engine kích hoạt thử dùng',
    projectTrialText: 'Xây dựng lớp tracking hành vi và playbook tối ưu hóa để chuyển trial dưới hiệu suất thành funnel kích hoạt tốc độ cao.',
    projectTrialItem1: 'Phân đoạn lifecycle từ đầu',
    projectTrialItem2: 'Nudge theo milestone và onboarding tự phục vụ',
    projectTrialItem3: 'Rõ ràng hơn cho PMM và product teams',
    projectShelbyTitle: 'Tạo demand ở quy mô lớn',
    projectShelbyText: 'Nâng cấp nội dung cộng đồng và orchestration funnel để cải thiện độ phủ, uy tín và chuyển đổi trong demand generation social.',
    projectShelbyItem1: '+3.000% tăng reach LinkedIn YoY',
    projectShelbyItem2: 'Test creative và sequencing chiến dịch',
    projectShelbyItem3: 'Câu chuyện funnel theo persona',
    projectAISEOTitle: 'Hệ thống hiển thị trên AI search',
    projectAISEOText: 'Chuyển đổi chuyên môn kỹ thuật thành nội dung có intent cao và tối ưu SERP để thu hút traffic từ hành trình khám phá hỗ trợ bởi AI.',
    projectAISEOItem1: 'Tỷ lệ tương tác 72,83%',
    projectAISEOItem2: 'Discovery và education flow đầu funnel',
    projectAISEOItem3: 'Câu chuyện offer theo intent',
    projectPLGTitle: 'Câu chuyện sản phẩm và đồng bộ GTM',
    projectPLGText: 'Kết nối feature launch với ngôn ngữ khách hàng, bằng chứng kích hoạt và messaging để tăng hiểu biết sản phẩm và tỷ lệ adoption.',
    projectPLGItem1: 'Thiết kế narrative cho launch',
    projectPLGItem2: 'Storytelling kích hoạt trong sản phẩm',
    projectPLGItem3: 'Điều phối GTM xuyên chức năng',
    capabilitiesEyebrow: 'Điều tôi mang lại',
    capabilitiesTitle: 'Một growth operator hiện đại kết hợp analytics, tư duy product và storytelling',
    capabilityFunnelTitle: 'Chiến lược tăng trưởng full-funnel',
    capabilityFunnelText: 'Từ awareness đến pipeline conversion, xây dựng hệ thống acquisition dựa trên intent và hành vi có thể đo lường.',
    capabilityLifecycleTitle: 'Automation lifecycle',
    capabilityLifecycleText: 'Thiết kế journey theo milestone, nudges và activation trong sản phẩm để hỗ trợ retention và expansion.',
    capabilityAITitle: 'GTM theo hướng AI',
    capabilityAIText: 'Kết hợp experimentation, hệ thống nội dung và automation thông minh để mở rộng acquisition với ít friction hơn.',
    capabilityInsightsTitle: 'Messaging dựa trên insight',
    capabilityInsightsText: 'Dịch hành vi khách hàng và tín hiệu từ sản phẩm thành những câu chuyện tăng cường activation và conversion.',
    experienceEyebrow: 'Kinh nghiệm',
    experienceTitle: 'Lịch sử công việc trải dài B2B SaaS, growth cộng đồng và product marketing',
    timelineRoleOne: 'Chuyên viên Growth & Product Marketing',
    timelineCompanyOne: 'Consultant độc lập • B2B SaaS / growth systems',
    timelineTextOne: 'Dẫn dắt lifecycle strategy, funnel optimization và các thí nghiệm acquisition theo hướng AI cho các công ty product-led.',
    timelineRoleTwo: 'Growth Marketing Lead',
    timelineCompanyTwo: 'Shelby Global & YouNet Social',
    timelineTextTwo: 'Phát triển chương trình demand generation đa kênh với testing creative mạnh hơn, social proof và đồng bộ conversion.',
    timelineRoleThree: 'Marketing & Growth Specialist',
    timelineCompanyThree: 'phpFox',
    timelineTextThree: 'Quản lý chiến lược activation trial, lifecycle automation và tối ưu hóa dựa trên dữ liệu trên onboarding và conversion.',
    proofEyebrow: 'Dấu hiệu xác nhận',
    proofTitle: 'Công việc tăng trưởng có tính vận hành sắc bén và hiệu quả thương mại rõ rệt',
    quoteOne: '“Jasmine sở hữu sự kết hợp hiếm có giữa phân tích nghiêm ngặt và sự đồng cảm với người dùng — biến dữ liệu sản phẩm thành đòn bẩy tăng trưởng mà cả sales, PM và khách hàng đều hiểu.”',
    quoteRoleOne: 'B2B SaaS stakeholder',
    quoteTwo: '“Tư duy automation của cô ấy đơn giản hóa funnel acquisition và biến insight hành vi thành điều có thể thực thi trên toàn bộ customer journey.”',
    quoteRoleTwo: 'Đối tác tối ưu hóa lifecycle',
    contactEyebrow: 'Hãy xây dựng growth engines cùng nhau',
    contactTitle: 'Mở cho các cơ hội trong SaaS growth, lifecycle strategy và AI GTM execution.',
    contactEmail: 'Gửi email',
    contactLinkedIn: 'Kết nối trên LinkedIn'
  }
};

const state = {
  lang: 'en',
  theme: localStorage.getItem('portfolio-theme') || 'light'
};

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  const nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
  });
}

function initialiseCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = Number(el.dataset.counter);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        const formatted = Number.isInteger(target) ? Math.round(value) : value.toFixed(2);
        el.textContent = `${prefix}${formatted}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = `${prefix}${target.toFixed(target % 1 === 0 ? 0 : 2)}${suffix}`;
        }
      }

      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.45 });

  counters.forEach((counter) => observer.observe(counter));
}

function initialiseProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      buttons.forEach((btn) => btn.classList.toggle('active', btn === button));

      cards.forEach((card) => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });
}

function initialiseTheme() {
  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }
  setTheme(state.theme);
}

function initialiseLanguage() {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
  setLanguage(state.lang);
}

initialiseTheme();
initialiseLanguage();
initialiseCounters();
initialiseProjectFilters();

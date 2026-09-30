import { useEffect, useState } from "react";


const BRAND = {
  name: "مركز الحياة",
  sub: "لخدمات التمريض المنزلي",
  full: "مركز الحياة لخدمات التمريض المنزلي",
  slogan: "عناية تعيد الحياة إلى بيتك",
};

const PHONE_DISPLAY = "+966 50 000 0000"; 
const PHONE_TEL = "+966563737062";       
const WA_NUMBER = "+966563737062";         
const waLink = (text = "") =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;


const IMAGES = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  homeNursing: "/images/home-nursing.jpg",
  postOp: "/images/post-op.jpg",
  elderly: "/images/elderly-care.jpg",
  injections: "/images/injections-iv.jpg",
  wounds: "/images/wound-care.jpg",
};

const NAV = [
  { label: "الرئيسية", to: "/" },
  { label: "خدماتنا", to: "/services" },
  { label: "من نحن", to: "/about" },
  { label: "آراء العملاء", to: "/reviews" },
  { label: "الأسئلة الشائعة", to: "/faq" },
  { label: "تواصل معنا", to: "/contact" },
];

const SERVICES = [
  {
    id: "nursing", title: "التمريض المنزلي", desc: "رعاية شاملة للحالات المزمنة واحتياجاتك اليومية.", img: IMAGES.homeNursing, icon: "🩺",
    long: "رعاية تمريضية شاملة في منزلك للحالات المزمنة واحتياجاتك اليومية، بإشراف فريق مؤهل يتابع حالتك بانتظام.",
    includes: ["قياس العلامات الحيوية ومتابعتها", "إعطاء الأدوية حسب الوصفة الطبية", "متابعة الحالات المزمنة كالسكري والضغط", "المساعدة في العناية الشخصية اليومية", "تثقيف المريض والأسرة بطريقة العناية الصحيحة"],
  },
  {
    id: "post-op", title: "رعاية ما بعد العمليات", desc: "متابعة دقيقة لشفاء سريع وآمن داخل المنزل.", img: IMAGES.postOp, icon: "🏥",
    long: "متابعة دقيقة بعد الخروج من المستشفى لضمان شفاء سريع وآمن، وسط راحة المنزل وأهله.",
    includes: ["متابعة الحالة بعد الخروج من المستشفى", "العناية بمكان العملية وتغيير الضمادات", "متابعة الألم والأدوية", "المساعدة على الحركة الآمنة", "إبلاغ الأسرة بأي ملاحظة تستدعي مراجعة الطبيب"],
  },
  {
    id: "elderly", title: "رعاية كبار السن", desc: "رعاية يومية تحفظ الكرامة والراحة.", img: IMAGES.elderly, icon: "👴",
    long: "رعاية يومية تحفظ كرامة كبار السن وراحتهم، مع متابعة صحية منتظمة واهتمام إنساني.",
    includes: ["متابعة الحالة الصحية اليومية", "المساعدة في النظافة الشخصية والحركة", "تنظيم مواعيد الأدوية", "الوقاية من السقوط وقرحات الفراش", "الاهتمام والمرافقة"],
  },
  {
    id: "injections", title: "الحقن والمحاليل", desc: "حقن عضلية ووريدية ومحاليل وريدية.", img: IMAGES.injections, icon: "💉",
    long: "حقن ومحاليل تُعطى في المنزل على يد ممرض مؤهل، بأدوات معقمة وبناءً على وصفة طبية سارية.",
    includes: ["حقن عضلية", "حقن وريدية", "إعطاء المحاليل الوريدية", "حقن تحت الجلد مثل الأنسولين", "مراقبة الحالة أثناء الجلسة وبعدها"],
  },
  {
    id: "wounds", title: "العناية بالجروح", desc: "تعقيم الجروح وتغيير الضمادات بمعايير السلامة.", img: IMAGES.wounds, icon: "🩹",
    long: "تعقيم الجروح وتغيير الضمادات بأعلى معايير السلامة لتسريع الالتئام وتقليل خطر العدوى.",
    includes: ["تنظيف الجرح وتعقيمه", "تغيير الضمادات بانتظام", "متابعة علامات الالتهاب", "العناية بجروح ما بعد العمليات", "تعليمات العناية بالجرح بين الزيارات"],
  },
];

const STEPS = [
  { t: "تواصل معنا", d: "أرسل طلبك على واتساب أو من نموذج الحجز واذكر الخدمة." },
  { t: "نؤكد التفاصيل", d: "نراجع الحالة ونؤكد الموعد والسعر قبل الزيارة." },
  { t: "زيارة الممرض", d: "يصل ممرض مؤهل إلى منزلك في الموعد المتفق عليه." },
  { t: "المتابعة", d: "نتابع الحالة ونرتب الزيارات التالية عند الحاجة." },
];

const TOP_FEATURES = [
  { icon: "shield", title: "جودة وأمان", text: "نلتزم بمعايير الرعاية" },
  { icon: "clock", title: "على مدار الساعة", text: "نستقبل طلباتك دائمًا" },
  { icon: "users", title: "فريق مؤهل", text: "ممرضون ذوو خبرة" },
  { icon: "pin", title: "نصلك أينما كنت", text: "خدمة في منزلك" },
];

const WHY = [
  { icon: "user", title: "كوادر مؤهلة", text: "ممرضون مرخّصون ومدرّبون على الرعاية المنزلية." },
  { icon: "clock", title: "استجابة سريعة", text: "نرد على طلبك بأسرع وقت ونحدد الموعد معك." },
  { icon: "tag", title: "أسعار واضحة", text: "نخبرك بالسعر قبل الزيارة بدون مفاجآت." },
  { icon: "heart", title: "رعاية إنسانية", text: "نعامل كل مريض كفرد من العائلة." },
];

const REVIEWS = [
  { name: "سارة م.", text: "ممتنون لكم على رعايتكم، أمي في فترة الشفاء.", stars: 5 },
  { name: "محمد ع.", text: "تعامل راقٍ واهتمام بالتفاصيل، أنصح بهم بشدة.", stars: 5 },
  { name: "أم أحمد", text: "خدمة ممتازة وفريق متعاون جدًا، تمنيت لو تعرفت عليهم من البداية.", stars: 5 },
  { name: "خالد غ.", text: "وصلوا في الموعد وتعاملوا مع الوالد بلطف كبير.", stars: 5 },
  { name: "نورة ق.", text: "خدمة تغيير الجروح كانت احترافية ونظيفة جدًا.", stars: 5 },
  { name: "عبدالله ح.", text: "سرعة في الاستجابة وأسعار واضحة من أول اتصال.", stars: 5 },
];

/* ← عدّل المدن حسب نطاق عمل العميل */
const AREAS = ["الرياض", "جدة", "مكة المكرمة", "الدمام"];
const AREAS_NOTE = "ونصل إلى مناطق أخرى حسب التوفر";

const FAQ = [
  { q: "هل الخدمة متوفرة في مدينتي؟", a: `نخدم ${AREAS.join("، ")} ${AREAS_NOTE}. تواصل معنا على واتساب لتأكيد منطقتك.` },
  { q: "كم تكلفة الزيارة المنزلية؟", a: "تختلف التكلفة حسب نوع الخدمة ومدة الزيارة. أرسل لنا طلبك وسنرد بالسعر الواضح قبل الزيارة." },
  { q: "هل يمكن حجز زيارة في نفس اليوم؟", a: "نعم، حسب توفر الفريق في منطقتك. اتصل بنا أو راسلنا على واتساب لتأكيد أقرب موعد." },
  { q: "ما هي طرق الدفع المتوفرة؟", a: "نقبل الدفع النقدي والتحويل البنكي. سنوضح لك التفاصيل عند تأكيد الحجز." },
  { q: "كيف أحجز زيارة؟", a: "من نموذج الحجز في الموقع أو بمراسلتنا مباشرة على واتساب. نؤكد معك الموعد والسعر قبل وصول الممرض." },
  { q: "هل يمكن طلب أكثر من زيارة؟", a: "نعم، يمكن ترتيب زيارات متكررة يوميًا أو أسبوعيًا حسب حالة المريض وتوصية الطبيب." },
];

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "زيارة طارئة"];


const ICONS = {
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  users: <><circle cx="9" cy="9" r="3.2" /><path d="M3.5 19c.5-3.2 2.7-5 5.5-5s5 1.8 5.5 5" /><circle cx="17" cy="10" r="2.4" /><path d="M16 14.3c2.5.2 4 1.7 4.5 4.2" /></>,
  pin: <><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" /></>,
  tag: <><path d="M3 12V4h8l10 10-8 8L3 12z" /><circle cx="7.5" cy="8.5" r="1.3" /></>,
  heart: <path d="M12 20s-8-4.7-8-10.5A4.5 4.5 0 0112 7a4.5 4.5 0 018 2.5C20 15.3 12 20 12 20z" />,
  calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  send: <path d="M21 3L3 10.5l7 2.5 2.5 7L21 3zM10 13l11-10" />,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 015 .5c0 1.7-2.5 2-2.5 3.5M12 17h.01" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  arrow: <path d="M19 12H5M11 6l-6 6 6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7l8.5 6 8.5-6" /></>,
};

function Icon({ name, size = 22, stroke = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

function WhatsAppIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.04 3C8.85 3 3 8.83 3 16c0 2.3.61 4.54 1.77 6.52L3 29l6.64-1.74A13.04 13.04 0 0016.04 29C23.23 29 29 23.17 29 16S23.23 3 16.04 3zm0 23.7c-1.96 0-3.87-.53-5.54-1.52l-.4-.24-3.94 1.03 1.05-3.84-.26-.4A10.65 10.65 0 015.35 16c0-5.9 4.79-10.7 10.69-10.7 5.89 0 10.66 4.8 10.66 10.7 0 5.89-4.77 10.7-10.66 10.7zm5.85-8c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66s1.14 3.09 1.3 3.3c.16.21 2.24 3.42 5.42 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" />
    </svg>
  );
}


function Logo({ size = 50, light = false }) {
  const main = light ? "#ffffff" : "#0b3d2e";
  return (
    <span className="logo" aria-label={BRAND.full}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill={light ? "rgba(255,255,255,.12)" : "#e6f5ee"} stroke="#c8963e" strokeWidth="2.5" />
        <path d="M32 50C20 42 15 34 18 26c2-5 9-6 14-1 5-5 12-4 14 1 3 8-2 16-14 24z" fill="#1a9970" />
        <path d="M32 24c0-6 4-11 11-12-.5 7-4 11-11 12z" fill="#c8963e" />
        <path d="M32 31v13M25.5 37.5h13" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      </svg>
      <span className="logo-text">
        <b style={{ color: main }}>{BRAND.name}</b>
        <span style={{ color: light ? "#cfe9dc" : "#1a9970" }}>{BRAND.sub}</span>
      </span>
    </span>
  );
}


function Photo({ src, alt, className = "", icon = "🩺", eager = false }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`photo-fallback ${className}`} role="img" aria-label={alt}>
        <span>{icon}</span>
      </div>
    );
  }
  return (
    <img className={className} src={src} alt={alt} loading={eager ? "eager" : "lazy"} onError={() => setFailed(true)} />
  );
}


function useRoute() {
  const get = () => {
    const h = typeof window === "undefined" ? "" : window.location.hash.replace(/^#/, "");
    return h.startsWith("/") ? h : "/";
  };
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const onHash = () => {
      setRoute(get());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

function SectionHead({ kicker, title, sub }) {
  return (
    <div className="sec-head">
      {kicker && <span className="kicker">{kicker}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

function PageHead({ title, sub, crumbs = [] }) {
  return (
    <section className="page-head">
      <div className="container">
        <nav className="crumbs" aria-label="مسار الصفحة">
          <a href="#/">الرئيسية</a>
          {crumbs.map((c) => (
            <span key={c.label}>
              <i>‹</i>
              {c.to ? <a href={c.to}>{c.label}</a> : c.label}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}

function CtaBand({ text = "جاهز لحجز زيارتك؟ فريقنا بانتظارك" }) {
  return (
    <section className="cta-band">
      <div className="container cta-in">
        <div>
          <h2>{text}</h2>
          <p>أرسل طلبك الآن وسنتواصل معك لتأكيد الموعد.</p>
        </div>
        <div className="cta-actions">
          <a href="#/contact" className="btn gold">
            <Icon name="calendar" size={20} /> احجز زيارة
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn wa">
            <WhatsAppIcon size={20} /> واتساب
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ r }) {
  return (
    <figure className="rv">
      <div className="stars" aria-label={`${r.stars} من 5`}>{"★".repeat(r.stars)}</div>
      <blockquote>“{r.text}”</blockquote>
      <figcaption>
        <span className="rv-ic"><Icon name="user" size={18} /></span>
        <b>{r.name}</b>
      </figcaption>
    </figure>
  );
}

function FaqList({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{f.q}</span>
            <span className="faq-pm"><Icon name={open === i ? "minus" : "plus"} size={16} stroke={2.4} /></span>
          </button>
          {open === i && <p>{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

function ServiceCard({ s, index }) {
  return (
    <article className="svc">
      <span className="svc-num">{String(index + 1).padStart(2, "0")}</span>
      <span className="svc-ic">{s.icon}</span>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <a href={`#/services/${s.id}`} className="more">
        اعرف المزيد <Icon name="arrow" size={16} stroke={2.4} />
      </a>
    </article>
  );
}

function EmergencyCard() {
  return (
    <article className="svc emergency-card">
      <span className="svc-ic">🚑</span>
      <h3>زيارة طارئة</h3>
      <p>متوفرة حسب توفر الفريق في منطقتك.</p>
      <a className="more" href={`tel:${PHONE_TEL}`}>
        <Icon name="phone" size={16} /> <span dir="ltr">{PHONE_DISPLAY}</span>
      </a>
    </article>
  );
}

function BookingForm({ preService = "" }) {
  const [form, setForm] = useState({ name: "", phone: "", city: "", service: preService, date: "" });
  const [errors, setErrors] = useState({});
  const setField = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (form.name.trim().length < 3) err.name = "اكتب الاسم الكامل";
    if (!/^(\+?966|0)?5\d{8}$/.test(form.phone.replace(/[\s-]/g, ""))) err.phone = "اكتب رقم جوال سعودي صحيح";
    if (!form.service) err.service = "اختر نوع الخدمة";
    setErrors(err);
    if (Object.keys(err).length) return;
    const msg =
      `السلام عليكم، أرغب بحجز زيارة منزلية.\n` +
      `الاسم: ${form.name}\nالجوال: ${form.phone}\nالخدمة: ${form.service}` +
      (form.city ? `\nالمدينة: ${form.city}` : "") +
      (form.date ? `\nتاريخ الزيارة: ${form.date}` : "");
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <form className="booking" onSubmit={submit} noValidate>
      <h3>احجز زيارتك الآن</h3>
      <p className="sub">املأ البيانات وسيصلك ردنا عبر واتساب.</p>

      <label className="fld">
        <span>الاسم الكامل</span>
        <input className={errors.name ? "err" : ""} value={form.name} onChange={setField("name")} placeholder="مثال: محمد أحمد" autoComplete="name" />
        {errors.name && <small>{errors.name}</small>}
      </label>

      <label className="fld">
        <span>رقم الجوال</span>
        <input className={errors.phone ? "err" : ""} value={form.phone} onChange={setField("phone")} placeholder="05xxxxxxxx" inputMode="tel" autoComplete="tel" dir="ltr" style={{ textAlign: "right" }} />
        {errors.phone && <small>{errors.phone}</small>}
      </label>

      <div className="fld-row">
        <label className="fld">
          <span>المدينة</span>
          <input value={form.city} onChange={setField("city")} placeholder="اختياري" />
        </label>
        <label className="fld">
          <span>التاريخ المطلوب</span>
          <input type="date" value={form.date} onChange={setField("date")} />
        </label>
      </div>

      <label className="fld">
        <span>نوع الخدمة</span>
        <select className={errors.service ? "err" : ""} value={form.service} onChange={setField("service")}>
          <option value="">اختر الخدمة</option>
          {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
        {errors.service && <small>{errors.service}</small>}
      </label>

      <button type="submit" className="btn primary block">
        <Icon name="send" size={18} /> إرسال الطلب عبر واتساب
      </button>
    </form>
  );
}

function Steps({ row = false }) {
  return (
    <ol className={`steps ${row ? "row" : ""}`}>
      {STEPS.map((st, i) => (
        <li key={st.t}>
          <b>{i + 1}</b>
          <div>
            <h3>{st.t}</h3>
            <p>{st.d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function AreasBlock() {
  return (
    <div className="areas">
      <div className="areas-chips">
        {AREAS.map((a) => (
          <span key={a} className="chip"><Icon name="pin" size={16} /> {a}</span>
        ))}
      </div>
      <p>{AREAS_NOTE}</p>
    </div>
  );
}

/* ---------- الصفحة الرئيسية ---------- */
function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-in">
          <div className="hero-text">
            <span className="pill">🌿 {BRAND.slogan}</span>
            <h1>
              رعاية تمريضية <em>بجودة عالية</em> في راحة منزلك
            </h1>
            <p>
              فريق تمريضي مؤهل يصل إليك ليقدم الرعاية الصحية التي تحتاجها، باهتمام إنساني
              وخصوصية تامة. لأن راحتك وصحتك أولويتنا.
            </p>
            <div className="hero-cta">
              <a href="#booking" className="btn primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}>
                <Icon name="calendar" size={20} /> احجز زيارة الآن
              </a>
              <a className="btn outline" href={waLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={20} /> تواصل عبر واتساب
              </a>
            </div>
            <ul className="hero-points">
              <li><Icon name="check" size={16} stroke={2.6} /> ممرضون مؤهلون</li>
              <li><Icon name="check" size={16} stroke={2.6} /> أسعار واضحة</li>
              <li><Icon name="check" size={16} stroke={2.6} /> خصوصية تامة</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="arch">
              <Photo src={IMAGES.hero} alt="رعاية تمريضية منزلية" className="arch-img" icon="👩‍⚕️" eager />
            </div>
            <div className="float-badge b1">
              <span>🛡️</span>
              <div><b>رعاية آمنة</b><small>بمعايير التعقيم</small></div>
            </div>
            <div className="float-badge b2">
              <span>⏰</span>
              <div><b>24 / 7</b><small>نستقبل طلباتك</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container feat-card">
          {TOP_FEATURES.map((f) => (
            <div key={f.title} className="feat">
              <span className="feat-ic"><Icon name={f.icon} size={24} /></span>
              <div>
                <b>{f.title}</b>
                <small>{f.text}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="خدماتنا" title="رعاية متكاملة تصلك إلى باب بيتك" sub="اختر الخدمة المناسبة وسنتولى الباقي." />
          <div className="services">
            {SERVICES.map((s, i) => <ServiceCard key={s.id} s={s} index={i} />)}
            <EmergencyCard />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead kicker="كيف نعمل" title="أربع خطوات بسيطة" sub="من طلبك الأول إلى متابعة حالتك." />
          <Steps row />
        </div>
      </section>

      <section className="why-band">
        <div className="container">
          <SectionHead kicker="لماذا نحن" title={`لماذا تختار ${BRAND.name}؟`} />
          <div className="why-grid">
            {WHY.map((w) => (
              <div key={w.title} className="why-item">
                <span className="why-ic"><Icon name={w.icon} size={28} stroke={1.6} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="section">
        <div className="container book-grid">
          <div className="book-info">
            <span className="kicker">احجز الآن</span>
            <h2>خلّ الرعاية توصلك</h2>
            <p>
              أرسل بياناتك الأساسية وسنتواصل معك عبر واتساب لتأكيد الموعد والسعر قبل وصول الممرض.
            </p>
            <a className="book-call" href={`tel:${PHONE_TEL}`}>
              <span><Icon name="phone" size={22} /></span>
              <div>
                <small>اتصل بنا مباشرة</small>
                <b dir="ltr">{PHONE_DISPLAY}</b>
              </div>
            </a>
            <h4>مناطق الخدمة</h4>
            <AreasBlock />
          </div>
          <BookingForm />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead kicker="آراء العملاء" title="ثقتكم تصنع الفرق" />
          <div className="rv-grid">
            {REVIEWS.slice(0, 3).map((r) => <ReviewCard key={r.name} r={r} />)}
          </div>
          <p className="center-link"><a href="#/reviews">عرض كل الآراء ←</a></p>
        </div>
      </section>

      <section className="section">
        <div className="container faq-wrap">
          <SectionHead kicker="الأسئلة الشائعة" title="هل لديك سؤال؟" sub="إجابات سريعة لأكثر ما يُسأل عنه." />
          <FaqList items={FAQ.slice(0, 4)} />
          <p className="center-link"><a href="#/faq">كل الأسئلة ←</a></p>
        </div>
      </section>
    </>
  );
}

/* ---------- الخدمات ---------- */
function ServicesPage() {
  return (
    <>
      <PageHead
        title="خدماتنا"
        sub="خدمات تمريضية متكاملة تصلك إلى منزلك على يد فريق مؤهل."
        crumbs={[{ label: "خدماتنا" }]}
      />
      <section className="section">
        <div className="container">
          <div className="services">
            {SERVICES.map((s, i) => <ServiceCard key={s.id} s={s} index={i} />)}
            <EmergencyCard />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ServiceDetail({ id }) {
  const s = SERVICES.find((x) => x.id === id);
  if (!s) return <ServicesPage />;
  const others = SERVICES.filter((x) => x.id !== id).slice(0, 3);
  return (
    <>
      <PageHead
        title={s.title}
        sub={s.desc}
        crumbs={[{ label: "خدماتنا", to: "#/services" }, { label: s.title }]}
      />
      <section className="section">
        <div className="container detail">
          <div className="detail-main">
            <Photo src={s.img} alt={s.title} className="detail-img" icon={s.icon} />
            <p className="lead">{s.long}</p>

            <h2 className="h-sm">تشمل الخدمة</h2>
            <ul className="checklist">
              {s.includes.map((x) => (
                <li key={x}>
                  <span><Icon name="check" size={16} stroke={2.8} /></span>
                  {x}
                </li>
              ))}
            </ul>

            <h2 className="h-sm">كيف تتم الزيارة</h2>
            <Steps />
          </div>

          <aside className="detail-side">
            <div className="side-card">
              <h3>احجز هذه الخدمة</h3>
              <p>أرسل طلبك وسنؤكد الموعد والسعر قبل الزيارة.</p>
              <a className="btn wa block" href={waLink(`السلام عليكم، أرغب بحجز خدمة: ${s.title}`)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={20} /> احجز عبر واتساب
              </a>
              <a className="btn primary block" href={`tel:${PHONE_TEL}`}>
                <Icon name="phone" size={18} /> <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
            </div>
            <div className="side-card">
              <h3>خدمات أخرى</h3>
              <ul className="side-links">
                {others.map((o) => (
                  <li key={o.id}><a href={`#/services/${o.id}`}>{o.icon} {o.title}</a></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

/* ---------- من نحن ---------- */
function AboutPage() {
  return (
    <>
      <PageHead title="من نحن" sub={`${BRAND.full} — ${BRAND.slogan}.`} crumbs={[{ label: "من نحن" }]} />
      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <span className="kicker">قصتنا</span>
            <h2>رعاية حقيقية تبدأ من المنزل</h2>
            <p>
              في {BRAND.name} نؤمن بأن الشفاء أسرع حين يكون المريض بين أهله. لذلك نقدم خدمات تمريضية
              متكاملة على يد فريق مؤهل ومدرب، هدفه راحة المريض وسلامته وطمأنينة أسرته.
            </p>
            <p>نخدم {AREAS.join("، ")} {AREAS_NOTE}، بتواصل دائم وأسعار واضحة.</p>
            <div className="mv">
              <div><h3>رسالتنا</h3><p>تقديم رعاية تمريضية آمنة وإنسانية في المنزل تحفظ راحة المريض وكرامته.</p></div>
              <div><h3>رؤيتنا</h3><p>أن نكون الخيار الأول للأسر التي تبحث عن رعاية منزلية موثوقة.</p></div>
            </div>
          </div>
          <div className="about-photo">
            <Photo src={IMAGES.about} alt="فريق التمريض" className="about-img" icon="🤲" />
          </div>
        </div>
      </section>

      <section className="why-band">
        <div className="container">
          <SectionHead kicker="قيمنا" title="ما نلتزم به" />
          <div className="why-grid">
            {WHY.map((w) => (
              <div key={w.title} className="why-item">
                <span className="why-ic"><Icon name={w.icon} size={28} stroke={1.6} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="كيف نعمل" title="خطوات الحصول على الخدمة" />
          <Steps row />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ReviewsPage() {
  return (
    <>
      <PageHead title="آراء عملائنا" sub="ثقتكم هي أكبر دافع لنا لتقديم الأفضل." crumbs={[{ label: "آراء العملاء" }]} />
      <section className="section">
        <div className="container">
          <div className="rv-grid">
            {REVIEWS.map((r) => <ReviewCard key={r.name} r={r} />)}
          </div>
        </div>
      </section>
      <CtaBand text="جرّب الخدمة بنفسك" />
    </>
  );
}

function FaqPage() {
  return (
    <>
      <PageHead title="الأسئلة الشائعة" sub="إجابات سريعة على أكثر ما يسأل عنه عملاؤنا." crumbs={[{ label: "الأسئلة الشائعة" }]} />
      <section className="section">
        <div className="container faq-wrap">
          <FaqList items={FAQ} />
          <p className="center-link">
            لم تجد إجابتك؟{" "}
            <a href={waLink("السلام عليكم، لدي استفسار")} target="_blank" rel="noopener noreferrer">
              راسلنا على واتساب
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHead title="تواصل معنا" sub="نرد على رسائلك في أقرب وقت. الخدمة متوفرة على مدار الساعة." crumbs={[{ label: "تواصل معنا" }]} />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-cards">
            <a className="c-card" href={waLink()} target="_blank" rel="noopener noreferrer">
              <span className="c-ic wa"><WhatsAppIcon size={26} /></span>
              <span><b>واتساب</b><small dir="ltr">{PHONE_DISPLAY}</small></span>
            </a>
            <a className="c-card" href={`tel:${PHONE_TEL}`}>
              <span className="c-ic"><Icon name="phone" size={24} /></span>
              <span><b>اتصال مباشر</b><small dir="ltr">{PHONE_DISPLAY}</small></span>
            </a>
            <div className="c-card">
              <span className="c-ic"><Icon name="pin" size={24} /></span>
              <span><b>مناطق الخدمة</b><small>{AREAS.join(" - ")} {AREAS_NOTE}</small></span>
            </div>
            <div className="c-card">
              <span className="c-ic"><Icon name="clock" size={24} /></span>
              <span><b>ساعات العمل</b><small>متوفرون على مدار الساعة</small></span>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}

/* ---------- التطبيق ---------- */
export default function App() {
  const route = useRoute();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = BRAND.full;
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  const isActive = (to) => (to === "/" ? route === "/" : route.startsWith(to));

  let page;
  if (route === "/services") page = <ServicesPage />;
  else if (route.startsWith("/services/")) page = <ServiceDetail id={route.split("/")[2]} />;
  else if (route === "/about") page = <AboutPage />;
  else if (route === "/reviews") page = <ReviewsPage />;
  else if (route === "/faq") page = <FaqPage />;
  else if (route === "/contact") page = <ContactPage />;
  else page = <HomePage />;

  return (
    <div className="hy" dir="rtl" lang="ar">
      <style>{CSS}</style>

      <div className="topbar">
        <div className="container topbar-in">
          <span><Icon name="clock" size={15} /> متوفرون على مدار الساعة</span>
          <a href={`tel:${PHONE_TEL}`}><Icon name="phone" size={15} /> <span dir="ltr">{PHONE_DISPLAY}</span></a>
        </div>
      </div>

      <header className="header">
        <div className="container header-in">
          <a href="#/" className="brand" aria-label="الصفحة الرئيسية"><Logo /></a>

          <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="القائمة الرئيسية">
            {NAV.map((n) => (
              <a key={n.to} href={`#${n.to}`} className={isActive(n.to) ? "active" : ""}>{n.label}</a>
            ))}
            <a className="btn primary nav-book" href="#/contact">احجز زيارة</a>
          </nav>

          <div className="header-end">
            <a className="wa-btn" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="واتساب">
              <WhatsAppIcon size={22} /> <span>واتساب</span>
            </a>
            <button className="burger" onClick={() => setMenuOpen((v) => !v)} aria-label="القائمة" aria-expanded={menuOpen}>
              <Icon name={menuOpen ? "close" : "menu"} size={26} />
            </button>
          </div>
        </div>
      </header>

      <main>{page}</main>

      <footer className="footer">
        <div className="container footer-in">
          <div className="f-about">
            <Logo size={54} light />
            <p>{BRAND.slogan}. خدمات تمريضية منزلية بأيدٍ مؤهلة وقلوب رحيمة.</p>
          </div>
          <div>
            <h4>روابط سريعة</h4>
            <ul>
              {NAV.slice(0, 5).map((n) => (
                <li key={n.to}><a href={`#${n.to}`}>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>خدماتنا</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.id}><a href={`#/services/${s.id}`}>{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>تواصل معنا</h4>
            <ul className="f-contact">
              <li><Icon name="phone" size={16} /> <a href={`tel:${PHONE_TEL}`} dir="ltr">{PHONE_DISPLAY}</a></li>
              <li><WhatsAppIcon size={16} /> <a href={waLink()} target="_blank" rel="noopener noreferrer">واتساب</a></li>
              <li><Icon name="pin" size={16} /> {AREAS.join("، ")}</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="container">© {new Date().getFullYear()} {BRAND.full}. جميع الحقوق محفوظة.</div>
        </div>
      </footer>

      <div className="float">
        <a className="float-call" href={`tel:${PHONE_TEL}`} aria-label="اتصال مباشر"><Icon name="phone" size={24} /></a>
        <a className="float-wa" href={waLink("السلام عليكم، أرغب بالاستفسار عن خدمات التمريض المنزلي")} target="_blank" rel="noopener noreferrer" aria-label="واتساب">
          <WhatsAppIcon size={30} />
        </a>
      </div>
    </div>
  );
}

/* ============================================================
   CSS
   ============================================================ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap');

.hy{
  --g900:#0b3d2e; --g800:#0d4a38; --g700:#0f6b4f; --g500:#1a9970; --g100:#e6f5ee; --g50:#f3faf6;
  --gold:#c8963e; --gold-2:#b5842f; --cream:#faf7f0; --ink:#1c2b25; --mut:#5b6b64; --line:#e4ece7;
  --wa:#22c55e; --r:18px;
  font-family:'Tajawal','Segoe UI',Tahoma,sans-serif; color:var(--ink); background:#fff;
  line-height:1.7; -webkit-font-smoothing:antialiased; overflow-x:hidden;
}
.hy *{box-sizing:border-box}
.hy a{color:inherit;text-decoration:none}
.hy button,.hy input,.hy select{font-family:inherit}
.hy button{cursor:pointer}
.hy h1,.hy h2,.hy h3,.hy h4,.hy p,.hy ul,.hy ol{margin:0}
.hy ul,.hy ol{padding:0;list-style:none}
.hy :focus-visible{outline:3px solid var(--gold);outline-offset:2px;border-radius:6px}
.hy .container{max-width:1200px;margin:0 auto;padding:0 24px}

/* buttons */
.hy .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border:2px solid transparent;border-radius:999px;padding:12px 28px;font-weight:700;font-size:1rem;transition:transform .15s,background .15s,box-shadow .15s}
.hy .btn:hover{transform:translateY(-2px)}
.hy .btn.primary{background:var(--g700);color:#fff;box-shadow:0 8px 20px rgba(15,107,79,.28)}
.hy .btn.primary:hover{background:var(--g800)}
.hy .btn.outline{background:#fff;color:var(--g700);border-color:var(--g700)}
.hy .btn.outline:hover{background:var(--g50)}
.hy .btn.gold{background:var(--gold);color:#fff;box-shadow:0 8px 20px rgba(200,150,62,.35)}
.hy .btn.gold:hover{background:var(--gold-2)}
.hy .btn.wa{background:var(--wa);color:#fff}
.hy .btn.block{width:100%}

/* logo */
.hy .logo{display:inline-flex;align-items:center;gap:10px}
.hy .logo-text{display:flex;flex-direction:column;line-height:1.2}
.hy .logo-text b{font-size:1.45rem;font-weight:800}
.hy .logo-text span{font-size:.82rem;font-weight:700}

/* topbar + header */
.hy .topbar{background:var(--g900);color:#d6efe3;font-size:.85rem}
.hy .topbar-in{display:flex;justify-content:space-between;align-items:center;gap:12px;padding-block:7px}
.hy .topbar span,.hy .topbar a{display:inline-flex;align-items:center;gap:6px}
.hy .header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.96);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.hy .header-in{display:flex;align-items:center;gap:24px;height:78px}
.hy .nav{display:flex;align-items:center;gap:26px;margin-inline-end:auto;margin-inline-start:16px}
.hy .nav a:not(.btn){font-weight:700;font-size:.97rem;color:#2b3f36;padding:6px 0;border-bottom:3px solid transparent}
.hy .nav a.active,.hy .nav a:not(.btn):hover{color:var(--g700);border-color:var(--gold)}
.hy .nav-book{display:none}
.hy .header-end{display:flex;align-items:center;gap:12px}
.hy .wa-btn{display:inline-flex;align-items:center;gap:8px;background:var(--wa);color:#fff;border-radius:999px;padding:9px 20px;font-weight:700}
.hy .burger{display:none;background:var(--g100);border:0;color:var(--g800);border-radius:12px;padding:8px}

/* hero */
.hy .hero{background:radial-gradient(900px 400px at 85% 10%,#e6f5ee,transparent 60%),linear-gradient(180deg,var(--cream),#fff);padding:56px 0 90px}
.hy .hero-in{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center}
.hy .pill{display:inline-block;background:var(--g100);color:var(--g700);font-weight:700;font-size:.9rem;padding:6px 16px;border-radius:999px;margin-bottom:16px}
.hy .hero h1{font-size:clamp(2rem,4.4vw,3.3rem);font-weight:800;line-height:1.35;color:var(--g900);margin-bottom:16px}
.hy .hero h1 em{font-style:normal;color:var(--gold-2)}
.hy .hero-text>p{font-size:1.1rem;color:var(--mut);max-width:560px;margin-bottom:26px}
.hy .hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:22px}
.hy .hero-points{display:flex;flex-wrap:wrap;gap:8px 20px;color:var(--g800);font-weight:700;font-size:.92rem}
.hy .hero-points li{display:inline-flex;align-items:center;gap:6px}
.hy .hero-points svg{color:var(--g500)}
.hy .hero-visual{position:relative;max-width:440px;width:100%;margin-inline:auto}
.hy .arch{aspect-ratio:4/5;border-radius:999px 999px 28px 28px;overflow:hidden;background:var(--g100);border:6px solid #fff;box-shadow:0 26px 50px rgba(11,61,46,.22),0 0 0 2px var(--gold)}
.hy .arch-img{width:100%;height:100%;object-fit:cover;display:block}
.hy .float-badge{position:absolute;display:flex;align-items:center;gap:10px;background:#fff;border-radius:16px;padding:10px 16px;box-shadow:0 12px 28px rgba(11,61,46,.18)}
.hy .float-badge>span{font-size:1.6rem}
.hy .float-badge b{display:block;color:var(--g900);font-size:.95rem;line-height:1.3}
.hy .float-badge small{color:var(--mut);font-size:.78rem}
.hy .float-badge.b1{top:14%;inset-inline-start:-28px}
.hy .float-badge.b2{bottom:10%;inset-inline-end:-24px}
.hy .photo-fallback{display:grid;place-items:center;background:linear-gradient(135deg,#d3eee1,#f3faf6 60%,#f4e7cc);color:var(--g800);font-size:3.4rem;width:100%;height:100%}

/* features */
.hy .features{margin-top:-52px;position:relative;z-index:2}
.hy .feat-card{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;background:#fff;border-radius:24px;box-shadow:0 18px 44px rgba(11,61,46,.12);border:1px solid var(--line);padding:22px 28px;max-width:1152px}
.hy .feat{display:flex;align-items:center;gap:12px;padding:4px 10px}
.hy .feat-ic{display:grid;place-items:center;width:50px;height:50px;border-radius:16px;background:var(--g100);color:var(--g700);flex:none}
.hy .feat b{display:block;color:var(--g900);font-size:.98rem;line-height:1.3}
.hy .feat small{color:var(--mut);font-size:.8rem}

/* sections */
.hy .section{padding:76px 0 12px}
.hy .section.alt{background:var(--g50);padding:70px 0;margin-top:64px}
.hy .sec-head{text-align:center;max-width:640px;margin:0 auto 38px}
.hy .kicker{display:inline-block;color:var(--gold-2);font-weight:800;font-size:.92rem;letter-spacing:.3px;margin-bottom:6px}
.hy .kicker::before,.hy .kicker::after{content:"";display:inline-block;width:22px;height:2px;background:var(--gold);vertical-align:middle;margin:0 8px}
.hy .sec-head h2{font-size:clamp(1.6rem,3vw,2.3rem);font-weight:800;color:var(--g900);line-height:1.4}
.hy .sec-head p{color:var(--mut);margin-top:8px}
.hy .center-link{text-align:center;margin-top:26px;font-weight:700;color:var(--g700)}
.hy .center-link a:hover{color:var(--gold-2)}

/* services */
.hy .services{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.hy .svc{position:relative;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:30px 26px 24px;box-shadow:0 8px 24px rgba(11,61,46,.06);display:flex;flex-direction:column;transition:transform .2s,box-shadow .2s,border-color .2s}
.hy .svc:hover{transform:translateY(-6px);box-shadow:0 18px 38px rgba(11,61,46,.13);border-color:var(--gold)}
.hy .svc-num{position:absolute;top:18px;inset-inline-end:22px;font-size:2.2rem;font-weight:800;color:var(--g100);line-height:1}
.hy .svc-ic{display:grid;place-items:center;width:62px;height:62px;border-radius:20px;background:var(--g100);font-size:1.9rem;margin-bottom:16px}
.hy .svc h3{font-size:1.2rem;font-weight:800;color:var(--g900);margin-bottom:6px}
.hy .svc p{color:var(--mut);font-size:.95rem;flex:1}
.hy .more{display:inline-flex;align-items:center;gap:8px;margin-top:16px;font-weight:700;color:var(--g700)}
.hy .svc:hover .more{color:var(--gold-2)}
.hy .emergency-card{background:linear-gradient(145deg,var(--g800),var(--g700));border-color:transparent}
.hy .emergency-card .svc-ic{background:rgba(255,255,255,.14)}
.hy .emergency-card h3{color:#fff}
.hy .emergency-card p{color:#cfe9dc}
.hy .emergency-card .more{color:#ffe2a8}

/* steps */
.hy .steps{display:grid;gap:14px}
.hy .steps.row{grid-template-columns:repeat(4,1fr)}
.hy .steps li{display:flex;gap:14px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:20px}
.hy .steps b{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:var(--gold);color:#fff;font-size:1.1rem;flex:none}
.hy .steps h3{font-size:1.05rem;font-weight:800;color:var(--g900)}
.hy .steps p{font-size:.9rem;color:var(--mut)}

/* why band */
.hy .why-band{background:linear-gradient(135deg,var(--g900),var(--g700));color:#fff;padding:70px 0;margin-top:64px}
.hy .why-band .sec-head h2{color:#fff}
.hy .why-band .kicker{color:#ffd98e}
.hy .why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.hy .why-item{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:var(--r);padding:26px 20px;text-align:center}
.hy .why-ic{display:inline-grid;place-items:center;width:62px;height:62px;border-radius:50%;background:rgba(255,255,255,.14);color:#ffd98e;margin-bottom:12px}
.hy .why-item h3{font-size:1.1rem;font-weight:800;margin-bottom:4px}
.hy .why-item p{font-size:.9rem;color:#cfe9dc}

/* booking */
.hy .book-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
.hy .book-info h2{font-size:clamp(1.7rem,3vw,2.3rem);font-weight:800;color:var(--g900);margin:4px 0 10px}
.hy .book-info>p{color:var(--mut);margin-bottom:22px}
.hy .book-call{display:flex;align-items:center;gap:14px;background:var(--g50);border:1px solid var(--line);border-radius:var(--r);padding:14px 18px;margin-bottom:26px}
.hy .book-call>span{display:grid;place-items:center;width:50px;height:50px;border-radius:50%;background:var(--g700);color:#fff}
.hy .book-call small{display:block;color:var(--mut);font-size:.82rem}
.hy .book-call b{color:var(--g900);font-size:1.2rem}
.hy .book-info h4{color:var(--g900);font-size:1.05rem;margin-bottom:10px}
.hy .areas-chips{display:flex;flex-wrap:wrap;gap:10px}
.hy .chip{display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid var(--line);color:var(--g800);font-weight:700;font-size:.9rem;padding:7px 14px;border-radius:999px}
.hy .chip svg{color:var(--gold-2)}
.hy .areas p{color:var(--mut);font-size:.9rem;margin-top:10px}
.hy .booking{background:#fff;border:1px solid var(--line);border-top:5px solid var(--gold);border-radius:24px;padding:28px;box-shadow:0 20px 44px rgba(11,61,46,.12)}
.hy .booking h3{font-size:1.45rem;font-weight:800;color:var(--g900)}
.hy .booking .sub{color:var(--mut);font-size:.92rem;margin-bottom:10px}
.hy .fld{display:block;margin-top:14px}
.hy .fld>span{display:block;font-weight:700;font-size:.88rem;color:var(--g900);margin-bottom:5px}
.hy .fld input,.hy .fld select{width:100%;height:48px;border:1.5px solid #d5e3db;border-radius:12px;background:#fbfdfc;padding:0 14px;font-size:.96rem;color:var(--ink)}
.hy .fld input:focus,.hy .fld select:focus{outline:0;border-color:var(--g500);box-shadow:0 0 0 3px rgba(26,153,112,.15)}
.hy .fld input.err,.hy .fld select.err{border-color:#e5484d}
.hy .fld small{display:block;color:#d1343a;font-size:.8rem;margin-top:4px}
.hy .fld-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.hy .booking .btn{margin-top:20px}

/* reviews */
.hy .rv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.hy .rv{margin:0;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:24px;box-shadow:0 8px 22px rgba(11,61,46,.06);display:flex;flex-direction:column}
.hy .stars{color:var(--gold);letter-spacing:3px;font-size:1.05rem}
.hy .rv blockquote{margin:10px 0 16px;color:#33463d;flex:1}
.hy .rv figcaption{display:flex;align-items:center;gap:10px;color:var(--g900)}
.hy .rv-ic{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:var(--g100);color:var(--g700)}

/* faq */
.hy .faq-wrap{max-width:820px}
.hy .faq-item{background:#fff;border:1px solid var(--line);border-radius:14px;margin-bottom:12px;overflow:hidden}
.hy .faq-item.open{border-color:var(--g500);box-shadow:0 8px 20px rgba(11,61,46,.08)}
.hy .faq-item button{width:100%;display:flex;align-items:center;justify-content:space-between;gap:14px;background:none;border:0;padding:16px 20px;font-weight:700;font-size:1rem;color:var(--g900);text-align:start}
.hy .faq-pm{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--g100);color:var(--g700);flex:none}
.hy .faq-item.open .faq-pm{background:var(--g700);color:#fff}
.hy .faq-item p{padding:0 20px 18px;color:var(--mut)}

/* cta band */
.hy .cta-band{background:linear-gradient(135deg,var(--g900),var(--g700));color:#fff;margin-top:76px}
.hy .cta-in{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;padding-block:38px}
.hy .cta-in h2{font-size:1.7rem;font-weight:800}
.hy .cta-in p{color:#cfe9dc}
.hy .cta-actions{display:flex;gap:12px;flex-wrap:wrap}

/* page head */
.hy .page-head{background:linear-gradient(135deg,var(--g900),var(--g700));color:#fff;padding:44px 0 40px;position:relative;overflow:hidden}
.hy .page-head::after{content:"";position:absolute;inset-inline-start:-60px;bottom:-90px;width:260px;height:260px;border-radius:50%;background:rgba(200,150,62,.22)}
.hy .crumbs{display:flex;flex-wrap:wrap;gap:6px;font-size:.88rem;color:#b9dccb;margin-bottom:10px;position:relative}
.hy .crumbs a{color:#ffe2a8;font-weight:700}
.hy .crumbs i{font-style:normal;margin-inline:6px}
.hy .page-head h1{font-size:clamp(1.8rem,3.6vw,2.6rem);font-weight:800;position:relative}
.hy .page-head p{color:#d6efe3;margin-top:6px;max-width:640px;position:relative}

/* detail */
.hy .detail{display:grid;grid-template-columns:1fr 330px;gap:30px;align-items:start}
.hy .detail-img{width:100%;height:300px;object-fit:cover;border-radius:22px;display:block}
.hy .detail-main .photo-fallback{height:300px;border-radius:22px;font-size:4.5rem}
.hy .lead{font-size:1.12rem;color:#2c4137;margin:20px 0 6px;line-height:2}
.hy .h-sm{font-size:1.3rem;font-weight:800;color:var(--g900);margin:28px 0 14px}
.hy .checklist{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.hy .checklist li{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:13px 16px;font-weight:700;font-size:.95rem;color:var(--g900)}
.hy .checklist li span{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--g500);color:#fff;flex:none}
.hy .detail-side{position:sticky;top:110px;display:grid;gap:16px}
.hy .side-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:22px;box-shadow:0 8px 22px rgba(11,61,46,.07)}
.hy .side-card h3{font-size:1.1rem;font-weight:800;color:var(--g900);margin-bottom:6px}
.hy .side-card p{font-size:.9rem;color:var(--mut);margin-bottom:14px}
.hy .side-card .btn{margin-bottom:10px}
.hy .side-links li{border-top:1px solid var(--line)}
.hy .side-links li:first-child{border-top:0}
.hy .side-links a{display:block;padding:11px 0;font-weight:700;color:var(--g800)}
.hy .side-links a:hover{color:var(--gold-2)}

/* about */
.hy .about-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:center}
.hy .about-text h2{font-size:clamp(1.6rem,3vw,2.2rem);font-weight:800;color:var(--g900);margin:4px 0 12px}
.hy .about-text>p{color:#41564b;line-height:2;margin-bottom:12px}
.hy .mv{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:10px}
.hy .mv>div{background:var(--g50);border:1px solid var(--line);border-radius:16px;padding:18px}
.hy .mv h3{color:var(--g700);font-weight:800;margin-bottom:4px}
.hy .mv p{font-size:.92rem;color:var(--mut)}
.hy .about-img{width:100%;height:400px;object-fit:cover;border-radius:999px 999px 28px 28px;display:block;box-shadow:0 0 0 2px var(--gold)}
.hy .about-photo .photo-fallback{height:400px;border-radius:999px 999px 28px 28px;font-size:4.5rem}

/* contact */
.hy .contact-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:30px;align-items:start}
.hy .contact-cards{display:grid;gap:14px}
.hy .c-card{display:flex;align-items:center;gap:16px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px 20px;box-shadow:0 8px 22px rgba(11,61,46,.06)}
.hy a.c-card:hover{border-color:var(--gold)}
.hy .c-ic{display:grid;place-items:center;width:54px;height:54px;border-radius:16px;background:var(--g100);color:var(--g700);flex:none}
.hy .c-ic.wa{background:var(--wa);color:#fff}
.hy .c-card b{display:block;color:var(--g900)}
.hy .c-card small{color:var(--mut);font-size:.9rem}

/* footer */
.hy .footer{background:var(--g900);color:#cfe9dc;margin-top:80px}
.hy .footer-in{display:grid;grid-template-columns:1.4fr 1fr 1.1fr 1.2fr;gap:30px;padding-block:52px 34px}
.hy .f-about p{margin-top:14px;font-size:.93rem;color:#a9cdbb;max-width:300px}
.hy .footer h4{color:#fff;font-size:1.05rem;margin-bottom:14px;position:relative;padding-bottom:8px}
.hy .footer h4::after{content:"";position:absolute;bottom:0;inset-inline-start:0;width:30px;height:3px;border-radius:2px;background:var(--gold)}
.hy .footer li{margin-bottom:9px;font-size:.93rem}
.hy .footer li a:hover{color:#ffd98e}
.hy .f-contact li{display:flex;align-items:center;gap:8px}
.hy .f-contact svg{color:#ffd98e;flex:none}
.hy .copyright{border-top:1px solid rgba(255,255,255,.12);padding:16px 0;text-align:center;font-size:.85rem;color:#8fb8a3}

/* floating */
.hy .float{position:fixed;left:18px;bottom:18px;z-index:60;display:flex;flex-direction:column;gap:12px}
.hy .float a{display:grid;place-items:center;width:56px;height:56px;border-radius:50%;color:#fff;box-shadow:0 10px 24px rgba(0,0,0,.25);transition:transform .15s}
.hy .float a:hover{transform:scale(1.08)}
.hy .float-wa{background:var(--wa)}
.hy .float-call{background:var(--g700)}
@media (prefers-reduced-motion:no-preference){
  .hy .float-wa{animation:hy-pulse 2.6s ease-out 1}
}
@keyframes hy-pulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.6)}100%{box-shadow:0 0 0 22px rgba(34,197,94,0)}}

/* ---------- تابلت ---------- */
@media (max-width:1000px){
  .hy .hero-in{grid-template-columns:1fr;gap:36px;text-align:center}
  .hy .hero-text>p{margin-inline:auto}
  .hy .hero-cta,.hy .hero-points{justify-content:center}
  .hy .float-badge.b1{inset-inline-start:-8px}
  .hy .float-badge.b2{inset-inline-end:-8px}
  .hy .feat-card{grid-template-columns:1fr 1fr;row-gap:16px}
  .hy .services{grid-template-columns:1fr 1fr}
  .hy .steps.row{grid-template-columns:1fr 1fr}
  .hy .why-grid{grid-template-columns:1fr 1fr}
  .hy .book-grid,.hy .contact-grid,.hy .about-grid{grid-template-columns:1fr}
  .hy .rv-grid{grid-template-columns:1fr 1fr}
  .hy .detail{grid-template-columns:1fr}
  .hy .detail-side{position:static}
  .hy .footer-in{grid-template-columns:1fr 1fr}
  .hy .about-photo{max-width:420px;margin-inline:auto;width:100%}
}

/* ---------- موبايل ---------- */
@media (max-width:760px){
  .hy .container{padding:0 16px}
  .hy .topbar-in span{display:none}
  .hy .topbar-in{justify-content:center}
  .hy .header-in{height:68px;gap:10px}
  .hy .logo-text b{font-size:1.2rem}
  .hy .logo-text span{font-size:.72rem}
  .hy .wa-btn span{display:none}
  .hy .wa-btn{padding:10px}
  .hy .burger{display:block}
  .hy .header-end{margin-inline-start:auto}
  .hy .nav{position:absolute;inset-inline:0;top:100%;background:#fff;flex-direction:column;align-items:stretch;gap:0;margin:0;padding:8px 16px 18px;border-bottom:1px solid var(--line);box-shadow:0 18px 30px rgba(11,61,46,.12);display:none}
  .hy .nav.open{display:flex}
  .hy .nav a:not(.btn){padding:13px 4px;border-bottom:1px solid var(--line)}
  .hy .nav-book{display:inline-flex;margin-top:14px}
  .hy .hero{padding:34px 0 76px}
  .hy .hero-cta .btn{width:100%}
  .hy .hero-visual{max-width:320px}
  .hy .float-badge{padding:8px 12px}
  .hy .float-badge b{font-size:.85rem}
  .hy .feat-card{grid-template-columns:1fr;padding:18px}
  .hy .section{padding-top:56px}
  .hy .section.alt,.hy .why-band{padding:54px 0;margin-top:50px}
  .hy .services,.hy .steps.row,.hy .why-grid,.hy .rv-grid,.hy .checklist,.hy .mv,.hy .fld-row{grid-template-columns:1fr}
  .hy .cta-in{flex-direction:column;align-items:flex-start}
  .hy .cta-actions,.hy .cta-actions .btn{width:100%}
  .hy .detail-img,.hy .detail-main .photo-fallback{height:210px}
  .hy .about-img,.hy .about-photo .photo-fallback{height:320px}
  .hy .footer-in{grid-template-columns:1fr;gap:26px}
  .hy .float{left:12px;bottom:12px}
  .hy .float a{width:52px;height:52px}
}
`;

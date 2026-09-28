<<<<<<< HEAD
import { useEffect, useState } from "react";

/* ============================================================
   مركز الأمل للتمريض المنزلي — Landing Page (React, single file)
   - RTL / Arabic (خط Cairo)
   - Responsive: موبايل + تابلت + كمبيوتر
   - لا يحتاج أي مكتبة إضافية (CSS داخل الملف)
   ============================================================ */

const PHONE_DISPLAY = "+966 59 606 3710";
const PHONE_TEL = "+966596063710";
const WA_NUMBER = "966596063710";
const waLink = (text = "") =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/* ---------- الصور ----------
   ضع صورك في public/images/ بنفس الأسماء أو غيّر المسارات هنا.
   لو الصورة مش موجودة يظهر بديل لوني تلقائيًا بدل صورة مكسورة. */
const IMAGES = {
  makkah: "/images/makkah-skyline.jpg",
  booking: "/images/booking-nurse.jpg",
  why: "/images/caring-hands.jpg",
  homeNursing: "/images/home-nursing.jpg",
  postOp: "/images/post-op.jpg",
  elderly: "/images/elderly-care.jpg",
  injections: "/images/injections-iv.jpg",
  wounds: "/images/wound-care.jpg",
  makkahCity: "/images/city-makkah.jpg",
  jeddah: "/images/city-jeddah.jpg",
  taif: "/images/city-taif.jpg",
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
    id: "nursing", title: "التمريض المنزلي", desc: "رعاية شاملة للحالات المزمنة واحتياجاتك اليومية", img: IMAGES.homeNursing, icon: "🩺",
    long: "رعاية تمريضية شاملة في منزلك للحالات المزمنة واحتياجاتك اليومية، بإشراف فريق مؤهل يتابع حالتك بانتظام.",
    includes: ["قياس العلامات الحيوية ومتابعتها", "إعطاء الأدوية حسب الوصفة الطبية", "متابعة الحالات المزمنة كالسكري والضغط", "المساعدة في العناية الشخصية اليومية", "تثقيف المريض والأسرة بطريقة العناية الصحيحة"],
  },
  {
    id: "post-op", title: "رعاية ما بعد العمليات", desc: "متابعة دقيقة لضمان الشفاء السريع والأمن", img: IMAGES.postOp, icon: "🏥",
    long: "متابعة دقيقة بعد الخروج من المستشفى لضمان شفاء سريع وآمن، وسط راحة المنزل وأهله.",
    includes: ["متابعة الحالة بعد الخروج من المستشفى", "العناية بمكان العملية وتغيير الضمادات", "متابعة الألم والأدوية", "المساعدة على الحركة الآمنة", "إبلاغ الأسرة بأي ملاحظة تستدعي مراجعة الطبيب"],
  },
  {
    id: "elderly", title: "رعاية كبار السن", desc: "متابعة الحالة الصحية وتقديم الرعاية اليومية", img: IMAGES.elderly, icon: "👴",
    long: "رعاية يومية تحفظ كرامة كبار السن وراحتهم، مع متابعة صحية منتظمة واهتمام إنساني.",
    includes: ["متابعة الحالة الصحية اليومية", "المساعدة في النظافة الشخصية والحركة", "تنظيم مواعيد الأدوية", "الوقاية من السقوط وقرحات الفراش", "الاهتمام والمرافقة"],
  },
  {
    id: "injections", title: "الحقن والمحاليل", desc: "حقن عضلية ووريدية وإعطاء المحاليل الوريدية", img: IMAGES.injections, icon: "💉",
    long: "حقن ومحاليل تُعطى في المنزل على يد ممرض مؤهل، بأدوات معقمة وبناءً على وصفة طبية سارية.",
    includes: ["حقن عضلية", "حقن وريدية", "إعطاء المحاليل الوريدية", "حقن تحت الجلد مثل الأنسولين", "مراقبة الحالة أثناء الجلسة وبعدها"],
  },
  {
    id: "wounds", title: "تغيير الجروح والعناية بها", desc: "تعقيم الجروح وتغيير الضمادات بأعلى معايير السلامة", img: IMAGES.wounds, icon: "🩹",
    long: "تعقيم الجروح وتغيير الضمادات بأعلى معايير السلامة لتسريع الالتئام وتقليل خطر العدوى.",
    includes: ["تنظيف الجرح وتعقيمه", "تغيير الضمادات بانتظام", "متابعة علامات الالتهاب", "العناية بجروح ما بعد العمليات", "تعليمات العناية بالجرح بين الزيارات"],
  },
];

const STEPS = [
  { t: "تواصل معنا", d: "أرسل طلبك على واتساب أو من نموذج الحجز واذكر الخدمة." },
  { t: "نؤكد التفاصيل", d: "نراجع حالتك ونؤكد الموعد والسعر قبل الزيارة." },
  { t: "زيارة الممرض", d: "يصل ممرض مؤهل إلى منزلك في الموعد المتفق عليه." },
  { t: "المتابعة", d: "نتابع حالتك ونرتب الزيارات التالية عند الحاجة." },
];

const TOP_FEATURES = [
  { icon: "shield", text: "جودة عالية في الخدمة" },
  { icon: "clock", text: "متوفر على مدار الساعة" },
  { icon: "users", text: "فريق تمريضي محترف" },
  { icon: "pin", text: "بجميع مناطق المملكة" },
];

const WHY = [
  { icon: "user", title: "فريق مؤهل", sub: "ومعتمد" },
  { icon: "clock", title: "استجابة سريعة", sub: "وتواصل دائم" },
  { icon: "tag", title: "أسعار مناسبة", sub: "وواضحة" },
  { icon: "heart", title: "رعاية إنسانية", sub: "بكل اهتمام" },
];

const REVIEWS = [
  { name: "سارة الزهراني", text: "ممتنون لكم على رعايتكم، أمي في فترة الشفاء.", stars: 5 },
  { name: "محمد العتيبي", text: "تعامل راقٍ واهتمام بالتفاصيل، أنصح بهم بشدة.", stars: 5 },
  { name: "أم أحمد", text: "خدمة ممتازة وفريق متعاون جدًا، تمنيت ويحبنا من البداية.", stars: 5 },
  { name: "خالد الغامدي", text: "وصلوا في الموعد وتعاملوا مع الوالد بلطف كبير.", stars: 5 },
  { name: "نورة القرني", text: "خدمة تغيير الجروح كانت احترافية ونظيفة جدًا.", stars: 5 },
  { name: "عبدالله الحربي", text: "سرعة في الاستجابة وأسعار واضحة من أول اتصال.", stars: 5 },
];

const AREAS = [
  { name: "مكة المكرمة", img: IMAGES.makkahCity },
  { name: "جدة", img: IMAGES.jeddah },
  { name: "الطائف", img: IMAGES.taif },
];

const FAQ = [
  { q: "هل الخدمة متوفرة في جميع مناطق المملكة؟", a: "نخدم مكة المكرمة وجدة والطائف، ونصل إلى باقي مناطق المملكة حسب التوفر. تواصل معنا على واتساب لتأكيد منطقتك." },
  { q: "كم تكلفة الزيارة المنزلية؟", a: "تختلف التكلفة حسب نوع الخدمة ومدة الزيارة. أرسل لنا طلبك وسنرد بالسعر الواضح قبل الزيارة." },
  { q: "هل يمكن حجز زيارة في نفس اليوم؟", a: "نعم، حسب توفر الفريق في منطقتك. اتصل بنا أو راسلنا على واتساب لتأكيد أقرب موعد." },
  { q: "ما هي طرق الدفع المتوفرة؟", a: "نقبل الدفع النقدي والتحويل البنكي. سنوضح لك التفاصيل عند تأكيد الحجز." },
  { q: "كيف أحجز زيارة؟", a: "من نموذج الحجز في الموقع أو بمراسلتنا مباشرة على واتساب. نؤكد معك الموعد والسعر قبل وصول الممرض." },
  { q: "هل يمكن طلب الخدمة لأكثر من زيارة؟", a: "نعم، يمكن ترتيب زيارات متكررة يوميًا أو أسبوعيًا حسب حالة المريض وتوصية الطبيب." },
];

const SERVICE_OPTIONS = [
  "التمريض المنزلي",
  "رعاية ما بعد العمليات",
  "رعاية كبار السن",
  "الحقن والمحاليل",
  "تغيير الجروح والعناية بها",
  "زيارة طارئة",
];

/* ---------- الأيقونات ---------- */
const ICONS = {
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  users: <><circle cx="9" cy="9" r="3.2" /><path d="M3.5 19c.5-3.2 2.7-5 5.5-5s5 1.8 5.5 5" /><circle cx="17" cy="10" r="2.4" /><path d="M16 14.3c2.5.2 4 1.7 4.5 4.2" /></>,
  pin: <><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" /></>,
  tag: <><path d="M3 12V4h8l10 10-8 8L3 12z" /><circle cx="7.5" cy="8.5" r="1.3" /></>,
  heart: <path d="M12 20s-8-4.7-8-10.5A4.5 4.5 0 0112 7a4.5 4.5 0 018 2.5C20 15.300 12 20 12 20z" />,
  calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  phone: <path d="M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  send: <path d="M21 3L3 10.500l7 2.500 2.500 7L21 3zM10 13l11-10" />,
  car: <><path d="M4 16v-4l2-5h12l2 5v4" /><path d="M3 16h18v2H3z" /><circle cx="7.500" cy="16" r="1" /><circle cx="16.500" cy="16" r="1" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.500 9.500a2.500 2.500 0 015 .5c0 1.700-2.500 2-2.500 3.500M12 17h.01" /></>,
  chat: <><rect x="4" y="4" width="16" height="12" rx="2" /><path d="M9 20l3-4M8 9h8M8 12h5" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  arrow: <path d="M19 12H5M11 6l-6 6 6 6" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  field: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 12h6" /></>,
};

function Icon({ name, size = 22, stroke = 1.8, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

function WhatsAppIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.040 3C8.850 3 3 8.830 3 16c0 2.300.610 4.540 1.770 6.520L3 29l6.640-1.740A13.040 13.040 0 0016.040 29C23.230 29 29 23.170 29 16S23.230 3 16.040 3zm0 23.700c-1.960 0-3.870-.53-5.540-1.520l-.4-.24-3.940 1.030 1.050-3.840-.26-.4A10.650 10.650 0 015.350 16c0-5.900 4.790-10.700 10.690-10.700 5.890 0 10.660 4.800 10.660 10.700 0 5.890-4.770 10.700-10.660 10.700zm5.850-8c-.32-.16-1.900-.94-2.200-1.050-.29-.11-.5-.16-.72.160-.21.320-.83 1.050-1.020 1.260-.19.210-.37.240-.69.080-.32-.16-1.360-.5-2.590-1.600-.96-.85-1.600-1.900-1.790-2.220-.19-.32-.02-.5.140-.66.140-.14.320-.37.480-.56.160-.19.210-.32.320-.53.110-.21.050-.4-.03-.56-.08-.16-.72-1.740-.99-2.380-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.080-.85.400-.29.320-1.110 1.090-1.110 2.660s1.140 3.090 1.300 3.300c.16.210 2.240 3.420 5.420 4.800.76.330 1.350.520 1.810.670.76.240 1.450.210 2 .13.610-.09 1.900-.78 2.170-1.530.27-.75.270-1.390.19-1.530-.08-.13-.29-.21-.61-.37z" />
    </svg>
  );
}

/* ---------- اللوجو ---------- */
function Logo({ size = 64, light = false }) {
  return (
    <span className="logo" aria-label="مركز الأمل للتمريض المنزلي">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        {/* السقف */}
        <path d="M6 31L32 8l26 23" stroke={light ? "#ffffff" : "#0b3b6b"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M46 14v-5h6v11" stroke={light ? "#ffffff" : "#0b3b6b"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {/* الرأس */}
        <circle cx="32" cy="27" r="5.500" fill="#0fa3a8" />
        {/* القلب / الأيدي الحاضنة */}
        <path d="M32 55C19 47 16 37 24 35c4-1 8 1.500 8 4.500 0-3 4-5.500 8-4.500 8 2 5 12-8 20z" fill="#1d6fd1" />
        <path d="M22 42c3 5 7 8 10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".7" />
        {/* شارة الطبي */}
        <circle cx="49" cy="50" r="8" fill="#22b573" stroke={light ? "#0b2a4a" : "#fff"} strokeWidth="2.500" />
        <path d="M49 46v8M45 50h8" stroke="#fff" strokeWidth="2.400" strokeLinecap="round" />
      </svg>
      <span className="logo-text">
        <b style={{ color: light ? "#fff" : "#0b3b6b" }}>مركز الأمل</b>
        <span style={{ color: light ? "#e6f2fb" : "#0b3b6b" }}>للتمريض المنزلي</span>
        <em>رعايتك في بيتك .. أمان لنا</em>
      </span>
    </span>
  );
}

/* ---------- صورة مع بديل لوني ---------- */
function Photo({ src, alt, className = "", icon = "🩺", bare = false }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    if (bare) return null;
    return (
      <div className={`photo-fallback ${className}`} role="img" aria-label={alt}>
        <span>{icon}</span>
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

/* ---------- الراوتر (بدون مكتبات): #/services ... ---------- */
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

/* ---------- مكونات مشتركة ---------- */
function PageHead({ title, sub, crumbs = [] }) {
  return (
    <section className="page-head">
      <div className="container">
        <nav className="crumbs" aria-label="مسار الصفحة">
          <a href="#/">الرئيسية</a>
          {crumbs.map((c) => (
            <span key={c.label}>
              <i>/</i>
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
        <h2>{text}</h2>
        <div className="cta-actions">
          <a href="#/contact" className="btn-primary light">
            <Icon name="calendar" size={20} /> احجز زيارة الآن
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <WhatsAppIcon size={22} /> واتساب
          </a>
        </div>
      </div>
    </section>
  );
}

function Stars({ n }) {
  return <div className="stars" aria-label={`${n} من 5`}>{"★".repeat(n)}</div>;
}

function ReviewCard({ r }) {
  return (
    <figure className="rv">
      <figcaption>
        <span className="rv-ic"><Icon name="user" size={18} /></span>
        <b>{r.name}</b>
      </figcaption>
      <Stars n={r.stars} />
      <blockquote>{r.text}</blockquote>
    </figure>
  );
}

function FaqList({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <>
      {items.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{f.q}</span>
            <Icon name={open === i ? "minus" : "plus"} size={16} stroke={2.4} />
          </button>
          {open === i && <p>{f.a}</p>}
        </div>
      ))}
    </>
  );
}

function ServiceCard({ s }) {
  return (
    <article className="svc">
      <Photo src={s.img} alt={s.title} className="svc-img" icon={s.icon} />
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <a href={`#/services/${s.id}`} className="more">
        <Icon name="arrow" size={14} stroke={2.4} /> المزيد
      </a>
    </article>
  );
}

function BookingForm({ preService = "" }) {
  const [form, setForm] = useState({ name: "", phone: "", service: preService, date: "" });
  const [errors, setErrors] = useState({});
  const setField = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (form.name.trim().length < 3) err.name = "اكتب الاسم الكامل";
    if (!/^(\+?966|0)?5\d{8}$/.test(form.phone.replace(/[\s-]/g, ""))) err.phone = "اكتب رقم جوال صحيح";
    if (!form.service) err.service = "اختر نوع الخدمة";
    setErrors(err);
    if (Object.keys(err).length) return;
    const msg =
      `السلام عليكم، أرغب بحجز زيارة منزلية.\n` +
      `الاسم: ${form.name}\nالجوال: ${form.phone}\nالخدمة: ${form.service}` +
      (form.date ? `\nتاريخ الزيارة: ${form.date}` : "");
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <form className="booking" onSubmit={submit} noValidate>
      <Photo src={IMAGES.booking} alt="" className="booking-img" icon="👩‍⚕️" bare />
      <div className="booking-body">
        <h2>احجز زيارتك الآن</h2>
        <p className="sub">املأ البيانات وسنتواصل معك في أقرب وقت</p>

        <label className={`field ${errors.name ? "err" : ""}`}>
          <Icon name="user" size={18} />
          <input value={form.name} onChange={setField("name")} placeholder="الاسم الكامل" autoComplete="name" />
        </label>
        {errors.name && <small className="msg">{errors.name}</small>}

        <label className={`field ${errors.phone ? "err" : ""}`}>
          <Icon name="phone" size={18} />
          <input value={form.phone} onChange={setField("phone")} placeholder="رقم الجوال" inputMode="tel" autoComplete="tel" dir="rtl" />
        </label>
        {errors.phone && <small className="msg">{errors.phone}</small>}

        <label className={`field ${errors.service ? "err" : ""}`}>
          <Icon name="field" size={18} />
          <select value={form.service} onChange={setField("service")}>
            <option value="">نوع الخدمة</option>
            {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
        {errors.service && <small className="msg">{errors.service}</small>}

        <label className="field">
          <Icon name="calendar" size={18} />
          <input type="date" value={form.date} onChange={setField("date")} aria-label="تاريخ الزيارة (اختياري)" />
        </label>

        <button type="submit" className="btn-primary block">
          <Icon name="send" size={18} /> ارسال الطلب
        </button>
      </div>
    </form>
  );
}

function AreasCard() {
  return (
    <div className="card areas">
      <h3 className="card-title"><Icon name="pin" size={22} /> مناطق الخدمة</h3>
      <p className="areas-sub">نخدم جميع مناطق المملكة وخصوصًا:</p>
      <div className="areas-grid">
        {AREAS.map((a) => (
          <div key={a.name} className="area">
            <Photo src={a.img} alt={a.name} className="area-img" icon="🕌" />
            <span>{a.name}</span>
          </div>
        ))}
      </div>
      <p className="areas-foot"><Icon name="car" size={22} /> توفر الخدمة في جميع أنحاء المملكة</p>
    </div>
  );
}

/* ---------- الصفحة الرئيسية ---------- */
function HomePage() {
  const [page, setPage] = useState(0);
  const pages = [REVIEWS.slice(0, 3), REVIEWS.slice(3, 6)];
  const toBooking = (e) => {
    e.preventDefault();
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <section className="hero">
        <Photo src={IMAGES.makkah} alt="" className="hero-bg" bare />
        <div className="container hero-in">
          <div className="hero-text">
            <h1>
              <span className="h-navy">رعاية طبية متخصصة</span>
              <span className="h-teal">في منزلك</span>
            </h1>
            <p>
              فريق تمريضي مؤهل ومدرب يقدم أفضل خدمات الرعاية الصحية
              <br />
              لأن راحتك وصحتك تهمنا
            </p>
            <div className="hero-cta">
              <a href="#booking" onClick={toBooking} className="btn-primary">
                <Icon name="calendar" size={20} /> احجز زيارة الآن
              </a>
              <a className="hero-wa" href={waLink()} target="_blank" rel="noopener noreferrer">
                <span className="wa-circle"><WhatsAppIcon size={26} /></span>
                <span className="hero-wa-t">
                  <small>تواصل معنا على واتساب</small>
                  <b dir="ltr">{PHONE_DISPLAY}</b>
                </span>
              </a>
            </div>
          </div>
          <div className="hero-areas">
            <span>نخدمكم في مكة</span>
            <span>جدة · الطائف</span>
            <span>وكل مناطق المملكة</span>
            <i />
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="container strip-in">
          {TOP_FEATURES.map((f) => (
            <div key={f.text} className="strip-item">
              <span className="strip-ic"><Icon name={f.icon} size={24} /></span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sec-title"><span>خدماتنا</span></h2>
          <div className="services">
            {SERVICES.map((s) => <ServiceCard key={s.id} s={s} />)}
          </div>
          <p className="emergency">
            🚑 زيارة منزلية طارئة حسب توفر الفريق —{" "}
            <a href={`tel:${PHONE_TEL}`}>اتصل الآن <span dir="ltr">{PHONE_DISPLAY}</span></a>
          </p>
        </div>
      </section>

      <section id="booking" className="section tight">
        <div className="container two-col">
          <BookingForm />
          <WhyBlock />
        </div>
      </section>

      <section className="section tight">
        <div className="container three-col">
          <div className="card faq">
            <h3 className="card-title"><Icon name="help" size={22} /> الأسئلة الشائعة</h3>
            <FaqList items={FAQ.slice(0, 4)} />
            <a href="#/faq" className="all-link">كل الأسئلة</a>
          </div>

          <div className="card reviews">
            <h3 className="card-title"><Icon name="chat" size={22} /> آراء عملائنا</h3>
            <div className="rv-grid">
              {pages[page].map((r) => <ReviewCard key={r.name} r={r} />)}
            </div>
            <div className="dots">
              {pages.map((_, i) => (
                <button key={i} className={i === page ? "on" : ""} onClick={() => setPage(i)} aria-label={`الصفحة ${i + 1}`} />
              ))}
            </div>
            <a href="#/reviews" className="all-link">كل الآراء</a>
          </div>

          <AreasCard />
        </div>
      </section>
    </>
  );
}

function WhyBlock() {
  return (
    <div className="why">
      <div className="why-body">
        <h2>لماذا مركز الأمل؟</h2>
        <p>
          نحن في مركز الأمل للتمريض المنزلي نؤمن بأن الرعاية الحقيقية تبدأ من المنزل. لذلك نقدم لك خدمات
          طبية وتمريضية متكاملة على يد فريق متخصص يهدف إلى راحتك وسلامتك.
        </p>
        <div className="why-grid">
          {WHY.map((w) => (
            <div key={w.title} className="why-item">
              <Icon name={w.icon} size={38} stroke={1.5} />
              <b>{w.title}</b>
              <span>{w.sub}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="why-photo">
        <Photo src={IMAGES.why} alt="" className="why-img" icon="🤲" bare />
        <div className="why-cap">
          لأنك تستحق
          <b>أفضل رعاية</b>
        </div>
      </div>
    </div>
  );
}

/* ---------- صفحة الخدمات ---------- */
function ServicesPage() {
  return (
    <>
      <PageHead
        title="خدماتنا"
        sub="خدمات تمريضية وطبية متكاملة تصلك إلى باب منزلك في مكة وجدة والطائف وجميع مناطق المملكة."
        crumbs={[{ label: "خدماتنا" }]}
      />
      <section className="section">
        <div className="container">
          <div className="services lg">
            {SERVICES.map((s) => <ServiceCard key={s.id} s={s} />)}
          </div>
          <div className="notice">
            <span className="notice-ic">🚑</span>
            <div>
              <b>زيارة منزلية طارئة</b>
              <p>متوفرة حسب توفر الفريق في منطقتك. اتصل بنا مباشرة لتأكيد أقرب موعد.</p>
            </div>
            <a className="btn-primary" href={`tel:${PHONE_TEL}`}>
              <Icon name="phone" size={18} /> <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ---------- تفاصيل خدمة ---------- */
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
                  <span><Icon name="shield" size={18} /></span>
                  {x}
                </li>
              ))}
            </ul>

            <h2 className="h-sm">كيف تتم الزيارة</h2>
            <ol className="steps">
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
          </div>

          <aside className="detail-side">
            <div className="side-card">
              <h3>احجز هذه الخدمة</h3>
              <p>أرسل طلبك وسنؤكد الموعد والسعر قبل الزيارة.</p>
              <a
                className="btn-wa block"
                href={waLink(`السلام عليكم، أرغب بحجز خدمة: ${s.title}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={22} /> احجز عبر واتساب
              </a>
              <a className="btn-primary block" href={`tel:${PHONE_TEL}`}>
                <Icon name="phone" size={18} /> <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
            </div>
            <div className="side-card">
              <h3>خدمات أخرى</h3>
              <ul className="side-links">
                {others.map((o) => (
                  <li key={o.id}><a href={`#/services/${o.id}`}>{o.title}</a></li>
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
      <PageHead
        title="من نحن"
        sub="مركز الأمل للتمريض المنزلي — رعايتك في بيتك، أمان لنا."
        crumbs={[{ label: "من نحن" }]}
      />
      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <h2 className="h-sm">رعاية حقيقية تبدأ من المنزل</h2>
            <p>
              نحن في مركز الأمل للتمريض المنزلي نؤمن بأن الرعاية الحقيقية تبدأ من المنزل. لذلك نقدم خدمات طبية
              وتمريضية متكاملة على يد فريق مؤهل ومدرب، هدفه راحة المريض وسلامته وطمأنينة أسرته.
            </p>
            <p>
              نخدم مكة المكرمة وجدة والطائف، ونصل إلى جميع مناطق المملكة حسب التوفر، بتواصل دائم وأسعار واضحة.
            </p>
            <div className="mv">
              <div>
                <h3>رسالتنا</h3>
                <p>تقديم رعاية تمريضية آمنة وإنسانية في المنزل تحفظ راحة المريض وكرامته.</p>
              </div>
              <div>
                <h3>رؤيتنا</h3>
                <p>أن نكون الخيار الأول للأسر التي تبحث عن رعاية منزلية موثوقة في المملكة.</p>
              </div>
            </div>
          </div>
          <div className="about-photo">
            <Photo src={IMAGES.why} alt="" className="about-img" icon="🤲" />
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <h2 className="sec-title"><span>قيمنا</span></h2>
          <div className="values">
            {WHY.map((w) => (
              <div key={w.title} className="value">
                <Icon name={w.icon} size={40} stroke={1.5} />
                <b>{w.title} {w.sub}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <h2 className="sec-title"><span>كيف نعمل</span></h2>
          <ol className="steps row">
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
        </div>
      </section>

      <section className="section tight">
        <div className="container"><AreasCard /></div>
      </section>
      <CtaBand />
    </>
  );
}

/* ---------- آراء العملاء ---------- */
function ReviewsPage() {
  return (
    <>
      <PageHead
        title="آراء عملائنا"
        sub="ثقتكم هي أكبر دافع لنا لتقديم الأفضل."
        crumbs={[{ label: "آراء العملاء" }]}
      />
      <section className="section">
        <div className="container">
          <div className="rv-grid full">
            {REVIEWS.map((r) => <ReviewCard key={r.name} r={r} />)}
          </div>
        </div>
      </section>
      <CtaBand text="جرّب الخدمة بنفسك" />
    </>
  );
}

/* ---------- الأسئلة الشائعة ---------- */
function FaqPage() {
  return (
    <>
      <PageHead
        title="الأسئلة الشائعة"
        sub="إجابات سريعة على أكثر ما يسأل عنه عملاؤنا."
        crumbs={[{ label: "الأسئلة الشائعة" }]}
      />
      <section className="section">
        <div className="container narrow">
          <div className="card faq page">
            <FaqList items={FAQ} />
          </div>
          <p className="emergency">
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

/* ---------- تواصل معنا ---------- */
function ContactPage() {
  return (
    <>
      <PageHead
        title="تواصل معنا"
        sub="نرد على رسائلك في أقرب وقت. الخدمة متوفرة على مدار الساعة."
        crumbs={[{ label: "تواصل معنا" }]}
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-cards">
            <a className="c-card" href={waLink()} target="_blank" rel="noopener noreferrer">
              <span className="c-ic wa"><WhatsAppIcon size={28} /></span>
              <span>
                <b>واتساب</b>
                <small dir="ltr">{PHONE_DISPLAY}</small>
              </span>
            </a>
            <a className="c-card" href={`tel:${PHONE_TEL}`}>
              <span className="c-ic"><Icon name="phone" size={26} /></span>
              <span>
                <b>اتصال مباشر</b>
                <small dir="ltr">{PHONE_DISPLAY}</small>
              </span>
            </a>
            <div className="c-card">
              <span className="c-ic"><Icon name="pin" size={26} /></span>
              <span>
                <b>مناطق الخدمة</b>
                <small>مكة المكرمة - جدة - الطائف وجميع مناطق المملكة</small>
              </span>
            </div>
            <div className="c-card">
              <span className="c-ic"><Icon name="clock" size={26} /></span>
              <span>
                <b>ساعات العمل</b>
                <small>متوفر على مدار الساعة</small>
              </span>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}

/* ---------- التطبيق ---------- */
export default function AlAmalHomeNursing() {
  const route = useRoute();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [route]);

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
    <div className="am" dir="rtl" lang="ar">
      <style>{CSS}</style>

      <header className="header">
        <div className="container header-in">
          <a href="#/" className="brand" aria-label="الصفحة الرئيسية">
            <Logo size={52} />
          </a>

          <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="القائمة الرئيسية">
            {NAV.map((n) => (
              <a key={n.to} href={`#${n.to}`} className={isActive(n.to) ? "active" : ""}>
                {n.label}
              </a>
            ))}
            <a className="nav-wa" href={waLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={20} /> {PHONE_DISPLAY}
            </a>
          </nav>

          <div className="header-end">
            <span className="lang" title="اللغة">
              <Icon name="globe" size={16} /> AR <Icon name="chevron" size={14} />
            </span>
            <a className="wa-pill" href={waLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={22} />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <button className="burger" onClick={() => setMenuOpen((v) => !v)} aria-label="القائمة" aria-expanded={menuOpen}>
              <Icon name={menuOpen ? "close" : "menu"} size={26} />
=======
import React from "react";
import { useState } from "react";
import {
  Activity, ArrowLeft, Baby, BedDouble, CheckCircle2, ChevronDown,
  Clock3, HeartPulse, Home, Hospital, Menu, MessageCircle, Phone,
  ShieldCheck, Stethoscope, Syringe, UserRound, X, MapPin, Star
} from "lucide-react";

const PHONE = "+966596063710";
const WHATSAPP = "966596063710";

const services = [
  { icon: Stethoscope, title: "التمريض المنزلي", text: "رعاية تمريضية متكاملة ومتابعة يومية للمريض داخل منزله." },
  { icon: Hospital, title: "رعاية ما بعد العمليات", text: "متابعة دقيقة للحالة بعد العمليات ومساعدة المريض في فترة التعافي." },
  { icon: HeartPulse, title: "رعاية كبار السن", text: "رعاية إنسانية وآمنة لكبار السن ومتابعة احتياجاتهم اليومية." },
  { icon: Syringe, title: "الحقن والمحاليل", text: "خدمات تمريضية منزلية وفق الإجراءات والمعايير الصحية المناسبة." },
  { icon: Activity, title: "تغيير الجروح والعناية بها", text: "العناية بالجروح وتغيير الضمادات ومتابعة الحالة بشكل منتظم." },
  { icon: Baby, title: "رعاية الأطفال", text: "دعم تمريضي منزلي للأطفال حسب الحالة والاحتياج." },
];

const faqs = [
  ["هل تقدمون الخدمة داخل المنزل؟", "نعم، يتم تقديم الخدمات التمريضية في منزل المريض، مع إمكانية التنسيق حسب المنطقة والحالة."],
  ["ما المناطق التي تخدمونها؟", "نخدم مكة المكرمة وجدة والطائف، ويمكن التنسيق لخدمة مناطق أخرى داخل المملكة حسب التغطية."],
  ["كيف أحجز زيارة؟", "املأ نموذج الحجز أو تواصل معنا مباشرة عبر واتساب، وسيتم التواصل معك لتأكيد التفاصيل."],
  ["هل يمكن طلب الخدمة في نفس اليوم؟", "يمكن طلب الزيارة العاجلة، ويعتمد تأكيد الموعد على التوفر والمنطقة."],
];

function Logo({ dark = false }) {
  return (
    <div className={"brand " + (dark ? "brand-dark" : "")}>
      <div className="logo-mark">
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 6 51 14v15c0 13-8 23-19 29C21 52 13 42 13 29V14L32 6Z" fill="none" stroke="currentColor" strokeWidth="3.5"/>
          <path d="M22 34c0-7 4-12 10-12s10 5 10 12" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M32 25v12M26 31h12" stroke="#16b6a4" strokeWidth="3.5" strokeLinecap="round"/>
          <circle cx="32" cy="43" r="5" fill="#16b6a4"/>
        </svg>
      </div>
      <div>
        <strong>مركز الأمل</strong>
        <span>للتمريض المنزلي</span>
      </div>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", service: "", city: "", date: "", notes: "" });

  const wa = (message = "السلام عليكم، أريد الاستفسار عن خدمات مركز الأمل للتمريض المنزلي.") =>
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");

  const submit = (e) => {
    e.preventDefault();
    const msg = `السلام عليكم، أريد حجز زيارة منزلية.
الاسم: ${form.name}
رقم الجوال: ${form.phone}
الخدمة: ${form.service || "غير محددة"}
المدينة: ${form.city || "غير محددة"}
التاريخ المطلوب: ${form.date || "غير محدد"}
ملاحظات: ${form.notes || "لا يوجد"}`;
    wa(msg);
  };

  const nav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container nav-wrap">
          <a className="logo-link" href="#" onClick={() => nav("home")}><Logo /></a>
          <nav className={menu ? "nav mobile-open" : "nav"}>
            <button onClick={() => nav("home")}>الرئيسية</button>
            <button onClick={() => nav("services")}>خدماتنا</button>
            <button onClick={() => nav("why")}>لماذا الأمل؟</button>
            <button onClick={() => nav("areas")}>مناطق الخدمة</button>
            <button onClick={() => nav("faq")}>الأسئلة الشائعة</button>
            <button className="nav-cta" onClick={() => nav("booking")}>احجز زيارة</button>
          </nav>
          <div className="nav-actions">
            <button className="whatsapp-mini" onClick={() => wa()}>
              <MessageCircle size={17}/> واتساب
            </button>
            <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="القائمة">
              {menu ? <X/> : <Menu/>}
>>>>>>> 15b459b979566da67b144f3c419af12aa234dc04
            </button>
          </div>
        </div>
      </header>

<<<<<<< HEAD
      <main>{page}</main>

      <footer className="footer">
        <div className="container footer-in">
          <div className="f-col f-brand">
            <Logo size={58} light />
          </div>
          <a className="f-col f-item" href={waLink()} target="_blank" rel="noopener noreferrer">
            <span className="f-ic wa"><WhatsAppIcon size={30} /></span>
            <span>
              <b dir="ltr">{PHONE_DISPLAY}</b>
              <small>تواصل معنا على واتساب</small>
            </span>
          </a>
          <div className="f-col f-item">
            <span className="f-ic"><Icon name="pin" size={28} /></span>
            <span>
              <b>مكة المكرمة - جدة - الطائف</b>
              <small>و جميع مناطق المملكة</small>
            </span>
          </div>
          <div className="f-col f-social">
            <div className="socials">
              {["X", "in", "👻", "♪"].map((s, i) => (
                <a key={i} href="#/" aria-label="تواصل اجتماعي" onClick={(e) => e.preventDefault()}>{s}</a>
              ))}
            </div>
            <small>جميع الحقوق محفوظة © {new Date().getFullYear()} مركز الأمل للتمريض المنزلي</small>
          </div>
        </div>
      </footer>

      <div className="float">
        <a className="float-call" href={`tel:${PHONE_TEL}`} aria-label="اتصال مباشر">
          <Icon name="phone" size={24} />
        </a>
        <a className="float-wa" href={waLink("السلام عليكم، أرغب بالاستفسار عن خدمات التمريض المنزلي")} target="_blank" rel="noopener noreferrer" aria-label="واتساب">
          <WhatsAppIcon size={32} />
        </a>
      </div>
=======
      <main>
        <section id="home" className="hero">
          <div className="hero-orb orb-one"></div>
          <div className="hero-orb orb-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span></span> رعاية صحية تصل إليك</div>
              <h1>رعاية طبية متخصصة<br/><em>في منزلك</em></h1>
              <p>لأن راحة المريض وأمانه أهم ما لدينا. نوفر لك خدمات التمريض والرعاية المنزلية على يد فريق مؤهل، باهتمام إنساني وجودة تليق بك.</p>
              <div className="hero-buttons">
                <button className="primary-btn" onClick={() => nav("booking")}>احجز زيارة الآن <ArrowLeft size={19}/></button>
                <button className="outline-btn" onClick={() => wa()}><MessageCircle size={19}/> تواصل عبر واتساب</button>
              </div>
              <div className="hero-meta">
                <div><ShieldCheck/><span><b>فريق مؤهل</b><small>رعاية موثوقة</small></span></div>
                <div><Clock3/><span><b>متوفرين</b><small>على مدار الساعة</small></span></div>
                <div><MapPin/><span><b>مكة • جدة • الطائف</b><small>ونخدم مناطق أخرى</small></span></div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-card">
                <div className="fake-photo">
                  <div className="photo-glow"></div>
                  <div className="nurse-illustration">
                    <div className="nurse-head"></div><div className="nurse-body"></div>
                    <div className="nurse-cross">+</div>
                    <div className="patient-head"></div><div className="patient-body"></div>
                  </div>
                  <div className="photo-label"><HeartPulse size={18}/><span>رعايتك تهمنا</span></div>
                </div>
              </div>
              <div className="floating-card top-card"><CheckCircle2/><div><b>رعاية باهتمام</b><span>في راحة منزلك</span></div></div>
              <div className="floating-card bottom-card"><span className="number">24/7</span><div><b>متابعة مستمرة</b><span>حسب احتياجك</span></div></div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><ShieldCheck/><span><b>جودة وأمان</b><small>نلتزم بمعايير الرعاية</small></span></div>
            <div><UserRound/><span><b>فريق محترف</b><small>رعاية باهتمام وإنسانية</small></span></div>
            <div><Clock3/><span><b>استجابة سريعة</b><small>نتواصل معك بأسرع وقت</small></span></div>
            <div><MapPin/><span><b>خدمة منزلية</b><small>نصل إليك في موقعك</small></span></div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-head">
              <div><span className="section-kicker">خدماتنا</span><h2>رعاية متكاملة <em>تبدأ من منزلك</em></h2></div>
              <p>خدمات مصممة لتمنح المريض وعائلته راحة أكبر، مع متابعة تمريضية تناسب احتياج كل حالة.</p>
            </div>
            <div className="service-grid">
              {services.map(({icon: Icon, title, text}) => (
                <article className="service-card" key={title}>
                  <div className="service-icon"><Icon/></div>
                  <h3>{title}</h3><p>{text}</p>
                  <button onClick={() => nav("booking")}>اطلب الخدمة <ArrowLeft size={15}/></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="why-section">
          <div className="container why-grid">
            <div className="why-art">
              <div className="heart-ring"><HeartPulse/></div>
              <div className="why-badge"><Star fill="currentColor"/><b>رعاية من القلب</b><span>لأن كل حالة تهمنا</span></div>
            </div>
            <div className="why-copy">
              <span className="section-kicker">لماذا مركز الأمل؟</span>
              <h2>أكثر من مجرد خدمة تمريضية</h2>
              <p>نؤمن أن الرعاية الحقيقية تبدأ بالاستماع وفهم احتياج المريض وعائلته. لذلك نحرص على تقديم تجربة تجمع بين الاحتراف والاهتمام الإنساني.</p>
              <div className="check-list">
                <div><CheckCircle2/><span><b>فريق مؤهل</b><small>اختيار كوادر تمريضية بعناية.</small></span></div>
                <div><CheckCircle2/><span><b>رعاية مخصصة</b><small>الخدمة حسب حالة واحتياج كل مريض.</small></span></div>
                <div><CheckCircle2/><span><b>سهولة التواصل</b><small>تواصل مباشر وسريع عبر واتساب والهاتف.</small></span></div>
                <div><CheckCircle2/><span><b>تغطية واسعة</b><small>مكة وجدة والطائف وإمكانية التنسيق لمناطق أخرى.</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="booking-section">
          <div className="container booking-grid">
            <div className="booking-copy">
              <span className="section-kicker">احجز زيارتك الآن</span>
              <h2>خلّ الرعاية <em>توصلك</em></h2>
              <p>أرسل بياناتك الأساسية، وسيتم تحويل الطلب مباشرة إلى واتساب للتواصل معك وتأكيد التفاصيل والموعد.</p>
              <div className="phone-box"><div><Phone/><span>اتصل بنا مباشرة</span></div><a href={`tel:${PHONE}`}>{PHONE}</a></div>
              <button className="wa-large" onClick={() => wa()}><MessageCircle/> تواصل معنا على واتساب</button>
            </div>
            <form className="booking-form" onSubmit={submit}>
              <div className="form-title"><div className="form-icon"><CalendarIcon/></div><div><b>طلب زيارة منزلية</b><span>املأ البيانات وسنتواصل معك</span></div></div>
              <div className="fields">
                <label>الاسم الكامل<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="اكتب اسم المريض أو مقدم الطلب"/></label>
                <label>رقم الجوال<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="05xxxxxxxx"/></label>
                <label>نوع الخدمة<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option value="">اختر الخدمة</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label>
                <label>المدينة<select value={form.city} onChange={e=>setForm({...form,city:e.target.value})}><option value="">اختر المدينة</option><option>مكة المكرمة</option><option>جدة</option><option>الطائف</option><option>مدينة أخرى</option></select></label>
                <label>التاريخ المطلوب<input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></label>
                <label className="full">ملاحظات إضافية<textarea rows="3" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="اكتب أي تفاصيل تساعدنا على خدمتك بشكل أفضل"></textarea></label>
              </div>
              <button className="submit-btn" type="submit">إرسال طلب الحجز عبر واتساب <ArrowLeft/></button>
              <small className="privacy">بالضغط على الإرسال سيتم فتح واتساب لإتمام التواصل مع المركز.</small>
            </form>
          </div>
        </section>

        <section id="areas" className="section areas-section">
          <div className="container">
            <div className="section-head centered"><span className="section-kicker">مناطق الخدمة</span><h2>نصل إليك <em>أينما كنت</em></h2><p>نخدم مكة المكرمة وجدة والطائف، ويمكن التنسيق لمناطق أخرى داخل المملكة حسب التغطية.</p></div>
            <div className="areas-grid">
              {["مكة المكرمة","جدة","الطائف"].map((city, i) => <div className="area-card" key={city}><div className={"area-icon a"+i}><MapPin/></div><b>{city}</b><span>خدمة منزلية</span></div>)}
              <div className="area-card wide"><div className="area-icon all"><Home/></div><b>مناطق أخرى داخل المملكة</b><span>تواصل معنا للتحقق من التغطية</span></div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container faq-grid">
            <div><span className="section-kicker">الأسئلة الشائعة</span><h2>هل لديك <em>سؤال؟</em></h2><p>إذا لم تجد إجابة سؤالك، تواصل معنا مباشرة وسنساعدك.</p><button className="outline-btn dark" onClick={() => wa()}>اسألنا على واتساب <MessageCircle size={18}/></button></div>
            <div className="faq-list">{faqs.map(([q,a],i)=><div className={"faq-item "+(openFaq===i?"open":"")} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{q}</span><ChevronDown/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div>
          </div>
        </section>
      </main>

      <div className="mobile-action-bar">
        <button onClick={() => nav("home")}><Home/><span>الرئيسية</span></button>
        <button onClick={() => nav("services")}><Stethoscope/><span>خدماتنا</span></button>
        <button className="mobile-action-main" onClick={() => nav("booking")}><span><CalendarIcon/></span><b>احجز</b></button>
        <button onClick={() => wa()}><MessageCircle/><span>واتساب</span></button>
        <a href={`tel:${PHONE}`}><Phone/><span>اتصال</span></a>
      </div>

      <footer className="footer">
        <div className="container footer-grid">
          <div><Logo dark/><p>رعايتك في بيتك... أمان لنا قبل أن تكون خدمة.</p></div>
          <div><b>روابط سريعة</b><button onClick={()=>nav("services")}>خدماتنا</button><button onClick={()=>nav("booking")}>احجز زيارة</button><button onClick={()=>nav("faq")}>الأسئلة الشائعة</button></div>
          <div><b>تواصل معنا</b><a href={`tel:${PHONE}`}><Phone/> {PHONE}</a><button onClick={()=>wa()}><MessageCircle/> واتساب</button><span><MapPin/> مكة • جدة • الطائف</span></div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} مركز الأمل للتمريض المنزلي. جميع الحقوق محفوظة.</div>
      </footer>

      <button className="floating-wa" onClick={() => wa()} aria-label="واتساب"><MessageCircle/></button>
>>>>>>> 15b459b979566da67b144f3c419af12aa234dc04
    </div>
  );
}

<<<<<<< HEAD
/* ============================================================
   CSS
   ============================================================ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap');

.am{
  --navy:#0b3b6b; --navy-2:#0a2e55; --teal:#0e9aa7; --blue:#1d6fd1;
  --sky:#eaf5fc; --sky-2:#f4f9fd; --line:#e3edf5; --ink:#1f2f42; --mut:#5f7186;
  --wa:#22c55e; --radius:14px;
  font-family:'Cairo','Segoe UI',Tahoma,sans-serif; color:var(--ink);
  background:#fff; line-height:1.6; -webkit-font-smoothing:antialiased; overflow-x:hidden;
}
.am *{box-sizing:border-box}
.am a{color:inherit;text-decoration:none}
.am button{font-family:inherit;cursor:pointer}
.am h1,.am h2,.am h3,.am p{margin:0}
.am :focus-visible{outline:3px solid var(--blue);outline-offset:2px;border-radius:6px}
.am .container{max-width:1240px;margin:0 auto;padding:0 24px}
.am html{scroll-behavior:smooth}

/* logo */
.am .logo{display:inline-flex;align-items:center;gap:10px}
.am .logo-text{display:flex;flex-direction:column;line-height:1.15}
.am .logo-text b{font-size:1.5rem;font-weight:800}
.am .logo-text span{font-size:1rem;font-weight:700}
.am .logo-text em{font-style:normal;font-size:.72rem;color:var(--teal);font-weight:600;margin-top:2px}

/* header */
.am .header{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid var(--line);box-shadow:0 2px 14px rgba(11,59,107,.05)}
.am .header-in{display:flex;align-items:center;gap:28px;height:78px}
.am .nav{display:flex;align-items:center;gap:28px;margin-inline-end:auto;margin-inline-start:24px}
.am .nav a{font-weight:600;font-size:.95rem;color:#243b55;padding:6px 0;border-bottom:2px solid transparent}
.am .nav a.active,.am .nav a:hover{color:var(--blue);border-color:var(--blue)}
.am .nav-wa{display:none!important}
.am .header-end{display:flex;align-items:center;gap:16px}
.am .lang{display:inline-flex;align-items:center;gap:5px;font-size:.85rem;color:#4a5b70}
.am .wa-pill{display:inline-flex;align-items:center;gap:10px;background:var(--wa);color:#fff;padding:9px 22px;border-radius:999px;font-weight:700;font-size:1rem;box-shadow:0 6px 16px rgba(34,197,94,.3);transition:transform .15s}
.am .wa-pill:hover{transform:translateY(-1px)}
.am .burger{display:none;background:none;border:0;color:var(--navy);padding:6px}

/* hero */
.am .hero{position:relative;background:linear-gradient(270deg,#f2f8fd 0%,#eaf5fc 45%,#fff 100%);overflow:hidden}
.am .hero-bg{position:absolute;inset:0 0 0 auto;width:46%;height:100%;object-fit:cover;opacity:.55;
  -webkit-mask-image:linear-gradient(to left,#000 30%,transparent);mask-image:linear-gradient(to left,#000 30%,transparent)}
.am .hero-in{position:relative;display:grid;grid-template-columns:1fr;align-items:center;min-height:330px}
.am .hero-text{padding:40px 0;max-width:600px}
.am .hero h1{font-weight:800;line-height:1.25;margin-bottom:12px}
.am .h-navy{display:block;font-size:clamp(2rem,4.2vw,3.2rem);color:var(--navy)}
.am .h-teal{display:block;font-size:clamp(2.3rem,4.8vw,3.7rem);background:linear-gradient(90deg,#0b7f9a,#14b8b0);-webkit-background-clip:text;background-clip:text;color:transparent}
.am .hero-text>p{color:#2c4159;font-size:1.05rem;margin-bottom:24px}
.am .hero-cta{display:flex;align-items:center;flex-wrap:wrap;gap:22px}
.am .btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:var(--navy);color:#fff;border:0;border-radius:12px;padding:14px 30px;font-weight:700;font-size:1.05rem;box-shadow:0 8px 20px rgba(11,59,107,.28);transition:background .15s,transform .15s}
.am .btn-primary:hover{background:var(--navy-2);transform:translateY(-1px)}
.am .btn-primary.block{width:100%;margin-top:6px;padding:12px}
.am .hero-wa{display:inline-flex;align-items:center;gap:10px}
.am .wa-circle{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:var(--wa);color:#fff}
.am .hero-wa-t{display:flex;flex-direction:column;line-height:1.3}
.am .hero-wa-t small{color:#1a9b46;font-size:.72rem;font-weight:600}
.am .hero-wa-t b{color:var(--navy);font-size:1rem}
.am .hero-areas{position:absolute;inset-inline-end:8px;bottom:26px;display:flex;flex-direction:column;align-items:center;transform:rotate(-8deg);color:var(--navy);font-weight:700;font-size:1.05rem;line-height:1.5;text-shadow:0 1px 8px #fff}
.am .hero-areas i{display:block;width:120px;height:3px;border-radius:3px;background:linear-gradient(90deg,transparent,var(--teal));margin-top:4px}
.am .photo-fallback{display:grid;place-items:center;background:linear-gradient(135deg,#cfe6f7,#e9f5fb 60%,#d3f0ee);color:var(--navy);font-size:3rem;width:100%;height:100%}

/* strip */
.am .strip{background:#fff;border-bottom:1px solid var(--line)}
.am .strip-in{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding-block:18px}
.am .strip-item{display:flex;align-items:center;justify-content:center;gap:12px;font-weight:600;font-size:.88rem;color:#2a3f57}
.am .strip-ic{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:#e4f1fa;color:var(--navy);flex:none}

/* sections */
.am .section{padding:34px 0 8px}
.am .section.tight{padding:22px 0}
.am .sec-title{display:flex;align-items:center;gap:18px;justify-content:center;margin-bottom:22px}
.am .sec-title::before,.am .sec-title::after{content:"";height:2px;width:min(120px,18vw);background:linear-gradient(90deg,transparent,var(--teal))}
.am .sec-title::after{transform:scaleX(-1)}
.am .sec-title span{font-size:1.6rem;font-weight:800;color:var(--navy)}

/* services */
.am .services{display:grid;grid-template-columns:repeat(5,1fr);gap:18px}
.am .svc{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:0 0 14px;text-align:center;box-shadow:0 6px 18px rgba(11,59,107,.06);overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .2s}
.am .svc:hover{box-shadow:0 10px 26px rgba(11,59,107,.12)}
.am .svc-img{width:100%;height:110px;object-fit:cover;display:block}
.am .svc .photo-fallback{height:110px;font-size:2.2rem}
.am .svc h3{font-size:.98rem;font-weight:800;color:var(--navy);margin:12px 10px 6px}
.am .svc p{font-size:.78rem;color:var(--mut);padding:0 12px;flex:1}
.am .more{display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-top:12px;font-size:.8rem;font-weight:700;color:var(--navy)}
.am .more:hover{color:var(--blue)}
.am .emergency{margin-top:16px;text-align:center;font-size:.92rem;color:var(--mut)}
.am .emergency a{color:var(--navy);font-weight:700}

/* booking + why */
.am .two-col{display:grid;grid-template-columns:1fr 1.25fr;gap:22px}
.am .booking{position:relative;display:flex;background:linear-gradient(135deg,#d8ecfa,#eaf5fc);border-radius:18px;overflow:hidden;min-height:250px}
.am .booking-img{width:34%;object-fit:cover;object-position:top}
.am .booking-body{flex:1;padding:22px 22px 22px 22px;min-width:0}
.am .booking h2{font-size:1.5rem;font-weight:800;color:var(--navy)}
.am .booking .sub{font-size:.85rem;color:#37506b;margin-bottom:12px}
.am .field{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #d6e5f1;border-radius:10px;padding:0 12px;height:42px;margin-top:9px;color:var(--navy)}
.am .field.err{border-color:#e5484d}
.am .field input,.am .field select{flex:1;min-width:0;border:0;outline:0;background:transparent;font:inherit;font-size:.86rem;color:var(--ink);height:100%}
.am .field select{appearance:none;cursor:pointer}
.am .msg{display:block;color:#d1343a;font-size:.75rem;margin:3px 4px 0}
.am .why{display:flex;background:linear-gradient(135deg,#fff,#f4f9fd);border:1px solid var(--line);border-radius:18px;overflow:hidden}
.am .why-body{flex:1;padding:24px 26px;min-width:0}
.am .why h2{font-size:1.5rem;font-weight:800;color:var(--navy);margin-bottom:8px}
.am .why p{font-size:.88rem;color:#41566d;line-height:1.9}
.am .why-grid{display:grid;grid-template-columns:repeat(4,1fr);margin-top:20px}
.am .why-item{display:flex;flex-direction:column;align-items:center;text-align:center;gap:2px;padding:0 6px;color:var(--blue);border-inline-start:1px solid var(--line)}
.am .why-item:first-child{border-inline-start:0}
.am .why-item b{color:var(--navy);font-size:.86rem;margin-top:6px}
.am .why-item span{color:var(--navy);font-size:.8rem;font-weight:600}
.am .why-photo{position:relative;width:26%;min-width:150px;background:linear-gradient(160deg,#e4f1fa,#cfe6f7)}
.am .why-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.am .why-cap{position:absolute;inset-inline:0;bottom:14px;text-align:center;color:var(--navy);font-weight:700;font-size:1.05rem;line-height:1.3;text-shadow:0 1px 6px #fff}
.am .why-cap b{display:block;color:var(--teal);font-size:1.25rem}

/* three columns */
.am .three-col{display:grid;grid-template-columns:.9fr 1.5fr .9fr;gap:20px;align-items:start}
.am .card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px;box-shadow:0 6px 18px rgba(11,59,107,.05)}
.am .card-title{display:flex;align-items:center;gap:8px;font-size:1.1rem;font-weight:800;color:var(--navy);margin-bottom:12px}
.am .faq-item{border:1px solid var(--line);border-radius:10px;margin-bottom:8px;background:#fff}
.am .faq-item button{width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;background:none;border:0;padding:11px 12px;font-weight:600;font-size:.82rem;color:var(--navy);text-align:start}
.am .faq-item button svg{color:var(--blue);flex:none}
.am .faq-item p{padding:0 12px 12px;font-size:.82rem;color:var(--mut);line-height:1.8}
.am .rv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.am .rv{margin:0;border:1px solid var(--line);border-radius:12px;padding:12px;background:#fafcfe}
.am .rv figcaption{display:flex;align-items:center;gap:8px;font-size:.85rem;color:var(--navy)}
.am .rv-ic{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#e4f1fa;color:var(--blue)}
.am .stars{color:#f5b301;font-size:.9rem;letter-spacing:2px;margin:6px 0 4px}
.am .rv blockquote{margin:0;font-size:.8rem;color:#41566d;line-height:1.7}
.am .dots{display:flex;justify-content:center;gap:6px;margin-top:14px}
.am .dots button{width:8px;height:8px;border-radius:50%;border:0;background:#cbdbe8;padding:0}
.am .dots button.on{background:var(--blue);width:20px;border-radius:6px}
.am .areas-sub{font-size:.8rem;color:var(--mut);margin-bottom:10px}
.am .areas-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.am .area{text-align:center;border:1px solid var(--line);border-radius:10px;overflow:hidden;font-size:.8rem;font-weight:600;color:var(--navy)}
.am .area-img{width:100%;height:64px;object-fit:cover;display:block}
.am .area .photo-fallback{height:64px;font-size:1.6rem}
.am .area span{display:block;padding:6px 0}
.am .areas-foot{display:flex;align-items:center;gap:8px;margin-top:12px;font-size:.78rem;color:var(--navy);font-weight:600}
.am .areas-foot svg{color:var(--navy)}

/* footer */
.am .footer{background:#0b2a4a;color:#fff;margin-top:26px}
.am .footer-in{display:grid;grid-template-columns:1.1fr 1fr 1.1fr 1.2fr;gap:24px;align-items:center;padding-block:28px}
.am .f-item{display:flex;align-items:center;gap:14px}
.am .f-item b{display:block;font-size:1.05rem}
.am .f-item small{color:#b7cbe0;font-size:.8rem}
.am .f-ic{display:grid;place-items:center;color:#7fd3d6}
.am .f-ic.wa{color:var(--wa)}
.am .f-social{display:flex;flex-direction:column;align-items:flex-end;gap:12px}
.am .f-social small{color:#b7cbe0;font-size:.75rem}
.am .socials{display:flex;gap:10px}
.am .socials a{display:grid;place-items:center;width:32px;height:32px;border:1.5px solid #fff;border-radius:50%;font-size:.8rem;font-weight:800}
.am .socials a:hover{background:#fff;color:var(--navy)}

/* floating buttons */
.am .float{position:fixed;inset-inline-start:18px;bottom:18px;z-index:60;display:flex;flex-direction:column;gap:12px}
.am .float a{display:grid;place-items:center;width:56px;height:56px;border-radius:50%;color:#fff;box-shadow:0 8px 22px rgba(0,0,0,.25);transition:transform .15s}
.am .float a:hover{transform:scale(1.07)}
.am .float-wa{background:var(--wa)}
.am .float-call{background:var(--navy)}
@media (prefers-reduced-motion:no-preference){
  .am .float-wa{animation:am-pulse 2.6s ease-out 1}
}
@keyframes am-pulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.6)}100%{box-shadow:0 0 0 22px rgba(34,197,94,0)}}

/* ---------- تابلت ---------- */
@media (max-width:1100px){
  .am .services{grid-template-columns:repeat(3,1fr)}
  .am .two-col{grid-template-columns:1fr}
  .am .three-col{grid-template-columns:1fr 1fr}
  .am .reviews{order:-1;grid-column:1/-1}
  .am .footer-in{grid-template-columns:1fr 1fr}
  .am .f-social{align-items:flex-start}
}

/* ---------- موبايل ---------- */
@media (max-width:820px){
  .am .container{padding:0 16px}
  .am .header-in{height:66px;gap:12px}
  .am .lang,.am .wa-pill{display:none}
  .am .burger{display:block}
  .am .header-end{margin-inline-start:auto}
  .am .nav{position:absolute;inset-inline:0;top:66px;background:#fff;flex-direction:column;align-items:stretch;gap:0;margin:0;padding:8px 16px 16px;border-bottom:1px solid var(--line);box-shadow:0 14px 24px rgba(11,59,107,.1);display:none}
  .am .nav.open{display:flex}
  .am .nav a{padding:12px 4px;border-bottom:1px solid var(--line)}
  .am .nav-wa{display:inline-flex!important;align-items:center;gap:8px;justify-content:center;background:var(--wa);color:#fff!important;border-radius:999px!important;margin-top:12px;border:0!important}
  .am .logo-text b{font-size:1.25rem}
  .am .logo-text span{font-size:.85rem}
  .am .logo-text em{font-size:.62rem}

  .am .hero-in{min-height:0}
  .am .hero-areas{position:static;transform:none;flex-direction:row;flex-wrap:wrap;justify-content:center;gap:6px 12px;padding-bottom:22px;font-size:.9rem}
  .am .hero-areas i{display:none}
        .am .hero-text{padding:22px 0 30px;text-align:center;margin-inline:auto}
  .am .hero-cta{justify-content:center;flex-direction:column;gap:16px}
  .am .btn-primary{width:100%}
  .am .hero-bg{width:100%;opacity:.25}

  .am .strip-in{grid-template-columns:1fr 1fr;gap:10px}
  .am .strip-item{justify-content:flex-start;font-size:.8rem}
  .am .strip-ic{width:38px;height:38px}
  .am .services{grid-template-columns:1fr 1fr;gap:12px}
  .am .booking{flex-direction:column}
  .am .booking-img{width:100%;height:190px}
  .am .why{flex-direction:column-reverse}
  .am .why-photo{width:100%;height:190px}
  .am .why-grid{grid-template-columns:1fr 1fr;row-gap:18px}
  .am .why-item:nth-child(3){border-inline-start:0}
  .am .three-col{grid-template-columns:1fr}
  .am .rv-grid{grid-template-columns:1fr}
  .am .footer-in{grid-template-columns:1fr;gap:18px;text-align:start}
  .am .f-social{align-items:flex-start}
  .am .float{bottom:14px;inset-inline-start:12px}
  .am .float a{width:52px;height:52px}
}
@media (max-width:420px){
  .am .services{grid-template-columns:1fr}
}

/* ===== صفحات داخلية ===== */
.am .page-head{background:linear-gradient(270deg,#f2f8fd,#eaf5fc 50%,#fff);border-bottom:1px solid var(--line);padding:30px 0 28px}
.am .crumbs{display:flex;flex-wrap:wrap;gap:6px;font-size:.82rem;color:var(--mut);margin-bottom:8px}
.am .crumbs a{color:var(--blue);font-weight:600}
.am .crumbs i{font-style:normal;margin-inline:6px;color:#9db2c6}
.am .page-head h1{font-size:clamp(1.7rem,3.4vw,2.4rem);font-weight:800;color:var(--navy)}
.am .page-head p{color:#41566d;margin-top:6px;max-width:640px}
.am .services.lg{grid-template-columns:repeat(3,1fr)}
.am .services.lg .svc-img,.am .services.lg .svc .photo-fallback{height:150px}
.am .services.lg .svc h3{font-size:1.08rem}
.am .services.lg .svc p{font-size:.85rem}
.am .notice{display:flex;align-items:center;gap:16px;margin-top:22px;background:var(--sky);border:1px solid #cfe3f2;border-radius:16px;padding:16px 20px}
.am .notice-ic{font-size:2rem}
.am .notice b{color:var(--navy)}
.am .notice p{font-size:.88rem;color:#41566d}
.am .notice div{flex:1}
.am .notice .btn-primary{padding:10px 20px;font-size:.95rem;white-space:nowrap}

.am .btn-wa{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:var(--wa);color:#fff;border-radius:12px;padding:13px 26px;font-weight:700;box-shadow:0 8px 20px rgba(34,197,94,.28)}
.am .btn-wa.block{width:100%;margin-bottom:10px}
.am .btn-primary.light{background:#fff;color:var(--navy);box-shadow:none}
.am .btn-primary.light:hover{background:#eaf5fc}
.am .cta-band{background:linear-gradient(90deg,var(--navy),#0d5a8f);color:#fff;margin-top:34px}
.am .cta-in{display:flex;align-items:center;justify-content:space-between;gap:20px;padding-block:28px;flex-wrap:wrap}
.am .cta-in h2{font-size:1.5rem;font-weight:800}
.am .cta-actions{display:flex;gap:12px;flex-wrap:wrap}
.am .all-link{display:block;text-align:center;margin-top:12px;font-size:.85rem;font-weight:700;color:var(--blue)}

.am .detail{display:grid;grid-template-columns:1fr 320px;gap:28px;align-items:start}
.am .detail-img{width:100%;height:280px;object-fit:cover;border-radius:18px;display:block}
.am .detail-main .photo-fallback{height:280px;border-radius:18px;font-size:4rem}
.am .lead{font-size:1.1rem;color:#2c4159;margin:18px 0 10px;line-height:1.9}
.am .h-sm{font-size:1.25rem;font-weight:800;color:var(--navy);margin:24px 0 12px}
.am .checklist{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:10px}
.am .checklist li{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px 14px;font-size:.9rem;font-weight:600;color:var(--navy)}
.am .checklist li span{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:#e4f1fa;color:var(--blue);flex:none}
.am .steps{list-style:none;margin:0;padding:0;display:grid;gap:12px}
.am .steps li{display:flex;gap:14px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px}
.am .steps b{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--navy);color:#fff;flex:none}
.am .steps h3{font-size:1rem;font-weight:800;color:var(--navy)}
.am .steps p{font-size:.85rem;color:var(--mut)}
.am .steps.row{grid-template-columns:repeat(4,1fr)}
.am .detail-side{position:sticky;top:96px;display:grid;gap:16px}
.am .side-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:18px;box-shadow:0 6px 18px rgba(11,59,107,.06)}
.am .side-card h3{font-size:1.05rem;font-weight:800;color:var(--navy);margin-bottom:6px}
.am .side-card p{font-size:.85rem;color:var(--mut);margin-bottom:12px}
.am .side-card .btn-primary.block{margin-top:0}
.am .side-links{list-style:none;margin:0;padding:0}
.am .side-links li{border-top:1px solid var(--line)}
.am .side-links li:first-child{border-top:0}
.am .side-links a{display:block;padding:10px 0;font-weight:600;font-size:.9rem;color:var(--navy)}
.am .side-links a:hover{color:var(--blue)}

.am .about-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:28px;align-items:center}
.am .about-text p{color:#41566d;line-height:2;margin-bottom:12px}
.am .mv{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:8px}
.am .mv div{background:var(--sky);border-radius:14px;padding:16px}
.am .mv h3{color:var(--navy);font-weight:800;margin-bottom:4px}
.am .mv p{font-size:.88rem;margin:0}
.am .about-img{width:100%;height:340px;object-fit:cover;border-radius:20px;display:block}
.am .about-photo .photo-fallback{height:340px;border-radius:20px;font-size:4rem}
.am .values{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.am .value{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px 12px;color:var(--blue)}
.am .value b{color:var(--navy);font-size:.95rem}

.am .rv-grid.full{grid-template-columns:repeat(3,1fr);gap:16px}
.am .rv-grid.full .rv{padding:18px;background:#fff;box-shadow:0 6px 18px rgba(11,59,107,.05)}
.am .rv-grid.full .rv blockquote{font-size:.92rem}
.am .container.narrow{max-width:820px}
.am .card.faq.page{padding:20px}
.am .card.faq.page .faq-item button{font-size:.95rem;padding:14px}
.am .card.faq.page .faq-item p{font-size:.9rem}

.am .contact-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:24px;align-items:start}
.am .contact-cards{display:grid;gap:12px}
.am .c-card{display:flex;align-items:center;gap:14px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px 18px;box-shadow:0 6px 18px rgba(11,59,107,.05)}
.am a.c-card:hover{border-color:var(--blue)}
.am .c-ic{display:grid;place-items:center;width:52px;height:52px;border-radius:50%;background:#e4f1fa;color:var(--navy);flex:none}
.am .c-ic.wa{background:var(--wa);color:#fff}
.am .c-card b{display:block;color:var(--navy)}
.am .c-card small{color:var(--mut);font-size:.88rem}

@media (max-width:1100px){
  .am .detail{grid-template-columns:1fr}
  .am .detail-side{position:static}
  .am .steps.row{grid-template-columns:1fr 1fr}
  .am .values{grid-template-columns:1fr 1fr}
  .am .contact-grid,.am .about-grid{grid-template-columns:1fr}
  .am .rv-grid.full{grid-template-columns:1fr 1fr}
}
@media (max-width:820px){
  .am .services.lg{grid-template-columns:1fr 1fr}
  .am .checklist,.am .mv,.am .steps.row,.am .rv-grid.full{grid-template-columns:1fr}
  .am .notice{flex-direction:column;align-items:flex-start}
  .am .notice .btn-primary{width:100%}
  .am .cta-in{flex-direction:column;align-items:flex-start}
  .am .detail-img,.am .detail-main .photo-fallback{height:200px}
  .am .about-img,.am .about-photo .photo-fallback{height:220px}
}
@media (max-width:420px){
  .am .services.lg{grid-template-columns:1fr}
}
`;
=======
function CalendarIcon() {
  return <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="17" rx="3"/><path d="M8 2v4M16 2v4M3 9h18"/></svg>;
}

export default App;
>>>>>>> 15b459b979566da67b144f3c419af12aa234dc04

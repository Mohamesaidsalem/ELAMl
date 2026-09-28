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
            </button>
          </div>
        </div>
      </header>

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
    </div>
  );
}

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="17" rx="3"/><path d="M8 2v4M16 2v4M3 9h18"/></svg>;
}

export default App;
# مركز الأمل للتمريض المنزلي

<<<<<<< HEAD
موقع تعريفي (React + Vite) لمركز الأمل للتمريض المنزلي — مكة، جدة، الطائف وجميع مناطق المملكة.

## التشغيل محليًا
=======
موقع React + Vite عربي RTL جاهز للنشر.

## التشغيل على جهازك
>>>>>>> 15b459b979566da67b144f3c419af12aa234dc04

```bash
npm install
npm run dev
```

<<<<<<< HEAD
## البناء

```bash
npm run build     # الناتج في dist/
npm run preview
```

## تخصيص

- بيانات التواصل والمحتوى: أول ملف `src/App.jsx` (PHONE_*, SERVICES, REVIEWS, FAQ ...).
- الصور: `public/images/` (الأسماء في `public/images/README.txt`).
- التنقل بين الصفحات بـ hash (`#/services` ...) فلا يحتاج إعداد سيرفر.

## النشر على GitHub Pages

1. ارفع المشروع على GitHub (فرع `main`).
2. من Settings ← Pages ← Source اختر **GitHub Actions**.
3. أي push على `main` ينشر الموقع تلقائيًا.
=======
ثم افتح الرابط الذي يظهره Vite.

## تجهيز نسخة الإنتاج

```bash
npm run build
```

سيتم إنشاء مجلد `dist`.

## الرفع على Vercel

1. ارفع المشروع إلى GitHub.
2. افتح Vercel.
3. اختر Import Project.
4. اختر المستودع.
5. اترك Build Command: `npm run build`
6. اترك Output Directory: `dist`
7. اضغط Deploy.

## بيانات المركز الحالية

- الاسم: مركز الأمل للتمريض المنزلي
- الهاتف/واتساب: +966596063710
- مناطق الخدمة: مكة المكرمة، جدة، الطائف، ومناطق أخرى حسب التغطية.

## ملاحظات

نموذج الحجز لا يحتاج Backend حاليًا؛ عند الإرسال يفتح WhatsApp برسالة مجهزة بالبيانات.

## Responsive

تمت إضافة طبقة Responsive مخصصة للموبايل والتابلت والشاشات الصغيرة جدًا، مع Bottom Navigation شبيه بالتطبيق، دعم Safe Area للآيفون، والوضع الأفقي للموبايل.
>>>>>>> 15b459b979566da67b144f3c419af12aa234dc04

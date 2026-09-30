# مركز الأمل للتمريض المنزلي

موقع تعريفي (React + Vite) لمركز الأمل للتمريض المنزلي — مكة، جدة، الطائف وجميع مناطق المملكة.

## التشغيل محليًا

```bash
npm install
npm run dev
```

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
"# EL-AMl" 

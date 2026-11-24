
---

## الحالة (شاشات الفرونت اتبنت)

اتبنت كل الشاشات على نفس البنية والـ components بتاعة الدليل: Login (A1 وA1.1 وA1.2)، وForgot password (A1.3)، وCheck your email (A1.4)، وSet new password (A1.5)، وOverview (A2)، وEmpty (A2.3)، وLoading (A2.4)، في الـ Dark والـ Light.

### تشغيل
```
npm install
npm run dev
```
ثم افتح `http://localhost:5173`.

### للتجربة (من غير سيرفر)
- باسورد تسجيل الدخول الوحيد اللي بيشتغل: `Test@1234`. أي باسورد غيره بيطلّع خطأ الـ Login.
- شاشات `/overview/empty` و`/overview/loading` بتتفتح من العنوان مباشرة.

### غير موجود لسه
- كارت التنبيه الجديد (A2.1) وقايمة الإشعارات (A2.2): الجرس شكل بس.
- الـ Sidebar: Drivers وAlerts وReports وSettings شكل بس.
- موقع شارة "Driver awake · Safe" وحجم الهيرو في الـ Login تقريبي، وبيتظبط على Figma.

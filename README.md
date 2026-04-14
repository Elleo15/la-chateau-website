# 🏰 La Château Restaurant — Sayt Dokumentasiyası

## 📁 Qovluq Strukturu

```
lachateau/
├── index.html              ← Əsas sayt faylı
└── assets/
    ├── images/             ← Bütün şəkillər buraya
    │   ├── logo.jpg
    │   ├── photo.jpg           (hero/about üçün bina şəkli)
    │   ├── zal-main.jpg
    │   ├── zal-main1.jpg
    │   ├── zal-1.jpg
    │   ├── zal-table.jpg
    │   ├── cinema-1.jpg
    │   ├── cinema-2.jpg
    │   ├── cinema-3.jpg
    │   ├── cinema-4.jpg
    │   ├── cinema-5.jpg
    │   ├── cinema-6.jpg
    │   ├── cinema-7.jpg
    │   ├── cinema-hall.jpg
    │   ├── cinema-hall1l.jpg
    │   ├── cinema-place1.jpg
    │   ├── cinema-place2.jpg
    │   ├── deniz-kenar.jpg
    │   ├── deniz-kenar1.jpg
    │   ├── vipcab.jpg
    │   ├── under-coridor.jpg
    │   ├── meal-bozbas.jpg
    │   ├── meal-breakfast.jpg
    │   ├── meal-dolma.jpg
    │   ├── meal-egg.jpg
    │   ├── meal-fish.jpg
    │   ├── meal-fish1.jpg
    │   ├── meal-fix.jpg
    │   ├── meal-kabab.jpg
    │   ├── meal-pizza.jpg
    │   ├── meal-potato.jpg
    │   ├── meal-qutab.jpg
    │   ├── meal-salat.jpg
    │   ├── meal-salat1.jpg
    │   ├── meal-salat2.jpg
    │   ├── meal-smth.jpg
    │   ├── meal-soup.jpg
    │   ├── meal-soup1.jpg
    │   ├── drink-1.jpg
    │   ├── drink-2.jpg
    │   ├── drink-melon.jpg
    │   ├── sweet-1.jpg
    │   ├── sweet-2.jpg
    │   └── sweet-3.jpg
    ├── videos/             ← Videolar buraya
    │   ├── video-1.mp4         (Hero + Əsas Zal)
    │   ├── video-2.mp4         (VIP + Cinema)
    │   └── seaside-video.mp4   (Dəniz Kənarı)
    └── menu.pdf            ← PDF menyu buraya
```

---

## 🚀 Saytı Necə İstifadə Etmək

### 1. Faylları Hazırla
Yuxarıdakı qovluq strukturunu yarat və şəkil/video/PDF faylları
müvafiq yerlərinə qoy.

### 2. Brauzerdə Aç
`index.html` faylına iki dəfə klik et — brauzer açılacaq.

### 3. Hosting
Saytı servera yükləmək üçün bütün `lachateau/` qovluğunu
hosting panelinə yüklə (cPanel, FTP, Netlify, Vercel və s.)

---

## ✏️ Dəyişiklik Etmək

Bütün mətnlər `index.html` faylının sonunda **`i18n`** obyektindədir.
Hər dil üçün (az/ru/en) ayrıca yazılmışdır.

### Nömrəni dəyişmək:
```
Faylda axtarın: 994553779817
Öz nömrənizlə əvəz edin (beynəlxalq formatda, rəqəmlər yalnız)
```

### İş saatlarını dəyişmək:
```html
<!-- footer hissəsini tapın -->
<li><span data-i18n="days_all">Hər gün</span> — <span>10:00 – 23:00</span></li>
```

### Menyu qiymətini dəyişmək:
`menu-item-price` class-lı elementləri tapın.

### Instagram linkini dəyişmək:
```
Axtarın: lachateaurestaurant
Öz handle-inizlə əvəz edin
```

### Yeni şəkil əlavə etmək:
`assets/images/` qovluğuna şəkli əlavə edin,
sonra HTML-də müvafiq `src=""` ünvanını dəyişin.

---

## 🌐 Dil Dəstəyi

Sayt 3 dildə işləyir:
- 🇦🇿 **AZ** — Azərbaycan dili (default)
- 🇷🇺 **RU** — Rus dili
- 🇬🇧 **EN** — İngilis dili

Yeni dil əlavə etmək üçün `i18n` obyektinə yeni dil bloku əlavə edin.

---

## 📲 WhatsApp Rezervasiya

Forma göndəriləndə WhatsApp mesajı avtomatik formatlanır:
```
🏰 La Château — Rezervasiya
👤 Ad Soyad: ...
📞 Telefon: ...
👥 Qonaq sayı: ...
📅 Tarix: ...
🕐 Saat: ...
📝 Qeyd: ...
```

Nömrəni dəyişmək üçün `index.html`-də axtarın:
```
994553779817
```

---

## 🎨 Dizayn Rəngləri

| Dəyişən        | Rəng         | İstifadə                |
|----------------|--------------|-------------------------|
| `--gold`       | `#c9a84c`    | Əsas vurğu rəngi        |
| `--gold-light` | `#e8cc7a`    | Hover effektləri         |
| `--dark`       | `#080604`    | Arxa fon                |
| `--cream`      | `#f0e8d8`    | Əsas mətn               |

---

## 📱 Mobil Uyğunluq

Sayt tam mobil responsive-dir:
- 📱 Telefon (< 600px)
- 💻 Tablet (< 1024px)
- 🖥️ Desktop (1024px+)

---

## ⚡ Performans Məsləhətləri

1. **Videoları sıxışdırın** — hər video 20-30 MB-dan az olsun
2. **Şəkilləri WebP formatına** çevirin (daha sürətli yüklənir)
3. **CDN** istifadə edin (Cloudflare, BunnyCDN)

---

## 📞 Texniki Dəstək

Suallar üçün saytı hazırlayan developer ilə əlaqə saxlayın.

---

*La Château Restaurant © 2025*

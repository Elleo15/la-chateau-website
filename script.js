/* ============================================================
   CURSOR
   ============================================================ */
const dot = document.getElementById("cursorDot");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});

(function animCursor() {
  dot.style.left = mx + "px";
  dot.style.top = my + "px";
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animCursor);
})();

document
  .querySelectorAll("a, button, .space-thumb, .menu-tab")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
  });

/* ============================================================
   NAV SCROLL
   ============================================================ */
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

/* ============================================================
   MOBILE MENU
   ============================================================ */
function toggleMobile() {
  document.getElementById("mobileMenu").classList.toggle("open");
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        // Staggered children
        e.target.querySelectorAll(".menu-item").forEach((item, i) => {
          item.style.transitionDelay = i * 0.04 + "s";
          item.style.opacity = "1";
          item.style.transform = "none";
        });
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".reveal, .reveal-left, .reveal-right")
  .forEach((el) => {
    observer.observe(el);
  });

/* ============================================================
   MENU TABS
   ============================================================ */
function showTab(id) {
  document
    .querySelectorAll(".menu-panel")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".menu-tab")
    .forEach((t) => t.classList.remove("active"));
  document.getElementById("panel-" + id).classList.add("active");
  event.target.classList.add("active");
}

/* ============================================================
   GALLERY IMAGES DATA
   ============================================================ */
const galleries = {
  main: [
    "assets/images/zal-main.jpg",
    "assets/images/zal-main1.jpg",
    "assets/images/zal-1.jpg",
    "assets/images/zal-table.jpg",
    "assets/images/under-coridor.jpg",
  ],
  vip: [
    "assets/images/cinema-1.jpg",
    "assets/images/cinema-2.jpg",
    "assets/images/cinema-3.jpg",
    "assets/images/cinema-4.jpg",
    "assets/images/cinema-5.jpg",
    "assets/images/cinema-6.jpg",
    "assets/images/cinema-7.jpg",
    "assets/images/vipcab.jpg",
  ],
  cinema: [
    "assets/images/cinema-place1.jpg",
    "assets/images/cinema-place2.jpg",
    "assets/images/cinema-hall.jpg",
    "assets/images/cinema-hall1l.jpg",
  ],
  sea: [
    "assets/images/deniz-kenar.jpg",
    "assets/images/deniz-kenar1.jpg",
    "assets/images/meal-fish.jpg",
    "assets/images/drink-melon.jpg",
  ],
};
let currentGallery = [],
  currentIndex = 0;

function openGallery(name, idx = 0) {
  currentGallery = galleries[name];
  currentIndex = idx;
  document.getElementById("lightboxImg").src = currentGallery[currentIndex];
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
function lbNext() {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  document.getElementById("lightboxImg").src = currentGallery[currentIndex];
}
function lbPrev() {
  currentIndex =
    (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  document.getElementById("lightboxImg").src = currentGallery[currentIndex];
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") lbNext();
  if (e.key === "ArrowLeft") lbPrev();
});

/* ============================================================
   WHATSAPP RESERVATION
   ============================================================ */
function sendWhatsApp(e) {
  e.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const phone = document.getElementById("phone").value;
  const guests = document.getElementById("guests").value;
  const date = document.getElementById("rdate").value;
  const time = document.getElementById("rtime").value;
  const note = document.getElementById("rnote").value;

  // Format date
  const d = date
    ? new Date(date).toLocaleDateString("az-AZ", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";

  const msg = `🏰 *La Château — Rezervasiya*

👤 *Ad Soyad:* ${fname} ${lname}
📞 *Telefon:* ${phone}
👥 *Qonaq sayı:* ${guests} nəfər
📅 *Tarix:* ${d}
🕐 *Saat:* ${time}
${note ? `📝 *Qeyd:* ${note}` : ""}

_Bu mesaj La Château saytından avtomatik göndərilmişdir._`;

  const url = `https://wa.me/994553779817?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* ============================================================
   I18N
   ============================================================ */
const i18n = {
  az: {
    nav_about: "Haqqımızda",
    nav_spaces: "Məkanlar",
    nav_menu: "Menyu",
    nav_reserve: "Rezervasiya",
    nav_contact: "Əlaqə",
    hero_tag: "Novxanı, Azərbaycan — Xəzər Sahili",
    hero_sub: "Restaurant & Private Rooms",
    hero_btn1: "Masa Sifariş Et",
    hero_btn2: "Məkanları Kəşf Et",
    scroll: "Aşağı Sürüşdür",
    about_tag: "Bizim haqqımızda",
    about_title: "Hər an xatirəyə\nçevrilsin",
    about_p1:
      "La Château — Xəzər dənizinin sahilində, Novxanıda yerləşən premium restoran kompleksidir. Milli və dünya mətbəxinin ən gözəl nümunələrini bir çatı altında birləşdiririk.",
    about_p2:
      "Özəl VIP kabinlər, sinema zalı, açıq dəniz kənarı məkanı — hər detal sizin üçün düşünülmüş, hər an unutulmaz olmaq üçün hazırlanmışdır.",
    stat1: "Unikal Məkan",
    stat2: "Menyu Mövqeyi",
    stat3: "Xatirə",
    spaces_tag: "Məkanlarımız",
    spaces_title: "Hər məkan ayrı bir dünya",
    spaces_desc:
      "Əsas zal, VIP kabinlər, sinema zalı və Xəzər sahilindəki açıq məkan — seçim sizindir.",
    main_tag: "Əsas Restoran Zalı",
    main_title: "Əsas Zal",
    main_desc: "Edison lampalar, geniş panoram pəncərələr və Xəzər mənzərəsi.",
    vip_tag: "Özəl Məkanlar",
    vip_title: "VIP Kabinlər",
    vip_desc: "Hər otaq öz xarakteri ilə — mavi, qırmızı, yaşıl, qızılı.",
    cinema_tag: "Sinema & Yemək",
    cinema_title: "Cinema Zalı",
    cinema_desc:
      "Premium recliner oturacaqlar, böyük ekran, mükəmməl səs sistemi.",
    sea_tag: "Xəzər Sahili",
    sea_title: "Dəniz Kənarı",
    sea_desc: "Ağ vitray çərçivələr, qırmızı güllər, dəniz küləyi.",
    view_gallery: "Qalereya →",
    menu_tag: "Bizim Menyu",
    menu_title: "Dadların simfoniyası",
    menu_desc:
      "Milli mətbəxdən dünya mətbəxinə, Xəzər balıqlarından premium steaklərə.",
    tab_breakfast: "Səhər Yeməyi",
    tab_cold: "Soyuq Qəlyanaltı",
    tab_hot: "İsti Qəlyanaltı",
    tab_soups: "Şorbalar",
    tab_salads: "Salatlar",
    tab_national: "Milli Mətbəx",
    tab_chef: "Şef Menyu",
    tab_world: "Dünya Mətbəxi",
    tab_steak: "Steak",
    tab_seafood: "Dəniz Məhsulları",
    tab_bbq: "Mangal Kabablar",
    tab_pizza: "Pizza",
    tab_drinks: "İçkilər",
    pdf_note: "Tam menyunu PDF formatında yükləyə bilərsiniz",
    pdf_btn: "PDF Menyu Yüklə ↓",
    res_tag: "Masa Sifarişi",
    res_title: "Yerinizi ayırd edin",
    res_desc:
      "Formu doldurun, WhatsApp vasitəsilə birbaşa sifarişinizi göndərin.",
    form_name: "Ad",
    form_surname: "Soyad",
    form_phone: "Telefon",
    form_guests: "Qonaq Sayı",
    form_date: "Tarix",
    form_time: "Saat",
    form_note: "Əlavə Qeyd",
    form_whatsapp_note:
      "* Rezervasiya WhatsApp vasitəsilə birbaşa göndəriləcək",
    form_send: "WhatsApp ilə Göndər",
    footer_about:
      "La Château — Xəzər dənizinin sahilindəki premium restoran kompleksi.",
    footer_contact: "Əlaqə",
    footer_hours: "İş Saatları",
    footer_spaces_title: "Məkanlar",
    footer_main: "🏛️ Əsas Zal",
    footer_vip: "👑 VIP Kabinlər",
    footer_cinema: "🎬 Cinema Zalı",
    footer_sea: "🌊 Dəniz Kənarı",
    days_all: "Hər gün",
    footer_service: "⚠ 10% servis haqqı hesabınıza əlavə olunacaq",
  },
  ru: {
    nav_about: "О нас",
    nav_spaces: "Залы",
    nav_menu: "Меню",
    nav_reserve: "Резервация",
    nav_contact: "Контакт",
    hero_tag: "Новханы, Азербайджан — Берег Каспия",
    hero_sub: "Ресторан & Приватные комнаты",
    hero_btn1: "Забронировать стол",
    hero_btn2: "Посмотреть залы",
    scroll: "Прокрутите вниз",
    about_tag: "О нас",
    about_title: "Каждый момент\nстанет воспоминанием",
    about_p1:
      "La Château — премиальный ресторанный комплекс на берегу Каспийского моря в Новханы.",
    about_p2:
      "Приватные VIP-кабинеты, зал кинотеатра, открытая терраса у моря — каждая деталь продумана для вас.",
    stat1: "Уникальных зала",
    stat2: "Позиций меню",
    stat3: "Воспоминаний",
    spaces_tag: "Наши залы",
    spaces_title: "Каждый зал — отдельный мир",
    spaces_desc:
      "Главный зал, VIP-кабинеты, кинозал и открытая терраса — выбор за вами.",
    main_tag: "Главный зал",
    main_title: "Главный Зал",
    main_desc: "Лампы Эдисона, панорамные окна и вид на Каспийское море.",
    vip_tag: "Приватные пространства",
    vip_title: "VIP Кабинеты",
    vip_desc:
      "Каждый кабинет со своим характером — синий, красный, зелёный, золотой.",
    cinema_tag: "Кинотеатр & Ужин",
    cinema_title: "Кинозал",
    cinema_desc:
      "Премиальные кресла-реклайнеры, большой экран, отличная акустика.",
    sea_tag: "Берег Каспия",
    sea_title: "У моря",
    sea_desc: "Белые перголы, красные розы, морской бриз.",
    view_gallery: "Галерея →",
    menu_tag: "Наше меню",
    menu_title: "Симфония вкусов",
    menu_desc:
      "От национальной кухни до мировой, от рыбы Каспия до премиальных стейков.",
    tab_breakfast: "Завтрак",
    tab_cold: "Холодные закуски",
    tab_hot: "Горячие закуски",
    tab_soups: "Супы",
    tab_salads: "Салаты",
    tab_national: "Национальная кухня",
    tab_chef: "Меню шефа",
    tab_world: "Мировая кухня",
    tab_steak: "Стейк",
    tab_seafood: "Морепродукты",
    tab_bbq: "Шашлыки",
    tab_pizza: "Пицца",
    tab_drinks: "Напитки",
    pdf_note: "Вы можете скачать полное меню в формате PDF",
    pdf_btn: "Скачать PDF меню ↓",
    res_tag: "Резервация",
    res_title: "Забронируйте место",
    res_desc: "Заполните форму и отправьте заявку напрямую через WhatsApp.",
    form_name: "Имя",
    form_surname: "Фамилия",
    form_phone: "Телефон",
    form_guests: "Кол-во гостей",
    form_date: "Дата",
    form_time: "Время",
    form_note: "Дополнительно",
    form_whatsapp_note:
      "* Бронирование будет отправлено напрямую через WhatsApp",
    form_send: "Отправить через WhatsApp",
    footer_about:
      "La Château — премиальный ресторанный комплекс на берегу Каспия.",
    footer_contact: "Контакт",
    footer_hours: "Часы работы",
    footer_spaces_title: "Залы",
    footer_main: "🏛️ Главный зал",
    footer_vip: "👑 VIP кабинеты",
    footer_cinema: "🎬 Кинозал",
    footer_sea: "🌊 У моря",
    days_all: "Каждый день",
    footer_service: "⚠ К счёту добавляется 10% за обслуживание",
  },
  en: {
    nav_about: "About",
    nav_spaces: "Spaces",
    nav_menu: "Menu",
    nav_reserve: "Reserve",
    nav_contact: "Contact",
    hero_tag: "Novkhani, Azerbaijan — Caspian Shore",
    hero_sub: "Restaurant & Private Rooms",
    hero_btn1: "Book a Table",
    hero_btn2: "Explore Spaces",
    scroll: "Scroll Down",
    about_tag: "About Us",
    about_title: "Every moment\nbecome a memory",
    about_p1:
      "La Château is a premium restaurant complex on the shores of the Caspian Sea in Novkhani.",
    about_p2:
      "Private VIP rooms, a cinema hall, an open seaside terrace — every detail designed for you.",
    stat1: "Unique Spaces",
    stat2: "Menu Items",
    stat3: "Memories",
    spaces_tag: "Our Spaces",
    spaces_title: "Every space is its own world",
    spaces_desc:
      "Main hall, VIP rooms, cinema hall and open seaside terrace — the choice is yours.",
    main_tag: "Main Dining Hall",
    main_title: "Main Hall",
    main_desc: "Edison bulbs, panoramic windows and Caspian Sea views.",
    vip_tag: "Private Spaces",
    vip_title: "VIP Rooms",
    vip_desc: "Each room with its own character — blue, red, green, gold.",
    cinema_tag: "Cinema & Dining",
    cinema_title: "Cinema Hall",
    cinema_desc: "Premium recliner seats, large screen, exceptional sound.",
    sea_tag: "Caspian Shore",
    sea_title: "By the Sea",
    sea_desc: "White pergolas, red roses, sea breeze.",
    view_gallery: "Gallery →",
    menu_tag: "Our Menu",
    menu_title: "A symphony of flavors",
    menu_desc:
      "From national cuisine to world cuisine, from Caspian fish to premium steaks.",
    tab_breakfast: "Breakfast",
    tab_cold: "Cold Appetizers",
    tab_hot: "Hot Appetizers",
    tab_soups: "Soups",
    tab_salads: "Salads",
    tab_national: "National Cuisine",
    tab_chef: "Chef's Menu",
    tab_world: "World Cuisine",
    tab_steak: "Steak",
    tab_seafood: "Seafood",
    tab_bbq: "BBQ",
    tab_pizza: "Pizza",
    tab_drinks: "Drinks",
    pdf_note: "Download the full menu in PDF format",
    pdf_btn: "Download PDF Menu ↓",
    res_tag: "Reservation",
    res_title: "Reserve your table",
    res_desc: "Fill the form and send your reservation directly via WhatsApp.",
    form_name: "First Name",
    form_surname: "Last Name",
    form_phone: "Phone",
    form_guests: "Guests",
    form_date: "Date",
    form_time: "Time",
    form_note: "Notes",
    form_whatsapp_note: "* Reservation will be sent directly via WhatsApp",
    form_send: "Send via WhatsApp",
    footer_about:
      "La Château — a premium restaurant complex on the Caspian shore.",
    footer_contact: "Contact",
    footer_hours: "Working Hours",
    footer_spaces_title: "Spaces",
    footer_main: "🏛️ Main Hall",
    footer_vip: "👑 VIP Rooms",
    footer_cinema: "🎬 Cinema Hall",
    footer_sea: "🌊 By the Sea",
    days_all: "Every day",
    footer_service: "⚠ 10% service charge will be added to your bill",
  },
};

let currentLang = "az";

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.textContent.toLowerCase() === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
  document.documentElement.lang = lang;
}

// Set today as min date for reservation
const today = new Date().toISOString().split("T")[0];
document.getElementById("rdate").setAttribute("min", today);
document.getElementById("rdate").value = today;

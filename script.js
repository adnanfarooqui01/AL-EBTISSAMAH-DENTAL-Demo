const PHONE_WA = "971544335334";
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const appointmentForm = document.querySelector("#appointment-form");
const dateInput = appointmentForm.elements.date;
const languageToggle = document.querySelector(".language-toggle");

const arabicText = {
  "ALEBTISSAMAH": "الابتسامة",
  "DENTAL CLINIC": "عيادة الأسنان",
  "Services": "الخدمات",
  "Why Us": "لماذا نحن",
  "About": "من نحن",
  "Dental Tips": "نصائح الأسنان",
  "Contact": "اتصل بنا",
  "Book Appointment": "احجز موعدًا",
  "RAS AL KHAIMAH": "رأس الخيمة",
  "Your Smile,": "ابتسامتك،",
  "Our Priority.": "أولويتنا.",
  "Expert dental care in a warm, friendly environment. From routine checkups to whitening, implants and braces, all for the whole family.": "رعاية أسنان متخصصة في أجواء دافئة وودودة. من الفحوصات الدورية إلى التبييض والزراعة وتقويم الأسنان، لجميع أفراد الأسرة.",
  "Request an Appointment": "اطلب موعدًا",
  "Book on WhatsApp": "احجز عبر واتساب",
  "Friendly Dental Team": "فريق أسنان ودود",
  "Gentle Care": "رعاية لطيفة",
  "Easy WhatsApp Booking": "حجز سهل عبر واتساب",
  "OUR APPROACH": "نهجنا",
  "Gentle, clear and": "رعاية لطيفة وواضحة",
  "patient-focused.": "تركّز على المريض.",
  "We listen to your concerns, explain your options and tailor treatment to you, so every visit feels comfortable, not stressful.": "نستمع إلى مخاوفك ونشرح الخيارات ونصمم العلاج ليناسبك، لتكون كل زيارة مريحة وخالية من التوتر.",
  "Dental": "خدمات طب",
  "services": "الأسنان",
  "OUR SERVICES": "خدماتنا",
  "Complete care for your smile.": "رعاية متكاملة لابتسامتك.",
  "From routine checkups to cosmetic and restorative treatments, everything you need is available in one place.": "من الفحوصات الدورية إلى العلاجات التجميلية والترميمية، ستجد كل ما تحتاج إليه في مكان واحد.",
  "Teeth Whitening": "تبييض الأسنان",
  "Professional whitening removes stains and discoloration for a brighter, more confident smile.": "يساعد تبييض الأسنان الاحترافي على إزالة البقع والتصبغات لتحصل على ابتسامة أكثر إشراقًا وثقة.",
  "Dental Implants": "زراعة الأسنان",
  "A long-lasting solution for missing teeth that looks, feels and functions like a natural tooth.": "حل طويل الأمد للأسنان المفقودة، بمظهر ووظيفة قريبين من الأسنان الطبيعية.",
  "Braces & Orthodontics": "تقويم الأسنان",
  "Straighten your teeth and improve your bite with modern orthodontic treatment.": "رتّب أسنانك وحسّن إطباقك بعلاجات تقويم الأسنان الحديثة.",
  "Checkups & Cleaning": "الفحوصات والتنظيف",
  "Regular examinations and professional cleaning to catch problems early and keep gums healthy.": "فحوصات دورية وتنظيف احترافي لاكتشاف المشكلات مبكرًا والحفاظ على صحة اللثة.",
  "MORE TREATMENTS": "المزيد من العلاجات",
  "Care for every": "رعاية لكل",
  "stage of life.": "مراحل الحياة.",
  "Restorative, pediatric and emergency care, so your whole family is covered.": "علاجات ترميمية وطب أسنان للأطفال ورعاية طارئة لتلبية احتياجات جميع أفراد الأسرة.",
  "Discuss your treatment": "ناقش علاجك",
  "Fillings & Restorations": "الحشوات وترميم الأسنان",
  "Repair cavities and damaged teeth.": "علاج التسوس والأسنان المتضررة.",
  "Root Canal Treatment": "علاج قناة الجذر",
  "Save an infected tooth and relieve pain.": "إنقاذ السن المصاب وتخفيف الألم.",
  "Pediatric Dentistry": "طب أسنان الأطفال",
  "Gentle care for children.": "رعاية لطيفة للأطفال.",
  "Gum Care & Emergency": "رعاية اللثة والطوارئ",
  "Gum treatment and urgent dental care.": "علاج اللثة ورعاية الأسنان العاجلة.",
  "Checkup & Cleaning": "الفحص والتنظيف",
  "Root Canal": "علاج قناة الجذر",
  "Gum Care": "رعاية اللثة",
  "Emergency": "حالة طارئة",
  "WHY CHOOSE US": "لماذا تختارنا",
  "Comfortable care, every visit.": "رعاية مريحة في كل زيارة.",
  "What patients can expect at Alebtissamah Dental Clinic.": "ما يمكن للمرضى توقعه في عيادة الابتسامة للأسنان.",
  "Friendly team": "فريق ودود",
  "We take time to listen, explain your options and answer every question.": "نخصص الوقت للاستماع إليك وشرح الخيارات والإجابة عن جميع أسئلتك.",
  "Gentle care": "رعاية لطيفة",
  "Your comfort comes first at every step, including for anxious patients.": "راحتك أولويتنا في كل خطوة، بما في ذلك للمرضى الذين يشعرون بالقلق.",
  "Easy booking": "حجز سهل",
  "Message us on WhatsApp and we will arrange your appointment.": "راسلنا عبر واتساب وسنرتب موعدك.",
  "ABOUT US": "من نحن",
  "A dentist visit should feel calm.": "زيارتك لطبيب الأسنان يجب أن تكون مريحة.",
  "At Alebtissamah Dental Clinic in Ras Al Khaimah, we provide a full range of dental services with careful attention to each patient. Our goal is simple: to help you smile with confidence, in a warm and comfortable setting.": "في عيادة الابتسامة للأسنان في رأس الخيمة، نقدم مجموعة متكاملة من خدمات الأسنان مع اهتمام خاص بكل مريض. هدفنا بسيط: مساعدتك على الابتسام بثقة في أجواء دافئة ومريحة.",
  "Checkups, cleaning and gum care": "الفحوصات والتنظيف ورعاية اللثة",
  "Whitening and cosmetic dentistry": "التبييض وطب الأسنان التجميلي",
  "Implants, braces and restorations": "الزراعة والتقويم والترميمات",
  "Care for children and emergencies": "رعاية الأطفال والحالات الطارئة",
  "DENTAL TIPS": "نصائح للأسنان",
  "Small habits, healthier smile.": "عادات بسيطة لابتسامة أكثر صحة.",
  "Simple advice from our clinic to help you look after your teeth at home.": "نصائح بسيطة من عيادتنا لمساعدتك على العناية بأسنانك في المنزل.",
  "Why flossing matters": "لماذا يُعد استخدام الخيط مهمًا؟",
  "Brushing alone misses the spaces between teeth. Flossing removes plaque and food particles, helping prevent gum disease and cavities.": "لا تصل الفرشاة وحدها إلى المسافات بين الأسنان. يزيل خيط الأسنان البلاك وبقايا الطعام، ويساعد على الوقاية من أمراض اللثة والتسوس.",
  "Foods that strengthen teeth": "أطعمة تقوي الأسنان",
  "Dairy, leafy greens, nuts and crunchy fruit support strong teeth and gums. Limit sugary snacks and drinks.": "تدعم منتجات الألبان والخضروات الورقية والمكسرات والفواكه المقرمشة صحة الأسنان واللثة. قلل من الوجبات والمشروبات السكرية.",
  "Overcoming dental anxiety": "التغلب على قلق زيارة الأسنان",
  "You are not alone. Tell us how you feel, ask us to explain each step, and take breaks whenever you need.": "لست وحدك. أخبرنا بما تشعر به واطلب منا شرح كل خطوة، وخذ استراحة متى احتجت.",
  "APPOINTMENTS": "المواعيد",
  "Let’s plan your next visit.": "لنرتب زيارتك القادمة.",
  "Complete the short form and continue to WhatsApp. Our team will confirm your appointment with you directly.": "أكمل النموذج المختصر وانتقل إلى واتساب. سيتواصل فريقنا معك مباشرة لتأكيد موعدك.",
  "CALL THE CLINIC": "اتصل بالعيادة",
  "WHATSAPP": "واتساب",
  "Appointment request": "طلب موعد",
  "Full name": "الاسم الكامل",
  "Mobile number": "رقم الهاتف المحمول",
  "Preferred date": "التاريخ المفضل",
  "Service": "الخدمة",
  "General consultation": "استشارة عامة",
  "Message": "الرسالة",
  "Continue to WhatsApp": "متابعة إلى واتساب",
  "Please do not include sensitive medical information in this form.": "يرجى عدم إدخال معلومات طبية حساسة في هذا النموذج.",
  "FIND US": "موقعنا",
  "Conveniently located in Ras Al Khaimah": "موقعنا مناسب في رأس الخيمة",
  "Alebtissamah Dental Clinic": "عيادة الابتسامة للأسنان",
  "Ras Al Khaimah, UAE": "رأس الخيمة، الإمارات العربية المتحدة",
  "Opening hours:": "ساعات العمل:",
  "Please message us on WhatsApp to confirm today’s hours.": "يرجى مراسلتنا عبر واتساب لتأكيد ساعات العمل اليوم.",
  "Instagram:": "إنستغرام:",
  "Instagram": "إنستغرام",
  "Open in Google Maps": "افتح في خرائط جوجل",
  "Explore": "استكشف",
  "Appointments": "المواعيد",
  "WhatsApp": "واتساب",
  "Your Smile, Our Priority. Dental care in Ras Al Khaimah, UAE.": "ابتسامتك أولويتنا. رعاية الأسنان في رأس الخيمة، الإمارات العربية المتحدة.",
  "Alebtissamah Dental Clinic. All rights reserved.": "عيادة الابتسامة للأسنان. جميع الحقوق محفوظة.",
  "Back to top ↑": "العودة إلى الأعلى ↑"
};

const arabicAttributes = {
  "Alebtissamah Dental Clinic home": "الصفحة الرئيسية لعيادة الابتسامة للأسنان",
  "Open navigation": "افتح قائمة التنقل",
  "Primary navigation": "التنقل الرئيسي",
  "Clinic highlights": "مميزات العيادة",
  "Choose slide": "اختر الشريحة",
  "Slide 1": "الشريحة 1",
  "Slide 2": "الشريحة 2",
  "Slide 3": "الشريحة 3",
  "Contact the clinic on WhatsApp": "تواصل مع العيادة عبر واتساب",
  "Switch to Arabic": "التبديل إلى العربية",
  "Switch to English": "التبديل إلى الإنجليزية",
  "Your name": "اسمك",
  "Tell us briefly how we can help": "أخبرنا باختصار كيف يمكننا مساعدتك",
  "Close navigation": "أغلق قائمة التنقل",
  "Close-up of a bright, white smile": "لقطة قريبة لابتسامة مشرقة",
  "Dental implant demonstration model": "نموذج توضيحي لزراعة الأسنان",
  "Close-up of teeth with braces": "لقطة قريبة لأسنان مع تقويم",
  "Dental examination instruments": "أدوات فحص الأسنان",
  "Bright modern dental clinic reception": "استقبال عيادة أسنان حديث وعصري",
  "Map showing the clinic location in Ras Al Khaimah": "خريطة توضح موقع العيادة في رأس الخيمة"
};

const textNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  if (!node.parentElement.closest("script, style, .language-toggle") && node.nodeValue.trim()) {
    textNodes.push({ node, english: node.nodeValue, key: node.nodeValue.trim() });
  }
}

const localizedAttributes = [...document.querySelectorAll("[aria-label], [placeholder], [alt], iframe[title]")]
  .flatMap((element) => ["aria-label", "placeholder", "alt", "title"]
    .filter((attribute) => element.hasAttribute(attribute))
    .map((attribute) => ({ element, attribute, english: element.getAttribute(attribute) })));

function setLanguage(language) {
  const isArabic = language === "ar";
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  textNodes.forEach(({ node, english, key }) => {
    if (!isArabic || !arabicText[key]) {
      node.nodeValue = english;
      return;
    }
    const leading = english.match(/^\s*/)[0];
    const trailing = english.match(/\s*$/)[0];
    node.nodeValue = `${leading}${arabicText[key]}${trailing}`;
  });

  localizedAttributes.forEach(({ element, attribute, english }) => {
    element.setAttribute(attribute, isArabic ? arabicAttributes[english] || english : english);
  });

  const menuLabel = menuButton.getAttribute("aria-expanded") === "true" ? "Close navigation" : "Open navigation";
  menuButton.setAttribute("aria-label", isArabic ? arabicAttributes[menuLabel] : menuLabel);
  languageToggle.textContent = isArabic ? "English" : "العربية";
  languageToggle.lang = isArabic ? "en" : "ar";
  languageToggle.setAttribute("aria-label", isArabic ? "Switch to English" : "Switch to Arabic");
  document.title = isArabic ? "عيادة الابتسامة للأسنان | طبيب أسنان في رأس الخيمة" : "Alebtissamah Dental Clinic | Dentist in Ras Al Khaimah, UAE";
  document.querySelector('meta[name="description"]').content = isArabic
    ? "رعاية أسنان متخصصة في عيادة الابتسامة في رأس الخيمة. تبييض وزراعة وتقويم الأسنان وعلاجات شاملة. احجز عبر واتساب."
    : "Expert dental care in a warm, friendly environment in Ras Al Khaimah. Whitening, implants, braces, fillings, root canal and more. Book on WhatsApp.";

  try {
    localStorage.setItem("alebtissamah-language", language);
  } catch {}
}

languageToggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "en" ? "ar" : "en");
});

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem("alebtissamah-language") || "en";
} catch {}
setLanguage(savedLanguage);

document.querySelector("#current-year").textContent = new Date().getFullYear();
dateInput.min = new Date().toISOString().split("T")[0];

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  const nextLabel = isExpanded ? "Open navigation" : "Close navigation";
  menuButton.setAttribute("aria-label", document.documentElement.lang === "ar" ? arabicAttributes[nextLabel] : nextLabel);
  navigation.classList.toggle("is-open", !isExpanded);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", document.documentElement.lang === "ar" ? arabicAttributes["Open navigation"] : "Open navigation");
    navigation.classList.remove("is-open");
  }
});

/* Hero slider: changes every 5 seconds */
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dots button");
let current = 0, timer;
function showSlide(i) {
  current = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle("is-active", n === current));
  dots.forEach((d, n) => d.classList.toggle("is-active", n === current));
}
function startSlider() { clearInterval(timer); timer = setInterval(() => showSlide(current + 1), 5000); }
dots.forEach((d, n) => d.addEventListener("click", () => { showSlide(n); startSlider(); }));
showSlide(0);
startSlider();

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(appointmentForm);
  const details = document.documentElement.lang === "ar"
    ? [
      "مرحبًا، أود طلب موعد.",
      `الاسم: ${formData.get("name")}`,
      `رقم الهاتف: ${formData.get("phone")}`,
      `التاريخ المفضل: ${formData.get("date") || "مرن"}`,
      `الخدمة: ${formData.get("service")}`,
      formData.get("message") ? `الرسالة: ${formData.get("message")}` : ""
    ].filter(Boolean).join("\n")
    : [
      "Hello, I would like to request an appointment.",
      `Name: ${formData.get("name")}`,
      `Mobile: ${formData.get("phone")}`,
      `Preferred date: ${formData.get("date") || "Flexible"}`,
      `Service: ${formData.get("service")}`,
      formData.get("message") ? `Message: ${formData.get("message")}` : ""
    ].filter(Boolean).join("\n");
  window.open(`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(details)}`, "_blank", "noopener,noreferrer");
});
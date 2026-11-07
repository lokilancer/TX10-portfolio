// TMMV Robotics — language, theme and site interactions
(() => {
  const translations = {
    en: {
      navAbout:"About",navTeam:"The team",navWork:"What we do",navActivities:"Activities",meetTeam:"MEET THE TEAM",
      heroEyebrow:"CURIOSITY IN MOTION",heroDescription:'We are <strong>TMMV Robotics</strong> — a student team exploring the world of robotics, technology and creative engineering. We learn by making, testing and building together.',
      heroButton:"GET TO KNOW US <span>↗</span>",heroExplore:'EXPLORE OUR WORK <span>↓</span>',heroFoot:"BUILT ON TEAMWORK & CURIOSITY",
      ourWorld:"OUR WORLD",introStrip:"Curious minds. Practical skills. Shared discoveries.",aboutEyebrow:"A LITTLE INTRODUCTION",aboutTitle:'A team that likes<br>to <em>figure things out.</em>',
      aboutLead:"TMMV Robotics brings together students who are interested in discovering how technology works — and what we can create with it.",
      aboutBody1:"From robotics and programming to hands-on experiments, we believe the best way to learn is to ask questions, try ideas and improve through teamwork.",
      aboutBody2:"This website is our shared space to introduce our people, projects and experiences.",
      teamEyebrow:"THE PEOPLE BEHIND THE PROJECTS",teamTitle:'Meet the <em>team.</em>',teamIntro:"Eight members. Different strengths. One shared curiosity.",
      teamLeader:"Team Leader",rolePending:"Role to be assigned",expoTag:"T.M.M.V ICT EXPO",teamCaption:"All eight members participated in the T.M.M.V ICT Expo.",
      workEyebrow:"WHAT WE LIKE TO EXPLORE",workTitle:'Ideas become<br><em>experiments.</em>',work1Title:"Robotics & automation",work1Body:"Learning how sensors, motors and control systems work together to make machines move and respond.",
      work2Title:"Code & problem-solving",work2Body:"Using logic, code and creative thinking to turn challenges into practical solutions.",
      work3Title:"Build, test & improve",work3Body:"Exploring ideas through prototypes, testing and the process of making things work better.",
      activityEyebrow:"A SHARED EXPERIENCE",activityTitle:'Where we <em>showed up.</em>',activityType:"TEAM PARTICIPATION · EXHIBITION",
      activityBody:"All eight members of TMMV Robotics participated in the T.M.M.V ICT Expo — a shared opportunity to take part in a technology-focused event and learn together.",
      closingEyebrow:"OUR NEXT IDEA STARTS WITH A QUESTION",closingTitle:'Stay curious.<br><em>Keep building.</em>',backTop:"BACK TO THE TOP ↑",
      footerTagline:"People · Ideas · Machines",footerCopy:'© <span id="year"></span> TMMV Robotics. Built with curiosity in Sri Lanka.'
    },
    ta: {
      navAbout:"எங்களைப் பற்றி",navTeam:"அணியினர்",navWork:"எங்கள் செயற்பாடுகள்",navActivities:"நிகழ்வுகள்",meetTeam:"அணியினரைச் சந்திக்கவும்",
      heroEyebrow:"ஆர்வத்துடன் முன்னேறுவோம்",heroDescription:'நாங்கள் <strong>TMMV Robotics</strong> — ரோபோட்டிக்ஸ், தொழில்நுட்பம் மற்றும் படைப்பாற்றல் மிக்க பொறியியலை ஆராயும் மாணவர் குழுவாகும். உருவாக்குதல், சோதித்தல் மற்றும் ஒன்றிணைந்து செயல்படுதல் மூலம் கற்றுக்கொள்கிறோம்.',
      heroButton:"எங்களை அறிந்துகொள்ளுங்கள் <span>↗</span>",heroExplore:'எங்கள் செயற்பாடுகளைப் பாருங்கள் <span>↓</span>',heroFoot:"குழுப்பணி மற்றும் ஆர்வத்தின் அடிப்படையில் உருவானது",
      ourWorld:"எங்கள் உலகம்",introStrip:"ஆர்வமுள்ள சிந்தனைகள். நடைமுறைத் திறன்கள். பகிரப்பட்ட கண்டுபிடிப்புகள்.",aboutEyebrow:"சிறிய அறிமுகம்",aboutTitle:'சிந்தித்து<br><em>விடை காணும் குழு.</em>',
      aboutLead:"TMMV Robotics என்பது தொழில்நுட்பம் எவ்வாறு செயல்படுகிறது என்பதையும் அதன் மூலம் எதை உருவாக்கலாம் என்பதையும் அறிய விரும்பும் மாணவர்களை ஒன்றிணைக்கும் குழுவாகும்.",
      aboutBody1:"ரோபோட்டிக்ஸ் மற்றும் நிரலாக்கம் முதல் நேரடி பரிசோதனைகள் வரை, கேள்விகள் கேட்டு, யோசனைகளை முயற்சி செய்து, குழுவாக மேம்படுவதன் மூலம் சிறப்பாகக் கற்றுக்கொள்ளலாம் என நம்புகிறோம்.",
      aboutBody2:"எங்கள் உறுப்பினர்கள், திட்டங்கள் மற்றும் அனுபவங்களை அறிமுகப்படுத்தும் பொதுவான இடமாக இந்த இணையத்தளம் அமைகிறது.",
      teamEyebrow:"திட்டங்களின் பின்னால் உள்ளவர்கள்",teamTitle:'எங்கள் <em>அணியினர்.</em>',teamIntro:"எட்டு உறுப்பினர்கள். வெவ்வேறு திறன்கள். ஒரே ஆர்வம்.",
      teamLeader:"அணித் தலைவர்",rolePending:"பதவி பின்னர் அறிவிக்கப்படும்",expoTag:"T.M.M.V ICT EXPO",teamCaption:"எட்டு உறுப்பினர்களும் T.M.M.V ICT Expo நிகழ்வில் பங்கேற்றனர்.",
      workEyebrow:"நாங்கள் ஆராய விரும்புவது",workTitle:'யோசனைகள்<br><em>பரிசோதனைகளாகின்றன.</em>',work1Title:"ரோபோட்டிக்ஸ் மற்றும் தானியக்கம்",work1Body:"இயந்திரங்கள் இயங்கவும் பதிலளிக்கவும் உணரிகள், மோட்டார்கள் மற்றும் கட்டுப்பாட்டு அமைப்புகள் எவ்வாறு இணைந்து செயல்படுகின்றன என்பதை அறிதல்.",
      work2Title:"நிரலாக்கம் மற்றும் சிக்கல் தீர்த்தல்",work2Body:"சவால்களை நடைமுறைத் தீர்வுகளாக மாற்ற தர்க்கம், நிரலாக்கம் மற்றும் படைப்பாற்றலைப் பயன்படுத்துதல்.",
      work3Title:"உருவாக்குதல், சோதித்தல், மேம்படுத்துதல்",work3Body:"மாதிரிகளை உருவாக்கி, சோதித்து, மேலும் சிறப்பாகச் செயல்படச் செய்வதன் மூலம் யோசனைகளை ஆராய்தல்.",
      activityEyebrow:"பகிரப்பட்ட அனுபவம்",activityTitle:'நாங்கள் பங்கேற்ற <em>நிகழ்வு.</em>',activityType:"குழுப் பங்கேற்பு · கண்காட்சி",
      activityBody:"TMMV Robotics அணியின் எட்டு உறுப்பினர்களும் T.M.M.V ICT Expo நிகழ்வில் பங்கேற்று, தொழில்நுட்பம் சார்ந்த நிகழ்வில் ஒன்றாகக் கற்றுக்கொள்ளும் அனுபவத்தைப் பெற்றனர்.",
      closingEyebrow:"எங்கள் அடுத்த யோசனை ஒரு கேள்வியுடன் தொடங்குகிறது",closingTitle:'ஆர்வத்துடன் இருங்கள்.<br><em>தொடர்ந்து உருவாக்குங்கள்.</em>',backTop:"மேலே செல்லுங்கள் ↑",
      footerTagline:"மனிதர்கள் · யோசனைகள் · இயந்திரங்கள்",footerCopy:'© <span id="year"></span> TMMV Robotics. இலங்கையில் ஆர்வத்துடன் உருவாக்கப்பட்டது.'
    },
    si: {
      navAbout:"අප ගැන",navTeam:"කණ්ඩායම",navWork:"අප කරන දේ",navActivities:"ක්‍රියාකාරකම්",meetTeam:"කණ්ඩායම හඳුනාගන්න",
      heroEyebrow:"කුතුහලයෙන් ඉදිරියට",heroDescription:'අපි <strong>TMMV Robotics</strong> — රොබෝ තාක්ෂණය, තාක්ෂණික දැනුම සහ නිර්මාණශීලී ඉංජිනේරුකරණය ගවේෂණය කරන ශිෂ්‍ය කණ්ඩායමකි. නිර්මාණය කිරීමෙන්, පරීක්ෂා කිරීමෙන් සහ එක්ව වැඩ කිරීමෙන් අපි ඉගෙන ගනිමු.',
      heroButton:"අප ගැන දැනගන්න <span>↗</span>",heroExplore:'අපගේ නිර්මාණ බලන්න <span>↓</span>',heroFoot:"කණ්ඩායම් හැඟීම සහ කුතුහලය මත ගොඩනැගුණි",
      ourWorld:"අපේ ලෝකය",introStrip:"කුතුහලයෙන් පිරි සිත්. ප්‍රායෝගික කුසලතා. එකට බෙදාගත් සොයාගැනීම්.",aboutEyebrow:"කෙටි හැඳින්වීමක්",aboutTitle:'විසඳුම් සොයන<br><em>කණ්ඩායමක්.</em>',
      aboutLead:"TMMV Robotics යනු තාක්ෂණය ක්‍රියා කරන ආකාරය සහ එයින් අපට නිර්මාණය කළ හැකි දේ සොයා බැලීමට කැමති සිසුන් එක් කරන කණ්ඩායමකි.",
      aboutBody1:"රොබෝ තාක්ෂණය සහ ක්‍රමලේඛනයේ සිට ප්‍රායෝගික අත්හදා බැලීම් දක්වා, ප්‍රශ්න ඇසීමෙන්, අදහස් අත්හදා බැලීමෙන් සහ කණ්ඩායමක් ලෙස දියුණු වීමෙන් හොඳින් ඉගෙන ගත හැකි බව අපි විශ්වාස කරමු.",
      aboutBody2:"අපගේ සාමාජිකයන්, ව්‍යාපෘති සහ අත්දැකීම් හඳුන්වා දීමට මෙම වෙබ් අඩවිය අපගේ පොදු අවකාශයයි.",
      teamEyebrow:"ව්‍යාපෘති පිටුපස සිටින පිරිස",teamTitle:'අපගේ <em>කණ්ඩායම.</em>',teamIntro:"සාමාජිකයන් අට දෙනෙක්. විවිධ හැකියාවන්. එකම කුතුහලය.",
      teamLeader:"කණ්ඩායම් නායක",rolePending:"තනතුර පසුව නියම කෙරේ",expoTag:"T.M.M.V ICT EXPO",teamCaption:"සාමාජිකයන් අට දෙනාම T.M.M.V ICT Expo සඳහා සහභාගී වූහ.",
      workEyebrow:"අප ගවේෂණය කිරීමට කැමති දේ",workTitle:'අදහස්<br><em>අත්හදා බැලීම් වේ.</em>',work1Title:"රොබෝ තාක්ෂණය සහ ස්වයංක්‍රීයකරණය",work1Body:"යන්ත්‍ර චලනය වීමට සහ ප්‍රතිචාර දැක්වීමට සංවේදක, මෝටර් සහ පාලන පද්ධති එකට ක්‍රියා කරන ආකාරය ඉගෙන ගැනීම.",
      work2Title:"කේතකරණය සහ ගැටලු විසඳීම",work2Body:"අභියෝග ප්‍රායෝගික විසඳුම් බවට පත් කිරීමට තර්කනය, කේතකරණය සහ නිර්මාණශීලී සිතුවිලි භාවිතා කිරීම.",
      work3Title:"නිර්මාණය, පරීක්ෂාව සහ වැඩිදියුණු කිරීම",work3Body:"ආකෘති නිර්මාණය කිරීම, පරීක්ෂා කිරීම සහ වඩා හොඳින් ක්‍රියා කිරීමට සැලැස්වීම තුළින් අදහස් ගවේෂණය කිරීම.",
      activityEyebrow:"එකට ලැබූ අත්දැකීමක්",activityTitle:'අප සහභාගී වූ <em>අවස්ථාව.</em>',activityType:"කණ්ඩායම් සහභාගීත්වය · ප්‍රදර්ශනය",
      activityBody:"TMMV Robotics කණ්ඩායමේ සාමාජිකයන් අට දෙනාම T.M.M.V ICT Expo සඳහා සහභාගී වී තාක්ෂණය කේන්ද්‍ර කරගත් උත්සවයකට එක්ව සහභාගී වෙමින් ඉගෙන ගැනීමේ අවස්ථාව ලැබූහ.",
      closingEyebrow:"අපගේ ඊළඟ අදහස ප්‍රශ්නයකින් ආරම්භ වේ",closingTitle:'කුතුහලයෙන් සිටින්න.<br><em>දිගටම නිර්මාණය කරන්න.</em>',backTop:"ඉහළට යන්න ↑",
      footerTagline:"මිනිසුන් · අදහස් · යන්ත්‍ර",footerCopy:'© <span id="year"></span> TMMV Robotics. ශ්‍රී ලංකාවේ කුතුහලයෙන් නිර්මාණය කරන ලදී.'
    }
  };
  const languageSelect = document.getElementById("languageSelect");
  function setLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const value = dict[el.dataset.i18n];
      if (value) el.innerHTML = value;
    });
    if (languageSelect) languageSelect.value = lang;
    try { localStorage.setItem("tmmv-language", lang); } catch (_) {}
  }
  let savedLanguage = "en";
  try { savedLanguage = localStorage.getItem("tmmv-language") || "en"; } catch (_) {}
  setLanguage(savedLanguage);
  languageSelect?.addEventListener("change", () => setLanguage(languageSelect.value));

  const themeButton = document.getElementById("themeToggle");
  const themeText = document.getElementById("themeText");
  function setTheme(theme) {
    const dark = theme === "dark";
    document.body.classList.toggle("theme-dark", dark);
    if (themeText) themeText.textContent = dark ? "LIGHT" : "DARK";
    if (themeButton) {
      themeButton.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      themeButton.querySelector(".theme-icon").textContent = dark ? "☀" : "☾";
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.content = dark ? "#20211d" : "#f4efe6";
    try { localStorage.setItem("tmmv-theme", theme); } catch (_) {}
  }
  let savedTheme = "light";
  try { savedTheme = localStorage.getItem("tmmv-theme") || "light"; } catch (_) {}
  setTheme(savedTheme);
  themeButton?.addEventListener("click", () => setTheme(document.body.classList.contains("theme-dark") ? "light" : "dark"));

  const preloader = document.getElementById("preloader");
  const finishLoading = () => preloader?.classList.add("hide");
  window.addEventListener("load", () => window.setTimeout(finishLoading, 500), { once: true });
  window.setTimeout(finishLoading, 2600);

  const status = document.getElementById("connectionStatus");
  const statusText = document.getElementById("connectionText");
  function refreshConnection() {
    const online = navigator.onLine;
    status?.classList.toggle("offline", !online);
    if (statusText) statusText.textContent = online ? "SYSTEM ONLINE" : "SYSTEM OFFLINE";
    status?.setAttribute("aria-label", online ? "Browser reports an internet connection" : "Browser reports no internet connection");
  }
  window.addEventListener("online", refreshConnection);
  window.addEventListener("offline", refreshConnection);
  refreshConnection();

  const menuButton = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuButton?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }));

  const revealTargets = document.querySelectorAll(".section, .team-wrap, .activity-wrap, .closing-inner");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => { el.classList.add("reveal"); observer.observe(el); });
  }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
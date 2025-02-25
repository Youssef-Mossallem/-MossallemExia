document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project-card");

  function revealProjects() {
    projects.forEach((project) => {
      const projectTop = project.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (projectTop < windowHeight - 100) {
        project.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealProjects);
  revealProjects();
});

document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skills");

  function revealSkills() {
    skills.forEach((skill) => {
      const skillTop = skill.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (skillTop < windowHeight - 100) {
        skill.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSkills);
  revealSkills();
});

document.addEventListener("DOMContentLoaded", function () {
  let show = document.querySelector(".projectshow");
  let show2 = document.querySelector(".projectshow.s");
  let views = document.querySelectorAll(".project-info button");
  let sections = document.querySelectorAll("section:not(.projects),header,footer");
  let button = document.querySelector(".svg");

  views.forEach((view) => {
    view.onclick = (event) => {
      if (event.currentTarget.classList.contains("Fokir")) {
        setTimeout(() => {
          show.classList.add("show");
        }, 100);
        show.classList.add("show1");
        sections.forEach((section) => {
          section.style.display = "none";
        });
        button.onclick = function () {
          setTimeout(() => {
            show.classList.remove("show1");
          }, 1000);
          show.classList.remove("show");
          sections.forEach((section) => {
            section.style.display = "block";
          });
          document.querySelector("li.Projects a").click();
        };
      } else if (event.currentTarget.classList.contains("Elzero")) {
        setTimeout(() => {
          show2.classList.add("show");
        }, 100);
        show2.classList.add("show1");
        sections.forEach((section) => {
          section.style.display = "none";
        });
        let button = document.querySelector(".projectshow.s .svg");
        button.onclick = function () {
          setTimeout(() => {
            show2.classList.remove("show1");
          }, 1000);
          show2.classList.remove("show");
          sections.forEach((section) => {
            section.style.display = "block";
          });
          document.querySelector("li.Projects a").click();
        };
      }
    };
  });
});

// ✅ كود جديد: إرسال بيانات الفورم إلى واتساب مباشرةً
document.addEventListener("DOMContentLoaded", function () {
  let contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // منع الإرسال الافتراضي

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || phone === "" || message === "") {
      alert("⚠️ من فضلك املأ جميع الحقول.");
      return;
    }

    // ✅ تنسيق البيانات كرسالة
    let whatsappMessage = `✉️ *المعلومات المرسلة:*\n`
                          + `👤 *الاسم:* ${name}\n`
                          + `📧 *البريد الإلكتروني:* ${email}\n`
                          + `📌 *الموضوع:* ${subject}\n`
                          + `📞 *رقم الهاتف:* ${phone}\n`
                          + `💬 *الرسالة:* ${message}`;

    // ✅ إرسال البيانات إلى رقم الواتساب مباشرةً
    let phoneNumber = "201061062466"; // رقمك بدون "+"
    let whatsappURL = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    // ✅ فتح تطبيق واتساب مباشرةً
    window.location.href = whatsappURL;
  });
});

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
  let sections = document.querySelectorAll(
    "section:not(.projects),header,footer"
  );
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
          // show.classList.remove("show1");
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
document.addEventListener("DOMContentLoaded", function () {
  let contactSection = document.getElementById("contact");
  let contactForm = document.getElementById("contactForm");
  let inputs = document.querySelectorAll(
    "#contactForm input, #contactForm textarea"
  );

  // ✅ تشغيل الأنيميشن عند ظهور القسم في الشاشة
  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function handleScroll() {
    if (isInViewport(contactSection)) {
      contactSection.style.opacity = "1";
      contactSection.style.transform = "translateY(0)";
      window.removeEventListener("scroll", handleScroll);
    }
  }

  // إعداد القيم الافتراضية
  contactSection.style.opacity = "0";
  contactSection.style.transform = "translateY(50px)";
  contactSection.style.transition =
    "opacity 0.8s ease-out, transform 0.8s ease-out";
  window.addEventListener("scroll", handleScroll);

  // ✅ تحميل القيم المخزنة في sessionStorage عند فتح الصفحة
  inputs.forEach((input) => {
    let storedValue = sessionStorage.getItem(input.id);
    if (storedValue) {
      input.value = storedValue;
    }

    // حفظ المدخلات عند التغيير
    input.addEventListener("input", function () {
      sessionStorage.setItem(input.id, input.value);
    });
  });

  // ✅ معالجة إرسال النموذج
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // منع الإرسال الفوري

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // ✅ عرض رسالة النجاح
    let successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    // ✅ مسح الحقول بعد الإرسال
    contactForm.reset();
    inputs.forEach((input) => sessionStorage.removeItem(input.id)); // مسح البيانات من sessionStorage
    // ✅ إخفاء الرسالة بعد 3 ثوانٍ
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  });
});

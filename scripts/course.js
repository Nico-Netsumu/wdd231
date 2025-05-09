// scripts/course.js

const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 231", name: "Front-end Web Development I", credits: 3, completed: true },
  { code: "WDD 331", name: "Advanced CSS", credits: 3, completed: false },
  { code: "WDD 430", name: "Web Frontend Capstone", credits: 3, completed: false },
  { code: "CSE 121b", name: "JavaScript Language", credits: 3, completed: true },
  { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false },
  { code: "CSE 220", name: "Software Engineering", credits: 3, completed: false },
  { code: "CSE 222a", name: "DevOps", credits: 3, completed: false },
  { code: "CSE 230", name: "Computer Programming Capstone", credits: 3, completed: false }
];

const coursesContainer = document.getElementById("courses");
const totalCreditsSpan = document.getElementById("total-credits");

function renderCourses(courseList) {
  coursesContainer.innerHTML = "";

  courseList.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) card.classList.add("completed");

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
    `;

    coursesContainer.appendChild(card);
  });

  const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsSpan.textContent = totalCredits;
}

// Filtering logic
document.getElementById("all").addEventListener("click", () => renderCourses(courses));
document.getElementById("wdd").addEventListener("click", () => {
  const wddCourses = courses.filter(c => c.code.startsWith("WDD"));
  renderCourses(wddCourses);
});
document.getElementById("cse").addEventListener("click", () => {
  const cseCourses = courses.filter(c => c.code.startsWith("CSE"));
  renderCourses(cseCourses);
});

// Initial display
document.addEventListener("DOMContentLoaded", () => renderCourses(courses));

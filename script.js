document.getElementById("cvForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const about = document.getElementById("about").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const linkedin = document.getElementById("linkedin").value;
  const skills = document.getElementById("skills").value.split(',');

  const output = `
    <h2>name</h2>
    <h3>{title}</h3>
    <p><strong>عنّي:</strong> about</p>
    <p><strong>البريد:</strong>{email}</p>
    <p><strong>الهاتف:</strong> phone</p>
    <p><strong>LinkedIn:</strong> <a href="{linkedin}" target="_blank">linkedin</a></p>
    <p><strong>المهارات:</strong></p>
    <ul>{skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    document.getElementById("cvOutput").innerHTML = output;
});
function downloadPDF() {
  const element = document.getElementById("cvOutput");
  if (!element.innerHTML.trim()) {
    alert("أنشئ السيرة الذاتية أولاً.");
    return;
  }

  html2pdf().from(element).save('CV.pdf');
}
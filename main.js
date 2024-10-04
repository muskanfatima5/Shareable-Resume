var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resumeOutput');
var shareablelinkcontainer = document.getElementById('shareable-link-container');
var shareablelinkElement = document.getElementById('shareable-link');
var downloadPDFButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills, DecompressionStream: DecompressionStream };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n      <h1> Resume </h1>\n      <p><strong>Name:</strong> ".concat(name, " </p>\n      <p><strong>Email:</strong> ").concat(email, " </p>\n      <p><strong>Phone:</strong> ").concat(phone, " </p>\n      <p><strong>Permanent Address:</strong> ").concat(address, " </p>\n      <p><strong>Education:</strong> ").concat(education, " </p>\n      <p><strong>Experience:</strong> ").concat(experience, " </p>\n      <p><strong>Skills:</strong> ").concat(skills, "</p>\n     ");
    resumeDisplayElement.innerHTML = resumeHTML;
    //    GENERATE A SHAREABLE URL WITH THE USENAME ONLY   //
    var shareableURL = "".concat(window.location.origin, "? username=").concat(encodeURIComponent(username));
    shareablelinkcontainer.style.display = "block";
    shareablelinkElement.href = shareableURL;
    shareablelinkElement.textContent = shareableURL;
});
downloadPDFButton.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var ResumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = ResumeData.name;
            document.getElementById('email').value = ResumeData.email;
            document.getElementById('phone').value = ResumeData.phone;
            document.getElementById('address').value = ResumeData.address;
            document.getElementById('education').value = ResumeData.education;
            document.getElementById('experience').value = ResumeData.experience;
            document.getElementById('skills').value = ResumeData.skills;
        }
    }
});

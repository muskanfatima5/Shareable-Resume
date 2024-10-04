const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeOutput') as HTMLDivElement;
const shareablelinkcontainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareablelinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPDFButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const username=(document.getElementById('username')as HTMLInputElement).value;
    const name=(document.getElementById('name')as HTMLInputElement).value;
    const email=(document.getElementById('email')as HTMLInputElement).value;
    const phone=(document.getElementById('phone')as HTMLInputElement).value;
    const address=(document.getElementById('address')as HTMLInputElement).value;
    const education=(document.getElementById('education')as HTMLInputElement).value;
    const experience=(document.getElementById('experience')as HTMLInputElement).value;
    const skills=(document.getElementById('skills')as HTMLInputElement).value;
    
    const resumeData= {name, email, phone, education, experience, skills, DecompressionStream};
    localStorage.setItem(username, JSON.stringify(resumeData));

    const resumeHTML= `
      <h1> Resume </h1>
      <p><strong>Name:</strong> ${name} </p>
      <p><strong>Email:</strong> ${email} </p>
      <p><strong>Phone:</strong> ${phone} </p>
      <p><strong>Permanent Address:</strong> ${address} </p>
      <p><strong>Education:</strong> ${education} </p>
      <p><strong>Experience:</strong> ${experience} </p>
      <p><strong>Skills:</strong> ${skills}</p>
     `;

     resumeDisplayElement.innerHTML = resumeHTML;

//    GENERATE A SHAREABLE URL WITH THE USENAME ONLY   //
     const shareableURL = `${window.location.origin}? username=${encodeURIComponent(username)}`
     
     shareablelinkcontainer.style.display="block";
     shareablelinkElement.href = shareableURL;
     shareablelinkElement.textContent = shareableURL;

});

downloadPDFButton.addEventListener("click",() => {
    window.print();
});

   window.addEventListener("DOMContentLoaded", () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");

    if(username){
        const savedResumeData = localStorage.getItem(username);

        if(savedResumeData){
        const ResumeData = JSON.parse (savedResumeData);
        (document.getElementById('username') as HTMLInputElement).value=username;
        (document.getElementById('name')as HTMLInputElement).value = ResumeData.name;
        (document.getElementById('email')as HTMLInputElement).value = ResumeData.email;
        (document.getElementById('phone')as HTMLInputElement).value = ResumeData.phone;
        (document.getElementById('address')as HTMLInputElement).value = ResumeData.address;
        (document.getElementById('education')as HTMLInputElement).value = ResumeData.education;
        (document.getElementById('experience')as HTMLInputElement).value = ResumeData.experience;
       (document.getElementById('skills')as HTMLInputElement).value = ResumeData.skills;   
        }
    }
   });


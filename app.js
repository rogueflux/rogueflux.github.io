// Resume data
const dataJson = {
  "name": "Priyanshu Sil",
  "title": "Electronics & Communication Engineer",
  "summary": "Electronics and Communication Engineering graduate with practical experience in embedded systems, VLSI design, and multi-layer PCB development. Passionate about delivering innovative hardware solutions.",
  "skills": ["Embedded System Design", "Control Systems & IoT", "VLSI & FPGA Development", "PCB Design", "Analog & Digital Circuits", "Signal Processing", "Communication Protocols", "Wireless Systems", "Team Leadership"],
  "education": {
    "institution": "Manipal Institute of Technology",
    "degree": "B.Tech in Electronics & Communication Engineering",
    "period": "Sept 2022 – July 2026",
    "highlights": ["Minor: Embedded Systems", "Hands-on RTOS, ARM Cortex MCU, FPGA programming", "Developed Verilog logic blocks and tested on Vivado", "Analog circuit design using Cadence", "DSP practice with MATLAB/Simulink"]
  },
  "experience": [{
    "role": "Electronics Lead",
    "org": "Rugved Systems",
    "period": "Oct 2022 – Sept 2025",
    "details": ["Led embedded projects with Arduino, ESP32, STM32", "Designed multi-layer PCBs optimizing EMI", "Developed wireless systems for RC vehicles with LoRa", "Simulated circuits using Multisim, LTSpice, Proteus", "Negotiated supplier contracts for materials"]
  }, {
    "role": "Summer Intern",
    "org": "Tata Power Communications",
    "period": "May 2024 – July 2024",
    "details": ["Hands-on SCADA and MPLS-TP networks", "Configured FRTUs, modems, secure telephony (IEC61850/104)", "Real-time data acquisition, OTDR testing, fiber splicing", "Antenna installations and substation automation"]
  }],
  "projects": [{
    "title": "WALRUS 2.0",
    "link": "https://github.com/rogueflux",
    "tools": ["LTSpice", "Cadence", "Ansys", "STM32CubeIDE", "ROS2", "Chirpstack"],
    "description": "Autonomous all-terrain bot with custom power distribution, landmine detection GPR, LoRa encrypted comms, GPS dead-reckoning."
  }, {
    "title": "Maritime Surveillance System",
    "link": "https://github.com/rogueflux/Maritime-Surveillance-System",
    "tools": ["Embedded C", "STM32CubeIDE", "YOLO", "DSP Video", "FreeRTOS"],
    "description": "Low-power embedded AI for real-time submarine detection using STM32H750 & lightweight CNN."
  }, {
    "title": "Gunshot Detection FPGA",
    "link": "https://github.com/rogueflux/FPGA-Gunshot-Detection",
    "tools": ["SystemVerilog", "Opamps", "CNN", "DSP Audio"],
    "description": "Real-time gunshot detection on FPGA with FFT and filtering for smart surveillance."
  }],
  "competitions": [{
    "title": "Technoxian Fastest Line Follower 2023",
    "link": "https://github.com/rogueflux/Technoxian-Line-Follower",
    "tools": ["Sensor Calibration", "PID", "KiCad"],
    "description": "Built high-speed line follower with 8-IR array and binary logic handling complex turns."
  }, {
    "title": "BITS Quark RoboRace 2024",
    "link": "https://github.com/rogueflux/BITS-Quark-RoboRace",
    "tools": ["ArduinoIDE", "Tx-Rx Communication"],
    "description": "RC racer using Flysky transmitter and Arduino control systems."
  }, {
    "title": "E-Yantra Balancing Builder Bot 2025",
    "link": "https://github.com/rogueflux",
    "tools": ["CoppeliaSim", "Python", "Control Systems", "PID"],
    "description": "Simulated two-wheeled self-balancing robot for smart city infrastructure."
  }],
  "courses": [{
    "title": "Object-Oriented Programming Specialization",
    "certificate": "https://example.com/oops-certificate"
  }, {
    "title": "MATLAB for Engineers: Experiential Learning",
    "certificate": "https://example.com/matlab-certificate"
  }, {
    "title": "Arm Cortex-M Architecture & Software Development",
    "certificate": "https://example.com/arm-certificate"
  }],
  "contact": {
    "email": "priyanshu.sil.201529@gmail.com",
    "phone": "+91 9619808023",
    "github": "https://github.com/rogueflux",
    "linkedin": "https://www.linkedin.com/in/priyanshu-sil-b0a7551b0"
  }
};

// DOM elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const photoUpload = document.getElementById('photoUpload');
const profileImg = document.getElementById('profileImg');
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  populateContent();
  setupNavigation();
  setupPhotoUpload();
  setupContactForm();
});

// Populate content from JSON data
function populateContent() {
  // Summary
  document.getElementById('summaryText').textContent = dataJson.summary;
  
  // Skills
  const skillsGrid = document.getElementById('skillsGrid');
  dataJson.skills.forEach(skill => {
    const skillTag = document.createElement('div');
    skillTag.className = 'skill-tag';
    skillTag.textContent = skill;
    skillsGrid.appendChild(skillTag);
  });
  
  // Education
  const educationCard = document.getElementById('educationCard');
  educationCard.innerHTML = `
    <h3>${dataJson.education.degree}</h3>
    <div class="institution">${dataJson.education.institution}</div>
    <div class="period">${dataJson.education.period}</div>
    <ul>
      ${dataJson.education.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
    </ul>
  `;
  
  // Experience
  const experienceTimeline = document.getElementById('experienceTimeline');
  dataJson.experience.forEach(exp => {
    const expItem = document.createElement('div');
    expItem.className = 'experience-item';
    expItem.innerHTML = `
      <h3>${exp.role}</h3>
      <div class="org">${exp.org}</div>
      <div class="period">${exp.period}</div>
      <ul>
        ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
      </ul>
    `;
    experienceTimeline.appendChild(expItem);
  });
  
  // Projects
  const projectsGrid = document.getElementById('projectsGrid');
  dataJson.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tools">
        ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
      </div>
      <a href="${project.link}" target="_blank" class="btn btn--secondary">View on GitHub</a>
    `;
    projectsGrid.appendChild(projectCard);
  });
  
  // Competitions
  const competitionsGrid = document.getElementById('competitionsGrid');
  dataJson.competitions.forEach(competition => {
    const competitionCard = document.createElement('div');
    competitionCard.className = 'competition-card';
    competitionCard.innerHTML = `
      <h3>${competition.title}</h3>
      <p>${competition.description}</p>
      <div class="tools">
        ${competition.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
      </div>
      <a href="${competition.link}" target="_blank" class="btn btn--secondary">View on GitHub</a>
    `;
    competitionsGrid.appendChild(competitionCard);
  });
  
  // Courses
  const coursesGrid = document.getElementById('coursesGrid');
  dataJson.courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.innerHTML = `
      <h3>${course.title}</h3>
      <a href="${course.certificate}" target="_blank" class="btn btn--secondary">View Certificate</a>
    `;
    coursesGrid.appendChild(courseCard);
  });
  
  // Contact
  const contactLinks = document.getElementById('contactLinks');
  contactLinks.innerHTML = `
    <a href="mailto:${dataJson.contact.email}" class="contact-link">
      <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m4 4 16 0 0 16-16 0z"></path>
        <path d="m4 4 8 8 8-8"></path>
      </svg>
      ${dataJson.contact.email}
    </a>
    <a href="tel:${dataJson.contact.phone}" class="contact-link">
      <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      ${dataJson.contact.phone}
    </a>
    <a href="${dataJson.contact.github}" target="_blank" class="contact-link">
      <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
      GitHub
    </a>
    <a href="${dataJson.contact.linkedin}" target="_blank" class="contact-link">
      <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
      LinkedIn
    </a>
  `;
}

// Setup navigation
function setupNavigation() {
  // Smooth scroll for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Highlight current section in navigation
  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// Setup photo upload
function setupPhotoUpload() {
  photoUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        profileImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

// Setup contact form
function setupContactForm() {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    try {
      const response = await fetch('https://formspree.io/f/yourcode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        showAlert('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
      } else {
        showAlert('Sorry, there was an error sending your message. Please try again.', 'error');
      }
    } catch (error) {
      showAlert('Sorry, there was an error sending your message. Please try again.', 'error');
    }
  });
}

// Show alert message
function showAlert(message, type) {
  formAlert.textContent = message;
  formAlert.className = `alert alert--${type}`;
  formAlert.style.display = 'block';
  
  setTimeout(() => {
    formAlert.style.display = 'none';
  }, 5000);
}

// Smooth scroll for hero CTA
document.addEventListener('DOMContentLoaded', function() {
  const heroCTA = document.querySelector('.hero-cta a');
  if (heroCTA) {
    heroCTA.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
});

// Add scroll-triggered animations
function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll('.skill-tag, .project-card, .competition-card, .course-card, .experience-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(handleScrollAnimations, 500);
});
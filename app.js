// Portfolio data
const portfolioData = {
  "name": "Priyanshu Sil",
  "occupation": "Final-Year Electronics & Communication Student · Embedded Systems Specialist",
  "location": "Mumbai",
  "summary": "Electronics and Communication Engineering Student with practical experience in embedded systems and VLSI design through academic projects and training at Rugved Systems. Proficient in multi-layer PCB design, signal integrity optimization, and hands-on FPGA and antenna design. Strong project coordination skills with a focus on delivering innovative solutions to real-world challenges.",
  "photo": "images/profile.jpg",
  "skills": [
    "Embedded System Design",
    "Control systems and IoT",
    "VLSI and FPGA Development",
    "PCB Design and Hardware Prototyping",
    "Analog and Digital Circuits Design",
    "Signal Processing and MATLAB/Simulink",
    "Communication Protocols and Wireless Systems",
    "Team Management and Leadership"
  ],
  "education": [
    {
      "degree": "B.Tech in Electronics and Communications",
      "institution": "Manipal Institute of Technology",
      "dates": "Sept 2022 – July 2026",
      "minor": "Embedded Systems",
      "details": ["Led embedded systems projects using Arduino, ESP32, and STM32 (e.g., line follower bot, WALRUS)",
                  "Designed multi-layer PCBs using KiCad, EasyEDA, and Altium, optimizing signal integrity and EMI", 
                  "Developed wireless systems for RC cars and drones with LoRa, ESP32, and UART/I2C/SPI/CAN protocols", 
                  "Simulated electronic circuits using Multisim, LTSpice, and Proteus to enhance design accuracy",
                  "Negotiated contracts with suppliers to secure favorable terms for materials procurement"]
    }
  ],
  "experience": [
    {
      "title": "Electronics Lead",
      "company": "Rugved Systems",
      "location": "Manipal, India",
      "dates": "Oct 2022 – Sept 2025",
      "responsibilities": [
        "Led embedded systems projects using Arduino, ESP32, and STM32",
        "Designed multi-layer PCBs using KiCad, EasyEDA, and Altium",
        "Developed wireless systems for RC cars and drones with LoRa, ESP32, and UART/I2C/SPI/CAN protocols",
        "Simulated electronic circuits using Multisim, LTSpice, and Proteus"
      ]
    },
    {
      "title": "Summer Internship",
      "company": "Tata Power Communications",
      "dates": "May 2024 – July 2024",
      "responsibilities": [
        "Gained hands-on experience with SCADA systems, MPLS-TP networks, L2/L3 switch and firewall setup",
        "Assisted in configuring FRTUs, modems, and secure telephony using IEC61850/104 protocols", 
        "Worked on real-time data acquisition, OTDR testing, fiber splicing, and antenna installations", 
        "Explored substation automation, network management, and cybersecurity practices"
      ]
      "link": "https://drive.google.com/file/d/1WAPkkxEUMpygHyz_JuLy1uS1WMBu-pZj/view",
    }
],
  "projects": [
    {
      "title": "WALRUS 2.0",
      "description": "Autonomous, all-terrain bot with custom Power distribution board and BMS system featuring advanced diagnostic capabilities. STM32-based GPR for landmine detection with Bowtie and Vivaldi antennas.",
      "tools": ["LTSpice", "Cadence", "Ansys", "STM32CubeIDE", "ROS2", "Chirpstack"],
      "github": "https://github.com/rogueflux"
    },
    {
      "title": "Maritime Surveillance System",
      "description": "Designed a low-power, embedded AI system for real-time submarine detection using STM32H750, OV7670 camera, FreeRTOS, and lightweight CNN inference.",
      "tools": ["Embedded C", "STM32CubeIDE", "Yolo Object Detection", "DSP Video Segmentation", "FreeRTOS"],
      "github": "https://github.com/rogueflux/Maritime-Surveillance-System"
    },
    {
      "title": "Gunshot Detection System using FPGA",
      "description": "Implemented a FPGA-based real-time gunshot detection system using DSP techniques (FFT, filtering, thresholding) to identify gunshots from acoustic signals.",
      "tools": ["System Verilog", "Opamps", "CNN", "Digital Signal Processing for Audio"],
      "github": "https://github.com/rogueflux/FPGA-Gunshot-Detection-System"
    },
    {
      "title": "Human-Tracking Drone",
      "description": "Worked on a drone with a built-in Jetson Mini and a RealSense camera, which will deploy a human tracking system using MAVLINK communication protocol.",
      "tools": ["ROS", "ESP32", "LoRa Communications", "I2C", "SPI", "Mission Planner"],
      "github": "https://github.com/rogueflux"
    }
  ],
  "competitions": [
    {
      "title": "Technoxian Fastest Line Follower 2023",
      "description": "Built a high-speed line follower bot using an 8-IR sensor array, Arduino Uno, L293N motor driver, and 11.1V LiPo battery with binary-coded sensor logic.",
      "tools": ["Sensor Calibration", "PID", "KiCad"],
      "github": "https://github.com/rogueflux/Technoxian-Line-Follower"
    },
    {
      "title": "BITS Quark RoboRace 2024",
      "description": "Used Flysky FS-i6X 2.4GHz 6CH AFHDS 2A RC transmitter with FS-iA10B 2.4GHz 10CH receiver controlled by an Arduino Nano.",
      "tools": ["ArduinoIDE", "Tx-Rx Communication"],
      "github": "https://github.com/rogueflux/BITS-Quark-RoboRace"
    },
    {
      "title": "E-Yantra Balancing Builder Bot 2025",
      "description": "Simulated a two-wheeled self-balancing robot in CoppeliaSim using control systems, embedded systems, 3D design, and Python for smart city infrastructure applications.",
      "tools": ["CoppliaSim", "Python", "Control Systems", "PID"],
      "github": "https://github.com/rogueflux"
    }
  ],
  "certifications": [
    {
      "title": "Object-Oriented Programming Specialization",
      "issuer": "University of London",
      "link": "https://coursera.org/share/fbae0c56f65f3ee5f8e8788b8186a87f",
      "description": " Built a console-based cryptocurrency trading platform as the final project, applying object-oriented design principles, file parsing, and control flow using C++"
      "github": "https://github.com/rogueflux/Merkelrex_Crypto_Trading_Platform"
    },
    {
      "title": "MATLAB for Engineers: An Experiential Learning",
      "issuer": "MATLAB",
      "link": "https://www.mathworks.com/training/",
      "description": "Gained hands-on exposure to AppDesigner, IoT, DSP, control systems, embedded coding, and ML workflows through 14 expert-led sessions."
    },
    {
      "title": "Arm Cortex-M Architecture and Software Development Specialization",
      "issuer": "ARM",
      "link": "https://www.arm.com/resources/education/online-courses",
      "description": "Gained in-depth knowledge of Cortex-M architecture, embedded C programming, exception handling, memory-mapped I/O, and low-level firmware development."
    }
  ],
  "contact": {
    "email": "priyanshu.sil.201529@gmail.com",
    "phone": "+91 9619808023",
    "github": "https://github.com/rogueflux",
    "linkedin": "https://www.linkedin.com/in/priyanshu-sil-b0a7551b0/"
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializePhotoUpload();
    populateContent();
    initializeScrollAnimations();
    initializeSmoothScrolling();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from mobile menu
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // Handle smooth scrolling
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active section highlighting
    window.addEventListener('scroll', throttle(highlightActiveSection, 100));
}

// Highlight active section in navigation
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// Photo upload functionality
function initializePhotoUpload() {
    const photoUpload = document.getElementById('photo-upload');
    const photoUploadBtn = document.querySelector('.photo-upload-btn');
    const profilePhoto = document.getElementById('profile-photo');
    const photoPlaceholder = document.querySelector('.photo-placeholder');

    if (photoUploadBtn && photoUpload) {
        photoUploadBtn.addEventListener('click', function() {
            photoUpload.click();
        });
    }

    if (photoUpload) {
        photoUpload.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    if (profilePhoto) {
                        profilePhoto.src = e.target.result;
                        profilePhoto.classList.add('uploaded');
                    }
                    if (photoPlaceholder) {
                        photoPlaceholder.classList.add('hidden');
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Populate content from data
function populateContent() {
    populateSkills();
    populateExperience();
    populateProjects();
    populateCompetitions();
    populateCertifications();
}

// Populate skills section
function populateSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';

    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item fade-in';
        skillItem.textContent = skill;
        skillsGrid.appendChild(skillItem);
    });
}

// Populate experience section
function populateExperience() {
    const experienceGrid = document.getElementById('experience-grid');
    if (!experienceGrid) return;
    
    experienceGrid.innerHTML = '';

    portfolioData.experience.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item fade-in';
        
        const responsibilitiesList = exp.responsibilities.map(resp => 
            `<li>${resp}</li>`
        ).join('');

        experienceItem.innerHTML = `
            <div class="experience-header">
                <h3 class="experience-title">${exp.title}</h3>
                <h4 class="experience-company">${exp.company}</h4>
                ${exp.location ? `<p class="experience-location">${exp.location}</p>` : ''}
                <p class="experience-dates">${exp.dates}</p>
            </div>
            <ul class="experience-responsibilities">
                ${responsibilitiesList}
            </ul>
        `;
        
        experienceGrid.appendChild(experienceItem);
    });
}

// Populate projects section
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';

    portfolioData.projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item fade-in';
        
        const toolsList = project.tools.map(tool => 
            `<span class="tool-tag">${tool}</span>`
        ).join('');

        projectItem.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tools">
                    ${toolsList}
                </div>
            </div>
            <div class="project-footer">
                <a href="${project.github}" class="project-link" target="_blank">
                    View on GitHub
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                    </svg>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectItem);
    });
}

// Populate competitions section
function populateCompetitions() {
    const competitionsGrid = document.getElementById('competitions-grid');
    if (!competitionsGrid) return;
    
    competitionsGrid.innerHTML = '';

    portfolioData.competitions.forEach(competition => {
        const competitionItem = document.createElement('div');
        competitionItem.className = 'competition-item fade-in';
        
        const toolsList = competition.tools.map(tool => 
            `<span class="tool-tag">${tool}</span>`
        ).join('');

        competitionItem.innerHTML = `
            <h3 class="competition-title">${competition.title}</h3>
            <p class="competition-description">${competition.description}</p>
            <div class="competition-tools">
                ${toolsList}
            </div>
            <a href="${competition.github}" class="competition-link" target="_blank">
                View on GitHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
            </a>
        `;
        
        competitionsGrid.appendChild(competitionItem);
    });
}

// Populate certifications section
function populateCertifications() {
    const certificationsList = document.getElementById('certifications-list');
    if (!certificationsList) return;
    
    certificationsList.innerHTML = '';

    portfolioData.certifications.forEach(cert => {
        const certificationItem = document.createElement('div');
        certificationItem.className = 'certification-item fade-in';
        
        certificationItem.innerHTML = `
            <div class="certification-header">
                <div>
                    <h3 class="certification-title">${cert.title}</h3>
                    <p class="certification-issuer">${cert.issuer}</p>
                </div>
                <a href="${cert.link}" class="certification-link" target="_blank">
                    View Certificate
                </a>
            </div>
            <p class="certification-description">${cert.description}</p>
        `;
        
        certificationsList.appendChild(certificationItem);
    });
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Use a timeout to ensure all elements are loaded
    setTimeout(() => {
        const fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach(element => {
            observer.observe(element);
        });
    }, 100);
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    // This is now handled in the navigation initialization
    // Additional smooth scrolling for hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Throttle function for scroll events
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Close mobile menu on resize
    if (window.innerWidth > 768 && hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}, 250));

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (e.key === 'Escape' && hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Handle focus for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
});

// Error handling for image loading
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }
        }, 0);
    });
}

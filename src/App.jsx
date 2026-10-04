import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, MapPin, Phone, Moon, Sun, Award, GraduationCap, 
  Briefcase, Code2, Terminal, Menu, X, Database, Layout, 
  Wrench, Download, Trophy, Cpu
} from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-8.3a5.4 5.4 0 0 0-1.5-3.9 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.6c0 6.8 3 8 6 8.3a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const PORTFOLIO_DATA = {
  header: {
    name: "Rohit Pal",
    titles: ["Frontend Developer", "Data Analyst", "AI & Data Science Enthusiast",],
    location: "Dhanas, Chandigarh, India, 160014",
    email: "rp738331@gmail.com",
    phone: "7860162884",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/rohit-pal-ab87252b3", icon: LinkedinIcon },
      { name: "GitHub", url: "https://github.com/Rohitpal7860", icon: GithubIcon },
      { name: "LeetCode", url: "https://leetcode.com/u/Rohit7860", icon: Code2 },
      { name: "HackerRank", url: "https://hackerrank.com/rohitpal786016", icon: Terminal }
    ]
  },
  about: "B. Tech student specializing in Artificial Intelligence and Data Science with hands-on experience in Data Analysis, Data Science, and MERN Stack development.",
  skills: {
    "Programming Languages": { icon: Terminal, items: ["C++", "Python", "JavaScript"] },
    "Web Technologies": { icon: Layout, items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Tailwind CSS"] },
    "Databases": { icon: Database, items: ["MySQL", "MongoDB"] },
    "Libraries & Tools": { icon: Wrench, items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "REST API", "WebSocket", "Machine Learning"] }
  },
  experience: [
    {
      role: "Data Analysis Intern",
      company: "Saiket Systems",
      duration: "1 Month",
      description: "Analyzed telecom customer data to identify churn patterns and business insights. Developed the Customer Churn Analysis & Prediction project using data cleaning, SQL analysis, customer segmentation, churn prediction, and interactive Power BI dashboards.",
      techStack: ["Excel", "Python", "Pandas", "SQL", "Power BI", "Machine Learning"],
      certificate: "Data analysis internship_Rohit.pdf"
    },
    {
      role: "Industrial Training Program (MERN Stack)",
      company: "ThinkNEXT Technologies Private Limited",
      duration: "11th June 2025 - 04th Aug 2025",
      description: "Successfully completed an intensive industrial training program focused on full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      certificate: "/Rohit pal17420-signed (2).pdf"
    }
  ],
  projects: [
    {
      title: "IoT-Based Plant Monitoring System",
      badge: "1st Position - Science Day 2024",
      description: "Developed a responsive IoT-based web dashboard for real-time plant monitoring and sensor data visualization. Implemented interactive charts and real-time data updates using Chart.js and WebSocket.",
      tech: ["React.js", "Tailwind CSS", "Chart.js", "WebSocket"]
    },
    {
      title: "Tech Quiz_Master",
      badge: "MERN Stack",
      description: "Developed a full-stack online quiz application featuring secure user authentication, quiz management, automated scoring, and result tracking with REST APIs.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"]
    },
    {
      title: "Coders of Delhi",
      badge: "Data Science",
      description: "Analyzed and preprocessed social network data to develop friend and page recommendation systems using collaborative filtering and exploratory data analysis.",
      tech: ["Python", "JSON", "Data Analysis", "Collaborative Filtering"]
    }
  ],
  certifications: [
    {
      title: "The Ultimate Job Ready Data Science Course",
      issuer: "CodeWithHarry",
      date: "May 2026",
      image: "/The_Ultimate_Job_Ready_Data_Science_Course_Certificate.pdf"
    },
    {
      title: "Basics of Data Analytics",
      issuer: "Physics Wallah & Microsoft",
      date: "April 2026",
      image: "/Basic data analytics_certificate(microsoft).pdf"
    },
    {
      title: "Python for Data Science (Elite + Top 5%)",
      issuer: "NPTEL, IIT Madras",
      date: "Jan - Feb 2026",
      image: "/NPTEL_Certificate(Python for data science).pdf"
    },
    {
      title: "[English] Complete 2025 Python Bootcamp: Learn Python from Scratch",
      issuer: "CodeWithHarry",
      date: "Dec 2025",
      image: "/[English]_Complete_2025_Python_Bootcamp__Learn_Python_from_Scratch_Certificate (1).pdf"
    },
    {
      title: "Diploma in Software Application & Data Processing ('O' Level)",
      issuer: "NICT (Govt. of India)",
      date: "Jan 2023",
      image: "/NICT_certificate.jpg"
    }
  ],
  achievements: [
    {
      title: "1st Position - Research for Pioneer (Physics Level)",
      event: "National Science Day 2024, Dept. of Applied Sciences, CEC-CGC",
      date: "Feb 28, 2024",
      image: "/NSD certificate.jpg"
    },
    {
      title: "1st Position - Project Display",
      event: "Eminence 2K24, Dept. of Information Technology, CEC-CGC",
      date: "March 20, 2024",
      image: "/Project display certificate.jpg"
    },
    {
      title: "3rd Position - Technical Treasure Hunt",
      event: "PARIVARTAN 2K23 (National Techno Cultural Fest)",
      date: "2023",
      image: "/Treasure hunt certificate.jpg"
    },
    {
      title: "Competitive Programming Excellence",
      event: "LeetCode & HackerRank",
      date: "Present",
      description: "Solved 250+ problems on LeetCode; earned 5-Star C++ badge on HackerRank."
    }
  ]
};

const PAGES = ['Home', 'About', 'Skills', 'Experience & Projects', 'Certifications & Achievements', 'Contact'];

const useScrollReveal = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.15 });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { domRef, isVisible };
};

const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const { domRef, isVisible } = useScrollReveal();
  
  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out will-change-[opacity,transform] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Typewriter = ({ words, delay = 100 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timeout;
    
    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, delay / 2);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, words, currentWordIndex, delay]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 border-r-2 border-slate-900 dark:border-white pr-1 animate-cursor-blink">
      {currentText || '\u200B'}
    </span>
  );
};

const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-300/25 dark:bg-blue-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[90px] animate-blob"></div>
    <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] bg-purple-300/25 dark:bg-purple-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[90px] animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-indigo-300/25 dark:bg-indigo-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[90px] animate-blob animation-delay-4000"></div>
  </div>
);

const SectionHeading = ({ children }) => (
  <RevealOnScroll>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 relative inline-block">
      {children}
      <div className="absolute -bottom-3 left-0 w-2/3 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full transform origin-left transition-transform duration-500 hover:scale-x-125"></div>
    </h2>
  </RevealOnScroll>
);

const HomePage = ({ setActivePage }) => {
  const { header } = PORTFOLIO_DATA;
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[75vh]">
      <div className="max-w-2xl flex-1 z-10">
        <RevealOnScroll delay={100}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">{header.name}</span>
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 h-10">
            I am a <Typewriter words={header.titles} />
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={300}>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed backdrop-blur-sm bg-white/30 dark:bg-slate-900/30 p-4 rounded-xl border border-white/20 dark:border-slate-800/50 shadow-sm">
            {PORTFOLIO_DATA.about}
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll delay={400}>
          <div className="flex flex-wrap gap-4 mb-10">
            {header.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-700 dark:text-slate-300 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label={social.name}
                >
                  <Icon size={24} />
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 translate-y-2 group-hover:translate-y-0">
                    {social.name}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-900 dark:bg-slate-100 rotate-45"></span>
                  </span>
                </a>
              );
            })}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={500}>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActivePage('Experience & Projects')}
              className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:shadow-blue-500/50"
            >
              View My Work
            </button>
            <a 
              href="/Rohit_Pal_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-xl font-bold shadow-md transition-all hover:-translate-y-1 flex items-center gap-2 group"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>
        </RevealOnScroll>
      </div>

      <div className="flex-1 flex justify-center md:justify-end z-10">
        <RevealOnScroll delay={300}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-70 group-hover:blur-3xl transition-all duration-700 animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-full opacity-20 group-hover:rotate-180 transition-all duration-1000 slow-spin"></div>
            
            <img 
              src="/Rohit_photo.jpg" 
              alt="Rohit Pal" 
              className="relative w-full h-full object-cover rounded-full border-4 border-white/50 dark:border-slate-800/50 backdrop-blur-sm shadow-2xl z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="z-15 relative max-w-7xl mx-auto">
    <SectionHeading>About Me</SectionHeading>
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-center">
      <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
        <RevealOnScroll delay={100}>
          <div className="space-y-6">
            <p>
              I am an undergraduate student pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at Chandigarh Engineering College (CEC), Landran. I currently hold a CGPA of 8.12.
            </p>
            <p>
              My primary focus is on core software engineering fundamentals, full-stack development, and complex algorithmic problem-solving. I am highly active in competitive programming and data analysis, dedicating my time to mastering Data Structures and Algorithms to build highly efficient and scalable technical solutions.
            </p>
            <p>
              I am currently seeking challenging roles in software development and data analytics that will allow me to leverage my analytical problem-solving skills in a fast-paced engineering environment.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <RevealOnScroll delay={200}>
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 rounded-3xl border border-white/50 dark:border-slate-800/60 shadow-xl hover:-translate-y-1 transition-all group">
            <div className="p-3.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform shadow-inner">
              <Code2 size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">250+ Problems</h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Solved across LeetCode & earned 5-Star C++ badge on HackerRank.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 rounded-3xl border border-white/50 dark:border-slate-800/60 shadow-xl hover:-translate-y-1 transition-all group">
            <div className="p-3.5 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform shadow-inner">
              <Cpu size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">Data Analysis</h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Skilled in Python, Pandas, NumPy, SQL, and Power BI dashboards.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 rounded-3xl border border-white/50 dark:border-slate-800/60 shadow-xl hover:-translate-y-1 transition-all group">
            <div className="p-3.5 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform shadow-inner">
              <Trophy size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">1st Position</h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Won National Science Day 2024 & Project Display Eminence at CGC Landran.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={500}>
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 rounded-3xl border border-white/50 dark:border-slate-800/60 shadow-xl hover:-translate-y-1 transition-all group">
            <div className="p-3.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform shadow-inner">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">8.12 CGPA</h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">B.Tech in Artificial Intelligence & Data Science (2023 - 2027).</p>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </div>
);

const SkillsPage = () => (
  <div className="z-10 relative max-w-6xl mx-auto">
    <SectionHeading>Technical Skills</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {Object.entries(PORTFOLIO_DATA.skills).map(([category, { icon: Icon, items }], idx) => (
        <RevealOnScroll key={idx} delay={idx * 150}>
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-white/50 dark:border-slate-800/60 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2.5 text-sm font-bold bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all cursor-default hover:-translate-y-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  </div>
);

const ExperienceProjectsPage = () => (
  <div className="space-y-20 z-10 relative max-w-6xl mx-auto">
    <section>
      <SectionHeading>Professional Experience</SectionHeading>
      <div className="mt-8 space-y-8">
        {PORTFOLIO_DATA.experience.map((exp, index) => (
          <RevealOnScroll key={index} delay={100}>
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/50 dark:border-slate-800/60 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <Briefcase size={24} className="text-blue-600 dark:text-blue-400 hidden sm:block" />
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-bold text-slate-500 dark:text-slate-400 mt-2">
                    {exp.company}
                  </h4>
                </div>
                <span className="text-sm font-black tracking-wide text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 px-5 py-2.5 rounded-full mt-4 md:mt-0 w-fit shadow-inner">
                  {exp.duration}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {exp.techStack.map((tech, i) => (
                  <span key={i} className="text-sm font-bold px-4 py-2 bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-400 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              
              {}
              {exp.certificate && (
                <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                  <a 
                    href={exp.certificate} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 w-fit"
                  >
                    <Award size={18} />
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>

    <section>
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <RevealOnScroll key={index} delay={index * 150}>
            <div className="flex flex-col h-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/50 dark:border-slate-800/60 rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 group">
              <div className="p-8 flex-grow flex flex-col relative z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                    <Code2 size={24} />
                  </div>
                  {project.badge && (
                    <span className="text-xs font-black tracking-wide px-3 py-1.5 bg-amber-100/80 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 rounded-full border border-amber-200/50 dark:border-amber-800/30 text-center max-w-[130px] leading-tight shadow-sm">
                      {project.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-bold tracking-wide text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  </div>
);

const CertificationsAchievementsPage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 z-10 relative max-w-7xl mx-auto">
    <div>
      <SectionHeading>Certifications</SectionHeading>
      <div className="mt-8 space-y-6">
        {PORTFOLIO_DATA.certifications.map((cert, index) => (
          <RevealOnScroll key={index} delay={index * 150}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/5 dark:bg-slate-900/40 border border-white/10 dark:border-slate-800/60 shadow-xl backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 p-2 bg-blue-500/20 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {cert.issuer}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
              
              {cert.image && (
                <a 
                  href={cert.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  View Proof
                </a>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>

    <div>
      <SectionHeading>Key Achievements</SectionHeading>
      <div className="mt-8 space-y-6">
        {PORTFOLIO_DATA.achievements.map((achievement, index) => (
          <RevealOnScroll key={index} delay={index * 150 + 200}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/5 dark:bg-slate-900/40 border border-white/10 dark:border-slate-800/60 shadow-xl backdrop-blur-md hover:border-amber-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 p-2 bg-amber-500/20 text-amber-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                    {achievement.event}
                  </p>
                  {achievement.description && (
                     <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                       {achievement.description}
                     </p>
                  )}
                </div>
              </div>
              
              {achievement.image && (
                <a 
                  href={achievement.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  View Proof
                </a>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-5xl mx-auto z-10 relative">
      <SectionHeading>Get In Touch</SectionHeading>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8">
        <div className="lg:col-span-2 space-y-8">
          <RevealOnScroll delay={100}>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Let's Connect!</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
              </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="space-y-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-white/50 dark:border-slate-800/60 shadow-xl">
              <div className="flex items-center gap-5 text-slate-700 dark:text-slate-300 group">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                  <a href={`mailto:${PORTFOLIO_DATA.header.email}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {PORTFOLIO_DATA.header.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 text-slate-700 dark:text-slate-300 group">
                <div className="p-4 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                  <a href={`tel:${PORTFOLIO_DATA.header.phone}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    +91 {PORTFOLIO_DATA.header.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 text-slate-700 dark:text-slate-300 group">
                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{PORTFOLIO_DATA.header.location}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        
        <div className="lg:col-span-3">
          <RevealOnScroll delay={300}>
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/50 dark:border-slate-800/60 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all dark:text-white shadow-inner backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all dark:text-white shadow-inner backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none dark:text-white shadow-inner backdrop-blur-sm"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className={`w-full py-4 px-8 rounded-2xl font-black text-lg shadow-lg transition-all duration-300 flex justify-center items-center gap-3 ${
                    submitted 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/30' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:-translate-y-1 shadow-blue-500/30 hover:shadow-blue-500/50'
                  }`}
                >
                  {submitted ? 'Message Sent Successfully! ✨' : 'Send Message 🚀'}
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ activePage, setActivePage, darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50 shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div 
          className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleNavClick('Home')}
        >
          RP.
        </div>
        
        <div className="hidden lg:flex space-x-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/30 dark:border-slate-800/50 shadow-sm">
          {PAGES.map((page) => (
            <button 
              key={page}
              onClick={() => handleNavClick(page)}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                activePage === page 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/40 dark:border-slate-800/50 shadow-sm hover:shadow-md hover:scale-110 transition-all text-slate-700 dark:text-slate-300"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-indigo-600" />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/40 dark:border-slate-800/50 shadow-sm text-slate-700 dark:text-slate-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/20 dark:border-slate-800/50 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl animate-fade-in-up">
          {PAGES.map((page) => (
            <button 
              key={page}
              onClick={() => handleNavClick(page)}
              className={`text-left px-5 py-4 rounded-xl font-bold transition-all ${
                activePage === page 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="relative z-10 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm py-8 border-t border-slate-200/50 dark:border-slate-800/50 mt-auto">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between text-slate-600 dark:text-slate-400 font-medium">
      <p>&copy; {new Date().getFullYear()} Rohit Pal| All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        {PORTFOLIO_DATA.header.socials.map((social, idx) => (
          <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all">
            {social.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderPage = () => {
    switch(activePage) {
      case 'Home': return <HomePage setActivePage={setActivePage} />;
      case 'About': return <AboutPage />;
      case 'Skills': return <SkillsPage />;
      case 'Experience & Projects': return <ExperienceProjectsPage />;
      case 'Certifications & Achievements': return <CertificationsAchievementsPage />;
      case 'Contact': return <ContactPage />;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-500 selection:bg-blue-500/30 relative overflow-hidden">
      
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes cursor-blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: inherit; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-blob {
          animation: blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-cursor-blink {
          animation: cursor-blink 1s step-end infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }
        .slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
      
      <AnimatedBackground />
      
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      
      <main className="flex-grow pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}
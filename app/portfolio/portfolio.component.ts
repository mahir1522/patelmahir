import {Component, OnInit} from '@angular/core';
import {Projects} from "@angular/cli/lib/config/workspace-schema";
import {NgModel} from "@angular/forms";
import {ModelComponent} from "../model/model.component";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {SEOService} from "../services/seo.service";

interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  technologies: string[];
  sourceCodeLink: string;
}


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ModelComponent,
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent{

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    const title = 'Portfolio - Patel Mahir';
    const description = 'Projects and skills of Patel Mahir.';
    const keywords = 'Projects, Skills, Patel Mahir, Portfolio, Software Developer, Full-stack Developer, Web Developer';

    this.seoService.updateTitle(title);
    this.seoService.updateDescription(description);
    this.seoService.updateKeywords(keywords);
    this.seoService.updateMetaTags([
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: 'src/assets/image/logo.png' },
      { name: 'og:url', content: 'http://patelmahir.com/portfolio' },
    ]);
  }


  projects: Project[] = [
    {
      title: 'VoyageVerse',
      shortDescription: 'VoyageVerse is an Angular-based mobile app for travel enthusiasts to share photos and videos of their adventures. Similar to Instagram, it securely stores and retrieves user information, connecting a global community of explorers.',
      longDescription: 'VoyageVerse is a cutting-edge Angular-based mobile application designed to ignite the passion for travel in users worldwide. Similar in functionality to Instagram, VoyageVerse enables users to seamlessly share their travel experiences through photos and videos. Whether exploring exotic destinations or discovering hidden gems, users can create personalized posts that capture the essence of their journeys. The application securely stores user information in a robust database, ensuring privacy while facilitating effortless retrieval of travel memories. With intuitive features and a user-friendly interface, VoyageVerse fosters a global community of explorers who inspire and connect through their shared love of travel.',
      image: './assets/image/project1.png',
      technologies: ['Angular', 'TypeScript', 'CSS', 'BootStrap', 'MongoDB/IndexDB'],
      sourceCodeLink: 'https://github.com/mahir1522/VoyageVerse',
    },
    {
      title: 'Student Management System',
      shortDescription: 'Student Management System is a .NET C# ASP-based Student Management System that tracks student enrollments and manages professor interactions. It simplifies academic administration by sending enrollment notifications via email and organizing course details efficiently.',
      longDescription: 'Student Management System represents the pinnacle of academic administration efficiency, built on the .NET C# ASP framework using MVC architecture. This comprehensive Student Management System empowers educational institutions to streamline operations seamlessly. From managing student enrollments and course registrations to facilitating communication between students and professors, EduManage simplifies every aspect of academic life. Administrators can effortlessly track student progress, allocate resources, and send automated enrollment notifications via email. With its intuitive interface and robust database management, EduManage ensures a smooth and organized educational experience for all stakeholders, enhancing learning outcomes and administrative effectiveness.',
      image: './assets/image/project2.png',
      technologies: ['C#', 'ASP.NET', 'MSSQL', 'Entity framework'],
      sourceCodeLink: 'https://github.com/mahir1522/StudentManagementSystem'
    },
    {
      title: 'Run Mario Run',
      shortDescription: '"Run Mario Run" is an endless runner game developed with the C# MonoGame framework. Guide Mario through an infinite journey, dodging obstacles and earning high scores with simple, intuitive controls for endless fun.',
      longDescription: 'Elevate your gaming experience with "Run Mario Run," a thrilling endless runner that offers endless entertainment and challenges. Dive into the vibrant world of Mario as you embark on an infinite adventure, refining your skills with each run. Suitable for players of all ages, "Run Mario Run" provides wholesome entertainment for the whole family, encouraging shared enjoyment and friendly competition. With stress-free gameplay and simple controls, players can escape into Mario\'s world and enjoy a brief respite from daily stresses while honing their reflexes and strategic thinking. But the excitement doesn\'t end there - we\'re planning to implement a coin system that will allow players to purchase character upgrades and design their base, adding a new layer of customization and personalization to the game. Experience the nostalgic appeal of classic platformer gameplay with a modern twist, and get ready to embark on an unforgettable journey with Mario in "Run Mario Run."',
      image: './assets/image/project3.png',
      technologies: ['C#', 'Monogame', 'OOPs'],
      sourceCodeLink: 'https://github.com/mahir1522/RunMarioRun'
    },
    {
      title: 'Health Tracker',
      shortDescription: 'HealthTracker is a .NET ASP-based application that allows users to input their medical information. It analyzes the data to determine if users have high, normal, or low blood pressure, providing essential health insights.',
      longDescription: 'HealthTracker is a transformative .NET ASP-based application designed to empower users in monitoring and analyzing their health data effectively. This innovative platform allows users to input vital medical information, which is then analyzed to provide insightful feedback on their health status, including blood pressure levels. By leveraging advanced analytics and intuitive user interfaces, HealthTracker not only helps users understand their current health conditions but also encourages proactive health management. With its secure database handling and customizable health insights, HealthTracker serves as a reliable companion in promoting personal well-being and making informed health-related decisions.',
      image: './assets/image/project4.png',
      technologies: ['C#', 'MVC', 'DOT-NET', 'SQL Server'],
      sourceCodeLink: 'https://github.com/mahir1522/.NET-Core-Health-Tracker'
    },
    {
      title: 'Talkactive Genius',
      shortDescription: 'TalkactiveGenius is a simple voice assistant application built using Python. It allows users to interact via voice commands and leverages OpenAI\'s GPT-3.5 model for natural language processing.',
      longDescription: 'TalkactiveGenius is a simple yet powerful voice assistant application built using Python, designed to enable users to interact through voice commands and leverage OpenAI\'s GPT-3.5 model for natural language understanding and generation. The application features voice interaction, speech recognition via the SpeechRecognition library, and text-to-speech capabilities using the Pyttsx3 library. By integrating OpenAI\'s API, TalkactiveGenius provides intelligent and contextually relevant responses to user queries. The assistant continuously listens for input, converts speech to text, handles errors, and generates appropriate responses that are then converted back to speech. Users need to install the required libraries (openai, pyttsx3, speech_recognition, pyaudio) and add their OpenAI API key. Future improvements aim to enhance natural language understanding, integrate with external APIs, and implement robust error handling, making TalkactiveGenius a versatile and interactive tool for various applications.',
      image: './assets/image/project5.png',
      technologies: ['pyaudio', 'Speech_recognition', 'pyttsx3', 'OpenAI'],
      sourceCodeLink: 'https://github.com/mahir1522/TalkactiveGenius'
    },
    {
      title: 'AI Interview taker',
      shortDescription: 'Interview Taker is a Python application that takes a job description as input, generates relevant questions using AI, asks these questions in natural language, records the user\'s spoken answers, and analyzes the answers to provide feedback.',
      longDescription: 'Interview Taker is a Python-based application designed to streamline the interview process by taking a job description as input and generating relevant interview questions using AI. The application asks these questions in natural language and records the user\'s spoken answers using the SpeechRecognition library. After the interview, it analyzes the recorded answers and provides detailed feedback. By integrating with Google Gemini for content generation and utilizing advanced speech-to-text capabilities, Interview Taker enhances the interview experience for both interviewers and interviewees. Users need to install the required libraries, configure their API keys, and run the application to start conducting interviews. Future enhancements aim to improve answer analysis, integrate with additional services, and refine the user interface, making Interview Taker a powerful tool for efficient and insightful interviews.',
      image: './assets/image/project6.png',
      technologies: ['Flask', 'Django', 'Python', 'Google Gemini'],
      sourceCodeLink: 'https://github.com/mahir1522/interviewtaker'
    },
    {
      title: 'Drive-thru Order taker',
      shortDescription: 'The Drive-Thru Ordering System is a Python application that streamlines the order-taking process using voice commands and a graphical interface. Built with Tkinter, it uses SpeechRecognition and Spacy for natural language processing, and Pyttsx3 for audio feedback. The system can manage menus from Excel files or images, updating orders in real-time and providing a seamless user experience for drive-thru operations.',
      longDescription: 'The Drive-Thru Ordering System is a comprehensive Python application designed to streamline the drive-thru order-taking process by leveraging advanced technologies. It features a user-friendly graphical interface built with Tkinter, allowing customers to place orders using voice commands via the SpeechRecognition library. The system employs Spacy for natural language processing to accurately identify items and quantities, and provides responsive audio feedback using Pyttsx3. Menu management is flexible, supporting input from Excel files through Pandas and Openpyxl, as well as image-based menus using Pytesseract and Pillow. The application dynamically updates and manages orders in real-time, displaying itemized costs and totals, and allowing for easy confirmation or cancellation. This project integrates various technologies, including Pandas, SpeechRecognition, Pyttsx3, Pytesseract, and Tkinter, showcasing a robust solution for enhancing drive-thru operations.',
      image: './assets/image/project7.png',
      technologies: ['Spacy', 'MongoDB', 'Python', 'Tkinter' , 'SpeechRecognition'],
      sourceCodeLink: 'https://github.com/mahir1522/drivethruordertaker'
    }

  ];

  selectedProject: Project | null = null;
  isModelVisible = false;


  openModal(project: Project){
    this.selectedProject = project;
    this.isModelVisible = true;
  }
  closeModal(){
    this.isModelVisible = false;
    this.selectedProject = null;
  }


  onMouseEnter(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    card.style.boxShadow = '10px 10px 20px rgba(0, 0, 0, 0.3)';
  }

  onMouseLeave(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    card.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
  }

  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const shadowX = (x / rect.width) * 30 - 15;
    const shadowY = (y / rect.height) * 30 - 15;
    card.style.boxShadow = `${shadowX}px ${shadowY}px 15px rgba(0, 0, 0, 0.3)`;
  }




}

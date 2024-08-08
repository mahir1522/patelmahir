import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SEOService} from "../services/seo.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private seoService:SEOService) {}

  ngOnInit(): void {
    const title = 'Patel Mahir - Software Developer Portfolio';
    const description = 'Explore Patel Mahir portfolio showcasing skills skills, projects and experience in software development. Learn more about this expertise here.';
    const keywords = 'Home, Patel Mahir, Portfolio, Software Developer, Full-stack Developer, Web Developer';

    this.seoService.updateTitle(title);
    this.seoService.updateDescription(description);
    this.seoService.updateKeywords(keywords);
    this.seoService.updateMetaTags([
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: 'src/assets/image/logo.png' },
      { name: 'og:url', content: 'http://patelmahir.com/home' },
    ]);
  }


}

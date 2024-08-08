import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {SEOService} from "../services/seo.service";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    const title = 'About - Patel Mahir';
    const description = 'Learn more about Patel Mahir, his background, and experience.';
    const keywords = 'About, Patel Mahir, Biography, Background, Experience, Patel Mahir, Portfolio, Software Developer, Full-stack Developer, Web Developer';

    this.seoService.updateTitle(title);
    this.seoService.updateDescription(description);
    this.seoService.updateKeywords(keywords);
    this.seoService.updateMetaTags([
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: 'src/assets/image/logo.png' },
      { name: 'og:url', content: 'http://patelmahir.com/about' },
    ]);
  }
}

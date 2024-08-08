import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {SEOService} from "./services/seo.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Patel Mahir';


  constructor(private router: Router, private seoService: SEOService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.root.firstChild;
        if (currentRoute && currentRoute.data) {
          const { title, description, keywords } = currentRoute.data;
          if (title) {
            this.seoService.updateTitle(title);
          }
          if (description) {
            this.seoService.updateDescription(description);
          }
          if (keywords) {
            this.seoService.updateKeywords(keywords);
          }
        }
      }
    });
  }
}

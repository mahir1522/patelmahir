import { Injectable } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(private meta:Meta, private title:Title) { }

  updateTitle(title:string){
    this.title.setTitle(title);
  }
  updateDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }

  updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  updateMetaTags(tags: { name: string, content: string }[]) {
    tags.forEach(tag => this.meta.updateTag(tag));
  }


}

import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import {NgIf} from "@angular/common";
import {SEOService} from "../services/seo.service";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  success: boolean | undefined;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder , private seoService:SEOService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      thoughts: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const title = 'Contact - Patel Mahir';
    const description = 'Get in touch with Patel Mahir.';
    const keywords = 'Contact, Get in touch, Patel Mahir, Portfolio, Software Developer, Full-stack Developer, Web Developer';

    this.seoService.updateTitle(title);
    this.seoService.updateDescription(description);
    this.seoService.updateKeywords(keywords);
    this.seoService.updateMetaTags([
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: 'src/assets/image/logo.png' },
      { name: 'og:url', content: 'http://patelmahir.com/contact' },
    ]);
  }



  onSubmit(){
    if(this.contactForm.valid) {
      const serviceID = 'service_ynv0pxk'
      const templateID = 'template_cxghwvj'
      const userID = 'UbMezX2-YPP-I776w'

      emailjs.sendForm(serviceID, templateID, '#contact-form', userID)
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.success = true;
          this.contactForm.reset();
        }, (error) => {
          console.error(error.text);
          alert('There was an error sending your message. Please try again later.');
        });
    }
  }
}

import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ServiceComponent} from "./service/service.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  { path:"", component: HomeComponent},
  { path:"home", component:HomeComponent},
  { path:"about", component: AboutComponent},
  { path:"service", component: ServiceComponent},
  { path:"contact" , component: ContactComponent},
  { path:"portfolio", component: PortfolioComponent}
];

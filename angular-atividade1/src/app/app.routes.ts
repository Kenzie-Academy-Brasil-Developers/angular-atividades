import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';

export const routes: Routes = [
    { path: "", component: HomepageComponent },
    { path: "sobre", component: AboutpageComponent },
    { path: "contato", component: ContactpageComponent }
];

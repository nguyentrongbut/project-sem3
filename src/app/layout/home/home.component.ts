import { Component } from '@angular/core';
import { HomeSearchFilterComponent } from './home-search-filter/home-search-filter.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeProjectComponent } from './home-project/home-project.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSearchFilterComponent, HomeAboutComponent, HomeProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

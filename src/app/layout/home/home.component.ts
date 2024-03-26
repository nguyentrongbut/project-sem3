import { Component } from '@angular/core';
import { HomeSearchFilterComponent } from './home-search-filter/home-search-filter.component';
import { HomeAboutComponent } from './home-about/home-about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSearchFilterComponent, HomeAboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

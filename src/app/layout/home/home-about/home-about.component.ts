import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.css'
})
export class HomeAboutComponent {

}

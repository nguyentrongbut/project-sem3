import { Component} from '@angular/core'
import { ButtonComponent } from '../../../components/button/button.component'
import { RouterLink } from '@angular/router'
import { AboutComponentComponent } from '../../../components/about-component/about-component.component'

@Component({
    selector: 'app-home-about',
    standalone: true,
    imports: [ButtonComponent, RouterLink, AboutComponentComponent],
    templateUrl: './home-about.component.html',
    styleUrl: './home-about.component.css',

})
export class HomeAboutComponent {}

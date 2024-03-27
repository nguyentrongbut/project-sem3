import { Routes } from '@angular/router'

import { HomeComponent } from './layout/home/home.component'
import { AboutComponent } from './layout/about/about.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
]

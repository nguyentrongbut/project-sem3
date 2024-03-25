import { Routes } from '@angular/router'
import { HomeSearchComponent } from './home-search/home-search.component'
import { HomeComponent } from './libs/home/home.component'
import { LoginComponent } from './libs/login/login.component'
import { RegisterComponent } from './libs/register/register.component'
import { NewsComponent } from './libs/news/news.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'news', component: NewsComponent},
]

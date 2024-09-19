import { Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { NewsDetailComponent } from './views/components/news-detail/news-detail.component';
import { NewsComponent } from './views/components/news/news.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'news/:id',
        component: NewsDetailComponent
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

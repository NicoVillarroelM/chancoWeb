import { Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { NewsDetailComponent } from './views/components/news-detail/news-detail.component';
import { NewsComponent } from './views/components/news/news.component';
import { HistoryComponent } from './views/components/history/history.component';
import { PladecoComponent } from './views/components/pladeco/pladeco.component';
import { AlcaldeComponent } from './views/components/alcalde/alcalde.component';
import { ConcejoComponent } from './views/components/concejo/concejo.component';
import { OrganigramaComponent } from './views/components/organigrama/organigrama.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'news/:id',
        component: NewsDetailComponent
    },
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'pladeco',
        component: PladecoComponent
    },
    {
        path: 'alcalde',
        component: AlcaldeComponent
    },
    {
        path: 'concejo',
        component: ConcejoComponent
    },
    {
        path: 'organigrama',
        component: OrganigramaComponent
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

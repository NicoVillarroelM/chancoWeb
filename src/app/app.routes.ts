import { Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { NewsDetailComponent } from './views/components/news-detail/news-detail.component';
import { NewsComponent } from './views/components/news/news.component';
import { HistoryComponent } from './views/components/history/history.component';
import { PladecoComponent } from './views/components/pladeco/pladeco.component';
import { AlcaldeComponent } from './views/components/alcalde/alcalde.component';
import { FlowChartComponent } from './views/components/flow-chart/flow-chart.component';
import { CouncilComponent } from './views/components/council/council.component';

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
        component: CouncilComponent
    },
    {
        path: 'organigrama',
        component: FlowChartComponent
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

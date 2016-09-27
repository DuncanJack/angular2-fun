import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentsComponent } from './contents.component';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';
import { Page3Component } from './page3.component';
import { Page4Component } from './page4.component';
import { Page5Component } from './page5.component';
import { Page6Component } from './page6.component';
import { Page7Component } from './page7.component';
import { Page8Component } from './page8.component';
import { Page9Component } from './page9.component';

const appRoutes = [
    {
        path: '',
        redirectTo: '/contents',
        pathMatch: 'full'
    },
    {
        path: 'contents',
        component: ContentsComponent
    },
    {
        path: 'page1',
        component: Page1Component
    },
    {
        path: 'page2/:name',
        component: Page2Component
    },
    {
        path: 'page3',
        component: Page3Component
    },
    {
        path: 'page4',
        component: Page4Component
    },
    {
        path: 'page5',
        component: Page5Component
    },
    {
        path: 'page6',
        component: Page6Component
    },
    {
        path: 'page7',
        component: Page7Component
    },
    {
        path: 'page8',
        component: Page8Component
    },
    {
        path: 'page9',
        component: Page9Component
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
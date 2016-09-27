import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';

const appRoutes = [
    {
        path: '',
        redirectTo: '/page1',
        pathMatch: 'full'
    },
    {
        path: 'page1',
        component: Page1Component
    },
    {
        path: 'page2',
        component: Page2Component
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ItemComponent } from './pages/item/item.component';


const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent},
    { path: 'acerca-de', component: AcercaDeComponent},
    { path: 'item', component: ItemComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}
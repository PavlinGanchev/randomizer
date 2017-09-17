import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { WinnersComponent } from '../winners/winners.component';
import { WinnerComponent } from '../winners/winner/winner.component';
import { ErrorComponent } from '../error/error.component';
import { HomeComponent } from '../home/home.component';

const appRoutes : Routes =[
	{path: '', component: HomeComponent, pathMatch: 'full'},
	{path: 'winners', component: WinnersComponent, children: [
		{path: ':id', component: WinnerComponent},
	]},
	{path: '404', component: ErrorComponent, data: { mesage: 'Woops page not found!'}},
	{path: '**', redirectTo: '404'},
];

@NgModule({
imports:[ RouterModule.forRoot(appRoutes) ],
exports: [ RouterModule ]
})
export class AppRoutes{

}
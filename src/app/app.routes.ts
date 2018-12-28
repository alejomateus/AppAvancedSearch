import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'home', component: SearchComponent },
    { path: '**', component: SearchComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class APPROUTING {}

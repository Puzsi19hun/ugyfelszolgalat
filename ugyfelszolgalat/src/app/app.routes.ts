import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { HibabejelentoComponent } from './hibabejelento/hibabejelento.component';
import { DiagramComponent } from './diagram/diagram.component';
import { HibalistaComponent } from './hibalista/hibalista.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    
    {path: '', component: AppComponent},
    {path: 'kapcsolat', component: KapcsolatComponent},
    {path: 'diagram', component: DiagramComponent},
    {path: 'hibabejelento', component: HibabejelentoComponent},
    {path: 'hibalista', component: HibalistaComponent}
];

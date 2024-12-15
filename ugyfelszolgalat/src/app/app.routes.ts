import { Routes } from '@angular/router';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { HibabejelentoComponent } from './hibabejelento/hibabejelento.component';
import { DiagramComponent } from './diagram/diagram.component';
import { HibalistaComponent } from './hibalista/hibalista.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'kapcsolat', component: KapcsolatComponent},
    {path: 'diagram', component: DiagramComponent},
    {path: 'hibabejelento', component: HibabejelentoComponent},
    {path: 'hibalista', component: HibalistaComponent}
];

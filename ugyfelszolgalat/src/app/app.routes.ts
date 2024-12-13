import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { HibabejelentoComponent } from './hibabejelento/hibabejelento.component';
import { DiagramComponent } from './diagram/diagram.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'kapcsolat', component: KapcsolatComponent},
    {path: 'diagram', component: DiagramComponent},
    {path: 'hibabejelento', component: HibabejelentoComponent}
];

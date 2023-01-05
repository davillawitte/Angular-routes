import { DashboardComponent } from './Dashboard/Dashboard.component';
import { FilhodarshboardComponent } from './filhodarshboard/filhodarshboard.component';
import { TurmahorarioComponent } from './turmahorario/turmahorario.component';
import { FilhoturmaComponent } from './filhoturma/filhoturma.component';
import { TurmaComponent } from './turma/turma.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent, children: [
    {path: 'filhodashboard', component:FilhodarshboardComponent},
    {path:'', component: AppComponent},
    {path: 'turmahorario', component: TurmahorarioComponent},
    {path: 'turma', component: TurmaComponent, children: [
      {path: 'filhoturma', component: FilhoturmaComponent}
  ]
  },
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

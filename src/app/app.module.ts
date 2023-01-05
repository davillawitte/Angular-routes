import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmaComponent } from './turma/turma.component';
import { FilhoturmaComponent } from './filhoturma/filhoturma.component';
import { TurmahorarioComponent } from './turmahorario/turmahorario.component';
import { FilhoturmahorarioComponent } from './filhoturmahorario/filhoturmahorario.component';
import { FilhodarshboardComponent } from './filhodarshboard/filhodarshboard.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';

@NgModule({
  declarations: [						
    AppComponent,
      TurmaComponent,
      FilhoturmaComponent,
      TurmahorarioComponent,
      FilhoturmahorarioComponent,
      FilhodarshboardComponent,
      DashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

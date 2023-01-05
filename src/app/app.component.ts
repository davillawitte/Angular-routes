import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routes';

  constructor(private router: Router) {}

vaiTurmaHorario() {
  this.router.navigate(['dashboard/turmahorario']);
}

vaiTurma() {
  this.router.navigate(['/dashboard/turma']);
}

vaiHome() {
  this.router.navigate(['']);
}

vaiFilhoTurma() {
  this.router.navigate(['/dashboard/turma/filhoturma']);
}

}

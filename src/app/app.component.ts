import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  do(arg:any){
    console.log(1)
  }
  do1() {
    console.log(2);
  }
}

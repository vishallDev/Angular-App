import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  demo:boolean =true;
  title = 'developer_vishal';

  ngOnInit(): void {
    setTimeout(() => {
      this.demo=false;
    }, 2000);
  }
}

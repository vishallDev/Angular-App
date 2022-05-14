import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  demo:boolean =true;
  title = 'developer_vishal';

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.demo=false;

    }, 2000);
  }
}

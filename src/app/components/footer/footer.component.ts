import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dateyear: any;
  social: any = [
    {
      "name": "Facebook",
      "link": "https://facebook.com/WebDevVishal",
      "icon" : "fa fa-facebook"
    },
    {
      "name": "Twitter",
      "link": "https://twitter.com/_smart_ghost",
      "icon" : "fa fa-twitter"
    },
    {
      "name": "Instagram",
      "link": "https://instagram.com/vish_all_",
      "icon" : "fa fa-instagram"
    },
    {
      "name": "LinkedIn",
      "link": "https://linkedin.com/in/vishall-Developer/",
      "icon" : "fa fa-linkedin "
    },
    {
      "name": "Github",
      "link": "https://github.com/webdev-vishal",
      "icon" : "fa fa-github"
    },
    {
      "name": "Whatsapp",
      "link": "https://wa.me/<+918421501975>",
      "icon" : "fa fa-whatsapp"
    },
    {
      "name": "Email",
      "link": "vishalldev01@gmail.com",
      "icon" : "fa fa-envelope "
    }
  ]
  constructor() { }

  ngOnInit(): void {
    const d = new Date();
    this.dateyear = d.getFullYear();
  }

}

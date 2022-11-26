import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-block',
  templateUrl: './intro-block.component.html',
  styleUrls: ['./intro-block.component.scss']
})
export class IntroBlockComponent implements OnInit {
  title:any = "Who Am I ?"
  body:any= "Hi i am Vishal Bhosale. Web Developer from pune.I have a passion for web development and to create websites Which Will Be fully Responsive for Web And Mobile Devices.i believe in designing the site simple and clean rather than making it complex And convey The message That You want to send.i can create website which can run across all devices with latest technology available.please feel free to surf my projects which i created till now.i am still in learning phase improving my skills day by day. Seeking for a challenging position with a creative work environment to enhance expertise in web development and web design that allows for implementation of communication, service, and design skills to the	programming essentials.";
  constructor() { }

  ngOnInit(): void {
  }

}

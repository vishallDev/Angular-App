import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education = [
    {
      year: '1997',
      content: '<p>I was born in the city <strong>Pune</strong> in the year <strong>1997</strong>.</p>',
      bg_url: 'https://images.pexels.com/photos/1288526/pexels-photo-1288526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2012-2013',
      content: '<p>I Completed my highschool from <strong>S.M.V.</strong> school pune.</p>',
      bg_url: 'https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2013-2016',
      content: "<p>I took admission to <strong>Engineering</strong> but somehow failed. i never had any interest in engineering hence i <strong>dropped off</strong> in last year.that was the lowest i could've even hit in my life. </p>",
      bg_url: 'https://images.pexels.com/photos/6152694/pexels-photo-6152694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2017-2020',
      content: "<p>Finally Decided to pursue what interests me. took admission to <strong>BCA</strong> to learn programming. passed out with good grades and lot of fascinating knowledge and a long way to go ahead</p>",
      bg_url: 'https://images.pexels.com/photos/5380598/pexels-photo-5380598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2020-2021',
      content: "<p><strong>Pandemic happened!!!</strong> whole world was home qurantine. in between i worked on <strong>polishing my skills</strong> did alot of different languages certification understood <strong>future</strong> of every language i learnt and <strong>field of work</strong> and in which way i should go ahead. </p>",
      bg_url: 'https://images.pexels.com/photos/4069293/pexels-photo-4069293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2021-Present',
      content: "<p>Decided to be a Full fleged <strong>Web Developer</strong> and <strong>Freelancer</strong>. but you cant climb the mountain in a day. so i decided to take small steps started searching Job as a <strong>Front End Developer</strong>. after alot of rejections and some insults i landed up my first job in a startup called <strong>Spriio</strong> in February 2021.</p>",
      bg_url: 'https://images.pexels.com/photos/4112849/pexels-photo-4112849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

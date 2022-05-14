import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-cards',
  templateUrl: './skill-cards.component.html',
  styleUrls: ['./skill-cards.component.scss']
})
export class SkillCardsComponent implements OnInit {
  ctaBlock: any = [
    {
      title: 'Front End Developer',
      info: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser, I design and implement websites for companies using the WordPress creation tool. They are responsible for both front-end and back-end development.',
      img: 'assets/card-block.svg',
      language_title: 'Languages I speak:',
      tools_title: 'Tools I use:',
      extra_lang: 'Skills i am good at:',
      extra_tools: 'Extra knowledge of:',
      languages: [
        { title: 'HTML' },
        { title: 'PHP' },
        { title: 'Wordpress' },
        { title: 'JavaScript' },
        { title: 'CSS' },
        { title: 'Sass' },
        { title: 'Pug' },
        { title: 'SQL' },
        { title: 'NOSQL' },
        { title: 'Angular' },
        { title: 'jQuery' }
      ],
      tools: [
        { title: 'Bootstrap' },
        { title: 'Wordpress' },
        { title: 'Codepen' },
        { title: 'Github' },
        { title: 'Bitbucket' },
        { title: 'Git' },
        { title: 'Gulp' },
        { title: 'Bower' },
        { title: 'NPM' },
        { title: 'Materialize' },
        { title: 'Sketch' },
        { title: 'Photoshop' }
      ],
      extra_languages: [
        { title: 'Monitoring the performance of the live website' },
        { title: 'Generating WordPress themes and plugins.' },
        { title: 'Creating the website architecture.' },
        { title: 'Designing and building the website front-end.' },
        { title: 'Meeting with clients to discuss website design and function.' }
      ],
      e_tools: [
        { title: 'Elementor' },
        { title: 'Woocommerce' },
        { title: 'Astra' },
        { title: 'Media Query' },
        { title: 'JScript' },
        { title: 'WPBakery Page Builder' },
        { title: 'good experience in customizations.' },
        { title: 'Design focused with highly customizations' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

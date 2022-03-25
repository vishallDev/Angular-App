import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-block',
  templateUrl: './cta-block.component.html',
  styleUrls: ['./cta-block.component.scss']
})
export class CtaBlockComponent implements OnInit {
  ctaBlock: any = [
    {
      title: 'Front-end Developer',
      info: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
      img: 'assets/undraw_static_website_re_x70h.svg',
      language_title: 'Languages I speak:',
      tools_title: 'Tools I use:',
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
      ]
    },
    {
      title: 'Wordpress/Shopify Developer',
      info: 'I design and implement websites for companies using the WordPress creation tool. They are responsible for both front-end and back-end development,',
      img: 'assets/undraw_control_panel_re_y3ar.svg',
      language_title: 'Skills i am good at:',
      tools_title: 'Extra knowledge of:',
      languages: [
        { title: 'Monitoring the performance of the live website' },
        { title: 'Generating WordPress themes and plugins.' },
        { title: 'Creating the website architecture.' },
        { title: 'Designing and building the website front-end.' },
        { title: 'Meeting with clients to discuss website design and function.' }
      ],
      tools: [
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

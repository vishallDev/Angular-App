import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-skill',
  templateUrl: './progress-skill.component.html',
  styleUrls: ['./progress-skill.component.scss']
})
export class ProgressSkillComponent implements OnInit,AfterViewInit {
  trigger:boolean;
  @ViewChild('testDiv', {static: false}) private testDiv: ElementRef<HTMLDivElement>;
  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.testDiv){
      const rect = this.testDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if(!topShown && !bottomShown){
        this.trigger = true;
      }
      console.log(this.trigger);
      
    }
  }
  skillsLevel: any= [
    {
      title:'Web Development(HTML,CSS,JS)',
      percentage:92
    },
    {
      title:'Wordpress,PHP',
      percentage:80
    },
    {
      title:'Front-End Frameworks',
      percentage:80
    },
    {
      title:'Angular',
      percentage:75
    },
    {
      title:'Git,version control',
      percentage:90
    },
    {
      title:'Sass',
      percentage:90
    }
  ];
  constructor() { }
  ngOnInit() {
    
  }
  ngAfterViewInit() {
    // const frameZones = Array.from(document.querySelectorAll('.progress-bar'));
    // const arr = this.skillsLevel;
    // if(this.trigger) {
    //   frameZones.forEach(function (element,index) {
    //     element.setAttribute("aria-valuenow", arr[index].percentage.toString());
    //     let element1 = element as HTMLElement;
    //     element1.style.width = arr[index].percentage.toString() + '%';
    //   });
    // }

    var observer = new IntersectionObserver(function(entries) {
      if(entries[0].isIntersecting === true)
        console.log('Element is fully visible in screen');
    }, { threshold: [1] });
    
    observer.observe(document.querySelector(".skills_level"));
    console.log('content',observer);
    
  }

}

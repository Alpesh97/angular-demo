import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {


  tab_list = [
    {
      link: 'Tab1',
      dataid: 'tab-1',
      className: 'active'
    },
    {
      link: 'Tab2',
      dataid: 'tab-2'
    },
    {
      link: 'Tab3',
      dataid: 'tab-3'
    },
    {
      link: 'Tab4',
      dataid: 'tab-4'
    },
    {
      link: 'Tab5',
      dataid: 'tab-5'
    },
  ];
  innertabcontent = [
    {
      content: 'content of tab 1',
      datatab: 'tab-1',
      className: 'active'
    },
    {
      content: 'content of tab 2',
      datatab: 'tab-2'
    },
    {
      content: 'content of tab 3',
      datatab: 'tab-3'
    },
    {
      content: 'content of tab 4',
      datatab: 'tab-4'
    },
    {
      content: 'content of tab 5',
      datatab: 'tab-5'
    },
  ];

  tab() {
   
    // tslint:disable-next-line: deprecation
    const idAttr = event.target as HTMLAnchorElement;
    const value = idAttr.id;
    idAttr.classList.add('active');
    const tabLink = idAttr.closest('ul').querySelectorAll('li a');


    const innerTab = idAttr.closest('.custom-tab-accordian-wrapper').querySelectorAll('.inner-tab');
  
    for (let i = 0; i < innerTab.length; i++) {
      if (innerTab[i].getAttribute('id') === value) {
        innerTab[i].classList.add('active');
        tabLink[i].classList.add('active');
      } else {
        innerTab[i].classList.remove('active');
        tabLink[i].classList.remove('active');
      }
    }

  }


  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.tab();
    tab_to_accordian();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
     tab_to_accordian();
  }
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event) {
    tab_to_accordian();
  }
}

let flag = true;
function tab_to_accordian() {
  if (window.innerWidth <= 767 && flag) {
    const innerTab = document.querySelectorAll('.inner-tab');
    const tabLink = document.querySelectorAll('.custom-tab-accordian-wrapper ul li a');

    let tab_content = document.querySelector('.tab-content');
    for (let i = 0; i < innerTab.length; i++) {
      innerTab[i].parentElement.removeChild(innerTab[i]);
      tabLink[i].closest('li').append(innerTab[i]);
    }
    tab_content.parentElement.removeChild(tab_content);
    flag = false;
  } else {
    if (window.innerWidth > 767 && !flag) {
      const contentnode = document.createElement('div');
      contentnode.classList.add('tab-content');
      document.querySelector('.custom-tab-accordian-wrapper').append(contentnode);
      const innerTab = document.querySelectorAll('.custom-tab-accordian-wrapper .inner-tab');
      for (let i = 0; i < innerTab.length; i++) {
       const wrapper = innerTab[i].closest('.custom-tab-accordian-wrapper');
       innerTab[i].parentElement.removeChild(innerTab[i]);
       wrapper.querySelector('.tab-content').append(innerTab[i]);
      }
      flag = true;
    }
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobile_menu() {
    document.body.classList.toggle('open-menu');
  }

  // mobile menu
  submenu() {
    // tslint:disable-next-line: deprecation
    const idAttr = event.target as HTMLAnchorElement;
    let dropdown_menu = document.querySelectorAll('li.has-submenu');
    const closestParent = idAttr.closest('li.has-submenu');
    const parentDropdown = idAttr.closest('.sub-menu');
    for (let i = 0; i < dropdown_menu.length; i++) {
      // debugger;
      if (dropdown_menu[i] == closestParent) {
        if (!parentDropdown) {
          dropdown_menu[i].classList.toggle('submenu-open');
        }
      }
      else{
        if (parentDropdown) {
          const childDropdown = parentDropdown.querySelectorAll('li.has-submenu');
          for (let j = 0; j < childDropdown.length; j++) {
            if (childDropdown[j] == closestParent) {
              childDropdown[j].classList.toggle('submenu-open');
            }
            else{
              childDropdown[j].classList.remove('submenu-open');
            }
          }
        }
        else{
          dropdown_menu[i].classList.remove('submenu-open');
        }
      }
    }
  }

  //accordion
  accordianList(event: any) {
    event.stopPropagation();
    const currentID = event.target.closest('.accordion-wrapper').getAttribute('id');
    const currentDataID = event.target.closest('.accordion-wrapper').getAttribute('data-id');
    document.getElementById(currentID).classList.toggle('open');
    document.getElementById(currentDataID).classList.toggle('open');

    const currentLeftDiv = document.getElementById(currentID).querySelectorAll('.inner-row');
    const currentRightDiv = document.getElementById(currentDataID).querySelectorAll('.inner-row');
    
    for (let i = 0; i < currentLeftDiv.length; i++) {
      const currentLeftDivHeight = currentLeftDiv[i].querySelector('span').offsetHeight;
      const currentRightDivHeight = currentRightDiv[i].querySelector('span').offsetHeight;
      
      const maxHeight = Math.max(currentLeftDivHeight, currentRightDivHeight);
      if (document.getElementById(currentID).classList.contains('open')) {
        currentLeftDiv[i].querySelector('span').style.height = maxHeight + 'px';
        currentRightDiv[i].querySelector('span').style.height = maxHeight + 'px';
      } else {
        currentLeftDiv[i].querySelector('span').removeAttribute('style');
        currentRightDiv[i].querySelector('span').removeAttribute('style');
      }
    }
  }

}

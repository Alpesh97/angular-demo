import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor(public elementRef: ElementRef) { }
  @ViewChild('footer', { static: true }) footer: ElementRef;

  footerAdj() {
    const footerHeight = this.footer.nativeElement.clientHeight;
    this.footer.nativeElement.style.marginTop = -footerHeight + 'px';
    const pageWrapper = document.getElementsByClassName('page-wrapper');
    let i: number;
    for (i = 0; i < pageWrapper.length; i++) {
      pageWrapper[i]['style'].paddingBottom = footerHeight + 'px';
    }
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.footerAdj();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.footerAdj();
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange() {
    this.footerAdj();
  }


}



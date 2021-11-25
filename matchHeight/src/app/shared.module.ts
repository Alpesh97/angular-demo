import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchHeightDirective } from './match-height.directive';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    MatchHeightDirective,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatchHeightDirective,
    FooterComponent
  ]
})
export class SharedModule { }

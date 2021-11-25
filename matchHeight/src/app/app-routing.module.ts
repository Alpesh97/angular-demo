import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EqualheightComponent } from './equalheight/equalheight.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'mobile-slider', component: SliderComponent},
  {path: 'equal-height', component: EqualheightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

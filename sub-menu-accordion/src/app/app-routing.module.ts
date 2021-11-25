import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

const routes: Routes = [
	{ 
		path: '', component: SubMenuComponent
	},
	{
		path: 'home', component: SubMenuComponent	
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

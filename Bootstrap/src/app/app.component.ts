import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbAlertModule, NgbInputDatepicker,NgbDatepicker,} from '@ng-bootstrap/ng-bootstrap';
import { NgbNav, NgbNavItem,NgbNavLink, NgbNavContent,NgbNavOutlet} from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule ,NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},
	{
		type: 'info',
		message: 'This is an info alert',
	},
	{
		type: 'warning',
		message: 'This is a warning alert',
	},
	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'primary',
		message: 'This is a primary alert',
	},
	{
		type: 'secondary',
		message: 'This is a secondary alert',
	},
	{
		type: 'light',
		message: 'This is a light alert',
	},
	{
		type: 'dark',
		message: 'This is a dark alert',
	},
];

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgbAlertModule,
    NgbDatepicker,
    NgbInputDatepicker,
    NgbNavOutlet,
    NgbNav,
    NgbNavItem, 
    NgbNavLink, 
    NgbNavContent,
    NgbNavOutlet,
    NgbCollapseModule,
	NgbCarouselModule,
    
  ],
  templateUrl: './app.component.html',
  
  providers: [NgbNavConfig]
})
export class AppComponent {
  title = 'BootstrapDemo';

  isCollapsed = false;

  constructor(config: NgbNavConfig) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
	}

	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}

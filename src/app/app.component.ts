import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'star-chef-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(`icon_calendar`, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/date.svg`));
    this.matIconRegistry.addSvgIcon(`icon_time`, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/time.svg`));
    this.matIconRegistry.addSvgIcon(`vegetarian`, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/veg_symbol.svg`));
    this.matIconRegistry.addSvgIcon(`nonVeg`, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/non_veg_symbol_1.svg`));
    this.matIconRegistry.addSvgIcon(`Microwave`, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/Microwave.svg`));
    this.matIconRegistry.addSvgIcon(`Refrigerator`, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/Refrigerator.svg`));
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
}

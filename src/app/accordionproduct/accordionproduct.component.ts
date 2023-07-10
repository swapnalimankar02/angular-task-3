import { Component,ViewEncapsulation } from '@angular/core';

interface AccordionSection{
  header : string;
  details : string;
}

@Component({
  selector: 'app-accordionproduct',
  templateUrl: './accordionproduct.component.html',
  styleUrls: ['./accordionproduct.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AccordionproductComponent {
  sections: AccordionSection[] = [];
  sectionHeader: string | any;
  sectionDetails: string | any;

  addSection(): void {
    const newSection: AccordionSection = {
      header: this.sectionHeader,
      details: this.sectionDetails
    };
    this.sections.push(newSection);
    this.sectionHeader = '';
    this.sectionDetails = '';
  }
}

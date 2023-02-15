import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  years: number = 2020;
  
  public socialFooter: string[] = ["Twitter", "Facebook", "Instagram", "TikTok"]

  constructor(){ }

}

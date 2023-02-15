import { ShopeameServicesService } from './shared/services/shopeame-services.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopeame';
  id! : number;

  constructor(private shopeameServicesService: ShopeameServicesService, activatedRoute: ActivatedRoute, private router: Router){}

//   ngOnInit(): void{
// this.activatedRoute.paramMap.subscribe(params =>{
//   this.id =  Number(params.get("id"));
// } );



}

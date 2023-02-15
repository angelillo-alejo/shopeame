import { ShopeameServicesService } from './../../services/shopeame-services.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  creationform! : FormGroup;

  constructor(private formbuilder:FormBuilder, private shopeameServicesService: ShopeameServicesService){}
  public ProductsNew = this.shopeameServicesService.productsData;
  public ProductsId = this.shopeameServicesService.productsData.id;

  ngOnInit(): void{
    this.creationform
  }

}


/**Aqui pondremos los input, put y delete */
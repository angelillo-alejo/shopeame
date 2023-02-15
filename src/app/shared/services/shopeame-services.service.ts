import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopeameServicesService {

  db_url: string = "https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products"

  constructor(private http: HttpClient ) {}

public productsData= {
  id:"",
  name:"",
  price:"",
  description:"",
  stars:"",
  image:"",
}

  getProducts(){
    return this.http.get(this.db_url)
  }
  getProduct(id:number){
    return this.http.get(`${this.db_url}/${id}`)
  }

  editProduct(id:number){
    return this.http.delete(`${this.db_url}/${id}`)
  }

}

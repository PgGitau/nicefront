import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsService } from 'src/app/ProductsService/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {
  constructor(private product:ProductsService){}
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  data$: Observable<any[]> = this.dataSubject.asObservable();
  private singelDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  singleData$: Observable<any[]> = this.dataSubject.asObservable();

  updateSingleData(data: any[]): void {
    this.singelDataSubject.next(data);
  }

  updateData(data: any[]): void {
    this.dataSubject.next(data);
  }
  productData(){
    this.product.getProcessedProducts().subscribe((res:any) => {
      this.updateData(res)
    })
  }
}

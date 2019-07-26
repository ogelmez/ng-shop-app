import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] { // datayı değiştirmek istediğimizi söylüyoyurm.Sırası ile value değerin tipi argsta parametre gönderilcek türünü string girdik, En sondada fonksiyonun tipi. 
    filterText=filterText?filterText.toLocaleLowerCase():null // js küçük büyük harf duyarlıdır o yüzden arama ifadesini küçük harfe çevirir.
    return filterText?value.filter((p:Product)=>p.name
    .toLocaleLowerCase().indexOf(filterText)!==-1):value; // her name i küçük harfe değiştir ve o filtertext varmı bak
  }

}

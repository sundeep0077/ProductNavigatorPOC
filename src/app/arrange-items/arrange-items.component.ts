import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category } from '../../models/category';
import {LocatorService} from '../../services/categories/get-categories.service';
import {GetProductTraitsService} from '../../services/categories/get-product-traits.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';
import { ProductHeaderTraits } from 'src/models/ProductHeaderTraits';
import { ProductDetailsTraits } from 'src/models/ProductDetailsTraits';


@Component({
  selector: 'app-arrange-items',
  templateUrl: './arrange-items.component.html',
  styleUrls: ['./arrange-items.component.scss'],
  providers: [FormBuilder]
})
export class ArrangeItemsComponent implements OnInit {
  myControl = new FormControl();
  selectedItem = '';
  filteredOptions: Observable<Category[]>;
  categories: Array<Category> = new Array<Category>();
  shoppingList: Array<Category> = new Array<Category>();
  productTraits: Array<ProductHeaderTraits> = new Array<ProductHeaderTraits>();
  finalProductIdList: Array<number> = new Array<number>();
  durationInSeconds: 2;
  displayedColumns = ['departmentName'];


  constructor(private snackBar: MatSnackBar,
              private locatorService: LocatorService,
              private getProductTraitsService: GetProductTraitsService) { }

  ngOnInit() {

    this.locatorService.getAllCategories().subscribe((data) => {
      this.categories = data;
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }, () => {
      this.snackBarMessage('Error Encountered Fetching Categories');
    });
  }

  private _filter(value: string): Category[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.categories.filter(option => option.categoryName.toLowerCase().includes(filterValue));
    }
  }

  private addToShoppingList() {
    if (this.selectedItem && this.categories.map(x => x.categoryName).indexOf(this.selectedItem) !== -1
    && !this.shoppingList.find(y => y.categoryName === this.selectedItem)) {
      this.shoppingList.push(this.categories.find(y => y.categoryName === this.selectedItem));
    }
    this.selectedItem = '';
  }

  private removeFromShoppingList(category: Category) {
    if (category) {
      this.shoppingList = this.shoppingList.filter(x => x.categoryId !== category.categoryId);
    }
  }

  private getProductTraits() {
    const categoryIds = this.shoppingList.map(x => x.categoryId);
    this.getProductTraitsService.getProductTraits(categoryIds).subscribe((data) => {
      this.productTraits = data;
    },
    () => {  this.snackBarMessage('Error Encountered Getting Product Details'); });
    }

 private snackBarMessage(message: string) {
  this.snackBar.openFromComponent(CustomSnackbarComponent, {
    duration: this.durationInSeconds * 1000,
    data: message
  });
 }

 private productSelection(event, product: ProductDetailsTraits) {
   if (event.checked) {
    this.finalProductIdList.push(product.productId);
   } else {
     this.finalProductIdList = this.finalProductIdList.filter(x => x !== product.productId);
   }
   console.log(this.finalProductIdList);
 }

}


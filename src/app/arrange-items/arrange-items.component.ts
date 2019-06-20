import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category } from '../../models/category';
import {LocatorService} from '../../services/categories/get-categories.service';
import {GetProductTraitsService} from '../../services/categories/get-product-traits.service';
import {FetchOptimizedRouteService} from '../../services/categories/fetch-optimized-route.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, debounceTime, tap, switchMap, finalize, distinctUntilChanged} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';
import { ProductHeaderTraits } from 'src/models/ProductHeaderTraits';
import { ProductDetailsTraits } from 'src/models/ProductDetailsTraits';
import { OptimizedRouteProductDTO } from 'src/models/OptimizedRouteProductDTO';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomUserDialogComponent } from '../custom-user-dialog/custom-user-dialog.component';
import { WalmartLocations } from 'src/models/walmartLocations';
import { GetCityLocationsService } from '../../services/categories/get-city-locations.service';
import { RouteSavings } from 'src/models/routeSavings';

export interface DialogData {
  issueProductId: number;
}

@Component({
  selector: 'app-arrange-items',
  templateUrl: './arrange-items.component.html',
  styleUrls: ['./arrange-items.component.scss'],
  providers: [FormBuilder]
})
export class ArrangeItemsComponent implements OnInit {
  myControl = new FormControl();
  myControlLocation = new FormControl();
  selectedItem = '';
  filteredOptions: Observable<Category[]>;
  categories: Array<Category> = new Array<Category>();
  shoppingList: Array<Category> = new Array<Category>();
  productTraits: Array<ProductHeaderTraits> = new Array<ProductHeaderTraits>();
  optimizedRouteProducts: Array<OptimizedRouteProductDTO> = new Array<OptimizedRouteProductDTO>();
  routeSavings: RouteSavings = new RouteSavings();
  finalProductIdList: Array<number> = new Array<number>();
  durationInSeconds: 3;
  displayedColumns = ['departmentName'];
  disableSecondStep = true;
  disableThirdStep = true;
  searchCityCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  walmartLocations: Array<WalmartLocations> = new Array<WalmartLocations>();
  enteredLocation: string;
  showLocationText: boolean;

  constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog,
              private locatorService: LocatorService,
              private getProductTraitsService: GetProductTraitsService,
              private fetchOptimizedRouteService: FetchOptimizedRouteService,
              private getCityLocations: GetCityLocationsService) { }

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

  editLocationClick() {
    this.showLocationText = true;
    this.enteredLocation = '';
    this.walmartLocations = [];
  }

  onCityEnter(city: string) {
    this.getCityLocations.getCityLocs(city).subscribe((data) => {
      this.walmartLocations = data;
    }, () => {
      this.snackBarMessage('Error Encountered Getting City Locations');
    });
}

  public _filter(value: string): Category[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.categories.filter(option => option.categoryName.toLowerCase().includes(filterValue));
    }
  }

  public addToShoppingList() {
    if (this.selectedItem && this.categories.map(x => x.categoryName).indexOf(this.selectedItem) !== -1
    && !this.shoppingList.find(y => y.categoryName === this.selectedItem)) {
      this.shoppingList.push(this.categories.find(y => y.categoryName === this.selectedItem));
    }
    this.selectedItem = '';
  }

  public removeFromShoppingList(category: Category) {
    if (category) {
      this.shoppingList = this.shoppingList.filter(x => x.categoryId !== category.categoryId);
    }
  }

  public getProductTraits() {
    const categoryIds = this.shoppingList.map(x => x.categoryId);
    this.getProductTraitsService.getProductTraits(categoryIds).subscribe((data) => {
      this.productTraits = data;
      const newProductIdList: Array<number> = new Array<number>();
      if (this.finalProductIdList.length > 0) {
        this.productTraits.forEach(x => {
          x.productDetailsTraits.forEach(y => {
            if (this.finalProductIdList.includes(y.productId)) {
              y.selected = true;
              newProductIdList.push(y.productId);
            }
          });
        });
        this.finalProductIdList = newProductIdList;
      }
    },
    () => {  this.snackBarMessage('Error Encountered Getting Product Details'); });
    }

   public getOptimizedRoute() {
    this.fetchOptimizedRouteService.fetchOptimizedPath(this.finalProductIdList).subscribe((data) => {
      this.routeSavings = data;
      this.optimizedRouteProducts = this.routeSavings.optimizedRouteProductDTO;  },
    () => {  this.snackBarMessage('Error Encountered Fetching Optimized Route'); });
    }



    public productSelection(event, product: ProductDetailsTraits) {
   if (event.checked) {
    this.finalProductIdList.push(product.productId);
   } else {
     this.finalProductIdList = this.finalProductIdList.filter(x => x !== product.productId);
   }
 }

 public drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.shoppingList, event.previousIndex, event.currentIndex);
  }

  public snackBarMessage(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: this.durationInSeconds * 1000
    });
   }

   public openUserFeedbackDialog(product: OptimizedRouteProductDTO) {
    const dialogRef = this.dialog.open(CustomUserDialogComponent, {
      width: '300px',
      data: {issueProduct: product}
    });
    dialogRef.afterClosed().subscribe(result => {
      product.buy = true;
      console.log(result);
    });
   }

   productOkResponse(product: OptimizedRouteProductDTO) {
    product.buy = false;
    console.log(product);
   }
}


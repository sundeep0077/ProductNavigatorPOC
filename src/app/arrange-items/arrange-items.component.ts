import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category } from '../../models/category';
import {LocatorService} from '../../services/categories/get-categories.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';


@Component({
  selector: 'app-arrange-items',
  templateUrl: './arrange-items.component.html',
  styleUrls: ['./arrange-items.component.scss'],
  providers: [FormBuilder]
})
export class ArrangeItemsComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<Category[]>;
  categories: Array<Category> = new Array<Category>();
  durationInSeconds: 5;
  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private locatorService: LocatorService) { }

  ngOnInit() {

    this.locatorService.getAllCategories().subscribe((data) => {
      this.categories = data;
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      console.log(this.categories);
    }, (error) => {
      this.snackBar.openFromComponent(CustomSnackbarComponent, {
        duration: this.durationInSeconds * 1000,
        data: 'Error Encountered Fetching Categories'
      });
    });
  }

  private _filter(value: string): Category[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.categories.filter(option => option.categoryName.toLowerCase().includes(filterValue));
    }
  }
}


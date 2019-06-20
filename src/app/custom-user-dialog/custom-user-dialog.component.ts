import { Component, OnInit, Inject } from '@angular/core';
import {ReasonNotToBuy} from '../../models/reasonsNotToBuyEnum';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../arrange-items/arrange-items.component';

@Component({
  selector: 'app-custom-user-dialog',
  templateUrl: './custom-user-dialog.component.html',
  styleUrls: ['./custom-user-dialog.component.scss']
})
export class CustomUserDialogComponent {
  userResponseFormControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<CustomUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

              reasons: string[] =  [ 'Stale' , 'Torn' , 'Outdated' , 'Not so appealing' ,
              'Seems expensive', 'Image did not fit my expectations',
                'Better choice available', 'Cheaper online', 'Bulky to carry home',
              'Require lesser quantity', 'Dislike color', 'No help from Associate', 'Will buy later', 'Not enough quantity on shelf'];

  onOkClick(): void {
    this.dialogRef.close();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrangeItemsComponent } from './arrange-items/arrange-items.component';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatTooltipModule, MatDividerModule,
  MatRippleModule, MatListModule, MatAutocompleteModule, MatInputModule, MatSnackBarModule, MatTableModule,
   MatCheckboxModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClientModule } from '@angular/common/http';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatRippleModule,
    MatListModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTableModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  entryComponents: [
    CustomSnackbarComponent
  ],
  declarations: [
    AppComponent,
    CustomSnackbarComponent,
    ArrangeItemsComponent,
    NavComponent
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrangeItemsComponent } from './arrange-items/arrange-items.component';
import { ArrangeItemsSlowResponsesComponent } from './arrange-items-slow-responses/arrange-items-slow-responses.component';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatTooltipModule, MatDividerModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    AppComponent,
    ArrangeItemsComponent,
    ArrangeItemsSlowResponsesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
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
    MatDividerModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

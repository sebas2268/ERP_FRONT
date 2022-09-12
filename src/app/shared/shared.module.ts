import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ShareRoutingModule } from './share-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule, 
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class SharedModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
// import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     VehicleListComponent,
//     VehicleFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { VehicleUpdateComponent } from './components/vehicle-update/vehicle-update.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleFormComponent,
    VehicleUpdateComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


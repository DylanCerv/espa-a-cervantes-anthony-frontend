// import { Component, OnInit } from '@angular/core';
// import { VehicleService, Vehicle } from '../../services/vehicle.service';

// @Component({
//   selector: 'app-vehicle-list',
//   templateUrl: './vehicle-list.component.html',
//   styleUrls: ['./vehicle-list.component.css']
// })
// export class VehicleListComponent implements OnInit {
//   vehicles: Vehicle[] = [];

//   constructor(private vehicleService: VehicleService) { }

//   ngOnInit(): void {
//     this.loadVehicles();
//   }

//   loadVehicles(): void {
//     this.vehicleService.getVehicles().subscribe((data: Vehicle[]) => {
//       this.vehicles = data;
//     });
//   }

//   deleteVehicle(id: string | undefined): void {
//     if (id) {
//       this.vehicleService.deleteVehicle(id).subscribe(() => {
//         this.vehicles = this.vehicles.filter(vehicle => vehicle._id !== id);
//       });
//     }
//   }
// }



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe((data: Vehicle[]) => {
      this.vehicles = data;
    });
  }

  deleteVehicle(id: string | undefined): void {
    if (id) {
      this.vehicleService.deleteVehicle(id).subscribe(() => {
        this.vehicles = this.vehicles.filter(vehicle => vehicle._id !== id);
      });
    }
  }

  navigateToUpdate(id: string | undefined): void {
    if (id) {
      this.router.navigate(['vehicles/update', id]);
    }
  }

  navigateToDetails(id: string | undefined): void {
    if (id) {
      this.router.navigate(['vehicles/details', id]);
    }
  }

  navigateToAdd(): void {
    this.router.navigate(['vehicles/new']);
  }
}

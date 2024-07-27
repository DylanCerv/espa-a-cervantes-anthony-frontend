import { Component } from '@angular/core';
import { VehicleService, Vehicle } from '../../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent {
  vehicle: Vehicle = {
    make: '',
    model: '',
    year: 0,
    vin: ''
  };

  constructor(private vehicleService: VehicleService, private router: Router) { }

  saveVehicle(): void {
    if (this.vehicle.make && this.vehicle.model && this.vehicle.year && this.vehicle.vin) {
      this.vehicleService.createVehicle(this.vehicle).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      alert('Por favor, llene todos los campos.');
    }
  }
}

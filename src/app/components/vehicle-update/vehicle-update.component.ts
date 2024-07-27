import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
// import { Vehicle } from '../../models/vehicle.model';
import { Vehicle } from '../../services/vehicle.service';


@Component({
  selector: 'app-vehicle-update',
  templateUrl: './vehicle-update.component.html',
  styleUrls: ['./vehicle-update.component.css']
})
export class VehicleUpdateComponent implements OnInit {
  vehicle: Vehicle = { _id: '', make: '', model: '', year: 0, vin: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vehicleService.getVehicleById(id).subscribe((data: Vehicle) => {
        this.vehicle = data;
      });
    }
  }

  updateVehicle(): void {
    if (this.vehicle._id) {
      this.vehicleService.updateVehicle(this.vehicle._id, this.vehicle).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}

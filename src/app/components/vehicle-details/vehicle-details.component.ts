import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
// import { Vehicle } from '../../models/vehicle.model';
import { Vehicle } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: Vehicle | null = null;

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vehicleService.getVehicleById(id).subscribe((data: Vehicle) => {
        this.vehicle = data;
      });
    }
  }
}

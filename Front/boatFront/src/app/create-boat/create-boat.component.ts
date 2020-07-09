import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Boat } from 'src/model/boat';
import { BoatService } from 'src/services/boat/boat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-boat',
  templateUrl: './create-boat.component.html',
  styleUrls: ['./create-boat.component.scss']
})
export class CreateBoatComponent implements OnInit {

  boatForm: FormGroup;

  su: boolean = false;

  constructor(private builder: FormBuilder, private boatServ: BoatService, private router: Router) { }

  get name() { return this.boatForm.get('name'); }
  get description() { return this.boatForm.get('description'); }

  ngOnInit(): void {

    this.boatForm = this.builder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  validBoat() {
    this.su = true;
    //validation du form
    if (this.boatForm.valid) {
      //creation du boat
      let boat = new Boat();

      boat.name = this.boatForm.get("name").value;
      boat.description = this.boatForm.get("description").value;

      this.boatServ.createBoat(boat).subscribe(ret => {

        console.log(ret);

        if (ret) {
          this.router.navigate(["/home"]);
        }

      });

    }

  }

}

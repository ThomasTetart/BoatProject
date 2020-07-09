import { Component, OnInit } from '@angular/core';
import { Boat } from 'src/model/boat';
import { BoatService } from 'src/services/boat/boat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail-boat',
  templateUrl: './detail-boat.component.html',
  styleUrls: ['./detail-boat.component.scss']
})
export class DetailBoatComponent implements OnInit {

  boatForm: FormGroup;

  currentBoat: Boat;

  su: boolean = false;

  get name() { return this.boatForm.get('name'); }
  get description() { return this.boatForm.get('description'); }

  constructor(private boatServ: BoatService, private activate: ActivatedRoute, private router: Router,private builder:FormBuilder) { }

  ngOnInit(): void {

    this.boatServ.getBoat(this.activate.snapshot.params.id).subscribe(bo => {
      console.log(bo);
      if (bo.id) {
        this.boatForm = this.builder.group({
          name: [bo.name, Validators.required],
          description: [bo.description, Validators.required]
        });
        this.currentBoat = bo;
      }
      else {
        this.router.navigate(["/home"]);
      }
    })
  }

  toDeleteBoat() {

    if (confirm('Etes-vous certain de supprimer le bateau?')) {

      this.boatServ.deleteBoat(this.currentBoat.id).subscribe(ret => {
        if (!ret) {
          this.router.navigate(["/home"]);
        }
        //!! APPROFFONDIR LES TEST DE RETOUR + GESTION EN CAS D ERREUR DE REQUETE !!
      });

    } 
  }


  updateBoat() {
    this.su = true;
    //validation du form
    if (this.boatForm.valid) {
      //creation du boat
      this.currentBoat.name = this.boatForm.get("name").value;
      this.currentBoat.description = this.boatForm.get("description").value;

      this.boatServ.updateBoat(this.currentBoat).subscribe(ret => {
        if (ret) {
          this.router.navigate(["/home"]);
        }
        //!! APPROFFONDIR LES TEST DE RETOUR + GESTION EN CAS D ERREUR DE REQUETE !!
      });

    }

  }


}

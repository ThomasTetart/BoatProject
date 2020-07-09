import { Component, OnInit } from '@angular/core';
import { BoatService } from 'src/services/boat/boat.service';
import { Boat } from 'src/model/boat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private boatServ: BoatService, private router: Router) { }

  listBoat: Boat[];

  ngOnInit(): void {
    this.boatServ.getBoats().subscribe(b => {
      this.listBoat = b;
    });
  }
  toNewBoat() {
    this.router.navigate(["/newBoat"]);
  }

  toDetail(b: Boat) {

    console.log(b);

    this.router.navigate(["/detail/" + b.id]);

  }

}

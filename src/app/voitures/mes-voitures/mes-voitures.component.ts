import { Component, OnInit, OnDestroy } from '@angular/core';
import { VoitureService } from '../voitures.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { MyCar } from '../mesvoitures.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mes-voitures',
  templateUrl: './mes-voitures.component.html',
  styleUrls: ['./mes-voitures.component.css'],
})
export class MesVoituresComponent implements OnInit, OnDestroy {
  mesvoitures: MyCar[] = [];
  isLoading = false;
  isSuccess = false;
  private idpersonne: any;
  private carSub: Subscription;

  constructor(
    public voitureservice: VoitureService,
    public route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log('tonga ato oo');

    this.isLoading = true;
    this.voitureservice.getmyCar();
    this.carSub = this.voitureservice
      .getCarUpdateListener()
      .subscribe((data) => {
        console.log(data);
        this.isLoading = false;
        this.mesvoitures = data.car;
      });
  }

  Deposeraugarage(id:string){
    console.log("ok");
    this.isLoading = true;
    this.voitureservice.deposeraugarage(id).subscribe(() => {
      this.voitureservice.getmyCar();
    }, () => {
      this.isLoading = false;
    });
  }

  RecupererVoiture(id:string){
    console.log("recuperation en cours");
    this.isLoading = true;
    this.voitureservice.recupereraugarage(id).subscribe(() => {
      this.voitureservice.getmyCar();
    }, () => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {}

  onDelete(id: string) {
    this.isLoading = true;
    this.voitureservice.deletecar(id).subscribe(() => {
      this.voitureservice.getmyCar();
    }, () => {
      this.isLoading = false;
    });
  }
}



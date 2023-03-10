import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../voitures.service';

@Component({
  selector: 'creationVoiture',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'],
})
export class CreationVoiture implements OnInit, OnDestroy{
  isLoading = false;
  isSuccess = false;
  form: FormGroup;
  constructor(public voitureService: VoitureService, private router: Router) {}

  ngOnInit(): void {
// this.isLoading=true;
  }

  Creervoiture(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    this.voitureService.createVoiture(form.value.matricule);
    form.reset();
  }

  ngOnDestroy() {
    // this.isLoading=false;
  }
}

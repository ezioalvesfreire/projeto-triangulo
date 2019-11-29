import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'projeto-triangulo';
  public isosceles: boolean;
  public escaleno: boolean;
  public equilatero: boolean;
  public formGroup: FormGroup;
  private valorCampo1: number;
  private valorCampo2: number;
  private valorCampo3: number;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formGroup = this.getFormGroup();
    this.valueChanges();
  }

private valueChanges() {
  this.formGroup.controls.campo1.valueChanges.subscribe((element: any) => {
   this.valorCampo1 = element;
  });
  this.formGroup.controls.campo2.valueChanges.subscribe((element: any) => {
    this.valorCampo2 = element;
  });
  this.formGroup.controls.campo3.valueChanges.subscribe((element: any) => {
    this.valorCampo3 = element;
  });
}

private getFormGroup() {
  const formGroup = this.formBuilder.group({
    campo1: [
      { value: undefined, disabled: false },
      Validators.compose([Validators.required])
    ],
    campo2: [
      { value: undefined, disabled: false },
      Validators.compose([Validators.required])
    ],
    campo3: [
      { value: undefined, disabled: false },
      Validators.compose([Validators.required])
    ]
  });

  return formGroup;
}

public retornaTipoTriangulo() {
  if(
    this.valorCampo1 === this.valorCampo2 && 
    this.valorCampo1 === this.valorCampo3
  ) {
    this.equilatero = true;
    this.isosceles = false;
    this.escaleno = false;
  } else if (
    this.valorCampo1 === this.valorCampo2 ||
    this.valorCampo2 === this.valorCampo3 ||
    this.valorCampo1 === this.valorCampo3
  ) {
    this.isosceles = true;
    this.equilatero = false;
    this.escaleno = false;
  } else {
    this.escaleno = true;
    this.isosceles = false;
    this.equilatero = false;
  }
}
}

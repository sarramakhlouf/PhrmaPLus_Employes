import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from '../../../services/employes.services';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Employe } from '../../../model/employe.model';

@Component({
  selector: 'app-update-employes',
  templateUrl: './update-employes.component.html',
  styleUrls: ['./update-employes.component.css']
})
export class UpdateEmployesComponent implements OnInit {
  currentEmploye = new Employe();
  updateForm!: FormGroup;

  constructor(
    private employeService: EmployeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']; // Récupérer l'ID de la route
    const employe = this.employeService.consulterEmploye(id); // Récupérer les données de l'employé

    if (employe) {
      this.currentEmploye = employe;

      // Initialisation du formulaire avec les valeurs de l'employé existant
      this.updateForm = this.formBuilder.group({
        id: [{ value: this.currentEmploye.idEmploye, disabled: true }, [Validators.required]],
        nom: [this.currentEmploye.FullNameEmploye, [Validators.required, Validators.minLength(3)]],
        email: [this.currentEmploye.emailEmploye, [Validators.required, Validators.email]],
        tel: [this.currentEmploye.NumTelEmploye, [Validators.required, this.phoneLengthValidator()]],
        dateNaissanceEmploye: [this.currentEmploye.dateNaissanceEmploye, [Validators.required]]
      });
    } else {
      console.error('Employé non trouvé avec l\'ID:', id);
      // Vous pouvez rediriger ou afficher un message d'erreur ici
    }
  }

  // Validation personnalisée pour le numéro de téléphone (doit être de 10 chiffres)
  phoneLengthValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value && value.length !== 10) {
        return { phoneLength: true };
      }
      return null;
    };
  }

  // Méthode pour la soumission du formulaire
  updateEmploye(): void {
    if (this.updateForm.valid) {
      // Mise à jour des données de l'employé avec les nouvelles valeurs du formulaire
      this.currentEmploye = { ...this.currentEmploye, ...this.updateForm.value };
      console.log('Employé à mettre à jour :', this.currentEmploye);

      // Appel à la méthode pour mettre à jour l'employé via le service
      this.employeService.updateEmploye(this.currentEmploye);

      // Redirection après la mise à jour
      this.router.navigate(['/admin-dashboard/employe/listerEmploye']);
    }
  }
}
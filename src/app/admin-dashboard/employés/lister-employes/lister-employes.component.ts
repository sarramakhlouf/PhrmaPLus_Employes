import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from '../../../model/employe.model';
import { EmployeService } from '../../../services/employes.services';

@Component({
  selector: 'app-lister-employes',
  templateUrl: './lister-employes.component.html',
  styleUrl: './lister-employes.component.css'
})
export class ListerEmployesComponent {
  employees! : Employe[];
    constructor(private employeService: EmployeService, private router: Router){
      this.employees = employeService.listeEmployes();
    }
  supprimerEmploye(em: Employe) {
    //console.log(em);
    let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.employeService.supprimerEmploye(em);
  }
  updateEmploye(id:number)
  {
    this.router.navigate(['/admin-dashboard/employes/modifier', id]);
  }


}

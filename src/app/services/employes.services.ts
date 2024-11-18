import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  employees: Employe[];
  employe! : Employe;
  constructor() {
    this.employees = [
      { idEmploye: 1, FullNameEmploye: "nom prenom 1", emailEmploye: "employe1@gmail.com", NumTelEmploye: 25147789, dateNaissanceEmploye: new Date("12/04/1996") },
      { idEmploye: 2, FullNameEmploye: "nom prenom 2", emailEmploye: "employe2@gmail.com", NumTelEmploye: 25147789, dateNaissanceEmploye: new Date("12/04/1996") },
      { idEmploye: 3, FullNameEmploye: "nom prenom 3", emailEmploye: "employe3@gmail.com", NumTelEmploye: 25147789, dateNaissanceEmploye: new Date("12/04/1996") },
    ];
  }

  listeEmployes(): Employe[] {
    return this.employees;
  }

  addEmploye(emp: Employe) {
    this.employees.push(emp);
  }

  supprimerEmploye(emp: Employe) {
    const index = this.employees.indexOf(emp, 0);
    if (index > -1) {
      this.employees.splice(index, 1);
    }
  }

  consulterEmploye(id: number): Employe {
    return this.employe = this.employees.find(em => em.idEmploye === id)!;
  }

  /*updateEmploye(em: Employe) {
    // console.log(p);
    this.supprimerEmploye(em);
    this.addEmploye(em);
    this.trierEmployes();
  }*/
  updateEmploye(em: Employe) {
    const index = this.employees.findIndex((emp) => emp.idEmploye === em.idEmploye);
    if (index !== -1) {
      this.employees[index] = { ...em };
    }
    else {
      console.log("Employee not found for update!");

    }
  }

  trierEmployes() {
    this.employees = this.employees.sort((n1, n2) => {
      if (n1.idEmploye! > n2.idEmploye!) {
        return 1;
      }
      if (n1.idEmploye! < n2.idEmploye!) {
        return -1;
      }
      return 0;
    });
  } 

}

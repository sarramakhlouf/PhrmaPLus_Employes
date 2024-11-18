import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importer les outils de formulaire
import { Commande } from '../../../model/commande.model';
import { CommandeService } from '../../../services/commande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-commande',
  templateUrl: './ajouter-commande.component.html',
  styleUrls: ['./ajouter-commande.component.css']
})
export class AjouterCommandeComponent implements OnInit {
  commandeForm!: FormGroup; // Formulaire pour ajouter une commande

  constructor(
    private fb: FormBuilder, // Pour construire le formulaire réactif
    private commandeService: CommandeService ,
    private router: Router,// Service pour gérer les commandes
  ) { }

  ngOnInit(): void {
    this.commandeForm = this.fb.group({
      nomClient: ['', [Validators.required]], // Validation du champ nomClient
      montantTotal: [0, [Validators.required, Validators.min(1)]], // Validation du montant
      dateCommande: ['', [Validators.required]], // Validation de la date
      quantite: [1, [Validators.required, Validators.min(1)]],
    });
  }

  // Méthode pour ajouter la commande
  ajouterCommande(): void {
    if (this.commandeForm.valid) {
      const nouvelleCommande: Commande = this.commandeForm.value; // Récupérer les données du formulaire
      const id = this.commandeService.getCommandes().length + 1; // Générer un ID simple
      nouvelleCommande.id = id;
      this.commandeService.ajouterCommande(nouvelleCommande); // Ajouter la commande via le service
      alert("Commande ajoutée avec succès !");
      this.commandeForm.reset();
      this.router.navigate(['admin-dashboard/commandes/liste']);// Réinitialiser le formulaire
    }
  }
}

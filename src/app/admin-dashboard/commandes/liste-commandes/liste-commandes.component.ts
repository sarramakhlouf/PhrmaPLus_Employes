import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../../services/commande.service';
import { Commande } from '../../../model/commande.model';


@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
  commandes: Commande[] = []; // Liste des commandes

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandes = this.commandeService.getCommandes(); // Récupérer la liste des commandes depuis le service
  }

  // Méthode pour supprimer une commande
  supprimerCommande(id: number): void {
    this.commandeService.supprimerCommande(id);
    this.commandes = this.commandeService.getCommandes(); // Mettre à jour la liste après suppression
  }
}

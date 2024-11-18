import { Injectable } from '@angular/core';
import { Commande } from '../model/commande.model'; // Importation du modèle Commande

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  commandes: Commande[] = []; // Tableau pour stocker les commandes

  constructor() {
    // Initialisation avec quelques données de commande exemple
    this.commandes = [
      { id: 1, nomClient: 'Client 1', montantTotal: 100, dateCommande: new Date('2024-10-01'), quantite: 2 },
      { id: 2, nomClient: 'Client 2', montantTotal: 200, dateCommande: new Date('2024-10-02'), quantite: 2 },
      { id: 3, nomClient: 'Client 3', montantTotal: 150, dateCommande: new Date('2024-10-03'), quantite: 2 }
    ];
  }

  // Méthode pour ajouter une nouvelle commande
  ajouterCommande(commande: Commande): void {
    // Vérification que la quantité est valide (doit être supérieur ou égal à 1)
    if (commande.quantite < 1) {
      console.error('La quantité doit être un nombre supérieur ou égal à 1');
      return;
    }
    // Ajout de la commande à la liste
    this.commandes.push(commande);
  }

  // Méthode pour supprimer une commande par ID
  supprimerCommande(id: number): void {
    const index = this.commandes.findIndex(commande => commande.id === id);
    if (index !== -1) {
      this.commandes.splice(index, 1);
    }
  }

  // Méthode pour obtenir la liste des commandes
  getCommandes(): Commande[] {
    return this.commandes;
  }

  // Méthode pour obtenir une commande par ID
  getCommandeById(id: number): Commande | undefined {
    return this.commandes.find(commande => commande.id === id);
  }

  // Méthode pour mettre à jour une commande
  updateCommande(updatedCommande: Commande): void {
    // Vérification que la quantité est valide (doit être supérieur ou égal à 1)
    if (updatedCommande.quantite < 1) {
      console.error('La quantité doit être un nombre supérieur ou égal à 1');
      return;
    }
    const index = this.commandes.findIndex(commande => commande.id === updatedCommande.id);
    if (index !== -1) {
      this.commandes[index] = updatedCommande;
    }
  }
}

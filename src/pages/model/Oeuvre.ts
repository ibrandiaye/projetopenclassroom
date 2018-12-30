export class Oeuvre{
    titre: String;
    etat: boolean;
    constructor(public auteur:string){
        this.etat = false;
    }
}
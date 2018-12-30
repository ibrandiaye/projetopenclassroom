import { Oeuvre } from './../model/Oeuvre';
export class OeuvreService{
    public books: Oeuvre[] =[
        { 
            titre : 'une si longue lettre',
            auteur : 'Mariama ba',
            etat : false
        },
        { 
            titre : "Sous l'orage",
            auteur : 'Seydou Bodjan',
            etat : true
        },
        { 
            titre : 'Nini la mulatresse du Sénégal',
            auteur : 'ibra Ndiaye',
            etat : false
        }
        ]
        public cds: Oeuvre[] =[
            { 
                titre : 'symfonie',
                auteur : 'Wally seck',
                etat : false
            },
            { 
                titre : "Puissance 3",
                auteur : 'Queen Bizz',
                etat : true
            },
            { 
                titre : 'respect',
                auteur : 'Youssou Ndour',
                etat : false
            }
            ]
            preterOuRendre(action: boolean){
                return !action;
            }
    
}
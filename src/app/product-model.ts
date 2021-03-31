export class ProductModel {
    public id:number        = 0;
    public name:string      = ""; 
    public desc:string      = ""; 
    public category:string  = ""; 
    public price:number     = 0; 
    public img:string       = "";
}

export const PRODUCT_LIST:ProductModel[] = [
    {
        id: 1, 
        name: "Jeu vidéo", 
        desc: "Un super jeu vidéo", 
        category: "videogames", 
        price: 80, 
        img: "/assets/img/videogame.jpg"
    },
    {
        id: 2, 
        name: "Velo", 
        desc: "Un super velo", 
        category: "velo", 
        price: 120, 
        img: "/assets/img/velo.jpg"
    },
    {
        id: 3, 
        name: "Plante verte", 
        desc: "Une superbe plante verte qu'elle est jolie.", 
        category: "plants", 
        price: 15, 
        img: "/assets/img/plant.jpg"
    }
];

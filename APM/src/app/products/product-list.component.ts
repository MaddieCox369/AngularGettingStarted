import { Component } from "@angular/core";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html"
})

export class ProductListComponent{
    pageTitle: string = "Product List";
    imageWidth: number = 100;
    imageMArgin: number = 2;
    showImage: boolean = false;
    listFilter: string = "";
    products: any[] = [
        {
            "productId": 2,
            "productName": "Wedges",
            "productCode": "HTS-397",
            "releaseDate": "April 20, 1999",
            "description": "Super cute shoes!",
            "price": 21.33,
            "starRating": 5,
            "imageUrl": "https://ae01.alicdn.com/kf/HTB15C2hNpXXXXa9aXXXq6xXFXXXe/11cm-women-Elegant-heels-wedges-shoes-for-women-wedges-pearls-tassel-chain-platform-wedges-shoes-white.jpg"
        },
        {
            "productId": 3,
            "productName": "Stilettos",
            "productCode": "OWK-666",
            "releaseDate": "December 25, 2018",
            "description": "Super adorable shoes!",
            "price": 30.66,
            "starRating": 5,
            "imageUrl": "https://5.imimg.com/data5/PI/AN/MY-48738153/stilettos-500x500.jpg"
        },
    ];
    toggleImage():void{
        this.showImage = !this.showImage;
    }
}
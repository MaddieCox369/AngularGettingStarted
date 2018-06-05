import { OnInit, Component } from "@angular/core";
import { IProduct } from "./product";
import { ActivatedRoute } from "@angular/router"

@Component({
    templateUrl: "./product-detail.component.html",
    styleUrls: ["./product-detail.component.css"]
})

export class ProductDetailComponent implements OnInit{
    pageTitle: string = "Product Details";
    product: IProduct;
    constructor(private _route: ActivatedRoute){
        console.log(this._route.snapshot.paramMap.get("id"));
    }
    ngOnInit(){
        let id = +this._route.snapshot.paramMap.get("id");
        this.pageTitle
    }
}
import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { ProductService } from "../products/product.service";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"],
    providers: [ProductService]
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    onClick(){
        this.ratingClicked.emit("clicked!");
    }
    ngOnChanges():void{
        this.starWidth = this.rating*86/5;
    }
}
import{Pizza} from 'src/app/models/pizza'

export class PizzaItems{
    category : string
    itemCost : number
    itemId : number
    itemName : String
    pizzas :Array<Pizza>

    constructor(    
        category : string,
        itemCost : number,
        itemId : number,
        itemName : string){
        this.category = category;
        this.itemCost = itemCost;
        this.itemId = itemId;
        this.itemName = itemName;

    }
    
    
}
import{PizzaItems} from 'src/app/models/pizzaitem'
import{Ticket} from 'src/app/models/ticket'

export class Pizza{
    items : Array<PizzaItems>
    pizzaId : number
    pizzaName : string
    price : number
    status : string

    constructor( pizzaId : number,
        pizzaName : string,
        price : number,
        status : string){
        this.pizzaId = pizzaId;
        this.pizzaName = pizzaName;
        this.price = price;
        this.status = status;

    }
    
}
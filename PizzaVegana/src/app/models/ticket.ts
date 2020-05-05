import{Pizza} from 'src/app/models/pizza'
import{Client} from 'src/app/models/client'

export class Ticket{

client : Client
cost : number
note : string
pizzas : Array<Pizza>
placementTime : string
status : string
ticketId : number

    constructor(client:Client,cost:number,note:string,pizzas:Array<Pizza>,
        placementTime:string, status:string,ticketId:number){
            this.client =client;
            this.cost=cost;
            this.note=note;
            this.pizzas = pizzas;
            this.placementTime = placementTime;
            this.status = status;
            this.ticketId = ticketId;



    }

}
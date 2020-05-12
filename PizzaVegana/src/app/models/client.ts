import{Ticket} from 'src/app/models/ticket'
import{UserRole} from 'src/app/models/userrole'

export class Client{
    clientId : number
    email : string
    firstName : string
    lastName : string
    password : string
    phone : string
    tickets : Array<Ticket>
    username : string
    userRole : UserRole

    constructor(   clientId : number,
        email : string,
        firstName : string,
        lastName : string,
        password : string,
        phone : string,
        tickets : Array<Ticket>,
        username : string,
        userRole : UserRole){
        this.clientId = clientId;
        this.email =email;
        this.firstName = firstName;
        this.lastName =lastName;
        this.password = password;
        this.phone = phone;
        this.tickets = tickets;
        this.username = username;
        this.userRole = userRole;
    }

}
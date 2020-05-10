import{Ticket} from 'src/app/models/ticket'
import{UserRole} from 'src/app/models/userrole'

//Client [clientId=0, firstName=Huxtable, lastName=333-333-3333, 
//email=ch@huxlaw.org, phone=Claire, username=LuxyHuxy, password=1234567, userRole=null]
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
        username : string,
        userRole : UserRole){
        this.clientId = clientId;
        this.email =email;
        this.firstName = firstName;
        this.lastName =lastName;
        this.password = password;
        this.phone = phone;
        this.username = username;
        this.userRole = userRole;
    }

}
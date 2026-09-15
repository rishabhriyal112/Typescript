//Partial Type - Partial makes all properties optional.
interface User {
    name : string;
    age : number;
    email : string;
}
const userUpdate : Partial<User> = {
    name : "Rishabh"
}

//Required - Required makes all properties required.
interface User2 {
    name? : string;
    age? : number;
    email? : string;
}
const user2 : Required<User2> ={
    name : "Rishabh",
    age : 21,
    email : "rishabh@gmail.com"
}

//Pick - Pick lets you select only certain properties from an existing type.
interface User3 {
    id : number;
    name : string;
    age : number;
    email : string;
}

type userSummary = Pick<User3 , "name" | "email">

const user3 : userSummary = {
    name : "Rishabh",
    email : "rishabh@gmail.com",
}

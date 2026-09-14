// function getSeatPrice(seat : "window" | "middle" | "aisle"){
//     if (seat === "window"){
//         return 100;
//     }
//     else if(seat === "middle"){
//         return 80;
//     }
//     else if(seat ==="aisle"){
//         return 90;
//     }
//     else{
//         const check : never = seat; //never is a type which means a value that should never exist
//         return check;
//     }
// }

type silver = {amount : "150" }
type gold = {amount : "200"}
type platinum = {amount : "250"}

type ticketPrice = silver | gold | platinum

function MovieTicket (ticket : ticketPrice){
    switch (ticket.amount) {
        case '150':
            return 'Silver Ticket'

        case '200':
            return 'Gold Ticket'

        case '250':
            return 'Platinum Ticket'
    }
}

console.log(MovieTicket({amount : "150"})) // Silver Ticket








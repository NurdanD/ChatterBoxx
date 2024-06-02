//Gönderme saatini 12:45 formatında yazabilmek için bu kod bloğuna ihtiyacımız var.
export function extractTime(dateString){

    const date= new Date(dateString);
    const hours= padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}: ${minutes}`;
} 

function padZero(number){
    return number.toString().padStart(2,"0");
}
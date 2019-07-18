export function getDate(date) {
    var dateString = new Date(parseInt(date));
    dateString = new Date(dateString).toUTCString();
    dateString = dateString.split(' ').slice(0, 4).join(' ');
    return dateString;
}
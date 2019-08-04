export function getDate(date) {
    var dateString = new Date(parseInt(date));
    dateString = new Date(dateString).toUTCString();
    dateString = dateString.split(' ').slice(0, 4).join(' ');
    return dateString;
}

export function uniqueId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function fileTypeExtension(type) {
    switch(type) {
        case 'video/mp4':
            return 'mp4';
        default:
            return 'txt';
    }
}
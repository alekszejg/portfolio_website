const dateFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // no AM or PM
});


export default function utcToLocalTime(utcDate: Date): string {
    const localDate: Date = new Date(utcDate.toLocaleString());
    
    const localDateString: string = dateFormat.format(localDate); 
    
    return localDateString;
}
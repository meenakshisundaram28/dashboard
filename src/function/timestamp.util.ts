export function getFormattedTimestamp(): string {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = date.toLocaleString('en-US', { month: 'short' }); 
    const year = date.getFullYear(); 
    const time = date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }); 
  
    return `${day} ${month} ${year}, ${time}`; 
  }
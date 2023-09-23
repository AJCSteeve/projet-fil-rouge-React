import itemsData from './items.js';

const allEvents = itemsData;

const spectacleEvents = allEvents.filter(event => event.eventType === 'Spectacle');
const concertEvents = allEvents.filter(event => event.eventType === 'Concert');

export { allEvents, spectacleEvents, concertEvents };

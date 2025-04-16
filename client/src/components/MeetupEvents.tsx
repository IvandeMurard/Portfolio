import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import meetupLogo from '../assets/meetup.png';

interface MeetupEvent {
  id: string;
  name: string;
  date: string;
  venue: string;
  url: string;
}

interface MeetupEventsProps {
  userId: string;
}

// This component will display upcoming Meetup events I'm planning to attend
const MeetupEvents = ({ userId }: MeetupEventsProps) => {
  const [events, setEvents] = useState<MeetupEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Featured events I'm planning to attend
    // Note: These would ideally come from Meetup API but using manual list for now
    const featuredEvents = [
      {
        id: "1",
        name: "Lion du Samedi : Le Promptathon",
        date: "April 26, 2025",
        venue: "Maria Schools, Paris",
        url: "https://lion.mariaschools.com/formations/lion-du-samedi"
      },
      {
        id: "2",
        name: "Paris AI Product Meetup #3",
        date: "April 25, 2025",
        venue: "Onboard.AI HQ, Paris",
        url: "https://www.meetup.com/fr-FR/paris-ai-product-meetup/"
      },
      {
        id: "3",
        name: "Paris Product Tank Meetup",
        date: "May 5, 2025",
        venue: "Scaleway HQ, Paris",
        url: "https://www.meetup.com/fr-FR/product-tank-paris/"
      },
      {
        id: "4",
        name: "Web3 Innovation Summit",
        date: "May 15, 2025",
        venue: "Station F, Paris",
        url: "https://www.meetup.com/fr-FR/web3-paris-meetup/"
      }
    ];

    // Simulate loading state
    setTimeout(() => {
      setEvents(featuredEvents);
      setLoading(false);
    }, 500);
  }, [userId]);

  if (loading) {
    return (
      <div className="p-6 bg-card rounded-lg shadow-sm border border-border h-full min-h-[200px] flex items-center justify-center dark:shadow-zinc-800/40">
        <div className="animate-pulse text-muted-foreground">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-card rounded-lg shadow-sm border border-border h-full dark:shadow-zinc-800/40">
      <div className="flex items-center mb-4">
        <div className="w-6 h-6 mr-2 flex items-center justify-center">
          <img src={meetupLogo} alt="Meetup" className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold font-poppins text-card-foreground">Events I'm Attending</h3>
      </div>

      {events.length === 0 ? (
        <p className="text-muted-foreground">No upcoming events found.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <motion.li 
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-border pb-3 last:border-b-0"
            >
              <a 
                href={event.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <h4 className="text-base font-medium text-card-foreground group-hover:text-secondary transition-colors">
                  {event.name}
                </h4>
                <div className="text-sm text-muted-foreground">
                  <p className="flex items-center">
                    <i className="ri-calendar-line text-secondary/80 mr-1"></i> {event.date}
                  </p>
                  <p className="flex items-center">
                    <i className="ri-map-pin-line text-secondary/80 mr-1"></i> {event.venue}
                  </p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      )}

      <a
        href={`https://www.meetup.com/fr-FR/find/?eventType=upcoming&userFreeform=My+events&source=EVENTS`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-sm text-[#f64060] hover:text-[#f64060]/80 hover:underline"
      >
        See all my Meetup events <i className="ri-external-link-line ml-1"></i>
      </a>
    </div>
  );
};

export default MeetupEvents;
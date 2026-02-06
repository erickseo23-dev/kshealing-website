/**
 * Schema.org Event JSON-LD Component
 * Generates structured data for events to improve Google Rich Results
 */

interface EventSchemaProps {
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  location?: string;
  url: string;
  eventStatus?: string;
}

export function SchemaEvent({
  name,
  description,
  image,
  startDate,
  endDate,
  location = "Online",
  url,
  eventStatus = "https://schema.org/EventScheduled",
}: EventSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    image,
    startDate,
    endDate,
    eventStatus,
    location: {
      "@type": "Place",
      name: location,
    },
    url,
    organizer: {
      "@type": "Organization",
      name: "KS Healing",
      url: "https://kshealing.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema.org Product JSON-LD Component
 * Generates structured data for products to improve Google Rich Results
 */

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price: string;
  currency?: string;
  availability?: string;
  url: string;
  ratingValue?: number;
  ratingCount?: number;
}

export function SchemaProduct({
  name,
  description,
  image,
  price,
  currency = "USD",
  availability = "https://schema.org/InStock",
  url,
  ratingValue,
  ratingCount,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    description,
    image,
    offers: {
      "@type": "Offer",
      url,
      price,
      priceCurrency: currency,
      availability,
    },
    ...(ratingValue && ratingCount && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue,
        ratingCount,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

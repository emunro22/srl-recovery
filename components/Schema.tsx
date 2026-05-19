export default function Schema() {
    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'AutoRepair',
      '@id': 'https://srlrecovery.com/#business',
      name: 'SRL Recovery',
      alternateName: 'SRL Recovery — 24/7 Breakdown Recovery Glasgow',
      description:
        "Glasgow's trusted 24/7 breakdown and accident recovery service. Owner with 17 years in the motor trade, completing 250+ recovery jobs every month.",
      url: 'https://srlrecovery.com',
      telephone: '+447776356556',
      email: 'srlautos@icloud.com',
      foundingDate: '2023',
      image: 'https://srlrecovery.com/images/logo.png',
      logo: 'https://srlrecovery.com/images/logo.png',
      priceRange: '££',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Howmuir Cottage',
        addressLocality: 'Cleland, Motherwell',
        postalCode: 'ML1 5PB',
        addressRegion: 'Scotland',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 55.7707,
        longitude: -3.9182,
      },
      areaServed: [
        { '@type': 'City', name: 'Glasgow' },
        { '@type': 'City', name: 'Paisley' },
        { '@type': 'City', name: 'East Kilbride' },
        { '@type': 'City', name: 'Motherwell' },
        { '@type': 'City', name: 'Hamilton' },
        { '@type': 'City', name: 'Clydebank' },
        { '@type': 'City', name: 'Coatbridge' },
        { '@type': 'City', name: 'Bearsden' },
        { '@type': 'City', name: 'Rutherglen' },
        { '@type': 'City', name: 'Cambuslang' },
        { '@type': 'City', name: 'Bellshill' },
        { '@type': 'City', name: 'Dumbarton' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      sameAs: [
        'https://www.facebook.com/profile.php?id=100091314683575',
        'https://www.google.com/search?q=SRL+recovery+24%2F7+breakdown+recovery+Glasgow',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '58',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Grace Brady' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'So pleased with William at SRL recovery who was so helpful. Provided a quote on the call and was able to recover our vehicle same day. Most competitive price and great service.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Alanna Hagan' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Excellent service provided. A recovery truck appeared within 20 mins of my call. Good pricing too!',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Brian Wilson' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Van was recovered within 50 mins. William was very helpful and kept communication lines open throughout. Highly recommended!',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Recovery Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '24/7 Breakdown Recovery',
              description: 'Round-the-clock vehicle recovery across Glasgow and surrounding areas. From £60 call-out plus £1.50 per mile.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Motorway Recovery',
              description: 'Motorway and live-lane recovery on the M8, M73, M74, M77, M80. £120 flat rate plus £1.50 per mile.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Accident Recovery',
              description: 'Fast, careful recovery following road traffic accidents. Fault and non-fault claims handled.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Vehicle Transport',
              description: 'Secure, insured transport for vehicles across Glasgow and the UK.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Accident Claim Handling',
              description: 'Non-fault accident claims managed from start to finish at no upfront cost.',
            },
          },
        ],
      },
    }
  
    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How quickly can you get to me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our average arrival time across Glasgow and surrounding areas is 30 to 45 minutes. This can vary depending on where your vehicle is and traffic conditions, but for urgent breakdowns we dispatch immediately.',
          },
        },
        {
          '@type': 'Question',
          name: 'What areas do you cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We cover Glasgow, Paisley, East Kilbride, Motherwell, Hamilton, Coatbridge, Bearsden, Rutherglen, Clydebank, Cambuslang, Bellshill, Dumbarton, and surrounding areas.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you operate 24 hours a day?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We are available 24 hours a day, 7 days a week, 365 days a year.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does breakdown recovery cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Local jobs start from £60 call-out plus £1.50 per mile. Motorway and live-lane jobs are £120 flat plus £1.50 per mile. A £40 winch fee or £40 skate fee may apply where required. All prices subject to VAT.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you cover motorways?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We recover from the M8, M73, M74, M77, M80 and surrounding routes.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I am in a non-fault accident?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We handle non-fault accident claims from start to finish at no upfront cost. We will recover your vehicle, manage the claim, and help arrange a replacement vehicle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to be a member or have breakdown cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No membership or subscription required. We are a pay-as-you-go service available to anyone, anytime.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of vehicles can you recover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cars, vans, light commercial vehicles, SUVs, and classic or prestige cars.',
          },
        },
      ],
    }
  
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      </>
    )
  }
  
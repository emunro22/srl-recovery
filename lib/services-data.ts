// Unique content for each search-intent service page.
// Every page has its own intro, body, FAQs, and CTA — no two pages share content.

export type ServicePageData = {
  slug: string
  title: string // for <title>
  metaDescription: string
  h1: string
  subheading: string
  introParagraph: string
  bodySections: {
    heading: string
    paragraphs: string[]
  }[]
  pricingNote?: string
  features: string[]
  faqs: { q: string; a: string }[]
  relatedServices: string[] // slugs of related services to cross-link
  serviceCategory: 'urgency' | 'vehicle' | 'situation' | 'addon' | 'pricing'
}

export const services: ServicePageData[] = [
  // === CLUSTER 1: URGENCY INTENT ===
  {
    slug: 'car-recovery-near-me',
    serviceCategory: 'urgency',
    title: 'Car Recovery Near Me Glasgow | 24/7 Local | SRL Recovery',
    metaDescription:
      'Need car recovery near you in Glasgow? SRL Recovery is your local 24/7 specialist. Average arrival 30–45 minutes. From £60. Call 07776 356 556.',
    h1: 'Car Recovery Near Me',
    subheading: 'Local Glasgow recovery — typically with you in 30–45 minutes',
    introParagraph:
      "If you've just searched for car recovery near you in Glasgow, you're already in the right place. SRL Recovery is a Motherwell-based, locally-owned recovery service operating 24 hours a day across Glasgow and surrounding areas. We don't outsource calls to a national dispatcher — when you ring 07776 356 556, you speak directly to William or one of the team, and a truck gets dispatched immediately.",
    bodySections: [
      {
        heading: 'Why "near me" matters for recovery',
        paragraphs: [
          "The recovery industry has a problem: most of the big-name companies you'll find online aren't local. You call a number, you're put through to a call centre, and they sub-contract your job to whoever's nearest. That's how a 30-minute job becomes a 90-minute wait — and how a £60 quote becomes £140 once everyone's taken their cut.",
          "SRL Recovery is the opposite. We're physically based in Cleland near Motherwell with trucks operating across the Glasgow area. When you call, the same person who answers the phone dispatches the driver. No middlemen, no markup, no confusion.",
        ],
      },
      {
        heading: 'How fast can we get to you?',
        paragraphs: [
          "Average arrival time across Glasgow and surrounding areas is 30–45 minutes. Closer to Motherwell (ML postcodes) it's often quicker — typically 20–30 minutes. The exact ETA depends on where you are, the time of day, and what trucks are free, but we'll give you a realistic estimate on the phone the moment you call.",
        ],
      },
    ],
    pricingNote:
      'Local recovery starts from £60 call-out + £1.50 per mile. We quote a clear price on the phone before we dispatch — no surprises, no hidden fees.',
    features: [
      'Locally-owned and operated (no call centres)',
      '24/7 dispatch, including weekends and holidays',
      'Average arrival 30–45 minutes',
      'Clear quote on the phone before we set off',
      'Fully insured and compliant',
    ],
    faqs: [
      {
        q: 'How do I find a recovery service near me right now?',
        a: 'Call SRL Recovery on 07776 356 556. We dispatch immediately across Glasgow and surrounding areas, 24 hours a day. Average arrival time is 30–45 minutes.',
      },
      {
        q: 'Are you actually local or a call centre?',
        a: 'We are genuinely local — based in Cleland near Motherwell. The person who answers your call is the same person who dispatches the truck. No outsourcing, no middlemen.',
      },
      {
        q: 'What does "near me" recovery cost?',
        a: 'Local recovery starts from £60 call-out plus £1.50 per mile. Most local jobs across Glasgow come in between £70 and £100. We confirm the exact price on the phone before dispatch.',
      },
    ],
    relatedServices: ['24-hour-recovery-near-me', 'emergency-breakdown-recovery', 'quick-car-recovery'],
  },

  {
    slug: '24-hour-recovery-near-me',
    serviceCategory: 'urgency',
    title: '24 Hour Car Recovery Near Me | SRL Recovery Glasgow',
    metaDescription:
      '24/7 car recovery near you in Glasgow. Operating round the clock — nights, weekends, holidays. Average arrival 30–45 minutes. Call 07776 356 556.',
    h1: '24 Hour Recovery Near You',
    subheading: 'Truly 24/7 — nights, weekends, bank holidays, Christmas Day',
    introParagraph:
      "Breakdowns don't keep office hours. SRL Recovery is one of the only genuinely 24/7 recovery services in the Glasgow area — we answer the phone at 3am the same way we do at 3pm. No voicemail, no \"emergency-only\" surcharges, no waiting until morning. If you've broken down right now, we dispatch right now.",
    bodySections: [
      {
        heading: 'What "24 hour" actually means here',
        paragraphs: [
          'Plenty of recovery services claim 24-hour cover and then bounce you to voicemail outside 9-5. We don\'t. The same number — 07776 356 556 — is answered around the clock by William or a member of the team, every day of the year.',
          "Late-night call-outs are common for us. Friday and Saturday nights are particularly busy with accident recoveries from the M8 and A724, and we handle a lot of early-morning M77 and M74 breakdowns from people heading to work or the airport. Whatever time you're stuck, we've been there before.",
        ],
      },
      {
        heading: 'Out of hours pricing',
        paragraphs: [
          "There are no out-of-hours surcharges with SRL Recovery. Recovery at 3am costs the same as recovery at 3pm — £60 local call-out plus £1.50 per mile, or £120 flat for motorway/live-lane work. Same clear, up-front pricing whatever the hour.",
        ],
      },
    ],
    features: [
      'Genuinely 24/7 — no voicemail, no out-of-hours rates',
      'Direct line to William or the team, every time',
      'Average arrival 30–45 minutes any time of day',
      'Common late-night routes: M8, M74, M77, A724',
      'Same pricing day or night',
    ],
    faqs: [
      {
        q: 'Are you really open 24 hours?',
        a: "Yes. The number 07776 356 556 is answered 24 hours a day, 7 days a week, every day of the year — including Christmas Day. There's no voicemail and no out-of-hours menu.",
      },
      {
        q: 'Do you charge more at night?',
        a: 'No. Our pricing is the same regardless of time — £60 local call-out plus £1.50 per mile, or £120 flat for motorway recovery.',
      },
      {
        q: 'What if I break down at 4am?',
        a: "Call us. We'll be on the way within minutes. Late-night call-outs are routine for us — we handle them daily.",
      },
    ],
    relatedServices: ['car-recovery-near-me', 'emergency-breakdown-recovery', 'motorway-recovery-glasgow'],
  },

  {
    slug: 'emergency-breakdown-recovery',
    serviceCategory: 'urgency',
    title: 'Emergency Breakdown Recovery Glasgow | Immediate Dispatch',
    metaDescription:
      'Emergency breakdown? SRL Recovery dispatches immediately across Glasgow. Average arrival 30–45 minutes. 24/7 cover. Call 07776 356 556.',
    h1: 'Emergency Breakdown Recovery',
    subheading: 'Immediate dispatch when you need it most',
    introParagraph:
      "An emergency breakdown is stressful enough without bouncing between hold music and call centres. SRL Recovery cuts that out — one call, one team, one truck heading your way. Whether you're stuck in a live lane on the motorway, broken down in a car park with kids in the back, or stranded somewhere unsafe, we treat every call as the priority it is.",
    bodySections: [
      {
        heading: 'What we class as an emergency',
        paragraphs: [
          "Any breakdown that puts you, your vehicle, or other road users at risk gets bumped to the top of the queue. That includes live-lane motorway breakdowns, accidents, breakdowns in unsafe locations (junctions, blind bends, near schools at chucking-out time), and any situation involving vulnerable passengers — kids, elderly, people with medical conditions.",
          "If you're not sure whether it counts as an emergency, just call. We'd rather you ring and we tell you it's routine than the other way round.",
        ],
      },
      {
        heading: 'What to do while you wait',
        paragraphs: [
          "Safety first: if you can do so safely, get yourself and any passengers out of the vehicle and behind a barrier or onto the verge. Put hazards on. If you're on the motorway, ring 999 first — Police Scotland or Traffic Scotland will get the lane closed if needed, and we'll coordinate with them.",
          "Stay on the line with us if you need to — we can talk you through what to do until we arrive.",
        ],
      },
    ],
    features: [
      'Immediate dispatch on emergency calls',
      'Average arrival 30–45 minutes',
      'Coordination with Police Scotland / Traffic Scotland where needed',
      'Trained for live-lane and accident recovery',
      'Fully insured, fully compliant',
    ],
    faqs: [
      {
        q: 'How quickly can you actually arrive in an emergency?',
        a: 'For genuine emergencies (live-lane breakdowns, accidents, dangerous locations) we drop everything and head straight to you. Typical arrival is 20–40 minutes depending on location.',
      },
      {
        q: "I'm in a live lane on the M8 — what do I do?",
        a: "First, call 999 — Police Scotland will close the lane if necessary. Then call us on 07776 356 556 and we'll head to you immediately. Don't get out of the vehicle if it's not safe to do so.",
      },
      {
        q: 'Do you charge more for emergency call-outs?',
        a: 'No — same standard pricing applies. Local emergencies from £60 call-out + £1.50/mile, motorway emergencies £120 flat + £1.50/mile.',
      },
    ],
    relatedServices: ['motorway-recovery-glasgow', '24-hour-recovery-near-me', 'accident-recovery-glasgow'],
  },

  {
    slug: 'quick-car-recovery',
    serviceCategory: 'urgency',
    title: 'Quick Car Recovery Glasgow | 30–45 Min Average | SRL Recovery',
    metaDescription:
      'Need quick car recovery in Glasgow? We typically arrive in 30–45 minutes. 24/7 dispatch. From £60. Call SRL Recovery on 07776 356 556.',
    h1: 'Quick Car Recovery',
    subheading: 'Speed is what we do — 30–45 minutes is the typical arrival window',
    introParagraph:
      "Some recovery services drag their heels. We don't. Speed is the single biggest reason people leave us 5-star reviews — repeatedly mentioning 20-minute arrivals when competitors quoted 2 hours. If you need quick car recovery in Glasgow, SRL is who you call.",
    bodySections: [
      {
        heading: 'What "quick" actually looks like with us',
        paragraphs: [
          "Average arrival time across Glasgow and surrounding areas is 30–45 minutes. In the Motherwell area specifically, we routinely arrive in 20–30 minutes. Customers regularly mention beating our quoted ETA — because we'd rather under-promise than leave you waiting.",
          'Here\'s what people actually say in our Google reviews: "A recovery truck appeared within 20 mins of my call. The previous company I had called had quoted a wait time of 2 hours." That\'s the difference between a local operator and a national call centre.',
        ],
      },
      {
        heading: 'Why we\'re faster than the big names',
        paragraphs: [
          "Two reasons. First, no middleman: when you ring us, the call doesn't get bounced to a regional dispatcher who then bounces it to a sub-contractor — we ARE the dispatcher and the recovery service. Second, our trucks are based locally in Cleland, not three counties away. We're already in your area.",
        ],
      },
    ],
    features: [
      '30–45 minute average arrival across Glasgow',
      '20–30 minutes typical for Motherwell/ML postcodes',
      'No call-centre delay — direct dispatch',
      'Trucks based locally in Cleland',
      'Real-time ETA given on the call',
    ],
    faqs: [
      {
        q: "What's the fastest you've arrived?",
        a: 'Under 15 minutes happens regularly when our nearest truck is already close to you. Several Google reviews mention sub-20-minute arrivals.',
      },
      {
        q: 'How is your dispatch so quick?',
        a: "We don't use call centres or third-party dispatchers. The person who answers the phone is the person sending the truck — no chain of middlemen to slow things down.",
      },
      {
        q: 'Can you guarantee an arrival time?',
        a: "We can't legally guarantee a specific minute (traffic, weather, and current jobs all factor in) but we give you an honest ETA on the call and update you if anything changes.",
      },
    ],
    relatedServices: ['car-recovery-near-me', '24-hour-recovery-near-me', 'emergency-breakdown-recovery'],
  },

  {
    slug: 'cheap-car-recovery-glasgow',
    serviceCategory: 'pricing',
    title: 'Cheap Car Recovery Glasgow | From £60 | SRL Recovery',
    metaDescription:
      'Affordable car recovery in Glasgow from £60 + £1.50/mile. No hidden fees. Clear price quoted on the phone before we dispatch. Call 07776 356 556.',
    h1: 'Affordable Car Recovery in Glasgow',
    subheading: 'From £60 — competitive local rates, no hidden surcharges',
    introParagraph:
      "If you're searching for cheap car recovery in Glasgow, the word you actually want is affordable — and that's exactly what SRL Recovery offers. We're consistently the most competitive option in the area without cutting corners on the service. Local jobs from £60. Clear quote on the phone. No upsells, no surprise fees on arrival.",
    bodySections: [
      {
        heading: "Why we're cheaper than the national brands",
        paragraphs: [
          "Big national recovery brands carry a lot of overhead: corporate call centres, marketing budgets, sub-contractor fees. All of that gets added to your bill. SRL Recovery is locally owned and run, with a small fleet and minimal overhead — savings get passed directly to you.",
          "Our Google reviews repeatedly mention us being the most competitive priced option people found when phoning around — and one of the few that quoted clearly and honestly upfront rather than starting low and adding fees later.",
        ],
      },
      {
        heading: 'Our exact pricing',
        paragraphs: [
          'Local recovery: £60 call-out + £1.50 per mile.',
          'Motorway/live-lane: £120 flat + £1.50 per mile.',
          'Winch fee: £40 (only if needed).',
          'Skate fee: £40 (only if needed — for immobilised vehicles).',
          'All prices subject to VAT. We confirm the final price on the phone before dispatching.',
        ],
      },
    ],
    pricingNote:
      "What you won't find: out-of-hours surcharges, holiday surcharges, mileage rounding tricks, or fuel levies. The price we quote on the phone is the price you pay.",
    features: [
      'From £60 local call-out',
      'Clear price quoted on the phone',
      'No out-of-hours or holiday surcharges',
      'No surprise fees on arrival',
      'Cash, card, or bank transfer accepted',
    ],
    faqs: [
      {
        q: 'Are you the cheapest recovery in Glasgow?',
        a: "We're consistently among the most competitive — our Google reviews repeatedly mention us being the best-priced option people found when phoning around. Cheaper than national brands like the AA/RAC for non-members, and cheaper than most local competitors too.",
      },
      {
        q: 'Why is the AA/RAC more expensive for non-members?',
        a: "Non-member call-outs from the national brands typically start around £150–£200 because you're paying for their infrastructure and the urgency markup. Local operators like us can offer the same service for less because we don't carry that overhead.",
      },
      {
        q: 'Do you offer discounts for repeat customers or trade?',
        a: "Yes — if you're a garage, dealer, or insurance company doing regular volume, give us a call and we'll discuss trade rates.",
      },
    ],
    relatedServices: ['car-recovery-prices', 'car-recovery-near-me', 'vehicle-transport-glasgow'],
  },

  // === CLUSTER 2: VEHICLE TYPE ===
  {
    slug: 'van-recovery-glasgow',
    serviceCategory: 'vehicle',
    title: 'Van Recovery Glasgow | 24/7 Commercial | SRL Recovery',
    metaDescription:
      'Van recovery across Glasgow — Transits, Sprinters, Crafters, Lutons. 24/7 dispatch. Trade-friendly. Call SRL Recovery on 07776 356 556.',
    h1: 'Van Recovery Glasgow',
    subheading: 'Commercial vehicle recovery — Transits, Sprinters, Crafters, Lutons',
    introParagraph:
      "Van breakdowns cost money — every hour off the road is an hour not earning. SRL Recovery specialises in fast commercial van recovery across Glasgow, with the right equipment for everything from a Transit Connect to a 3.5-tonne Luton. We work with sole traders, trade businesses, fleet operators, and delivery drivers.",
    bodySections: [
      {
        heading: 'Vans we recover',
        paragraphs: [
          'We recover the full range of light commercial vehicles up to 3.5 tonnes — Ford Transit (all sizes), Mercedes Sprinter, VW Crafter and Transporter, Iveco Daily, Renault Master, Vauxhall Movano and Vivaro, Citroën Relay, Peugeot Boxer, Nissan NV200/NV400. Whether you\'re driving a panel van, Luton box, dropside, or tipper, we have the truck for it.',
          "Specialist trade vans like plumbers' vans loaded with tools, mobile workshops, courier vans full of parcels — we handle those daily. We\'ll get you and your load to wherever you need to go.",
        ],
      },
      {
        heading: 'Why trade businesses use us',
        paragraphs: [
          'Trade customers like the speed (you can\'t afford to wait around) and the pricing (clear quote, trade rates available for regular volume). Several local garages and dealerships use us as their default recovery partner.',
          "If you operate a fleet of any size and want to set up an account, give us a call — we'll discuss trade rates and a priority dispatch arrangement.",
        ],
      },
    ],
    pricingNote:
      'Van recovery prices are the same as our standard rates — from £60 local + £1.50/mile, or £120 flat for motorway. No weight surcharges for vehicles under 3.5 tonnes.',
    features: [
      'All light commercial vehicles up to 3.5t',
      'Trade and fleet accounts welcome',
      'Priority dispatch for trade customers',
      'Load secured and recovered intact',
      '24/7 cover including weekends',
    ],
    faqs: [
      {
        q: 'Do you recover loaded vans?',
        a: "Yes — we'll recover the van with the load in place wherever possible. If the load needs to be unloaded for safety or weight reasons we'll tell you on the phone.",
      },
      {
        q: 'Can you recover vans bigger than 3.5 tonnes?',
        a: "Standard 3.5t Lutons, Sprinters, Crafters etc — yes, no problem. For 7.5-tonne+ HGVs you'll need a specialist heavy recovery service.",
      },
      {
        q: 'Do you offer trade accounts?',
        a: 'Yes — if you run multiple vehicles or a garage/dealership that needs regular recovery, give us a call and we\'ll set up an account with trade rates and priority dispatch.',
      },
    ],
    relatedServices: ['vehicle-transport-glasgow', 'car-recovery-near-me', 'accident-recovery-glasgow'],
  },

  {
    slug: 'motorbike-recovery-glasgow',
    serviceCategory: 'vehicle',
    title: 'Motorbike Recovery Glasgow | 24/7 Bike Transport | SRL Recovery',
    metaDescription:
      'Motorbike recovery across Glasgow — all bike sizes, careful loading, full insurance. 24/7 dispatch. Call SRL Recovery on 07776 356 556.',
    h1: 'Motorbike Recovery Glasgow',
    subheading: 'Careful, specialist recovery for bikes of all sizes',
    introParagraph:
      "Motorbikes need different handling than cars — different straps, different angles, different care taken to protect the bike's fairings and fuel tank. SRL Recovery handles bike recovery regularly across Glasgow with the right kit and the right approach. Sportsbikes, tourers, cruisers, adventure bikes, scooters — we recover them all without damage.",
    bodySections: [
      {
        heading: 'How we recover bikes safely',
        paragraphs: [
          'Bikes are loaded onto our flatbed using a ramp and properly secured with bike-specific tie-down straps to the lower triple clamps, foot pegs, or sub-frame — never the handlebars (which can damage the steering head bearings) and never directly to fairings.',
          "On the truck the bike is held upright or strapped onto its side stand depending on the bike type and condition. For sportsbikes we use front-wheel chocks. Everything is inspected before we leave to make sure nothing's going to move during transit.",
        ],
      },
      {
        heading: 'Common motorbike recovery situations',
        paragraphs: [
          "We get a lot of breakdown calls from riders on the A82, A77, and A720 — popular Sunday-ride routes that occasionally end with someone stuck on the hard shoulder. We also handle post-accident recovery (often in coordination with the rider's insurance), end-of-season bike storage moves, dealer transport between showrooms, and recovery after running out of fuel or flat batteries.",
        ],
      },
    ],
    features: [
      'All bike types — sportsbikes to adventure bikes',
      'Bike-specific tie-down straps and chocks',
      'No damage to fairings or steering head',
      'Insurance and accident bike recovery',
      'Dealer and showroom transport available',
    ],
    faqs: [
      {
        q: 'Do you recover dropped/crashed bikes?',
        a: "Yes — we handle a lot of accident bike recoveries. We'll load the bike carefully even if it's damaged, and we can coordinate with your insurance for a non-fault claim if applicable.",
      },
      {
        q: 'What size of bike can you recover?',
        a: 'Everything from 125cc commuters up to full-sized cruisers and adventure bikes. Heavier touring bikes are no problem — they get strapped down securely.',
      },
      {
        q: 'Will my bike be damaged in transit?',
        a: 'No — we use bike-specific straps and chocks that secure to load-bearing parts of the frame, never to fairings or handlebars. Every bike is inspected before transit.',
      },
    ],
    relatedServices: ['vehicle-transport-glasgow', 'accident-recovery-glasgow', 'non-fault-accident-recovery'],
  },

  {
    slug: '4x4-recovery-glasgow',
    serviceCategory: 'vehicle',
    title: '4x4 & SUV Recovery Glasgow | Land Rover, Range Rover | SRL Recovery',
    metaDescription:
      '4x4 and SUV recovery across Glasgow — Land Rovers, Range Rovers, Jeeps, Defenders. Heavy-duty equipment. 24/7. Call 07776 356 556.',
    h1: '4x4 & SUV Recovery Glasgow',
    subheading: 'Heavy-duty recovery for Land Rovers, Range Rovers, Jeeps and big SUVs',
    introParagraph:
      "4x4s and big SUVs are heavier than the average saloon and often need more powerful recovery equipment. SRL Recovery operates trucks with the lifting capacity and the right approach for everything from a Discovery Sport to a full-size Range Rover, Defender, Jeep Wrangler, or G-Wagon.",
    bodySections: [
      {
        heading: '4x4s we recover',
        paragraphs: [
          "All Land Rover and Range Rover models (Defender, Discovery, Sport, Velar, Evoque, full-size Range Rover), Jeep (Wrangler, Cherokee, Grand Cherokee, Renegade), Toyota (Land Cruiser, RAV4, Hilux), Mitsubishi Shogun and L200, Mercedes G-Wagon and GLS, BMW X5/X6/X7, Audi Q7/Q8, Porsche Cayenne and Macan, Volvo XC90, Lexus LX.",
          "Pickups, large SUVs, and off-road-modified vehicles are all routine work for us.",
        ],
      },
      {
        heading: 'Stuck in a field or off-road?',
        paragraphs: [
          "We're set up for road recovery, not winching out of deep mud or off mountain tracks — for proper off-road recovery you'd want a specialist 4x4 rescue service. But if your 4x4 has broken down on a track or in a car park that's accessible to a recovery truck, we'll get it out.",
        ],
      },
    ],
    features: [
      'Heavy-duty lifting and recovery equipment',
      'All major 4x4 and SUV models handled',
      'Pickup trucks (Hilux, Ranger, L200, Amarok)',
      'Prestige and modified 4x4s welcome',
      'Insurance recovery handled',
    ],
    faqs: [
      {
        q: 'Can you recover a full-size Range Rover?',
        a: 'Yes — our trucks have the capacity for full-size Range Rovers, Land Cruisers, G-Wagons, and similar heavy 4x4s.',
      },
      {
        q: 'What about lifted or modified 4x4s?',
        a: "No problem in most cases — let us know on the phone what modifications you have (lift kit, oversize tyres, bull bar etc) and we'll send the right truck.",
      },
      {
        q: 'Can you winch a 4x4 stuck in mud or off-road?',
        a: "For accessible terrain, yes — we have winching capability. For deep off-road bogs or remote mountain locations you'd want a dedicated off-road rescue service. Call us and we'll tell you honestly whether we can help.",
      },
    ],
    relatedServices: ['vehicle-transport-glasgow', 'car-recovery-near-me', 'prestige-car-recovery-glasgow'],
  },

  {
    slug: 'classic-car-recovery-glasgow',
    serviceCategory: 'vehicle',
    title: 'Classic Car Recovery Glasgow | Specialist Transport | SRL Recovery',
    metaDescription:
      'Classic and vintage car recovery across Glasgow. Specialist handling, flatbed transport, full insurance. Call SRL Recovery on 07776 356 556.',
    h1: 'Classic Car Recovery Glasgow',
    subheading: 'Specialist recovery and transport for classic, vintage, and collector cars',
    introParagraph:
      "Classic cars need a more careful touch than your average runabout — soft straps, flatbed transport (never tow), and someone who understands why you don't winch a Jaguar XK by its chrome bumper. SRL Recovery handles classic car work regularly across Glasgow with the right equipment and the right approach.",
    bodySections: [
      {
        heading: 'How we handle classics differently',
        paragraphs: [
          "Every classic recovery is flatbed transport — no towing. We use soft straps over wheels and chassis points only, never around bodywork. We're aware of common classic-car weak points (chrome bumpers, original paint, vinyl roofs) and load accordingly. For lower-slung classics like E-Types, MGBs, and Aston Martins we use longer, shallower-angle ramps to avoid grounding.",
          "If you have specific instructions (jacking points, towing eyes, things to avoid) tell us on the call and we'll follow them to the letter.",
        ],
      },
      {
        heading: 'Common classic car jobs',
        paragraphs: [
          'Breakdown recovery from car shows and rallies — particularly around Knockhill, the Scottish Classic Car Show, and the various local rallies. Transport between owner and restoration shop. Pre-purchase inspection viewings (we collect the car so the buyer doesn\'t risk driving an unknown classic home). End-of-season storage moves. Auction transport.',
          "Whether you've owned a 1965 E-Type for 30 years or just bought your first MG Midget, your car gets handled like it's irreplaceable.",
        ],
      },
    ],
    features: [
      'Flatbed-only transport (never tow)',
      'Soft straps, chassis tie-down points only',
      'Long, shallow ramps for low-slung cars',
      'Specialist classic insurance accepted',
      'Show, rally, and event recovery',
    ],
    faqs: [
      {
        q: 'Will my classic be towed or flatbedded?',
        a: 'Flatbed every time. We never tow a classic — too much risk to gearbox, chassis, and bodywork.',
      },
      {
        q: 'Do you handle very low-slung classics like E-Types?',
        a: "Yes — we use long, shallow ramps and approach angles that don't risk grounding. Let us know on the phone what car it is and we'll come prepared.",
      },
      {
        q: 'Can you transport a non-running classic for restoration?',
        a: 'Absolutely — non-running classics, restoration project cars, and barn-find rescues are all routine work for us.',
      },
    ],
    relatedServices: ['prestige-car-recovery-glasgow', 'vehicle-transport-glasgow', 'car-recovery-near-me'],
  },

  {
    slug: 'prestige-car-recovery-glasgow',
    serviceCategory: 'vehicle',
    title: 'Prestige Car Recovery Glasgow | Porsche, Ferrari, Aston | SRL',
    metaDescription:
      'Prestige and supercar recovery in Glasgow — Porsche, Ferrari, Aston Martin, Lamborghini, McLaren. Specialist handling. Call 07776 356 556.',
    h1: 'Prestige Car Recovery Glasgow',
    subheading: 'Specialist recovery for Porsche, Ferrari, Aston Martin, Lamborghini, McLaren',
    introParagraph:
      "Prestige cars need prestige-level care. Low-clearance front splitters, ceramic brakes that can't be dragged, carbon-fibre body panels that absolutely cannot be strapped over — we know the drill. SRL Recovery handles supercar and prestige work routinely across Glasgow with the equipment and experience to do it right.",
    bodySections: [
      {
        heading: 'Why prestige cars need specialist handling',
        paragraphs: [
          "A modern supercar has ground clearance measured in millimetres, carbon body panels you can't strap to, exotic transmissions you can't dolly-tow, and a paint finish worth thousands per panel. One unprepared recovery driver can do five figures of damage in five seconds.",
          "Every prestige recovery with us is flatbed only, with extra-long shallow-angle ramps (we have access to extended ramps for the lowest of the low). Soft polyester straps over wheels — never over bodywork. We approach slowly, we communicate every step, and we double-check loading before moving.",
        ],
      },
      {
        heading: 'Cars we regularly recover',
        paragraphs: [
          "Porsche (911, 718, Taycan, Panamera, Cayman, Macan, Cayenne), Ferrari (488, F8, 296, Roma, Portofino, Purosangue), Aston Martin (DB11, DB12, Vantage, DBX), Lamborghini (Huracán, Urus), McLaren (570S, 720S, Artura), Bentley (Continental, Bentayga, Flying Spur), Rolls-Royce (Ghost, Wraith, Cullinan), Audi RS / R8, BMW M-series, Mercedes-AMG.",
          "Whether you're a private owner, a dealership, a track day operator, or a luxury car hire company — your vehicle gets recovered the way it deserves.",
        ],
      },
    ],
    features: [
      'Flatbed-only with extended shallow ramps',
      'Soft wheel straps, no body contact',
      'Specialist supercar insurance accepted',
      'Dealership and showroom transport',
      'Track day and event recovery',
    ],
    faqs: [
      {
        q: 'Can you recover a Lamborghini Huracán without damaging it?',
        a: "Yes — we have extended shallow ramps for low-clearance supercars and we never strap over bodywork. We've recovered Huracáns, 720S McLarens, 488 Ferraris, and similar without issues.",
      },
      {
        q: 'Do you work with prestige car dealerships?',
        a: "Yes — we work with several local prestige dealers for showroom transport, customer recovery, and pre-delivery moves. If you're a dealer and want to set up an account, give us a call.",
      },
      {
        q: 'My car has ceramic brakes — does that affect recovery?',
        a: "Yes — ceramic-braked cars shouldn't be dragged or dolly-towed cold. We always flatbed prestige cars, so it's not an issue with us.",
      },
    ],
    relatedServices: ['classic-car-recovery-glasgow', 'vehicle-transport-glasgow', '4x4-recovery-glasgow'],
  },

  // === CLUSTER 3: SITUATION ===
  {
    slug: 'accident-recovery-glasgow',
    serviceCategory: 'situation',
    title: 'Accident Recovery Glasgow | Fault & Non-Fault | SRL Recovery',
    metaDescription:
      'Accident recovery in Glasgow — fault and non-fault claims handled. 24/7 dispatch, insurance coordination, replacement vehicle support. Call 07776 356 556.',
    h1: 'Accident Recovery Glasgow',
    subheading: 'Fast, careful recovery after a road traffic accident',
    introParagraph:
      "If you've just been in an accident, your priorities are simple: make sure everyone's OK, get the car off the road safely, and start sorting out the claim. SRL Recovery handles the middle part — fast, careful, properly insured accident recovery 24 hours a day across Glasgow. We work with all major UK insurance companies and can coordinate non-fault claims at no upfront cost to you.",
    bodySections: [
      {
        heading: "What we do at the scene",
        paragraphs: [
          "We arrive, assess the vehicle, and decide whether it's drivable or needs to be loaded. For damaged vehicles we use the right kit to load without causing additional damage — particularly important for newer cars with crumple zones and complex underbodies.",
          "We can take the vehicle to your home, a garage of your choice, or directly to a body shop. If you're going through an insurance claim, we can deliver to your insurer's preferred repairer. If it's a write-off situation, we'll take it to your insurer's storage facility.",
        ],
      },
      {
        heading: 'Insurance coordination',
        paragraphs: [
          "We deal with insurers daily and know how to handle the paperwork — claim references, fee-recovery letters, salvage handovers, the lot. For non-fault accidents we can handle the entire claim at no upfront cost to you, and arrange a like-for-like replacement vehicle while yours is being repaired.",
        ],
      },
    ],
    features: [
      '24/7 accident recovery dispatch',
      'Fault and non-fault claims handled',
      'No upfront cost for non-fault accidents',
      'Replacement vehicle coordination',
      'All UK insurers accepted',
    ],
    faqs: [
      {
        q: "I've just had an accident — what's the first thing to do?",
        a: "Safety first: check everyone is OK, move away from the road if you can, call 999 if anyone is injured or the road is blocked. Then exchange details with the other driver and take photos of the scene. Then call us — we'll get the vehicle moved.",
      },
      {
        q: "Does my insurance cover the recovery?",
        a: "Most comprehensive policies cover accident recovery — call your insurer first if you're not sure. If it's a non-fault accident we can handle the claim through the other driver's insurance at no upfront cost.",
      },
      {
        q: "Can you take my car to my own garage?",
        a: "Yes — we'll take it wherever you want it: your home, your usual garage, a body shop, or your insurer's preferred repairer. Your choice.",
      },
    ],
    relatedServices: ['non-fault-accident-recovery', 'insurance-recovery-glasgow', 'motorway-recovery-glasgow'],
  },

  {
    slug: 'non-fault-accident-recovery',
    serviceCategory: 'situation',
    title: 'Non-Fault Accident Recovery Glasgow | No Upfront Cost | SRL',
    metaDescription:
      'Non-fault accident? SRL Recovery handles your claim from start to finish at zero upfront cost. Recovery, claim, replacement vehicle. Call 07776 356 556.',
    h1: 'Non-Fault Accident Recovery',
    subheading: 'Hit by someone else? We handle everything at no cost to you',
    introParagraph:
      "Being hit by someone else's mistake is bad enough — paying for the consequences shouldn't fall on you. If you've been in a non-fault accident in Glasgow, SRL Recovery can handle the entire process at no upfront cost: recovery from the scene, claim management against the at-fault driver's insurance, and arranging a like-for-like replacement vehicle while yours is being repaired.",
    bodySections: [
      {
        heading: 'How non-fault recovery actually works',
        paragraphs: [
          "When you're not at fault, the at-fault driver's insurer is legally responsible for putting you back in the position you were in before the accident. That includes: recovering your vehicle, repairing or writing it off, providing you with a comparable replacement vehicle while you're without yours, and covering any other reasonable losses.",
          "The catch is that getting all of that done correctly takes time and paperwork. We handle it. You don't pay us anything — we recover our costs from the at-fault insurer at the end of the claim.",
        ],
      },
      {
        heading: 'What you get with a non-fault claim',
        paragraphs: [
          'Free vehicle recovery from the accident scene to a repairer of your choice. Free replacement vehicle (like-for-like — if you drive a BMW, you get a BMW) until yours is repaired or written off. Full claim management against the third-party insurer. No effect on your no-claims bonus if handled correctly. No call to your own insurer required (in most cases).',
          "All of this depends on liability being clear — if there's a dispute about who was at fault, the process gets more complex. We'll be straight with you on the call about whether your situation qualifies.",
        ],
      },
    ],
    features: [
      'Zero upfront cost — ever',
      'Like-for-like replacement vehicle',
      "No effect on your no-claims bonus",
      'Claim handled end-to-end',
      'Most cases resolved within 7–14 days',
    ],
    faqs: [
      {
        q: 'How do I know if my accident counts as non-fault?',
        a: "If the other driver was clearly responsible (rear-ended you, ran a red light, pulled out on you etc) and their insurer accepts liability, it's a non-fault claim. We'll discuss your specific situation on the call.",
      },
      {
        q: "Will this affect my no-claims discount?",
        a: 'A properly-handled non-fault claim should not affect your no-claims discount. We take care to ensure liability is correctly recorded and your insurer is informed appropriately.',
      },
      {
        q: 'How quickly can I get a replacement vehicle?',
        a: "Usually within 24–48 hours of the claim being lodged. The replacement is provided by a credit hire company we work with, and you'll get a like-for-like vehicle in terms of size and specification.",
      },
      {
        q: 'What if the other driver disputes liability?',
        a: "Disputed-liability cases take longer and can be more complex, but we'll still help you through it. The replacement vehicle may not be available immediately if liability is in question.",
      },
    ],
    relatedServices: ['accident-recovery-glasgow', 'insurance-recovery-glasgow', 'car-recovery-near-me'],
  },

  {
    slug: 'motorway-recovery-glasgow',
    serviceCategory: 'situation',
    title: 'Motorway Recovery Glasgow | M8 M74 M77 M73 M80 | SRL Recovery',
    metaDescription:
      'Motorway breakdown? SRL Recovery covers M8, M74, M77, M73, M80 24/7. Live-lane experience, fast dispatch. Call 07776 356 556.',
    h1: 'Motorway Recovery Glasgow',
    subheading: 'Covering the M8, M74, M77, M73, and M80 around the clock',
    introParagraph:
      "Motorway breakdowns are the most dangerous kind. Speed differentials are higher, escape options are limited, and you're sharing space with HGVs. SRL Recovery handles motorway and live-lane recovery across all the major routes around Glasgow — and we know each one well from regular call-outs.",
    bodySections: [
      {
        heading: 'What to do RIGHT NOW if you\'re broken down on a motorway',
        paragraphs: [
          "1. If the car is moving, get it onto the hard shoulder or off at the next exit. 2. Put hazards on immediately. 3. Get yourself and any passengers out of the vehicle on the passenger side and over the barrier onto the verge. 4. Call 999 first — Police Scotland or Traffic Scotland will close the lane if needed. 5. Then call us on 07776 356 556 and we'll dispatch immediately.",
          "Smart motorways without a hard shoulder are particularly dangerous. If you can't make it off the motorway and end up in a live lane, stay in the car with seatbelts on, hazards on, and call 999 immediately — do not get out unless directed to.",
        ],
      },
      {
        heading: 'M8 recovery',
        paragraphs: [
          "The M8 is our busiest motorway — runs the full width of the central belt from Edinburgh to Greenock through Glasgow city centre. We regularly recover from junctions 1 through 31, including the tricky urban stretches around Charing Cross, the Kingston Bridge, and the Edinburgh-bound climb out of Glasgow. Average arrival on the M8 within Glasgow city limits: 25–40 minutes.",
        ],
      },
      {
        heading: 'M74 / A74(M) recovery',
        paragraphs: [
          "The M74 runs south from Glasgow toward Carlisle and the M6. We cover from junction 1 (Glasgow) all the way to the M6 border. Particularly common stretches for breakdowns: the M74 extension through Rutherglen/Cambuslang, junctions 5-10 around Hamilton and Larkhall, and the long climb at Beattock. Average arrival on M74 within 30 miles of Glasgow: 30–45 minutes.",
        ],
      },
      {
        heading: 'M77 recovery',
        paragraphs: [
          "The M77 runs from Glasgow city south-west to Kilmarnock. Common breakdown spots: junction 4 (Newton Mearns), junctions 5-6 around East Renfrewshire, and the busy junction 1 interchange with the M8. We cover the whole length.",
        ],
      },
      {
        heading: 'M73 and M80 recovery',
        paragraphs: [
          "The M73 is a short stretch connecting the M8 and M74 — we cover the whole length. The M80 runs from the M73 north toward Stirling — we cover from the M73 junction up to Cumbernauld and beyond.",
        ],
      },
    ],
    pricingNote:
      "Motorway and live-lane recovery is £120 flat call-out plus £1.50 per mile. The higher rate reflects the additional risk, equipment, and time involved in working on a live motorway.",
    features: [
      'Live-lane recovery experience',
      'Police Scotland / Traffic Scotland coordination',
      'High-visibility, fully-equipped trucks',
      'All major Glasgow-area motorways covered',
      '24/7 dispatch — no exceptions',
    ],
    faqs: [
      {
        q: "I'm broken down on the M8 — should I get out of the car?",
        a: "If you're on the hard shoulder: yes, get out on the passenger side and stand behind the barrier. If you're in a live lane on a smart motorway: stay in the car, hazards on, seatbelts on, call 999 immediately and do not get out unless directed.",
      },
      {
        q: 'How quickly can you reach a motorway breakdown?',
        a: 'Typical arrival on the major Glasgow motorways is 25–45 minutes depending on which junction and current traffic. Live-lane and high-priority calls always go to the front of the queue.',
      },
      {
        q: 'Why is motorway recovery more expensive?',
        a: 'Motorway recovery is £120 flat (vs £60 for local) because it requires additional safety equipment, coordination with traffic authorities, and significantly more risk to our staff and equipment.',
      },
      {
        q: 'Do you work with Traffic Scotland?',
        a: "Yes — we coordinate with Traffic Scotland and Police Scotland on motorway recoveries where lane closures or traffic management are needed.",
      },
    ],
    relatedServices: ['emergency-breakdown-recovery', 'accident-recovery-glasgow', '24-hour-recovery-near-me'],
  },

  {
    slug: 'roadside-assistance-glasgow',
    serviceCategory: 'situation',
    title: 'Roadside Assistance Glasgow | 24/7 Quick Fix | SRL Recovery',
    metaDescription:
      'Roadside assistance across Glasgow — quick fixes where possible, full recovery where needed. 24/7. Call SRL Recovery on 07776 356 556.',
    h1: 'Roadside Assistance Glasgow',
    subheading: 'Quick fixes where possible, full recovery where needed',
    introParagraph:
      "Not every breakdown needs a full recovery. Sometimes a quick check at the roadside gets you moving again — saving you the cost of recovery and the hassle of finding a garage. SRL Recovery offers roadside assistance across Glasgow alongside our recovery service. If it can be fixed at the side of the road, we'll try. If it can't, we'll recover.",
    bodySections: [
      {
        heading: 'What roadside assistance covers with us',
        paragraphs: [
          "We can help with on-the-spot issues like running out of fuel (we can get fuel to you), spare wheel changes if you've blown a tyre and have a spare, simple electrical checks, and assessing whether a vehicle is safe to drive on.",
          "What we don't do is full mechanical work at the roadside — we're a recovery service, not a mobile garage. For serious mechanical issues (engine failure, transmission problems, major electrical faults) we'll get the vehicle to a garage that can diagnose properly.",
        ],
      },
      {
        heading: 'Roadside vs recovery — which do you need?',
        paragraphs: [
          "When you call, tell us what's happened. We'll give you our honest opinion: if it sounds like a simple issue that could be sorted at the roadside, we'll come out for a roadside call. If it sounds like full recovery is needed, we'll send the right truck first time and save you a wait.",
        ],
      },
    ],
    features: [
      'Roadside check and assessment',
      'Spare wheel swaps',
      'Fuel delivery if out of fuel',
      'Honest "fix or recover" advice',
      'Recovery available if needed',
    ],
    faqs: [
      {
        q: "Can you fix my car at the roadside?",
        a: 'For some simple issues, yes — spare wheel changes, getting fuel to you if you\'ve run dry, basic checks. For mechanical problems we\'ll get you to a garage that can diagnose properly.',
      },
      {
        q: 'What if my issue turns out to need full recovery?',
        a: "No problem — we can recover from the same call-out. We charge for the service required, so you won't pay roadside-call-out and recovery-call-out separately.",
      },
      {
        q: "Can you bring me fuel?",
        a: "Yes — if you've run out of fuel and can't easily get to a petrol station, we can bring fuel to you. Just tell us on the call what fuel your car takes.",
      },
    ],
    relatedServices: ['car-recovery-near-me', 'quick-car-recovery', 'emergency-breakdown-recovery'],
  },

  {
    slug: 'insurance-recovery-glasgow',
    serviceCategory: 'situation',
    title: 'Insurance Recovery Glasgow | All UK Insurers | SRL Recovery',
    metaDescription:
      'Insurance-funded vehicle recovery in Glasgow. We work with all major UK insurers and handle the paperwork. Call SRL Recovery on 07776 356 556.',
    h1: 'Insurance Recovery Glasgow',
    subheading: 'Working with all major UK insurers — we handle the paperwork',
    introParagraph:
      "If your car insurance includes breakdown or accident recovery cover, we can deliver that service and bill your insurer directly. SRL Recovery is set up to work with all major UK insurance companies — we know the paperwork, the procedures, and how to make sure you don't end up out of pocket.",
    bodySections: [
      {
        heading: 'How insurance-funded recovery works',
        paragraphs: [
          "When you call us, let us know straight away that it's an insurance job and have your policy number ready. We'll either bill your insurer directly (most common for accident claims and policies that include recovery) or you can pay us and reclaim from your insurer (more common for breakdown cover with simple policies).",
          "For accident claims we coordinate with your insurer's claims team to make sure your vehicle goes to the right place — your chosen repairer, your insurer's preferred repairer, or to a salvage yard if it's been written off.",
        ],
      },
      {
        heading: 'Insurers we work with',
        paragraphs: [
          "Direct Line, Admiral, Aviva, AXA, LV=, Hastings, Churchill, Privilege, Tesco Bank, Sainsbury's Bank, Esure, Sheilas' Wheels, More Than, Saga, Age Concern, Swiftcover, Quote Me Happy, Elephant, Bell, Diamond, Liverpool Victoria, NFU Mutual, Co-op Insurance, Halifax, Lloyds, Nationwide — and most others.",
          "If your insurer isn't on this list, don't worry — we work with virtually all UK insurance companies and have the right paperwork to handle it.",
        ],
      },
    ],
    features: [
      'All major UK insurers accepted',
      'Direct billing where possible',
      'Full claim coordination',
      "Coordination with insurer's preferred repairer",
      'Salvage handover for total loss',
    ],
    faqs: [
      {
        q: 'Does my insurance cover SRL Recovery?',
        a: "Most likely yes — we work with virtually all UK insurers. Have your policy number ready when you call and we'll confirm.",
      },
      {
        q: 'Will I have to pay first and claim back?',
        a: "Usually no — for accident claims we can bill your insurer directly. For some breakdown policies you pay us and reclaim, but we'll give you the paperwork you need.",
      },
      {
        q: 'Can I choose which garage my car goes to?',
        a: "Yes — within the terms of your policy you usually can. Some policies require you to use approved repairers; others give you a free choice. We'll deliver wherever you tell us, subject to your policy.",
      },
    ],
    relatedServices: ['accident-recovery-glasgow', 'non-fault-accident-recovery', 'car-recovery-near-me'],
  },

  // === CLUSTER 4: ADD-ONS ===
  {
    slug: 'vehicle-transport-glasgow',
    serviceCategory: 'addon',
    title: 'Vehicle Transport Glasgow | UK-Wide Delivery | SRL Recovery',
    metaDescription:
      'Vehicle transport from Glasgow — local and UK-wide. Cars, vans, classics, prestige. Fully insured flatbed transport. Call 07776 356 556.',
    h1: 'Vehicle Transport Glasgow',
    subheading: 'Local moves and UK-wide deliveries — fully insured flatbed transport',
    introParagraph:
      "Not every vehicle move is an emergency. SRL Recovery offers planned vehicle transport across Glasgow and UK-wide for situations where you need a car, van, motorbike, or commercial vehicle moved properly without driving it — buying a car from a distance, moving home, dealership transfers, classic car moves, auction collections.",
    bodySections: [
      {
        heading: 'Common transport jobs',
        paragraphs: [
          "Auction wins (Manheim, BCA, Copart — we collect from any UK auction site). Private sales where the buyer doesn't want to drive an unknown car home. Dealership-to-dealership transfers. House moves where the household car needs to go separately. Restoration projects being moved to or from a workshop. Pre-purchase inspection collections.",
          "If you need a vehicle moved and you don't want to drive it (or you can't), we'll move it.",
        ],
      },
      {
        heading: 'Local vs UK-wide pricing',
        paragraphs: [
          "Local transport (within Glasgow and surrounding areas) is charged at our standard local rate: £60 + £1.50 per mile. For longer-distance UK transport we'll quote based on the specific route — typically more cost-effective than the per-mile rate for journeys over 100 miles.",
          "Get in touch for a custom quote for any long-distance move.",
        ],
      },
    ],
    features: [
      'Local and UK-wide transport',
      'All vehicle types (cars, vans, bikes, classics, prestige)',
      'Fully insured during transit',
      'Auction collection (Manheim, BCA, Copart)',
      'Custom quote for long-distance moves',
    ],
    faqs: [
      {
        q: 'Do you transport vehicles UK-wide?',
        a: "Yes — we can transport anywhere in mainland UK. For long-distance moves we'll give you a custom quote rather than per-mile pricing.",
      },
      {
        q: 'Can you collect from auctions?',
        a: 'Yes — we regularly collect from Manheim, BCA, Copart, and other UK auction sites. Provide us the auction reference and collection address.',
      },
      {
        q: 'How is the vehicle protected during transport?',
        a: "Flatbed transport with soft straps over wheels — never towed. Vehicles are inspected before loading and on arrival, and we're fully insured during transit.",
      },
    ],
    relatedServices: ['classic-car-recovery-glasgow', 'prestige-car-recovery-glasgow', 'scrap-car-collection-glasgow'],
  },

  {
    slug: 'scrap-car-collection-glasgow',
    serviceCategory: 'addon',
    title: 'Scrap Car Collection Glasgow | Free Pickup | SRL Recovery',
    metaDescription:
      'Scrap car collection across Glasgow. We collect end-of-life vehicles and deliver to authorised treatment facilities. Call SRL Recovery 07776 356 556.',
    h1: 'Scrap Car Collection Glasgow',
    subheading: 'Got a car past its useful life? We collect and deliver to an ATF',
    introParagraph:
      "End-of-life vehicles can't just be parked up indefinitely — they need to go to an Authorised Treatment Facility (ATF) where they're properly de-polluted and dismantled. SRL Recovery handles scrap car collection across Glasgow: we collect the vehicle from your driveway, street, or garage and deliver it to an ATF on your behalf.",
    bodySections: [
      {
        heading: "What we collect",
        paragraphs: [
          "Cars, vans, and light commercials that have reached end of life — failed MOTs that aren't worth fixing, accident write-offs, very high mileage cars with terminal issues, abandoned vehicles you've inherited, project cars that never got finished.",
          "The vehicle doesn't need to be running. It doesn't need to have wheels (though if it doesn't, mention it on the call so we send the right truck with a skate). It does need to have a V5C logbook — without one, transferring ownership to the ATF is complicated.",
        ],
      },
      {
        heading: "The paperwork side",
        paragraphs: [
          "When you scrap a vehicle, you need to inform DVLA. The ATF will give you a Certificate of Destruction (CoD) which is your legal proof that the vehicle has been destroyed. We can hand you the paperwork or arrange for it to be sent on.",
          "You also need to send your V5C logbook section 9 (the 'sell, transfer or part-exchange your vehicle' bit) to DVLA. Easy 5-minute job — we'll remind you on the call.",
        ],
      },
    ],
    pricingNote:
      "Collection costs are charged at our standard local rate — from £60 + £1.50/mile. If your scrap car has resale value at the ATF, this can sometimes offset the collection cost. We'll discuss specifics on the call.",
    features: [
      'Collection from anywhere in Glasgow area',
      'No need for the car to be running',
      'Delivery to Authorised Treatment Facility',
      'Help with DVLA paperwork',
      'Certificate of Destruction provided',
    ],
    faqs: [
      {
        q: "Do you pay for scrap cars?",
        a: "We're a recovery service, not a scrap dealer — but the ATF we deliver to may pay you for the vehicle's salvage/metal value. This depends entirely on the vehicle and current scrap metal prices. We'll discuss specifics on the call.",
      },
      {
        q: 'Do I need a V5C to scrap the car?',
        a: "Yes — without a V5C logbook, transferring ownership to the ATF gets complicated and may not be possible. If you've lost it, you can apply for a replacement from DVLA before we collect.",
      },
      {
        q: 'What if the car has no wheels or is immobilised?',
        a: "No problem — tell us on the call and we'll bring a skate so we can load the car regardless. There may be a £40 skate fee added.",
      },
    ],
    relatedServices: ['vehicle-transport-glasgow', 'car-recovery-near-me', 'car-recovery-prices'],
  },

  // === CLUSTER 5: PRICING ===
  {
    slug: 'car-recovery-prices',
    serviceCategory: 'pricing',
    title: 'Car Recovery Prices Glasgow | Clear Pricing | SRL Recovery',
    metaDescription:
      'Exact car recovery prices in Glasgow — local from £60, motorway £120 flat. No hidden fees. Call SRL Recovery on 07776 356 556 for an exact quote.',
    h1: 'Car Recovery Prices Glasgow',
    subheading: 'Clear up-front pricing — no surprises, no hidden fees',
    introParagraph:
      "One of the biggest frustrations with recovery services is hidden fees. SRL Recovery does things differently: clear prices published on the website, a definitive quote given on the phone before we dispatch, and no surprise charges on arrival. Here's exactly what we charge and how it works.",
    bodySections: [
      {
        heading: 'Local recovery — £60 call-out + £1.50 per mile',
        paragraphs: [
          "Local recovery covers any job within Glasgow and surrounding areas (Paisley, East Kilbride, Hamilton, Motherwell, Coatbridge, Bearsden, Rutherglen, Clydebank, Cambuslang, Bellshill, Dumbarton, and beyond). £60 call-out includes the dispatch and arrival to your location. £1.50 per mile is added based on the total distance from your location to the destination.",
          "Example: car broken down 4 miles from you, garage 6 miles from your house — total mileage ~10 miles. Price: £60 + (10 x £1.50) = £75 + VAT.",
        ],
      },
      {
        heading: 'Motorway / live-lane — £120 flat + £1.50 per mile',
        paragraphs: [
          "Motorway recovery (M8, M73, M74, M77, M80) and any live-lane recovery is £120 flat plus £1.50 per mile. The higher rate reflects the additional safety equipment, traffic coordination, and risk involved in working on a motorway.",
          "Example: M8 breakdown 12 miles from your destination — Price: £120 + (12 x £1.50) = £138 + VAT.",
        ],
      },
      {
        heading: 'Additional fees (only when needed)',
        paragraphs: [
          "Winch fee: £40 (added only if the vehicle needs winching onto the truck — e.g. stuck in a ditch or against a barrier).",
          "Skate fee: £40 (added only if the vehicle is immobilised — flat tyres, locked wheels, no working transmission).",
          "Both of these are only added if actually needed, and we'll tell you on the phone if they apply.",
        ],
      },
      {
        heading: 'What\'s NOT charged',
        paragraphs: [
          "No out-of-hours surcharge. No holiday surcharge. No fuel levy. No mileage rounding (we charge actual mileage, not "estimated"). No "dispatch fee" added at the end. No surprise charges of any kind.",
        ],
      },
    ],
    features: [
      'Local from £60 + £1.50/mile',
      'Motorway £120 flat + £1.50/mile',
      'Winch/skate only added if needed (£40 each)',
      'No out-of-hours or holiday surcharges',
      'Cash, card, or bank transfer accepted',
    ],
    faqs: [
      {
        q: 'How do I get an exact price?',
        a: "Call 07776 356 556 with your location and destination — we'll give you the exact total on the phone before dispatching. No 'estimates' that change later.",
      },
      {
        q: 'Are your prices including VAT?',
        a: 'All prices quoted on our website are subject to VAT (20%). VAT will be itemised separately on your invoice. For private customers the VAT-inclusive figure is what you pay.',
      },
      {
        q: 'Do you charge more for bigger vehicles?',
        a: "No — standard pricing applies to all vehicles up to 3.5 tonnes. We don't charge weight surcharges within that range.",
      },
      {
        q: 'How do I pay?',
        a: 'Cash, card (via mobile reader), or bank transfer. Payment is taken on completion of the job.',
      },
    ],
    relatedServices: ['cheap-car-recovery-glasgow', 'car-recovery-near-me', 'motorway-recovery-glasgow'],
  },
]

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return services.find((s) => s.slug === slug)
}

export type MotorwayPageData = {
  slug: string
  name: string // e.g. "M8"
  title: string
  metaDescription: string
  fullName: string // e.g. "M8 motorway"
  route: string // e.g. "Edinburgh ↔ Greenock via Glasgow"
  length: string // e.g. "60 miles"
  junctionsCovered: string // e.g. "J1–J31"
  introParagraph: string
  keySections: { junction: string; description: string }[]
  knownProblemAreas: string[]
  safetyAdvice: string[]
  responseTime: string
}

export const motorways: MotorwayPageData[] = [
  {
    slug: 'm8',
    name: 'M8',
    fullName: 'M8 motorway',
    title: 'M8 Recovery | Breakdown & Accident Recovery on the M8 | SRL',
    metaDescription:
      "M8 breakdown? SRL Recovery covers the full M8 from junction 1 to 31 — 24/7, fast dispatch, fully insured. Call 07776 356 556 right now.",
    route: 'Edinburgh ↔ Glasgow ↔ Greenock',
    length: '~60 miles total',
    junctionsCovered: 'J1 to J31',
    responseTime: '25–45 mins',
    introParagraph:
      "The M8 is our busiest motorway — running through the heart of Glasgow from Edinburgh in the east to Greenock in the west. We cover the entire length 24 hours a day, with particular focus on the urban Glasgow stretch where most M8 breakdowns happen. If you're stuck on the M8, you're already in our wheelhouse.",
    keySections: [
      {
        junction: 'J1–J6 (Edinburgh to Newbridge)',
        description:
          "The eastern approach. Less congested but a long way from rescue — average arrival 40–50 minutes from a Glasgow base. Common breakdown spots: the climb up to Harthill services, and the merge with the M9.",
      },
      {
        junction: 'J7–J14 (Bathgate to Glasgow City)',
        description:
          "Includes the busy stretch through Bathgate, Whitburn, and into Glasgow's outskirts. The merge at J8 (M73) and J9 (M74) sees a lot of congestion-related breakdowns. Average arrival: 30–40 minutes.",
      },
      {
        junction: 'J15–J20 (Central Glasgow)',
        description:
          "The urban M8 through Glasgow city — Charing Cross, the Kingston Bridge, Anderston. Highest density of breakdowns due to traffic load. Live-lane work is common here. Average arrival: 20–35 minutes from our Motherwell base.",
      },
      {
        junction: 'J21–J28 (Glasgow West to Paisley)',
        description:
          "Past the airport and into Renfrewshire. The Glasgow Airport spur (M8 J28A) sees significant breakdown volume from drop-offs and pickups. Average arrival: 25–40 minutes.",
      },
      {
        junction: 'J29–J31 (Erskine to Greenock)',
        description:
          "The western end. Less traffic but more isolated. Average arrival: 35–50 minutes depending on conditions.",
      },
    ],
    knownProblemAreas: [
      'The Kingston Bridge in heavy rain — visibility-related accidents',
      'The merge at J15 (Townhead) eastbound — congestion-related breakdowns',
      'The climb out of Charing Cross westbound — overheating in summer traffic',
      'Glasgow Airport spur (J28A) — high-volume drop-off zone breakdowns',
    ],
    safetyAdvice: [
      'Get off at the next exit if you can — even crawling to the hard shoulder is better than a live lane',
      'Hard shoulder breakdown: hazards on, exit on the passenger side, get behind the barrier',
      "Live lane: stay in the car, seatbelts on, hazards on, call 999 immediately",
      'Smart motorway sections: same as live lane — do not exit the vehicle unless directed',
    ],
  },

  {
    slug: 'm74',
    name: 'M74',
    fullName: 'M74 motorway',
    title: 'M74 Recovery | Breakdown Recovery on the M74 | SRL Recovery',
    metaDescription:
      "M74 breakdown? SRL Recovery covers the M74 from Glasgow to the M6 border 24/7. Fast dispatch, fully insured. Call 07776 356 556.",
    route: 'Glasgow ↔ Carlisle (continues as A74(M))',
    length: '~40 miles in Scotland',
    junctionsCovered: 'J1 to J22 (Scotland)',
    responseTime: '30–45 mins',
    introParagraph:
      "The M74 (and its A74(M) continuation toward the M6) is the main southbound artery from Glasgow toward England. We cover the full length from junction 1 in Glasgow down to the M6 border. The M74 extension into Glasgow — opened in 2011 — runs through Rutherglen and Cambuslang where we operate daily.",
    keySections: [
      {
        junction: 'J1–J4 (Glasgow Extension)',
        description:
          "The newer M74 extension through Rutherglen, Cambuslang, and Polmadie. Heavy commuter traffic, lots of merging — common stretch for breakdowns and minor accidents. Average arrival: 20–30 minutes from our Motherwell base.",
      },
      {
        junction: 'J4–J6 (Maryville to Hamilton)',
        description:
          "Passes Bothwell, Uddingston, Hamilton services. Hamilton services is a frequent breakdown spot — cars that limp in but can't make it back out. Average arrival: 20–30 minutes.",
      },
      {
        junction: 'J6–J9 (Hamilton to Larkhall)',
        description:
          "Through Larkhall and approaching the M74 junction with the M73. Reasonable traffic flow but more isolated. Average arrival: 25–35 minutes.",
      },
      {
        junction: 'J10–J13 (Lesmahagow to Abington)',
        description:
          "Less developed area, fewer services. If you break down here you're a bit more isolated — get well clear of the carriageway. Average arrival: 35–50 minutes.",
      },
      {
        junction: 'J14–J22 (Beattock and beyond)',
        description:
          "The long climb at Beattock summit catches a lot of older cars and overloaded vans — overheating and transmission issues are common. The further south you are, the longer our arrival time. Beyond Beattock you're closer to a Cumbria-based service.",
      },
    ],
    knownProblemAreas: [
      'Hamilton services southbound — vehicles that limp in and won\'t restart',
      'The Beattock climb southbound — overheating in summer',
      'J5 (Raith) interchange — high-traffic merge point',
      'M74 / M73 interchange — busy junction with frequent minor incidents',
    ],
    safetyAdvice: [
      'Sections of the M74 are smart motorway — no continuous hard shoulder',
      'If on a smart section in trouble: aim for an emergency refuge area if visible',
      "Live lane: do not exit the vehicle — call 999 immediately",
      'Hazards on, seatbelts on, stay calm and wait for help',
    ],
  },

  {
    slug: 'm77',
    name: 'M77',
    fullName: 'M77 motorway',
    title: 'M77 Recovery | Breakdown Recovery on the M77 | SRL Recovery',
    metaDescription:
      "M77 breakdown? SRL Recovery covers the M77 from Glasgow to Kilmarnock 24/7. Fast dispatch, fully insured. Call 07776 356 556.",
    route: 'Glasgow ↔ Kilmarnock',
    length: '~15 miles',
    junctionsCovered: 'J1 to J8',
    responseTime: '25–40 mins',
    introParagraph:
      "The M77 runs from Glasgow city south-west toward Kilmarnock — relatively short but heavily used by commuters from East Renfrewshire. We cover the full length 24 hours a day, with particular focus on the busy junctions 4 to 6 through Newton Mearns and the urban interchange at junction 1.",
    keySections: [
      {
        junction: 'J1 (M8 interchange / Dumbreck)',
        description:
          "The northern end where the M77 meets the M8. Busy interchange with merging traffic — minor incidents and breakdowns from congestion are common. Average arrival: 20–30 minutes.",
      },
      {
        junction: 'J2–J3 (Pollok / Nitshill)',
        description:
          "Through southern Glasgow — built-up area, plenty of nearby roads if recovery is needed. Average arrival: 25–35 minutes.",
      },
      {
        junction: 'J4–J5 (Newton Mearns)',
        description:
          "The Newton Mearns stretch is the busiest commuter section. Tailbacks at peak times lead to overheating and breakdown calls. Average arrival: 25–35 minutes.",
      },
      {
        junction: 'J6–J8 (Eaglesham to Kilmarnock)',
        description:
          "The rural southern section. Less traffic, but more isolated. Average arrival: 35–45 minutes from our base.",
      },
    ],
    knownProblemAreas: [
      "J1 interchange with M8 — high-merge complexity",
      "J5 Newton Mearns — peak-hour tailbacks",
      "Open stretch between J6 and J8 — exposed to weather",
    ],
    safetyAdvice: [
      'Hard shoulder available throughout — use it',
      'Pull as far left as possible, hazards on, exit passenger side',
      "Stand well behind the safety barrier, not next to the car",
      'Call 999 first if you\'re in a live lane',
    ],
  },

  {
    slug: 'm73',
    name: 'M73',
    fullName: 'M73 motorway',
    title: 'M73 Recovery | Breakdown Recovery on the M73 | SRL Recovery',
    metaDescription:
      "M73 breakdown? SRL Recovery covers the full M73 between the M8 and M74 24/7. Fast dispatch. Call 07776 356 556.",
    route: 'M8 (J8) ↔ M74 (J4) — Glasgow eastern bypass',
    length: '~5 miles',
    junctionsCovered: 'J1 to J3',
    responseTime: '20–35 mins',
    introParagraph:
      "The M73 is short but vital — it connects the M8 to the M74 along Glasgow's eastern edge, carrying traffic heading between Edinburgh and the south of Scotland or England. We cover the full length 24/7 and respond quickly thanks to its proximity to our Motherwell base.",
    keySections: [
      {
        junction: 'J1 (M74 interchange)',
        description:
          "The southern end where the M73 joins the M74. Busy merge point with frequent congestion incidents. Average arrival: 15–25 minutes — we're close.",
      },
      {
        junction: 'J2 (Coatbridge / A752)',
        description:
          "The middle junction. Useful access point for recovery — easy to exit onto local roads. Average arrival: 20–30 minutes.",
      },
      {
        junction: 'J3 (M8 interchange / Mollinsburn)',
        description:
          "Northern end where the M73 meets the M8. Heavy crossover traffic, complex multi-lane merging. Average arrival: 25–35 minutes.",
      },
    ],
    knownProblemAreas: [
      'M73/M74 interchange (J1) — merge complexity',
      'M73/M8 interchange (J3) — heavy crossover traffic',
      'Mid-section in heavy rain — visibility-related incidents',
    ],
    safetyAdvice: [
      'Short motorway means you\'re never far from an exit — use it if you can',
      'Hard shoulder available — pull onto it as far left as possible',
      'Exit on passenger side, get behind the barrier',
    ],
  },

  {
    slug: 'm80',
    name: 'M80',
    fullName: 'M80 motorway',
    title: 'M80 Recovery | Breakdown Recovery on the M80 | SRL Recovery',
    metaDescription:
      "M80 breakdown? SRL Recovery covers the M80 from the M73 toward Stirling 24/7. Fast dispatch, fully insured. Call 07776 356 556.",
    route: 'M73 ↔ Stirling (joins M9)',
    length: '~17 miles',
    junctionsCovered: 'J1 to J9',
    responseTime: '30–45 mins',
    introParagraph:
      "The M80 runs north from the M73 toward Stirling, passing Cumbernauld. It's the main route between Glasgow and Stirling/Perth and carries heavy commuter and freight traffic. We cover the full length 24 hours a day.",
    keySections: [
      {
        junction: 'J1–J3 (Mollinsburn to Cumbernauld South)',
        description:
          "The southern entry from the M73. Heavy commuter traffic into Cumbernauld. Average arrival: 25–35 minutes.",
      },
      {
        junction: 'J4–J6 (Cumbernauld)',
        description:
          "The Cumbernauld stretch — busiest part of the M80 with multiple exits into the town. Frequent breakdown calls from commuter traffic. Average arrival: 25–35 minutes.",
      },
      {
        junction: 'J7–J9 (Cumbernauld to Stirling)',
        description:
          "The northern section approaching Stirling and the M9 junction. More open road, less traffic. Average arrival: 35–50 minutes — further north you are, longer we take.",
      },
    ],
    knownProblemAreas: [
      'Cumbernauld interchanges — high commuter volume at peak times',
      'Northern open section in winter — ice and weather-related incidents',
      'M80 / M73 interchange — merging complexity',
    ],
    safetyAdvice: [
      'Hard shoulder available throughout the M80',
      'Pull as far left as possible, hazards on',
      'Exit on passenger side, get behind the safety barrier',
      'Use emergency telephones (orange posts) if you can\'t use a mobile',
    ],
  },
]

export function getMotorwayBySlug(slug: string): MotorwayPageData | undefined {
  return motorways.find((m) => m.slug === slug)
}

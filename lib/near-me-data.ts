import type { AreaFacts } from './areas-data'
import { getLinkableNearbyAreas } from './areas-data'

export type NearMeContent = {
  slug: string
  navLabel: string
  title: string
  metaDescription: string
  h1: string
  subheading: string
  intro: string
  paragraphs: string[]
  features: string[]
  faqs: { q: string; a: string }[]
  relatedServiceSlug: string
  relatedServiceLabel: string
}

export type NearMeAngle = {
  slug: string
  navLabel: string
  build: (area: AreaFacts) => NearMeContent
}

// Deterministic per-area variant picker, so the same three-ish phrasings don't
// march through the 29 areas in lockstep — avoids a fully mail-merged feel.
function variant(slug: string, mod: number): number {
  let sum = 0
  for (let i = 0; i < slug.length; i++) sum += slug.charCodeAt(i)
  return sum % mod
}

function pc(area: AreaFacts): string {
  return area.postcodes.join('/')
}

function nearby(area: AreaFacts, n = 3): string[] {
  const linkable = getLinkableNearbyAreas(area, n)
  const names = linkable.length ? linkable.map((a) => a.name) : area.nearbyAreas.slice(0, n)
  return names
}

const carRecoveryNearMe: NearMeAngle = {
  slug: 'car-recovery-near-me',
  navLabel: 'Near Me',
  build: (area) => {
    const near = nearby(area)
    const v = variant(area.slug, 3)
    const intros = [
      `If you've broken down in ${area.name} and searched for recovery near you, SRL Recovery is who picks up. We dispatch straight from our Motherwell base to ${pc(area)} postcodes, with drivers who know ${near[0]} and the surrounding roads well. No call centre, no sub-contracting — just a truck heading your way.`,
      `"Near me" only means something if the company answering the phone is actually close. SRL Recovery covers ${area.name} and the ${pc(area)} postcodes directly — the same team that answers your call dispatches the driver, with no handoff to a regional call centre or third-party contractor.`,
      `Stuck in ${area.name}? SRL Recovery is a genuinely local recovery service covering ${pc(area)} day and night. When you call, you're talking to the person sending the truck — not a national booking line reading your postcode off a screen.`,
    ]
    return {
      slug: 'car-recovery-near-me',
      navLabel: 'Near Me',
      title: `Car Recovery Near Me in ${area.name} | SRL Recovery`,
      metaDescription: `Searching for car recovery near you in ${area.name}? SRL Recovery dispatches locally to ${pc(area)} — average arrival ${area.responseTime}. Call 01698 700970.`,
      h1: `Car Recovery Near Me — ${area.name}`,
      subheading: `Local dispatch to ${area.name} and ${pc(area)} — typically ${area.responseTime}`,
      intro: intros[v],
      paragraphs: [
        `Average arrival in ${area.name} currently runs at ${area.responseTime} from our Motherwell base. We also cover the surrounding area — including ${near.slice(0, 3).join(', ')} — so if you've broken down travelling through rather than living locally, that's no problem either.`,
        `Cars, vans, and light commercials are all routine work for us in ${area.name}. Tell us what you're driving and roughly where you are when you call, and we'll give you a clear price and a realistic ETA before anyone sets off.`,
      ],
      features: [
        `Local dispatch to ${pc(area)}`,
        `Average arrival ${area.responseTime}`,
        'No call centre — direct to the team',
        `Also covers ${near[0]}${near[1] ? ` and ${near[1]}` : ''}`,
        'Clear price quoted before we set off',
      ],
      faqs: [
        {
          q: `How do I get car recovery near me in ${area.name} right now?`,
          a: `Call 01698 700970 — we dispatch directly to ${area.name} and the ${pc(area)} postcodes, 24 hours a day. Average arrival is ${area.responseTime}.`,
        },
        {
          q: `Do you cover the areas around ${area.name} too?`,
          a: `Yes — alongside ${area.name} itself we regularly cover ${near.slice(0, 3).join(', ')} and the wider area. Tell us your postcode on the call and we'll confirm.`,
        },
        {
          q: 'Is there a call centre, or do I speak to the recovery team directly?',
          a: "Direct to the team — no call centre. Whoever answers the phone is the person dispatching your driver.",
        },
      ],
      relatedServiceSlug: 'car-recovery-near-me',
      relatedServiceLabel: 'Car Recovery Near Me',
    }
  },
}

const quickRecovery: NearMeAngle = {
  slug: 'quick-recovery',
  navLabel: 'Quick Recovery',
  build: (area) => {
    const near = nearby(area)
    const v = variant(area.slug, 3)
    const intros = [
      `Speed is the thing people mention most in our reviews, and ${area.name} is no exception. SRL Recovery dispatches the moment you call — currently averaging ${area.responseTime} to reach you in ${area.name}, with no call-centre delay slowing things down.`,
      `Waiting around is the worst part of breaking down. In ${area.name} we keep that wait as short as it can honestly be — current average arrival is ${area.responseTime}, and we'd rather under-promise on the phone than leave you watching the clock.`,
      `Quick recovery in ${area.name} means one thing to us: the person who answers your call sends the truck immediately, with no dispatcher-to-dispatcher handoff in between. Average arrival currently sits at ${area.responseTime}.`,
    ]
    return {
      slug: 'quick-recovery',
      navLabel: 'Quick Recovery',
      title: `Quick Recovery ${area.name} | Fast Dispatch | SRL Recovery`,
      metaDescription: `Need quick recovery in ${area.name}? SRL Recovery dispatches immediately — average arrival ${area.responseTime}. 24/7 cover. Call 01698 700970.`,
      h1: `Quick Recovery ${area.name}`,
      subheading: `Fast dispatch to ${area.name} — currently averaging ${area.responseTime}`,
      intro: intros[v],
      paragraphs: [
        `There's no dispatcher chain to slow things down — when you call 01698 700970, the person on the phone is the person sending the driver. That's the main reason ${area.name} jobs move as fast as they do.`,
        `We also work ${near[0]}${near[1] ? ` and ${near[1]}` : ''} regularly, so a truck is often already close by. We'll give you an honest ETA on the call, not an optimistic one designed to get you off the phone.`,
      ],
      features: [
        `Average arrival ${area.responseTime} in ${area.name}`,
        'No call-centre delay — direct dispatch',
        'Honest ETA given on the call',
        'Trucks regularly working the local area',
        '24/7 — speed doesn’t drop overnight',
      ],
      faqs: [
        {
          q: `How fast can you get to me in ${area.name}?`,
          a: `Current average is ${area.responseTime}, though it depends on traffic and which truck is nearest. We'll give you a realistic estimate the moment you call.`,
        },
        {
          q: 'Why are you faster than the national breakdown brands?',
          a: "No call centre and no sub-contracting — when you ring us, the call doesn't get bounced to a regional dispatcher who then bounces it again. We ARE the dispatcher.",
        },
        {
          q: 'Can you guarantee an exact arrival time?',
          a: "We can't promise the exact minute — traffic and current jobs both factor in — but we give you an honest ETA on the call and update you if anything changes.",
        },
      ],
      relatedServiceSlug: 'quick-car-recovery',
      relatedServiceLabel: 'Quick Car Recovery',
    }
  },
}

const hour24Recovery: NearMeAngle = {
  slug: '24-hour-recovery',
  navLabel: '24 Hour Recovery',
  build: (area) => {
    const near = nearby(area)
    const v = variant(area.slug, 3)
    const intros = [
      `Breakdowns in ${area.name} don't wait for office hours, and neither do we. SRL Recovery answers 01698 700970 around the clock — 3am is handled exactly the same way as 3pm, with no voicemail and no "emergency-only" markup.`,
      `A lot of recovery firms claim 24-hour cover and then quietly stop answering after 9pm. We don't. Calls from ${area.name} get the same response whatever the hour — same team, same pricing, same dispatch speed.`,
      `Whatever time you've broken down in ${area.name} — the middle of the night, a bank holiday, Christmas Day — the number is answered and a truck gets sent. That's what "24 hour" is supposed to mean.`,
    ]
    return {
      slug: '24-hour-recovery',
      navLabel: '24 Hour Recovery',
      title: `24 Hour Recovery ${area.name} | SRL Recovery`,
      metaDescription: `24/7 recovery in ${area.name} — nights, weekends, and holidays covered with no out-of-hours surcharge. Call 01698 700970 any time.`,
      h1: `24 Hour Recovery ${area.name}`,
      subheading: `Genuinely round-the-clock cover in ${area.name} — nights, weekends, holidays`,
      intro: intros[v],
      paragraphs: [
        `There's no out-of-hours surcharge — a call-out from ${area.name} at 4am costs the same as one at 4pm. Average arrival stays at ${area.responseTime} regardless of the time on the clock.`,
        `We also cover ${near.slice(0, 2).join(' and ')} through the night, so if you're travelling between ${area.name} and either late in the evening, we're already in the area.`,
      ],
      features: [
        'Genuinely 24/7 — no voicemail, no cut-off time',
        'No out-of-hours or holiday surcharge',
        `Average arrival ${area.responseTime}, day or night`,
        'Same team, same pricing, any hour',
        `Also covers ${near[0]} overnight`,
      ],
      faqs: [
        {
          q: `Are you actually open 24 hours in ${area.name}, or just during the day?`,
          a: `Genuinely 24/7 — 01698 700970 is answered around the clock, every day of the year, including Christmas Day.`,
        },
        {
          q: 'Do you charge more for a night-time call-out?',
          a: 'No — pricing is identical regardless of the time you call. No out-of-hours or holiday surcharges.',
        },
        {
          q: `What if I break down in ${area.name} in the middle of the night?`,
          a: 'Call us — we dispatch immediately. Late-night call-outs are routine, not an exception.',
        },
      ],
      relatedServiceSlug: '24-hour-recovery-near-me',
      relatedServiceLabel: '24 Hour Recovery Near Me',
    }
  },
}

const cheapRecovery: NearMeAngle = {
  slug: 'cheap-recovery',
  navLabel: 'Cheap Recovery',
  build: (area) => {
    const near = nearby(area)
    const v = variant(area.slug, 3)
    const intros = [
      `"Cheap" usually means hidden fees waiting on arrival. Ours doesn't. Recovery in ${area.name} starts from £60 call-out plus £1.50 per mile, quoted clearly on the phone before we dispatch — no surprises when the truck turns up.`,
      `Local recovery in ${area.name} is priced the same as anywhere else in our coverage area: £60 call-out plus £1.50 per mile, with the exact total confirmed on the phone before we set off. No out-of-hours markup, no last-minute add-ons.`,
      `Affordable doesn't have to mean unreliable. In ${area.name} you get the same clear pricing as the rest of our coverage area — £60 call-out plus £1.50 per mile — from a locally-based team, not a national brand's overhead passed on to you.`,
    ]
    return {
      slug: 'cheap-recovery',
      navLabel: 'Cheap Recovery',
      title: `Cheap Recovery ${area.name} | From £60 | SRL Recovery`,
      metaDescription: `Affordable recovery in ${area.name} from £60 + £1.50/mile. Clear pricing, no hidden fees. Call SRL Recovery on 01698 700970.`,
      h1: `Cheap Recovery ${area.name}`,
      subheading: `From £60 call-out in ${area.name} — clear pricing, no hidden fees`,
      intro: intros[v],
      paragraphs: [
        `There's no out-of-hours surcharge, no holiday surcharge, and no mileage rounding — the price we quote on the phone for your ${area.name} job is the price you pay. Winch and skate fees (£40 each) only apply if the vehicle actually needs them.`,
        `We're consistently more competitive than the national brands for non-members, largely because we don't carry call-centre or sub-contractor overhead. Jobs around ${near[0]} and ${area.name} are quoted individually, but the rate card is the same across our whole coverage area.`,
      ],
      features: [
        'From £60 local call-out + £1.50/mile',
        'Clear price quoted before dispatch',
        'No out-of-hours or holiday surcharge',
        'Winch/skate fees (£40) only if needed',
        'Cash, card, or bank transfer accepted',
      ],
      faqs: [
        {
          q: `What does recovery cost in ${area.name}?`,
          a: `Local recovery starts from £60 call-out plus £1.50 per mile. We confirm the exact total on the phone before dispatching — call 01698 700970 for a quote.`,
        },
        {
          q: 'Are there any hidden fees?',
          a: "No — no out-of-hours surcharge, no holiday surcharge, no fuel levy, no mileage rounding. Winch and skate fees (£40 each) only apply if your vehicle actually needs them.",
        },
        {
          q: `Are you cheaper than the AA or RAC in ${area.name}?`,
          a: "For non-members, usually yes — national brands typically start around £150-£200 for a non-member call-out. We're locally run with lower overhead, so we can charge less for the same job.",
        },
      ],
      relatedServiceSlug: 'cheap-car-recovery-glasgow',
      relatedServiceLabel: 'Cheap Car Recovery',
    }
  },
}

export const nearMeAngles: NearMeAngle[] = [
  carRecoveryNearMe,
  quickRecovery,
  hour24Recovery,
  cheapRecovery,
]

export function getAngleBySlug(slug: string): NearMeAngle | undefined {
  return nearMeAngles.find((a) => a.slug === slug)
}

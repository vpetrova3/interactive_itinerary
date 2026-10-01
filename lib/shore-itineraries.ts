export type Coordinate = [longitude: number, latitude: number];

export type ShoreStop = {
  time: string;
  name: string;
  area: string;
  duration: string;
  description: string;
  coordinates: Coordinate;
  travelMinutes: number;
  travelMode: string;
  booking?: string;
  googleQuery?: string;
};

export type NearbyOption = {
  name: string;
  note: string;
  googleQuery: string;
};

export type ShoreDay = {
  id: string;
  day: number;
  date: string;
  shortDate: string;
  city: string;
  country: string;
  hours: string;
  theme: string;
  summary: string;
  plannedTime: string;
  transport: string;
  origin: {
    name: string;
    coordinates: Coordinate;
    note: string;
  };
  departAt: string;
  returnPlan?: {
    leaveAt: string;
    aboardAt: string;
    travelMinutes: number;
    travelMode: string;
    note: string;
  };
  stops: ShoreStop[];
  nearby: NearbyOption[];
  sources: Array<{ label: string; href: string }>;
};

export const shoreDays: ShoreDay[] = [
  {
    id: 'yokohama',
    day: 1,
    date: 'Friday, 9 October',
    shortDate: '9 Oct',
    city: 'Yokohama',
    country: 'Japan',
    hours: 'Sails 19:00',
    theme: 'Harbour icons before sail-away',
    summary: 'A gentle, mostly walkable loop after luggage drop, with a long boarding buffer and the best waterfront views saved for last.',
    plannedTime: '5 hr 45 min',
    transport: 'Walk + short taxi',
    origin: {
      name: 'Osanbashi Pier · expected embarkation area',
      coordinates: [139.6477606, 35.4516796],
      note: 'The final terminal can change. Replace this pin when Ritz-Carlton issues the embarkation documents.',
    },
    departAt: '10:40',
    returnPlan: {
      leaveAt: '16:10',
      aboardAt: '16:45',
      travelMinutes: 20,
      travelMode: 'walk or taxi',
      note: 'Aim to be checked in more than two hours before the 19:00 departure.',
    },
    stops: [
      {
        time: '11:00',
        name: 'Yokohama Chinatown',
        area: 'Chūkagai',
        duration: '1 hr 10 min',
        description: 'Start with dim sum, steamed buns, and a wander beneath the ornate gates before the waterfront gets busy.',
        coordinates: [139.6451907, 35.4426638],
        travelMinutes: 20,
        travelMode: 'walk',
      },
      {
        time: '12:20',
        name: 'Yamashita Park',
        area: 'Waterfront',
        duration: '30 min',
        description: 'A breezy harbour promenade with classic views of the bay and Hikawa Maru.',
        coordinates: [139.6499494, 35.4457103],
        travelMinutes: 8,
        travelMode: 'walk',
      },
      {
        time: '13:00',
        name: 'Osanbashi rooftop',
        area: 'International Passenger Terminal',
        duration: '35 min',
        description: 'Walk the sculptural timber roof for the city’s best free harbour-and-skyline panorama.',
        coordinates: [139.6477606, 35.4516796],
        travelMinutes: 15,
        travelMode: 'walk',
      },
      {
        time: '13:50',
        name: 'Red Brick Warehouse',
        area: 'Akarenga',
        duration: '1 hr',
        description: 'Browse Japanese design shops, seasonal pop-ups, and waterside cafés inside the converted customs warehouses.',
        coordinates: [139.6429182, 35.4524046],
        travelMinutes: 12,
        travelMode: 'walk',
      },
      {
        time: '15:05',
        name: 'Minato Mirai waterfront',
        area: 'Hammerhead promenade',
        duration: '1 hr',
        description: 'Finish among the modern skyline, marina terraces, and excellent sail-away photo angles.',
        coordinates: [139.6387, 35.4557],
        travelMinutes: 12,
        travelMode: 'walk',
      },
    ],
    nearby: [
      { name: 'Cup Noodles Museum', note: 'Playful indoor swap if it rains; reserve the factory experience.', googleQuery: 'Cup Noodles Museum Yokohama' },
      { name: 'Marine & Walk', note: 'Low-effort coffee, boutiques, and harbour seating beside Red Brick.', googleQuery: 'Marine and Walk Yokohama' },
    ],
    sources: [
      { label: 'Yokohama official guide', href: 'https://www.yokohamajapan.com/things-to-do/detail.php?bbid=184' },
      { label: 'Waterfront overview', href: 'https://www.yokohamajapan.com/article/yokohama-skyline/' },
    ],
  },
  {
    id: 'kobe-osaka',
    day: 3,
    date: 'Sunday, 11 October',
    shortDate: '11 Oct',
    city: 'Kobe + Osaka',
    country: 'Japan',
    hours: '08:00–23:59',
    theme: 'Herb-garden heights to neon Osaka',
    summary: 'Use the unusually long call for two distinct moods: a calm Kobe morning, then Osaka architecture, street food, and late-evening glow.',
    plannedTime: '13 hr 50 min',
    transport: 'Port Liner + JR + metro',
    origin: {
      name: 'Kobe Port Terminal · expected berth',
      coordinates: [135.2022901, 34.6813803],
      note: 'Five minutes from Sannomiya by Port Liner; confirm the exact berth in the voyage documents.',
    },
    departAt: '08:20',
    returnPlan: {
      leaveAt: '21:15',
      aboardAt: '22:30',
      travelMinutes: 70,
      travelMode: 'metro + JR + Port Liner',
      note: 'Do not plan around the last train. This leaves roughly 90 minutes before sailing.',
    },
    stops: [
      {
        time: '09:00',
        name: 'Nunobiki Herb Gardens',
        area: 'Shin-Kobe',
        duration: '1 hr 30 min',
        description: 'Ride the ropeway above the city, then stroll downhill through seasonal gardens and glasshouses.',
        coordinates: [135.1923434, 34.7150568],
        travelMinutes: 30,
        travelMode: 'Port Liner + subway',
        booking: 'Check ropeway weather status that morning',
      },
      {
        time: '10:50',
        name: 'Kitano Ijinkan',
        area: 'Kitano',
        duration: '1 hr',
        description: 'Hillside lanes, historic Western residences, independent cafés, and lovely city views.',
        coordinates: [135.1912783, 34.70097],
        travelMinutes: 15,
        travelMode: 'walk downhill',
      },
      {
        time: '12:10',
        name: 'Kobe beef lunch',
        area: 'Sannomiya',
        duration: '1 hr 15 min',
        description: 'Book a counter-seat teppanyaki lunch near Sannomiya; lunch menus are usually the better-value way to do it.',
        coordinates: [135.1952852, 34.6933228],
        travelMinutes: 15,
        travelMode: 'walk',
        booking: 'Reserve a reputable Kobe Beef association restaurant',
        googleQuery: 'Kobe beef restaurant Sannomiya Kobe',
      },
      {
        time: '14:15',
        name: 'Umeda Sky Building',
        area: 'Kita, Osaka',
        duration: '1 hr 10 min',
        description: 'A dramatic open-air observatory and a clean first look at Osaka before diving into its street-level energy.',
        coordinates: [135.4905349, 34.7052927],
        travelMinutes: 50,
        travelMode: 'JR train + walk',
      },
      {
        time: '16:15',
        name: 'Dotonbori',
        area: 'Namba',
        duration: '1 hr 30 min',
        description: 'Neon canal views and a deliberate snack crawl: takoyaki, okonomiyaki, or kushikatsu—pace yourselves.',
        coordinates: [135.5025905, 34.6684839],
        travelMinutes: 35,
        travelMode: 'metro',
      },
      {
        time: '18:00',
        name: 'Hozenji Yokocho',
        area: 'Ura-Namba',
        duration: '2 hr 45 min',
        description: 'Trade the billboards for lantern-lit alleys, tiny bars, and a relaxed dinner around moss-covered Hozenji.',
        coordinates: [135.5033179, 34.6679653],
        travelMinutes: 5,
        travelMode: 'walk',
      },
    ],
    nearby: [
      { name: 'Kobe Harborland', note: 'Keep this as the low-energy alternative if weather closes the ropeway.', googleQuery: 'Kobe Harborland' },
      { name: 'Ura-Namba', note: 'Dense little standing bars and restaurants just east of Namba.', googleQuery: 'Ura Namba Osaka' },
    ],
    sources: [
      { label: 'Visit Kobe day routes', href: 'https://www.feel-kobe.jp/en/wp-content/uploads/sites/2/2024/04/kobe_guidebook_2024.pdf' },
      { label: 'Osaka official guide', href: 'https://www.osaka-info.jp/en/spot/dotonbori/' },
    ],
  },
  {
    id: 'hiroshima',
    day: 5,
    date: 'Tuesday, 13 October',
    shortDate: '13 Oct',
    city: 'Hiroshima + Miyajima',
    country: 'Japan',
    hours: '08:00–18:00',
    theme: 'Two World Heritage sites, one tide-perfect day',
    summary: 'Begin with Hiroshima’s essential history, then take the direct river-and-sea boat to Miyajima near the day’s 11:03 high tide.',
    plannedTime: '8 hr 25 min',
    transport: 'Tram + reserved ferry + taxi',
    origin: {
      name: 'Hiroshima Port · expected berth',
      coordinates: [132.4549, 34.3529],
      note: 'Cruise berths vary; this plan assumes the Ujina passenger-terminal area.',
    },
    departAt: '08:15',
    returnPlan: {
      leaveAt: '15:20',
      aboardAt: '16:45',
      travelMinutes: 85,
      travelMode: 'reserved ferry + taxi',
      note: 'Take the direct boat back to Peace Park, then taxi to the port. Recheck the seasonal timetable.',
    },
    stops: [
      {
        time: '08:45',
        name: 'Peace Memorial Museum',
        area: 'Peace Memorial Park',
        duration: '1 hr 20 min',
        description: 'Go early and give the museum proper attention before walking through the memorial landscape.',
        coordinates: [132.4530979, 34.3915495],
        travelMinutes: 30,
        travelMode: 'tram or taxi',
      },
      {
        time: '10:10',
        name: 'A-Bomb Dome + Motoyasu Pier',
        area: 'Peace Memorial Park',
        duration: '45 min',
        description: 'Cross the park to the Dome, then arrive at the river pier with time to check in for the boat.',
        coordinates: [132.4541825, 34.3937904],
        travelMinutes: 8,
        travelMode: 'walk',
      },
      {
        time: '11:55',
        name: 'Itsukushima Shrine',
        area: 'Miyajima',
        duration: '1 hr',
        description: 'The 11:10 sea route arrives close to the 11:03 high tide, ideal for the shrine’s floating-water setting.',
        coordinates: [132.3203641, 34.2976933],
        travelMinutes: 45,
        travelMode: 'World Heritage Sea Route',
        booking: 'Reserve the 11:10 boat by 20:30 the previous day',
      },
      {
        time: '13:05',
        name: 'Omotesando lunch',
        area: 'Miyajima',
        duration: '1 hr',
        description: 'Choose grilled oysters, anago eel rice, and momiji manju along the island’s liveliest shopping street.',
        coordinates: [132.3219607, 34.2995564],
        travelMinutes: 8,
        travelMode: 'walk',
      },
      {
        time: '14:15',
        name: 'Daisho-in',
        area: 'Mount Misen foothills',
        duration: '50 min',
        description: 'A quieter, atmospheric temple complex with stone steps, tiny statues, and forested slopes.',
        coordinates: [132.3190723, 34.2929647],
        travelMinutes: 15,
        travelMode: 'walk',
      },
    ],
    nearby: [
      { name: 'Orizuru Tower', note: 'Contemporary city-view alternative if the Miyajima boat is cancelled.', googleQuery: 'Hiroshima Orizuru Tower' },
      { name: 'Momijidani Park', note: 'A calm extra loop on Miyajima only if the ferry schedule leaves room.', googleQuery: 'Momijidani Park Miyajima' },
    ],
    sources: [
      { label: 'World Heritage Sea Route', href: 'https://www.aqua-net-h.co.jp/en/heritage/?lang=en' },
      { label: 'Miyajima October tide table', href: 'https://www.miyajima.or.jp/sio/sio10.php' },
      { label: 'Hiroshima official access guide', href: 'https://dive-hiroshima.com/en/information/access-miyajima2/' },
    ],
  },
  {
    id: 'fukuoka',
    day: 6,
    date: 'Wednesday, 14 October',
    shortDate: '14 Oct',
    city: 'Fukuoka',
    country: 'Japan',
    hours: '09:00–21:00',
    theme: 'Old Hakata, new design, and yatai after dark',
    summary: 'A relaxed cross-city line from shrine culture to art and indie Daimyo, ending at the open-air food stalls Fukuoka does best.',
    plannedTime: '10 hr 40 min',
    transport: 'Taxi + subway + walk',
    origin: {
      name: 'Hakata Port International Terminal · expected berth',
      coordinates: [130.3996199, 33.6077571],
      note: 'This is the usual international-cruise area; confirm the vessel berth before sailing.',
    },
    departAt: '09:15',
    returnPlan: {
      leaveAt: '19:35',
      aboardAt: '20:00',
      travelMinutes: 20,
      travelMode: 'taxi',
      note: 'Yatai opening varies with weather, so keep dinner flexible and protect the 20:00 return.',
    },
    stops: [
      {
        time: '09:35',
        name: 'Kushida Shrine',
        area: 'Hakata Old Town',
        duration: '45 min',
        description: 'Start at Hakata’s guardian shrine and walk a short slice of the traditional merchant district.',
        coordinates: [130.4115372, 33.5913162],
        travelMinutes: 20,
        travelMode: 'taxi',
      },
      {
        time: '10:50',
        name: 'Ohori Park + Japanese Garden',
        area: 'Ohori',
        duration: '1 hr 10 min',
        description: 'A graceful lake circuit and compact garden—the right pause before the busier afternoon.',
        coordinates: [130.3763271, 33.5861263],
        travelMinutes: 25,
        travelMode: 'subway + walk',
      },
      {
        time: '12:05',
        name: 'Fukuoka Art Museum',
        area: 'Ohori Park',
        duration: '1 hr',
        description: 'A smart mix of Asian antiquities, modern art, and contemporary names in a beautifully renovated lakeside museum.',
        coordinates: [130.3797313, 33.583939],
        travelMinutes: 5,
        travelMode: 'walk',
      },
      {
        time: '13:30',
        name: 'Daimyo design crawl',
        area: 'Daimyo',
        duration: '2 hr 10 min',
        description: 'Lunch, specialty coffee, vintage fashion, small Japanese labels, and side-street people-watching.',
        coordinates: [130.3948531, 33.5891937],
        travelMinutes: 20,
        travelMode: 'subway + walk',
        googleQuery: 'Daimyo Fukuoka shops cafes',
      },
      {
        time: '16:00',
        name: 'ACROS Step Garden',
        area: 'Tenjin',
        duration: '45 min',
        description: 'Climb the planted terraces of this 1990s eco-landmark for a free city-centre viewpoint.',
        coordinates: [130.4028516, 33.592167],
        travelMinutes: 15,
        travelMode: 'walk',
      },
      {
        time: '18:00',
        name: 'Nakasu + Haruyoshi yatai',
        area: 'Naka River',
        duration: '1 hr 30 min',
        description: 'Queue for a tiny riverside stall and order one round of ramen, yakitori, or oden before hopping to the next.',
        coordinates: [130.4056216, 33.5934757],
        travelMinutes: 8,
        travelMode: 'walk',
        booking: 'Most stalls open from 18:00; cash and patience help',
      },
    ],
    nearby: [
      { name: 'Canal City Hakata', note: 'Covered shopping-and-food option for wet weather near Kushida.', googleQuery: 'Canal City Hakata' },
      { name: 'Yanagibashi Rengo Market', note: 'A compact local food-market swap if you prefer daytime eating.', googleQuery: 'Yanagibashi Rengo Market Fukuoka' },
    ],
    sources: [
      { label: 'Fukuoka official day guide', href: 'https://www.gofukuoka.jp/en/articles/detail/bb5cdd79-98f4-4657-9435-b568de409fbd' },
      { label: 'Official yatai guide', href: 'https://www.gofukuoka.jp/yatai/' },
    ],
  },
  {
    id: 'busan',
    day: 7,
    date: 'Thursday, 15 October',
    shortDate: '15 Oct',
    city: 'Busan',
    country: 'South Korea',
    hours: '08:00–17:00',
    theme: 'Cliffside colour and market energy',
    summary: 'Stay on Busan’s west side to avoid losing the day in traffic: hillside art, serious seafood, and a coastal café walk.',
    plannedTime: '6 hr 55 min',
    transport: 'Taxi + walk',
    origin: {
      name: 'Busan Port International Passenger Terminal',
      coordinates: [129.0492086, 35.1177052],
      note: 'This plan assumes the central international terminal, not the more distant cruise berths.',
    },
    departAt: '08:15',
    returnPlan: {
      leaveAt: '14:30',
      aboardAt: '15:15',
      travelMinutes: 30,
      travelMode: 'taxi',
      note: 'Busan traffic can expand quickly. This conservative return leaves a large safety margin.',
    },
    stops: [
      {
        time: '08:45',
        name: 'Gamcheon Culture Village',
        area: 'Saha-gu',
        duration: '1 hr 20 min',
        description: 'Arrive before the tour buses for colourful lanes, rooftop viewpoints, and small artist shops.',
        coordinates: [129.0087897, 35.0963371],
        travelMinutes: 25,
        travelMode: 'taxi',
      },
      {
        time: '10:25',
        name: 'Gukje Market + BIFF Square',
        area: 'Nampo',
        duration: '55 min',
        description: 'Thread through old-market alleys into Busan’s cinema quarter for hotteok and street snacks.',
        coordinates: [129.0281925, 35.1011643],
        travelMinutes: 20,
        travelMode: 'taxi',
      },
      {
        time: '11:25',
        name: 'Jagalchi Market lunch',
        area: 'Nampo waterfront',
        duration: '1 hr 10 min',
        description: 'Browse Korea’s most famous seafood market, then eat upstairs or choose a simple grilled-fish lunch nearby.',
        coordinates: [129.0251226, 35.095744],
        travelMinutes: 8,
        travelMode: 'walk',
      },
      {
        time: '13:00',
        name: 'Huinnyeoul Culture Village',
        area: 'Yeongdo',
        duration: '1 hr 25 min',
        description: 'A photogenic cliff-edge lane of murals, sea views, and low-key cafés above the coastal trail.',
        coordinates: [129.0452591, 35.0777551],
        travelMinutes: 20,
        travelMode: 'taxi',
      },
    ],
    nearby: [
      { name: 'Songdo Cloud Trails', note: 'Swap for Huinnyeoul if you want a cable car and skywalk.', googleQuery: 'Songdo Cloud Trails Busan' },
      { name: 'Yongdusan Park', note: 'Easy central add-on near Nampo if the group wants less driving.', googleQuery: 'Yongdusan Park Busan' },
    ],
    sources: [
      { label: 'Visit Busan official routes', href: 'https://www.visitbusan.net/en/index.do' },
      { label: 'Huinnyeoul official listing', href: 'https://www.visitbusan.net/en/index.do?menuCd=DOM_000000301001001000&uc_seq=295&lang_cd=en' },
    ],
  },
  {
    id: 'nagasaki',
    day: 8,
    date: 'Friday, 16 October',
    shortDate: '16 Oct',
    city: 'Nagasaki',
    country: 'Japan',
    hours: '08:00–19:00',
    theme: 'Hills, global history, and harbour light',
    summary: 'The port sits beside the historic south, so begin on foot and work north before ending with the city’s signature mountain view.',
    plannedTime: '9 hr 10 min',
    transport: 'Walk + tram + taxi',
    origin: {
      name: 'Matsugae International Terminal · expected berth',
      coordinates: [129.8681592, 32.7459427],
      note: 'The usual international-cruise berth is beside Glover Garden; verify once final port details arrive.',
    },
    departAt: '08:10',
    returnPlan: {
      leaveAt: '17:00',
      aboardAt: '17:35',
      travelMinutes: 25,
      travelMode: 'taxi',
      note: 'Enjoy Mt Inasa in daylight rather than gambling on sunset before the 19:00 sailing.',
    },
    stops: [
      {
        time: '08:20',
        name: 'Glover Garden',
        area: 'Minamiyamate',
        duration: '1 hr 15 min',
        description: 'Open-air hillside estates, garden paths, and one of the harbour’s loveliest elevated perspectives.',
        coordinates: [129.869055, 32.7333666],
        travelMinutes: 10,
        travelMode: 'walk',
      },
      {
        time: '09:40',
        name: 'Oura Cathedral',
        area: 'Minamiyamate',
        duration: '30 min',
        description: 'Japan’s oldest surviving church is an essential, compact companion to Glover Garden.',
        coordinates: [129.8708923, 32.7362268],
        travelMinutes: 5,
        travelMode: 'walk',
      },
      {
        time: '10:35',
        name: 'Dejima',
        area: 'Dejima-machi',
        duration: '1 hr',
        description: 'Reconstructed merchant buildings make the city’s centuries of Dutch trade tangible and easy to explore.',
        coordinates: [129.872962, 32.7434177],
        travelMinutes: 20,
        travelMode: 'tram or walk',
      },
      {
        time: '11:45',
        name: 'Shinchi Chinatown lunch',
        area: 'Shinchi',
        duration: '1 hr',
        description: 'Order the local classics: champon noodle soup or crisp-noodle sara udon.',
        coordinates: [129.8753319, 32.7414507],
        travelMinutes: 8,
        travelMode: 'walk',
      },
      {
        time: '13:20',
        name: 'Peace Park',
        area: 'Matsuyama-machi',
        duration: '40 min',
        description: 'A contemplative approach to the memorial zone before entering the museum.',
        coordinates: [129.8634246, 32.7759201],
        travelMinutes: 30,
        travelMode: 'tram',
      },
      {
        time: '14:05',
        name: 'Atomic Bomb Museum',
        area: 'Hirano-machi',
        duration: '1 hr 15 min',
        description: 'A focused, moving account of the bombing and Nagasaki’s path toward peace.',
        coordinates: [129.8643791, 32.7727742],
        travelMinutes: 7,
        travelMode: 'walk',
      },
      {
        time: '15:50',
        name: 'Mt Inasa Observatory',
        area: 'Inasa-yama',
        duration: '1 hr',
        description: 'Finish high above the amphitheatre harbour; the layered cityscape is spectacular even before sunset.',
        coordinates: [129.8495002, 32.7526122],
        travelMinutes: 25,
        travelMode: 'taxi',
        booking: 'Skip if cloud closes in or roads are slow',
      },
    ],
    nearby: [
      { name: 'Spectacles Bridge', note: 'Easy historic-city swap if Mt Inasa is clouded out.', googleQuery: 'Meganebashi Bridge Nagasaki' },
      { name: 'Dutch Slope', note: 'A pretty ten-minute detour between the port and Dejima.', googleQuery: 'Dutch Slope Nagasaki' },
    ],
    sources: [
      { label: 'Nagasaki official highlights', href: 'https://www.discover-nagasaki.com/en/featured-topics/nc-spot' },
      { label: 'Official one-day itinerary', href: 'https://www.discover-nagasaki.com/en/itinerary/detail6' },
    ],
  },
  {
    id: 'kagoshima',
    day: 9,
    date: 'Saturday, 17 October',
    shortDate: '17 Oct',
    city: 'Kagoshima',
    country: 'Japan',
    hours: '08:00–14:00',
    theme: 'Garden calm with Sakurajima in frame',
    summary: 'This is the short call: choose one exceptional landscape, eat one iconic meal, and resist the urge to squeeze in the ferry.',
    plannedTime: '4 hr 35 min',
    transport: 'Pre-booked taxi',
    origin: {
      name: 'Marine Port Kagoshima · expected berth',
      coordinates: [130.554322, 31.536906],
      note: 'Smaller ships can use Kitafuto instead. Confirm the berth before pre-booking a taxi.',
    },
    departAt: '08:10',
    returnPlan: {
      leaveAt: '12:30',
      aboardAt: '13:00',
      travelMinutes: 25,
      travelMode: 'pre-booked taxi',
      note: 'The 14:00 departure makes a Sakurajima ferry detour too fragile for this plan.',
    },
    stops: [
      {
        time: '08:45',
        name: 'Sengan-en',
        area: 'Iso',
        duration: '2 hr',
        description: 'A stately Shimadzu garden using Sakurajima and the bay as borrowed scenery, plus UNESCO industrial heritage.',
        coordinates: [130.5766252, 31.6166224],
        travelMinutes: 35,
        travelMode: 'taxi',
      },
      {
        time: '11:10',
        name: 'Tenmonkan lunch',
        area: 'City centre',
        duration: '1 hr 10 min',
        description: 'Pick black-pork tonkatsu or shabu-shabu, then share a Shirokuma shaved ice if time allows.',
        coordinates: [130.5545632, 31.5900759],
        travelMinutes: 20,
        travelMode: 'taxi',
        googleQuery: 'black pork tonkatsu Tenmonkan Kagoshima',
      },
    ],
    nearby: [
      { name: 'Shiroyama Observatory', note: 'Only add with a waiting taxi and clear roads; the city-and-volcano view is superb.', googleQuery: 'Shiroyama Observatory Kagoshima' },
      { name: 'Kagoshima City Aquarium', note: 'Reliable wet-weather alternative near the city-centre waterfront.', googleQuery: 'Kagoshima City Aquarium' },
    ],
    sources: [
      { label: 'Official cruise-port model route', href: 'https://www.kagoshima-kankou.com/for/itineraries/53152/print' },
      { label: 'Sengan-en official guide', href: 'https://www.kagoshima-yokanavi.jp/en/feature/senganen2' },
    ],
  },
  {
    id: 'tokyo',
    day: 11,
    date: 'Monday, 19 October',
    shortDate: '19 Oct',
    city: 'Tokyo',
    country: 'Japan',
    hours: 'Arrives 08:00',
    theme: 'Market morning to immersive-art night',
    summary: 'After luggage drop, move east to west: an old food district, a tidal garden, Ginza design, and a timed teamLab finale.',
    plannedTime: '10 hr 30 min',
    transport: 'Taxi + metro + walk',
    origin: {
      name: 'Tokyo International Cruise Terminal · provisional',
      coordinates: [139.7730812, 35.621401],
      note: 'The arrival terminal is not yet confirmed. Luggage drop at the hotel or Tokyo Station comes before this route.',
    },
    departAt: '08:40',
    stops: [
      {
        time: '09:15',
        name: 'Tsukiji Outer Market',
        area: 'Tsukiji',
        duration: '1 hr 15 min',
        description: 'Go early for tamagoyaki, seafood, tea, knives, and the market’s still-electric breakfast rhythm.',
        coordinates: [139.7704732, 35.6653884],
        travelMinutes: 25,
        travelMode: 'taxi after luggage drop',
      },
      {
        time: '10:40',
        name: 'Hamarikyu Gardens',
        area: 'Shiodome',
        duration: '1 hr 10 min',
        description: 'A tidal Edo-period garden framed by towers; pause for matcha at the teahouse on the pond.',
        coordinates: [139.7638239, 35.660176],
        travelMinutes: 10,
        travelMode: 'walk',
      },
      {
        time: '12:10',
        name: 'Ginza design + lunch',
        area: 'GINZA SIX',
        duration: '1 hr 45 min',
        description: 'Browse Japanese fashion, stationery, food halls, and architecture without trying to “complete” Ginza.',
        coordinates: [139.764049, 35.6695326],
        travelMinutes: 15,
        travelMode: 'walk',
        googleQuery: 'GINZA SIX Tokyo',
      },
      {
        time: '14:25',
        name: 'Azabudai Hills',
        area: 'Kamiyacho',
        duration: '1 hr',
        description: 'Contemporary architecture, landscaped public space, and excellent coffee beside the new art district.',
        coordinates: [139.7406517, 35.6608421],
        travelMinutes: 25,
        travelMode: 'metro',
      },
      {
        time: '15:40',
        name: 'teamLab Borderless',
        area: 'Azabudai Hills',
        duration: '2 hr',
        description: 'A reservation-worthy maze of responsive digital rooms; leave time to wander rather than chase every artwork.',
        coordinates: [139.7434178, 35.6620024],
        travelMinutes: 5,
        travelMode: 'walk',
        booking: 'Book a 15:30–16:00 timed ticket well ahead',
      },
      {
        time: '18:15',
        name: 'Azabu-Juban dinner',
        area: 'Azabu-Juban',
        duration: 'Open-ended',
        description: 'End in a polished but lived-in neighbourhood of izakaya, wine bars, sweets, and tiny specialist restaurants.',
        coordinates: [139.736177, 35.6565513],
        travelMinutes: 15,
        travelMode: 'walk or one metro stop',
      },
    ],
    nearby: [
      { name: '21_21 DESIGN SIGHT', note: 'A strong contemporary-design swap if immersive art is sold out.', googleQuery: '21_21 DESIGN SIGHT Tokyo' },
      { name: 'Tokyo Station Marunouchi', note: 'Elegant architecture and easy luggage storage before or after the route.', googleQuery: 'Tokyo Station Marunouchi' },
    ],
    sources: [
      { label: 'GO TOKYO Tsukiji guide', href: 'https://www.gotokyo.org/en/spot/65/' },
      { label: 'Hamarikyu official guide', href: 'https://www.gotokyo.org/en/spot/20/index.html' },
      { label: 'teamLab Borderless', href: 'https://www.teamlab.art/e/tokyo/' },
    ],
  },
];

export function googleSearchLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function googleDirectionsLink(from: string, to: string) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}`;
}

export function distanceLabel(a: Coordinate, b: Coordinate) {
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const deltaLat = toRadians(b[1] - a[1]);
  const deltaLng = toRadians(b[0] - a[0]);
  const lat1 = toRadians(a[1]);
  const lat2 = toRadians(b[1]);
  const value = Math.sin(deltaLat / 2) ** 2
    + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
  const km = earthRadiusKm * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));

  return km < 1 ? `${Math.max(100, Math.round((km * 1000) / 100) * 100)} m` : `${km.toFixed(1)} km`;
}

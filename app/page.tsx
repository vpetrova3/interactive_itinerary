'use client';

import { useMemo, useState } from 'react';
import {
  Anchor,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Ship,
  Sparkles,
  Waves,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShorePlanner } from '@/components/shore-planner';

type Day = {
  day: number;
  date: string;
  shortDate: string;
  place: string;
  country?: string;
  type: 'port' | 'sea';
  time: string;
  note: string;
  x?: number;
  y?: number;
};

const itinerary: Day[] = [
  { day: 1, date: 'Friday, 9 October', shortDate: '9 Oct', place: 'Yokohama', country: 'Japan', type: 'port', time: 'Departs 19:00', note: 'Embark Luminara', x: 82, y: 22 },
  { day: 2, date: 'Saturday, 10 October', shortDate: '10 Oct', place: 'At sea', type: 'sea', time: 'All day', note: 'Settle into life aboard' },
  { day: 3, date: 'Sunday, 11 October', shortDate: '11 Oct', place: 'Kobe', country: 'Japan', type: 'port', time: '08:00 — 23:59', note: 'A long day for Osaka & Kobe', x: 55, y: 43 },
  { day: 4, date: 'Monday, 12 October', shortDate: '12 Oct', place: 'At sea', type: 'sea', time: 'All day', note: 'A slower day aboard' },
  { day: 5, date: 'Tuesday, 13 October', shortDate: '13 Oct', place: 'Hiroshima', country: 'Japan', type: 'port', time: '08:00 — 18:00', note: 'Peace Memorial & Miyajima', x: 34, y: 51 },
  { day: 6, date: 'Wednesday, 14 October', shortDate: '14 Oct', place: 'Fukuoka', country: 'Japan', type: 'port', time: '09:00 — 21:00', note: 'Markets, shrines & ramen', x: 22, y: 63 },
  { day: 7, date: 'Thursday, 15 October', shortDate: '15 Oct', place: 'Busan', country: 'South Korea', type: 'port', time: '08:00 — 17:00', note: 'Coast, markets & Korean spa', x: 12, y: 49 },
  { day: 8, date: 'Friday, 16 October', shortDate: '16 Oct', place: 'Nagasaki', country: 'Japan', type: 'port', time: '08:00 — 19:00', note: 'Harbour views & layered history', x: 20, y: 74 },
  { day: 9, date: 'Saturday, 17 October', shortDate: '17 Oct', place: 'Kagoshima', country: 'Japan', type: 'port', time: '08:00 — 14:00', note: 'Sakurajima volcano morning', x: 29, y: 88 },
  { day: 10, date: 'Sunday, 18 October', shortDate: '18 Oct', place: 'At sea', type: 'sea', time: 'All day', note: 'Final day aboard Luminara' },
  { day: 11, date: 'Monday, 19 October', shortDate: '19 Oct', place: 'Tokyo', country: 'Japan', type: 'port', time: 'Arrives 08:00', note: 'Disembark in Tokyo', x: 86, y: 17 },
];

const portDays = itinerary.filter((item) => item.type === 'port');
const route = portDays.map((item) => `${item.x},${item.y}`).join(' ');

function mapLink(day: Day) {
  const query = encodeURIComponent(`${day.place}, ${day.country ?? ''}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function RouteMap({ selected, onSelect }: { selected: number; onSelect: (day: number) => void }) {
  return (
    <div className="route-map" aria-label="Interactive overview of the cruise route">
      <div className="map-topline">
        <span><MapPin /> Route overview</span>
        <span>Not for navigation</span>
      </div>
      <svg viewBox="0 0 100 100" role="img" aria-label="Route from Yokohama around western Japan and Busan to Tokyo">
        <defs>
          <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dcefeb" />
            <stop offset="1" stopColor="#cbdedc" />
          </linearGradient>
          <filter id="soft-shadow" x="-100%" y="-100%" width="300%" height="300%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.4" floodOpacity=".2" />
          </filter>
        </defs>
        <rect width="100" height="100" rx="4" fill="url(#sea)" />
        <path className="land" d="M100 0H73c3 7 8 10 7 17-1 6-8 10-13 13-5 4-7 10-12 12-6 2-9-3-16 1-6 4-7 11-14 15-7 4-12 8-10 15 3 8 16 12 22 18 3 3 5 6 7 9h56Z" />
        <path className="korea" d="M0 22c7 0 15 3 18 9 4 8-1 12 0 20 1 5 4 8 3 13-2 6-7 11-11 15H0Z" />
        <polyline className="route-line route-halo" points={route} />
        <polyline className="route-line" points={route} />
        {portDays.map((day) => {
          const isActive = selected === day.day;
          return (
            <g
              key={day.day}
              className={isActive ? 'map-pin active' : 'map-pin'}
              onClick={() => onSelect(day.day)}
              role="button"
              tabIndex={0}
              aria-label={`Show day ${day.day}, ${day.place}`}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') onSelect(day.day);
              }}
            >
              <circle cx={day.x} cy={day.y} r={isActive ? 4.6 : 3.4} filter="url(#soft-shadow)" />
              <text x={day.x} y={(day.y ?? 0) + 1.35}>{day.day}</text>
            </g>
          );
        })}
        <text className="map-label" x="60" y="58">JAPAN</text>
        <text className="map-label" x="2" y="16">S. KOREA</text>
        <text className="water-label" x="47" y="76">East China Sea</text>
      </svg>
      <div className="map-caption">
        <span><i className="dot port-dot" /> 8 port calls</span>
        <span><i className="dot sea-dot" /> 3 sea days</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(1);
  const selected = useMemo(() => itinerary.find((day) => day.day === selectedDay) ?? itinerary[0], [selectedDay]);

  const move = (amount: number) => {
    setSelectedDay((current) => Math.min(itinerary.length, Math.max(1, current + amount)));
  };

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Japan voyage home">
          <span className="monogram"><Waves /></span>
          <span>Japan by Sea</span>
        </a>
        <Badge className="voyage-badge">Voyage 13261009</Badge>
      </header>

      <section id="top" className="hero-shell">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles /> Our voyage aboard Luminara</div>
          <h1>Tokyo to Tokyo,<br /><em>the long way round.</em></h1>
          <p className="hero-deck">Ten nights tracing Japan’s coast, with one hop across to Busan.</p>
          <div className="hero-meta">
            <span><CalendarDays /> 9–19 October 2026</span>
            <span><Ship /> 10 nights · 8 ports</span>
          </div>
          <a href="#shore-days" className="hero-action">
            Explore every day ashore <ArrowUpRight data-icon="inline-end" />
          </a>
        </div>
        <figure className="hero-photo">
          <img src="/yokohama.jpg" alt="Yokohama waterfront seen across the bay" />
          <figcaption>Departure port · Yokohama</figcaption>
        </figure>
      </section>

      <section className="journey-shell" aria-labelledby="journey-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">The journey</p>
            <h2 id="journey-title">Eleven days at a glance</h2>
          </div>
          <p>Tap a day to explore the route.</p>
        </div>

        <div className="journey-grid">
          <RouteMap selected={selectedDay} onSelect={setSelectedDay} />

          <div className="day-panel" aria-live="polite">
            <div className="day-panel-top">
              <div>
                <p>Day {selected.day} · {selected.date}</p>
                <h3>{selected.place}</h3>
                {selected.country && <span>{selected.country}</span>}
              </div>
              <div className={selected.type === 'sea' ? 'day-icon sea' : 'day-icon'}>
                {selected.type === 'sea' ? <Waves /> : <Anchor />}
              </div>
            </div>

            <div className="day-details">
              <div><Clock3 /><span><small>Schedule</small>{selected.time}</span></div>
              <div><Sparkles /><span><small>At a glance</small>{selected.note}</span></div>
            </div>

            {selected.type === 'port' ? (
              <div className="maps-block">
                <p><strong>The day plan is ready.</strong> See the ordered route, transfer times, nearby swaps, and return-to-ship buffer.</p>
                <a href="#shore-days" className="maps-button">
                  Open the shore-day planner <ArrowUpRight data-icon="inline-end" />
                </a>
                <a className="city-map-link" href={mapLink(selected)} target="_blank" rel="noreferrer">Just open {selected.place} in Google Maps <ArrowUpRight /></a>
              </div>
            ) : (
              <div className="maps-block sea-block">
                <p><strong>A day aboard.</strong> We’ll use this space for dining reservations, spa plans, and anything happening on Luminara.</p>
              </div>
            )}

            <div className="day-nav">
              <Button variant="outline" size="icon-lg" onClick={() => move(-1)} disabled={selectedDay === 1} aria-label="Previous day"><ChevronLeft /></Button>
              <span>{selected.day} / {itinerary.length}</span>
              <Button variant="outline" size="icon-lg" onClick={() => move(1)} disabled={selectedDay === itinerary.length} aria-label="Next day"><ChevronRight /></Button>
            </div>
          </div>
        </div>

        <div className="timeline" aria-label="Cruise timeline">
          {itinerary.map((day) => (
            <button key={day.day} className={selectedDay === day.day ? 'timeline-item active' : 'timeline-item'} onClick={() => setSelectedDay(day.day)}>
              <span className="timeline-date">{day.shortDate}</span>
              <span className={day.type === 'sea' ? 'timeline-marker sea' : 'timeline-marker'} />
              <span className="timeline-place">{day.place}</span>
              <span className="timeline-time">{day.time}</span>
            </button>
          ))}
        </div>
      </section>

      <ShorePlanner />

      <footer>
        <span><Ship /> Luminara · October 2026</span>
        <span>Itinerary times are local and may change.</span>
      </footer>
    </main>
  );
}

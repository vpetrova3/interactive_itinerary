'use client';

import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  CarFront,
  Check,
  Clock3,
  Compass,
  Footprints,
  Info,
  MapPin,
  Navigation,
  Ship,
  Sparkles,
  TicketCheck,
} from 'lucide-react';

import { ShoreMap } from '@/components/shore-map';
import {
  distanceLabel,
  googleDirectionsLink,
  googleSearchLink,
  shoreDays,
} from '@/lib/shore-itineraries';

function searchLabel(_dayId: string, name: string, country: string) {
  return `${name}, ${country}`.trim();
}

export function ShorePlanner() {
  const [selectedDayId, setSelectedDayId] = useState('yokohama');
  const [activeStop, setActiveStop] = useState(0);
  const selectedDay = useMemo(
    () => shoreDays.find((day) => day.id === selectedDayId) ?? shoreDays[0],
    [selectedDayId],
  );

  const selectDay = (dayId: string) => {
    setSelectedDayId(dayId);
    setActiveStop(0);
  };

  return (
    <section id="shore-days" className="shore-shell" aria-labelledby="shore-title">
      <div className="shore-heading">
        <div>
          <p className="section-kicker">The useful layer</p>
          <h2 id="shore-title">Eight days ashore,<br /><em>already thought through.</em></h2>
        </div>
        <p>Real places, realistic pacing, and enough margin to enjoy the day without watching the clock every five minutes.</p>
      </div>

      <div className="shore-day-tabs" role="tablist" aria-label="Choose a day ashore">
        {shoreDays.map((day) => (
          <button
            key={day.id}
            type="button"
            role="tab"
            aria-selected={selectedDay.id === day.id}
            className={selectedDay.id === day.id ? 'shore-tab active' : 'shore-tab'}
            onClick={() => selectDay(day.id)}
          >
            <span>Day {day.day} · {day.shortDate}</span>
            <strong>{day.city}</strong>
            <small>{day.hours}</small>
          </button>
        ))}
      </div>

      <div className="shore-day-intro">
        <div>
          <p>{selectedDay.date} · {selectedDay.country}</p>
          <h3>{selectedDay.theme}</h3>
          <span>{selectedDay.summary}</span>
        </div>
        <div className="day-facts">
          <div><Clock3 /><span><small>Plan length</small>{selectedDay.plannedTime}</span></div>
          <div><Navigation /><span><small>Best way around</small>{selectedDay.transport}</span></div>
          <div><Ship /><span><small>Port window</small>{selectedDay.hours}</span></div>
        </div>
      </div>

      <div className="planner-grid">
        <div className="planner-map-column">
          <ShoreMap day={selectedDay} activeStop={activeStop} onSelectStop={setActiveStop} />
          <div className="berth-note">
            <Info />
            <p><strong>{selectedDay.origin.name}</strong><span>{selectedDay.origin.note}</span></p>
          </div>
        </div>

        <div className="stop-list" aria-label={`${selectedDay.city} itinerary`}>
          <div className="depart-card">
            <span className="depart-icon"><Ship /></span>
            <div><small>{selectedDay.departAt}</small><strong>Leave the ship</strong><p>Start from {selectedDay.origin.name.split(' · ')[0]}.</p></div>
          </div>

          {selectedDay.stops.map((stop, index) => {
            const previousName = index === 0 ? selectedDay.origin.name : selectedDay.stops[index - 1].name;
            const previousCoordinates = index === 0 ? selectedDay.origin.coordinates : selectedDay.stops[index - 1].coordinates;
            const destinationQuery = stop.googleQuery ?? searchLabel(selectedDay.id, stop.name, selectedDay.country);
            const fromQuery = index === 0
              ? searchLabel(selectedDay.id, selectedDay.origin.name.split(' · ')[0], selectedDay.country)
              : selectedDay.stops[index - 1].googleQuery ?? searchLabel(selectedDay.id, previousName, selectedDay.country);

            return (
              <div key={`${selectedDay.id}-${stop.name}`} className="stop-group">
                <a
                  className="transfer-row"
                  href={googleDirectionsLink(fromQuery, destinationQuery)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Directions from ${previousName} to ${stop.name}`}
                >
                  <span>{stop.travelMode.includes('walk') ? <Footprints /> : <CarFront />}</span>
                  <span>{stop.travelMinutes} min · {stop.travelMode}</span>
                  <span>{distanceLabel(previousCoordinates, stop.coordinates)} straight-line</span>
                  <ArrowUpRight />
                </a>

                <article className={activeStop === index ? 'stop-card active' : 'stop-card'}>
                  <button type="button" className="stop-main" onClick={() => setActiveStop(index)}>
                    <span className="stop-number">{index + 1}</span>
                    <span className="stop-copy">
                      <span className="stop-time">{stop.time} · {stop.duration}</span>
                      <strong>{stop.name}</strong>
                      <small>{stop.area}</small>
                      <p>{stop.description}</p>
                    </span>
                    <span className="stop-check">{activeStop === index ? <Check /> : <MapPin />}</span>
                  </button>
                  <div className="stop-actions">
                    {stop.booking && <span className="booking-note"><TicketCheck /> {stop.booking}</span>}
                    <a href={googleSearchLink(destinationQuery)} target="_blank" rel="noreferrer">
                      Open place <ArrowUpRight />
                    </a>
                  </div>
                </article>
              </div>
            );
          })}

          {selectedDay.returnPlan ? (
            <div className="return-card">
              <span className="return-icon"><Clock3 /></span>
              <div>
                <small>Leave at {selectedDay.returnPlan.leaveAt} · {selectedDay.returnPlan.travelMinutes} min by {selectedDay.returnPlan.travelMode}</small>
                <strong>Back aboard by {selectedDay.returnPlan.aboardAt}</strong>
                <p>{selectedDay.returnPlan.note}</p>
                <a
                  href={googleDirectionsLink(
                    selectedDay.stops.at(-1)?.googleQuery ?? searchLabel(selectedDay.id, selectedDay.stops.at(-1)?.name ?? selectedDay.city, selectedDay.country),
                    searchLabel(selectedDay.id, selectedDay.origin.name.split(' · ')[0], selectedDay.country),
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Directions back to the ship <ArrowUpRight />
                </a>
              </div>
            </div>
          ) : (
            <div className="return-card open-ended">
              <span className="return-icon"><Sparkles /></span>
              <div><small>Post-cruise day</small><strong>No ship clock tonight</strong><p>Keep dinner open-ended or head on to the hotel.</p></div>
            </div>
          )}
        </div>
      </div>

      <div className="around-grid">
        <div className="around-copy">
          <Compass />
          <div><p className="section-kicker">Around the route</p><h3>Good swaps, not extra obligations.</h3><span>Use these if weather, energy, or opening hours change the shape of the day.</span></div>
        </div>
        <div className="nearby-options">
          {selectedDay.nearby.map((option) => (
            <a key={option.name} href={googleSearchLink(option.googleQuery)} target="_blank" rel="noreferrer">
              <span><strong>{option.name}</strong><small>{option.note}</small></span><ArrowUpRight />
            </a>
          ))}
        </div>
      </div>

      <div className="research-strip">
        <span><CalendarDays /> Researched for October 2026</span>
        <p>Opening hours, port assignments, transit, and weather can change. Reconfirm the week before sailing and again on the day.</p>
        <div>
          {selectedDay.sources.map((source) => (
            <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label} <ArrowUpRight /></a>
          ))}
        </div>
      </div>
    </section>
  );
}

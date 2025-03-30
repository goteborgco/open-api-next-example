import React from 'react';
import { getGuides, getEvents } from '@/lib/api';
import GuideCard from '@/components/GuideCard';
import EventCard from '@/components/EventCard';
import type { WpEntity } from '@goteborgco/open-api-js-client';

export default async function Home() {
  const [guides, events] = await Promise.all([
    getGuides(),
    getEvents()
  ]);

  return (
    <main className="container mx-auto px-4 py-8 space-y-16">
      <section className="py-4">
        <h2 className="text-3xl font-bold mb-8">Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide: WpEntity) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>

      <section className="py-4">
        <h2 className="text-3xl font-bold mb-8">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: WpEntity) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
} 
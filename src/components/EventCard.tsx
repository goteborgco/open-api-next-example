import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import type { WpEntity } from '@goteborgco/open-api-js-client';

interface EventCardProps {
  event: WpEntity;
}

export default function EventCard({ event }: EventCardProps) {
  const media = event.getFeaturedMedia();
  const date = event.date ? new Date(event.date) : null;
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <Card className="overflow-hidden group">
      <CardHeader className="pt-3 pl-3 pr-3">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
          <Image
            src={media?.getUrl('medium') || ''}
            alt={media?.alt_text || event.title || 'Event image'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {media?.credit && (
            <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
              {media.credit}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-3">
        {date && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Calendar className="h-4 w-4" />
            <time dateTime={event.date}>{formatDate(date)}</time>
          </div>
        )}
        <h2 className="text-xl font-semibold line-clamp-2 text-card-foreground mb-2">
          {event.title}
        </h2>
        <div 
          className="text-sm text-muted-foreground line-clamp-3" 
          dangerouslySetInnerHTML={{ __html: event.excerpt || '' }} 
        />
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          asChild 
          className="w-full"
          variant="default"
          size="lg"
        >
          <Link 
            href={event?.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Läs mer <ExternalLink className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 
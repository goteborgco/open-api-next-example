import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { WpEntity } from '@goteborgco/open-api-js-client';

interface GuideCardProps {
  guide: WpEntity;
}

export default function GuideCard({ guide }: GuideCardProps) {
  const media = guide.getFeaturedMedia();

  return (
    <Card className="overflow-hidden group">
      <CardHeader className="pt-3 pl-3 pr-3">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
          <Image
            src={media?.getUrl('medium') || ''}
            alt={media?.alt_text || guide.title || 'Guide image'}
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
        <h2 className="text-xl font-semibold line-clamp-2 text-card-foreground mb-2">
          {guide.title}
        </h2>
        <div 
          className="text-sm text-muted-foreground line-clamp-3" 
          dangerouslySetInnerHTML={{ __html: guide.excerpt || '' }} 
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
            href={guide?.link || '#'}
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
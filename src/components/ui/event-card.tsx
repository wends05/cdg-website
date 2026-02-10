import Image from "next/image";
import type { EventRecord } from "@/lib/events";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const typePills: Record<string, string> = {
  Workshop: "bg-blue-100 text-blue-900",
  Competition: "bg-red-100 text-red-900",
  "Tech Talk": "bg-green-100 text-green-900",
  Studio: "bg-yellow-100 text-yellow-900",
  Community: "bg-purple-100 text-purple-900",
};

const badgeVariants: Record<string, string> = {
  Workshop: "text-blue-500/90 bg-blue-50/90",
  Competition: "text-red-500/90 bg-red-50/90",
  "Tech Talk": "text-emerald-500/90 bg-emerald-50/90",
  Studio: "text-orange-500/90 bg-orange-50/90",
  Community: "text-sky-500/90 bg-sky-50/90",
};

export interface EventCardProps {
  event: EventRecord;
}

export function EventCard({ event }: EventCardProps) {
  const typePill = typePills[event.type] ?? "bg-zinc-100 text-zinc-900";
  const badgeClass =
    badgeVariants[event.type] ?? "text-muted-foreground bg-zinc-900/70";

  return (
    <Card className="group flex h-full flex-col border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full overflow-hidden bg-zinc-950">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 48vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
            <Badge
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.4em]",
                typePill,
              )}
            >
              {event.type}
            </Badge>
            {event.certificate && (
              <Badge
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.4em]",
                  badgeClass,
                )}
              >
                Certificate
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3 px-6 pb-0 pt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.7}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{event.date}</span>
        </div>

        <CardTitle className="text-xl font-semibold tracking-tight text-foreground">
          {event.title}
        </CardTitle>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {event.description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-3 border-t-0 bg-card px-6 py-6 pt-0">
        {event.certificate && !event.certificateUrl && (
          <Badge className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Certificate available soon
          </Badge>
        )}

        {event.certificate && event.certificateUrl && (
          <Button className="flex-1">Get Certificate</Button>
        )}

        <Button className="flex-1">Learn More</Button>
      </CardFooter>
    </Card>
  );
}

import { queryOptions } from "@tanstack/react-query";
import {
  getEvent,
  getEventBySlug,
  getEvents,
  getParticipantsByEventId,
  getParticipantsByEventSlug,
} from "@/queries/events";
import {
  getParticipant,
  getParticipantByEmail,
  getParticipants,
  getSpecificParticipantByEmailAndEventId,
  getSpecificParticipantByEmailAndEventSlug,
} from "@/queries/participants";

/**
 * Query Keys for Events.
 */
export const eventKeys = {
  all: ["events"] as const,
  lists: () => [...eventKeys.all, "list"] as const,
  list: () => [...eventKeys.lists()] as const,
  details: () => [...eventKeys.all, "detail"] as const,
  detail: (id: string) => [...eventKeys.details(), id] as const,
  bySlug: (slug: string) => [...eventKeys.all, "slug", slug] as const,
  participantsByEventId: (eventId: string) =>
    [...eventKeys.all, "participants", "eventId", eventId] as const,
  participantsByEventSlug: (eventSlug: string) =>
    [...eventKeys.all, "participants", "eventSlug", eventSlug] as const,
};

/**
 * Query Keys for Participants.
 */
export const participantKeys = {
  all: ["participants"] as const,
  lists: () => [...participantKeys.all, "list"] as const,
  listByEventId: (eventId: string) =>
    [...participantKeys.lists(), "eventId", eventId] as const,
  details: () => [...participantKeys.all, "detail"] as const,
  detail: (eventId: string, id: string) =>
    [...participantKeys.details(), "eventId", eventId, id] as const,
  byEmail: (eventId: string, email: string) =>
    [...participantKeys.all, "byEmail", "eventId", eventId, email] as const,
  specificByEventId: (eventId: string, email: string) =>
    [...participantKeys.all, "specific", "eventId", eventId, email] as const,
  specificByEventSlug: (eventSlug: string, email: string) =>
    [
      ...participantKeys.all,
      "specific",
      "eventSlug",
      eventSlug,
      email,
    ] as const,
};

export const getEventsQueryOptions = () =>
  queryOptions({
    queryKey: eventKeys.list(),
    queryFn: () => getEvents(),
  });

export const getEventQueryOptions = (id: string) =>
  queryOptions({
    queryKey: eventKeys.detail(id),
    queryFn: () => getEvent(id),
  });

export const getEventBySlugQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: eventKeys.bySlug(slug),
    queryFn: () => getEventBySlug(slug),
  });

export const getParticipantsByEventIdQueryOptions = (eventId: string) =>
  queryOptions({
    queryKey: eventKeys.participantsByEventId(eventId),
    queryFn: () => getParticipantsByEventId(eventId),
  });

export const getParticipantsByEventSlugQueryOptions = (eventSlug: string) =>
  queryOptions({
    queryKey: eventKeys.participantsByEventSlug(eventSlug),
    queryFn: () => getParticipantsByEventSlug(eventSlug),
  });

export const getParticipantsQueryOptions = (eventId: string) =>
  queryOptions({
    queryKey: participantKeys.listByEventId(eventId),
    queryFn: () => getParticipants(eventId),
  });

export const getParticipantQueryOptions = ({
  id,
  eventId,
}: {
  id: string;
  eventId: string;
}) =>
  queryOptions({
    queryKey: participantKeys.detail(eventId, id),
    queryFn: () => getParticipant(id, eventId),
  });

export const getParticipantByEmailQueryOptions = ({
  email,
  eventId,
}: {
  email: string;
  eventId: string;
}) =>
  queryOptions({
    queryKey: participantKeys.byEmail(eventId, email),
    queryFn: () => getParticipantByEmail(email, eventId),
  });

export const getSpecificParticipantByEmailAndEventIdQueryOptions = ({
  email,
  eventId,
}: {
  email: string;
  eventId: string;
}) =>
  queryOptions({
    queryKey: participantKeys.specificByEventId(eventId, email),
    queryFn: () => getSpecificParticipantByEmailAndEventId(email, eventId),
  });

export const getSpecificParticipantByEmailAndEventSlugQueryOptions = ({
  email,
  eventSlug,
}: {
  email: string;
  eventSlug: string;
}) =>
  queryOptions({
    queryKey: participantKeys.specificByEventSlug(eventSlug, email),
    queryFn: () => getSpecificParticipantByEmailAndEventSlug(email, eventSlug),
  });

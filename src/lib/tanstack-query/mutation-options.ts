import { mutationOptions } from "@tanstack/react-query";
import { createEvent, deleteEvent, updateEvent } from "@/actions/events";
import {
  addParticipantToEvent,
  deleteParticipant,
  updateParticipant,
} from "@/actions/participants";

export const createEventMutationOptions = () =>
  mutationOptions({
    mutationFn: (data: Parameters<typeof createEvent>[0]) => createEvent(data),
  });

export const updateEventMutationOptions = () =>
  mutationOptions({
    mutationFn: ({
      id,
      data,
    }: {
      id: Parameters<typeof updateEvent>[0];
      data: Parameters<typeof updateEvent>[1];
    }) => updateEvent(id, data),
  });

export const deleteEventMutationOptions = () =>
  mutationOptions({
    mutationFn: (id: Parameters<typeof deleteEvent>[0]) => deleteEvent(id),
  });

export const updateParticipantMutationOptions = () =>
  mutationOptions({
    mutationFn: ({
      id,
      data,
      eventId,
    }: {
      id: Parameters<typeof updateParticipant>[0];
      data: Parameters<typeof updateParticipant>[1];
      eventId: Parameters<typeof updateParticipant>[2];
    }) => updateParticipant(id, data, eventId),
  });

export const deleteParticipantMutationOptions = () =>
  mutationOptions({
    mutationFn: ({
      id,
      eventId,
    }: {
      id: Parameters<typeof deleteParticipant>[0];
      eventId: Parameters<typeof deleteParticipant>[1];
    }) => deleteParticipant(id, eventId),
  });

export const addParticipantToEventMutationOptions = () =>
  mutationOptions({
    mutationFn: ({
      email,
      name,
      eventId,
    }: {
      email: Parameters<typeof addParticipantToEvent>[0];
      name: Parameters<typeof addParticipantToEvent>[1];
      eventId: Parameters<typeof addParticipantToEvent>[2];
    }) => addParticipantToEvent(email, name, eventId),
  });

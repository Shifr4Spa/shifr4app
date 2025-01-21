import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Importa el plugin necesario
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function CalendarioCitas() {
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const citas = [
    {
      id: "1",
      title: "Cita con Juan Pérez",
      start: "2024-12-22T10:30:00",
      end: "2024-12-22T11:30:00",
      extendedProps: {
        servicio: "Corte de cabello",
      },
    },
    {
      id: "2",
      title: "Cita con María López",
      start: "2024-12-23T14:00:00",
      end: "2024-12-23T15:00:00",
      extendedProps: {
        servicio: "Manicure",
      },
    },
  ];

  const handleEventClick = (info: EventClickArg) => {
    setSelectedEvent(info);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div
      style={{
        backgroundColor: "#F9FAFB",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]} // Agrega el plugin de timeGrid
        initialView="timeGridWeek" // Cambia la vista inicial a la de cuadrícula de tiempo semanal
        events={citas}
        eventClick={handleEventClick}
        headerToolbar={{
          start: "prev,next today",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // Agrega opciones de vistas
        }}
        slotMinTime="00:00:00" // Hora mínima (12 AM)
        slotMaxTime="24:00:00" // Hora máxima (12 PM del día siguiente)
        //allDaySlot={false} // Opcional: oculta la sección de "todo el día"
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short", // Formato 12h con AM/PM
        }}
        eventBackgroundColor="#EB5017"
        eventTextColor="#FFFFFF"
      />

      {/* Modal de ShadCN */}
      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent>
          {selectedEvent && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-[#EB5017]">
                  {selectedEvent.event.title}
                </DialogTitle>
                <DialogDescription>
                  Detalles de la cita seleccionada
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Horario:</strong>{" "}
                  {new Date(selectedEvent.event.startStr).toLocaleTimeString(
                    [],
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}{" "}
                  -{" "}
                  {new Date(selectedEvent.event.endStr).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p>
                  <strong>Servicio:</strong>{" "}
                  {selectedEvent.event.extendedProps.servicio}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CalendarioCitas;

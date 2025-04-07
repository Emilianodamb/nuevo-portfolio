import React from "react";
import "./Projects.css";
import ImageCarousel from "../imageCarousel/ImageCarousel";

const Projects = () => {
  return (
    <section id="projects">
      <h3 className="projectTitle">Eventyfier</h3>
      <b>Gestor de eventos</b>
      <ImageCarousel
        images={[
          "/responsive-images/ejemplo-front.png",
          "/responsive-images/ejemplomobile-left.png",
          "/responsive-images/eventyfiertablet-landscape.png",
          "/responsive-images/ejemplomobile-portrait.png",
        ]}
      />
      <p>
        Eventyfier es una aplicación web que desarrollé con foco en experiencia
        de usuario, escalabilidad y automatización. Permite crear, editar y
        eliminar eventos desde una interfaz web moderna, y también a través de
        un asistente virtual en Telegram, capaz de interpretar texto y notas de
        voz gracias a la integración con OpenAI. Este proyecto surgió como una
        solución personal, pero terminó convirtiéndose en una plataforma
        completa con panel de estadísticas, gestión de metadatos y un enfoque
        fuerte en UX/UI.
      </p>
      <details>
        <h4>Stack técnico</h4>
        <ul>
          <li>Frontend: React + Vite + TypeScript + Material UI </li>
          <li>
            Estado y lógica: Context API, custom hooks y servicios desacoplados
          </li>
          <li>Forms y validaciones: react-hook-form + zod</li>
          <li>Routing: react-router</li>
          <li>Fechas: date-fns</li>
          <li>Calendario: FullCalendar</li>
          <li>Estadísticas: Recharts</li>
          <li>Notificaciones: Sonner</li>
          <li>Backend: Supabase (Auth, DB y APIs)</li>
          <li>
            Automatización & IA: n8n + HTTP requests + OpenAI (completions para
            interpretación de comandos)
          </li>
          <li>
            Bot de Telegram: Escucha mensajes de voz/texto, los interpreta y
            ejecuta acciones sobre la base de datos
          </li>
          <li>
            DevOps: Desplegado en dominio propio con configuración de DNS, SSL y
            entorno de producción
          </li>
        </ul>

        <h4>Enfoque y decisiones de arquitectura</h4>
        <ul>
          <li>
            Diseño basado en componentes reutilizables y lógica desacoplada para
            facilitar el mantenimiento
          </li>
          <li>
            Arquitectura orientada a servicios con hooks personalizados y
            separación clara entre vistas, lógica y UI
          </li>
          <li>
            Priorización de la experiencia de usuario, especialmente en flujos
            móviles
          </li>
          <li>
            Uso de herramientas modernas del ecosistema React para garantizar
            una base sólida y escalable
          </li>
        </ul>
        <p>
          Este proyecto resume muchos de los desafíos reales que enfrentamos en
          desarrollo frontend: pensar en el usuario final, manejar datos en
          tiempo real, automatizar tareas, y mantener un código limpio y fácil
          de escalar. Además, representa mi interés en explorar interacciones
          más naturales entre humanos y sistemas, integrando IA y asistentes
          conversacionales.
        </p>
        <a href="https://www.eventyfier.com/">Despliegue: https://www.eventyfier.com/</a>
      </details>
    </section>
  );
};

export default Projects;

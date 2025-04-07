import React from "react";
import "./Projects.css";
import ImageCarousel from "../imageCarousel/ImageCarousel";

const Projects = () => {
  return (
    <section id="projects">
      <div className="project eventyfier">
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
          Eventyfier es una aplicación web que desarrollé con foco en
          experiencia de usuario, escalabilidad y automatización. Permite
          gestionar eventos desde una interfaz moderna o a través de un
          asistente en Telegram, que interpreta texto y notas de voz gracias a
          su integración con OpenAI. Nació como una solución personal y
          evolucionó en una plataforma completa con estadísticas, gestión de
          metadatos y un fuerte enfoque en UX/UI.
        </p>
        <h4>Stack técnico</h4>
        <ul>
          <li>
            <strong>Frontend:</strong> React + Vite + TypeScript + Material UI
          </li>
          <li>
            <strong>Estado y lógica:</strong> Context API, custom hooks,
            servicios desacoplados
          </li>
          <li>
            <strong>Forms:</strong> react-hook-form + zod
          </li>
          <li>
            <strong>Routing:</strong> react-router
          </li>
          <li>
            <strong>Fechas:</strong> date-fns
          </li>
          <li>
            <strong>Calendario:</strong> FullCalendar
          </li>
          <li>
            <strong>Estadísticas:</strong> Recharts
          </li>
          <li>
            <strong>Notificaciones:</strong> Sonner
          </li>
          <li>
            <strong>Backend:</strong> Supabase (Auth, DB y APIs)
          </li>
          <li>
            <strong>Automatización e IA:</strong> n8n + HTTP requests + OpenAI
            (completions para comandos)
          </li>
          <li>
            <strong>Bot de Telegram:</strong> Interpreta mensajes y ejecuta
            acciones sobre la base de datos
          </li>
          <li>
            <strong>DevOps:</strong> Despliegue en dominio propio con DNS, SSL y
            entorno productivo
          </li>
        </ul>
        <h4>Enfoque y arquitectura</h4>
        <ul>
          <li>Componentes reutilizables y lógica desacoplada</li>
          <li>
            Arquitectura orientada a servicios con separación clara de
            responsabilidades
          </li>
          <li>UX priorizada en flujos móviles</li>
          <li>Uso de herramientas modernas del ecosistema React</li>
        </ul>
        <p className="textBlack">
          Este proyecto resume desafíos reales del frontend: pensar en el
          usuario, manejar datos en tiempo real, automatizar flujos y mantener
          un código limpio y escalable. También refleja mi interés por integrar
          IA y asistentes conversacionales para lograr interacciones más
          naturales.
        </p>
        <a href="https://www.eventyfier.com/">
          Despliegue: https://www.eventyfier.com/
        </a>
      </div>

      <div className="project totalMecanica">
        <h3 className="projectTitle">Total Mecánica</h3>
        <b>Base de datos interactiva</b>
        <ImageCarousel
          images={[
            "/responsive-images/ejemplo-front.png",
            "/responsive-images/ejemplomobile-left.png",
            "/responsive-images/eventyfiertablet-landscape.png",
            "/responsive-images/ejemplomobile-portrait.png",
          ]}
        />
        <p>
        Total Mecánica es una aplicación web diseñada para proporcionarle al usuario un registro de los trabajos realizados a cada vehículo de forma facil e intuitiva y representa una solución escalable.
        </p>
        <h4>Stack técnico</h4>
        <ul>
          <li>
            <strong>Frontend:</strong> React + Vite + JavaScript + TailwindCss
          </li>
          <li>
            <strong>Estado y lógica:</strong> Context API, custom hooks,
            servicios desacoplados
          </li>
          <li>
            <strong>Forms:</strong> react-hook-form + zod
          </li>
          <li>
            <strong>Routing:</strong> react-router
          </li>
          <li>
            <strong>Fechas:</strong> date-fns
          </li>
          <li>
            <strong>Calendario:</strong> FullCalendar
          </li>
          <li>
            <strong>Estadísticas:</strong> Recharts
          </li>
          <li>
            <strong>Notificaciones:</strong> Sonner
          </li>
          <li>
            <strong>Backend:</strong> Supabase (Auth, DB y APIs)
          </li>
          <li>
            <strong>Automatización e IA:</strong> n8n + HTTP requests + OpenAI
            (completions para comandos)
          </li>
          <li>
            <strong>Bot de Telegram:</strong> Interpreta mensajes y ejecuta
            acciones sobre la base de datos
          </li>
          <li>
            <strong>DevOps:</strong> Despliegue en dominio propio con DNS, SSL y
            entorno productivo
          </li>
        </ul>
        <h4>Enfoque y arquitectura</h4>
        <ul>
          <li>Componentes reutilizables y lógica desacoplada</li>
          <li>
            Arquitectura orientada a servicios con separación clara de
            responsabilidades
          </li>
          <li>UX priorizada en flujos móviles</li>
          <li>Uso de herramientas modernas del ecosistema React</li>
        </ul>
        <p className="textBlack">
          Este proyecto resume desafíos reales del frontend: pensar en el
          usuario, manejar datos en tiempo real, automatizar flujos y mantener
          un código limpio y escalable. También refleja mi interés por integrar
          IA y asistentes conversacionales para lograr interacciones más
          naturales.
        </p>
        <a href="https://www.eventyfier.com/">
          Despliegue: https://www.eventyfier.com/
        </a>
      </div>
    </section>
  );
};

export default Projects;

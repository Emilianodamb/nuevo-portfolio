import React from "react";
import "./Projects.css";
import LazyLoad from "../lazyLoad/LazyLoad";

const Projects = () => {
  return (
    <section id="projects">
      <h3 className="projectTitle">Eventyfier</h3>
      <b>Gestor de eventos</b>
      <LazyLoad />
      <p>
        Eventyfier es una aplicación web desarrollada con React + TypeScript que
        permite gestionar eventos personales de manera intuitiva, eficiente y
        multiplataforma. La principal innovación del proyecto es su integración
        con un asistente virtual con IA en Telegram, que permite crear,
        modificar y eliminar eventos a través de comandos de voz o texto. Este
        asistente fue configurado íntegramente por mí utilizando n8n, OpenAI,
        HTTP requests y JavaScript, lo que agrega una capa de automatización e
        inteligencia contextual al flujo de usuario.
      </p>
    </section>
  );
};

export default Projects;

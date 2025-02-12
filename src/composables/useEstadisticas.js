export default function useEstadisticas(data) {
  const getEstadisticas = () => {
    // función que devuelve un objeto con las estadísticas de las tareas.

    const total = data.length;
    const completadas = data.filter((tarea) => tarea.completada).length;

    const pendientes = total - completadas;

    const porcentaje = (completadas / total) * 100;

    const getDificultad = () => {
      let dificil = data.filter(
        (tarea) => tarea.dificultad === "dificil"
      ).length;
      let media = data.filter(
        (tarea) => tarea.dificultad === "intermedio"
      ).length;
      let facil = data.filter((tarea) => tarea.dificultad === "facil").length;

      return {
        dificil,
        media,
        facil,
      };
    };

    const promedio_resolución =
      data.reduce((acc, tarea) => {
        return acc + tarea.tiempoEstimado;
      }, 0) / total;

    const dificultad = getDificultad();
    return {
      total,
      completadas,
      pendientes,
      porcentaje,
      promedio_resolución,
      dificultad,
    };
  };

  return { getEstadisticas };
}

import { Serie } from './Serie.js';
import { series } from './data.js';

const seriesTable: HTMLElement = document.getElementById("series")!;
const promedioElemento: HTMLElement = document.getElementById("promedio")!;

mostrarSeries(series);
mostrarPromedio(series);

function mostrarSeries(series: Serie[]): void {
    const seriesTbody: HTMLElement = document.createElement("tbody");
    series.forEach(serie => {
        const trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.titulo}</td>
            <td>${serie.plataforma}</td>
            <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    });
    seriesTable.appendChild(seriesTbody);
}

function calcularPromedio(series: Serie[]): number {
    const totalTemporadas = series.reduce((sum, serie) => sum + serie.temporadas, 0);
    return totalTemporadas / series.length;
}

function mostrarPromedio(series: Serie[]): void {
    const promedio: number = calcularPromedio(series);
    const promedioRow: HTMLElement = document.createElement("tr");
    promedioRow.innerHTML = `<td colspan="4"><strong>Promedio de temporadas:</strong> ${promedio.toFixed(2)}</td>`;
    promedioElemento.appendChild(promedioRow);
}

import { series } from './data.js';
var seriesTable = document.getElementById("series");
var promedioElemento = document.getElementById("promedio");
mostrarSeries(series);
mostrarPromedio(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td>").concat(serie.titulo, "</td>\n            <td>").concat(serie.plataforma, "</td>\n            <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
    seriesTable.appendChild(seriesTbody);
}
function calcularPromedio(series) {
    var totalTemporadas = series.reduce(function (sum, serie) { return sum + serie.temporadas; }, 0);
    return totalTemporadas / series.length;
}
function mostrarPromedio(series) {
    var promedio = calcularPromedio(series);
    var promedioRow = document.createElement("tr");
    promedioRow.innerHTML = "<td colspan=\"4\"><strong>Promedio de temporadas:</strong> ".concat(promedio.toFixed(2), "</td>");
    promedioElemento.appendChild(promedioRow);
}

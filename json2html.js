
export default function json2html(data) {
    const columns = ["Name", "Age", "Gender"];
    let table = `<table data-user="yashwanth.mamilla07@gmail.com">`;
    table += "<thead><tr>" + columns.map(col => `<th>${col}</th>`).join('') + "</tr></thead><tbody>";
    data.forEach(row => {
        table += "<tr>" + columns.map(col => `<td>${row[col] || ""}</td>`).join('') + "</tr>";
    });
    table += "</tbody></table>";
    return table;
}

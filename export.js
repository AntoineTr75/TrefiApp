function exportarExcel() {
  const registros = JSON.parse(localStorage.getItem("trefiapp_mp") || "[]");

  if (registros.length === 0) {
    alert("No hay registros guardados para exportar.");
    return;
  }

const headers = [
  "fecha","hora","responsable","proveedor","nombre_producto",
  "tipo_producto","diametro","espesor","largo","fac_guia","cantidad"
  ];

  const filas = registros.map(r => headers.map(h => r[h] ?? ""));

  const csv = [headers, ...filas]
    .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `TrefiApp_MateriaPrima_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

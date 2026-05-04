function exportarExcel() {
  const registros = JSON.parse(localStorage.getItem("trefiapp_mp") || "[]");

  if (registros.length === 0) {
    alert("No hay registros guardados para exportar.");
    return;
  }

  const headers = [
    "Fecha", "Responsable", "Proveedor", "Producto", "N° Fac./Guía", "N° OC",
    "Cantidad", "Tipo", "Diámetro", "Espesor", "Largo", "Largo Medido",
    "Diam 1","Diam 2","Diam 3","Diam 4","Diam 5",
    "Diam 6","Diam 7","Diam 8","Diam 9","Diam 10",
    "Prom Diám","Dev Diám","Mín Diám","Máx Diám",
    "Esp 1","Esp 2","Esp 3","Esp 4","Esp 5",
    "Esp 6","Esp 7","Esp 8","Esp 9","Esp 10",
    "Prom Esp","Dev Esp","Mín Esp","Máx Esp",
    "Observaciones"
  ];

  const filas = registros.map(r => [
    r.fecha, r.responsable, r.proveedor, r.producto, r.facGuia, r.nOC,
    r.cantidad, r.tipo, r.diametro, r.espesor, r.largo, r.largoMedido,
    ...r.medDiams,
    r.stats.diam.prom, r.stats.diam.dev, r.stats.diam.min, r.stats.diam.max,
    ...r.medEsps,
    r.stats.esp.prom, r.stats.esp.dev, r.stats.esp.min, r.stats.esp.max,
    r.observaciones
  ]);

  const csv = [headers, ...filas]
    .map(row => row.map(cell => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `TrefiApp_MateriaPrima_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
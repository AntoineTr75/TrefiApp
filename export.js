function exportarExcel() {
  const registros = JSON.parse(localStorage.getItem("trefiapp_mp") || "[]");

  if (registros.length === 0) {
    alert("No hay registros guardados para exportar.");
    return;
  }

  const headers = [
    "fecha","hora","responsable","proveedor","nombre_producto",
    "tipo","diametro","espesor","largo","cantidad","fac_guia","n_oc",
    "tol_diam_max","tol_diam_min","tol_esp_max","tol_esp_min",
    "diam_1","diam_2","diam_3","diam_4","diam_5",
    "diam_6","diam_7","diam_8","diam_9","diam_10",
    "diam_promedio","diam_desv_est","diam_min","diam_max",
    "esp_1","esp_2","esp_3","esp_4","esp_5",
    "esp_6","esp_7","esp_8","esp_9","esp_10",
    "esp_promedio","esp_desv_est","esp_min","esp_max",
    "largo_medido","observaciones"
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
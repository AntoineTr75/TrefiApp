const TOLERANCIAS = {
  tubo: {
    diametros: {
      "5/8":  { nominal: 15.88, max: 16.08, min: 15.68 },
      "3/4":  { nominal: 19.05, max: 19.25, min: 18.85 },
      "7/8":  { nominal: 22.23, max: 22.43, min: 22.03 },
      "1":    { nominal: 25.4,  max: 25.6,  min: 25.2  },
      "1 1/4":{ nominal: 31.75, max: 31.95, min: 31.55 },
      "1 1/2":{ nominal: 38.1,  max: 38.3,  min: 37.9  },
      "23":   { nominal: 23,    max: 23.2,  min: 22.8  },
      "26.3": { nominal: 26.3,  max: 26.5,  min: 26.1  }
    },
    espesores: {
      "1.0": { nominal: 1.0, max: 1.1, min: 0.9 },
      "1.4": { nominal: 1.4, max: 1.5, min: 1.2 },
      "1.5": { nominal: 1.5, max: 1.6, min: 1.3 },
      "2.5": { nominal: 2.5, max: 2.7, min: 2.2 }
    }
  },
  cañeria: {
    diametros: {
      "1/2": { nominal: 21.3, max: 21.4, min: 20.5 },
      "3/4": { nominal: 26.7, max: 26.9, min: 26.0 },
      "1":   { nominal: 33.4, max: 33.8, min: 32.5 }
    },
    espesores: {
      "ISO 65": { nominal: 2.0, max: 2.0, min: 1.8 },
      "SCH 10": { nominal: 2.1, max: 2.1, min: 1.8 },
      "SCH 40": { nominal: 3.4, max: 3.4, min: 3.0 }
    }
  }
};

const PROVEEDORES = ["Intupac", "Formac", "Indama", "Aceros Chile", "Otro"];
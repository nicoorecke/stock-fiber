export interface Producto {
  id: number
  tipo: string
  fabricante: string
  modelo: string
  imagen: string
  descripcion?: string
  precio?: number
}

export const productos: Producto[] = [
  // Fusionadoras Fibra Óptica
  {
    id: 1,
    tipo: "Fusionadora",
    fabricante: "Fujikura",
    modelo: "22s",
    imagen: "22-s.jpg",
    descripcion: "Fusionadora de fibra óptica profesional",
    precio: 999
  },
  {
    id: 2,
    tipo: "Fusionadora",
    fabricante: "Fujikura",
    modelo: "31s",
    imagen: "31s.jpg",
    descripcion: "Fusionadora de fibra óptica de alta precisión",
    precio: 999
  },
  {
    id: 3,
    tipo: "Fusionadora",
    fabricante: "Fujikura",
    modelo: "FMS60s",
    imagen: "FMS60s.jpg",
    descripcion: "Fusionadora de fibra óptica compacta",
    precio: 999
  },
  {
    id: 4,
    tipo: "Fusionadora",
    fabricante: "Fujikura",
    modelo: "FMS70s",
    imagen: "FMS70s.jpg",
    descripcion: "Fusionadora de fibra óptica avanzada",
    precio: 999
  },
  {
    id: 5,
    tipo: "Fusionadora",
    fabricante: "Sumitomo",
    modelo: "T-400",
    imagen: "T-400.jpg",
    descripcion: "Fusionadora de fibra óptica industrial",
    precio: 999
  },
  {
    id: 6,
    tipo: "Fusionadora",
    fabricante: "Inno",
    modelo: "M7",
    imagen: "M7.jpg",
    descripcion: "Fusionadora de fibra óptica portátil",
    precio: 999
  },
  {
    id: 7,
    tipo: "Fusionadora",
    fabricante: "Inno",
    modelo: "View 5",
    imagen: "View 5.jpg",
    descripcion: "Fusionadora de fibra óptica con pantalla táctil",
    precio: 999
  },
  {
    id: 8,
    tipo: "Fusionadora",
    fabricante: "Inno",
    modelo: "View 12R",
    imagen: "View 12R.jpg",
    descripcion: "Fusionadora de fibra óptica de ribbon",
    precio: 999
  },
  {
    id: 9,
    tipo: "Fusionadora",
    fabricante: "FITEL",
    modelo: "S178A Ver.2",
    imagen: "S178A Ver.2.jpg",
    descripcion: "Fusionadora de fibra óptica versión 2",
    precio: 999
  },

  // OTDR
  {
    id: 10,
    tipo: "OTDR",
    fabricante: "INNO",
    modelo: "VIEW630-3",
    imagen: "VIEW630-3.jpg",
    descripcion: "1310/1550/1625nm live port - 39/38/39 dB",
    precio: 999
  },
  {
    id: 11,
    tipo: "OTDR",
    fabricante: "EXFO",
    modelo: "AXS-100",
    imagen: "AXS-100.jpg",
    descripcion: "OTDR de acceso para redes 1310-1550nm",
    precio: 999
  },
  {
    id: 12,
    tipo: "OTDR",
    fabricante: "ShinHo (Grandway)",
    modelo: "XHO5000-D35",
    imagen: "xho5000.jpg",
    descripcion: "OTDR Bi-Banda 1310/1550nm 35/33dB",
    precio: 999
  },
  {
    id: 13,
    tipo: "OTDR",
    fabricante: "OTDR Bi-Banda 1310/1550nm 35/33dB",
    modelo: "TMO350",
    imagen: "TMO350.jpg",
    descripcion: "OTDR Bi-Banda 1310/1550nm 35/33dB",
    precio: 999
  },
  {
    id: 14,
    tipo: "OTDR",
    fabricante: "Bi-Banda 1310/1550nm 35/33dB",
    modelo: "5600",
    imagen: "5600.jpg",
    descripcion: "OTDR Bi-Banda 1310/1550nm 35/33dB",
    precio: 999
  },

  // Atenuadores y Medidores
  {
    id: 15,
    tipo: "Atenuador",
    fabricante: "EXFO",
    modelo: "FVA-600",
    imagen: "FVA-600.jpg",
    descripcion: "Atenuador de fibra óptica variable",
    precio: 999
  },
  {
    id: 16,
    tipo: "Medidor Potencia - GPON",
    fabricante: "EXFO",
    modelo: "PPM-350B-EG PON SC APC",
    imagen: "PPM-350B-EG.jpg",
    descripcion: "Medidor de potencia PON con conector SC APC",
    precio: 999
  },
  {
    id: 17,
    tipo: "Medidor Potencia - GPON",
    fabricante: "JDSU",
    modelo: "OLP-88",
    imagen: "OLP-88.jpg",
    descripcion: "Medidor de potencia GPON",
    precio: 999
  },
  {
    id: 18,
    tipo: "Medidor Potencia",
    fabricante: "EXFO",
    modelo: "EPM53 SM, MM Power Meter With SC and FC Adapters",
    imagen: "EPM53 SM.jpg",
    descripcion: "Medidor de potencia SM/MM con adaptadores SC y FC",
    precio: 999
  },
  {
    id: 19,
    tipo: "Medidor Potencia",
    fabricante: "JDSU",
    modelo: "OLP-82P",
    imagen: "OLP-82P.jpg",
    descripcion: "Medidor de potencia óptica portátil",
    precio: 999
  },

  // Pinzas de Tráfico
  {
    id: 20,
    tipo: "Pinza de Tráfico",
    fabricante: "EXFO",
    modelo: "FIBER IDENTIFIER LFD-200",
    imagen: "lfd-200.jpg",
    descripcion: "Identificador de fibra óptica",
    precio: 999
  },
  {
    id: 21,
    tipo: "Pinza de Tráfico",
    fabricante: "Orientek",
    modelo: "",
    imagen: "orientek.jpg",
    descripcion: "Pinza identificadora de tráfico de fibra",
    precio: 999
  },

  // Analizadores de Cables
  {
    id: 22,
    tipo: "Analizador de Cables",
    fabricante: "DTX1800",
    modelo: "DTX1800",
    imagen: "DTX1800.jpg",
    descripcion: "Analizador certificador de cables",
    precio: 999
  },
  {
    id: 23,
    tipo: "Analizador de Cables",
    fabricante: "JDSU",
    modelo: "NT900",
    imagen: "NT900.jpg",
    descripcion: "Validador de red LAN Ethernet",
    precio: 999
  },
  {
    id: 24,
    tipo: "VIAVI",
    fabricante: "VIAVI",
    modelo: "MTS-5800",
    imagen: "MTS-5800.jpg",
    descripcion: "Analizador de red multifunción",
    precio: 999
  },
  {
    id: 25,
    tipo: "Medidor de Campo",
    fabricante: "JDSU",
    modelo: "HST-3000",
    imagen: "HST-3000.jpg",
    descripcion: "Probador portátil de cables de cobre",
    precio: 999
  }
]
/**
 * Heritage data — partners, clients, and notable projects across the group.
 * Sourced primarily from PT. Gama Intisamudera's three-decade track record.
 */

export interface Partner {
  name: string
  category: 'client' | 'partner'
  descriptionEn?: string
  descriptionId?: string
}

export const partners: Partner[] = [
  { name: 'COSCO', category: 'partner', descriptionEn: 'Global shipping and logistics company', descriptionId: 'Perusahaan pelayaran dan logistik global' },
  { name: 'Pelindo', category: 'client', descriptionEn: 'Indonesian port authority', descriptionId: 'Pengelola pelabuhan Indonesia' },
  { name: 'Pertamina', category: 'client', descriptionEn: 'Indonesian national energy company', descriptionId: 'Perusahaan energi nasional Indonesia' },
  { name: 'Schlumberger', category: 'client', descriptionEn: 'Oilfield services company', descriptionId: 'Perusahaan jasa ladang minyak' },
  { name: 'Bolloré', category: 'partner', descriptionEn: 'International logistics and transportation group', descriptionId: 'Grup logistik dan transportasi internasional' },
  { name: 'PT PP', category: 'client', descriptionEn: 'State-owned construction company', descriptionId: 'Perusahaan konstruksi BUMN' },
  { name: 'Rekayasa Industri', category: 'client', descriptionEn: 'National EPC company', descriptionId: 'Perusahaan EPC nasional' },
  { name: 'INKA', category: 'client', descriptionEn: 'Indonesian railway industry', descriptionId: 'Industri kereta api Indonesia' },
  { name: 'Krakatau Steel', category: 'client', descriptionEn: 'Largest steel producer in Indonesia', descriptionId: 'Produsen baja terbesar di Indonesia' },
  { name: 'Wartsila', category: 'client', descriptionEn: 'Marine and energy technology company', descriptionId: 'Perusahaan teknologi kelautan dan energi' },
]

export interface NotableProject {
  slug: string
  nameEn: string
  nameId: string
  descriptionEn: string
  descriptionId: string
  year: number
  subsidiary: string
  industry: string
}

export const notableProjects: NotableProject[] = [
  {
    slug: 'petrokimia-gresik-amur-ii',
    nameEn: 'Petrokimia Gresik AMUR II (2016)',
    nameId: 'Petrokimia Gresik AMUR II (2016)',
    descriptionEn: 'Heavy lift for ammonium urea plant',
    descriptionId: 'Heavy lift untuk pabrik ammonium urea',
    year: 2016,
    subsidiary: 'GIS',
    industry: 'Petrochemical',
  },
  {
    slug: 'pltmg-sorong-wartsila',
    nameEn: 'PLTMG Sorong — Wartsila Engines (2017)',
    nameId: 'PLTMG Sorong — Mesin Wartsila (2017)',
    descriptionEn: '3×140 ton engine delivery to West Papua',
    descriptionId: 'Pengiriman 3 mesin 140 ton ke Papua Barat',
    year: 2017,
    subsidiary: 'GIS',
    industry: 'Power Generation',
  },
  {
    slug: 'lombok-cfspp-ftp2',
    nameEn: 'Lombok CFSPP FTP-2 (2014)',
    nameId: 'Lombok CFSPP FTP-2 (2014)',
    descriptionEn: '2×50MW coal-fired power plant equipment',
    descriptionId: 'Peralatan pembangkit listrik 2×50MW',
    year: 2014,
    subsidiary: 'GIS',
    industry: 'Power Generation',
  },
  {
    slug: 'pelindo-port-equipment',
    nameEn: 'Pelindo I Port Equipment (2014)',
    nameId: 'Pelindo I Peralatan Pelabuhan (2014)',
    descriptionEn: 'Port equipment installation',
    descriptionId: 'Instalasi peralatan pelabuhan',
    year: 2014,
    subsidiary: 'GIS',
    industry: 'Port & Maritime',
  },
]

/** Get all partners as a simple name list (for display without descriptions) */
export function getPartnerNames() {
  return partners.map((p) => p.name)
}

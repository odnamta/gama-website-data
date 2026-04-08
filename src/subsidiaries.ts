/**
 * All Gama Group subsidiaries — canonical list.
 * Used by the parent site for the companies page and by each subsidiary
 * to reference its own canonical metadata.
 */
export interface Subsidiary {
  name: string
  shortName: string
  industry: string
  industryId: string
  tagline: string
  taglineId: string
  description: string
  descriptionId: string
  /** Logo filename — each consuming site maps this to its own public/ directory */
  logo: string
  website: string | null
  founded: number
  status: 'active' | 'coming-soon'
}

export const subsidiaries: Subsidiary[] = [
  {
    name: 'PT. Gama Intisamudera',
    shortName: 'GIS',
    industry: 'Heavy Lift & Project Logistics',
    industryId: 'Heavy Lift & Logistik Proyek',
    tagline: 'We Deliver Certainty',
    taglineId: 'Kami Mengantarkan Kepastian',
    description: 'Specialist in heavy-lift transportation, project cargo handling, and mechanical erection & assembling across Indonesia since 1995.',
    descriptionId: 'Spesialis transportasi heavy lift, penanganan project cargo, dan erection & assembling mekanikal di seluruh Indonesia sejak 1995.',
    logo: 'logo-gis.png',
    website: 'https://gamaintisamudera.com',
    founded: 1995,
    status: 'active',
  },
  {
    name: 'PT. Gama Lintas Samudera',
    shortName: 'GLS',
    industry: 'International Freight Agency',
    industryId: 'Agen Pengiriman Internasional',
    tagline: 'Your Global Logistics Partner',
    taglineId: 'Mitra Logistik Global Anda',
    description: 'International freight forwarding agency providing seamless global shipping solutions with a trusted worldwide network.',
    descriptionId: 'Agen freight forwarding internasional yang menyediakan solusi pengiriman global dengan jaringan terpercaya di seluruh dunia.',
    logo: 'logo-gls.png',
    website: 'https://gls-id.com',
    founded: 2026,
    status: 'active',
  },
  {
    name: 'PT. Kejayan Farm Indonesia',
    shortName: 'KFI',
    industry: 'Poultry & Livestock',
    industryId: 'Peternakan & Perunggasan',
    tagline: 'Modern Poultry at Scale',
    taglineId: 'Peternakan Modern Berskala',
    description: 'Modern poultry farming operation in Kejayan with four three-story chicken coops, each housing 20,000 birds per floor — total capacity of 240,000 chickens.',
    descriptionId: 'Operasi peternakan ayam modern di Kejayan dengan empat kandang tiga lantai, masing-masing menampung 20.000 ekor per lantai — total kapasitas 240.000 ekor ayam.',
    logo: 'logo-placeholder.svg',
    website: null,
    founded: 2020,
    status: 'active',
  },
  {
    name: 'PT. Gama Waskita Graha',
    shortName: 'GWG',
    industry: 'Property Development',
    industryId: 'Pengembang Properti',
    tagline: 'Building Homes, Building Communities',
    taglineId: 'Membangun Rumah, Membangun Komunitas',
    description: 'Residential property developer creating quality housing for Indonesian families.',
    descriptionId: 'Pengembang properti perumahan yang membangun hunian berkualitas untuk keluarga Indonesia.',
    logo: 'logo-gwg.png',
    website: null,
    founded: 2021,
    status: 'active',
  },
  {
    name: 'PT. Bumi Kejayan',
    shortName: 'BK',
    industry: 'Stone Mining & Excavation',
    industryId: 'Pertambangan Batu & Penggalian',
    tagline: 'Building Indonesia\'s Foundation',
    taglineId: 'Membangun Fondasi Indonesia',
    description: 'Stone mining and excavation operation providing essential construction materials for Indonesia\'s growing infrastructure.',
    descriptionId: 'Operasi pertambangan batu dan penggalian yang menyediakan material konstruksi esensial untuk infrastruktur Indonesia yang terus berkembang.',
    logo: 'logo-placeholder.svg',
    website: null,
    founded: 2015,
    status: 'active',
  },
]

/** Get a subsidiary by its short name (e.g., 'GIS', 'GLS') */
export function getSubsidiary(shortName: string) {
  return subsidiaries.find((s) => s.shortName === shortName)
}

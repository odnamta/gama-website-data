/**
 * Group-level statistics — displayed on the parent site's "By the Numbers" section.
 */
export interface GroupStat {
  value: number
  suffix: string
  labelEn: string
  labelId: string
}

export const groupStats: GroupStat[] = [
  {
    value: 30,
    suffix: '+',
    labelEn: 'Years of Experience',
    labelId: 'Tahun Pengalaman',
  },
  {
    value: 5,
    suffix: '',
    labelEn: 'Companies',
    labelId: 'Perusahaan',
  },
  {
    value: 65,
    suffix: '+',
    labelEn: 'Employees',
    labelId: 'Karyawan',
  },
  {
    value: 5,
    suffix: '',
    labelEn: 'Industries',
    labelId: 'Industri',
  },
]

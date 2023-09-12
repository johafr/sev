export interface CompanyInterface {
  country_id: string
  created_at: string
  Externalities: number
  id: string
  industry_id: number | null
  Intensity: number | null
  name: string
}

export interface CountryInterface {
  created_at: string
  Currency: string
  id: string
  name: string
}

export interface IndustryInterface {
  created_at: string
  id: number
  name: string | null
}

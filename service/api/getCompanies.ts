import { supabase } from "../supabase"

export interface CompaniesInterface {
  country_id: string
  created_at: string
  Externalities: number
  id: string
  industry_id: number | null
  Intensity: number | null
  name: string
}

const getCompanies = async (): Promise<CompaniesInterface[] | null> => {
  const { data } = await supabase.from("company").select("*")

  return data
}

export default getCompanies

import { supabase } from "../supabase"

export interface CountryInterface {
  created_at: string
  Currency: string
  id: string
  name: string
}

const getCountries = async (): Promise<CountryInterface[] | null> => {
  const { data } = await supabase.from("country").select("*")

  return data
}

export default getCountries

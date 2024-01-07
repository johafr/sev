import { CountryInterface } from "@/utils/types/types"
import { supabase } from "../supabase"

const getCountries = async (): Promise<CountryInterface[]> => {
  const { data } = await supabase.from("country").select("*")

  return data ?? []
}

export default getCountries

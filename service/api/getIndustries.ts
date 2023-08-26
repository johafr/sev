import { supabase } from "../supabase"

export interface IndustryInterface {
  created_at: string
  id: number
  name: string | null
}

const getIndustries = async (): Promise<IndustryInterface[] | null> => {
  const { data } = await supabase.from("industry").select("*")

  return data
}

export default getIndustries

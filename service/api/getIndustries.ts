import { IndustryInterface } from "@/utils/types/types"
import { supabase } from "../supabase"

const getIndustries = async (): Promise<IndustryInterface[]> => {
  const { data } = await supabase.from("industry").select("*")

  return data ?? []
}

export default getIndustries

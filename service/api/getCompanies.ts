import { CompanyInterface } from "@/utils/types/types"
import { supabase } from "../supabase"

const getCompanies = async (): Promise<CompanyInterface[]> => {
  const { data } = await supabase.from("company").select("*")

  return data ?? []
}

export default getCompanies

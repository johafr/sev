import { CompanyInterface } from "@/utils/types/types"
import { supabase } from "../supabase"

const getRelatedCompanies = async (
  activeCompanyId: string
): Promise<CompanyInterface[]> => {
  // Update when relation is implemented
  const { data } = await supabase.from("company").select("*")

  return data ?? []
}

export default getRelatedCompanies

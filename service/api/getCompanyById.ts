import { CompanyInterface } from "@/utils/types/types"
import { supabase } from "../supabase"

const getCompanyById = async (id: string): Promise<CompanyInterface | null> => {
  const { data } = await supabase
    .from("company")
    .select("*")
    .eq("id", id)
    .single()

  return data
}

export default getCompanyById

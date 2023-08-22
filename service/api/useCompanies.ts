import { useEffect, useState } from "react"
import { supabase } from "../supabase"

export interface CompaniesInterface {
  country_id: string
  created_at: string
  Externalities: number
  id: number
  industry_id: number | null
  Intensity: number | null
  name: string
}

const useCompanies = () => {
  const [companies, setCompanies] = useState<CompaniesInterface[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchCompanies = async () => {
    try {
      const { data, error: dbError } = await supabase
        .from("Company")
        .select("*")

      if (dbError) {
        throw dbError
      }

      setCompanies(data)
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  return { companies, isLoading, error }
}

export default useCompanies

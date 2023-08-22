import { useEffect, useState } from "react"
import { supabase } from "../supabase"

export interface CountryInterface {
  created_at: string
  Currency: string
  id: string
  name: string
}

const useCountries = () => {
  const [countries, setContries] = useState<CountryInterface[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchCountries = async () => {
    try {
      const { data, error: dbError } = await supabase
        .from("Country")
        .select("*")

      if (dbError) {
        throw dbError
      }

      setContries(data)
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return { countries, isLoading, error }
}

export default useCountries

import { useEffect, useState } from "react"
import { supabase } from "../supabase"

export interface IndustryInterface {}

const useIndustries = () => {
  const [industries, setIndustries] = useState<IndustryInterface[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchIndustries = async () => {
    try {
      const { data, error: dbError } = await supabase
        .from("Industry")
        .select("*")

      if (dbError) {
        throw dbError
      }

      setIndustries(data)
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchIndustries()
  }, [])

  return { industries, isLoading, error }
}

export default useIndustries

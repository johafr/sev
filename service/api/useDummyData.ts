import { useEffect, useState } from "react"
import { supabase } from "../supabase"

const useDummyData = () => {
  const [dummydata, setDummydata] = useState<any>()
  const [isLoading, setisLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchDummyData = async () => {
    try {
      const { data: fetchedDummyData, error: fetchedError } = await supabase
        .from("dummydata")
        .select("*")

      if (fetchedError) {
        throw fetchedError
      }

      setDummydata(fetchedDummyData)
    } catch (error) {
      setError(error as Error)
    } finally {
      setisLoading(false)
    }
  }

  useEffect(() => {
    fetchDummyData()
  }, [])

  return { dummydata, isLoading, error }
}

export default useDummyData

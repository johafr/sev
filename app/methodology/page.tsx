"use client"
import useCountries from "@/service/api/useCountries"

const Methodology = () => {
  const { countries, isLoading, error } = useCountries()

  return (
    <div>
      <h1>This is the industry page...</h1>
      {isLoading ? (
        <p>Laster inn data...</p>
      ) : error ? (
        <p>An error occured: {error?.message}</p>
      ) : (
        <div>
          res:
          {countries.map((entry: any, key: number) => (
            <p key={key}>{entry.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Methodology

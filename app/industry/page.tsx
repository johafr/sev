"use client"
import useDummyData from "@/service/api/useDummyData"

const Industry = () => {
  const { dummydata, isLoading, error } = useDummyData()

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
          {dummydata.map((entry: any, key: number) => (
            <p key={key}>{entry.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Industry

"use client"

import Chart from "@/components/Chart"
import FilterField from "@/components/FilterField"
import getCountries from "@/service/api/getCountries"
import getIndustries from "@/service/api/getIndustries"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const MacroAssessments = () => {
  const { data: industries } = useQuery(["industries"], getIndustries)
  const { data: countries } = useQuery(["countries"], getCountries)

  const [activeCountryName, setActiveCountry] = useState<string>()

  return (
    <div className="h-full grid grid-cols-2 gap-12 pt-8">
      <div className="flex flex-col gap-12">
        <FilterField
          listOptions={industries ?? []}
          label="Search industries"
          size="full"
          placeholder="Enter industry"
          emitName={(name) => setActiveCountry(name)}
        />
        <FilterField
          listOptions={countries ?? []}
          label="Select country(ies)"
          size="full"
          placeholder="Enter country"
          emitName={(name) => setActiveCountry(name)}
        />
        <FilterField
          listOptions={[] /* Replace when params are received */}
          label="Environmental accounts"
          size="full"
          placeholder="Enter environmental account"
          emitName={(name) => null /*Update with correct function */}
        />
        <FilterField
          listOptions={[] /* Replace when params are received */}
          label="Measure"
          size="full"
          placeholder="Enter measure type"
          emitName={(name) => null /*Update with correct function */}
        />
      </div>
      <div className="flex flex-col justify-around">
        {/* Add computed data when it is computed */}
        <Chart chartData={[]} />
        <Chart chartData={[]} />
      </div>
    </div>
  )
}

export default MacroAssessments

"use client"

import Chart from "@/components/Chart"
import FilterField from "@/components/FilterField"
import getIndustries from "@/service/api/getIndustries"
import { useQuery } from "@tanstack/react-query"

const MacroAssessments = () => {
  const { data: industries } = useQuery(["industries"], getIndustries)

  return (
    <div className="h-full grid grid-cols-2 gap-12 pt-8">
      <div className="flex flex-col gap-12">
        <FilterField
          listOptions={industries ?? []}
          label="Search industries"
          size="full"
          placeholder="Enter industry"
        />
        <FilterField
          listOptions={industries ?? []}
          label="Select country(ies)"
          size="full"
          placeholder="Enter country"
        />
        <FilterField
          listOptions={industries ?? []}
          label="Environmental accounts"
          size="full"
          placeholder="Enter environmental account"
        />
        <FilterField
          listOptions={industries ?? []}
          label="Measure"
          size="full"
          placeholder="Enter measure type"
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

"use client"
import FilterButton from "@/components/FilterButton"
import FilterField from "@/components/FilterField"
import Table from "@/components/Table"
import getCompanies from "@/service/api/getCompanies"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const Methodology = () => {
  const { data: companies } = useQuery(["companies"], getCompanies)
  const [activeFilterIndex, setActiveFilterIndex] = useState<number>(0)

  return (
    <div className="h-full grid grid-rows-auto-1fr">
      <div className="grid grid-cols-2 gap-12">
        <FilterField
          placeholder="Search for country"
          listOptions={companies ?? []}
          size="full"
          label="Search for companies"
        />
        <div className="grid grid-cols-3 gap-6 items-end">
          <FilterButton
            size="medium"
            text="Industry"
            isActive={activeFilterIndex === 0}
            onClick={() => setActiveFilterIndex(0)}
          />
          <FilterButton
            size="medium"
            text="[Geographic]"
            isActive={activeFilterIndex === 1}
            onClick={() => setActiveFilterIndex(1)}
          />
          <FilterButton
            size="medium"
            text="[Select your own peers]"
            isActive={activeFilterIndex === 2}
            onClick={() => setActiveFilterIndex(2)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 mt-4">
        <div className="bg-sev-gray-10 rounded h-full"></div>
        <div className="h-full">
          <Table entries={companies ?? []} isFirstActive />
        </div>
      </div>
    </div>
  )
}

export default Methodology

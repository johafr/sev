"use client"

import FilterButton from "@/components/FilterButton"
import FilterField from "@/components/FilterField"
import Table from "@/components/Table"
import getCompanies from "@/service/api/getCompanies"
import getCompanyById from "@/service/api/getCompanyById"
import getRelatedCompanies from "@/service/api/getRelatedCompanies"
import { CompanyInterface } from "@/utils/types/types"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const Company = ({ params }: { params: { company_id: string } }) => {
  const { data: relatedCompanies } = useQuery(["relatedCompanies"], () =>
    getRelatedCompanies("")
  )
  const { data: companies } = useQuery(["companies"], getCompanies)
  const { data: selectedCompany } = useQuery(["companyById"], () =>
    // Add id
    getCompanyById("")
  )

  const [activeFilterIndex, setActiveFilterIndex] = useState<number>(0)
  const [tableCompanies, setTableCompanies] = useState<CompanyInterface[]>([])

  useEffect(() => {
    const newTableCompanies = []
    selectedCompany && newTableCompanies.push(selectedCompany)
    relatedCompanies && newTableCompanies.push(...relatedCompanies)
    setTableCompanies(newTableCompanies)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCompany, relatedCompanies])

  return (
    <div className="h-full grid grid-rows-auto-1fr">
      <div className="grid grid-cols-2 gap-12">
        <FilterField
          placeholder="Search for country"
          listOptions={companies ?? []}
          size="full"
          label="Search for companies"
          emitName={() => null}
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
          <Table entries={tableCompanies ?? []} isFirstActive />
        </div>
      </div>
    </div>
  )
}

export default Company

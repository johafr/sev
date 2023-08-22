"use client"

import FilterButton from "@/components/FilterButton"
import FilterField from "@/components/FilterField"
import Table from "@/components/Table"
import useCompanies from "@/service/api/useCompanies"
import useCountries from "@/service/api/useCountries"
import { MainPageFiltersEnum } from "@/utils/enums"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const {
    countries,
    isLoading: countriesIsLoading,
    error: fetchCountryError,
  } = useCountries()
  const {
    companies,
    isLoading: companiesIsLoading,
    error: fetchCompanyError,
  } = useCompanies()

  const [activeFilterIndex, setActiveFilterIndex] = useState<number>(0)
  const [activeCountryIndex, setActiveCountryIndex] = useState(0)

  const mainPageFilterValues = Object.values(MainPageFiltersEnum)

  function handleSetActiveFilterIndex(index: number) {
    setActiveFilterIndex(index)
  }

  return (
    <main>
      <div className="flex justify-between">
        <div className="w-3/5">
          <p className="text-sev-green-100">
            Academic research aiming to make corporate
            <b> environmental data understandable</b> for all stakeholders.
            Database including Environmental P&Ls for over
            <b> 16k global companies. </b>
            <br />
            <br />
            Backed and [produced] by <b>academia</b>. Built for
            <b> open access </b>
            and <b>partnerships</b>. Welcome to the
            <b>{" world's largest search engine "}</b>
            for understanding the <b>{"impact of companies' externalities"}</b>
          </p>
        </div>
        <Image
          //Replace void with image path when we get the image
          src="/void"
          alt="partnerships"
          width={240}
          height={180}
          className="border"
        />
      </div>
      <div className="mt-2">
        <div className="flex w-full gap-4">
          <FilterField
            label="Search for companies"
            placeholder="Enter company name"
            listOptions={companies}
            size="full"
          />
          <FilterField
            label="Select country"
            placeholder="Enter Country"
            listOptions={countries}
            size="small"
            align="right"
          />
        </div>
        <div className="grid grid-cols-6 mt-4 gap-6">
          <FilterButton
            text={`Top 10 by ${MainPageFiltersEnum.COUNTRY}`}
            isActive={activeFilterIndex === 0}
            onClick={() => handleSetActiveFilterIndex(0)}
          />
          <FilterButton
            text={`Top 10 by ${MainPageFiltersEnum.INDUSTRY}`}
            isActive={activeFilterIndex === 1}
            onClick={() => handleSetActiveFilterIndex(1)}
          />
          <FilterButton
            text={`Top 10 by ${MainPageFiltersEnum.NET_CHANGE_YOY}`}
            isActive={activeFilterIndex === 2}
            onClick={() => handleSetActiveFilterIndex(2)}
          />
          <FilterButton
            text={`Top 10 by ${MainPageFiltersEnum.EXTERNALITY_MARGINS}`}
            isActive={activeFilterIndex === 3}
            onClick={() => handleSetActiveFilterIndex(3)}
          />
          <FilterButton
            text="[TBU]"
            isActive={activeFilterIndex === 4}
            onClick={() => handleSetActiveFilterIndex(4)}
          />
          <FilterButton
            text="[TBU]"
            isActive={activeFilterIndex === 5}
            onClick={() => handleSetActiveFilterIndex(5)}
          />
        </div>
        {/* Add datafetcher */}
        {countries.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">
                Top 10 in {countries[activeCountryIndex]?.name} by{" "}
                {mainPageFilterValues[activeFilterIndex]}
              </p>
              <Table entries={companies} classname="mt-2" />
            </div>
            <div>
              <p className="text-sm font-medium">
                Bottom 10 in {countries[activeCountryIndex]?.name} by{" "}
                {mainPageFilterValues[activeFilterIndex]}
              </p>
              <Table entries={companies} classname="mt-2" />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

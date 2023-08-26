"use client"

import FilterButton from "@/components/FilterButton"
import FilterField from "@/components/FilterField"
import Table from "@/components/Table"
import getCompanies from "@/service/api/getCompanies"
import getCountries from "@/service/api/getCountries"
import { CompanyFilterEnum } from "@/utils/enums"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const { data: countries } = useQuery(["countries"], getCountries)
  const { data: companies } = useQuery(["companies"], getCompanies)

  const [activeFilter, setActiveFilter] = useState<CompanyFilterEnum>(
    CompanyFilterEnum.ALL
  )
  const [activeCountryIndex, setActiveCountryIndex] = useState(0)

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
            listOptions={companies ?? []}
            size="full"
          />
          <FilterField
            label="Select country"
            placeholder="Enter Country"
            listOptions={countries ?? []}
            size="small"
            align="right"
          />
        </div>
        <div className="grid grid-cols-6 mt-4 gap-6">
          <FilterButton
            text={`Top 10 by ${CompanyFilterEnum.COUNTRY}`}
            isActive={activeFilter === CompanyFilterEnum.COUNTRY}
            onClick={() => setActiveFilter(CompanyFilterEnum.COUNTRY)}
          />
          <FilterButton
            text={`Top 10 by ${CompanyFilterEnum.INDUSTRY}`}
            isActive={activeFilter === CompanyFilterEnum.INDUSTRY}
            onClick={() => setActiveFilter(CompanyFilterEnum.INDUSTRY)}
          />
          <FilterButton
            text={`Top 10 by ${CompanyFilterEnum.NET_CHANGE_YOY}`}
            isActive={activeFilter === CompanyFilterEnum.NET_CHANGE_YOY}
            onClick={() => setActiveFilter(CompanyFilterEnum.NET_CHANGE_YOY)}
          />
          <FilterButton
            text={`Top 10 by ${CompanyFilterEnum.EXTERNALITY_MARGINS}`}
            isActive={activeFilter === CompanyFilterEnum.EXTERNALITY_MARGINS}
            onClick={() =>
              setActiveFilter(CompanyFilterEnum.EXTERNALITY_MARGINS)
            }
          />
          {/* To be implemented */}
          <FilterButton text="[TBU]" isActive={false} onClick={() => null} />
          <FilterButton text="[TBU]" isActive={false} onClick={() => null} />
        </div>
        {/* Add datafetcher */}
        {countries && countries.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">
                Top 10 in {countries[activeCountryIndex]?.name} by{" "}
                {activeFilter}
              </p>
              <Table entries={companies ?? []} classname="mt-2" />
            </div>
            <div>
              <p className="text-sm font-medium">
                Bottom 10 in {countries[activeCountryIndex]?.name} by{" "}
                {activeFilter}
              </p>
              <Table entries={companies ?? []} classname="mt-2" />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

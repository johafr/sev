import { CompaniesInterface } from "@/service/api/getCompanies"
import classNames from "classnames"

type TableProps = {
  //Needs to be updated with a company endpoint in the backend
  entries: Array<CompaniesInterface>
  classname?: string
  isFirstActive?: boolean
}

const Table = ({ entries, classname, isFirstActive }: TableProps) => {
  return (
    <table className={classNames("w-full", classname)}>
      <thead className="bg-sev-green-100 text-white">
        <tr>
          <th>Company</th>
          <th>Industry</th>
          <th>Externalities</th>
          <th>Intensity</th>
          <th>Impact Change YoY</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr
            key={index}
            className={classNames(
              "border-b",
              isFirstActive && index === 0
                ? "border-sev-green-100 border-dashed"
                : "border-white"
            )}
          >
            <td className="bg-sev-gray-10 p-2 border-white border-r ">
              {entry.name}
            </td>
            <td className="bg-sev-gray-10 p-2 border-white border-r ">
              {entry.industry_id}
            </td>
            <td className="bg-sev-gray-10 p-2 border-white border-r ">
              {entry.Externalities}
            </td>
            <td className="bg-sev-gray-10 p-2 border-white border-r ">
              {entry.Intensity}
            </td>
            {/* Replace with arrows */}
            <td className="bg-sev-gray-10 p-2text-center">
              {entry.country_id.slice(0, 5)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table

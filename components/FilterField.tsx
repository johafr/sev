import { Combobox } from "@headlessui/react"
import classNames from "classnames"
import { Fragment, useState } from "react"

type FilterFieldProps = {
  label?: string
  placeholder?: string
  listOptions: Array<any>
  size?: "small" | "medium" | "large" | "full"
  align?: "left" | "center" | "right"
}

const FilterField = ({
  label,
  placeholder,
  listOptions,
  size,
  align,
}: FilterFieldProps) => {
  const [selectedItem, setSelectedItem] = useState()
  const [query, setQuery] = useState("")

  const filteredItems =
    query === ""
      ? listOptions.map((rawItem) => rawItem.name)
      : listOptions
          .map((rawItem) => rawItem.name)
          .filter((item) => item.toLowerCase().includes(query.toLowerCase()))

  return (
    <div
      className={classNames("", {
        "w-full": size === "full",
        "w-32": size === "small",
      })}
    >
      <p className="font-semibold text-sev-green-100">{label}</p>
      <Combobox value={selectedItem} onChange={setSelectedItem}>
        <div className="relative">
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            onFocus={(event) => event.target.select()}
            placeholder={placeholder}
            displayValue={(item: string) => item}
            className={classNames(
              "bg-sev-gray-10 h-10 font-bold p-2 outline-none",
              {
                "w-full": size === "full",
                "w-32": size === "small",
              }
            )}
          />
          <Combobox.Options
            className={classNames(
              "absolute bg-white max-h-32 overflow-auto shadow-lg rounded mt-2",
              size === "small" && "w-64",
              size === "full" && "w-1/2",
              align === "right" && "right-0"
            )}
          >
            {filteredItems.map((item) => (
              <Combobox.Option key={item} value={item} as={Fragment}>
                <li className="active:bg-sev-gray-10 p-2">{item}</li>
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  )
}

export default FilterField

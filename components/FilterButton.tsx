import classNames from "classnames"

type FilterButtonProps = {
  text: string
  isActive?: boolean
  onClick: () => void
}

const FilterButton = ({ text, isActive, onClick }: FilterButtonProps) => {
  return (
    <button
      className={classNames(
        "font-semibold text-xs text-left px-2",
        isActive ? "bg-sev-gray-10" : "bg-sev-green-100 text-white"
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default FilterButton

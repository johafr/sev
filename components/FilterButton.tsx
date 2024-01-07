import classNames from "classnames"

type FilterButtonProps = {
  text: string
  isActive?: boolean
  onClick: () => void
  size?: "small" | "medium" | "large"
}

const FilterButton = ({
  text,
  isActive,
  onClick,
  size = "medium",
}: FilterButtonProps) => {
  return (
    <button
      className={classNames(
        "font-semibold text-xs text-left px-2",
        isActive ? "bg-sev-gray-10" : "bg-sev-green-100 text-white",
        size === "medium" && "h-8"
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default FilterButton

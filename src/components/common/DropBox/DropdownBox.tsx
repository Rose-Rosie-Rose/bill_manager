type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOption[];
  selected: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const DropdownBox: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
  placeholder,
}) => {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default function Button({
  label,
  href,
  onClick,
  customStyle,
}: {
  label: string;
  href: string;
  onClick?: () => void;
  customStyle?: string;
}): JSX.Element {
  return (
    <button
      type="button"
      className={`py-4 px-8 rounded-[28px] relative bg-black-900 group before:button-border before:bg-white-50 before:opacity-100 hover:before:opacity-0 hover:before:animate-none after:button-border after:opacity-0 after:brand-gradient-1 hover:after:opacity-100 hover:after:animate-none ${
        customStyle ?? ""
      }`}
      onClick={onClick}
    >
      <a href={href} target="_blank" rel="noreferrer">
        <div className="flex items-center ">
          <span
            data-label={label}
            className="relative before:button-text before:content-[attr(data-label)] before:bg-white-50 before:opacity-100 group-hover:before:opacity-0 after:button-text after:content-[attr(data-label)] after:brand-gradient-1 after:opacity-0 group-hover:after:opacity-100"
          >
            {label}
          </span>
        </div>
      </a>
    </button>
  );
}

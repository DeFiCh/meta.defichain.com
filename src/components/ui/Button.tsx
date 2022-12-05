import clsx from "clsx";
import GradientText from "./GradientText";

export default function Button({
  label,
  href,
  onClick,
  customStyle,
  disabled,
}: {
  label: string;
  href: string;
  onClick?: () => void;
  customStyle?: string;
  disabled?: boolean;
}): JSX.Element {
  return (
    <button
      type="button"
      className={`py-4 px-8 rounded-[28px] relative bg-black-900 group before:button-border before:bg-white-50 before:opacity-100 hover:before:opacity-0 hover:before:animate-none after:button-border after:opacity-0 after:brand-gradient-1 hover:after:opacity-100 hover:after:animate-none ${
        customStyle ?? ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={clsx({ "cursor-default pointer-events-none": disabled })}
      >
        <div className="flex items-center ">
          <GradientText label={label} />
        </div>
      </a>
    </button>
  );
}

export default function SkewedStats({
  stat,
  label,
}: {
  stat: number;
  label: string;
}): JSX.Element {
  return (
    <div className="hidden lg:block absolute left-2">
      <div className="skew-side-stat flex flex-row ">
        <div className="border-b border-white-50 w-9 mr-1 mb-1.5" />
        <div className="">
          <div className="text-white-50 font-bold">{stat}</div>
          <div className="text-white-50 font-bold">{label}</div>
        </div>
      </div>
    </div>
  );
}

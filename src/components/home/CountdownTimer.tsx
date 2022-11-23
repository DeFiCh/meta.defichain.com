import { secondsToTime } from "helpers/DurationHelper";

interface CountdownProps {
  secondsUntilRelease: number;
}

export default function CountdownTimer({
  secondsUntilRelease,
}: CountdownProps) {
  const timeBreakdown = secondsToTime(secondsUntilRelease);
  return (
    <div className="container mx-auto flex justify-center">
      <TimeItemDisplay value={timeBreakdown.d} label="Days" />
      <TimeItemDisplay value={timeBreakdown.h} label="Hours" />
      <TimeItemDisplay value={timeBreakdown.min} label="Minutes" />
      <TimeItemDisplay value={timeBreakdown.s} label="Seconds" />
    </div>
  );
}

function TimeItemDisplay({
  value,
  label,
}: {
  value: number;
  label: string;
}): JSX.Element {
  return (
    <div className="flex flex-col items-center font-bold md:mx-4 mx-1.5 w-[68px] md:w-[97px]">
      <div className="text-white-50 text-[32px] md:text-[56px] lg:text-[80px] leading-[32px] md:leading-[56px] lg:leading-[80px]">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-white-50">{label}</div>
    </div>
  );
}

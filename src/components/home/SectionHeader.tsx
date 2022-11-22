export default function SectionHeader({
  header,
  hint,
  hintStyle = "brand-gradient-1 text-center",
  headerStyle = "text-center",
  containerStyle = "items-center",
  testId,
}: {
  header: string;
  hint: string;
  hintStyle?: string;
  headerStyle?: string;
  containerStyle?: string;
  testId?: string;
}): JSX.Element {
  return (
    <div className={`flex flex-col ${containerStyle ?? ""}`}>
      <span
        className={`mb-8 text-transparent bg-clip-text ${hintStyle} font-medium`}
        data-testid={`${testId}_hint`}
      >
        {hint}
      </span>
      <span
        className={`mb-8 font-bold lg:text-[80px] lg:leading-[80px] md:text-[56px] md:leading-[56px] text-[32px] leading-[32px] text-white-50 ${headerStyle}`}
        dangerouslySetInnerHTML={{ __html: header }}
        data-testid={`${testId}_header`}
      />
    </div>
  );
}

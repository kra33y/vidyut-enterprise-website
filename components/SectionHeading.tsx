type SectionHeadingProps = {
  kicker: string;
  title: string;
  copy?: string;
  dark?: boolean;
};

export function SectionHeading({ kicker, title, copy, dark }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <div>
        <div className="section-kicker">{kicker}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      {copy ? <p className={dark ? "lead" : "section-copy"}>{copy}</p> : null}
    </div>
  );
}

import StatisticsSection from "./StatisticsSection";
import {
  Section,
  StatList,
  StatListLI,
  Label,
  Percentage,
} from "./Statistics.styled";

export default function Statistics({ stats }) {
  return (
    <Section>
      <StatisticsSection title="Upload stats" />

      <StatList>
        {stats.map((item) => (
          <StatListLI key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </StatListLI>
        ))}
      </StatList>
    </Section>
  );
}

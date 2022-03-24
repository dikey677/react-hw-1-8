import { Title } from "./StatisticsSecton.styled";

export default function StatisticsSection({ title }) {
  return <div>{title && <Title className="title">{title}</Title>}</div>;
}

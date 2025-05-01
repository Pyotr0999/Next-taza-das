import CardCompon from "./componets/CardCompon";
import CardXch from "./componets/CardXch";
import MainBgi from "./componets/MainBgi";
import More from "./componets/More";
export default function Home() {
  return (
    <main>
      <MainBgi />
      <CardCompon />
      <More/>
      <CardXch/>
    </main>
  );
}

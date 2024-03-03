import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import s from "./home.module.scss";

export interface ArrData {
  id: number;
  name: string;
  age: number;
  race: string;
}

const heroes: ArrData[] = [
  { id: 1, name: "Aragorn", age: 87, race: "Human" },
  { id: 2, name: "Legolas", age: 500, race: "elf" },
  { id: 3, name: "Gimli", age: 160, race: "gnome" },
  { id: 3, name: "Gendalf", age: 24000, race: "gnome" },
];

export const Home = () => {
  return (
    <main>
      <section className={s.home}>
        <Container>
          <h2>Home</h2>
          <Card heroes={heroes} />
        </Container>
      </section>
    </main>
  );
};

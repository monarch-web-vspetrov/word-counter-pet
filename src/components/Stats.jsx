import { useState } from "react";
import Stat from "./Stat";

function Stats() {
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    instagram: 280,
    facebook: 2200,
  });
  return (
    <section className="stats">
      <Stat statNumber={stats.words} statTitle="Words" />
      <Stat statNumber={stats.characters} statTitle="Characters" />
      <Stat statNumber={stats.instagram} statTitle="Instagram" />
      <Stat statNumber={stats.facebook} statTitle="Facebook" />
    </section>
  );
}

export default Stats;

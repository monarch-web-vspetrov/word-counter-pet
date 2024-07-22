import { useEffect, useState } from "react";
import Stat from "./Stat";
import { FACEBOOK_LIMIT, INSTAGRAM_LIMIT } from "../lib/constants";

function Stats({ charactersCount, wordsCount }) {
  useEffect(() => {
    setStats({
      words: wordsCount,
      characters: charactersCount,
      instagram: INSTAGRAM_LIMIT - charactersCount,
      facebook: FACEBOOK_LIMIT - charactersCount,
    });
  }, [charactersCount, wordsCount]);
  const [stats, setStats] = useState({
    words: 0,
    characters: charactersCount,
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

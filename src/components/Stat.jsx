function Stat({ statNumber, statTitle }) {
  return (
    <section className="stat">
      <span className="stats__number">{statNumber}</span>
      <h2 className="second-heading">{statTitle}</h2>
    </section>
  );
}

export default Stat;

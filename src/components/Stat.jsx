function Stat({ statNumber, statTitle }) {
  return (
    <section className="stat">
      <span
        className={`stats__number ${
          statNumber < 0 ? "stat__number--limit" : ""
        }`}
      >
        {statNumber}
      </span>
      <h2 className="second-heading">{statTitle}</h2>
    </section>
  );
}

export default Stat;

import AnimatedNumbers from "@/components/AnimatedNumbers";

const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <AnimatedNumbers value={22} label="Years of experience" />
          </div>
          <div className="col-md-2">
            <AnimatedNumbers value={7} label="Number of Branch" />
          </div>
          <div className="col-md-2">
            <AnimatedNumbers value={10000} label="Total Family served" />
          </div>
          <div className="col-md-2">
            <AnimatedNumbers value={40000} label="Total People served" />
          </div>
          <div className="col-md-2">
            <AnimatedNumbers value={14044} label="Loan Portfolio (mil)" />
          </div>
          <div className="col-md-2">
            <AnimatedNumbers value={10396} label="Deposit Portfolio (mil)" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

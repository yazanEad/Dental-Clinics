import Stat from "./Stat";



function Statistics({ stats }) {
  return (
    <div className="container-fluid container-lg">
      <div className=" statistic row  row-cols-2 row-cols-md-4  justify-content-between">
        {stats.map((s) => {
          return <Stat key={s.id} item={s} />;
        })}
      </div>
    </div>
  );
}

export default Statistics;

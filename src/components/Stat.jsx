

function Stat({item}) {
  return (
    <div>
      <div  className="col">
        <h1>{item.value}</h1>
        <p>{item.label}</p>
      </div>
    </div>
  );
}

export default Stat

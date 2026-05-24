import ServicesCard from "./ServicesCard";


function ServicesList({ services }) {
  return (
    <div className="service container-fluid container-lg">
      <div className="row g-4">
        {services.map((servic) => {
          return <ServicesCard key={servic.Slug} service={servic} />;
        })}
      </div>
    </div>
  );
}

export default ServicesList

import ServicesCard from "./ServicesCard";


function ServicesList({ services, animateOnLoad = false }) {
  return (
    <div className="service container-fluid container-lg">
      <div className="row g-4">
        {services.map((servic, index) => {
          return (
            <ServicesCard
              key={servic.Slug}
              service={servic}
              index={index}
              animateOnLoad={animateOnLoad}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServicesList

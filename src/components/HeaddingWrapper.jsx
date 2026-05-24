

function HeaddingWrapper({titleOne,titleTwo}) {
  return (
    <div className="container-fluid container-md">
      <div className=" text-center  col-md-8 col-lg-7 mx-auto " style={{paddingTop:"60px"}}>
        <p className="titleOne">{titleOne}</p>
        <h2 className="titleTwo">{titleTwo}</h2>
      </div>
    </div>
  );
}

export default HeaddingWrapper


function Newsletter() {
  return (
    <div className="container-fluid container-lg">
      <div className="newsletter d-flex flex-column flex-md-row  justify-content-between align-items-center gap-4 ">
        <h4>
          Subscribe for exclusive <br /> content & news
        </h4>
        <div>
          <div className="newsletter-form-wrapper">
            <input
              type="email"
              className="newsletter-input"
              placeholder="name@email.com"
            />
            <button className="butt bg-black">Subscribe</button>
          </div>
          <p className="mt-4 text-black">Enter your company email…</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter

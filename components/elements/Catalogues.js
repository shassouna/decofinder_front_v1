const Catalogues = ({ catalogues, translate }) => {
  return (
    <>
      <h3 className="mb-40">{translate("Catalogues")} : </h3>
      <div className="row">
        {catalogues.map((catalogue) => (
          <div key={catalogue["id"]} className="col-lg-3">
            <a
              target="_blank"
              href={`${catalogue["attributes"]["fichier"]["data"][0]["attributes"]["url"]}`}
            >
              <img
                className="mb-5"
                style={{ width: "120px" }}
                src="/assets/imgs/theme/PDF.png"
              />
              <h6>{catalogue["attributes"]["titre"]}</h6>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
export default Catalogues;

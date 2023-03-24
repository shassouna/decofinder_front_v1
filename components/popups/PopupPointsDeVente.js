import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PointsDeVente = ({ showPopup, setShowPopup, revendeurs, translate }) => {
  const [Map, setMap] = useState();

  useEffect(() => {
    if (showPopup) {
      const MapLocal = dynamic(() => import("./MapPointsDeVente"), {
        ssr: false,
      });
      setMap(MapLocal);
    }
  }, [showPopup]);

  const handleRemove = () => {
    setShowPopup(!showPopup);
  };

  return revendeurs.length > 0 ? (
    <div
      className={
        showPopup
          ? "modal fade custom-modal show d-block"
          : "modal fade custom-modal d-none"
      }
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            onClick={handleRemove}
          ></button>
          <div style={{ marginTop: "10px", marginRight: "10px" }}>
            {Map && <Map items={revendeurs} />}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={
        showPopup
          ? "modal fade custom-modal show d-block"
          : "modal fade custom-modal d-none"
      }
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            onClick={handleRemove}
          ></button>
          <h3>{translate("Pas de revendeurs")}</h3>
        </div>
      </div>
    </div>
  );
};

export default PointsDeVente;

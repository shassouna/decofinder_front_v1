
import Revendeur from "../elements/Revendeur"

const PopupRevendeurs = ({showPopup, setShowPopup, revendeurs, translate}) => {

    const handleRemove = () => {
        setShowPopup(!showPopup)
    }

    return (  
        revendeurs.length>0?
        <>
            <div className={showPopup? "modal fade custom-modal show d-block" : "modal fade custom-modal d-none"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleRemove}
                        ></button>
                        <div className="modal-body mt-20" style={{display : "flex", justifyContent : "space-between", flexWrap:"wrap", overflowY:"scroll", maxHeight:"600px"}}>
                        {revendeurs.map(revendeur=>(
                            <Revendeur revendeur={revendeur} translate={translate} key={revendeur["id"]}/>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={showPopup ? "modal-backdrop fade show" : "modal-backdrop fade d-none"}></div>
        </>
        :
        <>
            <div className={showPopup? "modal fade custom-modal show d-block" : "modal fade custom-modal d-none"}>
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
            <div className={showPopup ? "modal-backdrop fade show" : "modal-backdrop fade d-none"}></div>
        </>    
    )
}

export default PopupRevendeurs

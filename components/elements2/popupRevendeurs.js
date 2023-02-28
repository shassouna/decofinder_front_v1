
import Revendeur from "./Revendeur"

const PopupRevendeurs = ({showPopupRevendeurs, setShowPopupRevendeurs, revendeurs_produit, translate}) => {

    const handleRemove = () => {
        setShowPopupRevendeurs(!showPopupRevendeurs)
    }

    return (  
        revendeurs_produit.length>0?
        <>
            <div className={showPopupRevendeurs? "modal fade custom-modal show d-block" : "modal fade custom-modal d-none"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleRemove}
                        ></button>
                        <div className="modal-body mt-20" style={{display : "flex", justifyContent : "space-between", flexWrap:"wrap", overflowY:"scroll", maxHeight:"600px"}}>
                        {revendeurs_produit.map((revendeur, index)=>(
                            <Revendeur item={revendeur} translate={translate} key={revendeur["id"]+index}/>
                        ))}
                                                    {revendeurs_produit.map((revendeur, index)=>(
                            <Revendeur item={revendeur} translate={translate} key={revendeur["id"]+index}/>
                        ))}
                                                    {revendeurs_produit.map((revendeur, index)=>(
                            <Revendeur item={revendeur} translate={translate} key={revendeur["id"]+index}/>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={showPopupRevendeurs ? "modal-backdrop fade show" : "modal-backdrop fade d-none"}></div>
        </>
        :
        <>
            <div className={showPopupRevendeurs? "modal fade custom-modal show d-block" : "modal fade custom-modal d-none"}>
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
            <div className={showPopupRevendeurs ? "modal-backdrop fade show" : "modal-backdrop fade d-none"}></div>
        </>    
    )
}

export default PopupRevendeurs

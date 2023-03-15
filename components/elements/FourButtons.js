import Link from "next/link"

const FourButtons = ({translate}) => {

    return (         
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-4 col-12 mb-10">
                    <Link href="/jury">
                        <a className="btn w-100 hover-up">
                            {translate("Toutes les sélections du Jury")}
                        </a>              
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-4 col-12 mb-10">
                    <Link href="/coeur">
                        <a className="btn w-100 hover-up">
                            {translate("Tous les coups de coeur")}
                        </a>              
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-4 col-12 mb-10">
                    <Link href="/marketplace">
                        <a className="btn w-100 hover-up">
                            {translate("Tous les achats en ligne")}
                        </a>              
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-4 col-12 mb-10">
                    <Link href="/promos">
                        <a className="btn w-100 hover-up">
                            {translate("Toutes les promotions")}
                        </a>              
                    </Link>
                </div>        
            </div>
     
    )
}

export default FourButtons

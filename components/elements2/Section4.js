import SliderSelection from "./SliderSlection"

function Section4({Selections, Designers, Exposants, Section_Libres, translate}) {

    return (
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-25 mt-5">
            <div className="row mb-25">
                {Exposants.map(exposant=>(
                <div className="col-lg-4 col-md-6 col-sm-6 col-4" key={exposant["id"]}>
                    <img
                        src={`${process.env.BASE_URL_SERVER}${exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`}
                        alt=""
                        style={{width:"100%"}}
                    />
                </div>
                ))}
            </div>
            <div className="row mb-25">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-25">
                    <p className="text-center">{translate("NOUVELLES ENTREPRISES RÉFÉRENCÉES")}</p>
                </div>                
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                    <a className="btn hover-up">{translate("Toutes les nouvelles marques")}</a>
                </div>
            </div>
            <div className="row">
                {Section_Libres.map(section_libre=>(
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 m-auto">
                    <section className="text-center mb-50 ml-5 mr-5">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-24">
                                <div className="featured-card">
                                    <h2 className="title style-3 mb-40">{section_libre["attributes"]["type"]}</h2>
                                    <img src={section_libre["attributes"]["image"]["data"]?`${process.env.BASE_URL_SERVER}${section_libre["attributes"]["image"]["data"]["attributes"]["url"]}`:"/assets/imgs/theme/image_blanche.png"} alt="" />
                                    <h4>{section_libre["attributes"]["titre"]}</h4>
                                    <p>{section_libre["attributes"]["description"].substring(0,200)}</p>
                                    <a href="#">{translate("Lire plus")}</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                ))}
            </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="row mb-25 featured-card">
            {Designers.map(designer=>(
                <div key={designer["id"]} className="col-lg-4 col-md-6 col-sm-6 col-4">
                    <a target="_blank" href={designer["attributes"]["lien"]}>
                        <img
                            className="card"
                            src={designer["attributes"]["image"]["data"]?`${process.env.BASE_URL_SERVER}${designer["attributes"]["image"]["data"]["attributes"]["url"]}`:"/assets/imgs/theme/image_blanche.png"}
                            alt=""
                            style={{ height:"176px", width:"100%"}}
                        />
                    </a>
                </div>
            ))}
                <h6 className="text-center mb-20">Le mag déco</h6>
                <h6 className="text-center">PORTRAITS DE DESIGNERS</h6>
            </div>
            {
            Selections.map(selection=>(            
            <div className="row mb-25 featured-card ml-5 mr-5">
                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-10"> 
                    <div className="mb-20">
                        <SliderSelection key={selection["id"]} Item={selection}/>
                    </div>        
                    <h4 className="text-center">{selection["attributes"]["titre"]}</h4>
                    <div className="text-center"><button className="btn">{translate("Voir la sélection")}</button></div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                </div>
            </div>
            ))
            }
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <div className="row card ml-5 mr-5">
            <h6 className="mb-20 ml-10 mt-20">{translate("INSCRIVEZ-VOUS À NOS NEWSLETTERS")}</h6>
            <form className="form-subcriber d-flex mb-20">
                <input type="email" placeholder={translate("Merci de renseigner votre adresse mail")}/>
                <button className="btn">Ok</button>
            </form>
            <h6 className="mb-40 ml-10"><a className="btn hover-up">{translate("Voir toutes les Newsletters")}</a></h6>
            <div className="ollow-social mb-20">
                <h6 className="mb-20 ml-10">{translate("Suivez-nous")}</h6>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <a href="https://www.facebook.com/decofinder">
                            <img
                                src="/assets/imgs/theme/icons/icon-facebook.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <a href="https://twitter.com/decofinder">
                            <img
                                src="/assets/imgs/theme/icons/icon-twitter.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <a href="https://www.instagram.com/decofinder/">
                            <img
                                src="/assets/imgs/theme/icons/icon-instagram.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <a href="https://www.youtube.com/@decofinder">
                            <img
                                src="/assets/imgs/theme/icons/icon-youtube.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <a href="https://www.pinterest.fr/decofinder/">
                            <img
                                src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Section4

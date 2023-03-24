import Link from "next/link"

function Experts({experts}) {

    return (
            <div className="row">
            {experts.map(expert=>(
                <Link href={`/selection/${expert["attributes"]["selection_df"]["data"]["id"]}/${expert["attributes"]["selection_df"]["data"]["attributes"]["slug"]}`}
                key={expert["id"]}>
                <div className="col-lg-3 col-md-3">
                    <div className="team-card">
                        <img src={expert["attributes"]["image"]["data"]?`${process.env.BASE_URL_SERVER}${expert["attributes"]["image"]["data"]["attributes"]["url"]}`:"/assets/imgs/theme/image_blanche.png"} alt="" style={{width:"100%"}} />
                        <div className="content text-center mt-25">
                            <h5 className="mb-5">{expert["attributes"]["nom"]}</h5>
                            <span>{expert["attributes"]["profession"]}</span>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
            </div>
    )
}

export default Experts

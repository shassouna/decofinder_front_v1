import Link from "next/link";

function Typeprod({ typeprods }) {
  return (
    <div className="row">
      {typeprods.map((typeprod) => (
        <article className="col-xl-3 col-lg-4 col-md-6 text-center hover-up animated">
          <div className="post-thumb">
            <Link
              href={`/p/${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}
              as={`/p${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}
            >
              <a>
                <img
                  src={
                    typeprod["attributes"]["image"]["data"]
                      ? `${typeprod["attributes"]["image"]["data"]["attributes"]["url"]}`
                      : "/assets/imgs/theme/image_blanche.png"
                  }
                  alt=""
                  className="border-radius-15"
                />
              </a>
            </Link>
          </div>
          <div className="entry-content-2">
            <h4 className="post-title">
              <Link
                href={`/p/${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}
                as={`/p${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}
              >
                <a>{typeprod["attributes"]["LIB"]}</a>
              </Link>
            </h4>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Typeprod;

import Link from "next/link";

function category({ category, translate }) {
  return (
    <article className="mb-50 col-lg-4 col-md-6 col-sm-6 col-12 col-xl-3 text-center hover-up animated">
      <div className="post-thumb">
        <Link
          href={`/c/${category["id"]}/${category["attributes"]["slug"]}`}
          as={`/c${category["id"]}/${category["attributes"]["slug"]}`}
        >
          <img
            className="border-radius-15"
            style={{ height: "250px" }}
            src={
              category["attributes"]["image"]["data"]
                ? `${category["attributes"]["image"]["data"]["attributes"]["url"]}`
                : "/assets/imgs/theme/image_blanche.png"
            }
            alt=""
          />
        </Link>
      </div>
      <div className="entry-content-2">
        <h3 className="post-title mb-10">
          <Link
            href={`/c/${category["id"]}/${category["attributes"]["slug"]}`}
            as={`/c${category["id"]}/${category["attributes"]["slug"]}`}
          >
            <a>{category["attributes"]["LIB"]}</a>
          </Link>
        </h3>
        {category["attributes"]["typeprods"] && (
          <>
            <ul className="mb-10">
              {category["attributes"]["typeprods"]["data"].map(
                (typeprod, index) =>
                  index < 4 && (
                    <Link
                      key={typeprod["id"]}
                      href={`/p/${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}
                      as={`/p${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}
                    >
                      <li>
                        {index + 1 + " - " + typeprod["attributes"]["LIB"]}
                      </li>
                    </Link>
                  )
              )}
            </ul>
            <div>
              <Link
                href={`/c/${category["id"]}/${category["attributes"]["slug"]}`}
                as={`/c${category["id"]}/${category["attributes"]["slug"]}`}
              >
                <a aria-label="Add To Cart" className="btn">
                  {translate("Tous les produits")}
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default category;

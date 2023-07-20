import Link from "next/link";

function univers({ univers }) {
  console.log(univers);
  return (
    <article className="col-xl-3 col-lg-4 col-md-6 text-center hover-up animated">
      <div className="post-thumb">
        <Link
          href={`/u/${univers["id"]}/${univers["attributes"]["slug"]}`}
          as={`/u${univers["id"]}/${univers["attributes"]["slug"]}`}
        >
          <a>
            <img
              src={
                univers["attributes"]["image"]["data"]
                  ? `${univers["attributes"]["image"]["data"]["attributes"]["url"]}`
                  : "/assets/imgs/theme/image_blanche.png"
              }
              alt=""
              className="border-radius-15"
            />
          </a>
        </Link>
      </div>
      <div className="entry-content-2">
        <h4 className="post-title mb-10">
          <Link
            href={`/u/${univers["id"]}/${univers["attributes"]["slug"]}`}
            as={`/u${univers["id"]}/${univers["attributes"]["slug"]}`}
          >
            <a>{univers["attributes"]["LIB"]}</a>
          </Link>
        </h4>
      </div>
    </article>
  );
}

export default univers;

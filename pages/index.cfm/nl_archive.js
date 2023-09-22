import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function NlArchive() {
  return (
    <div
      className="container page-content"
      style={{ height: "100px", marginTop: "100px", marginLeft: "200px" }}
    >
      <h1>Archives</h1>
    </div>
  );
}

export default NlArchive;

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context["locale"], [])),
    },
  };
}

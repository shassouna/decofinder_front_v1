// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function Contacts() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(14);

  // Translations
  const { t: translate } = useTranslation("contacts");
  /*---------------------------------------------------Hooks end---------------------------------------------------*/

  return (
    <div className="container page-content pt-40 pb-40">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12 col-12">
          <div className="dashboard-menu">
            <LeftSideBar
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              translate={translate}
            />
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
          <div className="mb-20">
            <h1>{translate("CONTACTS")}</h1>
          </div>
          <div className="card-header mb-50">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <p>
                  <span>&#9742; </span>
                  {translate("Tel")}
                </p>
                <p>{translate("Fax")}</p>
                <p>{translate("coût d'un")}</p>
                <p>{translate("du lundi")}</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <span style={{ fontSize: "20px" }}>&#9993; </span>
                contact@decofinder.com
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <span style={{ fontSize: "20px" }}>&#xf2bc;</span>
                17 rue Chartran 92200 Neuilly sur Seine France
              </div>
            </div>
          </div>
          <div className="text-center" style={{ fontSize: "25px" }}>
            {translate("Soumettez-nous")}
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
          {<RightSideBar />}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context["locale"], [
        "contacts",
        "home",
      ])),
    },
  };
}

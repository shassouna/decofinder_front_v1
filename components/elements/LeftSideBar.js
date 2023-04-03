import Link from "next/link";

function LeftSideBar({ activeIndex, setActiveIndex, translate }) {
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  return (
    <ul className="nav flex-column" role="tablist">
      <li className="nav-item">
        <Link href="/index.cfm/statique/presentation">
          <a
            className={activeIndex === 1 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(1)}
          >
            {translate("À propos")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/utile_exposant">
          <a
            className={activeIndex === 2 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(2)}
          >
            {translate("Utile pour l'exposant")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/utile_acheteur">
          <a
            className={activeIndex === 3 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(3)}
          >
            {translate("Utile pour l'internaute")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/revuedepresse">
          <a
            className={activeIndex === 4 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(4)}
          >
            {translate("La presse et le web en parlent")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/testimoniaux_exposants">
          <a
            className={activeIndex === 5 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(5)}
          >
            {translate("Témoignages Exposants")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/testimoniaux_acheteurs">
          <a
            className={activeIndex === 6 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(6)}
          >
            {translate("Témoignages Acheteurs")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <a
          href="/assets/pdf/ow.pdf"
          className={activeIndex === 7 ? "nav-link active" : "nav-link"}
          onClick={() => handleOnClick(7)}
        >
          {translate("Sondage OpinionWay")}
        </a>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/audience">
          <a
            className={activeIndex === 8 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(8)}
          >
            {translate("Audience et visitorat")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/recrutement">
          <a
            className={activeIndex === 9 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(9)}
          >
            {translate("Recrutement")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/conditions_generales_de_vente">
          <a
            className={activeIndex === 10 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(10)}
          >
            {translate("Conditions générales de vente")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/faq_acheteur">
          <a
            className={activeIndex === 11 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(11)}
          >
            {translate("FAQ Acheteur")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/faq_exposant">
          <a
            className={activeIndex === 12 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(12)}
          >
            {translate("FAQ Exposant")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/qui_sommes_nous">
          <a
            className={activeIndex === 13 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(13)}
          >
            {translate("L'équipe")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/contacts">
          <a
            className={activeIndex === 14 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(14)}
          >
            {translate("Contacts")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/mentions_legales">
          <a
            className={activeIndex === 15 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(15)}
          >
            {translate("Mentions légales")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/informations_cookies">
          <a
            className={activeIndex === 16 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(16)}
          >
            {translate("Informations Cookies")}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/index.cfm/statique/politique_confidentialite">
          <a
            className={activeIndex === 17 ? "nav-link active" : "nav-link"}
            onClick={() => handleOnClick(17)}
          >
            {translate("Politique de confidentialité")}
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default LeftSideBar;

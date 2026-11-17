export function LogoMedRef({ sousTitre = false }) {
  return (
    <span className="logo-medref">
      <img className="logo-medref-image" src="/images/medref-wordmark.png" alt="" />
      <span className="logo-medref-details">
        <span className="logo-medref-rdc">RDC</span>
        {sousTitre && <small className="logo-medref-subtitle">Référence clinique</small>}
      </span>
    </span>
  );
}

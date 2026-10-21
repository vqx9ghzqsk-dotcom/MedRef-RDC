/**
 * Date d'un champ « AAAA-MM-JJ » lue en heure locale : `new Date('2026-10-20')` est minuit UTC,
 * ce qui affiche la veille dans les fuseaux à l'ouest de Greenwich. Les autres formats
 * (date et heure) sont lus tels quels.
 */
export function dateLocale(d) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(d ?? ''));
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : new Date(d);
}

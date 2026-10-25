export const clinic = {
  name: 'Almen Lægeklinik Skælskør',
  street: 'Gammelgade 10',
  zip: '4230',
  city: 'Skælskør',
  phone: '69 16 14 33',
  phoneHref: 'tel:+4569161433',
  email: 'kontakt@laegeskaelskor.dk',
  url: 'https://laegeskaelskor.dk',
  laegevejen: 'https://www.laegevejen.dk/Login',
  laegevejenRegister: 'https://www.lægevejen.dk/Login/OpretBrugerUdenNemId',
  hours: [
    { day: 'Mandag', open: '8:00–16:00', book: '8:00–12:00', phone: '8:00–12:00' },
    { day: 'Tirsdag', open: '8:00–16:00', book: '8:00–12:00', phone: '8:00–12:00' },
    { day: 'Onsdag', open: '8:00–16:00', book: '8:00–12:00', phone: '8:00–12:00' },
    { day: 'Torsdag', open: '8:00–16:00', book: '8:00–12:00', phone: '8:00–12:00' },
    { day: 'Fredag', open: '8:00–16:00', book: '8:00–12:00', phone: '8:00–12:00' },
    { day: 'Lørdag', open: 'Lukket', book: 'Lukket', phone: 'Lukket', closed: true },
    { day: 'Søndag', open: 'Lukket', book: 'Lukket', phone: 'Lukket', closed: true },
  ],
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'LocalBusiness', 'Organization'],
  name: 'Almen Lægeklinik Skælskør',
  medicalSpecialty: 'General',
  url: 'https://laegeskaelskor.dk',
  telephone: '+45 69 16 14 33',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gammelgade 10',
    postalCode: '4230',
    addressLocality: 'Skælskør',
    addressCountry: 'DK',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '16:00' },
  ],
  priceRange: 'Gratis (grupp 1/2 via det offentlige system)',
};

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: 'https://laegeskaelskor.dk' + it.path,
    })),
  };
}

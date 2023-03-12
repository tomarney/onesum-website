export const CONTACT_DETAILS = {
	email: 'hello@onesum.uk'
}

export const SITE = {
  title: 'OneSum',
  description: 'OneSum web services.',
  defaultLanguage: 'en_GB',
  navItems: [
    {
      "displayText": "Examples",
      "url": "/examples",
      "hoverText": "",
      "hide": false
    },
    {
      "displayText": "Contact Us",
      "url": `mailto:${CONTACT_DETAILS.email}`,
      "hoverText": "",
      "hide": false
    }
  ]
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://onesum.uk/img/assets/social-cover-default.png',
    alt:'OneSum: Bespoke websites',
  },
};

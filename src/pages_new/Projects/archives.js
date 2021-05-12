const archives = [
  {
    client: {
      fr: 'ENSCI',
      en: 'ENSCI'
    },
    label: {
      fr: 'Parcours Ã©tudiants',
      en: 'Parcours Ã©tudiants'
    },
    category: {
      fr: 'Conseil',
      en: 'Conseil'
    },
    year: '2019'
  },
  {
    client: {
      fr: 'GFI',
      en: 'GFI'
    },
    label: {
      fr: 'Cas d\'usages',
      en: 'Use cases'
    },
    category: {
      fr: 'Conseil',
      en: 'Conseil'
    },
    year: '2019'
  },
  {
    client: {
      fr: 'Proxem',
      en: 'Proxem'
    },
    label: {
      fr: 'Dashboard',
      en: 'Dashboard'
    },
    category: {
      fr: 'Outil',
      en: 'Outil'
    },
    year: '2019'
  },
  {
    client: {
      fr: 'Air Liquide',
      en: 'Air Liquide'
    },
    label: {
      fr: 'Ecosystems Explorer',
      en: 'Ecosystems Explorer'
    },
    category: {
      fr: 'Installation crÃ©ative',
      en: 'Creative installation'
    },
    year: '2018'
  },
  {
    client: {
      fr: 'EDF',
      en: 'EDF'
    },
    label: {
      fr: 'Prototype TAL',
      en: 'Prototype TAL'
    },
    category: {
      fr: 'Prototype',
      en: 'Prototype'
    },
    year: '2018'
  },
  {
    client: {
      fr: 'Twitter France',
      en: 'Twitter France'
    },
    label: {
      fr: 'Best of Tweets',
      en: 'Best of Tweets'
    },
    category: {
      fr: 'Installation crÃ©ative',
      en: 'Creative installation'
    },
    year: '2018'
  },
  {
    client: {
      fr: 'Le Parisien',
      en: 'Le Parisien'
    },
    label: {
      fr: 'Datahub',
      en: 'Datahub'
    },
    category: {
      fr: 'Conseil',
      en: 'Conseil'
    },
    year: '2017'
  },
  {
    client: {
      fr: 'Leboncoin',
      en: 'Leboncoin'
    },
    label: {
      fr: 'Dashboard Groupe',
      en: 'Dashboard Groupe'
    },
    category: {
      fr: 'Outil',
      en: 'Outil'
    },
    year: '2017'
  },
  {
    client: {
      fr: 'Outbrain',
      en: 'Outbrain'
    },
    label: {
      fr: 'Affinity index',
      en: 'Affinity index'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2017'
  },
  {
    client: {
      fr: 'Weber',
      en: 'Weber'
    },
    label: {
      fr: 'CX Journey Mapper',
      en: 'CX Journey Mapper'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2017'
  },
  {
    client: {
      fr: 'Havas',
      en: 'Havas'
    },
    label: {
      fr: 'ExpÃ©rience Blueprint',
      en: 'ExpÃ©rience Blueprint'
    },
    category: {
      fr: 'Outil',
      en: 'Outil'
    },
    year: '2016'
  },
  {
    client: {
      fr: 'Orange',
      en: 'Orange'
    },
    label: {
      fr: 'Twitter Map',
      en: 'Twitter Map'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2016'
  },
  {
    client: {
      fr: 'Proxem',
      en: 'Proxem'
    },
    label: {
      fr: 'Studio',
      en: 'Studio'
    },
    category: {
      fr: 'Conseil',
      en: 'Conseil'
    },
    year: '2016'
  },
  {
    client: {
      fr: 'Proxem',
      en: 'Proxem'
    },
    label: {
      fr: 'Challenge Pole Emploi',
      en: 'Challenge Pole Emploi'
    },
    category: {
      fr: 'Conseil',
      en: 'Conseil'
    },
    year: '2016'
  },
  {
    client: {
      fr: 'Twitter France',
      en: 'Twitter France'
    },
    label: {
      fr: 'Euro 2016',
      en: 'Euro 2016'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2016'
  },
  {
    client: {
      fr: 'Les Furets.com',
      en: 'Les Furets.com'
    },
    label: {
      fr: 'EnqueÌ‚te sur les deÌpenses contraintes',
      en: 'EnqueÌ‚te sur les deÌpenses contraintes'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2015'
  },
  {
    client: {
      fr: 'Canal+',
      en: 'Canal+'
    },
    label: {
      fr: 'Oscars',
      en: 'Oscars'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2014'
  },
  {
    client: {
      fr: 'EDF',
      en: 'EDF'
    },
    label: {
      fr: 'Estel',
      en: 'Estel'
    },
    category: {
      fr: 'Outil',
      en: 'Outil'
    },
    year: '2014'
  },
  {
    client: {
      fr: 'Orange CinÃ© SÃ©ries',
      en: 'Orange CinÃ© SÃ©ries'
    },
    label: {
      fr: 'GOT Saison 4',
      en: 'GOT Saison 4'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2014'
  },
  {
    client: {
      fr: 'Publicis',
      en: 'Publicis'
    },
    label: {
      fr: 'Coupe du monde',
      en: 'Coupe du monde'
    },
    category: {
      fr: 'Installation crÃ©ative',
      en: 'Creative installation'
    },
    year: '2014'
  },
  {
    client: {
      fr: 'SociÃ©tÃ© GÃ©nÃ©rale',
      en: 'SociÃ©tÃ© GÃ©nÃ©rale'
    },
    label: {
      fr: 'Crea Carte',
      en: 'Crea Carte'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2014'
  },
  {
    client: {
      fr: 'Twitter France',
      en: 'Twitter France'
    },
    label: {
      fr: 'Coupe du monde',
      en: 'Coupe du monde'
    },
    category: {
      fr: 'Installation crÃ©ative',
      en: 'Creative installation'
    },
    year: '2014'
  },
  {
    client: {
      fr: 'EDEC Risk',
      en: 'EDEC Risk'
    },
    label: {
      fr: 'Scientific Beta',
      en: 'Scientific Beta'
    },
    category: {
      fr: 'Outil',
      en: 'Outil'
    },
    year: '2013'
  },
  {
    client: {
      fr: 'Helixa',
      en: 'Helixa'
    },
    label: {
      fr: 'Nexity - Mon quartier',
      en: 'Nexity - Mon quartier'
    },
    category: {
      fr: 'Prototype',
      en: 'Prototype'
    },
    year: '2013'
  },
  {
    client: {
      fr: 'Intersport',
      en: 'Intersport'
    },
    label: {
      fr: 'Avec qui voulez-vous skier\u00A0?',
      en: 'Avec qui voulez-vous skier\u00A0?'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2013'
  },
  {
    client: {
      fr: 'La Poste',
      en: 'La Poste'
    },
    label: {
      fr: 'Les Ateliers',
      en: 'Les Ateliers'
    },
    category: {
      fr: 'Prototype',
      en: 'Prototype'
    },
    year: '2013'
  },
  {
    client: {
      fr: 'Arte',
      en: 'Arte'
    },
    label: {
      fr: 'I Love Democracy',
      en: 'I Love Democracy'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2012'
  },
  {
    client: {
      fr: 'Google France',
      en: 'Google France'
    },
    label: {
      fr: 'Concours de journalisme de donnÃ©es',
      en: 'Concours de journalisme de donnÃ©es'
    },
    category: {
      fr: 'Conseil',
      en: 'Conseil'
    },
    year: '2012'
  },
  {
    client: {
      fr: 'HAS',
      en: 'HAS'
    },
    label: {
      fr: 'Scope SantÃ©',
      en: 'Scope SantÃ©'
    },
    category: {
      fr: 'Plateforme opendata',
      en: 'Opendata plateform'
    },
    year: '2012'
  },
  {
    client: {
      fr: 'Rennes MÃ©tropole',
      en: 'Rennes MÃ©tropole'
    },
    url: {
      fr: 'https://dataviz.rennesmetropole.fr/quisommesnous/index-fr.php',
      en: 'https://dataviz.rennesmetropole.fr/quisommesnous/index-fr.php'
    },
    label: {
      fr: 'Qui sommes nous\u00A0?',
      en: 'Qui sommes nous\u00A0?'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2012'
  },
  {
    client: {
      fr: 'Sacem',
      en: 'Sacem'
    },
    label: {
      fr: 'RÃ©partition des droits',
      en: 'RÃ©partition des droits'
    },
    category: {
      fr: 'Application',
      en: 'Application'
    },
    year: '2012'
  }
]

export default archives

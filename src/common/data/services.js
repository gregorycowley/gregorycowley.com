// videos
import videoProductDesign from './assets/product_design.mp4'
import videoPrototyping from './assets/prototyping.mp4'
import videoDataStorytelling from './assets/data_story_telling.mp4'
import videoDecisionTools from './assets/decision_tools.mp4'
import videoDataDrivenStrategy from './assets/data_driven_strategy.mp4'
import videoUserResearch from './assets/recherches_utilisateur.mp4'

const services = {
  userResearch: {
    id: 'user-research',
    video: videoUserResearch,
    projectSlug: 'metrolab-odsee',
    label: {
      fr: 'Recherche utilisateur',
      en: 'User research'
    }
  },
  productDesign: {
    id: 'product-design',
    video: videoProductDesign,
    projectSlug: 'bloom-outil-saas',
    label: {
      fr: 'Design de produit',
      en: 'Product design'
    }
  },
  prototyping: {
    id: 'prototyping',
    video: videoPrototyping,
    projectSlug: 'michelin-ddi',
    label: {
      fr: 'Prototypage',
      en: 'Prototyping'
    }
  },
  dataStorytelling: {
    id: 'data-storytelling',
    video: videoDataStorytelling,
    projectSlug: 'edf-maquette-pedagogique',
    label: {
      fr: 'Storytelling des donnÃ©es',
      en: 'Data storytelling'
    }
  },
  decisionTools: {
    id: 'decision-tools',
    video: videoDecisionTools,
    projectSlug: 'sony-romi',
    label: {
      fr: 'Outils d\'aide Ã  la dÃ©cision',
      en: 'Decision making tools'
    }
  },
  dataDrivenStrategy: {
    id: 'data-driven-strategy',
    video: videoDataDrivenStrategy,
    projectSlug: 'swisscom-mobility-insights',
    label: {
      fr: 'StratÃ©gie data-driven',
      en: 'Data driven strategy'
    }
  }
}

export default services

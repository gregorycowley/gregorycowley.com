import React from "react";
import { Layout, Card } from "../components/";

class Engineer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  makeCards(projects) {
    // console.log("projects", projects.length);
    return projects.map((item, key) => {
       return <Card key={key} {...item} style="project" />
      }
    );
  }

  render() {
    return (
      <Layout
        siteTitle={this.props.title}
        siteDescription={this.props.description}
      >
        <div className="project-grid container">
          {this.makeCards(this.props.projects)}
        </div>
      </Layout>
    );
  }
}

export default Engineer;

Engineer.getInitialProps = async function() {
  const metadata = await import(`../data/config.json`);
  let projects = [];

  projects.push(await import("../content/projects/artist/transcinema.md"));
  projects.push(await import("../content/projects/artist/california-college-of-the-arts.md"));
  projects.push(await import("../content/projects/artist/chronopolis.md"));
  projects.push(await import("../content/projects/artist/cncmachine.md"));
  projects.push(await import("../content/projects/dr-tingleton.md"));
  projects.push(await import("../content/projects/artist/mpps.md"));
  projects.push(await import("../content/projects/artist/rx-gallery.md"));
  projects.push(await import("../content/projects/artist/thetestproject.md"));
  projects.push(await import("../content/projects/artist/three-minute-picture-show.md"));

  return {
    ...metadata,
    projects
  };
};


// /content/projects/capacitor.md
// /content/projects/countless.md
// /content/projects/blurb.md



// /content/projects/0_selectprojects.md
// /content/projects/11-inc-thedoctorscompany.md
// /content/projects/300feetout-shantimaurice.md
// /content/projects/3feetofftheground.md
// /content/projects/allergybookcompany.md
// /content/projects/Archive.zip
// /content/projects/audiofeast.md

// /content/projects/cks-apple-quicktime.md
// /content/projects/cks-appledesignportfolio.md
// /content/projects/cks-levis.md
// /content/projects/cks-mattel.md
// /content/projects/cks-nikealphaproject.md
// /content/projects/cks-quicktime.md
// /content/projects/cks-visa-rugby.md
// /content/projects/compass-lumenetix.md

// /content/projects/creativefocus.md
// /content/projects/dr-pepper-academyofcountrymusic.md
// /content/projects/dynamic-emc-splatter.md
// /content/projects/elixir-opes-advisors.md
// /content/projects/esetwantedsanta.md
// /content/projects/fine-design-stagsleapwinery.md
// /content/projects/fineartmuseums.md
// /content/projects/fitdeck.md
// /content/projects/flax-media-pbs-mediagallery.md
// /content/projects/fuseproject-briggo.md
// /content/projects/gilmourcraves.md
// /content/projects/gmotionstudios.md
// /content/projects/gregory-cowley-studios.md
// /content/projects/hong-kong.md
// /content/projects/ideo-chaseconcepts.md
// /content/projects/ideo-hp-timeline.md
// /content/projects/ideo-intel-zephyros.md
// /content/projects/ideo-intelinterfaces.md
// /content/projects/ideo-newyears.md
// /content/projects/ideo-thoughtless-acts.md
// /content/projects/intuit.md
// /content/projects/juicystock.md
// /content/projects/luminoxwatchwebsite.md
// /content/projects/lunafest.md
// /content/projects/macromedia.md
// /content/projects/mad_ibm_db2.md
// /content/projects/mad-ibm-db2.md
// /content/projects/motorola-chameleon.md
// /content/projects/odopod-hpadbanners.md
// /content/projects/odopod-intelpentium_3.md
// /content/projects/odopod-nikeskateboarding.md
// /content/projects/openwave.md
// /content/projects/photo-adobe.md
// /content/projects/photo-architect-magazine.md
// /content/projects/photo-kenwood.md
// /content/projects/photo-michael-chiarello.md
// /content/projects/photo-ogilvy-one.md
// /content/projects/photo-overland-equipment.md
// /content/projects/photo-selectquote.md
// /content/projects/photo-sequoia.md
// /content/projects/photo-sfmoma.md
// /content/projects/photo-skanska.md
// /content/projects/photo-smartrise.md
// /content/projects/photo-snibbe-interactive.md
// /content/projects/photo-stochasticlabs.md
// /content/projects/photo-superlawyers.md
// /content/projects/photo-the-sak.md
// /content/projects/photo-university-games.md
// /content/projects/photo-usa-today.md
// /content/projects/photoworks.md
// /content/projects/punchcut-cingulardeveloperstool.md
// /content/projects/punchcut-dwellvisualizer.md
// /content/projects/raspberry_pis.md
// /content/projects/razorfish-hondausa.md
// /content/projects/razorfish-microsoftfrontpage.md
// /content/projects/ricoh-labs-logo.md
// /content/projects/rocketlawyer.md
// /content/projects/safariudemo.md
// /content/projects/simplestar.md
// /content/projects/spcontrols.md

// /content/projects/voicebox.md

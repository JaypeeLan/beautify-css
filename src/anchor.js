/**
 * Loads Scripts and libraries that are used in the core(anchor)
 */
function AnchorMixer() {
  const dependenciesArray = [
    {
      name: "jqueryScript",
      src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
      type: "script",
    },
    {
      name: "bootstrapScript",
      src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js",
      type: "script",
    },
    {
      name: "cssLink",
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
      type: "stylesheet",
    },
  ];

  function createScripts(depArray) {
    depArray.forEach((dependency) => {
      if (dependency.type === "script") {
        // script name
        let scriptName = dependency.name;
        // script source/URL
        let scriptSrc = dependency.src;
        //   =======================================//
        scriptName = document.createElement("script");
        // script src attribute
        scriptName.src = scriptSrc;
        scriptName.async = true;
        document.head.appendChild(scriptName);
        // ======================================//
      } else if (dependency.type === "stylesheet") {
        // style sheet name
        let styleName = dependency.name;
        // style sheet source/URL
        let styleSrc = dependency.src;

        styleName = document.createElement("link");
        styleName.rel = "stylesheet";
        styleName.href = styleSrc;
        document.head.appendChild(styleName);
      } else console.log("please add a script");
    });
  }

  createScripts(dependenciesArray);

  this.load_dependencies = () => {
    return new Promise((resolve, reject) => {
      intervalObject = setTimeout(() => {
        if (
          typeof jQuery != undefined &&
          typeof $ != undefined &&
          typeof bootstrap != "undefined"
        ) {
          resolve({
            jQuery: jQuery,
            bootstrap: bootstrap,
          });
        } else {
          dependencies = this.load_dependencies();
          resolve(dependencies);
        }
      }, 100);
    });
  };

  //initialize the app
  this.initializeAnchor = async (dependencies) => {
    dependencies = await dependencies;
  };
}

module.exports = AnchorMixer;

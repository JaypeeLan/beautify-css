/**
 * Loads Scripts and libraries that are used in the core(anchor)
 */
function AnchorMixer() {
  const dependenciesArray = [
    {
      name: "axiosScript",
      src: "https://unpkg.com/axios@0.25.0/dist/axios.min.js",
    },
    {
      name: "jqueryScript",
      src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
    },
    {
      name: "jqueryScript",
      src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
    },
    {
      name: "bootstrapScript",
      src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js",
    },
  ];

  function createScripts(depArray) {
    depArray.forEach((dependency) => {
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
    });
  }

  createScripts(dependenciesArray);

  // // - Load the Axios Library
  // const axiosScript = document.createElement("script");
  // axiosScript.src = "https://unpkg.com/axios@0.25.0/dist/axios.min.js";
  // axiosScript.async = true;
  // document.head.appendChild(axiosScript);

  // // - Load the Cookie.js library for example
  // const cookieScript = document.createElement("script");
  // cookieScript.src =
  //   "https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js";
  // cookieScript.async = true;
  // document.head.appendChild(cookieScript);

  this.load_dependencies = () => {
    return new Promise((resolve, reject) => {
      intervalObject = setTimeout(() => {
        if (
          typeof jQuery !== "undefined" &&
          typeof $ !== undefined &&
          typeof bootstrap !== "undefined"
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
  // wait for all dependencies to load
  this.initializeAnchor = async (dependencies) => {
    dependencies = await dependencies;
  };
}

module.exports = AnchorMixer;

// const anchor = (function (anchorMixer) {
//   anchorMixer.load_dependencies().then((dependencies) => {
//     //Now you can use the dependencies here..
//     console.log(dependencies);

//     //or you can call the library(ies) directly,
//     // e,g axios like this: console.log(axios)
//   });
// })(new AnchorMixer());

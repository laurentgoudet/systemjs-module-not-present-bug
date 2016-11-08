SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "systemjs-module-not-present-bug/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "systemjs-module-not-present-bug": {
      "main": "systemjs-module-not-present-bug.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "moment": "npm:moment@2.15.2",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "rome": "npm:rome@2.1.22"
  },
  packages: {
    "npm:rome@2.1.22": {
      "map": {
        "crossvent": "npm:crossvent@1.5.0",
        "moment": "npm:moment@2.15.2",
        "contra": "npm:contra@1.9.1",
        "bullseye": "npm:bullseye@1.4.6"
      }
    },
    "npm:crossvent@1.5.0": {
      "map": {
        "custom-event": "npm:custom-event@1.0.0"
      }
    },
    "npm:contra@1.9.1": {
      "map": {
        "atoa": "npm:atoa@1.0.0",
        "ticky": "npm:ticky@1.0.0"
      }
    },
    "npm:bullseye@1.4.6": {
      "map": {
        "crossvent": "npm:crossvent@1.5.5",
        "seleccion": "npm:seleccion@2.0.0",
        "sell": "npm:sell@1.0.0"
      }
    },
    "npm:crossvent@1.5.5": {
      "map": {
        "custom-event": "npm:custom-event@1.0.1"
      }
    }
  }
});

{
  "plugins": [
    ["transform-imports", {
      "react-bootstrap": {
        "transform": "react-bootstrap/lib/${member}",
        "preventFullImport": true
      },
      "lodash": {
        "transform": "lodash/${member}",
        "preventFullImport": true
      }
    }]
  ]
}
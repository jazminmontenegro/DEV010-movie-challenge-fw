module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "plugin:react/recommended",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    'indent': ['error', 2], // Define la cantidad de espacios para la sangría
    //'semi': ['error', 'never'], // Evita el uso de punto y coma al final de las sentencias
    // 'singleQuote': ['error', 'always'], // Usa comillas simples en lugar de dobles
    "react/prop-types": "off"
  }
}

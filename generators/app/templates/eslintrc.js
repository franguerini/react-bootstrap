module.exports = {
  extends: ['wolox-react'<% if (flow) { %>, 'plugin:flowtype/recommended'<% } %>]<% if (flow) { %>,  
  plugins: ['flowtype']<% } %><% if (jest) { %>,
  env: {
    jest: true
  }<% } %>
};

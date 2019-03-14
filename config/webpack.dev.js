module.exports = {
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundle.js'
  },
  devServer: {
    historyApiFallback: true
  }
};


// https://tylermcginnis.com/react-router-cannot-get-url-refresh/
// https://serverless-stack.com/chapters/environments-in-create-react-app.html

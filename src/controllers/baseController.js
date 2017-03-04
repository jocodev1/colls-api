module.exports = {
  /**
    * Default endpoint
    */
  index: function (req, res) {
      res.json({
          message: 'You have successfully built your new API!'
      })
  },

  /**
    * Default protected endpoint
    */
  protected: function (req, res) {
      res.json({
          message: 'You have successfully built your new API with JWT authentication!'
      })
  }
}

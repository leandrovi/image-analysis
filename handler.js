'use strict';

const aws = require('aws-sdk')

class Handler {
  constructor({ rekoService }) {
    this.rekoService = rekoService
  }

  async main(event) {
    try {
      return {
        statusCode: 200,
        body: 'Hello World'
      }
    } catch (error) {
      console.log('Error***', error,stack)

      return {
        statusCode: 500,
        body: 'Internal server error!s'
      }
    }
  }
}

// Factory
const reko = new aws.Rekognition()
const handler = new Handler({
  rekoService = reko
})

module.exports.main = handler.main.bind(handler)
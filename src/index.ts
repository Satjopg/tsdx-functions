import functions from 'firebase-functions';
import admin from 'firebase-admin'

const REGION = 'asia-northeast1'

admin.initializeApp()

export const test = functions.region(REGION).https.onRequest((_req, res) => {
  functions.logger.info("/test request")
  res.send('hello')
})

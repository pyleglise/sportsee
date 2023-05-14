/**
 * Configuration page
 * @file    File : config\
 * Manages the configuration settings for the application\
 * URL of the backend server\
 * Translations of the performances categories\
 * Demo userId\
 * Days of the week
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @module Config
 */

const server = 'http://localhost:3000'
const page = 'user'
const baseUrl = server + '/' + page + '/'
const userId = Math.random() < 0.5 ? 12 : 18
const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const frenchCategories = [
  'Cardio',
  'Energie',
  'Endurance',
  'Force',
  'Vitesse',
  'Intensité',
]

export { server, page, userId, frenchCategories, days }
export default baseUrl

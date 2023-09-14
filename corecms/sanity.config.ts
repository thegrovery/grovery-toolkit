import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { iconPicker } from 'sanity-plugin-icon-picker'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'



export default defineConfig({
  name: 'default',
  title: 'CoreRMS',

  projectId: 'rt73bnod',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    iconPicker(),
    unsplashImageAsset(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})

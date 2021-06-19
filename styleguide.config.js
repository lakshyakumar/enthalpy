const path = require('path')
const { version } = require('./package')

module.exports = {
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx')
    return `import { ${name.split('.')[0]} } from 'enthalpy';`
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/ThemeWrapper')
  },
  skipComponentsWithoutExample: true,
  version,
  propsParser: require('react-docgen-typescript').parse,
  ignore: [
    '**/assets/**',
    '**/data/**',
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/*.style.{js,jsx,ts,tsx}'
  ],
  theme: {
    color: {
      sidebarBackground: '#29022c',
      link: 'white',
      linkHover: 'grey'
    },
    fontSize: {
      base: 15,
      text: 16,
      small: 13,
      h1: 24,
      h2: 18,
      h3: 16,
      h4: 16,
      h5: 16,
      h6: 16
    }
  },
  printServerInstructions(config) {
    // eslint-disable-next-line no-console
    console.log(
      `View your styleguide at: http://${config.serverHost}:${config.serverPort}`
    )
  },
  sections: [
    {
      name: 'Introduction',
      content: './docs/introduction.md'
    },
    {
      name: 'Atoms',
      components: 'src/components/Atoms/**/*.md',
      sectionDepth: 2
    },
    {
      name: 'Sections',
      components: 'src/components/Molecules/sections/**/*.md',
      sectionDepth: 2
    }
  ]
}

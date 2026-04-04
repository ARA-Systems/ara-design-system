import type { Preview } from '@storybook/react'
import '../src/styles/globals.css'

const THEMES: Record<string, string> = {
  'Green Light': '',
  'Green Dark':  'dark',
  'Blue Light':  'theme-blue',
  'Blue Dark':   'theme-blue dark',
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'ARA Theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: Object.keys(THEMES).map(name => ({ value: name, title: name })),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'Green Light',
  },
  decorators: [
    (Story, context) => {
      const themeClass = THEMES[context.globals.theme as string] ?? ''
      document.documentElement.className = themeClass
      return (
        <div style={{
          minHeight: '100vh',
          padding: '2rem',
          backgroundColor: 'var(--c-bg)',
          color: 'var(--c-fg)',
          fontFamily: 'var(--font-sans)',
          transition: 'background-color 0.2s, color 0.2s',
        }}>
          <Story />
        </div>
      )
    },
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
}

export default preview

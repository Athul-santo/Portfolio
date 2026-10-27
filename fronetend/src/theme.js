export const THEMES = [
  { name: 'forest', label: 'Forest' },
  { name: 'athuldark', label: 'Midnight' },
  { name: 'athullight', label: 'Daylight' },
  { name: 'cyberpunk', label: 'Cyberpunk' },
  { name: 'dracula', label: 'Dracula' },
  { name: 'nord', label: 'Nord' },
  { name: 'retro', label: 'Retro' },
  { name: 'synthwave', label: 'Synthwave' },
]

export const DEFAULT_THEME = 'forest'
export const THEME_STORAGE_KEY = 'athul-theme'

export const getInitialTheme = () => {
  if (typeof document === 'undefined') return DEFAULT_THEME

  const current = document.documentElement.getAttribute('data-theme')
  return THEMES.some((theme) => theme.name === current)
    ? current
    : DEFAULT_THEME
}

export const initialTheme = getInitialTheme()

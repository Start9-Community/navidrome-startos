// Navidrome's web/API port — fixed by the upstream image (ND_PORT default), not user-configurable.
export const uiPort = 4533

// Read by dependent packages resolving our bridge address — don't rename without
// checking who imports it.
export const uiHostId = 'ui'

// Navidrome's web/API port — fixed by the upstream image (ND_PORT default), not user-configurable.
export const uiPort = 4533

// Read by dependent packages resolving our bridge address — don't rename without
// checking who imports it.
export const uiHostId = 'ui'

export const goDurationPattern = '^([0-9]+(s|m|h))+$'

// Go's time.ParseDuration overflows past math.MaxInt64 nanoseconds, i.e. 2562047h47m16s
// (9223372036 whole seconds). Keep the error message in settings.ts in step.
const MAX_GO_DURATION_SECONDS = 9223372036n

export function isValidGoDuration(value: string): boolean {
  if (!new RegExp(goDurationPattern).test(value)) return false

  const secondsPerUnit = { s: 1n, m: 60n, h: 3600n }
  let seconds = 0n
  for (const [, amount, unit] of value.matchAll(/([0-9]+)(s|m|h)/g)) {
    seconds +=
      BigInt(amount) * secondsPerUnit[unit as keyof typeof secondsPerUnit]
    if (seconds > MAX_GO_DURATION_SECONDS) return false
  }
  return true
}

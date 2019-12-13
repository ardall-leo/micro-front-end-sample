export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    )
  )
}

export function navbar(location) {
  return true
}

export function otherMicroApp(location) {
  return prefix(location, 'Account/NewFeature')
}

export function artemis(location) {
  return prefix(location, 'Account/List', 'Search')
}

export function cygnus(location) {
  return prefix(location, 'Account/BulkProvisioning')
}
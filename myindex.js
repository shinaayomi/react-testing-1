const getFullName = (fname, lname) => {
  return `${fname} ${lname}`
}

const actualFullName = getFullName('Bruce', 'Wayne')
const expectedFullName = 'BruceWayne'

if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`)
}

// Form Mezielabs
const sshKey =
  'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPH4sCFwIuQwndTaE1wyTyzVCs1hx1yCxWIvlLtIV+R9 shina@mezielabs.com'
const youtubeLink =
  'https://www.youtube.com/watch?v=T2sv8jXoP4s&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=1'
const webhook = 'https://www.youtube.com/watch?v=41NOoEz3Tzc'

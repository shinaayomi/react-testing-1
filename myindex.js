const getFullName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFullName = getFullName("Bruce", "Wayne");
const expectedFullName = "BruceWayne";

if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`);
}

// Form Mezielabs
const sshKey =
  "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPH4sCFwIuQwndTaE1wyTyzVCs1hx1yCxWIvlLtIV+R9 shina@mezielabs.com";
const youtubeLink =
  "https://www.youtube.com/watch?v=NEEtzkLn2Gc&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=8";

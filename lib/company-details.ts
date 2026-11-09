export const companyDetails = {
  name: "CBDC LTD",
  companyNumber: "17401540",
  legalDescription:
    "CBDC LTD, a private company limited by shares incorporated in England and Wales with company number 17401540",
  founderName: "Tristan Marsh",
  founderTitle: "Founder and Managing Member",
  email: "info@cbdc.ac",
  registeredOffice: "71-75 Shelton Street, Covent Garden, London, United Kingdom WC2H 9JQ",
} as const

export const companyContactDetails = [
  `${companyDetails.name}, Company number: ${companyDetails.companyNumber}.`,
  `Registered office: ${companyDetails.registeredOffice}.`,
  `Contact: ${companyDetails.email}.`,
].join(" ")

export const independentResourceDisclaimer =
  `${companyDetails.name} is an independent information resource. It is not affiliated with any central bank or government. Content is general information, not financial, investment or legal advice.`

export const nonIssuerDisclaimer =
  `${companyDetails.name} does not issue, sell, exchange, hold or transmit digital currency, cryptoassets or tokens, and does not handle client funds.`

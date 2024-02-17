const express = require("express");

const employment = {
  GOVERMENTSECTOREMPLOYEE: "govermentSectorEmployee",
  PRIVATESECTOREMPLOYEE: "privateSectorEmployee",
  SELFEMPLOYEE: "selfEmployee",
  INTERNATIONALORGANIZATIONEMPLOYEE: "internationalOrganizationEmployee",
  NGOEMPLOYEE: "ngoEmployee",
  DIPLOMAT: "diplomat",
  RELIGIOUSORGANIZATIONEMPLOYEE: "religiousOrganizationEmployee",
  HOUSEWIFE: "houseWife",
  RETIRED: "retired",
  UNEMPLOYED: "unemployed",
  STUDENT: "student",
};

const monthlyIncome = {
  BIRR: "2000 birr",
  BIRR: "25,001-50,000 birr",
  BIRR: "50,001-100,000 birr",
  BIRR: "100,001-150,000 birr",
  BIRR: "150,001-200,000 birr",
};

const productType = {
  WADIAHSAFEKEEPING: "WadiahSafekeeping",
  AMANAHCURRENT: "amanahCurrent",
  MUDARABAHSAVING: "mudarabahSaving",
  FYCACCOUNT: "fycAccount",
};

const wadiahSafekeeping = {
  ORDINARY: "ordinary",
  WOMEN: "women",
  YOUTH: "youth",
  TEENYOUTH: "teenYouth",
  EDUCATIONAL: "educational",
  ZAKAT: "zakat",
  NIKAH: "nikah",
  LABBAIK: "labbaik",
};

const amanahCurrent = {
  CHEQUE: "cheque",
  ECXACCOUNT: "ecxAccount",
};

const mudarabahSaving = {
  ORDINARY: "ordinary",
  WOMEN: "women",
  YOUTH: "youth",
  TEENYOUTH: "teenYouth",
  EDUCATIONAL: "educational",
  ZAKAT: "zakat",
  NIKAH: "nikah",
  LABBAIK: "labbaik",
};

const fycAccount = {
  AMANAHCHEQUE: "amanahCheque",
  WADIAHSAVING: "wadiahSaving",
  WADIAHDIASPORAHMORTGAGE: "wadiahDiasporahMortgage",
};

const accountType = {
  JOINTACCOUNT: "jointAccount",
  FIXED: "fixed",
  OTHER: "other",
};

const status = {
  ACTIVE: "active",
  DORMANT: "dormant",
};
const bankName = {
  NIBINTERNATIONALBANK: "Nib International Bank",
  ABAYBANK: "Abay Bank",
  ADDISINTERNATIONALBANK: "Addis International Bank",
  AWASHINTERNATIONALBANK: "Awash International Bank",
  BANKOFABYSSINIA: "Bank of Abyssinia",
  BERHANINTERNATIONALBANK: "Berhan International Bank",
  BUNNAINTERNATIONALBANK: "Bunna International Bank",
  COMMERCIALBANKOFETHIOPIA: "Commercial Bank of Ethiopia",
  COOPERATIVEBANKOFOROMIA: "Cooperative Bank of Oromia",
  DASHENBANK: "Dashen Bank",
  DEBUBGLOBALBANK: "Debub Global Bank",
  ENATBANK: "Enat Bank",
  LIONINTERNATIONALBANK: "Lion International Bank",
  OROMIAINTERNATIONALBANK: "Oromia International Bank",
  HIBRETBANK: "Hibret Bank",
  WEGAGENBANK: "Wegagen Bank",
  ZEMENBANK: "Zemen Bank",
  DEVELOPMENTBANKOFETHIOPIA: "Development Bank of Ethiopia",
  ZAMZAMBANK: "ZamZam Bank",
  HIJRABANK: "Hijra Bank",
  SIINQEEBANK: "Siinqee Bank",
  SHABELLEBANK: "Shabelle Bank",
  AHADUBANK: "Ahadu Bank",
  GOHBETOCHBANKSC: "Goh Betoch Bank SC",
  TSEDEYBANK: "Tsedey Bank",
  TSEHAYBANK: "Tsehay Bank",
  NATIONALBANKOFTHIOPIA: "National Bank of Ethiopia",
};

const homeType = {
  RENTED: "rented",
  SELFOWNED: "selfOwned",
  COMPANYPROVIDED: "companyProvided",
  MORTAGE: "mortage",
  LIVEWITHPARENTS: "liveWithParents",
  OTHER: "other",
};

const title = {
  MR: "mr.",
  MRS: "mrs.",
  MS: "ms.",
  MISS: "miss.",
  DR: "dr.",
  PROF: "prof.",
  ENGR: "engr.",
};
const maritalStatus = {
  MARRIED: "married",
  SINGLE: "single",
};

const means = {
  NATIONALIDCARD: "nationalIdCard",
  DRIVERLICENCE: "driver'sLicence",
  PASSPORT: "passPort",
};

const cardType = {
  DEBITCARD: "debitCard",
  CREDITCARD: "creditCard",
};

const electronicBankingPreference = {
  MOBILEBANKING: "mobileBanking",
  INTERNETBANKING: "internetBanking",
};

const transactionAlertPreference = {
  EMAIL: "email",
  SMS: "sms",
};

const chequeCategory = {
  LEAVES: "25leaves",
  LEAVES: "50leaves",
  LEAVES: "100leaves",
};

const titles = {
  MR: "mr.",
  MRS: "mrs.",
  MS: "ms.",
  MISS: "miss.",
  DR: "dr.",
  PROF: "prof.",
  ENGR: "engr.",
};

const gender = {
  MALE: "male",
  FEMALE: "female",
};

const hear = {
  TVADVERTISEMENT: "TV Advertisement",
  NEWSPAPERADVERTISEMENT: "Newspaper Advertisement",
  CUSTOMERREFERRAL: "Customer Referral",
  RADIOADVERTISEMENT: "Radio Advertisement",
  CUSTOMERRELATIONSHIPPERSONNEL: "Customer relationship personnel",
};

module.exports = {
  monthlyIncome,
  employment,
  productType,
  wadiahSafekeeping,
  amanahCurrent,
  mudarabahSaving,
  fycAccount,
  accountType,
  status,
  bankName,
  homeType,
  title,
  maritalStatus,
  means,
  cardType,
  electronicBankingPreference,
  transactionAlertPreference,
  chequeCategory,
  titles,
  gender,
  hear,
};

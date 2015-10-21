var filter_data = {
    "_id": "df906bde6d2bb9848a5f23b35c3cf7df",
    "appProperties": {},
    "applicationId": "51e82b0c-a0d8-4102-beb5-2a7b55555443",
    "assigneeIds": ["loanofficer@blendlabs.com"],
    "createdAt": "2015-10-13T21:13:49.163Z",
    "createdBy": "init-user@internal.blendlabs.com",
    "docs": {},
    "earliest": 1444770829161,
    "lastModifiedBy": "init-user@internal.blendlabs.com",
    "lastUpdatedAt": "2015-10-13T21:13:49.210Z",
    "latest": 1444770829161,
    "partyProgresses": [],
    "properties": {
        "BorrowerFirstName": {
            "display": "Borrower First Name",
            "type": "string"
        },
        "BorrowerLastName": {
            "display": "Borrower Last Name",
            "type": "string"
        },
        "BorrowerHomeAddress": {
            "display": "Borrower Home Address",
            "type": "string"
        },
        "BorrowerPhoneNumberHome": {
            "display": "Borrower Home Phone Number",
            "type": "string"
        },
        "BorrowerStreet": {
            "display": "Borrower Street Address",
            "type": "string"
        },
        "BorrowerState": {
            "display": "Borrower State",
            "type": "string"
        },
        "BorrowerPostalCode": {
            "display": "Borrower Postal Code",
            "type": "int"
        },
        "BorrowerCountry": {
            "display": "Borrower Country",
            "type": "string"
        },
        "PropertyStreet": {
            "display": "Property Address",
            "type": "string"
        },
        "PropertyValue": {
            "display": "Property Value",
            "type": "money"
        },
        "RequestedLoanAmount": {
            "display": "Requested Loan Amount",
            "type": "money"
        },
        "loanNumber": {
            "display": "Loan Number",
            "type": "string"
        },
        "DOCUMENT_CATEGORIES": {
            "type": "string"
        },
        "DOCUMENT_TYPES": {},
        "CATEGORIZED_DOCUMENTS": {}
    },
    "text": "120001",
    "type": ["f806527a4b4ecb554edad98174334a70", "85d9c084bb07662d8a2aaedc73535e37"],
    "processes": {
        "Getting Started_0": {
            "BORROWER": {
                "_context": {
                    "uid": "BORROWER",
                    "Borrower Type": "Borrower"
                },
                "properties": {
                    "Current Status": "Not Started"
                }
            }
        }
    },
    "application": {
        "_id": "51e82b0c-a0d8-4102-beb5-2a7b55555443",
        "amortizationType": "ADJUSTABLE_RATE",
        "applicationTakenType": "INTERNET_OR_EMAIL",
        "applicationType": "INDIVIDUAL",
        "appraisalValue": 500001,
        "borrowers": [{
            "type": "COBORROWER",
            "SSN": {
                "taxpayerIdentifierType": "SOCIAL_SECURITY_NUMBER",
                "taxpayerIdentifierValue": "123123123"
            },
            "name": {
                "firstName": "Sally",
                "middleName": "J",
                "lastName": "Borrower",
                "fullName": "Sally Borrower"
            },
            "phoneNumbers": [{
                "contactPointRole": "HOME",
                "phoneNumber": "4156666666",
                "_id": "1bc7ae9e-f160-43fd-bcbb-291cf26f6f26"
            }],
            "schoolingYears": 16,
            "maritalStatus": "MARRIED",
            "birthDate": -820281600,
            "email": "sally.j.borrower@blendlabs.com",
            "addresses": [{
                "type": "CURRENT",
                "address": {
                    "lineText": "100 Montgomery Street",
                    "cityName": "San Francisco",
                    "stateCode": "CA",
                    "zipCode": "94104",
                    "plusFourZipCode": "1234"
                },
                "residencyType": "OWN",
                "numYears": "3",
                "numMonths": "7",
                "_id": "4b5b2ab6-0f19-46ae-830a-b17b05361d1b"
            }, {
                "type": "MAILING",
                "address": {
                    "lineText": "1 P.O. Box",
                    "cityName": "San Francisco",
                    "stateCode": "CA",
                    "zipCode": "94104"
                },
                "residencyType": "OWN",
                "numYears": "3",
                "numMonths": "7",
                "_id": "f58d32b2-3e15-4bd8-9f2e-b0d4a172ed11"
            }],
            "incomes": [{
                "type": "SOCIAL_SECURITY",
                "amount": 1000,
                "_id": "31ea36c0-eec7-41d6-b02d-8141849af2c3"
            }],
            "declarations": {
                "general": [{
                    "type": "OUTSTANDING_JUDGMENTS",
                    "indicator": false,
                    "_id": "6b11dc8d-b87a-4877-8901-bfa4175a73f0"
                }, {
                    "type": "DECLARED_BANKRUPTCY_PAST_SEVEN_YEARS",
                    "indicator": false,
                    "_id": "cd57e501-6f2a-4771-b9ba-6dc6e02db09b"
                }, {
                    "type": "DIRECT_INDIRECT_FORECLOSED_PROPERTY_PAST_SEVEN_YEARS",
                    "indicator": false,
                    "_id": "cd49ff0d-2b3b-4d9f-999e-02e1de4b85bf"
                }, {
                    "type": "OBLIGATED_ON_LOAN_FORECLOSED_OR_DEED_IN_LIEU_OF_JUDGMENT",
                    "indicator": false,
                    "_id": "dee8c7a6-cf8c-4acc-abf6-ed0768c76822"
                }, {
                    "type": "PARTY_TO_LAWSUIT",
                    "indicator": false,
                    "_id": "8cf2ffe2-869b-46cd-8aa4-172319634158"
                }, {
                    "type": "DELINQUENCY_OR_DEFAULT",
                    "indicator": false,
                    "_id": "58b0687d-3670-4765-90ae-bffc9350309d"
                }, {
                    "type": "ALIMONY_CHILD_SUPPORT",
                    "indicator": false,
                    "_id": "2d975bee-95d4-43b9-a0a7-3b7fc6fa9884"
                }, {
                    "type": "BORROWED_DOWN_PAYMENT",
                    "indicator": false,
                    "_id": "f5af7672-f4c1-4591-a9cf-7ff67d190dde"
                }, {
                    "type": "CO_MAKER_ENDORSER_ON_NOTE",
                    "indicator": false,
                    "_id": "3030418e-1004-4c3e-a60b-321d0f0408ca"
                }, {
                    "type": "OCCUPY_AS_PRIMARY",
                    "indicator": true,
                    "_id": "32a624e4-8c71-4e17-a291-b65facc1c64d"
                }, {
                    "type": "OWNERSHIP_INTEREST_LAST_3_YEARS",
                    "indicator": true,
                    "_id": "500b918d-7195-4535-bb42-608f36bc2d07"
                }, {
                    "type": "US_CITIZEN",
                    "indicator": true,
                    "_id": "51c50e5a-7803-4efb-9c25-7092b27d0c00"
                }],
                "ownershipInterestType": "PRIMARY_RESIDENCE",
                "titleHeldType": "JOINTLY_WITH_SPOUSE"
            },
            "governmentMonitoring": {
                "participationAcknowledgement": true,
                "ethnicity": "NOT_HISPANIC_OR_LATINO",
                "sex": "FEMALE",
                "races": ["ASIAN"]
            },
            "_id": "65bcce24-14fe-43bb-b35d-a18425f65e7d",
            "totalIncome": 1000,
            "totalExpense": 0,
            "dependentCount": null
        }, {
            "SSN": {
                "taxpayerIdentifierType": "SOCIAL_SECURITY_NUMBER",
                "taxpayerIdentifierValue": "123456789"
            },
            "_id": "de257665-bdd0-4882-840f-43f9d8c2e66b",
            "addresses": [{
                "type": "CURRENT",
                "address": {
                    "lineText": "100 Montgomery Street",
                    "cityName": "San Francisco",
                    "stateCode": "CA",
                    "zipCode": "94104",
                    "plusFourZipCode": "1234"
                },
                "residencyType": "OWN",
                "numYears": "3",
                "numMonths": "7",
                "_id": "b13488f8-9106-4301-b07e-caeea7b29030"
            }, {
                "type": "MAILING",
                "address": {
                    "lineText": "1 P.O. Box",
                    "cityName": "San Francisco",
                    "stateCode": "CA",
                    "zipCode": "94104"
                },
                "residencyType": "OWN",
                "numYears": "3",
                "numMonths": "7",
                "_id": "77fb0bd9-b2dd-40e0-9b7b-2e7d7af75e25"
            }],
            "birthDate": 631152000,
            "declarations": {
                "general": [{
                    "type": "OUTSTANDING_JUDGMENTS",
                    "indicator": false,
                    "_id": "67bc4193-e358-47a5-bd79-2fcfdca97056"
                }, {
                    "type": "DECLARED_BANKRUPTCY_PAST_SEVEN_YEARS",
                    "indicator": false,
                    "_id": "467b6ef8-9138-4262-a12e-d44464212865"
                }, {
                    "type": "DIRECT_INDIRECT_FORECLOSED_PROPERTY_PAST_SEVEN_YEARS",
                    "indicator": false,
                    "_id": "25ba50fc-66ba-4bca-a169-575ecae88d13"
                }, {
                    "type": "OBLIGATED_ON_LOAN_FORECLOSED_OR_DEED_IN_LIEU_OF_JUDGMENT",
                    "indicator": false,
                    "_id": "cb2f3430-a02a-4242-bbe6-723606f16240"
                }, {
                    "type": "PARTY_TO_LAWSUIT",
                    "indicator": false,
                    "_id": "6e810ea0-0445-4737-b895-a01a7e7b6915"
                }, {
                    "type": "DELINQUENCY_OR_DEFAULT",
                    "indicator": false,
                    "_id": "b7cb9c00-7a26-440e-9b32-563513558028"
                }, {
                    "type": "ALIMONY_CHILD_SUPPORT",
                    "indicator": false,
                    "_id": "0e1c55c1-1f9f-4f3f-a5a9-7a8566baed1c"
                }, {
                    "type": "BORROWED_DOWN_PAYMENT",
                    "indicator": false,
                    "_id": "dc891072-8ea5-4b7f-bb96-ab4876a1aaee"
                }, {
                    "type": "CO_MAKER_ENDORSER_ON_NOTE",
                    "indicator": false,
                    "_id": "32defcf2-c1b7-4339-a394-2686a48cf742"
                }, {
                    "type": "OCCUPY_AS_PRIMARY",
                    "indicator": true,
                    "_id": "037694a0-f805-4203-b58f-f66d1da00bdb"
                }, {
                    "type": "OWNERSHIP_INTEREST_LAST_3_YEARS",
                    "indicator": true,
                    "_id": "bf29dc5c-73fd-4678-b053-46c472800b09"
                }, {
                    "type": "US_CITIZEN",
                    "indicator": true,
                    "_id": "eec614fc-72e7-4cde-94a2-377f5a280804"
                }],
                "ownershipInterestType": "PRIMARY_RESIDENCE",
                "titleHeldType": "JOINTLY_WITH_SPOUSE"
            },
            "dependentAges": [],
            "dependentCount": 0,
            "email": "boris.j.borrower@blendlabs.com",
            "employers": [{
                "name": "Big Tech Company",
                "address": {
                    "lineText": "1277 Mission St",
                    "cityName": "San Francisco",
                    "stateCode": "CA",
                    "zipCode": "94114",
                    "plusFourZipCode": "1234"
                },
                "selfemployed": false,
                "yearsOnJob": "45.74",
                "yearsInProfession": 3,
                "title": "Data Scientist",
                "startDate": 1341100800,
                "_id": "9c67c26b-3ea5-4fbd-8b0e-3ac039aa0cdd"
            }],
            "financialInstitutions": [{
                "institutionName": "Wells Fargo",
                "address": {
                    "lineText": "420 Montgomery Street",
                    "cityName": "San Francisco",
                    "stateCode": "CA",
                    "zipCode": "94104"
                },
                "accounts": [{
                    "type": "CHECKING_ACCOUNT",
                    "value": 1000,
                    "accountNumber": "123456",
                    "description": "Checking",
                    "_id": "eaa9fb16-37d0-40fb-8ad3-c5e21709e9c6"
                }, {
                    "type": "SAVINGS_ACCOUNT",
                    "value": 10000,
                    "accountNumber": "7654321",
                    "description": "Savings",
                    "_id": "0509957b-527b-402a-9781-20b4ec4c895c"
                }, {
                    "type": "RETIREMENT_ACCOUNT",
                    "value": 100000,
                    "accountNumber": "7867856",
                    "description": "401(k)",
                    "_id": "34d14723-8b30-4618-b664-c39ab0fd6c04"
                }],
                "_id": "6ed6f887-768c-4d2e-a268-ed1afcadf98b"
            }, {
                "institutionName": "Fidelity Investments",
                "address": {
                    "lineText": "1234 Wall St",
                    "cityName": "New York",
                    "stateCode": "NY",
                    "zipCode": "01016"
                },
                "accounts": [{
                    "type": "BROKERAGE_ACCOUNT",
                    "value": 300000,
                    "accountNumber": "222222",
                    "description": "Brokerage Account",
                    "_id": "eeac9fb6-2a21-4092-87c4-ee491b3858ec"
                }],
                "_id": "0230fa38-fe0b-416b-a385-6a3a8c5c6e6f"
            }],
            "governmentMonitoring": {
                "participationAcknowledgement": true,
                "ethnicity": "NOT_HISPANIC_OR_LATINO",
                "sex": "MALE",
                "races": ["ASIAN"]
            },
            "housingExpensesPresent": {
                "firstMortgagePI": 2500,
                "hazardInsurance": 100,
                "realEstateTaxes": 1500
            },
            "housingExpensesProposed": {
                "firstMortgagePI": 1880.95,
                "otherFinancingPI": 300,
                "hazardInsurance": 100,
                "realEstateTaxes": 1500
            },
            "incomes": [{
                "type": "BASE",
                "amount": 5000,
                "_id": "d043d870-bf92-427f-9464-aa1f67073b91"
            }],
            "liabilities": [{
                "type": "REVOLVING",
                "institutionName": "Citibank",
                "address": {},
                "institutionAccountNumber": "1234",
                "monthlyPayment": 35,
                "monthsLeftToPay": 60,
                "unpaidBalance": 1700,
                "_id": "2a804a00-4735-4613-a5dc-f3bcee287634"
            }, {
                "type": "PERSONAL_LOAN",
                "institutionName": "Wells Fargo",
                "address": {},
                "institutionAccountNumber": "1234",
                "monthlyPayment": 35,
                "monthsLeftToPay": 34,
                "unpaidBalance": 4500,
                "_id": "15e07096-feee-4f28-9473-b45bab2ac767"
            }, {
                "type": "MORTGAGE_LOAN",
                "institutionName": "PNC Mortgage",
                "address": {},
                "institutionAccountNumber": "4444",
                "monthlyPayment": 2500,
                "monthsLeftToPay": 320,
                "unpaidBalance": 395000,
                "_id": "c20ef8d5-6681-4a75-a6a6-e578c44ac61a"
            }],
            "maritalStatus": "MARRIED",
            "name": {
                "firstName": "Boris",
                "middleName": "J",
                "lastName": "Borrower",
                "fullName": "Boris Borrower"
            },
            "ownedProperties": [{
                "dispositionType": "RETAIN_FOR_RENTAL",
                "type": "TOWNHOUSE",
                "presentMarketValue": 1500000,
                "mortgagesLiens": 395000,
                "mortgagePayment": 2500,
                "grossRentalIncome": 5000,
                "otherCosts": 1600,
                "isCurrentAddress": true,
                "address": {
                    "lineText": "100 Montgomery Street",
                    "cityName": "San Francisco",
                    "stateCode": "CA",
                    "zipCode": "94104",
                    "plusFourZipCode": "1234"
                },
                "_id": "e409de68-fe2f-4bec-8c6c-bf3da4a1fea3",
                "netRentalIncome": 900
            }],
            "phoneNumbers": [{
                "contactPointRole": "HOME",
                "phoneNumber": "4155555555",
                "_id": "2aac62a8-2f62-4057-980e-5e6bb5bf0464"
            }],
            "schoolingYears": 22,
            "topicId": "df906bde6d2bb9848a5f23b35c3cf7df",
            "type": "BORROWER",
            "totalIncome": 5000,
            "totalExpense": 0
        }],
        "closingCostsPaidBySeller": 0,
        "downPayments": [{
            "fundsType": "CHECKING_SAVINGS",
            "amount": 10000,
            "explanationOfSource": "ABC Realty",
            "_id": "5534e44d-081c-44d3-9f51-3d8b53c16bda"
        }],
        "estateHeldIn": "FEE_SIMPLE",
        "landValue": 0,
        "lastUpdated": {
            "timestamp": "2015-10-13T21:13:49.745Z",
            "userId": "system"
        },
        "loanAmortizationPeriodMonths": 360,
        "loanAmount": 400000,
        "loanIdentifiers": [{
            "loanIdentifierType": "LENDER_CASE",
            "loanIdentifier": "120001",
            "_id": "5f865018-fe7b-4311-89af-f2110662bb83"
        }, {
            "loanIdentifier": "DI-C01",
            "loanIdentifierType": "LENDER_CASE",
            "_id": "ced08e17-e7f2-47a0-982f-7d10e6278874"
        }],
        "loanOriginatorCompany": {
            "companyAddress": {
                "cityName": "San Francisco",
                "lineText": "1000 Park Street",
                "stateCode": "CA",
                "zipCode": "12345"
            },
            "companyName": "Test Loan Company"
        },
        "loanOriginatorName": "Loan McOfficer",
        "loanOriginatorPhone": 4154444444,
        "loanPurposeType": "PURCHASE",
        "mannerTitleHeld": "Husband and Wife as Joint Tenants",
        "mortgageType": "CONVENTIONAL",
        "noteRate": 3.875,
        "postSubmission": false,
        "propertyInfo": {
            "address": {
                "lineText": "1400 Mission St",
                "streetPrimaryNumberText": "1400",
                "streetName": "Mission St",
                "cityName": "San Francisco",
                "stateCode": "CA",
                "zipCode": "94104",
                "plusFourZipCode": "1234"
            },
            "propertyType": "SINGLE_FAMILY",
            "subjectPropertyType": "DETACHED",
            "financedUnitCount": 1,
            "propertyStructureBuiltYear": 1990,
            "_id": "55111ab7-cc91-48e9-bba7-5e4cfd1039bf"
        },
        "propertyUsageType": "PRIMARY_RESIDENCE",
        "purchasePrice": 500000,
        "status": {
            "description": "Submitting your mortgage application.",
            "name": "SUBMISSION",
            "text": "Getting Started"
        },
        "subordinateFinancing": 50000,
        "titleHeldNames": [{
            "fullName": "Boris Borrower",
            "_id": "c0fa89d5-847c-4d5a-80b2-b8990b89d8e7"
        }, {
            "fullName": "Sally Borrower",
            "_id": "b0f475b0-2a12-4afb-811f-5b9f022549ab"
        }],
        "topicId": "df906bde6d2bb9848a5f23b35c3cf7df",
        "totalEstimatedClosingCosts": 3000,
        "totalEstimatedPrepaidItems": 1000,
        "yearAcquired": 2005,
        "borrowersTotalIncome": 6000,
        "borrowersTotalExpense": 0,
        "LTV": 0.7999984000032,
        "DTI": 0
    },
    "assignees": [{
        "_id": "c412bf76-ec4b-40fb-afb2-2056055cb834",
        "email": "loanofficer@blendlabs.com",
        "fullName": "Loan McOfficer",
        "lender": {
            "phoneNumber": "8023770613",
            "phoneExtension": "1234",
            "nmlsId": "123"
        },
        "roleIds": ["208d45ffedb6405f8e6a23ba5f9195d9", "b066145744fb44798353bfa9695ffab6"],
        "roles": [{
            "name": "Loan Officer",
            "_id": "208d45ffedb6405f8e6a23ba5f9195d9"
        }, {
            "name": "Loan Processor",
            "_id": "b066145744fb44798353bfa9695ffab6"
        }]
    }],
    "asOfDate": null,
    "id": "df906bde6d2bb9848a5f23b35c3cf7df",
    "path": "/topics/df906bde6d2bb9848a5f23b35c3cf7df",
    "template": "loan"
}
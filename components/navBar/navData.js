export const navData = [
  {
    id: "au@81",
    itm: "HOME",
    url: "/",
    dropdown: false,
  },
  {
    id: "au@2_91",
    itm: "ABOUT US",
    url: "/about",
    dropdown: true, // Enable dropdown
    dropdown_itms: [
      {
        id: "about@01",
        dp_itm: "At a glance",
        url: "/at-a-glance",
      },
      // {
      //   id: "about@02",
      //   dp_itm: "About",
      //   url: "/about",
      // },
      {
        id: "about@03",
        dp_itm: "board-of-directors",
        url: "/board-of-directors",
      },
      {
        id: "about@04",
        dp_itm: "Leadership",
        url: "/leadership",
      },
      {
        id: "about@05",
        dp_itm: "SHARI’AH SUPERVISORY COMMITTEE",
        url: "/shariah-supervisory-committee",
      },
    ],
  },
  {
    id: "au@2_92",
    itm: "SME",
    url: "/sme",
    dropdown: false,
  },
  {
    id: "au@201",
    itm: "RETAIL",
    url: "#",
    dropdown: true,
    dropdown_itms: [
      {
        id: "du@01",
        dp_itm: "shurokkha",
        url: "/shurokkha",
        sbu_dropdown: false,
        sub_items: [
          {
            id: "sub@01",
            sub_itm: "Account",
            url: "/account",
          },
          {
            id: "sub@02",
            sub_itm: "Account Details",
            url: "/account-details",
          },
        ],
      },
      {
        id: "du@02",
        dp_itm: "deposit Scheme",
        url: "/deposit-scheme",
      },
      // {
      //   id: "du@10",
      //   dp_itm: "savings Scheme",
      //   url: "/savings-scheme",
      // },
      
      {
        id: "sub@003",
        dp_itm: "Home Loans",
        url: "/home-loan",
      },
      {
        id: "sub@004",
        dp_itm: "Auto Loan",
        url: "/car-loan",
      },
      {
        id: "sub@005",
        dp_itm: "Personal Loan",
        url: "/personal-loan",
      },
      {
        id: "sub@006",
        dp_itm: "Rate Chart of deposit Products",
        target:"_blank",
        url: "/images/rate-chart-for-deposit-products.jpeg",
        
      },
      {
        id: "sub@007",
        dp_itm: "Rate Chart of Loan Products",
        target:"_blank",
        url: "/images/rate-chart-for-loan-products.jpeg",
        
      },
 
    ],
  },
  {
    id: "au@202",
    itm: "CORPORATE",
    url: "#",
    dropdown: true,
    dropdown_itms: [
     
    {
        id: "sub@001",
        dp_itm: "Corporate Loans",
        url: "/corporate-loan",
      },
      {
        id: "sub@002",
        dp_itm: "Structured Finance",
        url: "/structured-finance",
      },
     
    ],
  },
  {
    id: "au@208",
    itm: "INVESTOR RELATIONS",
    url: "#",
    dropdown: true,
    dropdown_itms: [
     
      {
        id: "du@03",
        dp_itm: "Financial & Annual Reports",
        url: "/financial-annual-reports",
      },
      {
        id: "du@4",
        dp_itm: "Reports of Directors",
        url: "report-of-directors",
      },
      {
        id: "du@5",
        dp_itm: "MI, PSI & NOTICES",
        url: "#",
      },
      {
        id: "du@6",
        dp_itm: "Shareholding Details",
        url: "/shareholding",
      },
     
      {
        id: "du@8",
        dp_itm: "Dividend",
        url: "dividend",
      }
      // {
      //   id: "du@9",
      //   dp_itm: "Other Regulatory Disclosures",
      //   url: "",
      // },
      // {
      //   id: "du@10",
      //   dp_itm: "IM/Prospectus",
      //   url: "",
      // },
      
      // {
      //   id: "du@03",
      //   dp_itm: "Loan",
      //   url: "#",
      //   sbu_dropdown: true,
      //   sub_items: [
      //     {
      //       id: "sub@001",
      //       sub_itm: "Business Loans",
      //       url: "/business-loan",
      //     },
      //     {
      //       id: "sub@002",
      //       sub_itm: "Educations Loans",
      //       url: "/educations-loan",
      //     },
      //     {
      //       id: "sub@003",
      //       sub_itm: "Home Loans",
      //       url: "/home-loan",
      //     },
      //     {
      //       id: "sub@004",
      //       sub_itm: "Car Loans",
      //       url: "/car-loan",
      //     },
      //     {
      //       id: "sub@005",
      //       sub_itm: "Personal Loans",
      //       url: "/personal-loan",
      //     },
      //   ],
      // },
      // {
      //   id: "du@04",
      //   dp_itm: "Card",
      //   url: "/card",
      // },
    ],
  },
  {
    id: "au@203",
    itm: "CAREERS",
    url: "/career",
    dropdown: false,
    dropdown_itms: [
      {
        id: "du@01",
        dp_itm: "Account",
        url: "#",
        sbu_dropdown: true,
        sub_items: [
          {
            id: "sub@01",
            sub_itm: "Account",
            url: "/account",
          },
          {
            id: "sub@02",
            sub_itm: "Account Details",
            url: "/account-details",
          },
        ],
      },
      {
        id: "du@02",
        dp_itm: "Product",
        url: "/product",
      },
      {
        id: "du@03",
        dp_itm: "Loan",
        url: "#",
        sbu_dropdown: true,
        sub_items: [
          {
            id: "sub@001",
            sub_itm: "Business Loans",
            url: "/business-loan",
          },
          {
            id: "sub@002",
            sub_itm: "Educations Loans",
            url: "/educations-loan",
          },
          {
            id: "sub@003",
            sub_itm: "Home Loan",
            url: "/home-loan",
          },
          {
            id: "sub@004",
            sub_itm: "Auto Loan",
            url: "/car-loan",
          },
          {
            id: "sub@005",
            sub_itm: "Personal Loans",
            url: "/personal-loan",
          },
        ],
      },
      {
        id: "du@04",
        dp_itm: "Card",
        url: "/card",
      },
    ],
  },
  {
    id: "au@203",
    itm: "SUSTAINABILITY",
    url: "#",
    dropdown: true,
    dropdown_itms: [
      {
        id: "du@054",
        dp_itm: "sustainable finance",
        url: "/sustainable-finance",
        sbu_dropdown: false,
        sub_items: [
          {
            id: "sub@01",
            sub_itm: "Account",
            url: "/account",
          },
          {
            id: "sub@02",
            sub_itm: "Account Details",
            url: "/account-details",
          },
        ],
      },
      {
        id: "du@02",
        dp_itm: "Alignment with SDG's",
        url: "/sdg",
      },
      {
        id: "au@2_92",
        itm: "Islamic",
        url: "https://www.bdfinance.org/",
        dropdown: false,
      },
      {
        id: "du@03",
        dp_itm: "CSR",
        url: "csr",
        sbu_dropdown: false,
        sub_items: [
          {
            id: "sub@001",
            sub_itm: "Business Loans",
            url: "/business-loan",
          },
          {
            id: "sub@002",
            sub_itm: "Educations Loans",
            url: "/educations-loan",
          },
          {
            id: "sub@003",
            sub_itm: "Home Loan",
            url: "/home-loan",
          },
          {
            id: "sub@004",
            sub_itm: "Auto Loan",
            url: "/car-loan",
          },
          {
            id: "sub@005",
            sub_itm: "Personal Loans",
            url: "/personal-loan",
          },
        ],
      },
      // {
      //   id: "du@04",
      //   dp_itm: "Card",
      //   url: "/card",
      // },
    ],
  },
  {
    id: "au@2_93",
    itm: "FINANCIAL LITERACY",
    url: "/financial-literacy",
    dropdown: false,
    
  },
  // {
  //   id: "au@2_92",
  //   itm: "ISLAMIC",
  //   url: "https://www.islamic.bdfinance.org/",
  //   dropdown: false,
    
  // },
];

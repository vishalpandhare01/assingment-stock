const CompanyData = [
  {
    id: 1,
    companyName: "TCS",
    location: "india",
  },
  {
    id: 2,
    companyName: "wipro",
    location: "india",
  },
  {
    id: 3,
    companyName: "infosys",
    location: "india",
  },
];

const CompanyAccount = [
  {
    id: 1,
    companyId: 1,
    account: "account 1 tcs",
    accountDetail: [
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28345345,
        "A/c Balance": "49343",
        "UTR/RRN": "40000",
        "A/c No /UPI": "AC0CF44RUY407QHU",
      },
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28345345,
        "A/c Balance": "49343",
        "UTR/RRN": "40000",
        "A/c No /UPI": "AC0CF44RUY407QHU",
      },
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28345345,
        "A/c Balance": "49343",
        "UTR/RRN": "40000",
        "A/c No /UPI": "AC0CF44RUY407QHU",
      },
    ],
  },
  {
    id: 2,
    companyId: 1,
    account: "account 2 tcs",
    accountDetail: [
      {
        Date: "07/04/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "23393",
        "UTR/RRN": "560000",
        "A/c No /UPI": "A34CF7RRUY407QHU",
      },
      {
        Date: "07/04/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "23393",
        "UTR/RRN": "560000",
        "A/c No /UPI": "A34CF7RRUY407QHU",
      },
      {
        Date: "07/04/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "23393",
        "UTR/RRN": "560000",
        "A/c No /UPI": "A34CF7RRUY407QHU",
      },
    ],
  },
  {
    id: 3,
    companyId: 2,
    account: "account 1 wipro",
    accountDetail: [
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "334393",
        "UTR/RRN": "5650000",
        "A/c No /UPI": "AC0CF7fdsUY407QHU",
      },
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "334393",
        "UTR/RRN": "5650000",
        "A/c No /UPI": "AC0CF7fdsUY407QHU",
      },
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "334393",
        "UTR/RRN": "5650000",
        "A/c No /UPI": "AC0CF7fdsUY407QHU",
      },
    ],
  },
  {
    id: 4,
    companyId: 2,
    account: "account 2 wipro",
    accountDetail: [
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "367393",
        "UTR/RRN": "8700000",
        "A/c No /UPI": "AC0CF7RRUY407QHU",
      },

      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "367393",
        "UTR/RRN": "8700000",
        "A/c No /UPI": "AC0CF7RRUY407QHU",
      },
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "367393",
        "UTR/RRN": "8700000",
        "A/c No /UPI": "AC0CF7RRUY407QHU",
      },
    ],
  },
  {
    id: 5,
    companyId: 3,
    account: "account 1 infosys",
    accountDetail: [
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 788828,
        "A/c Balance": "39393",
        "UTR/RRN": "4100000",
        "A/c No /UPI": "AC0CF7RRUY407QHU",
      },
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 909828,
        "A/c Balance": "39444393",
        "UTR/RRN": "4100000",
        "A/c No /UPI": "AC0CF7RRUY407QHU",
      },
    ]
  },
  {
    id: 6,
    companyId: 3,
    account: "account 2 infosys",
    accountDetail: [
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "39393",
        "UTR/RRN": "100000",
        "A/c No /UPI": "AC0CF7RRUY407QHU",
      },
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "39393",
        "UTR/RRN": "100000",
        "A/c No /UPI": "AC0CF7RRUY407QHU",
      },
      {
        Date: "07/05/2024 01:04 PM",
        Credit: 28,
        "A/c Balance": "39393",
        "UTR/RRN": "100000",
        "A/c No /UPI": "AC0CF7RRUY407QHU",
      },
    ],
  },
];

const initialSeries = [
  {
    name: "Apple",
    data: [150, 155, 160, 170, 165, 175, 180, 185, 190],
  },
  {
    name: "Microsoft",
    data: [200, 205, 210, 220, 215, 225, 230, 235, 240],
  },
  {
    name: "Google",
    data: [2500, 2525, 2550, 2575, 2600, 2625, 2650, 2675, 2700],
  },
  {
    name: "Amazon",
    data: [3200, 3225, 3250, 3275, 3300, 3325, 3350, 3375, 3400],
  },
  {
    name: "Facebook",
    data: [330, 335, 340, 345, 350, 355, 360, 365, 370],
  },
];

// Function to update the series data
function updateSeriesData() {
  initialSeries.forEach(series => {
    const lastValue = series.data[series.data.length - 1];
    const change = Math.floor(Math.random() * 11) - 5;    
    series.data.push(lastValue + change);
    series.data.shift();
  });
  // console.log(initialSeries);
}



module.exports = {
  CompanyAccount,
  CompanyData,
  initialSeries,
  updateSeriesData
};

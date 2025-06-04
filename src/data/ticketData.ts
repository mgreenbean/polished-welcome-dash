
export const userData = {
  name: "Michael Chen"
};

export const ticketData = {
  pending: [
    {
      id: 1,
      title: "NBA FINALS: TBD AT KNICKS RD 4 HM GM 3",
      venue: "Madison Square Garden",
      location: "New York, NY",
      date: "TBD 2024",
      marketPrice: 525,
      yourPrice: 450,
      section: "213",
      row: "18",
      seats: "11, 12",
      qty: 2,
      status: "PENDING REVIEW",
      statusColor: "amber",
      expiresIn: "2 days"
    }
  ],
  live: [
    {
      id: 2,
      title: "LAKERS VS WARRIORS",
      venue: "Crypto.com Arena",
      location: "Los Angeles, CA",
      date: "Dec 15, 2024",
      marketPrice: 380,
      yourPrice: 350,
      section: "115",
      row: "12",
      seats: "5, 6",
      qty: 2,
      status: "LIVE LISTING",
      statusColor: "emerald",
      views: "127 views today"
    },
    {
      id: 3,
      title: "TAYLOR SWIFT ERAS TOUR",
      venue: "SoFi Stadium",
      location: "Los Angeles, CA",
      date: "Jan 20, 2025",
      marketPrice: 850,
      yourPrice: 800,
      section: "C2",
      row: "8",
      seats: "15, 16",
      qty: 2,
      status: "LIVE LISTING",
      statusColor: "emerald",
      views: "43 views today"
    }
  ],
  sold: [
    {
      id: 4,
      title: "CHIEFS VS BILLS",
      venue: "Arrowhead Stadium",
      location: "Kansas City, MO",
      date: "Nov 20, 2024",
      marketPrice: 290,
      soldPrice: 275,
      section: "129",
      row: "25",
      seats: "7, 8",
      qty: 2,
      status: "SOLD",
      statusColor: "blue",
      soldDate: "Nov 18, 2024"
    }
  ]
};

export const marketInsights = [
  {
    category: "NBA Finals",
    items: [
      { name: "Boston vs Dallas", trend: "up", change: "+24%" },
      { name: "Lakers Playoffs", trend: "up", change: "+18%" },
      { name: "Warriors Home Games", trend: "up", change: "+12%" }
    ]
  },
  {
    category: "Concerts",
    items: [
      { name: "Taylor Swift Eras", trend: "up", change: "+35%" },
      { name: "Olivia Rodrigo", trend: "up", change: "+22%" },
      { name: "Bad Bunny", trend: "up", change: "+19%" }
    ]
  },
  {
    category: "Broadway",
    items: [
      { name: "Hamilton", trend: "up", change: "+15%" },
      { name: "Lion King", trend: "up", change: "+8%" },
      { name: "Wicked", trend: "down", change: "-3%" }
    ]
  },
  {
    category: "Football",
    items: [
      { name: "Super Bowl", trend: "up", change: "+42%" },
      { name: "Chiefs vs Bills", trend: "up", change: "+28%" },
      { name: "Cowboys Home", trend: "up", change: "+16%" }
    ]
  }
];

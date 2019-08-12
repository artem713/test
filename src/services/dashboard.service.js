export const dashboardService = {
  getItems() {
    return [
      {
        id: 1,
        name: 'Artem Trubitsyn',
        role: 'Engineer',
        date: '2019-05-01',
        status: 'Hire'
      }, {
        id: 2,
        name: 'Karim Gettens',
        role: 'Manager',
        date: '2019-04-05',
        status: 'Explored'
      }, {
        id: 3,
        name: 'Wilhelmina d\'Arcy',
        role: 'Customer Support',
        date: '2018-08-26',
        status: 'Hire'
      }, {
        id: 4,
        name: 'Gian Dowdney',
        role: 'Manager',
        date: '2018-11-18',
        status: 'Screen'
      }, {
        id: 5,
        name: 'Wilhelmine Cauderlie',
        role: 'Sales',
        date: '2019-04-29',
        status: 'Explored'
      }, {
        id: 6,
        name: 'Jorrie Bunner',
        role: 'Customer Support',
        date: '2018-11-15',
        status: 'Scheduled'
      }, {
        id: 7,
        name: 'Lavena McErlaine',
        role: 'Manager',
        date: '2019-02-25',
        status: 'Explored'
      }, {
        id: 8,
        name: 'Jaquelyn Nation',
        role: 'Manager',
        date: '2018-10-27',
        status: 'Explored'
      }, {
        id: 9,
        name: 'Lalo Bassano',
        role: 'Customer Support',
        date: '2018-12-01',
        status: 'Explored'
      }, {
        id: 10,
        name: 'Ed Sherrell',
        role: 'Customer Support',
        date: '2018-12-01',
        status: 'Hire'
      }
    ]
  },

  filter(items, _filter) {
    const filter = _filter.toLowerCase().trim()

    if (filter.length > 0) {

      const orTokens = getOrTokensRegExp().exec(filter)

      if (orTokens) {
        const tokens = [
          toStringInLowerCase(orTokens[1]),
          toStringInLowerCase(orTokens[2]),
        ]

        return items.filter(
          i => itemToArray(i).some(p => tokens.some(t => p.includes(t)))
        )
      }

      const andTokens = getAndTokensRegExp().exec(filter)

      if (andTokens) {
        const tokens = [
          toStringInLowerCase(andTokens[1]),
          toStringInLowerCase(andTokens[2]),
        ]

        return items.filter(
          i => tokens.every(t => itemToArray(i).some(p => p.includes(t)))
        )
      }

      return items.filter(i => itemToArray(i).some(p => p.includes(filter)))
    } else {
      return items
    }
  }
}

function itemToArray(item) {
  return [
    toStringInLowerCase(item.name),
    toStringInLowerCase(item.role),
    toStringInLowerCase(item.date),
    toStringInLowerCase(item.status),
  ]
}

function toStringInLowerCase(item) {
  return item.toString().toLowerCase()
}

function getAndTokensRegExp() {
  return /([a-zA-Z0-9-]+)\s+and\s+([a-zA-Z0-9-]+).*/gi
}

function getOrTokensRegExp() {
  return /^([a-zA-Z0-9-]+)\s+(?:or)\s+([a-zA-Z0-9-]+)$/gi
}
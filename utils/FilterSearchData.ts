export function RegexConverter(value: string) {
  let regexText = '^';

  value.toLowerCase().split(' ').forEach((word: string) => (
    regexText += `(?=.*(${word}))`
  ));
  regexText += '.*';
  return regexText;
}

export function FilterSearchData(value:any, searchData: Array<object>) {
  const funds = searchData.filter((item: any) => (
    item.LegalName.toLowerCase().includes(value.toLowerCase().trim())
    //  || item.ISIN.toLowerCase().includes(value.toLowerCase().trim())
  ));

  if (funds.length < 10) {
    const existingIds: Array<string> = [];
    funds.map((fund:any) => (existingIds.push(fund.MStarID)));

    const filteredFundData = searchData.filter((item: any) => (
      item.LegalName.toLowerCase().match(RegexConverter(value)) && (!existingIds.includes(item.MStarID))
    ));

    funds.push(...filteredFundData);
  }

  funds.sort((a:any, b:any) => {
    if (a.SortOrder < b.SortOrder) {
      return -1;
    }

    if (a.SortOrder > b.SortOrder) {
      return 1;
    }

    if (a.LegalName < b.LegalName) {
      return -1;
    }

    if (a.LegalName > b.LegalName) {
      return 1;
    }

    return 0;
  });


  const data = {
    'Mutual Funds': {
      records: funds.slice(0, 10),
    },
  };

  return data;
}

interface TotalMoney {
  "50": number;
  "100": number;
  "200": number;
}

interface Payment {
  money: TotalMoney;
  totalToPay: number;
}

function calcMoneyPaper(props: TotalMoney): number {
  let paidMoney = 0;

  for (let total in props) {
    paidMoney = paidMoney + Number(total) * props[total];
  }

  return paidMoney;
}

function moneyCacl(props: Payment): number | typeof NaN {
  const { money, totalToPay } = props;

  const TotalMoney = calcMoneyPaper(money);

  if (!money) {
    return NaN;
  }

  return TotalMoney - totalToPay;
}

moneyCacl({ totalToPay: 650, money: { 100: 1, 200: 3, 50: 0 } });

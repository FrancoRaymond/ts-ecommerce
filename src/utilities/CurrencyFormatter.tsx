const CURRENCY_FORMATTER = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  })
  
export function CurrencyFormatter( number : number){
  return CURRENCY_FORMATTER.format(number)
}
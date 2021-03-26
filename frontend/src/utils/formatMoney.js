const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function formatMoney(pennies) {
  return formatter.format(pennies / 100)
}

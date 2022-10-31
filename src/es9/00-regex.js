const regex = /(\d{4})-(\d{2})-(\d{2})/ //year - month - day
const matchers = regex.exec('2022-10-31')

console.table(matchers)
//output
// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │    0    │ '2022-10-31' │
// │    1    │    '2022'    │
// │    2    │     '10'     │
// │    3    │     '31'     │
// │  index  │      0       │
// │  input  │ '2022-10-31' │
// │ groups  │  undefined   │
// └─────────┴──────────────┘
console.table(matchers[0])
//output
// 2022-10-31
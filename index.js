// Code your solution here
function findMatching(drivers, string) {
  console.log(drivers)
  console.log(string)
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  console.log(drivers)
  console.log(string)
  return drivers.filter(function(driver) {
    return driver.indexOf(string) === 0
  })
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name  === string
  })
}

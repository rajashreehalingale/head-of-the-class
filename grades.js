const getTotalsBy = (grades, locator) => {
  return grades.reduce((totals, grade) => {
    totals[grade[locator]] = totals[grade[locator]]
      ? { sum: totals[grade[locator]].sum + grade.score, num: totals[grade[locator]].num + 1 }
      : { sum: grade.score, num: 1 }

    return totals
  }, {})
}

const averageAssignments = (totals) => Object.keys(totals).reduce((acc, key) => {
  return acc.concat([{ name: key, average: totals[key].sum / totals[key].num }])
}, [])

const calculateAverageByAssignment = (gradeList) => {
  const assignmentTotals = getTotalsBy(gradeList, 'assignment')

  return averageAssignments(assignmentTotals)
}

const calculateAverageByStudent = (gradeList) => {
  const assignmentTotals = getTotalsBy(gradeList, 'student')

  return averageAssignments(assignmentTotals)
}

module.exports = { calculateAverageByAssignment, calculateAverageByStudent }

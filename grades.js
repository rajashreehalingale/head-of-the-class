
function calculateAverage(mockGrades, predicate) {

  const filteredmockGrades = mockGrades.filter(predicate)

  return filteredmockGrades.map((mockGrade) => mockGrade.score)
    .reduce((total, score) => total + score, 0) / filteredmockGrades.length
}

function calculateAverageByStudent(mockGrades) {
  let uniques = [...new Set(mockGrades.map(v => (v.student)))]

  return uniques.map((unique) => ({ 'name': unique }))
    .map((unique) => ({ 'name': unique.name, 'average': calculateAverage(mockGrades, (mockGrade) => mockGrade.student === unique.name) }))
}

function calculateAverageByAssignment(mockGrades) {
  let uniques = [...new Set(mockGrades.map(v => (v.assignment)))]

  return uniques.map((unique) => ({ 'name': unique }))
    .map((unique) => ({ 'name': unique.name, 'average': calculateAverage(mockGrades, (mockGrade) => mockGrade.assignment === unique.name) }))
}

module.exports = { calculateAverageByAssignment, calculateAverageByStudent }

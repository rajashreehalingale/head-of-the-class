/* eslint-disable max-len */
const { describe, it } = require('mocha')
const { expect } = require('chai')
const { mockAssignmentAverages, mockStudentAverages, mockGrades } = require('./gradeMocks')
const { calculateAverageByAssignment, calculateAverageByStudent } = require('../grades')

describe('Grades', () => {
  describe('calculateAverageByAssignment', () => {
    it('returns a list of objects where each object contains the name of an assignment and the classes average for that assignment', () => {
      const averages = calculateAverageByAssignment(mockGrades)

      expect(averages).to.deep.equal(mockAssignmentAverages)
    })

    it('returns an empty list when called on an empty list', () => {
      const averages = calculateAverageByAssignment([])

      expect(averages).to.deep.equal([])
    })
  })

  describe('calculateAverageByStudent', () => {
    it('Extra Credit: returns a list of objects where each object contains the name of a student and their average across all assignments', () => {
      const averages = calculateAverageByStudent(mockGrades)

      expect(averages).to.deep.equal(mockStudentAverages)
    })

    it('Extra Credit: returns an empty list when called on an empty list', () => {
      const averages = calculateAverageByStudent([])

      expect(averages).to.deep.equal([])
    })
  })
})

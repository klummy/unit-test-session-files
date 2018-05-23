// import { isPost } from "./utils";
const utils = require('./utils')

const isPost = utils.isPost

describe("itPost", () => {

  it("itPost should return undefined if nothing is passed", () => {
    const expectedResponse = isPost()

    expect(expectedResponse).toBe(undefined)
  })

  it("itPost should return the body when the request has a body", () => {
    const sampleReq = {
      body: {
        a: 'a',
        b: 'b'
      }
    }

    expect(isPost(sampleReq)).toEqual(sampleReq.body)
  })
})

describe("omit", () => {
  const omit = utils.omit

  it("Should throw an error if no object", () => {
    expect(
      () => {
        omit()
      }
    ).toThrow("Tarh")
  })

  // TODO: Add your tests
})
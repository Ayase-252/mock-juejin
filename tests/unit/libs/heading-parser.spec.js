const chai = require('chai')
const { parseHeadings } = require('libs/heading-parser')
const chaiSubset = require('chai-subset')

chai.use(chaiSubset)
const expect = chai.expect

const createHeading = (title, subHeadings = []) => {
  return {
    title,
    subHeadings
  }
}

describe('parseHeadings', function () {
  it('should extract the structure of headings of content', function () {
    const htmlFragment = `
      <h2>1</h2>
      <h3>1-1</h3>
      <h3>1-2</h3>
      <h4>1-2-1</h4>
      <h2>2</h2>
      <h3>2-1</h3>
      <h3>2-2</h3>`
    const headings = parseHeadings(htmlFragment)
    expect(headings).to.containSubset([
      createHeading('1', [
        createHeading('1-1', []),
        createHeading('1-2', [
          createHeading('1-2-1', [])
        ])
      ]),
      createHeading('2', [
        createHeading('2-1', []),
        createHeading('2-2', [])
      ])
    ])
  })
  it('should extract the structure of headings of content with attribution in heading tags', function () {
    const htmlFragment = `
      <h2 class="whatever">1</h2>
      <h3 style="border: none">1-1</h3>
      <h3 id="what">1-2</h3>
      <h4 id="random" class="whatever">1-2-1</h4>
      <h2 class="heading">2</h2>
      <h3>2-1</h3>
      <h3 data-id="whatever">2-2</h3>`
    const headings = parseHeadings(htmlFragment)
    expect(headings).to.containSubset([
      createHeading('1', [
        createHeading('1-1', []),
        createHeading('1-2', [
          createHeading('1-2-1', [])
        ])
      ]),
      createHeading('2', [
        createHeading('2-1', []),
        createHeading('2-2', [])
      ])
    ])
  })
})

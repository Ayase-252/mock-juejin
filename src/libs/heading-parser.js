let uid = 1

const createHeading = (title, identifier, subHeadings = []) => {
  return {
    title,
    identifier,
    subHeadings,
    isActive: false
  }
}

const parseHeadings = (htmlFrag, currLvl = 2) => {
  const reg = new RegExp(`<h${currLvl}.*?>(.*?)</h${currLvl}>`, 'g')

  const res = []
  let lastMatchEnd = null
  let match = reg.exec(htmlFrag)
  // worked! But it is too confusing

  const updateSubHeadingsOfLastMatch = () => {
    if (lastMatchEnd) {
      const lastMatch = res[res.length - 1]
      // Recursive
      lastMatch.subHeadings = parseHeadings(
        htmlFrag.slice(lastMatchEnd, match ? match.index : undefined),
        currLvl + 1
      )
    }
  }
  while (match) {
    // dealing current level
    updateSubHeadingsOfLastMatch()
    res.push(createHeading(match[1], `heading-${uid++}`))
    lastMatchEnd = reg.lastIndex
    match = reg.exec(htmlFrag)
  }

  updateSubHeadingsOfLastMatch()

  return res
}

export default parseHeadings

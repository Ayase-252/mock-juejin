const debounce = (fn, interval, config) => {
  let lastCallTime = new Date()
  const maxInterval = config.maxWait || interval
  return () => {
    clearTimeout(fn.tid)
    const now = new Date()
    if (now - lastCallTime >= maxInterval) {
      fn()
      lastCallTime = now
    } else {
      fn.tid = setTimeout(fn, interval)
    }
  }
}

export default debounce

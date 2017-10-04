import { read } from '../path'
import { construct, combine, extract } from '../message'

const get = (location, object) => {
  const input = combine(construct(location), construct(object))
  const path = extract(location)

  if (path === '') {
    return input.data
  }

  let value = read(path, input.data)
  if (value === undefined) {
    value = read(path, input.scope)
  }

  return construct(value, input.scope)
}

export default get

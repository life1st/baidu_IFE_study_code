export function upperDom(dom, target) {
  // console.log(!dom, !target, dom.isEqualNode(target), 'upperDom')
  // if (!dom || !target) {
  //   console.log('false')
  //   return false
  // }
  // if (!dom.isEqualNode(target)) {
  //   upperDom(dom, target.parentElement)
  // }
  // return true
  return  !!dom && !dom.contains(target) || target.contains(dom)
}
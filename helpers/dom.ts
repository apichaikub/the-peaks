export const removeHTML = (str: String) : String => { 
  const ele = document.createElement('div')
  ele.innerHTML = str.toString()
  return ele.textContent || ele.innerText || ''
}
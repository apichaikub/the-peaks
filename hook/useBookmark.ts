import { useEffect, useState } from "react"

type Id = String;

type Item = {
  id: Id;
  createdAt: String;
}

const BOOKMARKS_KEY = 'bookmarks'

const useBookmark = () => {
  const [bookmarks, setBookmarks] = useState<Item[]>([])
  const bookmarkIds : Id[] = bookmarks.map((item) => item.id)

  useEffect(() => {
    const items = getItems()
    setBookmarks(items)
  }, [])

  const getItems = () : Item[] => {
    try {
      if(localStorage.getItem(BOOKMARKS_KEY)) {
        const str = localStorage.getItem(BOOKMARKS_KEY)
        return str ? JSON.parse(str) : []
      } else {
        return []
      }
    } catch (error) {
      return []
    }
  }

  const getIndex = (items: Item[], id: Id) : number => {
    return items.findIndex((item) => item.id === id)
  }
  
  const save = (id: Id) => {
    if(id) {
      const newItem : Item = {
        id,
        createdAt: new Date().toISOString(),
      }
      const items = getItems()
      items.push(newItem)
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(items)) 
    }
  }

  const remove = (id: Id) => {
    const items = getItems()
    const findIndex = getIndex(items, id)
    const found = findIndex !== -1
    if(found && id) {
      items.splice(findIndex, 1)
    }
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(items))
  }

  const isSaved = (id: Id) => {
    const items = getItems()
    const findIndex = getIndex(items, id)
    const found = findIndex !== -1
    return found
      ? true
      : false
  }

  return {
    bookmarks,
    bookmarkIds,
    save,
    remove,
    isSaved,
  }
}

export default useBookmark
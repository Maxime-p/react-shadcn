import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'

class MemoryStorage implements Storage {
  #entries = new Map<string, string>()

  get length() {
    return this.#entries.size
  }

  clear() {
    this.#entries.clear()
  }

  getItem(key: string) {
    return this.#entries.get(key) ?? null
  }

  key(index: number) {
    return [...this.#entries.keys()][index] ?? null
  }

  removeItem(key: string) {
    this.#entries.delete(key)
  }

  setItem(key: string, value: string) {
    this.#entries.set(key, value)
  }
}

const localStorage = new MemoryStorage()

Object.defineProperty(window, 'localStorage', {
  configurable: true,
  value: localStorage,
})

afterEach(() => {
  document.documentElement.classList.remove('dark')
  localStorage.clear()
})

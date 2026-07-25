import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the application shell and toggles the colour theme', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Hello, Shadcn!' })).toBeVisible()
    expect(screen.getByRole('button', { name: 'Use dark theme' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Use dark theme' }))

    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem('theme')).toBe('dark')
    expect(screen.getByRole('button', { name: 'Use light theme' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
})

// PageSelector.jsx
// Updated to closely match the provided Figma design.
// - Uses native <input type="checkbox"> elements styled with `accent-color` for exact checked color
// - Button uses precise hex colors and a hover state
// - Dividers, spacing, fonts, shadows tuned to match Figma

import React, { useState } from 'react'
import CustomCheckbox from './CustomCheckbox' // Import the new CustomCheckbox component

const PAGES = ['Page 1', 'Page 2', 'Page 3', 'Page 4']

const COLORS = {
  yellow: '#FFD23F', // Figma button yellow
  yellowHover: '#FFC300',
  panelBg: '#FFFFFF',
  pageBg: '#F3F4F6',
  divider: '#E5E7EB',
  textPrimary: '#111827',
  textMuted: '#6B7280',
  checkboxBlue: '#2563EB' // Figma blue - no longer directly used for checkbox styling
}

export default function PageSelector() {
  const [open, setOpen] = useState(true)
  const [selected, setSelected] = useState(new Set())
  const [all, setAll] = useState(false)

  function togglePage(page) {
    setSelected(prev => {
      const copy = new Set(prev)
      if (copy.has(page)) copy.delete(page)
      else copy.add(page)
      setAll(copy.size === PAGES.length)
      return copy
    })
  }

  function toggleAll(checked) {
    if (checked) {
      setSelected(new Set(PAGES))
      setAll(true)
    } else {
      setSelected(new Set())
      setAll(false)
    }
  }

  function done() {
    console.log('Selected pages:', Array.from(selected))
    setOpen(false)
  }

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center" style={{ background: COLORS.pageBg }}>
      <div
        className="w-[360px] rounded-2xl bg-white"
        style={{
          boxShadow: '0 18px 40px rgba(2,6,23,0.10)',
          border: '1px solid rgba(0,0,0,0.04)'
        }}
      >
        {/* Header */}
        <div className="px-5 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>All pages</div>
          <CustomCheckbox
            ariaLabel="Select all"
            checked={all}
            onChange={(e) => toggleAll(e.target.checked)}
          />
        </div>

        <div style={{ height: 1, background: COLORS.divider }} />

        {/* List */}
        <div className="px-2 py-3">
          {PAGES.map((p) => (
            <div key={p} className="flex items-center justify-between px-4 py-4">
              <div className="text-sm" style={{ color: COLORS.textMuted }}>{p}</div>
              <CustomCheckbox
                ariaLabel={`Select ${p}`}
                checked={selected.has(p)}
                onChange={(e) => togglePage(p)}
              />
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: COLORS.divider }} />

        {/* Done button */}
        <div className="px-4 pt-4 pb-6">
          <button
            onClick={done}
            className="w-full py-3 rounded-lg focus:outline-none transition-shadow"
            style={{
              background: COLORS.yellow,
              color: '#000000',
              fontWeight: 600,
              boxShadow: '0 10px 20px rgba(2,6,23,0.08)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = COLORS.yellowHover}
            onMouseLeave={(e) => e.currentTarget.style.background = COLORS.yellow}
          >
            <span className="text-sm">Done</span>
          </button>
        </div>
      </div>
    </div>
  )
}

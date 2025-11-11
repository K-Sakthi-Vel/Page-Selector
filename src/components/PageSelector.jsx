import React, { useState } from 'react'
import CustomCheckbox from './CustomCheckbox'

const PAGES = ['Page 1', 'Page 2', 'Page 3', 'Page 4','Page 5', 'Page 6', 'Page 7','Page 8', 'Page 9', 'Page 10']

const COLORS = {
  yellow: '#FFD23F',
  yellowHover: '#FFC300',
  panelBg: '#FFFFFF',
  pageBg: '#F3F4F6',
  divider: '#E5E7EB',
  textPrimary: '#111827',
  textMuted: '#6B7280',
  checkboxBlue: '#2563EB'
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
        className="w-[370px] h-[326px] rounded-[6px] bg-white py-[10px]"
        style={{
          boxShadow: '0 18px 40px rgba(2,6,23,0.10)',
          border: '1px solid rgba(0,0,0,0.04)'
        }}
      >
        {/* Header */}
        <div className="h-[42px] pl-[22px] pr-[15px] py-[8px] flex items-center justify-between rounded-t-[6px]">
          <div className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>All pages</div>
          <CustomCheckbox
            ariaLabel="Select all"
            checked={all}
            onChange={(e) => toggleAll(e.target.checked)}
          />
        </div>

        <div className="h-[20px] flex items-center px-[15px]">
          <div style={{ height: 1, background: COLORS.divider, width: '100%' }} />
        </div>

        {/* List */}
        <div 
          className="py-[3px] h-[164px] overflow-y-auto scrollbar-hide"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none', 
        }}>
          {PAGES.map((p) => (
            <div key={p} className="flex items-center justify-between h-[42px] pl-[22px] pr-[15px] py-[8px]">
              <div className="text-sm" style={{ color: COLORS.textMuted }}>{p}</div>
              <CustomCheckbox
                ariaLabel={`Select ${p}`}
                checked={selected.has(p)}
                onChange={(e) => togglePage(p)}
              />
            </div>
          ))}
        </div>

        <div className="h-[20px] flex items-center px-[15px]">
          <div style={{ height: 1, background: COLORS.divider, width: '100%' }} />
        </div>

        {/* Done button */}
        <div className="h-[60px] pl-[15px] pr-[15px] pt-[10px] pb-[10px] flex items-center justify-center">
          <button
            onClick={done}
            className="w-[340px] h-[40px] px-[20px] py-[10px] rounded-[4px] focus:outline-none transition-shadow flex items-center justify-center"
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

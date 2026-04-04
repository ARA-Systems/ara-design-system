import { forwardRef, InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  shortcut?: string
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ shortcut = '⌘F', className, ...props }, ref) => {
    return (
      <div className="search-input-wrap">
        <Search size={16} className="search-input-icon" />
        <input
          ref={ref}
          type="search"
          className={`search-input ${className ?? ''}`}
          placeholder="Pesquisar"
          {...props}
        />
        {shortcut && <span className="search-shortcut">{shortcut}</span>}
      </div>
    )
  }
)

SearchInput.displayName = 'SearchInput'

export default SearchInput

import { addSearchHistory,resetSearchHistory } from './searchHistoryActions'
import { fetchResults } from './resultActions'
import { updateSearchKeyword } from './searchKeyActions';
import { updateXMLResult } from './xmlActions'
import { 
    filterContinent,
    filterCountry,
    filterGender,
    filterReset,
    filterSortBy,
    filterStatus
} from './filterAction'

import { fetchSuggestion, closeSuggestionBox } from './sugestionAction'

import { showHelpSections, closeHelpSection } from './helpAction'

export { 
    fetchResults,
    filterContinent,
    filterCountry,
    filterGender,
    filterReset,
    filterSortBy,
    filterStatus,
    addSearchHistory,
    resetSearchHistory,
    updateSearchKeyword,
    updateXMLResult,
    showHelpSections,
    closeHelpSection,
    fetchSuggestion,
    closeSuggestionBox
}
import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, isActive, setActiveLanguageFilterId} = props

  const {id, language} = languageFilterDetails

  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn '

  const onClickButton = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button type="button" className={btnClassName} onClick={onClickButton}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem

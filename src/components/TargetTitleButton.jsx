export const TargetTitleButton = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`btn ${isActive ? 'btn-success' : 'btn-outline-secondary'} mb-2`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

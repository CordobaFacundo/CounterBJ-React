import { CardSlots } from './CardSlots'
import { TargetTitleButton } from './TargetTitleButton'

export const Others = ({ cards, isActive, onSelect }) => {
  return (
    <div className="text-center">
      <TargetTitleButton isActive={isActive} onClick={onSelect}>
        Others
      </TargetTitleButton>

      <CardSlots cards={cards} minimumSlots={2} />
    </div>
  )
}

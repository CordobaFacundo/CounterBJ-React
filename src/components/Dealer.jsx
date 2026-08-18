import { CardSlots } from './CardSlots'
import { TargetTitleButton } from './TargetTitleButton'

export const Dealer = ({ cards, isActive, onSelect }) => {
  return (
    <div className="text-center">
      <TargetTitleButton isActive={isActive} onClick={onSelect}>
        Dealer
      </TargetTitleButton>

      <CardSlots cards={cards} minimumSlots={1} />
    </div>
  )
}

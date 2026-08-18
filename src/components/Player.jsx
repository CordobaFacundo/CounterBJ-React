import { CardSlots } from './CardSlots'
import { TargetTitleButton } from './TargetTitleButton'

export const Player = ({ cards, isActive, onSelect }) => {
  return (
    <>
      <TargetTitleButton isActive={isActive} onClick={onSelect}>
        Player
      </TargetTitleButton>

      <CardSlots cards={cards} minimumSlots={2} />
    </>
  )
}

export const CardSlots = ({ cards, minimumSlots }) => {
  const slots = Array.from(
    { length: Math.max(minimumSlots, cards.length) },
    (_, index) => cards[index] ?? '?'
  )

  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {slots.map((slot, index) => (
        <div key={index} className="blackjack-card-slot border rounded fs-5">
          {slot}
        </div>
      ))}
    </div>
  )
}

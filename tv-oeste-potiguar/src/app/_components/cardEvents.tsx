export function CardEvent({ name }) {
  return (
    <div className="p-3 bg-gradient-to-r from-emerald-800 to-emerald-500 rounded-xl">
      <h1 className="text-primary text-white text-xs">{name}</h1>
      <p className="text-gray-200">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse natus
        aliquam voluptatem, enim quia quasi aut debitis odit corporis, nihil
        cupiditate sit molestias neque sed commodi distinctio ex ratione. Quasi.
      </p>
      <span className="text-gray-300 text-xs">Publicado em 04/11/2024</span>
    </div>
  );
}

export default function Featured() {
  return (
    <div id="bio" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Фото"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Обо мне</h3>
        <h2 className="text-3xl lg:text-5xl mb-8 text-neutral-900 leading-tight font-bold">
          Биография
        </h2>
        <textarea
          className="w-full min-h-[280px] resize-y border border-neutral-200 rounded-none p-5 text-neutral-800 text-base leading-relaxed bg-neutral-50 focus:outline-none focus:border-neutral-900 transition-colors duration-300 font-light placeholder:text-neutral-400"
          placeholder="Расскажите свою историю... Кто вы, откуда пришли, чем занимаетесь и о чём мечтаете. Это ваше пространство — пишите свободно."
        />
        <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wide">Ваша история · Ваши слова</p>
      </div>
    </div>
  );
}

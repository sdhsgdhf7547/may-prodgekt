import { useState } from 'react'

// Типы
type Section = 'home' | 'tips' | 'crafts' | 'quiz' | 'facts'

// Данные для поделок
const crafts = [
  {
    id: 1,
    title: 'Солнышко из бумаги',
    emoji: '☀️',
    materials: ['Жёлтая бумага', 'Ножницы', 'Клей', 'Блестки'],
    steps: [
      'Вырежи круг из жёлтой бумаги — это солнышко',
      'Нарежи полоски из оранжевой бумаги — это лучики',
      'Приклей лучики вокруг круга',
      'Укрась солнышко блёстками',
      'Напиши на лучиках способы экономить энергию'
    ],
    color: 'from-yellow-300 to-orange-300'
  },
  {
    id: 2,
    title: 'Дом-энергосберегатель',
    emoji: '🏠',
    materials: ['Картонная коробка', 'Цветная бумага', 'Краски', 'Скотч', 'Фломастеры'],
    steps: [
      'Возьми картонную коробку — это будет дом',
      'Покрась дом в яркий цвет',
      'Вырежи окошки из цветной бумаги',
      'Приклей на крышу "солнечную панель" из фольги',
      'Внутри дома напиши правила экономии энергии'
    ],
    color: 'from-green-300 to-teal-300'
  },
  {
    id: 3,
    title: 'Ветряная мельница',
    emoji: '🌬️',
    materials: ['Бумага', 'Карандаш с ластиком', 'Булавка', 'Бусинка', 'Ножницы'],
    steps: [
      'Вырежи квадрат из бумаги',
      'Сделай надрезы от углов к центру (не до конца!)',
      'Загни каждый второй уголок к центру',
      'Проткни центр булавкой через бусинку',
      'Воткни булавку в ластик карандаша — мельница готова!'
    ],
    color: 'from-blue-300 to-cyan-300'
  },
  {
    id: 4,
    title: 'Плакат "Береги энергию!"',
    emoji: '🎨',
    materials: ['Ватман', 'Краски', 'Кисточки', 'Журналы для вырезок', 'Клей'],
    steps: [
      'Раздели ватман на 4 части',
      'В каждой части нарисуй способ экономии',
      'Например: выключай свет, закрывай дверь, когда холодно',
      'Укрась плакат яркими рисунками',
      'Повесь плакат дома или в группе!'
    ],
    color: 'from-pink-300 to-purple-300'
  },
  {
    id: 5,
    title: 'Светофор экономии',
    emoji: '🚦',
    materials: ['Картон', 'Красная, жёлтая, зелёная бумага', 'Клей', 'Палочка'],
    steps: [
      'Вырежи из картона форму светофора',
      'Приклей три круга: красный, жёлтый, зелёный',
      'На красном напиши "НЕЛЬЗЯ" — оставлять свет включённым',
      'На жёлтом — "БУДЬ ВНИМАТЕЛЕН" — не забывай выключать',
      'На зелёном — "МОЛОДЕЦ!" — экономишь энергию!'
    ],
    color: 'from-red-300 to-yellow-300'
  },
  {
    id: 6,
    title: 'Эко-закладка',
    emoji: '📖',
    materials: ['Цветная бумага', 'Ножницы', 'Фломастеры', 'Скотч'],
    steps: [
      'Вырежи полоску из бумаги 5x15 см',
      'Сложи пополам и склей',
      'Нарисуй на ней лампочку с улыбкой',
      'Напиши: "Выключи меня, когда выходишь!"',
      'Подари закладку друзьям!'
    ],
    color: 'from-emerald-300 to-lime-300'
  }
]

// Советы по энергосбережению
const tips = [
  { icon: '💡', text: 'Выключай свет, когда выходишь из комнаты', detail: 'Это самая простая вещь, которую ты можешь сделать!' },
  { icon: '🌞', text: 'Открывай шторы днём', detail: 'Солнышко даёт бесплатный свет!' },
  { icon: '🚿', text: 'Не лей воду слишком долго', detail: 'Горячую воду нужно нагреть — это энергия!' },
  { icon: '🔌', text: 'Выключай приборы из розетки', detail: 'Даже выключенный телевизор немного потребляет энергию' },
  { icon: '🧥', text: 'Одевайся теплее дома зимой', detail: 'Так можно убавить отопление и сэкономить' },
  { icon: '🍳', text: 'Готовь с крышкой', detail: 'С крышкой вода закипает быстрее — меньше энергии!' },
  { icon: '🌱', text: 'Сажай деревья', detail: 'Деревья дают тень летом и защищают от ветра зимой' },
  { icon: '🚲', text: 'Ходи пешком или на велосипеде', detail: 'Вместо машины — это полезно и для природы!' }
]

// Викторина
const quizQuestions = [
  {
    question: 'Что нужно сделать, выходя из комнаты?',
    options: ['Оставить свет включённым', 'Выключить свет', 'Открыть окно'],
    correct: 1
  },
  {
    question: 'Какой источник энергии бесплатный?',
    options: ['Электричество', 'Газ', 'Солнце'],
    correct: 2
  },
  {
    question: 'Что помогает экономить тепло в доме?',
    options: ['Открытые окна зимой', 'Закрытые двери и окна', 'Выключенное отопление'],
    correct: 1
  },
  {
    question: 'Как можно помочь природе?',
    options: ['Мусорить в лесу', 'Сажать деревья', 'Ломать ветки'],
    correct: 1
  },
  {
    question: 'Какой транспорт самый экологичный?',
    options: ['Автомобиль', 'Самолёт', 'Велосипед'],
    correct: 2
  },
  {
    question: 'Зачем нужны солнечные панели?',
    options: ['Для красоты', 'Превращают свет в энергию', 'Для украшения крыш'],
    correct: 1
  }
]

// Интересные факты
const facts = [
  { icon: '💡', text: 'Если заменить обычную лампочку на энергосберегающую, можно сэкономить столько энергии, чтобы посмотреть 100 мультфильмов!' },
  { icon: '🌍', text: 'Если все люди на Земле выключат свет на 1 час, природа скажет нам "спасибо"!' },
  { icon: '🌳', text: 'Одно дерево за год очищает воздух для 2-х человек!' },
  { icon: '☀️', text: 'За 1 час Солнце даёт Земле столько энергии, сколько хватило бы всем людям на целый год!' },
  { icon: '💧', text: 'Капля за каплей — и за год из крана может натечь целая ванна воды!' },
  { icon: '🐧', text: 'Если беречь энергию, ледяные домики пингвинов не будут таять!' }
]

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home')
  const [currentCraft, setCurrentCraft] = useState<number | null>(null)
  const [quizStep, setQuizStep] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [quizAnswered, setQuizAnswered] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleQuizAnswer = (answerIndex: number) => {
    if (quizAnswered) return
    setSelectedAnswer(answerIndex)
    setQuizAnswered(true)
    if (answerIndex === quizQuestions[quizStep].correct) {
      setQuizScore(prev => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(prev => prev + 1)
      setQuizAnswered(false)
      setSelectedAnswer(null)
    } else {
      setQuizFinished(true)
    }
  }

  const resetQuiz = () => {
    setQuizStep(0)
    setQuizScore(0)
    setQuizAnswered(false)
    setQuizFinished(false)
    setSelectedAnswer(null)
  }

  const navItems: { id: Section; label: string; emoji: string }[] = [
    { id: 'home', label: 'Главная', emoji: '🏠' },
    { id: 'tips', label: 'Советы', emoji: '💡' },
    { id: 'crafts', label: 'Поделки', emoji: '✂️' },
    { id: 'quiz', label: 'Викторина', emoji: '🎯' },
    { id: 'facts', label: 'Факты', emoji: '🌟' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-green-100 to-yellow-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 shadow-lg p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md flex items-center gap-2">
            <span className="animate-pulse">⚡</span>
            <span>Энергосбережение</span>
            <span className="animate-pulse">⚡</span>
          </h1>
          <p className="hidden md:block text-white text-sm font-medium">Для старшей группы 🌈</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-md sticky top-[72px] z-40">
        <div className="max-w-6xl mx-auto flex overflow-x-auto">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                if (item.id === 'quiz') resetQuiz()
                setCurrentCraft(null)
              }}
              className={`flex-1 min-w-[100px] py-3 px-4 text-center font-bold transition-all duration-300 border-b-4 ${
                activeSection === item.id
                  ? 'border-green-500 text-green-700 bg-green-50'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-green-600'
              }`}
            >
              <span className="text-xl block">{item.emoji}</span>
              <span className="text-xs md:text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero */}
            <div className="bg-gradient-to-br from-yellow-200 via-orange-100 to-green-100 rounded-3xl p-8 md:p-12 shadow-xl text-center relative overflow-hidden">
              <div className="absolute top-4 left-4 text-4xl animate-bounce">☀️</div>
              <div className="absolute top-4 right-4 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌍</div>
              <div className="absolute bottom-4 left-8 text-3xl animate-pulse">🌱</div>
              <div className="absolute bottom-4 right-8 text-3xl animate-pulse" style={{ animationDelay: '0.3s' }}>💚</div>
              <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">
                Береги энергию! 🌟
              </h2>
              <p className="text-lg md:text-xl text-green-700 max-w-2xl mx-auto">
                Привет, дружок! Давай вместе узнаем, как беречь энергию и помогать нашей планете! 
                Это очень важно для всех людей, животных и растений! 🌈
              </p>
            </div>

            {/* What is energy */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-4 border-dashed border-green-300">
              <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <span>🤔</span> Что такое энергия?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 rounded-2xl p-5">
                  <p className="text-lg text-gray-700">
                    <strong>Энергия</strong> — это то, что помогает нам делать всё: 
                    включать свет, смотреть мультики, греть воду и даже бегать и играть! 🏃‍♂️
                  </p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-5">
                  <p className="text-lg text-gray-700">
                    Но энергии на Земле <strong>не бесконечно много</strong>. 
                    Поэтому её нужно беречь, как воду или конфеты — чтобы хватило всем! 🍬
                  </p>
                </div>
              </div>
            </div>

            {/* Why save energy */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-4 border-dashed border-blue-300">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <span>💚</span> Почему важно беречь энергию?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-5 text-center transform hover:scale-105 transition-transform">
                  <div className="text-5xl mb-3">🌳</div>
                  <p className="font-bold text-green-700">Беречь природу</p>
                  <p className="text-sm text-gray-600 mt-2">Меньше энергии — чище воздух!</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-5 text-center transform hover:scale-105 transition-transform">
                  <div className="text-5xl mb-3">🐻</div>
                  <p className="font-bold text-blue-700">Помогать животным</p>
                  <p className="text-sm text-gray-600 mt-2">Чистая планета = счастливый дом для зверей!</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-5 text-center transform hover:scale-105 transition-transform">
                  <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>
                  <p className="font-bold text-yellow-700">Беречь для всех</p>
                  <p className="text-sm text-gray-600 mt-2">Энергии хватит и детям, и внукам!</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setActiveSection('crafts')}
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                ✂️ Сделать поделку!
              </button>
              <button
                onClick={() => setActiveSection('quiz')}
                className="bg-gradient-to-r from-orange-400 to-red-400 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                🎯 Пройти викторину!
              </button>
            </div>
          </div>
        )}

        {/* Tips Section */}
        {activeSection === 'tips' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-700 mb-2">💡 Советы по энергосбережению</h2>
              <p className="text-lg text-gray-600">Простые способы помочь планете каждый день!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-green-400 hover:shadow-lg transform hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{tip.icon}</span>
                    <div>
                      <p className="font-bold text-lg text-gray-800">{tip.text}</p>
                      <p className="text-sm text-gray-500 mt-1">{tip.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-200 to-emerald-200 rounded-3xl p-6 text-center">
              <p className="text-xl font-bold text-green-800">
                🌟 Запомни: каждый маленький шаг помогает нашей планете! 🌟
              </p>
            </div>
          </div>
        )}

        {/* Crafts Section */}
        {activeSection === 'crafts' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-purple-700 mb-2">✂️ Поделки по энергосбережению</h2>
              <p className="text-lg text-gray-600">Выбери поделку и сделай её своими руками!</p>
            </div>

            {currentCraft === null ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {crafts.map(craft => (
                  <button
                    key={craft.id}
                    onClick={() => setCurrentCraft(craft.id)}
                    className={`bg-gradient-to-br ${craft.color} rounded-3xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-left`}
                  >
                    <div className="text-5xl mb-3">{craft.emoji}</div>
                    <h3 className="text-xl font-bold text-gray-800">{craft.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {craft.materials.length} материалов • {craft.steps.length} шагов
                    </p>
                    <div className="mt-3 inline-block bg-white/50 rounded-full px-3 py-1 text-sm font-bold text-gray-700">
                      Посмотреть →
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
                <button
                  onClick={() => setCurrentCraft(null)}
                  className="mb-4 text-green-600 font-bold hover:text-green-800 flex items-center gap-1"
                >
                  ← Назад к поделкам
                </button>
                {crafts.filter(c => c.id === currentCraft).map(craft => (
                  <div key={craft.id}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl">{craft.emoji}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{craft.title}</h3>
                    </div>

                    {/* Materials */}
                    <div className="bg-yellow-50 rounded-2xl p-5 mb-6">
                      <h4 className="text-lg font-bold text-yellow-700 mb-3">📦 Что понадобится:</h4>
                      <div className="flex flex-wrap gap-2">
                        {craft.materials.map((material, i) => (
                          <span key={i} className="bg-yellow-200 rounded-full px-4 py-2 text-sm font-medium text-yellow-800">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="bg-green-50 rounded-2xl p-5">
                      <h4 className="text-lg font-bold text-green-700 mb-3">📝 Как сделать:</h4>
                      <div className="space-y-3">
                        {craft.steps.map((step, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                              {i + 1}
                            </span>
                            <p className="text-gray-700 pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 bg-purple-50 rounded-2xl p-4 text-center">
                      <p className="text-purple-700 font-bold">
                        🎉 Молодец! Покажи свою поделку друзьям и расскажи об энергосбережении! 🎉
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Quiz Section */}
        {activeSection === 'quiz' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-orange-700 mb-2">🎯 Викторина</h2>
              <p className="text-lg text-gray-600">Проверь, как хорошо ты знаешь про энергосбережение!</p>
            </div>

            {!quizFinished ? (
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Вопрос {quizStep + 1} из {quizQuestions.length}</span>
                    <span>Правильных: {quizScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                    {quizQuestions[quizStep].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {quizQuestions[quizStep].options.map((option, i) => {
                    let btnClass = 'bg-gray-50 border-2 border-gray-200 hover:border-green-400 hover:bg-green-50'
                    if (quizAnswered) {
                      if (i === quizQuestions[quizStep].correct) {
                        btnClass = 'bg-green-100 border-2 border-green-500'
                      } else if (i === selectedAnswer && i !== quizQuestions[quizStep].correct) {
                        btnClass = 'bg-red-100 border-2 border-red-500'
                      } else {
                        btnClass = 'bg-gray-50 border-2 border-gray-200 opacity-50'
                      }
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => handleQuizAnswer(i)}
                        className={`w-full text-left p-4 rounded-xl font-medium text-lg transition-all ${btnClass}`}
                      >
                        <span className="mr-3">
                          {i === 0 ? '🅰️' : i === 1 ? '🅱️' : '🅲️'}
                        </span>
                        {option}
                        {quizAnswered && i === quizQuestions[quizStep].correct && (
                          <span className="ml-2">✅</span>
                        )}
                      </button>
                    )
                  })}
                </div>

                {quizAnswered && (
                  <div className="mt-6 text-center">
                    {selectedAnswer === quizQuestions[quizStep].correct ? (
                      <p className="text-xl font-bold text-green-600 mb-4">🎉 Правильно! Молодец!</p>
                    ) : (
                      <p className="text-xl font-bold text-orange-600 mb-4">😊 Не совсем, но ты узнал правильный ответ!</p>
                    )}
                    <button
                      onClick={nextQuestion}
                      className="bg-gradient-to-r from-green-400 to-emerald-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                    >
                      {quizStep < quizQuestions.length - 1 ? 'Следующий вопрос →' : 'Результат 🏆'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto text-center">
                <div className="text-6xl mb-4">
                  {quizScore >= 5 ? '🏆' : quizScore >= 3 ? '⭐' : '💪'}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {quizScore >= 5 ? 'Отлично!' : quizScore >= 3 ? 'Хорошо!' : 'Попробуй ещё!'}
                </h3>
                <p className="text-xl text-gray-600 mb-6">
                  Ты ответил правильно на <strong>{quizScore}</strong> из <strong>{quizQuestions.length}</strong> вопросов!
                </p>
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 mb-6">
                  <p className="text-lg text-gray-700">
                    {quizScore >= 5
                      ? '🌟 Ты настоящий эксперт по энергосбережению!'
                      : quizScore >= 3
                      ? '💚 Ты хорошо знаешь, как беречь энергию!'
                      : '📚 Почитай ещё раз советы и попробуй снова!'}
                  </p>
                </div>
                <button
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-orange-400 to-red-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  🔄 Пройти ещё раз
                </button>
              </div>
            )}
          </div>
        )}

        {/* Facts Section */}
        {activeSection === 'facts' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-indigo-700 mb-2">🌟 Интересные факты</h2>
              <p className="text-lg text-gray-600">Удивительные вещи об энергии!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 shadow-lg border-t-4 border-indigo-300 hover:shadow-xl transform hover:scale-[1.02] transition-all"
                >
                  <div className="text-5xl mb-4">{fact.icon}</div>
                  <p className="text-lg text-gray-700">{fact.text}</p>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">🌈 Помни!</h3>
              <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
                Каждый из нас может стать <strong>супергероем</strong>, который бережёт энергию! 
                Для этого не нужны суперспособности — достаточно маленьких добрых дел каждый день. 
                Вместе мы можем спасти нашу красивую планету Земля! 🌍💚
              </p>
              <div className="mt-4 flex justify-center gap-4 text-4xl">
                <span className="animate-bounce">🦋</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌸</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌊</span>
                <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🌺</span>
                <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>🦜</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold mb-2">⚡ Береги энергию — береги планету! ⚡</p>
          <p className="text-green-200">Проект для старшей группы детского сада 🌈</p>
          <div className="mt-3 flex justify-center gap-3 text-2xl">
            <span>🌍</span><span>💚</span><span>☀️</span><span>🌱</span><span>💧</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

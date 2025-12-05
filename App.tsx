import React, { useState } from 'react';
import { 
  Flag, 
  Heart, 
  Quote as QuoteIcon, 
  AlertTriangle, 
  CheckCircle2, 
  Info,
  Share2,
  MessageSquare,
  Send,
  Headphones,
  ExternalLink,
  Mic,
  Filter,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Clock,
  Lightbulb,
  Gamepad2,
  Gift,
  Trophy,
  XCircle,
  BookOpen
} from 'lucide-react';
import { redFlags, greenFlags, quotes, milestones, quizQuestions } from './data';
import { ViewState, QuoteCategory, FlagType } from './types';

// Image de remplacement représentant le podcast (Femme avec casque)
// REMPLACEZ CETTE URL par le chemin de votre image logo (ex: "/logo.png")
const PODCAST_LOGO_URL = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400&h=400";

const App = () => {
  const [activeTab, setActiveTab] = useState<ViewState>('red');
  const [activeQuoteCategory, setActiveQuoteCategory] = useState<QuoteCategory | 'all'>('all');
  const [anecdote, setAnecdote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // State pour gérer l'accordéon du calendrier
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  // --- STATES DU JEU (QUIZ) ---
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  
  // State Formulaire Cadeau
  const [prizeForm, setPrizeForm] = useState({
    nom: '',
    prenom: '',
    social: '',
    wantEbook: false
  });
  const [prizeSubmitted, setPrizeSubmitted] = useState(false);

  const toggleYear = (id: string) => {
    if (expandedYear === id) {
      setExpandedYear(null);
    } else {
      setExpandedYear(id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (anecdote.trim().length > 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        setAnecdote('');
      }, 2000);
    }
  };

  // --- LOGIQUE DU JEU ---
  const handleQuizAnswer = (type: FlagType) => {
    if (showExplanation) return; // Empêche le double clic

    const currentQ = quizQuestions[currentQuestionIndex];
    const correct = currentQ.answer === type;
    
    setIsCorrect(correct);
    setShowExplanation(true);

    if (correct) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore >= 10) {
        // Victoire après un petit délai pour lire l'explication
        setTimeout(() => setGameWon(true), 2000);
      }
    }
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % quizQuestions.length);
  };

  const handlePrizeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrizeSubmitted(true);
    // Ici, vous connecteriez une API pour envoyer les données
  };

  const filteredQuotes = activeQuoteCategory === 'all' 
    ? quotes 
    : quotes.filter(q => q.category === activeQuoteCategory);

  const categories: { id: QuoteCategory | 'all', label: string }[] = [
    { id: 'all', label: 'Tout' },
    { id: 'self-love', label: 'Amour de soi' },
    { id: 'relationships', label: 'Relations' },
    { id: 'breakup', label: 'Rupture' },
    { id: 'wisdom', label: 'Sagesse' },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-gray-800 font-sans selection:bg-rose-100 relative overflow-hidden">
      
      {/* --- FOND THÉMATIQUE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse" style={{ animationDuration: '6s' }}></div>
         <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-emerald-300/30 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-violet-100/40 rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-12 pb-8 px-6 text-center">
          
          <div className="relative inline-block mb-6 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-rose-300 to-green-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-1.5 bg-white shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white relative z-10 bg-gray-100">
                  <img 
                    src={PODCAST_LOGO_URL} 
                    alt="Signal Fort Podcast Logo" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute -top-1 -right-4 bg-white p-2.5 rounded-full shadow-lg text-green-600 border border-green-100 rotate-12 animate-bounce delay-100 z-20">
                <CheckCircle2 size={22} fill="#ecfdf5" />
              </div>
              <div className="absolute -bottom-1 -left-4 bg-white p-2.5 rounded-full shadow-lg text-red-600 border border-red-100 -rotate-12 animate-bounce delay-700 z-20">
                <AlertTriangle size={22} fill="#fef2f2" />
              </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2 mt-2">
            Signal <span className="text-rose-500 italic">Fort</span>
          </h1>
          <p className="text-gray-500 max-w-md mx-auto">
            Décodez vos relations. Repérez les signaux d'alarme, célébrez les signes sains et trouvez l'inspiration.
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="sticky top-4 z-50 px-4 max-w-4xl mx-auto mb-8">
          <nav className="bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-gray-100 flex flex-wrap justify-center items-center gap-2">
            <button 
              onClick={() => setActiveTab('red')}
              className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'red' 
                  ? 'bg-red-50 text-red-600 shadow-sm ring-1 ring-red-100' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <AlertTriangle size={18} />
              <span className="">Red Flags</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('green')}
              className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'green' 
                  ? 'bg-green-50 text-green-600 shadow-sm ring-1 ring-green-100' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <CheckCircle2 size={18} />
              <span className="">Green Flags</span>
            </button>

             <button 
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'quiz' 
                  ? 'bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-200' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Gamepad2 size={18} />
              <span className="">Quiz</span>
            </button>

            <button 
              onClick={() => setActiveTab('quotes')}
              className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'quotes' 
                  ? 'bg-violet-50 text-violet-600 shadow-sm ring-1 ring-violet-200' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <QuoteIcon size={18} />
              <span className="">Citations</span>
            </button>

            <button 
              onClick={() => setActiveTab('calendar')}
              className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'calendar' 
                  ? 'bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-200' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Calendar size={18} />
              <span className="">Parcours</span>
            </button>

            <button 
              onClick={() => setActiveTab('anecdotes')}
              className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'anecdotes' 
                  ? 'bg-orange-50 text-orange-600 shadow-sm ring-1 ring-orange-200' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <MessageSquare size={18} />
              <span className="">Histoires</span>
            </button>
          </nav>
        </div>

        {/* Main Content Area */}
        <main className="max-w-3xl mx-auto px-4 pb-20">
          
          {/* RED FLAGS VIEW */}
          {activeTab === 'red' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-red-100/60 backdrop-blur-sm border border-red-200 rounded-2xl p-6 text-center mb-8">
                <h2 className="text-xl font-serif font-bold text-red-800 mb-2">Attention Danger 🚩</h2>
                <p className="text-red-700/80 text-sm">
                  Ces comportements indiquent souvent une toxicité ou une incompatibilité majeure. Si vous en reconnaissez plusieurs, prenez du recul.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {redFlags.map((flag) => (
                  <div key={flag.id} className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-red-50 text-red-600 p-2 rounded-xl group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <AlertTriangle size={20} />
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {flag.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {flag.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GREEN FLAGS VIEW */}
          {activeTab === 'green' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-green-100/60 backdrop-blur-sm border border-green-200 rounded-2xl p-6 text-center mb-8">
                <h2 className="text-xl font-serif font-bold text-green-800 mb-2">Feu Vert 🌿</h2>
                <p className="text-green-700/80 text-sm">
                  Voici à quoi ressemble une relation saine, équilibrée et respectueuse. C'est ce que vous méritez.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {greenFlags.map((flag) => (
                  <div key={flag.id} className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-green-50 text-green-600 p-2 rounded-xl group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <CheckCircle2 size={20} />
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {flag.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {flag.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

           {/* QUIZ VIEW */}
           {activeTab === 'quiz' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {!gameWon ? (
                <>
                  <div className="bg-indigo-50/60 backdrop-blur-sm border border-indigo-100 rounded-2xl p-6 text-center relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-2">
                         <h2 className="text-xl font-serif font-bold text-indigo-900 flex items-center gap-2">
                            <Gamepad2 className="text-indigo-500" />
                            Red ou Green Flag ?
                         </h2>
                         <div className="bg-white/80 px-4 py-1 rounded-full text-sm font-bold text-indigo-600 shadow-sm">
                            Score : {score} / 10
                         </div>
                      </div>
                      <p className="text-indigo-800/80 text-sm">
                        Lis la situation et devine si c'est un bon ou un mauvais signe. Atteins 10 points pour gagner un cadeau exclusif !
                      </p>
                    </div>
                  </div>

                  {/* Quiz Card */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-indigo-50 relative min-h-[300px] flex flex-col justify-center items-center text-center transition-all">
                    
                    {!showExplanation ? (
                       <div className="animate-in fade-in zoom-in duration-300">
                          <p className="text-2xl font-serif font-medium text-gray-800 mb-12 leading-relaxed">
                            "{quizQuestions[currentQuestionIndex].text}"
                          </p>
                          <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
                            <button 
                              onClick={() => handleQuizAnswer('red')}
                              className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-bold py-4 rounded-xl flex flex-col items-center gap-2 transition-all transform hover:scale-105 active:scale-95"
                            >
                              <AlertTriangle size={32} />
                              <span>Red Flag</span>
                            </button>
                            <button 
                              onClick={() => handleQuizAnswer('green')}
                              className="bg-green-50 hover:bg-green-100 border border-green-200 text-green-600 font-bold py-4 rounded-xl flex flex-col items-center gap-2 transition-all transform hover:scale-105 active:scale-95"
                            >
                              <CheckCircle2 size={32} />
                              <span>Green Flag</span>
                            </button>
                          </div>
                       </div>
                    ) : (
                      <div className="animate-in fade-in slide-in-from-bottom-8 duration-300 w-full">
                        <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                           {isCorrect ? <CheckCircle2 size={40} /> : <XCircle size={40} />}
                        </div>
                        <h3 className={`text-2xl font-bold mb-4 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          {isCorrect ? 'Bravo !' : 'Oups...'}
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                           {quizQuestions[currentQuestionIndex].explanation}
                        </p>
                        <button 
                          onClick={nextQuestion}
                          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200"
                        >
                          Question Suivante
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                // --- ECRAN DE VICTOIRE (FORMULAIRE) ---
                <div className="animate-in zoom-in duration-500">
                   <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 border border-yellow-200 shadow-xl text-center relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300"></div>
                     
                     {!prizeSubmitted ? (
                       <>
                         <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-md animate-bounce">
                           <Gift size={48} className="text-amber-500" />
                         </div>
                         <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Félicitations !</h2>
                         <p className="text-amber-800 mb-8 max-w-md mx-auto">
                           Tu as l'œil pour repérer les drapeaux ! Tu as gagné ton accès exclusif à nos ressources.
                         </p>

                         <form onSubmit={handlePrizeSubmit} className="max-w-sm mx-auto space-y-4 text-left">
                            <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Prénom</label>
                              <input 
                                required
                                type="text"
                                value={prizeForm.prenom}
                                onChange={(e) => setPrizeForm({...prizeForm, prenom: e.target.value})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-200 outline-none"
                                placeholder="Ton prénom"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nom</label>
                              <input 
                                required
                                type="text"
                                value={prizeForm.nom}
                                onChange={(e) => setPrizeForm({...prizeForm, nom: e.target.value})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-200 outline-none"
                                placeholder="Ton nom"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Insta / TikTok (Optionnel)</label>
                              <input 
                                type="text"
                                value={prizeForm.social}
                                onChange={(e) => setPrizeForm({...prizeForm, social: e.target.value})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-200 outline-none"
                                placeholder="@pseudo"
                              />
                            </div>
                            
                            <div className="bg-white p-4 rounded-xl border border-amber-100 flex items-start gap-3 mt-4">
                              <input 
                                type="checkbox" 
                                id="ebook"
                                checked={prizeForm.wantEbook}
                                onChange={(e) => setPrizeForm({...prizeForm, wantEbook: e.target.checked})}
                                className="mt-1 w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                              />
                              <label htmlFor="ebook" className="text-sm cursor-pointer select-none">
                                <span className="font-bold text-gray-800 block mb-0.5">Je veux mon cadeau 🎁</span>
                                <span className="text-gray-500">Recevoir l'Ebook gratuit "Les 10 commandements des relations modernes".</span>
                              </label>
                            </div>

                            <button 
                              type="submit"
                              className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-black transition-transform active:scale-95 mt-4"
                            >
                              Récupérer ma récompense
                            </button>
                         </form>
                       </>
                     ) : (
                       <div className="py-12 animate-in fade-in duration-500">
                          <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">C'est dans la boîte !</h3>
                          <p className="text-gray-500 max-w-xs mx-auto mb-8">
                            Tes informations ont été enregistrées. Si tu as demandé l'Ebook, il arrivera bientôt dans ta boîte mail virtuelle (simulation).
                          </p>
                          <button 
                            onClick={() => {
                              setGameWon(false);
                              setScore(0);
                              setCurrentQuestionIndex(0);
                              setPrizeSubmitted(false);
                            }}
                            className="text-amber-600 hover:text-amber-800 underline font-medium"
                          >
                            Rejouer au quiz
                          </button>
                       </div>
                     )}
                   </div>
                </div>
              )}
            </div>
           )}

          {/* QUOTES VIEW */}
          {activeTab === 'quotes' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Quote Categories Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveQuoteCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeQuoteCategory === cat.id
                        ? 'bg-violet-600 text-white shadow-md'
                        : 'bg-white/80 backdrop-blur-sm text-gray-500 border border-gray-200 hover:bg-violet-50 hover:text-violet-600'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="columns-1 md:columns-2 gap-6 space-y-6">
                <div className="break-inside-avoid bg-violet-600 text-white p-8 rounded-3xl text-center shadow-xl mb-6">
                  <QuoteIcon size={32} className="mx-auto mb-4 opacity-50" />
                  <h2 className="text-2xl font-serif italic mb-2">Mots d'Amour</h2>
                  <p className="opacity-80 text-sm">Philosophie moderne pour cœurs brisés ou épris.</p>
                </div>
                
                {filteredQuotes.map((quote) => (
                  <div key={quote.id} className="break-inside-avoid bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 relative group mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <QuoteIcon className="text-violet-100 group-hover:text-violet-200 transition-colors" size={40} />
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                        {categories.find(c => c.id === quote.category)?.label}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <p className="text-xl font-serif text-gray-800 leading-relaxed mb-6">
                        "{quote.text}"
                      </p>
                      <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
                        <div>
                          <p className="font-bold text-violet-900 text-sm">{quote.author}</p>
                          {quote.context && <p className="text-xs text-gray-400 mt-0.5">{quote.context}</p>}
                        </div>
                        <button className="text-gray-300 hover:text-violet-500 transition-colors">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredQuotes.length === 0 && (
                  <div className="col-span-full text-center py-12 text-gray-400">
                    <p>Aucune citation trouvée pour cette catégorie.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* CALENDAR VIEW */}
          {activeTab === 'calendar' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
              <div className="bg-blue-50/60 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 text-center mb-8">
                <h2 className="text-xl font-serif font-bold text-blue-900 mb-2">L'Aventure sur 10 ans 🗓️</h2>
                <p className="text-blue-800/80 text-sm">
                  Chaque année apporte son lot de défis et de joies. Cliquez sur les étapes pour découvrir les détails mois par mois et des idées d'activités.
                </p>
              </div>

              <div className="relative border-l-2 border-gray-200/50 ml-4 space-y-8 pb-12">
                {milestones.map((m) => {
                  const isOpen = expandedYear === m.id;
                  
                  return (
                    <div key={m.id} className="relative pl-8 group">
                      {/* Timeline Dot */}
                      <div className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full border-4 transition-all duration-300 z-10 ${
                        isOpen ? 'bg-blue-600 border-blue-200 scale-125' : 'bg-white border-blue-400 group-hover:border-blue-600'
                      }`}></div>
                      
                      {/* Content Card (Accordion) */}
                      <div 
                        onClick={() => toggleYear(m.id)}
                        className={`bg-white/90 backdrop-blur-sm rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                          isOpen ? 'border-blue-200 shadow-lg ring-1 ring-blue-100' : 'border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100'
                        }`}
                      >
                        {/* Card Header */}
                        <div className="p-6 flex justify-between items-start gap-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                                isOpen ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'
                              }`}>
                                Année {m.year}
                              </span>
                              <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-900' : 'text-gray-900'}`}>
                                {m.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                              {m.description}
                            </p>
                          </div>
                          <div className={`text-gray-400 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}>
                             {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </div>
                        </div>

                        {/* Card Expanded Content (Details) */}
                        <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                            <div className="p-6 pt-0 border-t border-gray-100 bg-blue-50/20">
                               <div className="space-y-6 mt-6 relative">
                                  {/* Inner Vertical Line */}
                                  <div className="absolute left-[15px] top-2 bottom-4 w-0.5 bg-blue-100"></div>

                                  {m.moments.map((moment, idx) => (
                                    <div key={idx} className="relative pl-10">
                                       {/* Inner Dot */}
                                       <div className="absolute left-[11px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-300 ring-4 ring-white"></div>
                                       
                                       <div className="mb-1 flex items-center gap-2">
                                          <Clock size={14} className="text-blue-400" />
                                          <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{moment.range}</span>
                                       </div>
                                       <h4 className="font-bold text-gray-800 mb-1">{moment.title}</h4>
                                       <p className="text-sm text-gray-600 mb-3">{moment.description}</p>
                                       
                                       <div className="bg-white rounded-lg p-3 border border-blue-100 flex gap-3 shadow-sm">
                                          <Lightbulb className="text-yellow-500 flex-shrink-0" size={18} />
                                          <p className="text-sm text-gray-700 font-medium">
                                            {moment.activity}
                                          </p>
                                       </div>
                                    </div>
                                  ))}
                               </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ANECDOTES VIEW */}
          {activeTab === 'anecdotes' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Intro Section */}
              <div className="bg-orange-50/60 backdrop-blur-sm border border-orange-100 rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl font-serif font-bold text-orange-900 mb-2">Une situation compliquée ?</h2>
                  <p className="text-orange-800/80 text-sm mb-6 max-w-md mx-auto">
                    Racontez-nous votre anecdote, vos doutes ou vos questions. Nous sélectionnons les histoires les plus marquantes pour y répondre dans le podcast.
                  </p>
                </div>
                <Mic className="absolute -bottom-6 -right-6 text-orange-100 w-40 h-40 rotate-12" />
              </div>

              {/* Form Section */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                {isSubmitted ? (
                  <div className="text-center py-12 animate-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Bien reçu !</h3>
                    <p className="text-gray-500">Merci pour ton partage. Reste à l'écoute du podcast, nous y répondrons peut-être très bientôt.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-sm text-gray-400 hover:text-gray-600 underline"
                    >
                      Envoyer une autre histoire
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative">
                    <label htmlFor="story" className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                      Ton histoire (anonyme)
                    </label>
                    <textarea
                      id="story"
                      required
                      value={anecdote}
                      onChange={(e) => setAnecdote(e.target.value)}
                      placeholder="Il m'a dit que..."
                      className="w-full h-48 p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-orange-100 focus:border-orange-300 outline-none transition-all resize-none text-gray-700 placeholder:text-gray-400"
                    ></textarea>
                    <div className="mt-4 flex justify-end">
                      <button 
                        type="submit"
                        className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
                      >
                        <span>Envoyer l'anecdote</span>
                        <Send size={18} />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Podcast Link Card */}
              <a 
                href="https://open.spotify.com/episode/7IcN8scNkybzifeAoHUpiZ?si=o8ShymRhSvaxDUOVGBZpVA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-3xl p-6 md:p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <Headphones size={32} />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold mb-1">Écouter le Podcast</h3>
                      <p className="text-white/80 text-sm">Découvrez nos réponses et analyses sur Spotify.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-bold bg-white text-black px-6 py-3 rounded-full group-hover:bg-gray-50 transition-colors">
                    <span>Écouter l'épisode</span>
                    <ExternalLink size={18} />
                  </div>
                </div>
              </a>

            </div>
          )}

        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 text-sm">
          <p>© 2024 Signal Fort. Prenez soin de votre cœur.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
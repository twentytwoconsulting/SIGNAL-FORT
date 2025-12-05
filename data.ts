import { Flag, Quote, Milestone, QuizScenario } from './types';

export const redFlags: Flag[] = [
  {
    id: 'r1',
    type: 'red',
    title: 'Le Love Bombing',
    description: "Il/Elle te couvre de cadeaux, de compliments excessifs et de déclarations d'amour dès les premiers jours pour te manipuler émotionnellement."
  },
  {
    id: 'r2',
    type: 'red',
    title: 'Le Gaslighting',
    description: "Une manipulation qui te fait douter de ta propre réalité, de ta mémoire ou de ta santé mentale. « Tu es trop sensible », « Je n'ai jamais dit ça »."
  },
  {
    id: 'r3',
    type: 'red',
    title: 'L\'Ex Omniprésent(e)',
    description: "Il/Elle compare constamment tout ce que tu fais à son ex, ou entretient une relation ambiguë et non résolue avec son passé."
  },
  {
    id: 'r4',
    type: 'red',
    title: 'L\'Isolement Progressif',
    description: "Critique subtilement tes amis et ta famille jusqu'à ce que tu te sentes coupable de passer du temps avec eux plutôt qu'avec lui/elle."
  },
  {
    id: 'r5',
    type: 'red',
    title: 'Le Traitement Silencieux',
    description: "Refuse de communiquer et t'ignore pendant des jours comme forme de punition lors d'un conflit."
  },
  {
    id: 'r6',
    type: 'red',
    title: 'Ne respecte pas le « Non »',
    description: "Insiste lourdement quand tu poses une limite, que ce soit sexuellement, émotionnellement ou sur ton emploi du temps."
  },
  {
    id: 'r7',
    type: 'red',
    title: 'Jalousie Possessive',
    description: "Exige de voir ton téléphone, tes messages, et veut savoir où tu es à chaque minute. Ce n'est pas de l'amour, c'est du contrôle."
  },
  {
    id: 'r8',
    type: 'red',
    title: 'Incohérence parole/acte',
    description: "Fait de grandes promesses sur l'avenir mais ne fait aucun effort concret dans le présent. Le « Future Faking »."
  }
];

export const greenFlags: Flag[] = [
  {
    id: 'g1',
    type: 'green',
    title: 'Communication Ouverte',
    description: "Vous pouvez parler de sujets difficiles, de vos peurs et de vos besoins sans jugement ni colère immédiate."
  },
  {
    id: 'g2',
    type: 'green',
    title: 'Respect des Limites',
    description: "Quand tu dis « non » ou « pas maintenant », l'autre l'accepte sans te faire culpabiliser ni bouder."
  },
  {
    id: 'g3',
    type: 'green',
    title: 'Responsabilité Émotionnelle',
    description: "Capable de dire « Je suis désolé, j'ai eu tort » sincèrement, et de changer son comportement ensuite."
  },
  {
    id: 'g4',
    type: 'green',
    title: 'Soutien des Passions',
    description: "T'encourage à poursuivre tes hobbies, tes projets et ta carrière, même si cela ne l'inclut pas directement."
  },
  {
    id: 'g5',
    type: 'green',
    title: 'Cohérence',
    description: "Ses actions correspondent à ses paroles. Tu ne passes pas ton temps à te demander où tu en es avec cette personne."
  },
  {
    id: 'g6',
    type: 'green',
    title: 'Indépendance Saine',
    description: "Vous avez chacun votre propre vie, vos amis et vos intérêts en dehors de la relation. Vous êtes deux entités entières."
  },
  {
    id: 'g7',
    type: 'green',
    title: 'Curiosité Sincère',
    description: "Pose des questions sur ta journée, tes sentiments et ton avis parce qu'il/elle s'intéresse vraiment à qui tu es."
  }
];

export const quotes: Quote[] = [
  {
    id: 'q1',
    text: "L'amour sain n'est pas un film de Disney. C'est du respect, du compromis, et choisir la même personne encore et encore, même les jours difficiles.",
    author: "Anonyme",
    category: "relationships"
  },
  {
    id: 'q2',
    text: "Ne cherche pas quelqu'un qui résoudra tous tes problèmes. Cherche quelqu'un qui ne te laissera pas les affronter seul.",
    author: "Sagesse Populaire",
    category: "relationships"
  },
  {
    id: 'q3',
    text: "Si ça te coûte ta paix intérieure, c'est trop cher.",
    author: "Paulo Coelho",
    context: "Sur la santé mentale",
    category: "self-love"
  },
  {
    id: 'q4',
    text: "La bonne personne te fera sentir que tu n'es pas difficile à aimer.",
    author: "Inconnu",
    category: "relationships"
  },
  {
    id: 'q5',
    text: "On accepte l'amour qu'on croit mériter.",
    author: "Stephen Chbosky",
    context: "Le Monde de Charlie",
    category: "self-love"
  },
  {
    id: 'q6',
    text: "Une âme sœur n'est pas quelqu'un qui te complète. C'est quelqu'un qui t'inspire à te compléter toi-même.",
    author: "Bianca Sparacino",
    category: "self-love"
  },
  {
    id: 'q7',
    text: "Le premier Red Flag, c'est ton intuition qui te dit que quelque chose ne va pas. Écoute-la.",
    author: "Conseil Moderne",
    category: "wisdom"
  },
  {
    id: 'q8',
    text: "Parfois, il faut oublier ce que tu ressens et te souvenir de ce que tu mérites.",
    author: "Anonyme",
    category: "breakup"
  },
  {
    id: 'q9',
    text: "Accepte ce qui est, laisse aller ce qui était, et aie confiance en ce qui sera.",
    author: "Bouddha",
    category: "wisdom"
  },
  {
    id: 'q10',
    text: "Ne laisse jamais ta solitude te faire recontacter des gens toxiques.",
    author: "Rappel Quotidien",
    category: "breakup"
  }
];

export const milestones: Milestone[] = [
  {
    id: 'm1',
    year: 1,
    title: "L'Euphorie & La Découverte",
    description: "La phase 'lune de miel'. Tout est nouveau, intense et passionnel. L'objectif est de créer un lien d'attachement sécure.",
    moments: [
      {
        range: "Mois 1-3",
        title: "La Fusion",
        description: "Les hormones tournent à plein régime. Vous voulez tout savoir de l'autre.",
        activity: "💡 Idée : Jouez aux '36 questions pour tomber amoureux' d'Arthur Aron."
      },
      {
        range: "Mois 6",
        title: "Premiers accrocs",
        description: "La réalité refait surface. Les premières petites habitudes agaçantes apparaissent.",
        activity: "📅 Idée : Premier week-end prolongé en dehors de votre ville pour tester la logistique à deux."
      },
      {
        range: "Mois 12",
        title: "Le Bilan Annuel",
        description: "Vous avez traversé les 4 saisons. Est-ce une histoire pour durer ?",
        activity: "🥂 Idée : Retournez au lieu de votre premier rendez-vous pour fêter ça."
      }
    ]
  },
  {
    id: 'm2',
    year: 2,
    title: "Construction & Réalité",
    description: "Les lunettes roses tombent définitivement. On choisit d'aimer l'autre pour qui il est vraiment, défauts inclus.",
    moments: [
      {
        range: "Mois 13-18",
        title: "Lutte de pouvoir",
        description: "Chacun tente de reprendre son autonomie. Les disputes sont normales, c'est la façon de les gérer qui compte.",
        activity: "🗣️ Idée : Instaurez une soirée 'zéro écran' par semaine pour discuter vraiment."
      },
      {
        range: "Mois 24",
        title: "L'Acceptation",
        description: "Vous connaissez ses failles. Vous restez quand même. C'est là que le véritable amour commence.",
        activity: "🎨 Idée : Lancez un petit projet commun (déco, voyage, sport) pour souder l'équipe."
      }
    ]
  },
  {
    id: 'm3',
    year: 3,
    title: "L'Ancrage Profond",
    description: "La confiance est établie. Le risque majeur ici est la routine qui s'installe trop confortablement.",
    moments: [
      {
        range: "Le quotidien",
        title: "La routine confortable",
        description: "On ne fait plus d'efforts pour séduire. Attention au mode 'colocataire'.",
        activity: "💃 Idée : Testez une activité où vous êtes tous les deux débutants (salsa, poterie, escalade)."
      },
      {
        range: "La vision",
        title: "Projets à long terme",
        description: "On parle immobilier, carrière, ou famille sérieusement.",
        activity: "🗺️ Idée : Faites un 'Vision Board' de votre couple pour les 5 prochaines années."
      }
    ]
  },
  {
    id: 'm5',
    year: 5,
    title: "La Maturité",
    description: "Le couple a une histoire. Vous avez traversé des crises. Vous êtes solides, mais avez besoin de nouveauté.",
    moments: [
      {
        range: "Stabilité",
        title: "Le danger de l'acquis",
        description: "Ne prenez jamais l'autre pour acquis. La gratitude doit être exprimée.",
        activity: "💌 Idée : Écrivez chacun 5 choses que vous admirez chez l'autre et lisez-les."
      },
      {
        range: "Renouveau",
        title: "Réinventer l'intimité",
        description: "La sexualité et l'intimité évoluent. Il faut parfois changer les scripts.",
        activity: "🌙 Idée : Une nuit à l'hôtel dans votre propre ville pour casser les codes."
      }
    ]
  },
  {
    id: 'm7',
    year: 7,
    title: "Le Cap des 7 ans",
    description: "Statistiquement une période de remise en question personnelle qui impacte le couple. On cherche du sens.",
    moments: [
      {
        range: "Introspection",
        title: "Crise de croissance",
        description: "Est-ce que je suis toujours moi-même dans ce couple ? Besoin d'air individuel.",
        activity: "🚀 Idée : Encouragez l'autre à partir un week-end seul ou avec ses amis."
      },
      {
        range: "Reconnexion",
        title: "Nouvelle alliance",
        description: "On se re-choisit consciemment pour la décennie à venir.",
        activity: "💍 Idée : Renouvelez vos vœux ou faites-vous un cadeau symbolique fort."
      }
    ]
  },
  {
    id: 'm10',
    year: 10,
    title: "L'Héritage & La Complicité",
    description: "Une décennie. Vous avez un langage secret, des souvenirs communs immenses. Vous êtes des piliers l'un pour l'autre.",
    moments: [
      {
        range: "Le Bilan",
        title: "Regarder le chemin",
        description: "Vous avez survécu aux nuits blanches, aux doutes et aux joies.",
        activity: "📸 Idée : Créez l'album photo des '10 ans' avec une photo marquante par année."
      },
      {
        range: "L'Avenir",
        title: "Vieillir ensemble",
        description: "La douceur de savoir que l'autre sera là, quoi qu'il arrive.",
        activity: "🌍 Idée : Planifiez le voyage de vos rêves, celui que vous repoussez depuis toujours."
      }
    ]
  }
];

export const quizQuestions: QuizScenario[] = [
  {
    id: 'qz1',
    text: "Lors de votre premier rencart, il parle de son ex pendant 45 minutes en disant que c'est une 'folle'.",
    answer: 'red',
    explanation: "Parler mal de ses ex est un signe classique de déresponsabilisation. C'est un Red Flag majeur."
  },
  {
    id: 'qz2',
    text: "Tu lui dis que tu es fatigué(e) et que tu veux rentrer. Il insiste : 'Allez, reste encore un peu, tu es pas drôle'.",
    answer: 'red',
    explanation: "Ne pas respecter ton 'non' ou ta fatigue est un manque de respect de tes limites."
  },
  {
    id: 'qz3',
    text: "Il t'envoie un message : 'Amuse-toi bien avec tes potes ! On se voit demain'.",
    answer: 'green',
    explanation: "Encourager l'indépendance et la vie sociale de l'autre est un excellent signe de sécurité émotionnelle."
  },
  {
    id: 'qz4',
    text: "Tu fais une erreur au volant. Il te crie dessus et t'insulte.",
    answer: 'red',
    explanation: "La violence verbale n'est jamais acceptable, même en situation de stress."
  },
  {
    id: 'qz5',
    text: "Vous vous disputez. Le lendemain, il revient, s'excuse sincèrement et propose une solution pour que ça n'arrive plus.",
    answer: 'green',
    explanation: "La capacité à prendre ses responsabilités et à réparer est la clé d'un couple qui dure."
  },
  {
    id: 'qz6',
    text: "Il regarde ton téléphone par dessus ton épaule quand tu envoies des messages.",
    answer: 'red',
    explanation: "C'est un comportement de surveillance qui indique un manque de confiance et de la jalousie."
  },
  {
    id: 'qz7',
    text: "Tu reçois une promotion au travail. Il semble indifférent ou change vite de sujet pour parler de lui.",
    answer: 'red',
    explanation: "Un partenaire sain célèbre tes victoires. L'indifférence ou la compétition est toxique."
  },
  {
    id: 'qz8',
    text: "Il te demande ton avis sur un vêtement et accepte ta critique sans se vexer.",
    answer: 'green',
    explanation: "Accepter la critique constructive montre une bonne estime de soi et une ouverture d'esprit."
  },
  {
    id: 'qz9',
    text: "Au bout de 2 semaines, il te dit : 'Je n'ai jamais aimé personne comme toi, on devrait emménager ensemble'.",
    answer: 'red',
    explanation: "C'est du Love Bombing. Brûler les étapes aussi vite est souvent une technique de manipulation."
  },
  {
    id: 'qz10',
    text: "Il a ses propres hobbies (sport, musique) et t'encourage à avoir les tiens.",
    answer: 'green',
    explanation: "L'indépendance est vitale. Un couple sain est composé de deux individus complets."
  },
  {
    id: 'qz11',
    text: "Il te fait une blague méchante en public. Quand tu te vexes, il dit : 'Tu n'as aucun humour'.",
    answer: 'red',
    explanation: "C'est du Gaslighting. Il t'humilie et te blâme ensuite pour ta réaction."
  },
  {
    id: 'qz12',
    text: "Tu te sens mal. Il t'écoute, te prend dans ses bras et te demande : 'Tu veux des conseils ou juste que j'écoute ?'.",
    answer: 'green',
    explanation: "C'est de l'empathie active. Il cherche à répondre à ton besoin émotionnel réel."
  },
  {
    id: 'qz13',
    text: "Il annule votre rendez-vous à la dernière minute pour la 3ème fois sans raison valable.",
    answer: 'red',
    explanation: "L'inconsistance est un manque de respect de ton temps et de la relation."
  },
  {
    id: 'qz14',
    text: "Il se souvient que tu avais une réunion importante et t'envoie un message pour savoir comment ça s'est passé.",
    answer: 'green',
    explanation: "Cela montre qu'il t'écoute et se soucie de ce qui se passe dans ta vie."
  },
  {
    id: 'qz15',
    text: "Tu lui dis que tu n'aimes pas sa façon de te parler. Il répond : 'C'est toi qui me pousses à bout'.",
    answer: 'red',
    explanation: "Il inverse la culpabilité pour ne pas assumer son comportement agressif."
  }
];
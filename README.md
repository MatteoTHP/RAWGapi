# RAWGapi



Project about redoing a website and learn to use sass, webpack with javascript using the RAWG API

before using :

```rpm run build```

Put your API key in the .env file in file root ! 

enjoy !









Exercise =>

Il existe 2 templates de page :

    PageList
    PageDetail

2.1.1. PageList

Le template PageList correspond à une liste de jeux affichés. L'utilisateur peut cliquer sur un des jeux pour en afficher son détail.

Sur la page d'accueil, le template PageList est utilisé. Par défaut, il montre les jeux les plus attendus qui sortiront dans l'année suivante. Une barre de recherche est disponible. L'utilisateur peut entrer un ou plusieurs mots clefs afin d'affiner sa recherche.

Durant tous ces processus, une select est disponible. Le journaliste peut trier les jeux afin d'afficher présents sur sa plateforme uniquement ceux dont il doit parler dans son article.

Le nombre maximal de jeux affichés est de 9. Un bouton "Show more" est disponible pour en afficher 9 de plus. Au bout de 2 clics dessus, donc 27 images, celui-ci disparait.

Les jeux sont affichés sous forme de cards. Par défaut, nous pouvons voir le nom et les plateformes disponibles ainsi qu'une image de présentation. Au hover de la card, on peut voir la date de sortie, l'éditeur, le(s) genre(s) du jeu, ainsi que sa note et le nombre de votes qui apparaissent à la place de l'image.

Il existe plusieurs manières afin de retourner sur cette page :

    Au clic sur le nom d'un studio de développement ou un développeur ou un éditeur, on affiche les jeux qu'il a faits
    Au clic sur le nom d'une plateforme, on affiche les jeux disponibles sur la plateforme les plus récemment sortis

2.1.2. PageDetail

Lorsqu'un utilisateur arrive sur le template PageDetail, cela signifie qu'il cherche à avoir des détails sur un jeu. Sur cette page, il pourra avoir ces détails. Si un détail n'existe pas, on ne l'affiche pas. Voici les détails :

    Le nom du jeu
    Une image principale de présentation
    La description du jeu
    La date de sortie
    Le nom du/des studio(s) de développement (lien(s) interne(s) vers le template PageList)
    Les tags correspondants au jeu (lien(s) interne(s) vers le template PageList)
    Le/Les genre(s) du jeu (lien(s) interne(s) vers le template PageList)
    Le nom de l'éditeur (lien(s) interne(s) vers le template PageList)
    Les plateformes disponibles à la sortie du jeu (lien(s) interne(s) vers le template PageList)
    Le site Web du jeu (lien externe)
    Une vidéo de présentation (Lecteur HTML 5 interne)
    La moyenne des notes
    Le nombre de notes
    Quatre screenshots du jeu
    Le/Les lien(s) pour acheter le jeu (lien(s) externe(s))
    Une liste de jeux ressemblants au jeu (lien interne vers un jeu sur PageDetail)
    Une liste de vidéos YouTube parlant du jeu (Lien externe vers YouTube)

Les maquettes sont fournies dans la dernière partie du projet.
2.2. Contraintes
SPA

Comme vu précédemment, le site doit être une SPA. La navigation se fera uniquement via l'URL. Pour trouver l'URL d'un jeu, tu utiliseras ton nom de domaine + "/game/" + le paramètre "slug" que l'on peut trouver dans l'API.

Exemple : https://api.rawg.io/api/games/3328 (slug": "yourdomain.fr/game/the-witcher-3-wild-hunt")

Pour ce qui est des URL des autres pages, libre à toi.
Design

Une touche particulière doit être apportée au design du site.

Effectivement, tu devras utiliser obligatoirement SCSS (et Bootstrap si tu le souhaites) pour réaliser ton design. Tu devras également suivre les maquettes (pas précisément au millimètre près, ne t’en fais pas, mais la forme globale doit être là (je n'ai pas placé mes éléments au hasard, le but étant de te faire travailler au maximum ton CSS/SCSS)) . Bootstrap n’est pas obligatoire (si jamais tu préfères utiliser juste SCSS ou te mettre un peu au défi, ne prends pas Bootstrap), mais SCSS est obligatoire pour toutes les choses que Boostrap ne peut pas mettre en place, par exemple les mixins ou les variables.

Une base de mobile doit être faite, mais si elle n'est pas complète, ce n'est pas grave, tu n'as pas le temps de faire un SCSS et/ou/Bootsrap complet. L'essentiel est que le site ne soit pas 100% cassé si on le regarde sur mobile.

Être développeur front-end, c'est savoir créer une architecture de site, gérer des données ou afficher des pages, mais c'est aussi savoir intégrer des pages. Quand tu auras du temps pour t'entraîner, dans le futur, essaye d'éliminer peu à peu tout ce qui peut t'aider à faire ton CSS, type bootstrap, etc.

Si tu as quelques galères avec Flexbox si jamais tu as choisi de faire ton projet sans Bootstrap, tu peux aller faire un tour sur Flexbox Froggy pour t'aider.

Quelques animations doivent être mises si jamais tu as de l'inspiration. La seule obligatoire est celle-ci : les liens internes doivent être soulignés au hover en suivant le premier exemple de ce Codepen.

📚 Liens internes/externes

Généralement sur un site Web, les liens externes sont soulignés par défaut, et les liens internes changent de couleur ou se soulignent au hover.

Au niveau de SCSS, il y a quelques obligations :

    Les couleurs, tailles de marges, typos, tailles de typos et tailles récurrentes doivent être des variables
    Au moins 2 mixins doivent être faites en choix libre. Une troisième doit permettre d'indiquer tes informations pour le mobile. Petitips:

@mixin mobile {
  @media (max-width: $mobile-width) {
    @content;
  }
}

@include mobile {
  background: red;
}

3. Rendu attendu

Le rendu attendu est un projet Webpack, en Single Page Application, incluant SASS.

Celui-ci appellera l'API RAWG. Ainsi, les journalistes ne s'y connaissant pas vraiment dans le domaine du jeu vidéo, mais devant couvrir l'événement ne seront pas perdus et pourront s'informer sur les différents jeux évoqués.

L'objectif est clair. Ils doivent avoir un aperçu des jeux les plus attendus. Lorsque durant la conférence ils entendent parler d'un nom de jeu vidéo, ils doivent pouvoir avoir plus d'information, voir des images du jeu…

Pour y accéder, ils peuvent soit :

    Le trouver sur la page d'accueil s'il est très récent, ou dans une page représentant le template PageList, si la recherche se porte à la trouvaille de ce jeu
    En tapant son nom dans la barre de recherche. Les jeux avec le même nom / contenant les mêmes mots seront affichés dans le template PageList. Il peut alors cliquer sur sa card pour l'afficher
    Le trouver en étant sur la page d'un jeu proche du jeu recherché, dans la catégorie "Jeux similaires"

Lorsqu'un développeur ou un représentant d'un studio parle de son jeu, si l'utilisateur est sur la page du jeu, il doit pouvoir cliquer sur le nom du développeur ou du studio de jeu afin de voir les jeux faits/édités par cette personne ou son studio.

Sur la page gameDetail, un journaliste peut cliquer sur un genre du jeu, un tag ou une plateforme afin d'afficher le template PageList pour l'attribut cliqué. Exemple : Le journaliste clique sur "Genre" => "Action". Il est redirigé sur le temlate PageList, avec 9 jeux d'action disponibles.

Le journaliste doit pouvoir cliquer sur un lien pour acheter le jeu afin de le voir sur une plateforme officielle, si celui-ci est sorti.

Agent 0042, la Très Hypée Progame n'attend plus que toi. Cette convention doit pouvoir se tenir efficacement, et son image ne doit pas être dégradée.

Tu as 3 jours pour réaliser le projet, en tant que freelance autonome tu es libre de t'organiser comme tu veux sur les différentes tâches de l'application. Mais voici quand même un petit plan qui peut aider :

    Jour 1 : Configuration de l'application avec webpack, router fonctionnel pour les 3 pages. Intégration de la pageList et page d'accueil.
    Jour 2 : Intégration de SCSS et respecter la maquette pour les pages du Jour 1. Commencement de la page de détail.
    Jour 3 : Page de détail complète + fonctionnalités bonus

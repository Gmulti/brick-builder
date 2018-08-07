## :us: Documentation

### Base Model

#### Functions

-   `getSettings`
-   `getSchema`
-   `getMjmlSchema`
-   `getIndex`
-   `getStylePreviewSchema`
-   `getAttributes` : Deprecated - use `.componentAttributes`
-   `getStylePreview`

## :fr: Documentation

### Base Model

Tous les modèles **MjModels** doivent hériter de cette class.
Un modèle contient toujours 3 schemas de données (certains peuvent être vides) :

-   `mjmlObject` : représentation de l'objet lorsque l'on souhaite le transformer pour du MJML
-   `schemaAttributes` : représentation de l'objet pour ses attributs MJML
-   `schemaStyle` : représentation de l'objet que vous souhaitez utiliser en tant que style "pur"

On n'est pas censé avoir besoin de récupérer `schemaAttributes`

Pour qu'un model soit disponible, il faut penser à l'ajouter à la liste des composants dans [l'index du dossier](https://github.com/Gmulti/brick-builder/tree/master/src/application/builder/models/MjModels).

#### Variables

-   `static type` : Type du modèle (obligatoire)
-   `tagName` : Tag name lors de la transformation MJML (obligatoire)
-   `defaultAttributes`: Attributs par défaut
-   `settings` : Fichier de configuration des settings du composant
-   `schema`: Schemas d'un objet (utilisé par Morpshim)

#### Fonctions

-   `getSettings` : permet de récupérer les **settings** disponible pour la configuration du composant. Ils proviennent de la `lib` settings

-   `getSchema` : récupère tous les schemas de l'objet
-   `getMjmlSchema` : récupère le schema `mjmlObject`

-   `getIndex`: crée un index unique de l'objet (utile pour un ID par exemple)
-   `getStylePreviewSchema` : récupère le schema `schemaStyle`

-   `getAttributes` : récupère les attributs d'un objet en combinant : `defaultAttributes` et `attributes`
-   `getStylePreview` : génère le **style** de l'objet en combinant son : `defaultStylesPreview` et ses `attributes`

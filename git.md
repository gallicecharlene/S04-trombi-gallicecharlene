# git

on créé un repo a notre nom et on garde la clef SSH de coter
par exemple S04-SQL-moulinetsamuel

on ouvre un terminal dans le dossier voulu sur notre VM
git clone "la clef SSH du repo du prof"
on renome notre dossier cloner avec le nom donner a notre repo (exemple: S04-SQL-moulinetsamuel)

git remote -v

on créé on new fichier .git
git init

on lui enleve puis remet un lien vers notre repo fraichement créé
git remote remove origin
git remote add origin "notre clef SSH"

on fait notre premier push
git add .
git commit -m "first commit"
git push origin main

et la on peut travailler dessu et faire des add/commit/push comme d'hab

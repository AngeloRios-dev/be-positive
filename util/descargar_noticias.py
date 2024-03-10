# Importando modulos necesarios
import json
import feedparser

# URL del feed RSS de Google News
RSS_FEED_URL = 'https://news.google.com/rss?topic=h&hl=es&gl=ES&ceid=ES:es'

# Almacernar el feed RSS
feed = feedparser.parse(RSS_FEED_URL)

# Lista para almacenar las noticias
lista_noticias = []

# Iterar sobre las entradas del feed
for noticia in feed.entries:
    noticias = {
        'Title': noticia.title,
        'Link': noticia.link,
        'pubDate': noticia.published,
        'Source': noticia.source.title
    }
    lista_noticias.append(noticias)

# Guardar la información en un archivo JSON
with open('../noticias/google_noticias.json', 'w', encoding='utf-8') as json_file:
    json.dump(lista_noticias, json_file, indent=4)

print("Información guardada en google_noticias.json")

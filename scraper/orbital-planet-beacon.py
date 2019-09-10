from typing import List, Any, Union

import requests
import datetime
from requests.utils import requote_uri
from bs4 import BeautifulSoup

# get the planet data

planets: List[Union[str, Any]] = ["Alderaan", "Yavin_IV", "Hoth", "Dagobah", "Bespin", "Endor", "Naboo", "Coruscant",
                                  "Kamino", "Geonosis",
                                  "Utapau", "Mustafar", "Kashyyyk", "Polis Massa", "Mygeeto", "Felucia",
                                  "Cato Neimoidia", "Saleucami",
                                  "Stewjon", "Eriadu", "Corellia", "Rodia", "Nal Hutta", "Dantooine", "Bestine IV",
                                  "Ord_Mantell", "unknown",
                                  "Trandosha", "Socorro", "Mon Cala", "Chandrila", "Sullust", "Toydaria", "Malastare",
                                  "Dathomir", "Ryloth",
                                  "Aleen Minor", "Vulpter", "Troiken", "Tund", "Haruun Kal", "Cerea", "Glee Anselm",
                                  "Iridonia", "Tholoth",
                                  "Iktotch", "Champala", "Mirial", "Serenno", "Concord Dawn", "Zolan", "Ojom", "Skako",
                                  "Muunilinst", "Shili",
                                  "Kalee", "Tatooine", "Jakku"]

for planet in planets:
    # url = requests.get('https://starwars.fandom.com/wiki/'.format(planet))
    url = 'https://starwars.fandom.com/wiki/' + planet
    req = requests.get(url)
    # load data into bs4
    soup = BeautifulSoup(req.text, 'html.parser')
    planet_image = soup.find('figure', {'class': 'pi-image'})
    image = planet_image.find('a')['href']
    print(image)

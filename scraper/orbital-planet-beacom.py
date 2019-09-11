# /usr/bin/python3

from typing import List
from datetime import datetime
from bs4 import BeautifulSoup
import requests
import pyfiglet

now = datetime.now()
date_time = now.strftime("%d/%m/%Y, %H:%M:%S")

ascii_banner = pyfiglet.figlet_format("StarWars Planet Beacom")
print(ascii_banner)

planets = ["Alderaan", "Yavin_IV", "Hoth", "Dagobah", "Bespin", "Endor", "Naboo", "Coruscant", "Kamino",
           "Geonosis", "Utapau", "Mustafar", "Kashyyyk", "Polis_Massa", "Mygeeto", "Felucia",
           "Cato_Neimoidia", "Saleucami", "Stewjon", "Eriadu", "Corellia", "Rodia", "Nal_Hutta", "Dantooine",
           "Bestine_IV", "Ord_Mantell", "Trandosha", "Socorro", "Mon_Cala", "Chandrila", "Sullust",
           "Toydaria", "Malastare", "Dathomir", "Ryloth", "Aleen_Minor", "Vulpter", "Troiken", "Tund",
           "Haruun_Kal", "Cerea", "Glee_Anselm", "Iridonia", "Tholoth", "Iktotch", "Champala", "Mirial",
           "Serenno", "Concord Dawn", "Zolan", "Ojom", "Skako", "Muunilinst", "Shili", "Kalee", "Tatooine",
           "Jakku"]

# get the planet data
for planet in planets:

    # url = requests.get('https://starwars.fandom.com/wiki/'.format(planet))
    url = 'https://starwars.fandom.com/wiki/' + planet
    req = requests.get(url)

    # load data into bs4
    soup = BeautifulSoup(req.text, 'html.parser')
    planet_image = soup.find('figure', {'class': 'pi-image'})
    data_image_name = planet_image.find('img').attrs
    image = planet_image.find('a')['href']
    print(data_image_name)
    # try:
    #     image = planet_image.find('a')['href']
    #     log = "requesting... "
    #     print("[" + date_time + "]" + "[" + log + "]" + "[" + image + "]")
    #     file_name = image.split('/')[-1]
    #     # r = requests.get(image, stream=True)
    #     # with open(file_name, 'wb') as f:
    #     #     for chunk in r.iter_content(chunk_size=1024 * 1024):
    #     #         if chunk:
    #     #             f.write(chunk)
    #     print("%s downloaded!\n" % planet_image)
    # except AttributeError:
    #     print("ERROR!!! Image not found...")
    #     pass

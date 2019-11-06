# /usr/bin/python3

from datetime import datetime
from bs4 import BeautifulSoup
from termcolor import colored
import requests
import pyfiglet
import json

now = datetime.now()
date_time = now.strftime("%d/%m/%Y, %H:%M:%S")

# target url to scrape
url = 'https://starwars.fandom.com/wiki/{0}'

# banner
ascii_banner = pyfiglet.figlet_format("Planet Beacom")
# print(ascii_banner)

# define assets json
assets = {'planets': []}


# Open planets json
def read_json_list():
    with open('planets.json') as json_file:
        return json.load(json_file)


# define planets array
planets = read_json_list()


def scraper(planets_array, target_url):
    for planet in planets_array:
        # loop through planets array and change url accordingly
        req = requests.get(target_url.format(planet))
        # load data into BeautifulSoup
        soup = BeautifulSoup(req.text, 'html.parser')

        try:
            planet_image = soup.find('figure', {'class': 'pi-image'})
            data_image_attrs = planet_image.find('img').attrs
            image_name = data_image_attrs['data-image-name']
        except AttributeError:
            print(colored('ERROR IN PLANET: ' + planet, 'red'))
            pass
        else:
            try:
                image_link = planet_image.find('a')['href']
                file_name = image_name.split('/')[-1].replace(" ", "_")
                r = requests.get(image_link, stream=True)
                log = "Saving... [" + date_time + "]" + "[" + file_name + "]"
                print(colored(log, 'green'))
                save_images(file_name, planet, r)
            except AttributeError:
                print(colored('ERROR!!! PlanetImages not found..: ' + planet, 'red'))
                pass


def save_images(file_name, planet, r):
    with open(file_name, 'wb') as f:
        for chunk in r.iter_content(chunk_size=1024 * 1024):
            if chunk:
                f.write(chunk)
            assets['planets'].append({'name': planet, 'path': f.name})
            with open('assets.json', 'w') as outfile:
                json.dump(assets, outfile)
                print(colored("[" + "DONE" + "]", 'blue'))


scraper(planets, url)

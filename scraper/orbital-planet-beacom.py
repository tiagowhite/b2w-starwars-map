# /usr/bin/python3
from datetime import datetime
from bs4 import BeautifulSoup
import requests
import pyfiglet
import progressbar

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

bar = progressbar.ProgressBar(max_value=progressbar.UnknownLength)

# get the planet data
for planet in planets:
    url = 'https://starwars.fandom.com/wiki/' + planet
    req = requests.get(url)
    # load data into bs4
    soup = BeautifulSoup(req.text, 'html.parser')

    try:
        planet_image = soup.find('figure', {'class': 'pi-image'})
        data_image_attrs = planet_image.find('img').attrs
        image_name = data_image_attrs['data-image-name']
    except AttributeError:
        print("CURRENT ERROR IN PLANET: " + planet)
        pass
    else:
        try:
            image_link = planet_image.find('a')['href']
            log = "requesting... "
            file_name = image_name.split('/')[-1].replace(" ", "_")
            r = requests.get(image_link, stream=True)
            print("[" + date_time + "]" + "[" + log + "]" + "[" + file_name + "]")
            with open(file_name, 'wb') as f:
                for chunk in r.iter_content(chunk_size=1024 * 1024):
                    if chunk:
                        for i in range(100):
                            f.write(chunk)
                            bar.update(i)
                    print("%s" % "[" + file_name + "]")
        except AttributeError:
            print("ERROR!!! Image not found...")
            pass

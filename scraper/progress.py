import time
import progressbar

planets = ["Alderaan", "Yavin_IV", "Hoth", "Dagobah", "Bespin", "Endor", "Naboo", "Coruscant", "Kamino",
           "Geonosis", "Utapau", "Mustafar", "Kashyyyk", "Polis_Massa", "Mygeeto", "Felucia",
           "Cato_Neimoidia", "Saleucami", "Stewjon", "Eriadu", "Corellia", "Rodia", "Nal_Hutta", "Dantooine",
           "Bestine_IV", "Ord_Mantell", "Trandosha", "Socorro", "Mon_Cala", "Chandrila", "Sullust",
           "Toydaria", "Malastare", "Dathomir", "Ryloth", "Aleen_Minor", "Vulpter", "Troiken", "Tund",
           "Haruun_Kal", "Cerea", "Glee_Anselm", "Iridonia", "Tholoth", "Iktotch", "Champala", "Mirial",
           "Serenno", "Concord Dawn", "Zolan", "Ojom", "Skako", "Muunilinst", "Shili", "Kalee", "Tatooine",
           "Jakku"]

widgets = [
    'Test: ', progressbar.Percentage(),
    ' ', progressbar.Bar(marker=progressbar.RotatingMarker()),
    ' ', progressbar.ETA(),
    ' ', progressbar.FileTransferSpeed(),
]
bar = progressbar.ProgressBar(widgets=widgets, max_value=1000).start()
for i in range(100):
    # do something
    time.sleep(0.1)
    bar.update(10 * i + 1)
    bar.finish()

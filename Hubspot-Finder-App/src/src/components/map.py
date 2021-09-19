import folium
import pandas as pd

cities = pd.read_csv('cities.csv')

my_map = folium.Map(
    location=[13.14, 16.10],
    zoom_start=2)

for _, city in cities.iterrows():
    folium.Marker(
        location=[city['latitude'], city['longitude']],
        tooltip=city['name']
    ).add_to(my_map)

my_map

my_map.save('myspots.js')
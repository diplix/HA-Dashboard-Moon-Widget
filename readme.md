# Moon Widget for HA Dashboard ([appdaemon](https://github.com/home-assistant/appdaemon))

This widget needs the [moon sensor](https://home-assistant.io/components/sensor.moon/) to be installed in [Home Assistant](https://home-assistant.io/).
Install files into the `appdaemon` conf directory and configure the moon widget like this in a `.dash` file.

```
moon:
    widget_type: moon
    title: Moon
```

If you want to translate the moon phases, you can do it with a state map. Example in German:

```
mond:
    widget_type: moon
    title: Mond
    state_map:
      "New moon": 'Neumond'
      "Waxing crescent": 'erstes Viertel'
      "First quarter": 'zunehmender Halbmond'
      "Waxing gibbous": 'zweites Viertel'
      "Full moon": 'Vollmond'
      "Waning gibbous": 'drittes Viertel'
      "Last quarter": 'abnehmender Halbmond'
      "Waning crescent": 'letztes Viertel'

```
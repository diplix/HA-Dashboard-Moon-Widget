function basemoon(widget_id, url, skin, parameters)
{
    // Will be using "self" throughout for the various flavors of "this"
    // so for consistency ...

    self = this;

    self.moon_icons =
    {
      "New moon": '&#xe02E',
      "Waxing crescent": '&#xe02F',
      "First quarter": '&#xe030',
      "Waxing gibbous": '&#xe031',
      "Full moon": '&#xe032',
      "Waning gibbous": '&#xe033',
      "Last quarter": '&#xe034',
      "Waning crescent": '&#xe035'
    };
    self.moon_text =
    {
      "New moon": 'New moon',
      "Waxing crescent": 'Waxing crescent',
      "First quarter": 'First quarter',
      "Waxing gibbous": 'Waxing gibbous',
      "Full moon": 'Full moon',
      "Waning gibbous": 'Waning gibbous',
      "Last quarter": 'Last quarter',
      "Waning crescent": 'Waning crescent'
    };

    // Initialization

    self.widget_id = widget_id;

    // Store on brightness or fallback to a default

    // Parameters may come in useful later on

    self.parameters = parameters;

    var callbacks = [];

    // Define callbacks for entities - this model allows a widget to monitor multiple entities if needed
    // Initial will be called when the dashboard loads and state has been gathered for the entity
    // Update will be called every time an update occurs for that entity

    self.OnStateAvailable = OnStateAvailable;
    self.OnStateUpdate = OnStateUpdate;
    
    //sensor.moon attribute icon: mdi:brightness-3 or value
    var monitored_entities =
    [
        {"entity": "sensor.moon", "initial": self.OnStateAvailable, "update": self.OnStateUpdate}
    ];

    // Finally, call the parent constructor to get things moving

    WidgetBase.call(self, widget_id, url, skin, parameters, monitored_entities, callbacks);

    // Function Definitions

    // The StateAvailable function will be called when
    // self.state[<entity>] has valid information for the requested entity
    // state is the initial state
    // Methods

    function OnStateUpdate(self, state)
    {
        set_view(self, state)
    }

    function OnStateAvailable(self, state)
    {
        set_view(self, state)
    }

    function set_view(self, state)
    {
        if (state.entity_id == "sensor.moon")
        {
            self.set_field(self, "moon_icon", self.moon_icons[state.state])
            if ("state_map" in self.parameters)
            {
                self.set_field(self, "state_text", self.parameters.state_map[state.state])
            }
            else
                // self.set_field(self, "state_text", self.moon_text[state.state])
                self.set_field(self, "state_text", state.state)
            }
        else
        {
            var field = state.entity_id.split(".")[1];
            self.set_field(self, field, state.state)
        }
    }
}
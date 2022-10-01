var waypoint = new Waypoint({
    element: document.getElementById('element-waypoint'),
    handler: function(direction) {
      notify(this.element.id + ' triggers at ' + this.triggerPoint)
    },
    offset: '75%'
  })